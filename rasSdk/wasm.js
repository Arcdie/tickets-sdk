const content = 'IAAAABwARAA8ADgAMAAoACAAGABAAAwAFAAQAAgABAAcAAAAxAAAAKQGAAA4AAAAXAAAAIAAAAByAQAAAAAAACe1iFOJAQAApaCy+YgBAABSHEqahgEAAHQOAAAkEwAAOAcAACAAAAA0MTMwZTQ2OWZkM2EzODg4Y2YwYTEzZDlhY2E1OTczNwAAAAAgAAAANTI0MGZlZDYyNzkxMDVmZTFkZTE3ZjZhYmM4YWFjMmMAAAAAIAAAAGU1OWUwOTc5OGI1MmNlNzU0MDU2ODdiZDg2MTQ5NGNmAAAOABgABAAIAAwAEAAUAA4AAAAOAAAACAAAAPQDAADsAAAABAAAAA4AAADUAAAAxAAAALQAAACkAAAAlAAAAIQAAAB0AAAAZAAAAFQAAABEAAAANAAAACQAAAAUAAAABAAAAJ76//8EAAAAAAAAAKr6//8EAAAAAAAAALb6//8EAAAAAAAAAML6//8EAAAAAAAAAM76//8EAAAAAAAAANr6//8EAAAAAAAAAOb6//8EAAAAAAAAAPL6//8EAAAAAAAAAP76//8EAAAAAAAAAAr7//8EAAAAAAAAABb7//8EAAAAAAAAACL7//8EAAAAAAAAAC77//8EAAAAAAAAADr7//8EAAAAAAAAAA4AAADEAgAAhAIAACQCAACkAQAAVAEAABQBAAAEAQAA9AAAAOQAAADUAAAAlAAAAFQAAAAUAAAABAAAAIL7//8EAAAAAAAAAI77//8EAAAAAQAAAAQAAABo+///HAAAAAQAAAABAAAABAAAAHz7//8BAAAALAEAAAQAAABPUEVOAAAAAMr7//8EAAAAAQAAAAQAAACk+///HAAAAAQAAAABAAAABAAAALj7//8BAAAAzwEAAAQAAABPUEVOAAAAAAb8//8EAAAAAQAAAAQAAADg+///HAAAAAQAAAABAAAABAAAAPT7//8BAAAADwEAAAQAAABPUEVOAAAAAEL8//8EAAAAAAAAAE78//8EAAAAAAAAAFr8//8EAAAAAAAAAGb8//8EAAAAAAAAAHL8//8EAAAAAQAAAAQAAABM/P//HAAAAAQAAAABAAAABAAAAGD8//8AAAAAXgAAAAQAAABPUEVOAAAAAK78//8EAAAAAQAAAAQAAACI/P//LAAAAAQAAAACAAAAFAAAAAQAAACg/P//EwAAAAQAAACs/P//AAAAAEUAAAAEAAAAT1BFTgAAAAD6/P//BAAAAAEAAAAEAAAA1Pz//1wAAAAEAAAABQAAADgAAAAcAAAADAAAADgAAAAcAAAA+Pz//w0AAAAIAAAABP3//woAAAAKAAAAEP3//xMAAAAjAAAAHP3//wAAAAADAAAAKP3//xAAAAASAAAABAAAAE9QRU4AAAAAdv3//wQAAAABAAAABAAAAFD9//88AAAABAAAAAMAAAAYAAAAIAAAAAQAAABs/f//EwAAAA4AAAB4/f//AAAAAAIAAACE/f//EAAAAAMAAAAEAAAAT1BFTgAAAADS/f//BAAAAAEAAAAEAAAArP3//xwAAAAEAAAAAQAAAAQAAADA/f//AgAAACAAAAAEAAAAT1BFTgAAAAAO/v//BAAAAAEAAAAEAAAA6P3//xwAAAAEAAAAAQAAAAQAAAD8/f//AgAAAAEAAAAEAAAAT1BFTgAAAAAOAAAAuAEAAIgBAABcAQAAMAEAAAQBAADYAAAAyAAAALgAAACoAAAAmAAAAGwAAABAAAAAFAAAAAQAAACG/v//BAAAAAAAAACS/v//BAAAAAEAAAAEAAAAbP7//wgAAAAsAQAABAAAAE9QRU4AAAAAuv7//wQAAAABAAAABAAAAJT+//8IAAAAzwEAAAQAAABPUEVOAAAAAOL+//8EAAAAAQAAAAQAAAC8/v//CAAAAA8BAAAEAAAAT1BFTgAAAAAK////BAAAAAAAAAAW////BAAAAAAAAAAi////BAAAAAAAAAAu////BAAAAAAAAAA6////BAAAAAEAAAAEAAAAFP///wgAAABeAAAABAAAAE9QRU4AAAAAYv///wQAAAABAAAABAAAADz///8IAAAASQAAAAQAAABPUEVOAAAAAIr///8EAAAAAQAAAAQAAABk////CAAAAEoAAAAEAAAAT1BFTgAAAACy////BAAAAAEAAAAEAAAAjP///wgAAAATAAAABAAAAE9QRU4AAAAA2v///wQAAAABAAAABAAAALT///8IAAAAIAAAAAQAAABPUEVOAAAGAAgABAAGAAAABAAAAAEAAAAEAAAA4P///wgAAAABAAAABAAAAE9QRU4AAAAAAQAAAAwAAAAIAAwABAAIAAgAAACsAAAABAAAAJ8AAAA7MAAAAQAAJAElADUAAACUAAEAogADAKgABwC0ABEA1AAAANkAAADlAAAAVAEBALQBAQC4AQsAxgEHANUBAADdAQQALgILAEMCCQBRAgAAZgIBAJoCDwCtAhQAxgIDANICAwD6Ag8AKAMIADMDDgBkAxUAswMAAMgDBQDhAwAA8AMMAAoEEQA+BAcASAQLAFgEGwCgBAAApQQDAKsEAgAABAAAAE9QRU4AAAAAEAAAADBGMDA1RTVDRDRGQzJGNDcAAAAA';

