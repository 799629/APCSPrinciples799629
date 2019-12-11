//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var unsortlist = [];
var sortlist = [];
var average;
var median;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  unsortlist = logNumbers(11)
  console.log("This is the origional list:")
  logNumber(unsortlist);
  sortlist = mySort(unsortlist);
  console.log("This is the new sorted list:")
  logNumber(sortlist);
  console.log("This is the mean of the list:")
  average = findAvg(sortlist);
  logNumber(average);
  console.log("This is the median of the list:")
  median = findMedian(sortlist);
  logNumber(median)
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

function logNumbers(n){
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

function logNumber(data){
  console.log(data)
}

function findAvg(list){
  var sum = 0;
  for(var i = 0; i < list.length; i++){
    sum = sum + list[i];
  }
  var avg = sum/list.length;
  return(avg)
}

function findMedian(list){
  var length = list.length;
  var median;
  if(length%2 == 1){
    median = list[(length/2)-.5]
  }else if(length%2 == 0){
    var v1 = list[(length/2)-1]
    var v2 = list[(length/2)]
    median = (v1 + v2)/2
  }
  return(median)
}//end function findMedian

//function createList(){

//}
