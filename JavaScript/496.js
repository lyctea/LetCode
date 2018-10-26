/*
给你一个组数A里面每个元素都不相同。再给你一个数组B，元素是A的子集，
问对于B中的每个元素，在A数组中相同元素之后第一个比它的元素是多少。

注意：

nums1与nums2中的所有元素都是唯一的。
nums1与nums2的元素个数不超过1000。
 */

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
  // 遍历整个findNums
  return findNums.map(n => {
    // 如果没有找到相等的值则直接返回 -1
    let found = nums.indexOf(n);
    
    if (found !== -1) {
      // 遍历剩下的相同元素后面的剩余元素，
      while (nums[++found] < n) ;
      // 如果没有更大数则，found会自增至nums数组的长度， 返回 -1
      if (found >= nums.length) found = -1;
      // 如果没能自增到nums数组最大长度，则found所指的下标就是最近的大数
      else found = nums[found];
    }
    
    return found;
  });
};
