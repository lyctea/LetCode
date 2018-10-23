/*
* 在MATLAB中，有一个很有用的函数名为“reshape”，可以重构一个矩阵为另一个尺寸，并保持原始数据。

给你一个由二维数组表示的矩阵，和两个正数r和c，分别表示想要重构成的新矩阵的行数和列数。

重构的矩阵需要由所有原来矩阵的元素以同样的顺序填充。

如果根据给出的参数进行重构操作是可能和合法的，就输出重构出的新矩阵，否则就输出原始矩阵。

例1：
输入：
nums =
[[1,2],
[3,4]]
r = 1, c = 4
输出：
[[1,2,3,4]]
解释：
原矩阵的顺序是[1,2,3,4]。新重构的是个1*4的矩阵，可以用上面的列表来一行行填充。

例2：
输入：
nums =
[[1,2],
[3,4]]
r = 2, c = 4
输出：
[[1,2],
[3,4]]
解释：
无法将22的矩阵重构为24的矩阵。因此输出原始矩阵。
* */

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const m = nums.length;
  const n = nums[0].length;
  if (m * n !== r * c) return nums;
  
  const res = [];
  
  for (let i = 0; i < r * c; i++) {
    let r = Math.floor(i / c);
    if (!res[r]) res.push([]);
    // 遍历整个矩阵，找到原来矩阵的坐标，赋值给结果数组
    res[r].push(nums[Math.floor(i / n)][i % n]);
  }
  
  return res;
};

const input = [[1, 2], [3, 4]];

console.log(matrixReshape(input, 1, 4));
