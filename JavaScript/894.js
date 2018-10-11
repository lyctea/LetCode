/*
列出所有可能的完全二叉树

Input: 7
Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
Explanation:


利用递归的方法，依次寻找节点的左右孩子的形式。
用allPossibleFBT(i)和allPossibleFBT(N-i)的分别表示左子树和右子树。
左子树1个、3个、5个。。。右子树就是N-1个、N-3个、N-5个。。。
于是，用这种递归的办法，来找到所有符合条件的树。
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */
var allPossibleFBT = function (N) {
  // 如果是偶数，不能构成完全二叉树
  if (N % 2 === 0) return [];
  if (N === 1) return [new TreeNode(0)];
  
  let trees = [];
  for (let i = 1; i <= N - 2; i += 2) {
    let leftTrees = allPossibleFBT(i);
    let rightTrees = allPossibleFBT(N - 1 - i);
    
    // lt 的个数 1、3、5个
    leftTrees.forEach(lt => {
      // rt 的个数 5、3、1 个
      rightTrees.forEach(rt => {
        let root = new TreeNode(0);
        root.left = lt;
        root.right = rt;
        trees.push(root);
      });
    });
  }
  return trees;
};
