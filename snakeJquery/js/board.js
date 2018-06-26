const Snake = require('./snake.js');


class Board {
  constructor () {
    this.snake = new Snake();
    const grid = Array(20);
    for (let i = 0; i < grid.length; i++) {
      grid[i] = Array(20);
      for (let j = 0; j < grid[i].length; j++) {
        grid[i][j] = 1;
      }
    }
    this.grid = grid;
    this.apples = null;
  }
  
}

module.exports = Board;