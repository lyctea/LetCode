/*
* 仅对字母逆序排序
*
* Input: "ab-cd"
* Output: "dc-ba"
*
* Input: "Test1ng-Leet=code-Q!"
* Output: "Qedo1ct-eeLg=ntse-T!"
* */

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {
  let stack = [];
  
  for (const s of S) {
    if (isCharacter(s)) stack.push(s);
  }
  
  S = S.split('');
  
  for (let i = 0; i < S.length; i++) {
    if (isCharacter(S[i])) {
      const c = stack.pop();
      S[i] = c;
    }
  }
  
  return S.join('');
};

function isCharacter (char) {
  // char = char.toLowerCase();
  // return char.charCodeAt(0) >= 'a'.charCodeAt(0) && char.charCodeAt(0) <= 'z'.charCodeAt(0);
  
  // 用正则匹配，单词匹配，字符串匹配的效率更高
  return /[a-zA-Z]/.test(char);
}

// const input = 'Test1ng-Leet=code-Q!';
const input = 'ab-cd'

console.log(reverseOnlyLetters(input));
