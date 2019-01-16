/**
 * 使用DFS（深度优先遍历） 递归迭代
 */
var maxAreaOfIsland = function (grid) {
  let maxVal = 0;
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      let area = dfs(grid, r, c);
      // 每次dfs的结果与当前记录的值对比，保存最大值。
      maxVal = Math.max(maxVal, area);
    }
  }
  return maxVal;
};

function dfs (grid, r, c) {
  // 检查下标是否越界
  if (r < 0 || c < 0 || r >= grid.length || c >= grid[0].length) {
    return 0;
  }
  
  // 如果元素为零直接返回0
  if (grid[r][c] === 0) return 0;
  
  // 对所有为1的元素，山下左右四个方向递归调用dfs
  if (grid[r][c] === 1) {
    // 已经遍历的元素置为0，防止重复检查
    grid[r][c] = 0;
    // 初始化面积为1
    let area = 1;
    
    area += dfs(grid, r - 1, c);
    area += dfs(grid, r, c + 1);
    area += dfs(grid, r + 1, c);
    area += dfs(grid, r, c - 1);
    // 返回本次递归的面积数
    return area;
  }
}
