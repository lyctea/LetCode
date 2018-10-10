/*
描述

  你有一个单词列表 words 和一个模式  pattern，你想知道 words 中的哪些单词与模式匹配。
  如果存在字母的排列 p ，使得将模式中的每个字母 x 替换为 p(x) 之后，我们就得到了所需的单词，那么单词与模式是匹配的。（回想一下，字母的排列是从字母到字母的双射：每个字母映射到另一个字母，没有两个字母映射到同一个字母。）
返回 words 中与给定模式匹配的单词列表。
你可以按任何顺序返回答案。

举例：words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
abb -> 011

abc -> 012
deq -> 012
mee -> 011  匹配
aqq -> 011  匹配
dkd -> 010
ccc -> 000
* */

/**
 * 通过双 Map 保存彼此的映射，在对比时，各自取 key对比，如果映射不相等，则不满足条件
 *
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  // reduce() 方法对累计器和数组中的每个元素（从左到右）应用一个函数，将其简化为单个值。
  // [] 参数作为源数据， 作为迭代的开始值，如果忽略，则从第一个迭代元素起
  return words.reduce((prev, curr) => {
    // 检查长度是否相等
    if (curr.length !== pattern.length) {
      return prev;
    }
    
    let previousMatches = new Map();
    let previousOtherMatches = new Map();
    
    for (let i = 0; i < curr.length; i++) {
      // 取键值对为均 undefined 时， 说明未开始配对
      if (previousMatches.get(pattern[i]) === undefined && previousOtherMatches.get(curr[i]) === undefined) {
        previousMatches.set(pattern[i], curr[i]);
        previousOtherMatches.set(curr[i], pattern[i]);
      } else if (previousMatches.get(pattern[i]) !== curr[i] && previousOtherMatches.get(curr[i]) !== pattern[i]) {
        // 如果两组 map 中比对不匹配，跳过该元素
        return prev;
      }
    }
    
    // 将没有淘汰的元素，存入源数组中，然后进入查找下个元素
    prev.push(curr);
    return prev;
  }, []);
};

const words = ['abc', 'deq', 'mee', 'aqq', 'dkd', 'ccc'], pattern = 'xyz';

console.log(findAndReplacePattern(words, pattern));
