//  Kawika Tu
// 	10/23/19

class Bars{
constructor(x,y,w,h){
  h = 8*h
  y = (y+height)-h
  this.loc = createVector(x, y);
  this.clr = color(100);
  this.w = w;
  this.h = h;
}//constructor end
run(){
  console.log("Bars.run works")
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
