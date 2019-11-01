//Kawika Tu
//09/03/19
//Project 2 - Snake Game
class Snake{
  constructor(x,y,clr,dir,id){
    this.loc = createVector(x,y)
    this.clr = color(random(255),random(255),random(255));
    this.direction = dir
    this.id = id
  }//constructor end

  run(){
    this.control();
    this.update();
    this.checkEdges();
    this.render();
  }//run end

  render(){
    rectMode(CORNER)
    fill(this.clr);
    rect(this.loc.x,this.loc.y,4,4)
  }//render end

  control(){
    if(keyCode() === UP_ARROW && this.direction !== 3){
      this.direction = 1
    }else{
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
    if(keyCode() === RIGHT_ARROW && this.direction !== 4){
      this.direction = 2
    }else{
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
    if(keyCode() === DOWN_ARROW && this.direction !== 1){
      this.direction = 3
    }else{
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
    if(keyCode() === LEFT_ARROW && this.direction !== 2){
      this.direction = 4
    }else{
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
  }//end control

  checkEdges(){
    if (this.loc.x < -1){
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
    if(this.loc.x > 801 - 5){
      gameState = 0 //this needs to be changed Later
      console.log("you died")
    }
    if(this.loc.y < -1){
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
    if(this.loc.y > 801){
      gameState = 0 //this needs to be changed later
      console.log("you died")
    }
  }//checkEdges end

  update(){
    if(this.id === "head"){
      if(this.direction === 1){
        this.loc.y = this.loc.y - 4
      }else if (this.direction === 2){
        this.loc.x = this.loc.x + 4
      }else if (this.direction === 3){
        this.loc.y = this.loc.y + 4
      }else if (this.direction === 4){
        this.loc.x = this.loc.x - 4
      }
    }//end if this.id = head
  }//update end
}//Class end
