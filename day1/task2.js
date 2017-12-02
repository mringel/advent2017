var input = require('./input.js').split('');
var answer = 0;
var inputLength = input.length

input.forEach((num, idx) => {
  if (num === input[(idx + (inputLength/2))%inputLength]) answer += +num;
});

console.log(answer);
