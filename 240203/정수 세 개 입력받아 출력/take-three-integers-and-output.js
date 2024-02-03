const fs = require('fs');
const inputData = fs.readFileSync('/dev/stdin').toString().split(/\r?\n/)
// const first = inpuData[0].split(" ")
//.split(' ').map(value=>+value);

// const [ ] = inputData 
console.log(inputData[0]+" "+ inputData[1])