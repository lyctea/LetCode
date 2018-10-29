/*
反转二叉树，交换树的左右孩子

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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (root == null) return root;
  
  invertTree(root.left);
  invertTree(root.right);
  
  const tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  
  return root;
};
