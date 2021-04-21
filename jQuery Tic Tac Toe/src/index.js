const View = require('./ttt-view');
const Game = require('../Tic Tac Toe Code/game');

  $(() => {
    var $game = $('.ttt');

    new View($game);
  });
