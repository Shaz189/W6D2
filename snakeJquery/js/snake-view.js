const Board = require('./board.js');

class View {
  constructor (rootEl) {
    this.rootEl = rootEl;
    this.board = new Board();
    this.setup();
    this.render();
    $(window).on('keydown', this.changedirection.bind(this));
    setInterval(this.render.bind(this), 5);
  }
  
  changedirection(e) {
    if(e.key==="ArrowLeft") {
      this.snake().turn("W");
    } else if(e.key==="ArrowRight") {
      this.snake().turn("E");
    } else if(e.key==="ArrowUp") {
      this.snake().turn("N");
    } else if(e.key==="ArrowDown") {
      this.snake().turn("S");
    }
    this.render();
  }
  
  snake() {
    return this.board.snake;
  }
  
  setup() {
    for (let i = 0; i < 20; i++) {
      this.rootEl.append(`<ul class='row${i}'></ul>`);
    }
    for (let j = 0; j < 20; j++) {
      $('ul').append(`<li class='col${j}'></li>`);
    }
  }
  
  render() {
    // const that = this;
    // const segments = that.board.snake.segments;
    $('li').removeClass('snaked');
    for (let i = 0; i < this.board.snake.segments.length; i++) {
      $(`ul.row${this.board.snake.segments[i][0]} > li.col${this.board.snake.segments[i][1]}`).addClass("snaked");
    }
  }
}

module.exports = View;