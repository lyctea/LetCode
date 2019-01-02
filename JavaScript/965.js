/**
 * 判断二叉树中所有节点是否相同
 * @param root
 * @returns {*}
 */
var isUnivalTree = function (root) {
  if (root === null) return true; // 判断
  return (function helper (root, val) {
    if (root === null) return true; // 递归到子节点，返回true，说明左、右子树都是true
    return root.val === val && helper(root.left, val) && helper(root.right, val);
  })(root, root.val);
};
