/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  return words.filter(key => {
    let cnt = /[qwertyuiop]/gi.test(key) + /[asdfghjkl]/gi.test(key) + /[zxcvbnm]/gi.test(key);
    return cnt === 1;
  });
};

const input = ['Hello', 'Alaska', 'Dad', 'Peace'];

console.log(findWords(input));