const { readFileSync } = require('fs');

const fileBuffer = readFileSync('./sdk_v3.wasm');

const memory = new WebAssembly.Memory({
  initial: 16777216 / 65536,
  maximum: 32768,
});

const table = new WebAssembly.Table({
  initial: 0,
  maximum: 0,
  element: 'anyfunc',
});

const settings = {
  memory: memory,
  env: {
    b: function (t, e, r, n) {},
    // __memory_base: 1024,
    // __table_base: 0,
    f: () => 0,
    g: function (t, e, r) {
      // v.copyWithin(t, e, e + r);
    },
    e: function (t) {
      /*
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
      */
    },
    d: function (t, e) {
      // return 32 == (t = q(t)) && (t += q(e)), (d = 0), 0 | t;
    },
    a: function () {
      // return d;
    },
    c: function (t) {
      // d = t;
    },
    table: table,
    memory: memory,
  },
  global: {
    NaN: NaN,
    Infinity: Infinity,
  },
  'global.Math': Math,
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

const asTypedArray = (buffer, byteOffset, length) =>
  new Uint8Array(buffer, byteOffset, length);

const getBuffer = () => {
  const buffer = new Uint8Array(Buffer.from(content, 'base64'));
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

(async () => {
  const wasm = await WebAssembly.instantiate(fileBuffer, settings);

  const buffer = getBuffer();
  const int8View = new Uint8Array(wasm.instance.exports.memory.buffer);
  int8View.set(buffer, 5247168, 159);

  const func = wasm.instance.exports.R;
  func(5247096, 5247520);

  console.log(asTypedArray(wasm.instance.exports.memory.buffer, 5247520, 293));
})();
