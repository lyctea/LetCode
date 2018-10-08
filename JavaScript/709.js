/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function (str) {
  // let result = '';
  //
  // if(!str) return result;
  //
  //
  // for(const c of str) {
  //   if(c.charCodeAt() >= 65 && c.charCodeAt() <= 90) {
  //     result += String.fromCharCode(c.charCodeAt() + 32);
  //   }else {
  //     result += c;
  //   }
  // }
  //
  // return result;
  
  return str.split('').map((c) => {
    return c >= 'A' && c <= 'Z' ? String.fromCharCode(c.charCodeAt() + 32) : c;
  }).join('');
};
