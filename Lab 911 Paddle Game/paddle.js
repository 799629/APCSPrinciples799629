//Kawika Tu
//09/03/19
//Attraction Repulsion
class Paddle{
  constructor(x,y,h,w){
    this.loc = createVector(x,y)
    this.clr = color(random(255),random(255),random(255));
    this.h = h
    this.w = w
    this.clr = color(random(255),random(255),random(255));
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
  }//render end
  checkEdges(){

      if(this.loc.x < 0){
        this.loc.x = width
      }
      if(this.loc.x > width){
        this.loc.x = 0
      }
      if(this.loc.y < 0){
        this.loc.y = height
      }
      if(this.loc.y > height){
        this.loc.y = 0
    }
  }//checkEdges end
  update(){
    var mouseLoc = createVector(mouseX,mouseY);
    this.loc = p5.Vector.lerp(this.loc,mouseLoc,0.09)
    rect(this.loc.x,this.loc.y,this.h,this.w)
  }
  }//Class end
