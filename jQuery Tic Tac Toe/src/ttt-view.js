class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {

    const changeLi = e => {
      const $li = $(e.target);
      const position = $li.data("pos");
      this.game.playMove(position);
      this.makeMove($li)
      $li.addClass("played");

    };

    $('ul').on('click', 'li', changeLi);

  }

  makeMove($square) {
    
    const player = this.game.currentPlayer;
    debugger
    $square.addClass(player)
    debugger
    // this.$el.addClass(player)


    if (this.game.isOver()) {
      
      this.$el.addClass("Game-Over");
      if (this.game.winner()) {
        this.$el.append("<p>Winner!</p>");
        // return;
      } else {
        this.$el.append("<p>Game is a draw!</p>");
        // return;
        };

      // this.$el.stop(stopAll, goToEnd);
    }




    // toggleclass of ul / li in here
    // 
  }

  setupBoard() {

    const $ul = $("<ul>");
    
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const $li = $("<li>");
        $li.data("pos", [row, col]); 
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }


}

module.exports = View;
