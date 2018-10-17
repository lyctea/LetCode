/*
给定一个字符串S，和一个字符C。求出S中每个字符到最近的字符C的距离。

例子：

输入: S = "loveleetcode", C = 'e'
输出: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
* */

/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let distances = [];
  // Calc left
  let CPointer = -1;
  for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) === C) CPointer = i;
    if (CPointer < 0) {
      distances.push(S.length);
    } else {
      distances.push(i - CPointer);
    }
  }
  
  // Calc right
  CPointer = -1;
  for (let i = S.length - 1; i >= 0; i--) {
    if (S.charAt(i) === C) CPointer = i;
    if (CPointer >= 0) {
      distances[i] = Math.min(distances[i], CPointer - i);
    }
  }
  
  return distances;
};

const S = 'loveleetcode';
const C = 'e';

console.log(shortestToChar(S, C));
