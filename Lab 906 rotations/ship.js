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
    translate(this.loc.x,this.loc.y);
    rotate(this.angle+HALF_PI);
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
  var distToattractor;
  var distTorepeller;
  distToattractor = this.loc.dist(attractor.loc);
  distTorepeller = this.loc.dist(repeller.loc);
  if(this.id >= 0){
    if(distToattractor < 100000){
      //add attraction
      this.acc = p5.Vector.sub(attractor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
    }
    if(distTorepeller < 150){
      //add repulsion
      this.acc = p5.Vector.sub(this.loc, repeller.loc);
      this.acc.normalize();
      this.acc.mult(0.5);
    }
    this.vel.add(this.acc);
  }
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.vel.limit(5);
  this.angle = this.vel.heading()
}//update end
}//Class end
