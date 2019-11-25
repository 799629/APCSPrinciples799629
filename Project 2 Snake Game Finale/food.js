//Kawika Tu
//09/03/19
//Attraction Repulsion
class Food{
  constructor(){
    this.loc = createVector((random(0,windowWidth)),(random(0,height)));
    this.clr = color(255,0,0);
    //this.id = id
  }

  run(){
      this.render();
      this.update();
  }

  update(){
    if((this.loc.y === snakeHeady) && (this.loc.x < snakeHeadx)){
      this.loc.x = wwidth * int(random(0,40));
      this.loc.y = int(random(0,40));
      score = score + 1;
    }
  }//update end

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, 10,10);
  }
}
