/*
给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。

返回移除了所有不包含 1 的子树的原二叉树。

( 节点 X 的子树为 X 本身，以及所有 X 的后代。)

示例1:
输入: [1,null,0,0,1]
输出: [1,null,0,null,1]
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
var pruneTree = function (root) {
  // 判断 root 是否是 null
  if (!root) {
    return null;
  }
  
  //  递归找到叶子节点
  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);
  
  // 判断是否是叶子节点，如果左右均为 0， 则不是
  const isLeft = !root.left && !root.right;
  
  if (isLeft && root.val !== 1) {
    return null;
  }
  
  return root;
};
