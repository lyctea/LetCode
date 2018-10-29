/*
* 给定两个字符串，找出这两个字符串的最长不公共子序列，
* 最长不公共子序列是其中一个字符串的最长子序列，
* 并且这个子序列不是其他字符串的任何子序列；
* */
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if(a === b) return -1;
  
  if(a.length > b.length) return a.length;
  else return b.length;
};
