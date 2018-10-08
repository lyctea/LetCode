/*
1、Map each word into it's morse code representation
2、Reduce the list of morse code strings into a single set
3、Return the size of the set
*/

const codes = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..'];

const getIdx = char => char.charCodeAt(0) - 'a'.charCodeAt(0);

var uniqueMorseRepresentations = function (words) {
  return words.map(word => word.split('')
    .map(char => codes[getIdx(char)])
    .join('')
  ).reduce((set, cur) => set.add(cur), new Set())
    .size;
};

let words = ['gin', 'zen', 'gig', 'msg'];

console.log(uniqueMorseRepresentations(words));
