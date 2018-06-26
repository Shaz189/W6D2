class View {
  constructor (game, rootEl) {
    this.game = game;
    this.rootEl = rootEl;
    this.setupTowers();
    this.render();
    $(this.rootEl).on('click', 'ul', this.clickTower.bind(this));
  }
  render() {
    $('ul').empty();
    const gameState = this.game.towers;
    for (let i = 0; i < gameState.length; i++) {
      if(gameState[i].includes(1)){
        $('ul').eq(i).append('<li class="first"></li>');
      }
    }
    for (let i = 0; i < gameState.length; i++) {
      if(gameState[i].includes(2)){
        $('ul').eq(i).append('<li class="second"></li>');
      }
    }
    for (let i = 0; i < gameState.length; i++) {
      if(gameState[i].includes(3)){
        $('ul').eq(i).append('<li class="third"></li>');
      }
    }
    if (this.game.isWon()) {
      $('body').append("<span>You Win!</span>");
      $(this.rootEl).off('click');
    }
  }
  
  clickTower(event) {
    const $ul = $(event.currentTarget);
    if (!this.first) {
      const num = $('figure > ul').index($ul);
      $ul.addClass('selected');
      this.first = num + 1;
    }
    else {
      const num = $('figure > ul').index($ul);
      this.game.move(this.first - 1, num);
      this.first = undefined;
      $('ul').removeClass('selected');
    }
    this.render();
  }
  
  setupTowers() {
    const $fig = this.rootEl;
    for (var i = 0; i < 3; i++) {
      const $ul = $('<ul class="discs"></ul>');
      $fig.append($ul);
    }
  }
}

module.exports = View;