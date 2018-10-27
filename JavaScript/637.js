/*
计算二叉树每层平均值，返回数组表示


Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let res = [];
  if (root == null) return res;
  let queue = [];
  queue.push([root, 0]);
  
  while (queue.length) {
    const [node, lvl] = queue.shift();
    if (node.left) queue.push([node.left, lvl + 1]);
    if (node.right) queue.push([node.right, lvl + 1]);
    if (!res[lvl]) res[lvl] = [];
    res[lvl].push(node.val);
  }
  
  return res.map(val => {
    const len = val.length;
    let sum = val.reduce((a, b) => a + b);
    return sum / len;
  });
};
