import fs from 'fs';

// const resultBuffer = JSON.parse(fs.readFileSync('./resultBuffer.json').toString()).data;
const resultBuffer = Object.values(JSON.parse(fs.readFileSync('./resultBuffer.json').toString()));
const resultBuffer2 = Object.values(JSON.parse(fs.readFileSync('./resultBuffer2.json').toString()));

console.log('resultBuffer.length', resultBuffer.length);
console.log('resultBuffer2.length', resultBuffer2.length);

for (let i = 0; i < resultBuffer.length; i += 1) {
  if (resultBuffer[i] !== resultBuffer2[i]) {
    console.log(i, resultBuffer[i], resultBuffer2[i]);
  }
}

console.log('done');


/*
https://www.diffchecker.com/text-compare/
const divider = 55;
nI = Math.ceil(str1.length / divider);

arr = [];
let prevValue = 0;
for (let i = 0; i < nI; i += 1) {
    const nextValue = prevValue + divider;
    arr.push(str2.slice(prevValue, nextValue));
    prevValue = nextValue;
}

arr.join('&');
*/