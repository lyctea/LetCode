// 题义分析：给定一个字符串，转换为Goat Latin格式，转换规则如下：
//
// 如果单词以元音开头，直接在单词后添加ma即可。
// 如果单词不以元音开头，先将第一个字母移到单词最后面，添加ma即可。
// 从第一个单词开始，都要加上若干个a的后缀，第一个单词加一个，第二个单词加两个等。

// Example 1:
//
// Input: "I speak Goat Latin"
// Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  const arr = S.split(' ');
  
  const vowelReg = /[aeiouAEIOU]/;
  
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    
    if (vowelReg.test(word[0])) {
      arr[i] += 'ma';
    } else {
      // 分离字符串
      arr[i] = `${word.slice(1)}${word.slice(0, 1)}ma`;
    }
    // 重复 i+1 个 a
    arr[i] += 'a'.repeat(i + 1);
  }
  
  return arr.join(' ');
};

const input = 'I speak Goat Latin';

console.log(toGoatLatin(input));
