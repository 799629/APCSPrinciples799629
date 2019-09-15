//Kawika Tu
//09/03/19
//Attraction Repulsion
class Paddle{
  constructor(x,y,h,w){
    this.loc = createVector(x,y)
    this.clr = color(random(255),random(255),random(255));
    this.h = h
    this.w = w
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.h,this.w)
  }//render end
  checkEdges(){
  }//checkEdges end
  update(){
    var mouseLoc = createVector(mouseX, 725);
    this.loc = p5.Vector.lerp(this.loc, mouseLoc, .09);
  }
  }//Class end
