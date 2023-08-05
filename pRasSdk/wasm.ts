import { getUserAgent } from '../libs/jsdom';
import { fetchLocal } from '../libs/nodeFetch';
import { getProxyAgent } from '../libs/proxyAgent';

const memory = new WebAssembly.Memory({
  initial: 256,
  maximum: 256,
});

const getWebAssemblySettings = () => ({
  env: {
    memory: memory,
    b: () => {},
    g: () => {},
    d: () => {},
    a: () => {},
    c: () => {},
    e: () => {},
    f: () => { return new Uint8Array(memory.buffer).length; },
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

const getBitmapArray = (content: string) => {
  const buffer = getContentBuffer(content);
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

const getAvailableSeats = async (bufferContent: string, wasmScript: BufferSource) => {
  const wasm = await WebAssembly.instantiate(wasmScript, getWebAssemblySettings());

  const buffer = getBitmapArray(bufferContent);
  const lBitmapArray = buffer.length;

  const int32 = new Int32Array(memory.buffer);

  int32[1e3] = 5247088;

  const resultRoaringBitmapCreateJs = (wasm.instance.exports.s as CallableFunction)(0);
  const resultMalloc = (wasm.instance.exports.j as CallableFunction)(lBitmapArray);

  const uint8 = new Uint8Array(memory.buffer);
  uint8.set(buffer, resultMalloc);

  (wasm.instance.exports.K as CallableFunction)(resultRoaringBitmapCreateJs, resultMalloc, lBitmapArray);
  (wasm.instance.exports.h  as CallableFunction)(resultMalloc);
  const resultRoaringBitmapGetCardinality = (wasm.instance.exports.w as CallableFunction)(resultRoaringBitmapCreateJs);
  const resultMalloc2 = (wasm.instance.exports.j as CallableFunction)(4 * resultRoaringBitmapGetCardinality);
  (wasm.instance.exports.R as CallableFunction)(resultRoaringBitmapCreateJs, resultMalloc2);

  const uint32 = new Uint32Array(resultRoaringBitmapGetCardinality);
  uint32.set(new Uint32Array(memory.buffer, resultMalloc2, resultRoaringBitmapGetCardinality));

  (wasm.instance.exports.h as CallableFunction)(resultMalloc2);

  return uint32;
};

export const getAvailablePlaceIds = async (eventId: string, bufferContent: string) => {
  const fetch = fetchLocal({
    userAgent: getUserAgent(),
    proxyAgent: getProxyAgent(),
  });

  const manifest: any = await (await fetch(`https://pubapi.ticketmaster.com/sdk/static/manifest/v1/${eventId}`)).json();
  const wasmScript: BufferSource = await (await fetch('https://pubapi.ticketmaster.com/sdk/static/wasm/roar-0.8.1.wasm')).arrayBuffer();
  
  const availableSeats = await getAvailableSeats(bufferContent, wasmScript);
  console.log('availableSeats', availableSeats);
  return Array.from(availableSeats).map(e => manifest.placeIds[e]);
};
