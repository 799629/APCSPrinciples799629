//  Kawika Tu
// 	10/31/19
//  The setup function function is called once when your program begins
var snakeHead;
var snakeArray = [];
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

}
