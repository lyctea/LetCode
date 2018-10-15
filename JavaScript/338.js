/*
题目描述：
给定一个非负的整数num。对每一个位于0和num之间的数字（包括0和num）输出他们二进制形式中1的个数。

例子：
输入：5，返回[0,1,1,2,1,2]。
* */

/**
 * @param {number} num
 * @return {number[]}
 */
// var countBits = function (num) {
//   if (!(num > 0)) return [0];
//
//   return new Array(num + 1).fill(0).map((val, i) => i).map(c => c.toString(2).split('').filter(bit => bit === '1').length);
// };

var countBits = function (num) {
  if (num === 0) return [0];
  if (num === 1) return [0, 1];
  
  let result = [0, 1];
  
  for (let i = 2; i <= num; i++) {
    if (i % 2 === 0) {
      result.push(result[Math.floor(i / 2)]);
    }
    else
      result.push(result[i - 1] + 1);
  }
  
  return result;
};

console.log(countBits(5));
