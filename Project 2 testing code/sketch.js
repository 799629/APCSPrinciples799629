//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snakeHeadx = 0;
var snakeHeady = 0;
var snakeHead;
var score;
var direction;
var gameState = 1
var snakeArray = [];
var loadonce = 0;
var globalIndex;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  startGame()
  score = 0;
  snakeHead = snakeArray[0]
  frameRate(3)
  draw()
}//end function setup

//  The draw function is called @ 30 fps
function draw(){
  background(5, 5, 5)
  if(gameState === 1){
    runGame()
  }
}//end draw function

function startGame(){
  snakeArray[0] =  new Snake(400,400,0)
  console.log(snakeArray);
  // asdfjhaskjfnaw;efhj
  //a;ksjdrfhliauwfh
}

function runGame(){
  console.log(snakeArray);
  snakeArray[j].run()
  if(keyCode === UP_ARROW){
    if(loadonce === 0){
      console.log("Growing a snake ++++++++++++++++++++++++++++++++++++++++");
      grow()
      loadonce = 1
    }
  }
}//end function runGame

function grow(){
  var n = snakeArray.length;
  console.log("the snakeArray is " + str(n) + " segments long");
  var x = snakeArray[n-1].loc.x
  var y = snakeArray[n-1].loc.y
  snakeArray[n] = new Snake(x,y,n)
}
