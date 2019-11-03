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
  frameRate(10)
  background(5, 5, 5)
  runGame()
}

function startGame(){
  snakeArray[0] =  new Snake("head")
  console.log(snakeArray);
}

function runGame(){
  console.log(snakeArray);
  for(var i = 0; i < snakeArray.length; i++){
    snakeArray[0].run()
    console.log("snakeArray runs")
  }//end for loop
}//end function runGame

//function ()
