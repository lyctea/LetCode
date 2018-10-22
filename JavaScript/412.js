/**
 * 能被3整除Fizz
 * 能被5整除Buzz
 * 同时被3、5证书FizzBuzz
 *
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 !== 0) {
      result.push('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
      result.push('Buzz');
    } else if (i % 5 === 0 && i % 3 === 0) {
      result.push('FizzBuzz');
    } else {
      result.push(`${i}`);
    }
  }
  
  return result;
};

console.log(fizzBuzz(20));
