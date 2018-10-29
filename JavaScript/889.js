/*
* 前序遍历：先访问根节点，再左，再右
* 中序遍历：左root右
* 后序遍历：左右root
*
*
* https://www.youtube.com/watch?v=53aOi0Drp9I
*
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
  let index = {};
  for (let i = 0; i < pre.length; i++) {
    index[post[i]] = i;
  }
  
  function build (i, j, n) {
    if (n <= 0) return null;
    let root = new TreeNode(pre[i]);
    if (n === 1) return root;
    
    let k = index[pre[i + 1]];
    let l = k - j + 1;
    
    root.left = build(i + 1, j, l);
    root.right = build(i + l + 1, k + 1, n - l - 1);
    return root;
  }
  
  return build(0, 0, pre.length);
};
