import fs from 'fs';
import path from 'path';
import { getUserAgent } from '../libs/jsdom';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';

import { IManifest } from './manifest.interface';
import { EFunctionKey } from './functionKey.enum';

const wasmFileBuffer = fs.readFileSync(path.resolve(__dirname, './roar-0.8.1.wasm'));

// for debugging
const getCompareFolder = () => path.resolve(__dirname, '../forComparing');

const getWebAssemblyMemory = () => new WebAssembly.Memory({
  initial: 256,
  maximum: 256,
});

const getWebAssemblySettings = (memory: WebAssembly.Memory) => ({
  env: {
    memory,
    b: () => {},
    d: () => {},
    a: () => {},
    c: () => {},
    e: () => {},
    f: () => { return new Uint8Array(memory.buffer).length; },
    g: function (t: number, e: number, r: number) {
      new Uint8Array(memory.buffer).copyWithin(t, e, e + r);
    },
  },
  global: {
    NaN: NaN,
    Infinity: Infinity,
  },
});

const readUint16 = (buffer: Uint8Array, index: number) =>
  buffer[index] | (buffer[index + 1] << 8);

const readInt16 = (buffer: Uint8Array, index: number) =>
  (readUint16(buffer, index) << 16) >> 16;

const readInt32 = (buffer: Uint8Array, index: number) =>
  buffer[index] | (buffer[index + 1] << 8) | (buffer[index + 2] << 16) | (buffer[index + 3] << 24);

const offset = (buffer: Uint8Array, position: number, offsetValue: number) => {
  const r = position - readInt32(buffer, position);
  return offsetValue < readInt16(buffer, r) ? readInt16(buffer, r + offsetValue) : 0;
};

const vector = (buffer: Uint8Array, value: number) =>
  value + readInt32(buffer, value) + 4;

const vectorLen = (buffer: Uint8Array, value: number) =>
  readInt32(buffer, value + readInt32(buffer, value));

const indirect = (buffer: Uint8Array, value: number) =>
  value + readInt32(buffer, value);

const getContentBuffer = (content: string) =>
  new Uint8Array(Buffer.from(content, 'base64'));

const areSeatsEmpty = (buffer: Uint8Array) => {
  const position = readInt32(buffer, 0);
  const t = offset(buffer, position, 24);
  return !Boolean(t ? vectorLen(buffer, position + t) : 0);
};

const getBitmapArray = (buffer: Uint8Array) => {
  let position = readInt32(buffer, 0);

  let o = offset(buffer, position, 24);
  const v = vector(buffer, position + o);
  const i = indirect(buffer, v + 4 * 0);

  position = i;

  o = offset(buffer, position, 6);
  
  return new Uint8Array(
    buffer.buffer,
    vector(buffer, position + o),
    vectorLen(buffer, position + o),
  );
};

const getFunctionsMapper = (wasm: WebAssembly.WebAssemblyInstantiatedSource) =>
  new Map<EFunctionKey, CallableFunction>([
    [EFunctionKey.free, wasm.instance.exports.h as CallableFunction],
    [EFunctionKey.malloc, wasm.instance.exports.j as CallableFunction],
    [EFunctionKey.roaringBitmapCreateJs, wasm.instance.exports.s as CallableFunction],
    [EFunctionKey.roaringBitmapToUint32Array, wasm.instance.exports.R as CallableFunction],
    [EFunctionKey.roaringBitmapGetCardinality, wasm.instance.exports.w as CallableFunction],
    [EFunctionKey.roaringBitmapPortableDeserializeJs, wasm.instance.exports.K as CallableFunction],
  ]);

