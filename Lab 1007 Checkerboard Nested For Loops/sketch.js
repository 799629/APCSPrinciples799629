//  Kawika Tu
// 	8/15/19
//  Checkerboard
//  The setup function function is called once when your program begins


//  Global variables
var squares = []  // declare b1 as a global variable
var y = 0
var x = 0

// put setup code here
function setup() {
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

    }//end forLoop
    y = y + 100
  }//end forLoop
}//End loadSquares


}
