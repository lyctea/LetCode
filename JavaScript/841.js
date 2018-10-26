/*
* DFS
* */

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let roomZero = rooms[0];
  let stack = [roomZero];
  let visited = [];
  
  visited[0] = true;
  
  while (stack.length > 0) {
    let curr = stack.pop();
    
    curr.forEach(el => {
      if (visited[el] !== true) stack.push(rooms[el]);
      visited[el] = true;
    });
  }
  
  visited = visited.filter(room => room != undefined);
  return visited.length === rooms.length;
};

const input = [[1, 3], [3, 0, 1], [2], [0]];

console.log(canVisitAllRooms(input));
