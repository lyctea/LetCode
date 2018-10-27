/*
* 查找二叉树每一行的最大值
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 方法1 BFS：  利用队列记录每一层的值，最后求得最大值
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let res = [];
  if (root === null) return res;
  
  let queue = [];
  queue.push([root, 0]);
  
  while (queue.length) {
    const [node, lvl] = queue.shift();
    if (node.left) queue.push([node.left, lvl + 1]);
    if (node.right) queue.push([node.right, lvl + 1]);
    
    if (!res[lvl]) res[lvl] = [];
    
    res[lvl].push(node.val);
  }
  
  return res.map(val => Math.max(...val));
};

/**
 * 方法2 DFS：  利用队列记录每一层的值，最后求得最大值
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
  let result = {};
  let level = 0;
  
  (function dfs (level, node) {
    if (!node) return;
    // 每一层开始开始的元素赋值为node  val
    // 更新每一层的最大值
    if (result[level] === undefined) {
      result[level] = node.val;
    } else {
      if (node.val > result[level]) {
        result[level] = node.val;
      }
    }
    
    dfs(level + 1, node.left);
    dfs(level + 1, node.right);
  })(level, root);
  
  return Object.values(result);
};
