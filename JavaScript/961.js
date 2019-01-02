/**
 * 求数组中重复的那个一个元素
 *
 * 利用Set判断，如果没有改元素就添加到集合，如果有则说明是重复元素，返回结果
 *
 */

var repeatedNTimes = function (A) {
  var result = new Set();
  for (var a of A) {
    if (!result.has(a)) {
      result.add(a);
    } else {
      return a;
    }
  }
};
