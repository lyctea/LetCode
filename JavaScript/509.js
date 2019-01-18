/**
 *
 The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
 
 F(0) = 0,   F(1) = 1
 F(N) = F(N - 1) + F(N - 2), for N > 1.
 Given N, calculate F(N).
 
 斐波那契 数列求和
 
 */

/**
 * 第一种方法用递归
 * @param N
 * @returns {number}
 */
var fib = function (N) {
  return N === 0 || N === 1 ? N : fib(N - 1) + fib(N - 2);
};
