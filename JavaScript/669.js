/*

给定二叉排序树（BST），对二叉树进行修剪，保留值位于[L, R]之间的节点

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
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
var trimBST = function (root, L, R) {
  if (root === null) return null;
  if (root.val > R) {
    return trimBST(root.left, L, R);
  }
  
  if (root.val < L) {
    return trimBST(root.right, L, R);
  }
  
  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);
  
  return root;
};
