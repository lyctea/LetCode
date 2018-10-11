/*
自除数 是指可以被它包含的每一位数除尽的数。

例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

还有，自除数不允许包含 0 。

给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

示例 1：

输入：
上边界left = 1, 下边界right = 22
输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
注意：

每个输入参数的边界满足 1 <= left <= right <= 10000。
* */

/**
 * 方法一
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
// var selfDividingNumbers = function (left, right) {
//   let result = [];
//
//   for (let i = left; i <= right; i++) {
//     let flag = false;
//     let divArr = i.toString().split('');
//
//     while (divArr.length > 0) {
//       if (i % divArr.splice(0, 1) !== 0) {
//         flag = true;
//       }
//     }
//
//     if (!flag) {
//       result.push(i);
//     }
//   }
//
//   return result;
// };

/**
 * 找到满足条件的数
 * @param num
 * @returns {boolean}
 */
isSelfDividingNumber = (num) => {
  return num.toString()
    .split('')
    .map(Number)  // 将字符串数组转成数值数组
    .map(digit => digit !== 0 && num % digit === 0)  // 将数组中每一位用 Boolean 类型类代替
    .reduce((acc, val) => acc && val); // 当每一位数字都满足条件时 🔙
};

/**
 * ES6 实现
 * @param left
 * @param right
 * @returns {Array}
 */
var selfDividingNumbers = function (left, right) {
  return new Array(right - left + 1)
    .fill(0)
    .map((val, index) => left + index)
    .filter((val) => isSelfDividingNumber(val));
};

console.log(selfDividingNumbers(1, 22));
