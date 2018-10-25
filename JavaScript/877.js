/*
* 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。

游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。

亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。

假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。



示例：

输入：[5,3,4,5]
输出：true
解释：
亚历克斯先开始，只能拿前 5 颗或后 5 颗石子 。
假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
如果李拿走前 3 颗，那么剩下的是 [4,5]，亚历克斯拿走后 5 颗赢得 10 分。
如果李拿走后 5 颗，那么剩下的是 [3,4]，亚历克斯拿走后 4 颗赢得 9 分。
这表明，取前 5 颗石子对亚历克斯来说是一个胜利的举动，所以我们返回 true 。
* */

var stoneGame = function(piles) {
  const N = piles.length;
  // Make a (N+2) by (N+2) array, initialized with 0s.
  const dp = Array(N + 2).fill(0).map(() => Array(N + 2).fill(0));
  
  // dp[i+1][j+1] = the value of the game [piles[i], ..., piles[j]]
  for (let size = 1; size <= N; ++size)
    for (let i = 0, j = size - 1; j < N; ++i, ++j) {
      let parity = (j + i + N) % 2;  // j - i - N; but +x = -x (mod 2)
      if (parity == 1)
        dp[i+1][j+1] = Math.max(piles[i] + dp[i+2][j+1], piles[j] + dp[i+1][j]);
      else
        dp[i+1][j+1] = Math.min(-piles[i] + dp[i+2][j+1], -piles[j] + dp[i+1][j]);
    }
  
  return dp[1][N] > 0;
};
