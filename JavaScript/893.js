/*
893. 特殊等价字符串组

你将得到一个字符串数组 A。

如果经过任意次数的移动，S == T，那么两个字符串 S 和 T 是特殊等价的。



一次移动包括选择两个索引 i 和 j，且 i％2 == j％2，并且交换 S[j] 和 S [i]。

现在规定，A 中的特殊等价字符串组是 A 的非空子集 S，这样不在 S 中的任何字符串与 S 中的任何字符串都不是特殊等价的。


返回 A 中特殊等价字符串组的数量。
* */

/**
 * @param {string[]} A
 * @return {number}
 */
var numSpecialEquivGroups = function (A) {
  var odd;
  var even;
  var key;
  var count = 0;
  var map = Object.create(null);
  
  for (let i = 0; i < A.length; i++) {
    odd = [];
    even = [];
    for (let j = 0; j < A[i].length; j++) {
      if (j % 2 === 0) {
        even.push(A[i][j]);
      } else {
        odd.push(A[i][j]);
      }
    }
    
    
    even.sort();
    odd.sort();
    
    key = even.join('') + odd.join('');
    
    if (!map[key]) {
      map[key] = true;
      count++;
    }
  }
  
  return count;
};

const input = ['a', 'b', 'c', 'a', 'c', 'c'];
console.log(numSpecialEquivGroups(input));
