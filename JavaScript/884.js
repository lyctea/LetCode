/*
*  返回两个句子中，只出现一次的单词数组
* */

/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  var output = [];
  var array = A.split(' ').concat(B.split(' '));
  
  for (var i = 0; i < array.length; i++) {
    // indexOf 从前找元素
    // lastIndexOf 从后找元素
    if (array.indexOf(array[i]) == array.lastIndexOf(array[i]))
      output.push(array[i]);
  }
  return output;
};

const A = 'this apple is sweet sweet';
const B = 'this apple is sour';

console.log(uncommonFromSentences(A, B));

