/*
给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：

给你一个有效的甲板，仅由战舰或者空位组成。
战舰只能水平或者垂直放置。换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，其中N可以是任意大小。
两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。
示例 :

X..X
...X
...X
在上面的甲板中有2艘战舰。

无效样例 :

...X
XXXX
...X
你不会收到这样的无效甲板 - 因为战舰之间至少会有一个空位将它们分开。
* */

/**
 * 方法1： 遍历整个二维数组
 * 右侧或者底部不是X则是战舰
 *
 * @param {character[][]} board
 * @return {number}
 */
// var countBattleships = function (board) {
//   let count = 0;
//   // 遍历每一行和每一列
//   for (let row = 0; row < board.length; row++) {
//     for (let col = 0; col < board[0].length; col++) {
//       // 如果当前元素是 X ， 则判断右边和下边
//       if (board[row][col] === 'X') {
//         if (
//           (row < board.length - 1 && board[row + 1][col] === '.' || row === board.length - 1) &&
//           (col < board[0].length - 1 && board[row][col + 1] === '.' || col === board[0].length - 1)
//         ) {
//           count++;
//         }
//       }
//     }
//   }
//
//   return count;
// };

/**
 * DFS： 深度优先遍历
 *
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (board[i][j] === 'X') {
        findAndMark(board, row, col);
        count++;
      }
    }
  }
  
  return count;
};

function findAndMark (board, i, j) {
  if (board[i][j] === 'X') {
    board[i][j] = '.';
  } else {
    return;
  }
  
  if (i > 0) findAndMark(board, i - 1, j);
  if (j > 0) findAndMark(board, i, j - 1);
  if (i < board.length - 1) findAndMark(board, i + 1, j);
  if (j < board[0].length - 1) findAndMark(board, i, j + 1);
}
