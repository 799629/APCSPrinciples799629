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
var buttonEasy
var buttonMedium
var buttonHard
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
  }else if(gameState===2){
    playGame()
  }else if(gameState===3){
    endGame()
  }else if(gamestate===4){

  }
}

function startscreen(){
  runButtons()
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
  buttonEasy = new Button(200,500,180,90,"Easy",color(0, 255, 0),)
  buttonMedium = new Button(400,500,180,90,"Medium",color(244, 232, 104))
  buttonHard = new Button(600,500,180,90,"Hard",color(255, 0, 0))
  buttonRules = new Button(400,600,180,90,"Rules",color(255))
}

function runButtons(){
  buttonEasy.run()
  buttonMedium.run()
  buttonHard.run()
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
  textSize(45);
  fill(255);
  text("Try again", 400, 375);
  buttonEasy.run()
  buttonMedium.run()
  buttonHard.run()
}
