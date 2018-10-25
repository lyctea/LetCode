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
var increasingBST = function(root) {
  let arr = [];
  // 中序遍历整棵树，将结果保存在数组中
  (function inorder(root){
    if(root===null) return ;
    inorder(root.left);
    arr.push(root.val);
    inorder(root.right);
  })(root);
  
  let res = new TreeNode();
  let tmp = res;
  // 遍历遍历后的数组，创建的信息的二叉树
  for(let i=0; i<arr.length; i++){
    tmp.val = arr[i];
    if(i<arr.length-1){
      tmp.right = new TreeNode();
      tmp = tmp.right;
    }
  }
  return res;
};
