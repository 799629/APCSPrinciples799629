//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var oldlist = [10,9,5,3,2,1,7,6,8,4]
var bars = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(255, 255, 255);
  fill(200, 30, 150);
  newlist = BubbleSort(oldlist)
  printList(newlist)
  loadBars(oldlist);
  bars[].run()
}//end setup

function loadBars(list){
  var n = list.length
  for(var i = 0; i < n; i++){
    var x = (width/n)*i
    console.log("loadBars works")
    bars[i] = new Bars(x,0,width/n,list[i])
  }
}

function BubbleSort(list){
  for (i=0; i<list.length-1; i++){
    for (j=0; j<list.length-1-i; j++){
      if (list[j+1] < list[j]) {
        swap(list, j+1, j)
      }
    }
  }//end for loop
  return (list)
}//end function

function swap(list, a, b){
  var temp =  list[a]
  list[a] = list[b]
  list[b] = temp
  return(list[b],list[a])
}

function printList(list){
  console.log(list)
}

//function createList(){

//}
