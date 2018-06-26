class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
  }
  bindEvents() {
    $('ul').on('click','li', this.makeMove.bind(this));
    
  }

  makeMove(event) {
    const $li = $(event.currentTarget);
    const num = $('ul > li').index($li);
    const pos = [Math.floor(num/3), num % 3];

    const player = this.game.currentPlayer
    this.game.playMove(pos);
    $li.text(`${player}`);
    $li.removeClass("unchecked");
    $li.addClass("checked");
    if(this.game.winner()) {
      $('figure').append(`<span>${this.game.winner()} wins!</span>`);
      $('ul').off('click');
      $('ul > li').removeClass('unchecked');
    } else if (this.game.isOver()) {
      $('figure').append(`<span>Game Tie! Refresh to restart</span>`);
    }
  }

  setupBoard() {
    
    const $ul = $('<ul></ul>');
    for (let i = 0; i < 9; i++) {
      const $li = $('<li class="unchecked"></li>');
      $ul.append($li);
    }
    this.$el.append($ul);
  }

}

module.exports = View;
