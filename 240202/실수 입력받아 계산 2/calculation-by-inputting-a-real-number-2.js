const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value=>+value);

let a = parseFloat(inputData);
a += 1.5
console.log(a.toFixed(2))