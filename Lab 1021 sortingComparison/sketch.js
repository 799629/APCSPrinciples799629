//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var oldlist = [];
var selectionSwaps = 0;
var bubbleSwaps = 0;
var insertionSwaps = 0;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  oldlist = createIntList(oldlist, 100)
  console.log("This is the origional list [randomized numbers]:")
  printList(oldlist);
  newlist = bubbleSort(oldlist);
  newlist = selectionSort(oldlist);
  newlist = InsertionSort(oldlist);
  console.log("This is the new sorted list:");
  printList(newlist);
  console.log("Bubble sort made " + str(bubbleSwaps) + " swaps");
  console.log("Insertion sort made " + str(insertionSwaps) + " swaps");
  console.log("Selection sort made " + str(selectionSwaps) + " swaps");
}//end setup

function selectionSort(list){
  for (var i = 0; i < list.length - 1; i++){
    var index = i;
    for (var j = i + 1; j < list.length; j++){
      if (list[j] < list[index]){
        var index = j;
      }//end if statement
    }//end j for loop
    var temp = list[i];
    list[i] = list[index];
    list[index] = temp;
    selectionSwaps = selectionSwaps + 1
  }//end i for loop
  return(list);
}//end function

function bubbleSort(list){
  for (i=0; i<list.length-1; i++){
    for (j=0; j<list.length-1-i; j++){
      if (list[j+1] < list[j]) {
        swap(list, j+1, j);
        bubbleSwaps = bubbleSwaps + 1
      }//end if statement
    }//end j for loop
  }//end i for loop
  return (list);
}//end function

function createIntList(list, n){
  list = [];
  for(var i = 0; i < n; i++){
    list.push(int(random(1,100)));
  }
  return(list);
}

function InsertionSort(list){
  for(var i = 0; i < list.length; i++){
    if(list[i] > list[i+1]){
      swap(list,i,i+1)
    }//end if statement
    for(var j = i; j > 0; j--){
      if(list[j] < list[j-1]){
        insertionSwaps = insertionSwaps + 1
        swap(list,j,j-1);
      }// end if statement
    }//end j for loop
  }//end i for loop
  return(list);
}

function swap(list, a, b){
  var temp =  list[a];
  list[a] = list[b];
  list[b] = temp;
  return(list[b],list[a])
}

function printList(list){
  console.log(list);
}

//function createList(){

//}
