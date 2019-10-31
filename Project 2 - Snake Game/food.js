//Kawika Tu
//09/03/19
//Attraction Repulsion
class Food{
  constructor(x,y,dx,dy,i){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0,0.1);
    this.clr = color(random(255),random(255),random(255));
    this.w = 15;
    this.id = i;
  }//constructor end
  run(){
    this.isColliding();
    this.render();
    this.removeFood();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w);
  }//render end

  isColliding(){
    //Check if snake is touching code

  }//isColliding end

  removeFood(){
    //Delete Food code
  }//removeFood end

  }//Class end
