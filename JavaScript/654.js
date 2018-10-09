/*
给定一个不含重复元素的整数数组。一个以此数组构建的最大二叉树定义如下：

二叉树的根是数组中的最大元素。
左子树是通过数组中最大值左边部分构造出的最大二叉树。
右子树是通过数组中最大值右边部分构造出的最大二叉树。
通过给定的数组构建最大二叉树，并且输出这个树的根节点。

Example 1:

输入: [3,2,1,6,0,5]
输入: 返回下面这棵树的根节点：

      6
    /   \
   3     5
    \    /
     2  0
       \
        1
注意:

给定的数组的大小在 [1, 1000] 之间。
*/

/**
 * 返回区间最大值下标
 *
 * @param {number[]} nums
 * @returns {number}
 */
const findMaxIdx = (nums, begin, end) => {
  let ret = begin;
  for (let i = begin + 1; i <= end; i++) {
    if (nums[ret] < nums[i]) {
      ret = i;
    }
  }
  return ret;
};

const createMaxBinaryTree = (nums, begin, end) => {
  if (begin > end) {
    return null;
  }
  
  let maxIdx = findMaxIdx(nums, begin, end);
  let root = new TreeNode(nums[maxIdx]);
  
  root.left = createMaxBinaryTree(nums, begin, maxIdx - 1);
  root.right = createMaxBinaryTree(nums, maxIdx + 1, end);
  
  return root;
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  if (!nums || nums.length === 0) {
    return null;
  }
  
  return createMaxBinaryTree(nums, 0, nums.length - 1);
};
