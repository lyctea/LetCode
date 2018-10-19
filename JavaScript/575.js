/*
给一个长度为偶数的整数数组，数组中不同数字都代表不同糖果，
将糖果平均分给弟弟和妹妹，妹妹最多能得到几种糖果。
* */
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  let candiesSet = new Set(candies);
  return candiesSet.size > candies.length / 2 ? candies.length / 2 : candiesSet.size;
};
