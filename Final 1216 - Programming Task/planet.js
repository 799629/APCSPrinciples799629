//Kawika Tu
//12/03/19
//Attraction Repulsion
class Planet{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.clr = color(random(255),random(255),random(255));
    this.w = 50;
    //if(this.id < 0){this.w = 50;}
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

  //there is no check edges because the planets are not moving

  update(){
    var distToship;
    distToship = this.loc.dist(ship.loc);
    if(distToship < 100){
      //add attraction
      this.loc = createVector(random(width), random(height))
      this.clr = color(random(255),random(255),random(255));
    }
    this.loc.add(this.vel);
  }//update end
  }//Class end
