/*
给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

注意:

给定的整数保证在32位带符号整数的范围内。
你可以假定二进制数不包含前导零位。
示例 1:

输入: 5
输出: 2
解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
* */

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const complement = num.toString(2).split('').map(bit => bit ^ 1).join('');
  return Number.parseInt(complement, 2);
};

console.log(findComplement(6));
