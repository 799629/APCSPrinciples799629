//Kawika Tu
//09/03/19
//Project 2 - Snake Game
class Snake{
  constructor(x,y,index){
    this.loc = createVector(x,y)
    this.index = index
    if(this.index === 0){
      this.clr = color(0,200,250)
    }
    else{this.clr = color(250,250,250);
    }
    this.direction = 0
  }//constructor end

  run(){
    this.update();
    this.control();
    this.render();
    this.checkEdges();
  }//run end

  render(){
    rectMode(CORNER)
    fill(this.clr);
    console.log("x.loc = " + this.loc.x + ". y.loc = " + this.loc.y);
    rect(this.loc.x,this.loc.y,10,10)
  }//render end

  control(){
    if(keyCode === UP_ARROW){
      if(this.direction == 3){
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        this.direction = 1
      }
    }else if(keyCode === RIGHT_ARROW){
      if(this.direction == 4){
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        this.direction = 2
      }
    }else if(keyCode === DOWN_ARROW){
      if(this.direction == 1){
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        this.direction = 3
      }
    }else if(keyCode === LEFT_ARROW){
      if(this.direction == 2){
        gameState = 0 //this needs to be changed later
        console.log("you died, cannot go back into yourself")
      }else{
        this.direction = 4
      }
    }
  }//end control

  checkEdges(){
    if (this.loc.x < -1){
      gameState = 0 //this needs to be changed later
      console.log("you died, exceeds left constraint")
    }
    if(this.loc.x > 801 - 5){
      gameState = 0 //this needs to be changed Later
      console.log("you died, exceeds right constraint")
    }
    if(this.loc.y < -1){
      gameState = 0 //this needs to be changed later
      console.log("you died, exceeds top constraint")
    }
    if(this.loc.y > 801){
      gameState = 0 //this needs to be changed later
      console.log("you died, exceeds bottom constraint")
    }
  }//checkEdges end

  update(){
    console.log("this index is" + this.index);
    if(this.index > 0){
      var i = this.index
      var tempArray = snakeArray;
      snakeArray[i].loc = tempArray[i - 1].loc;
      console.log("tail snakeArray[i].index === " + snakeArray[i].index);
    }else if(this.index === 0){
      console.log("the snake head is moving");
      snakeHead = snakeArray[0];
      if(this.direction === 1){
        this.loc.y = this.loc.y - 10;
      }else if (this.direction === 2){
        this.loc.x = this.loc.x + 10;
      }else if (this.direction === 3){
        this.loc.y = this.loc.y + 10;
      }else if (this.direction === 4){
        this.loc.x = this.loc.x - 10;
      }
      snakeHeadx = this.loc.x;
      snakeHeady = this.loc.y;
    }//end if this.index === 0
    else{
      console.log("This works");
    }//else ends
  }//update end


}//Class end//
