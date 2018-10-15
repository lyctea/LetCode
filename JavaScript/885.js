/*

在 R 行 C 列的矩阵上，我们从 (r0, c0) 面朝东面开始

这里，网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。

现在，我们以顺时针按螺旋状行走，访问此网格中的每个位置。

每当我们移动到网格的边界之外时，我们会继续在网格之外行走（但稍后可能会返回到网格边界）。

最终，我们到过网格的所有 R * C 个空间。

按照访问顺序返回表示网格位置的坐标列表。

* */

var spiralMatrixIII = function (R, C, r0, c0) {
  let n = Math.max(r0, c0, R - 1 - r0, C - 1 - c0);
  let res = [[r0, c0]];
  
  for (let i = 1; i <= n; i++) {
    for (let j = 1 - i; j <= i; j++) res.push([r0 + j, c0 + i]); //line 1
    for (let j = i - 1; j >= -i; j--) res.push([r0 + i, c0 + j]); //line 2
    for (let j = i - 1; j >= -i; j--) res.push([r0 + j, c0 - i]); //line 3
    for (let j = 1 - i; j <= i; j++) res.push([r0 - i, c0 + j]); //line 4
  }
  
  return res.filter(x => x[0] >= 0 && x[0] < R && x[1] >= 0 && x[1] < C);
};

console.log(spiralMatrixIII(5, 6, 1, 4));

// const a = [
//   {code: 'ema', id: '111', name: 'EMS'},
// ];
//
// const b = [
//   {name: '圆通', label: 'yuantong'},
//   {name: '申通', label: 'shentong'},
//   {name: 'EMS', label: 'ems'},
// ];
//
// const result = b.map(item => a
//   .map(x => x.name === item.name ? {...x, ...item} : undefined)[0])
//   .filter(item => !!item);
//
// console.log(result);
