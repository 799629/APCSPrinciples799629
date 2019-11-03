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
}

//  The draw function is called @ 30 fps
function draw() {
  frameRate(1)
  background(5, 5, 5)
  runGame()
}

function startGame(){
  snakeArray[0] =  new Snake(400,400,0,"head")
  console.log(snakeArray);
  // asdfjhaskjfnaw;efhj
  for(var i = 1; i < 10; i++){
    var x = snakeArray[i-1].loc.x
    var y = snakeArray[i-1].loc.y
    snakeArray[i] = new Snake(x,y,i,"tail")
  }//end experimental for loop
  //a;ksjdrfhliauwfh
}

function runGame(){
  console.log(snakeArray);
  for(var i = 0; i < snakeArray.length; i++){
    snakeArray[0].run()
  }//end for loop
}//end function runGame

//function ()
