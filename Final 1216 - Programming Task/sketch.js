//  Kawika Tu
// 	12/16/19
//  Final Task

//  The setup function function is called once when your program begins
var ship;
var planets = [];
var repeller;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadPlanet(4);
  loadShip();
  sliderSpeed = createSlider(0, 10, 5, .0001);
  sliderSpeed.position(100,400);
  sliderAttraction = createSlider(0.0001, 0.9, 0.5, .0001);
  sliderAttraction.position(100, 450)
}

//  The draw function is called @ 30 fps
function draw() {
  background(5, 5, 5,20);
  runplanets();
  runShips();
}
function loadPlanet(n){
  for(var i = 0; i < n; i++){
    planets[i] = new Planet(random(width), random(height), -1)
  }// end for loop
}//loads balls into array

function runplanets(){
  for(var i = 0; i < planets.length; i++){
    planets[i].run();
  }//end for loop
}//runs the balls

function loadShip(){
  ship = new Ship(random(width), random(height), random(-1, 1), random(-1, 1), 1);
}

function runShips(){
  ship.run();
}//runs the ships
