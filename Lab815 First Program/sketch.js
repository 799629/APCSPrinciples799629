//  Kawika Tu
// 	8/15/19
//  This is a comment
//  The setup function function is called once when your program begins
function setup() {
  var x,y;
  var speedx, speedy;
  var r, g, b;
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5,5,5);
  fill(22, 30, 150);


}

x = 50;
y = 400;
r = 0;
g = 0;
b = 0;

speedx = 10;
speedy = 0;
//  The draw function is called @ 30 fps

function draw() {
  x = x + speedx
  y = y + speedy
  noStroke();
  fill(r,g,b,100);
  ellipse(x,y,100,100);

  r = r + 1
  g = g + .1
  b = b + .1
  speedx = speedx - .1

}
