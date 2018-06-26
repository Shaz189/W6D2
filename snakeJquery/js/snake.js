class Snake {
  constructor (){
    this.direction = "N";
    this.segments = [[10,10]];
    setInterval(this.move.bind(this), 50);
  }
  
  move(){
    const head  = this.segments[0];
    if(this.direction === "N"){
      head[0] = head[0] - 1;
      this.segments.pop();
      this.segments.unshift(head);
    } else if (this.direction === "S") {
      head[0] = head[0] + 1;
      this.segments.pop();
      this.segments.unshift(head);
    } else if (this.direction === "W") {
      head[1] = head[1]-1;
      this.segments.pop();
      this.segments.unshift(head);
    } else if (this.direction === "E") {
      head[1] = head[1]+1;
      this.segments.pop();
      this.segments.unshift(head);
    }
  }
  
  turn(direction) {
    this.direction = direction;
  }
  
}


module.exports = Snake;