/**
 * 找出数组中出现两次的元素
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let result = [];
  let obj = {};

  nums.forEach(num => {
    if (num in obj) {
      result.push(num);
    }
    obj[num] = num;
  });

  return result;
};

const input = [4, 3, 2, 7, 8, 2, 3, 1];

console.log(findDuplicates(input));
