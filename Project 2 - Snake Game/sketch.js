//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snakeHeadx = 0;
var snakeHeady = 0;
var score;
var direction;
var gameState = 1
var snakeArray = [];
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  startGame()
  score = 0;
  snakeHead = snakeArray[0]
  draw()
}//end function setup

//  The draw function is called @ 30 fps
function draw() {
  frameRate(1)
  background(5, 5, 5)
  runGame()
}//end function draw

function startGame(){
  snakeArray[0] =  new Snake(400,400,0)
  console.log(snakeArray);
  // asdfjhaskjfnaw;efhj
  //a;ksjdrfhliauwfh
}

function runGame(){
  console.log(snakeArray);

  for(var i = 0; i < snakeArray.length; i++){
    snakeArray[0].run()
  }//end for loop
  if(keyCode === UP_ARROW){
    grow()
  }
}//end function runGame

function grow(){
  var n = snakeArray.length
  var x = snakeArray[n-1].loc.x
  var y = snakeArray[n-1].loc.y
  snakeArray[n+1] = new Snake(x,y,n+1)
}
