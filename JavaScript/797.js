/*
给一个有 n 个结点的有向无环图，找到所有从 0 到 n-1 的路径并输出（不要求按顺序）

二维数组的第 i 个数组中的单元都表示有向图中 i 号结点所能到达的下一些结点（译者注：有向图是有方向的，即规定了a→b你就不能从b→a）空就是没有下一个结点了。

示例:
输入: [[1,2], [3], [3], []]
输出: [[0,1,3],[0,2,3]]
解释: 图是这样的:
0--->1
|    |
v    v
2--->3
这有两条路: 0 -> 1 -> 3 和 0 -> 2 -> 3.
提示:

结点的数字会在范围 [2, 15] 内。
你可以把路径以任意顺序输出，但在路径内的结点的顺序必须保证。


在图论中，如果一个有向图无法从某个顶点出发经过若干条边回到该点，则这个图是一个有向无环图（DAG图）。
* */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  var res = [];
  var path = [];

  path.push(0);

  function dfsSearch (node) {
    // 当node 是 n-1 时结束递归
    if (node === graph.length - 1) {
      // 返回第 0 个元素， slice 不修改原数组
      res.push(path.slice(0));
    } else {
      for (const nextNode of graph[node]) {
        //  入栈递归
        path.push(nextNode);
        dfsSearch(nextNode);
        // 递归出栈时对数组出栈
        path.pop();
      }
    }
  }
  
  dfsSearch(0);
  return res;
};

const t = [[1, 2], [3], [3], []];
console.log(allPathsSourceTarget(t));
