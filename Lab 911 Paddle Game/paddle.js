//Kawika Tu
//09/03/19
//Attraction Repulsion
class Paddle{
  constructor(x,y,w,h){
    this.loc = createVector(x,y)
    this.clr = color(random(255),random(255),random(255));
    this.h = h
    this.w = w
    this.health = health
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h)
  }//render end
  checkEdges(){
  }//checkEdges end
  update(){
    var mouseLoc = createVector(mouseX, 700);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
    textSize(32);
    text("Score = " + this.score, 10, 30);
    fill(0, 102, 153);
  }
  }//Class end
