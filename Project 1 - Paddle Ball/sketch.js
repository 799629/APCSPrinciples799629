//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var score = 0
var health = 100;
var loadonce = 0
var gameState = 2;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadGame(6)
  score = 0
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState===1){
    startscreen()
  }
  else if(gameState===2){
    playGame()
  }
  else if(gameState===3){
    endGame()
  }
}

function startscreen(){

}

function playGame(d){
  background(5, 5, 5, 20);
  runGame();
}

function loadGame(n){
  paddle = new Paddle(200,700,200,30)
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5))
  }
}

function runGame(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
