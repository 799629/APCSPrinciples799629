//  Kawika Tu
// 	APCSP P1

class Bar{
  constructor(x,y){
    this.h = random(0,800);
    var clr = 255/(850/this.h)
    this.clr = color(clr);
    this.lenth = width/numbars;
    this.loc = createVector(x,y);
    this.loc.y = height-(this.h)
  }//end constructor

  run(){
    this.render();
  }//end run

  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.lenth, this.h)
  }//end render

}//end class
