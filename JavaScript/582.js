/*
我们把符合下列属性的数组 A 称作山脉：

A.length >= 3
存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。



示例 1：

输入：[0,1,0]
输出：1
示例 2：

输入：[0,2,1,0]
输出：1

* */

/**
 * 找到最大值的下标即可， 时间负责度 O(n) , 线性查找
 *
 * @param {number[]} A
 * @return {number}
 */
// var peakIndexInMountainArray = function (A) {
//   return A.findIndex(a => a === Math.max(...A));
// };

/*
* 降低时间复杂度的方法 log n
*
* */
function peakIndexInMountainArray (arr) {
  let low = 0;
  let high = arr.length - 1;
  
  while (low < high) {
    const mi = Math.floor((high + low) / 2);
    // 找中间值，并且前一项大于中间值
    if (mi > 0 && arr[mi - 1] > arr[mi]) {
      high = mi - 1;
      continue;
    }
    
    // 如果后一项大于前一项
    if (mi < arr.length - 1 && arr[mi + 1] > arr[mi]) {
      low = mi + 1;
      continue;
    }
    
    return mi;
  }
  
  return low;
};

const t = [0, 2, 1, 0];

console.log(peakIndexInMountainArray(t));
