/*
题目：将某个值插入二分查找树（BST）中，形成的新树可以有两种形式。

二分查找树BST（也叫二叉查找树、二叉排序树）的提出是为了提供查找效率，
之所以称为二分查找树，因为该二叉树对应着二分查找算法，
查找平均的时间复杂度为o(logn)，所以该数据结构的提出是为了提高查找效率。


For example,  有多重情况，只需要返回一种

Given the tree:
        4
       / \
      2   7
     / \
    1   3
And the value to insert: 5
You can return this binary search tree:

         4
       /   \
      2     7
     / \   /
    1   3 5
This tree is also valid:

         5
       /   \
      2     7
     / \
    1   3
         \
          4
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // 根节点为空，新建节点并返回
  if (root === null) return new TreeNode(val);
  
  // val 大于根节点 left val， 树左侧递归插入，反之递归右侧，直到最左或者最右的时候，递归返回节点
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    root.right = insertIntoBST(root.right, val);
  }
  
  return root;
};
