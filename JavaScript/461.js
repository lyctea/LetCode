/*
两个整数之间的汉明距离指的是这两个数字对应二进制位不同的位置的数目。

给出两个整数 x 和 y，计算它们之间的汉明距离。

注意：
0 ≤ x, y < 231.

示例:

输入: x = 1, y = 4

输出: 2

解释:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

上面的箭头指出了对应二进制位不同的位置。
 */

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  // 转成2进制数
  let xBin = x.toString(2);
  let yBin = y.toString(2);
  let hDiff = 0;
  
  // 长度不足前面补零
  while (xBin.length < 32 || xBin.length < yBin.length) {
    xBin = '0' + xBin;
  }
  
  while (yBin.length < 32 || yBin.length < xBin.length) {
    yBin = '0' + yBin;
  }
  
  for (let i = 0; i < xBin.length; i++) {
    if (xBin[i] !== yBin[i]) {
      hDiff++;
    }
  }
  
  return hDiff;
};

const x = 1;
const y = 4;

console.log(hammingDistance(x, y));
