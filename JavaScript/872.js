/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  return helper(root1) === helper(root2);
};

var helper = function (root) {
  var op = [];
  inorder(root, op);
  return op.join('');
};

var inorder = function (root, op) {
  if (!root) {
    return;
  }
  
  if (!root.left && !root.right) {
    op.push(root.val);
  }
  
  inorder(root.left, op);
  inorder(root.right, op);
};
