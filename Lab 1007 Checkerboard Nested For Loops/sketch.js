//  Kawika Tu
// 	8/15/19
//  Checkerboard
//  The setup function function is called once when your program begins


//  Global variables
var squares = []  // declare b1 as a global variable
var y = 0
var x = 0
var alt = 1
// put setup code here
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(235);
  loadSquares();
  //  traverse array and run each ball
  for(var i = 0; i < squares.length; i++){
   squares[i].render();
 }//End forLoop
}//End Setup


function loadSquares(){
  for(var i = 0; i < 8; i++){
    for(var j = 0; j < 8; j++){
      if(alt%2 === 0){
        clr = color(150,0,200)
        console.log("red color runs")
      }
      if(alt%2 === 1){
        clr = color(0,150,200)
        console.log("blue color runs")
      }
      squares[(i*8)+j] = new Square(x,y,clr)
      x = x + 100
      alt = alt + 1
    }//end forLoop
    y = y + 100
    alt = alt + 1
    x = 0
  }//end forLoop
}//End loadSquares
