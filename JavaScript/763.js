/*
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一个字母只会出现在其中的一个片段。返回一个表示每个字符串片段的长度的列表。

示例 1:

输入: S = "ababcbacadefegdehijhklij"
输出: [9,7,8]
解释:
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。
* */

/*

贪心算法就是要保证从初始状态开始，算法的每一个步骤都是局部的最优解，最后得到的
结果就是全局的最优解，即使不是也是接近最优解的。


解题策略：
1、使用 map 存放所有字符的最后位置
2、遍历 S ，找到经过遍历的所有字符的最后位置 end 的最大值
3、当没有比 end 大的时候，并且 i === end 的时候则是断点
* */

/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  if (!S || S.length === 0) return [];
  let map = Array(26).fill(0), res = [];
  
  // 数 map 记录字符串 S 中每个字符出现的最后位置
  for (let i = 0; i < S.length; i++) {
    map[S[i].charCodeAt() - 'a'.charCodeAt()] = i;
  }
  
  let start = 0, end = 0;
  
  // 遍历 S
  for (let i = 0; i < S.length; i++) {
    // 找到 S[i] 的最大位置 end
    end = Math.max(end, map[S[i].charCodeAt() - 'a'.charCodeAt()]);
    
    // 当 i 等于 end 时，表示这个前面经过遍历的字符中最大值，此外不会有字符大于改 end，找到断点
    if (end === i) {
      res.push(end - start + 1);
      start = end + 1;
    }
  }
  
  return res;
};

const S = 'ababcbacadefegdehijhklij';

console.log(partitionLabels(S));
