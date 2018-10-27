/*
给定两个整数L和R，找到在范围[L, R]中二进制表示中1的个数为素数的所有整数数量。

比如，21表示成二进制为10101，有3个1，是素数。

当然，1不是素数。

例子1：

输入: L = 6, R = 10

输出: 4

解释:

6 -> 110 (2个1, 2是素数)

7 -> 111 (3个1, 3是素数)

9 -> 1001 (2个1 , 2是素数)

10->1010 (2个1, 2是素数)
* */

/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let primeCount = 0;
  
  for (let i = L; i <= R; i++) {
    let bits = i.toString(2).split('').filter(bit => bit === '1').length;
    if (isPrime(bits)) {
      primeCount++;
    }
  }
  
  return primeCount;
};

function isPrime (num) {
  if (num < 2) return false;
  let len = Math.floor(num / 2);
  while (len > 1) {
    if (num % len === 0) return false;
    len--;
  }
  return true;
}

console.log(countPrimeSetBits(824, 888));
