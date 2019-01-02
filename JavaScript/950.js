/*
* 给定一副扑克，每张牌有一个唯一整数。你可以按照任意顺序对扑克重新排序。

开始时，所有牌背面朝上。

重复如下操作，直到所有牌都正面朝上。

1. 从牌堆顶那一张牌，翻面移走
2. 如果牌堆还有扑克，将一张牌移动至牌堆底部
3. 重复操作1直到所有牌均翻面

返回可以使得翻牌序号递增有序的牌堆顺序。
* */

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const result = [deck[deck.length - 1]];
  
  for (let i = deck.length - 2; i >= 0; i--) {
    result.unshift(result.pop());
    result.unshift(deck[i]);
  }
  
  return result;
};

const input = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(input));
