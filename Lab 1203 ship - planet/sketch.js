//  Kawika Tu
// 	12/03/19
//  The setup function function is called once when your program begins
var ship;
var attractor;
var repeller;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadPlanet();
  loadShip();
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5, 14);
  runBalls();
  runShips();
}
function loadPlanet(){
  attractor = new Planet(width/2, height/2, random(-2,2), random(-2,2), -1)
}//loads balls into array

function runBalls(){
  attractor.run();
}//runs the balls

function loadShip(){
  ship = new Ship(random(width), random(height), random(-1, 1), random(-1, 1), 1);
}

function runShips(){
  ship.run();
}//runs the ships
