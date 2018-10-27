/*
有一个由[h,k]组成的随机的数组如下案例：
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
h表示高度，k表示在此之前，大于或等于此高度的元素数量。


要求排序为符合题目的数列，上述案例结果如下所示：
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]



1、先排序

[[7,0], [7,1], [6,1], [5,0], [5,2], [4,4]]

2、 将排序后的元素插入到结果数组，k就是插入的偏移量
* */

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let ret = [];
  people.sort((a, b) => {
    if (a[0] !== b[0]) return b[0] - a[0];
    else return a[1] - b[1];
  });
  
  for (let obj of people) {
    // 往ret obj[1] 位置添加 obj
    ret.splice(obj[1], 0, obj);
  }
  
  return ret;
};

const input = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];

reconstructQueue(input);
