/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function (S) {
  let stack = [];
  
  for (const c of S) {
    let size = stack.length;
    if (size && stack[size - 1] === '(' && c === ')') {
      stack.pop();
    } else {
      stack.push(c);
    }
  }
  return stack.length;
};
