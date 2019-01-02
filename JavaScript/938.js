/*
* 计算树中 L、R范围内的平均值，用递归法
* */

var rangeSumBST = function (root, L, R) {
  let sum = 0;
  const {val, left, right} = root;
  
  if (val >= L && val <= R) {
    sum += val;
  }
  
  if (left) {
    sum += rangeSumBST(left, L, R);
  }
  
  if (right) {
    sum += rangeSumBST(right, L, R);
  }
  
  return sum;
};
