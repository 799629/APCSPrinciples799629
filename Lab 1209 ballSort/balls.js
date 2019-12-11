//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
class Ball{
  constructor(x,y){
    this.loc = createVector(x, y);
    this.red = random(255);
    this.clr = color(this.red,0,0);
    this.w = 30;
    //if(this.id < 0){this.w = 50;}
  }//constructor end
  run(){
    //this.update();
    this.render();
  }//run end
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, this.w, this.w)
  }//render end

  }//Class end
