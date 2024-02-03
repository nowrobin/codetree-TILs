const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(' ').map(value=>+value);

const [a, b] = inputData
const sum = a+ b

console.log(a + " "+ b + " " + sum )