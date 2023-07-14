const { readFileSync } = require('fs');

const fileBuffer = readFileSync('./counter.wasm');
const memory = new WebAssembly.Memory({ initial: 256, maximum: 256, });
const table = new WebAssembly.Table({ initial: 0, element: 'anyfunc' });

(async () => {
  const wasm = await WebAssembly.instantiate(fileBuffer, { env: { memory, table } });

  const int32View = new Uint32Array(wasm.instance.exports.memory.buffer);
  const { _Z5countv: count } = wasm.instance.exports;
  console.log(count());
  
  int32View[3] += 9;

  console.log(count());

  int32View.set([1, 1, 1, 4]);

  console.log(count());

  const index = int32View.findIndex(e => e);
})();
