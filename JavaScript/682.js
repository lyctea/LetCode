/*
给定一个字符串列表，每个字符串可以是以下4种类型之一：

 整数（一轮的得分）：直接代表你在这一轮中获得的积分数。
“+”（一轮的得分）：表示你在这一轮中获得的积分是最后两个有效回合点的总和。
“D”（一轮的得分）：表示您在本轮获得的积分是上次有效回合点数的双倍数据。
“C”（一个不是一轮的得分的操作）：表示最后一次有效回合的得分无效，应该被删除。
* */

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let sum = 0;
  let score = [];
  
  ops.map(op => {
    switch (op) {
      case '+':
        if (score.length < 2) break;
        const lastTwo = score[score.length - 1] + score[score.length - 2];
        sum += lastTwo;
        score.push(lastTwo);
        break;
      case 'C':
        sum -= score.pop();
        break;
      case 'D':
        const double = score[score.length - 1] * 2;
        sum += double;
        score.push(double);
        break;
      default:
        score.push(+op);
        sum += +op;
        break;
    }
  });
  
  return sum;
};

console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));
