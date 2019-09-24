//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var buttons = [];
var score = 0;
var health = 100;
var loadonce = 0;
var gameState = 1;
var gameMode = 0;
var gameTimer = 10;
var highscore = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(6)
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
  for(var i = 0; i < buttons.length; i++){
    buttons[i].run();
  }
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("Paddle-ball", 400, 300);
}
function playGame(d){
  background(5, 5, 5, 20);
  runGame();
}

function loadObjects(n){
  paddle = new Paddle(200,700,200,30)
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5))
  }
  for(var i = 0; i < 3; i++){
    buttons[i] = new Button(i);
  }
}

function runGame(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}

function endGame(){
  append(highscore,score)
  background(5, 5, 5);
  fill(200, 30, 150);
  score = 0
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("You Lost", 400, 300);
  for(var i = 0; i < 1; i++){
    buttons[i+3] = new Button(i+3);
  }
}
