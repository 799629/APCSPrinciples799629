//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snake = [];
var snakeHead;
var buttons = [];
var score = 0;
var gameState = 2;
var gameMode = 0;
var highscore = [];
var startingFood = 3;
var food = [];
var highscore = 0;
var loadonce = 0;
var buttonEasy;
var buttonMedium;
var buttonHard;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(6);
  score = 0;
}

//  The draw function is called @ 30 fps
function draw() {
  if(gameState===1){
    startscreen();
  }else if(gameState===2){
    playGame();
  }else if(gameState===3){
    endGame();
  }else if(gameState===4){
    runInstructions();
  }
}

function startscreen(){
  runButtons();
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("Welcome to the Snake Game", 400, 300);
  textSize(30)
  text("Text here", 400, 400)
}
function playGame(){
  background(5, 5, 5, 20);
  runGame();
}

function loadObjects(n){
  snakeHead = new Snake(200,700,200,30);
  for(var i = 0; i < n; i++){
    food[i] = new Food(random(width),random(0,300),random(-5,5),random(-5,5),i);
  }
  //Set Buttons Here
}

function runButtons(){
  buttonEasy.run();
  buttonMedium.run();
  buttonHard.run();
  buttonRules.run();
}

function runGame(){
  if(loadonce === 0){
    startGame(startingFood);
    loadonce = 1;
  }
  snake.run();
  for(var i = 0; i < food.length; i++){
    food[i].run();
  }
}

function startGame(n){
  //runs
}

function endGame(){
  background(5, 5, 5);
  fill(200, 30, 150);
  score = 0;
  textAlign(CENTER);
  textSize(60);
  fill(255);
  text("You Lost", 400, 200);
  textSize(45);
  fill(255);
  text("Try again", 400, 250);
  textSize(45);
  fill(255);
  text("Score: " + paddle.score, 400, 300);
  if(paddle.score > highscore){
    highscore = paddle.score;
  }
  textSize(45);
  fill(255);
  text("Highscore: " + highscore, 400, 350);
  buttonEasy.run();
  buttonMedium.run();
  buttonHard.run();
  buttonRules.run();
  health = 5;
}

function runInstructions(){
  background(5,5,5);
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text("Play by moving your snake around the screen with your arrow keys", 400, 200);
  text("Eat food to gain score but avoid running into the sides or your body", 400, 300);
  buttonBack.run();
}
