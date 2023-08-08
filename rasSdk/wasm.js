const fs = require('fs');
const path = require('path');

const manifest = JSON.parse(fs.readFileSync('./manifest.json'));
const fileBuffer = fs.readFileSync(path.resolve(__dirname, '../pRasSdk/roar-0.8.1.wasm'));
// const resultBuffer = Object.values(JSON.parse(fs.readFileSync('../resultBuffer.json')));

const content = fs.readFileSync('./availabilityBuffer.txt', 'utf8');

const memory = new WebAssembly.Memory({
  initial: 256,
  maximum: 256,
});

const table = new WebAssembly.Table({
  initial: 0,
  maximum: 0,
  element: 'anyfunc',
});

const v = new Uint8Array(memory.buffer);

function Q() {
  return v.length;
}

const settings = {
  // memory: memory,
  env: {
    b: function (t, e, r, n) {
      console.log('b');
    },
    __memory_base: 1024,
    __table_base: 0,
    f: () => {
      console.log('f');
      return Q();
    },
    g: function (t, e, r) {
      console.log('g');
      // v.copyWithin(t, e, e + r);
    },
    e: function (t) {
      console.log('e');

      t >>>= 0;
      var e = Q();
      if (2147483648 < t) return !1;
      for (var r = 1; 4 >= r; r *= 2) {
        var n = e * (1 + 0.2 / r);
        (n = Math.min(n, t + 100663296)),
          0 < (n = Math.max(16777216, t, n)) % 65536 && (n += 65536 - (n % 65536));
        t: {
          try {
            b.grow((Math.min(2147483648, n) - y.byteLength + 65535) >>> 16), S(b.buffer);
            var i = 1;
            break t;
          } catch (t) { }
          i = void 0;
        }
        if (i) return !0;
      }
      return !1;
    },
    d: function (t, e) {
      console.log('d');
    },
    a: function () {
      console.log('a');
    },
    c: function (t) {
      console.log('c');
    },
    table: table,
    memory: memory,
  },
  global: {
    NaN: NaN,
    Infinity: Infinity,
  },
  // 'global.Math': Math,
  asm2wasm: {
    'f64-rem': function (t, e) {
      return t % e;
    },
    debugger: function () { },
  },
};

const readUint16 = (buffer, index) =>
  buffer[index] | (buffer[index + 1] << 8);

const readInt16 = (buffer, index) =>
  (readUint16(buffer, index) << 16) >> 16;

const readInt32 = (buffer, index) =>
  buffer[index] | (buffer[index + 1] << 8) | (buffer[index + 2] << 16) | (buffer[index + 3] << 24);

const offset = (buffer, position, offsetValue) => {
  const r = position - readInt32(buffer, position);
  return offsetValue < readInt16(buffer, r) ? readInt16(buffer, r + offsetValue) : 0;
};

const vector = (buffer, value) =>
  value + readInt32(buffer, value) + 4;

const vectorLen = (buffer, value) =>
  readInt32(buffer, value + readInt32(buffer, value));

const indirect = (buffer, value) =>
  value + readInt32(buffer, value);

const getContentBuffer = () => new Uint8Array(Buffer.from(content, 'base64'));

const getBitmapArray = () => {
  const buffer = getContentBuffer();
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

const getAvailableSeats = async () => {
  const wasm = await WebAssembly.instantiate(fileBuffer, settings);

  const buffer = getBitmapArray();
  const lBitmapArray = buffer.length; // 131

  const int32 = new Int32Array(memory.buffer);

  // console.log('buffer', buffer);

  int32[1e3] = 5247088;
  
  // console.log('i', wasm.instance.exports.i(0)); // 24

  const resultRoaringBitmapCreateJs = wasm.instance.exports.s(0);
  console.log('s', resultRoaringBitmapCreateJs); // 5247096

  const filtered = new Int32Array(memory.buffer).filter(myVar => myVar);
  fs.writeFileSync(path.resolve(__dirname, './resultBuffer2.json'), JSON.stringify(filtered));

  const resultMalloc = wasm.instance.exports.j(lBitmapArray);
  console.log('j', resultMalloc); // 5247168

  const uint8 = new Uint8Array(memory.buffer);
  uint8.set(buffer, resultMalloc);

  const resultRoaringBitmapPortableDeserializeJs = wasm.instance.exports.K(
    resultRoaringBitmapCreateJs,
    resultMalloc,
    lBitmapArray,
  );
  console.log('K', resultRoaringBitmapPortableDeserializeJs); // 0

  const resultFree = wasm.instance.exports.h(resultMalloc);
  console.log('h', resultFree); // undefined

  const resultRoaringBitmapGetCardinality = wasm.instance.exports.w(resultRoaringBitmapCreateJs);
  console.log('w', resultRoaringBitmapGetCardinality); // 202

  const resultMalloc2 = wasm.instance.exports.j(4 * resultRoaringBitmapGetCardinality);
  console.log('j', resultMalloc2); // 5247464

  const resultRoaringBitmapToUint32Array = wasm.instance.exports.R(resultRoaringBitmapCreateJs, resultMalloc2);
  console.log('R', resultRoaringBitmapToUint32Array); // undefined

  const uint32 = new Uint32Array(resultRoaringBitmapGetCardinality);
  uint32.set(new Uint32Array(memory.buffer, resultMalloc2, resultRoaringBitmapGetCardinality));

  const resultFree2 = wasm.instance.exports.h(resultMalloc2);
  console.log('h', resultFree2);

  console.log('uint32', uint32);

  /*
  const resultBuffer2 = Object.values(int32.filter(e => e));
  for (let i = 0; i < resultBuffer.length; i += 1) {
    if (resultBuffer[i] !== resultBuffer2[i]) {
      console.log(i, resultBuffer[i], resultBuffer2[i]);
    }
  }
  // */

  return uint32;
};

const tmp = async () => {
  const contentBuffer = getContentBuffer();
  const availableSeats = await getAvailableSeats();

  let o = offset(contentBuffer, 32, 26);
  let position = indirect(contentBuffer, 32 + o);

  o = offset(contentBuffer, position, 4);
  const numSections = o ? readInt32(contentBuffer, position + o) : 0;

  o = offset(contentBuffer, position, 6);
  const numGASections = o ? readInt32(contentBuffer, position + o) : 0;

  const numAvailableSeats = availableSeats.length;

  const e = manifest.manifestSections.filter(t => t.ga);
  if (!e.length) return [];

  let r = 0;
  let n = e[0].numSeats;

  const arr = Array.from(
    { length: manifest.placeIds.length },
    (t, i) => (0 !== i && i === n && (n += e[++r].numSeats), e[r].name),
  );

  const a = new Set(availableSeats);
  
  return Array.from(availableSeats).map(e => manifest.placeIds[e]);
};

tmp()
  .then(res => {
    console.log('res', res);
  });
// getAvailableSeats();
