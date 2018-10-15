/*
解题思路 ：
因为题目希望 从所有数组B中，计算出所有最大值和最小值的差值，并从中取最小的差值
所以我们的目标是使数组B中的 最大值尽可能小，最小值尽可能大

第一步确定最大值里，最小的，因为max元素最多只能减小到 max - K, 所以最大值不可能小于 max - K
第二步确定最小值里，最大的，因为min元素最多只能增加到 min + K, 所以最小值不可能大于 min + K

比较max - K 和 min + K
如果max - K <= min + K, 其他元素的取值范围正好可以覆盖[max - K, min + K]的区间, 因为每一个元素a[i], a[i] + K >= min + K, a[i] - K <= max - K
说明所有元素可以取到相同值，则最大值和最小值差距可以为0

如果max - K > min + K, 则由于最小的最大值为max - K, 最大的最小值为min + K,
则差距为 max - min - 2 * K


* */
var smallestRangeI = function (A, K) {
  var max = Number.NEGATIVE_INFINITY;
  var min = Number.POSITIVE_INFINITY;
  
  for (let i = 0; i < A.length; i++) {
    max = Math.max(max, A[i]);
    min = Math.min(min, A[i]);
  }
  
  return Math.max(0, max - min - K - K);
};

const t = [1, 3, 5];

console.log(smallestRangeI(t, 3));



