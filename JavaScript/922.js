/**
 Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.
 
 Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.
 
 You may return any answer array that satisfies this condition.
 
 */
var sortArrayByParityII = function (A) {
  let sorted = [];
  let odd = 0;
  let even = 1;
  
  A.forEach(n => {
    if (n % 2 === 0) {
      sorted[odd] = n;
      odd += 2;
    } else {
      sorted[even] = n;
      even += 2;
    }
  });
  
  return sorted;
};
