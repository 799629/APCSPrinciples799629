// Kawika Tu
// 8/21/2019

class Ball{
  constructor(x, y, dx ,dy){
    this.loc = createVector(x,y)
    this.vel = createVector(dx,dy)
    this.clr = color(random(255),random(255), random(255), random(255))
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if (this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if (this.loc.x > width){
      this.vel.x = -this.vel.x;
    }
    if (this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if (this.loc.y > height){
      this.vel.y = -this.vel.y;
    }
  }

  update(){
    this.loc.add(this.vel)
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 50,50)
  }
}
