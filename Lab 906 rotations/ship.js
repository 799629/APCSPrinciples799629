class Ship{
  constructor(x,y,dx,dy,id){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.acc = createVector(0);
    this.clr = color(random(255),random(255),random(255));
    this.angle = 0
    this.id = id
}

run(){
  this.checkEdges();
  this.update();
  this.render();
}//run end

render(){
  fill(this.clr);
  push();
    translate(5,5);

    rotate(this.loc.heading);
    triangle(-5,8,5,8,0,-8)
  pop();
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
  this.clr = color(random(255),random(255),random(255));
  var disttoattractor;
  if(this.id >= 0){
    disttoattractor = this.loc.dist(attractor.loc);
    if(distToattractor < 100000){
      //add attraction
      this.acc = p5.Vector.sub(attractor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(disttoattractor < 150){
      //add repulsion
      this.acc = p5.Vector.sub(this.loc, attractor.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    this.vel.add(this.acc);
  }
  this.loc.add(this.vel);
  this.vel.limit(5);
}//update end
}//Class end
