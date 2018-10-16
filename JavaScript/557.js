/*
*
* */
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  
  return s.split(' ').map(word => {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += word[i];
    }
    return reverseWord;
  }).join(' ');
};

const input = 'Let\'s take LeetCode contest';

console.log(reverseWords(input));
