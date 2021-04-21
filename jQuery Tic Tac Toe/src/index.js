const View = require('./ttt-view');
const Game = require('../Tic Tac Toe Code/game');

  $(() => {
    var $game = $('.ttt');
    var ticTacToe = new Game();

    var v = new View($game, ticTacToe);
    v.setupBoard();
    
  });
