/*
求给定一个正整数的二进制，是否是 01 交替出现的

解法：
    //      10101010101
    //  +    1010101010    ( number >> 1 )
    //  ---------------
    //  =   11111111111    ( this is stored in the variable 'tmp' )
    //  &  100000000000
    //  ---------------
    //  =             0    ( power of two )
* */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let tmp = (n >> 1) + n;
  
  return (tmp & tmp + 1) === 0;
};
