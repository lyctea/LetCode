/*
* 给定一个正整数列表，相邻的整数将执行浮点除法。
* 例如[2,3,4] – > 2/3/4。但是，您可以在任何位置添加任意数量的括号以更改操作的优先级。
* 您应该找到如何添加括号以获得最大结果，并以字符串格式返回相应的表达式，你的表达不应该包含多余的括号。

分析：要想得到最大的结果，只要使除数尽可能大，被除数尽可能小。
被除过的数一定会变得更小，所以括号加在第一个数后面，
括号内的数按从前到后顺序（不用添加冗余的括号）即可～
* */

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  if (nums.length === 1) return `${nums[0]}`;
  if (nums.length === 2) return `${nums[0]}/${nums[1]}`;
  
  return `${nums[0]}/(${nums.slice(1).join('/')})`;
};

const Input = [1000, 100, 10, 2];

console.log(optimalDivision(Input));
