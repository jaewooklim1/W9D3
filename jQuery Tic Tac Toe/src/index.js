const View = require('./ttt-view');
const Game = require('../Tic Tac Toe Code/game');
window.Game = Game;
window.View = View;

  $(() => {
    var $game = $('.ttt');
    var ticTacToe = new Game();

    new View(ticTacToe, $game);
    
    
  });


