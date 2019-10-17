//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var oldlist = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  oldlist = createIntList(oldlist, 100)
  console.log("This is the origional list:")
  printList(oldlist)
  newlist = insertionSort(oldlist);
  console.log("This is the new sorted list:")
  printList(newlist);
}//end setup

function insertionSort(list){
  for(var i = 0; i < list.length; i++){
    if(list[i] > list[i+1]){
      swap(list,i,i+1)
    }
    for(var j = i; j > 0; j--){
      if(list[j] < list[j-1]){
        swap(list,j,j-1)
      }// end if statement
    }//end j for loop
  }//end i for loop
  return(list)
}

function createIntList(list, n){
  list = [];
  for(var i = 0; i < n; i++){
    list.push(int(random(1,100)))
  }
  return(list)
}

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
