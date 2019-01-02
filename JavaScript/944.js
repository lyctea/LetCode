/*
* 有N个只包含小写字母的长度相同的字符串。把它们从上到下排成一个矩阵，
* 从中删除一些列，使得剩下的列都是从上到下非降序的。问最少删除几列。
*
* 大白话：判断每一列是否是降序，不是就计数+1
* */

/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function (A) {
  let count = 0;
  for (let i = 0; i < A[0].length; i++) {
    let m = 0;
    for (let j = 0; j < A.length - 1; j++) {
      if (A[j].charCodeAt(i) > A[j + 1].charCodeAt(i)) {
        m++;
      }
    }
    if (m !== 0) {
      count++;
    }
  }
  return count;
};

const input = ['cba', 'daf', 'ghi'];
console.log(minDeletionSize(input));
