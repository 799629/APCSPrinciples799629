//  Kawika Tu
// 	9/5/19
//  This is a comment
//  The setup function function is called once when your program begins
var ships = [];
var attractor,repeller;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadBalls(100);


}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 20);
  runBalls();
}
function loadBalls(n){
  attractor = new Ball(width/2, height/2, random(-2,2), random(-2,2), -1)
  repeller = new Ball(width/2, height/2, random(-2,2), random(-2,2), -1)
  for(var i = 0; i < n; i++){
    balls[i] = new Ball(random(width), random(height), random(-1, 1), random(-1, 1), i);
  }
}//loads balls into array
function runBalls(){
  attractor.run();
  repeller.run();
  for(var i = 0; i < balls.length; i++){
    balls[i].run();
  }
}//runs the balls

function runShips(){
  ships.run();
}
