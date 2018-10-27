/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  let temp = {
    max: 1,
    leftbottom: root.val
  };
  
  return helper(root, 1, temp);
};

function helper (root, level, temp) {
  if (temp.max < level) {
    temp.max = level;
    temp.leftbottom = root.val;
  }
  
  if (root.left) {
    helper(root.left, level + 1, temp);
  }
  
  if (root.right) {
    helper(root.right, level + 1, temp);
  }
  
  return temp.leftbottom;
}

/*
DFS, 深度优先遍历，从一个顶点开始沿着一侧走到底，此时记录最大深度，
在深入另一侧的最深处
遍历完成后，返回最大深度的左侧值
* */