const getAvailableSeats = async (content: string, wasmScript: BufferSource) => {
  const wasmMemory = getWebAssemblyMemory();
  const wasm = await WebAssembly.instantiate(wasmScript, getWebAssemblySettings(wasmMemory));

  const contentBuffer = getContentBuffer(content);

  if (areSeatsEmpty(contentBuffer)) {
    return [];
  }

  const bitmapArrayBuffer = getBitmapArray(contentBuffer);
  const lBitmapArray = bitmapArrayBuffer.length;

  const int32 = new Int32Array(wasmMemory.buffer);

  int32[1e3] = 5247088;

  const functionsMapper = getFunctionsMapper(wasm);

  const resultRoaringBitmapCreateJs = functionsMapper.get(EFunctionKey.roaringBitmapCreateJs)!(0);
  const resultMalloc = functionsMapper.get(EFunctionKey.malloc)!(lBitmapArray);

  const uint8 = new Uint8Array(wasmMemory.buffer);
  uint8.set(bitmapArrayBuffer, resultMalloc);

  functionsMapper.get(EFunctionKey.roaringBitmapPortableDeserializeJs)!(resultRoaringBitmapCreateJs, resultMalloc, lBitmapArray);
  functionsMapper.get(EFunctionKey.free)!(resultMalloc);

  const resultRoaringBitmapGetCardinality = functionsMapper.get(EFunctionKey.roaringBitmapGetCardinality)!(resultRoaringBitmapCreateJs);
  const resultMalloc2 = functionsMapper.get(EFunctionKey.malloc)!(4 * resultRoaringBitmapGetCardinality);
  functionsMapper.get(EFunctionKey.roaringBitmapToUint32Array)!(resultRoaringBitmapCreateJs, resultMalloc2);

  const uint32 = new Uint32Array(resultRoaringBitmapGetCardinality);
  uint32.set(new Uint32Array(wasmMemory.buffer, resultMalloc2, resultRoaringBitmapGetCardinality));

  functionsMapper.get(EFunctionKey.free)!(resultMalloc2);

  return uint32;
};

export const getAvailablePlaceIds = async (eventId: string, bufferContent: string) => {
  const fetch = fetchLocal({
    userAgent: getUserAgent(),
    proxyAgent: getProxyAgent(),
  });

  // const wasmScript = wasmFileBuffer;
  const manifest: IManifest = await (await fetch(`https://pubapi.ticketmaster.com/sdk/static/manifest/v1/${eventId}`)).json();
  const wasmScript: BufferSource = await (await fetch('https://pubapi.ticketmaster.com/sdk/static/wasm/roar-0.8.1.wasm')).arrayBuffer();
  
  const availableSeats = await getAvailableSeats(bufferContent, wasmScript);
  fs.writeFileSync(`${getCompareFolder()}/availableSeats2.json`, JSON.stringify(availableSeats));
  console.log('availableSeats', availableSeats);

  const availablePlaceIds = !availableSeats.length
  ? [] : Array.from(availableSeats).map(e => manifest.placeIds[e]);

  fs.writeFileSync(`${getCompareFolder()}/availablePlaceIds2.json`, JSON.stringify(availablePlaceIds));

  return availablePlaceIds;
};

export const compare = () => {
  const compareFolder = getCompareFolder();

  let availableSeats1 = [];

  try {
    availableSeats1 = JSON.parse(fs.readFileSync(`${compareFolder}/availableSeats1.json`).toString());
  } catch (err) {}

  const availableSeats2 = JSON.parse(fs.readFileSync(`${compareFolder}/availableSeats2.json`).toString());  

  for (let i = 0; i < availableSeats1.length; i += 1) {
    if (availableSeats1[i] !== availableSeats2[i]) {
      console.log(i, availableSeats1[i], availableSeats2[i]);
      throw new Error('availableSeats are not equal');
    }
  }

  const availablePlaceIds1 = JSON.parse(fs.readFileSync(`${compareFolder}/availablePlaceIds1.json`).toString());
  const availablePlaceIds2 = JSON.parse(fs.readFileSync(`${compareFolder}/availablePlaceIds2.json`).toString());

  for (let i = 0; i < availablePlaceIds1.length; i += 1) {
    if (availablePlaceIds1[i] !== availablePlaceIds2[i]) {
      console.log(i, availablePlaceIds1[i], availablePlaceIds2[i]);
      throw new Error('availablePlaceIds are not equal');
    }
  }

  for (const file of fs.readdirSync(compareFolder)) {
    fs.unlinkSync(path.join(compareFolder, file));
  }

  console.log('Successful comparing');
}
