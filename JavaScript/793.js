/*
* 比今天温度高还需要几天时间
*
* For example, given the list of T T = [73, 74, 75, 71, 69, 72, 76, 73],
* your output should be [1, 1, 4, 2, 1, 1, 0, 0].
* */
/**
 * 第一种方法，双循环，遍历后面的元素，找到第一个大于当前温度的值
 *
 * @param {number[]} T
 * @return {number[]}
 */
// var dailyTemperatures = function (T) {
//   let res = [];
//
//   for (let i = 0; i < T.length; i++) {
//     for (let j = i; j < T.length; j++) {
//       if (T[j] > T[i]) {
//         res.push(j - i);
//         break;
//       }
//       if (j === T.length - 1) res.push(0);
//     }
//   }
//   return res;
// };


/*
* 第二种方法，栈递减
* */
var dailyTemperatures = function (T) {
  let stack = [];
  let result = [];
  let top = -1;
  
  for (let i = 0; i < T.length; i++) {
    result[i] = 0;
    while (top > -1 && T[i] > T[stack[top]]) {
      let prevIndex = stack[top--];
      result[prevIndex] = i - prevIndex;
    }
    stack[++top] = i;
  }
  return result;
};

const T = [73, 74, 75, 71, 69, 72, 76, 73];

console.log(dailyTemperatures(T));
