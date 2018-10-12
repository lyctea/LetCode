/*
翻转矩阵：

  [1,2,3]
  [4,5,6]
  [7,8,9]
  
  1 4 7
  2 5 8
  3 6 9
*/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
  return A[0].map((col, i) => A.map(row => row[i]));
};

const t = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

console.log(transpose(t));
