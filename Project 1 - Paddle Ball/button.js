//Kawika Tu
//09/03/19
//Attraction Repulsion
class Button{
  constructor(id){
    this.clr = color(random(255),random(255),random(255));
    this.id = id;
    this.x = 0
    this.y = 0

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
    fill(this.clr);
  }//render end

  update(){

  }//update end

  }//Class end
