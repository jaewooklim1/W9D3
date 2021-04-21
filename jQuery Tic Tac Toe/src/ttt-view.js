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
      debugger
      $li.addClass("played");

    };

    $('ul').on('click', 'li', changeLi);

   
    // this.makeMove($square)

    // when user clicks on a call (ul)
    // call Game.prototype.playMove to make their move
    // edit cell <li> to show players mark (toggleclass)
    // css change background to white and disp X or O
    // **put some of these in makeMove
  }

  makeMove($square) {

    if (this.game.isOver()) {
      this.$el.addClass("Game-Over");

      if (this.game.winner()) {
        const $p = $("<p>");
        $p.append("<p>");
        $
      }
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
