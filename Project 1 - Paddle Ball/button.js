//Kawika Tu
//09/03/19
//Attraction Repulsion
class Button{
  constructor(id){
    this.clr = color(random(255),random(255),random(255));
    this.w = 120
    this.h = 50
    this.clr = color(255);
    this.textclr = color(0);
    this.id = id
    this.text = "Placeholder"

  }//constructor end

  idCheck(){
    if(this.id === 1){
      this.x = 50
      this.y = 650

    }
  }

  run(){
    this.update();
    this.render();
  }//run end
  render(){
    rect(this.x,this.y,this.w,this.h)
    fill(this.clr);
  }//render end

  update(){

  }//update end

  }//Class end
