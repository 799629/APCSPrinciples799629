//Kawika Tu
//8/26/2019

class Triangle{
  constructor(x1, y1, x2, y2, x3, y3, dx, dy){
    this.x1 = x1
    this.x2 = x2
    this.x3 = x3
    this.y1 = y1
    this.y2 = y2
    this.y3 = y3
    this.dx = dx
    this.dy = dy
    this.clr = color(random(255),random(255), random(255), random(255))
  }
  run(){
    this.checkedges();
    this.update();
    this.render();
  }

  checkedges(){
    if (this.x1,this.x2,this.x3 < 0){
      this.dx = -this.dx;
    }
    if (this.x1,this.x2,this.x3 > width){
      this.dx = -this.dx;
    }
    if (this.y1,this.y2,this.y3 < 0){
      this.dy = -this.dy;
    }
    if (this.y1,this.y2,this.y3 > height){
      this.dy = -this.dy;
    }
  }

  update(){ //Movement
    for(var i = 0; i < triangles.length; i++){
      for(var n = 0; i < 2; i++){
        this.x(n) = (this.x(n))+this.dx;
        this.y(n) = (this.y(n))+this.dy;
      }
    }


  }

  render(){
    fill(this.clr);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3)
  }
}
