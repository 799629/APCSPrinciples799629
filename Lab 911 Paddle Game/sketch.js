//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var balls = [];
var paddle;
var score;
var health;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadObjects(6);
  score = 0
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 20);
  runObjects();
}

function loadObjects(n){
  paddle = new Paddle(200,700,200,30)
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(0,300),random(-5,5),random(-5,5))
  }
}

function runObjects(){
  paddle.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
