/**
 煎饼算法：
 
 1、每次找到未排序最大值
 2、翻转最大值前面的排序
 3、再翻转一次未排序的序列
 4、重复以上
 */
var pancakeSort = function (A) {
  let res = [];
  if (isSorted(A))
    return res;
  let rPointer = A.length - 1;
  for (let i = 0; i < A.length; i++) {
    let lNum = findLargestPosition(A, rPointer);
    if (rPointer > 0) {
      if (isSorted(A)) return [...res];
      A = flip(A, lNum);
      res.push(lNum + 1);
      A = flip(A, rPointer);
      res.push(rPointer + 1);
      rPointer--;
    }
  }
  
  return res;
};

function findLargestPosition (A, pointer) {
  let t = 0, pos = -1;
  for (let i = 0; i <= pointer; i++) {
    if (A[i] > t) {
      pos = i;
      t = A[i];
    }
  }
  return pos;
}

function flip (A, position) {
  let i = 0, j = position;
  while (i < j) {
    let t = A[i];
    A[i] = A[j];
    A[j] = t;
    i++;
    j--;
  }
  return A;
}

function isSorted (A) {
  let flag = true;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] > A[i])
      return false;
  }
  return flag;
}
