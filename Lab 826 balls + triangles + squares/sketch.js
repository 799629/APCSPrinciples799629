//  Kawika Tu
// 	8/15/19
//  This is a comment
//  The setup function function is called once when your program begins
var balls = [];
var triangles = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  fill(22, 30, 150);
  //b1 = new Ball(random(width),random(height),random(-5,5),random(-5,5));
  loadBalls(100);
  loadTriangle(100);
}
//  The draw function is called @ 30 fps
function draw(){
  background(5,5,5);
  runBalls();
  runTriangle();
}

function loadTriangle(n){
  for(var i = 0; i < n; i++){
    var x = random(width)
    var y = random(height)
    triangles[i] = new Triangle(x,y,(x-5),(y-5),(x+5),(y-5),random(-8,8),random(-8,8))
  }
}

function runTriangle(){
  for(var i = 0; i < triangles.length; i++){
    triangles[i].run();
  }
}

function loadBalls(n){
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width),random(height), random(-8,8),random(-8,8));
  }
}

function runBalls(){
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}
