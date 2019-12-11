//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var balls = [];
var x = 15;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(var i = 0; i < 20; i++){
    balls[i] = new Ball(x,400);
    x = x + (800/20);
    console.log(balls[i].red);
  }//end for loop
  balls = BubbleSort(balls);
  for(var i = 0; i < 20; i++){
    balls[i].run();
  }
}//end setup

function BubbleSort(list){
  for (i=0; i<list.length-1; i++){
    for (j=0; j<list.length-1-i; j++){
      if (list[j+1].red < list[j].red) {
        swap(list, j, j+1);
      }
    }
  }
  return (list)
}

//function createIntList(list, n){
  //list = [];
  //for(var i = 0; i < n; i++){
    //list.push(int(random(1,100)))
  //}
  //return(list)
//}

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
