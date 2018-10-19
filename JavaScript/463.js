/*
求岛屿周长

* */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let res = 0;
  let m = grid.length;
  let n = grid[0].length;
  
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        let count = 0;
        
        if (i + 1 < m && grid[i + 1][j] === 1) count++;
        if (j + 1 < n && grid[i][j + 1] === 1) count++;
        if (j - 1 >= 0 && grid[i][j - 1] === 1) count++;
        if (i - 1 >= 0 && grid[i - 1][j] === 1) count++;
        
        res += 4 - count;
      }
    }
  }
  
  return res;
};

const input = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];

console.log(islandPerimeter(input));
