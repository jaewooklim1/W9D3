const View = require('./ttt-view.js');
const Game = require('../Tic Tac Toe Code/game.js');
window.Game = Game;
window.View = View;

  $(() => {
    var $game = $('.ttt');
    var ticTacToe = new Game();

    new View($game, ticTacToe);
    
    
  });
