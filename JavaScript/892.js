/*
在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。

返回结果形体的总表面积。

示例 1：

输入：[[2]]
输出：10
示例 2：

输入：[[1,2],[3,4]]
输出：34
示例 3：

输入：[[1,0],[0,2]]
输出：16
示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46


解法：
1、遍历每一个立方体
2、每个立方地原始面积都是 temp = 1 * 4 + 2
3、遍历每个立方地的东西南北四个方向，每个方向减去重叠面积 ，及响铃两边的最小值

* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  var res = 0;
  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] != 0) {
        var temp = grid[i][j] * 4 + 2;
        if (i > 0) {
          temp -= Math.min(grid[i - 1][j], grid[i][j]);
        }
        if (i < grid.length - 1) {
          temp -= Math.min(grid[i + 1][j], grid[i][j]);
        }
        if (j > 0) {
          temp -= Math.min(grid[i][j - 1], grid[i][j]);
        }
        if (j < grid[0].length - 1) {
          temp -= Math.min(grid[i][j + 1], grid[i][j]);
        }
        res += temp;
      }
    }
  }
  return res;
};
