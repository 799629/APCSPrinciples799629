//Kawika Tu
//09/03/19
//Attraction Repulsion
class Ball{
  constructor(x,y,dx,dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
  }//constructor end
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }//render end
  checkEdges(){

      if(this.loc.x < 0){
        this.vel.dx = -1*this.vel.dx
      }
      if(this.loc.x > width){
        this.vel.dx = -1*this.vel.dx
      }
      if(this.loc.y < 0){
        this.vel.dy = -1*this.vel.dy
      }
      if(this.loc.y > height){
        this.loc.x = 0
    }
  }//checkEdges end
  update(){
    this.x = this.x+this.vel;
    this.y = this.y+this.vel;

  }
  }//Class end
