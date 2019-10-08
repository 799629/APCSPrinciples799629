// Kawika Tu
// 8/21/2019

class Square{
  constructor(x, y,clr){
    this.loc = createVector(x,y);
    this.clr = clr
    this.render
  }

  render(){
    fill(this.clr);
    noStroke()
    rect(this.loc.x, this.loc.y, 100, 100)
  }//render End
}//class End
