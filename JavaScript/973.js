/**
 * 使用sort 排序，使用slice 选择前K项，
 * ⚠ sort 方法对 true 、false无效
 */
var kClosest = function (points, K) {
  return points
    .sort((a, b) => a[0] * a[0] + a[1] * a[1] - b[0] * b[0] - b[1] * b[1])
    .slice(0, K);
};
