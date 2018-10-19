/*
对于一个二进制数，求连续的两个1之间的距离的最大值。

* */

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function (N) {
  let dist = 0;
  let pos = 0;
  let str = N.toString(2);
  
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === '1') {
      dist > i - pos ? dist : dist = i - pos;
      pos = i;
    }
  }
  
  return pos;
};

console.log(binaryGap(5));
