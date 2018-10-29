/*
* 找出只出现一次的两个数
* */

var singleNumber = function (nums) {
  var res1 = 0,
    res2 = 0,
    bit;
  
  for(var i = 0; i < nums.length; i++){
    res1 ^= nums[i];
  }
  
  bit = (res1 & (~ (res1 - 1)));
  
  res1 = 0;
  
  for(i = 0; i < nums.length; i++){
    if((nums[i] & bit) === 0)
      res1 ^= nums[i];
    else
      res2 ^= nums[i];
  }
  
  return [res1, res2];
};
