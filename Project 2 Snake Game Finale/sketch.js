//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snakeHeadx = 0;
var snakeHeady = 0;
var snakeHead;
var score = 0;
var direction = 2;
var gameState = 1
var snakeArray = [];
var tempArray = [];
var loadonce = 0;

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
  }else if(gameState === 2){
    console.log("hello world");
  }
}//end draw function

function startGame(){
  snakeArray[0] =  new Snake(400,400,0)
  console.log(snakeArray);
}

function runGame(){
  console.log(snakeArray);
  //for(var j = snakeArray.length - 1; j > -1; j--){
  for(var j = snakeArray.length - 1; j > -1; j--){
    snakeArray[j].run()
  }//end for loop
  if(snakeHeady === 440){
    if(loadonce < 3){
      console.log("Growing a snake ++++++++++++++++++++++++++++++++++++++++");
      grow()
      loadonce = loadonce + 1;
    }
  }
  //tempArray = snakeArray;
}//end function runGame

function grow(){
  var n = snakeArray.length;
  console.log("the snakeArray is " + str(n) + " segments long");
  console.log("");
  var x = snakeArray[n-1].loc.x
  var y = snakeArray[n-1].loc.y
  snakeArray[n] = new Snake(0,0,n)
  //snakeArray[n] = new Snake(x,y,n)
}
