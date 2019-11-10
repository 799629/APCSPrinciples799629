//Kawika Tu
//09/03/19
//Attraction Repulsion
class Food{
  constructor(x,y,id){
    this.loc = createVector(x, y);
    this.clr = color(0,255,0);
    this.w = 10;
    this.id = id;
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
    if()
  }//isColliding end

  removeFood(){
    //Delete Food code
  }//removeFood end

  }//Class end
