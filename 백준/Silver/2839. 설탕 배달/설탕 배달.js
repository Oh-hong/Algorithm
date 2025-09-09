const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);

function solution(n) {
  for (let five = Math.floor(n / 5); five >= 0; five--) {
    const remaining = n - five * 5;
    if (remaining % 3 === 0) {
      return five + remaining / 3;
    }
  }
  return -1;
}

console.log(solution(n));