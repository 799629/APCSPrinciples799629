//Kawika Tu
//09/03/19
//Attraction Repulsion
class Food{
  constructor(id){
    this.loc = createVector((w*random(0,width/w)), (w*random(0,height/w)));
    this.clr = color(255,0,0);
    this.id = id
  }

  run(){
      this.render();
      this.update();
  }

  update(){//if snake touches snake
    if((this.loc.x + w > snakeheady) && (this.loc.x < snakeheady + w) && (this.loc.y + w > snakeheadx ) && (this.loc.y < snakeheadx + w)){
      this.loc.x = w * int(random(0,40));
      this.loc.y = w * int(random(0,40));
      score = score + 1;
    }
  }

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, w, w);
  }
}
