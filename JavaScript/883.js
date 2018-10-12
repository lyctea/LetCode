/*
883. 三维形体投影面积

在 N * N 的网格中，我们放置了一些与 x，y，z 三轴对齐的 1 * 1 * 1 立方体。
每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。
现在，我们查看这些立方体在 xy、yz 和 zx 平面上的投影。
投影就像影子，将三维形体映射到一个二维平面上。
在这里，从顶部、前面和侧面看立方体时，我们会看到“影子”。
返回所有三个投影的总面积。
* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  let top = 0;
  let len = grid.length;
  let front = Array(len).fill(0);
  let side = Array(len).fill(0);
  
  // 遍历二维数组
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      front[i] = Math.max(front[i], grid[i][j]);
      side[j] = Math.max(side[j], grid[i][j]);
      if (grid[i][j] > 0) top++;
    }
  }
  
  const frontSum = front.reduce((pre, next) => pre += next);
  const sideSum = side.reduce((pre, next) => pre += next);
  
  return top + frontSum + sideSum;
};

const t = [[1, 2], [3, 4]];
console.log(projectionArea(t));
