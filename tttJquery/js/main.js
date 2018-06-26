const View = require('./ttt-view.js');
const Game = require('../solution/game.js');

  

$( () => {
  // Your code here
  const figure = $('figure').eq(0);
  const game = new Game();
  const view = new View(game, figure);
  view.bindEvents();
  
});
