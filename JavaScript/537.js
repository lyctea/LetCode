/*
给定两个表示复数的字符串。

返回表示它们乘积的字符串。注意，根据定义 i2 = -1 。

公式：
(a+bi)(c+di)=(ac-bd)+(bc+ad)i

示例 1:

输入: "1+1i", "1+1i"
输出: "0+2i"
解释: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i ，你需要将它转换为 0+2i 的形式。
示例 2:

输入: "1+-1i", "1+-1i"
输出: "0+-2i"
解释: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i ，你需要将它转换为 0+-2i 的形式。
注意:
* */

/**
 * 去掉i
 * @param str
 * @returns {number[]}
 */
const matchVars = (str) => str.slice(0, -1).split('+').map(n => Number.parseInt(n, 10));

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (a, b) {
  const [arl, aim] = matchVars(a);
  const [brl, bim] = matchVars(b);
  
  // 公式：(a+bi)(c+di)=(ac-bd)+(bc+ad)i
  const [r, i] = [arl * brl - aim * bim, arl * bim + aim * brl];
  
  return `${r}+${i}i`;
};

console.log(complexNumberMultiply('1+-1i', '1+-1i'));
