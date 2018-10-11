/*
给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

示例 1:

输入: [1,4,3,2]

输出: 4
解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).

策略，从小到大排序，一次取两项，对比最小值，迭加
* */

/**
 * 第一种方法
 *
 * @param {number[]} nums
 * @return {number}
 */
// var arrayPairSum = function(nums) {
//   nums = nums.sort((a, b) => a - b);
//
//   let resArr = [];
//   while(nums.length > 0) {
//     resArr.push(nums.splice(0, 2))
//   }
//
//   let sum = 0;
//   resArr.map(res => { sum += Math.min(...res) });
//
//   return sum;
// };

/**
 * 改良后，一行代码
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums.sort((a, b) => a - b)
    .filter((num, i) => i % 2 === 0)
    .reduce((a, b) => a + b);
};

const t = [1,4,3,2]

console.log(arrayPairSum(t))
