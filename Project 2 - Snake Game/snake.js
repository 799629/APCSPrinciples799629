//Kawika Tu
//09/03/19
//Project 2 - Snake Game
class Snake{
  constructor(x,y){
    this.loc = createVector(x,y)
    this.clr = color(random(255),random(255),random(255));
  }//constructor end
  run(){
    this.update();
    this.checkEdges();
    this.render();
  }//run end
  render(){
    rectMode(CORNER)
    fill(this.clr);
    rect(this.loc.x,this.loc.y,this.w,this.h)
  }//render end
  checkEdges(){
    if (this.loc.x < -1){
      //endGame code
    }
    if(this.loc.x > 801 - this.w){
      //endGame code
    }
  }//checkEdges end
  update(){
    //Changing location rectMode
  }
  }//Class end
