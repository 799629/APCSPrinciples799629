//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snakeHead;
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
  snakeHead = new Snake(400,400,color(250),1,"head")
}

//  The draw function is called @ 30 fps
function draw() {
  frameRate(10)
  background(5, 5, 5)
  runGame()
}

function startGame(){

}

function runGame(){
  for(var i = 0; i < snakeArray.length; i++){
    snakeArray[i].run()

  }//end for loop
}//end function runGame

//function ()
