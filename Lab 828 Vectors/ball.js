// Kawika Tu
// 8/21/2019

class Ball{
  constructor(x, y, dx ,dy){
    this.loc = createvector(x,y)
    this.vel = createvector(dx,dy)
    this.clr = color(random(255),random(255), random(255), random(255))
  }

  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if (this.loc(x) < 0){
      this.vel(dx) = -this.vel(dx);
    }
    if (this.loc(x) > width){
      this.vel(dx) = -this.vel(dx);
    }
    if (this.loc(y) < 0){
      this.vel(dy) = -this.vel(dy);
    }
    if (this.loc(y) > height){
      this.vel(dy) = -this.vel(dy);
    }
  }

  update(){
    this.loc.add(this.vel)
  }

  render(){
    fill(this.clr);
    ellipse(this.x, this.y, 50,50)
  }
}
