/**
 Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
 
 Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
 
 If S[i] == "I", then A[i] < A[i+1]
 If S[i] == "D", then A[i] > A[i+1]
 
 
 Example 1:
 
 Input: "IDID"
 Output: [0,4,1,3,2]
 
 题意：[0, 1, ..., N] 中满足 S[i] == "I" ，小于后面的数，反之大于
 
 
 */
var diStringMatch = function (S) {
  let lo = 0;
  let hi = S.length;
  let result = [];
  
  for (const c of S) {
    // 第一次匹配到I，给最小值，并且最小值++
    if (c === 'I') {
      result.push(lo);
      lo++;
    }
    
    // 第一次匹配到D，给定最大，并且最大值--
    if (c === 'D') {
      result.push(hi);
      hi--;
    }
  }
  
  result.push(lo);
  
  return result;
};
