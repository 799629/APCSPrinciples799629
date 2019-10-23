//  Kawika Tu
// 	10/23/19
//  The setup function function is called once when your program begins
var bars = [];
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 250, 255);
  fill(200, 30, 150);
  var oldlist = createIntList(10)
  printList(oldlist)
  loadBars(oldlist);
  newlist = BubbleSort(oldlist)
  printList(newlist)
  loadBars(newlist)
}//end setup

//function draw(){
  //background(250, 250, 250, 20);
  //runBars(newlist);
//}

function createIntList(n){
  var list = [];
  for(var i = 0; i < n; i++){
    list.push(int(random(1,100)));
  }
  return(list);
}//function end

function loadBars(list){
  var n = list.length
  for(var i = 0; i < n; i++){
    var x = (width/n)*i
    list[i] = new Bars(x,0,width/n,list[i])
  }
  console.log("loadBars works")
}

function runBars(list){
  for(var i = 0; i < list.length; i++){
    bars[i].run();
  }//end for loop
}//end function

function BubbleSort(list){
  frameRate(1);
  for (i=0; i<list.length-1; i++){
    for (j=0; j<list.length-1-i; j++){
      if (list[j+1] < list[j]){
        swap(list, j+1, j);
      }//end i for loop
    }//end j for loop
    runBars(bars);
  }//end for loop
  return(list);
}//end function

function swap(list, a, b){
  var temp =  list[a]
  list[a] = list[b]
  list[b] = temp
  return(list[b],list[a])
}//end swap function

function printList(list){
  console.log(list)
}//end printlist function
