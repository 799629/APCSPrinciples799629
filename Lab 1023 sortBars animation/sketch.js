//Kawika Tu
//APCSP P1

var barlist = [];
var x = 0;
var i = barlist.length-1;
var n = 100;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  loadBars(50);
  frameRate(15);
}

function changeLocation(list,x,y){
  var temploc = list[x].loc.x;
  list[x].loc.x = list[y].loc.x;
  list[y].loc.x = temploc;
}

//  The draw function is called @ 30 fps
function draw() {
  background(255,255,255);
  runbars();
  i = i + 1
  for(var j = 0; j < barlist.length-1; j++){
    if(barlist[j].h > barlist[j+1].h){
      swap(barlist, j, j+1);
      changeLocation(barlist, j, j+1);
    }//end if statement
  }
}

function loadBars(n){
  for(var i = 0; i < n; i++){
    numbars = n
    barlist[i] = new Bar(x, Bar.h);
    x = x + width / n;
  }
}

function runbars(){
 for(var i = 0; i < barlist.length; i++){
   barlist[i].run();
 }
}

function swap(list,x,y){
  var temporary = list[x];
  list[x] = list[y];
  list[y] = temporary;
}
