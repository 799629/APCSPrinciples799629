//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var oldlist = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  oldlist = loadNumbers(11)
  console.log("This is the origional list:")
  logNumber(oldlist);
  newlist = mySort(oldlist);
  console.log("This is the new sorted list:")
  logNumber(newlist);
}//end setup

function mySort(list){
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
  }//end i for loop
  return(list)
}//end function

function loadNumbers(n){
  var list = [];
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

function logNumber(list){
  console.log(list)
}

//function createList(){

//}
