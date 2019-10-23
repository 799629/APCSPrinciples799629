//  Kawika Tu
// 	10/23/19

class Bars{
constructor(x,y,w,h){
  this.loc = createVector(x, y);
  this.acc = createVector(0,0.1);
  this.clr = color(5);
  this.w = w;
  this.h = h;
}//constructor end
run(){
  //this.update();
  this.render();
}//run end
render(){
  fill(this.clr);
  rect(this.loc.x,this.loc.y,this.w,this.h)
}//render end

update(){

}

}//Class end
