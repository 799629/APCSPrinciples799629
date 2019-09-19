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
    if (this.loc.x < -1){
      this.loc.x  = 1
    }
    if(this.loc.x > 801-this.w){
      this.loc.x = 800 - this.w
    }
  }//checkEdges end
  update(){
    var mouseLoc = createVector(mouseX, 700);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .5);
    this.score = score
    textSize(32);
    fill(0, 102, 153);
    text("Score = " + this.score, 10, 30);
  }
  }//Class end
