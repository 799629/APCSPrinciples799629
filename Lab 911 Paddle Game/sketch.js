//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var ships = [];
var attractor;
var repeller;
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
}
