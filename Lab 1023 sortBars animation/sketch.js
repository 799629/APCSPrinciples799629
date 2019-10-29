//  Kawika Tu
// 	10/23/19
//  The setup function function is called once when your program begins
var barslist = [];
var oldlist = []
var newlist = []
var i = 0
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 250, 255);
  fill(200, 30, 150);
  oldlist = createIntList(10)
  printList(oldlist)
  loadBars(oldlist);
  //runBars(oldlist)
  frameRate(1)
  draw()
  //newlist = BubbleSort(oldlist)
}//end setup

function draw(){
  i++
  bubbleSort(barslist)
  loadBars(barslist)
}

function createIntList(n){
  var list = [];
  for(var i = 0; i < n; i++){
    list.push(int(random(1,100)));
  }
  return(list);
}//function end

function loadBars(list){
  for(var i = 0; i < list.length; i++){
    var x = (width/list.length)*i
    list[i] = new Bars(x,0,width/list.length,list[i])
  }
  runBars(list)
  return(list)
  console.log("loadBars works")
}

function runBars(list){
  for(var i = 0; i < list.length; i++){
    list[i].run();
  }//end for loop
}//end function

function bubbleSort(list){
    for (j=0; j<list.length-1-i; j++){
      if (list[j+1] < list[j]){
        swap(list, j+1, j);
      }//end i for loop
    }//end j for loop
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
