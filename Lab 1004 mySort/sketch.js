//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var list = [,9,5,3,2,1,7,6,8,4]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  list = BubbleSort(list)
  console.log(list)
}//end setup

function BubbleSort(list){
  var sorted = 0
  while (sorted < list.length){
    sorted = 0
    for(i = list.length; i <= 0; i++){
      if(list[i]>list[i+1]){
        (list[i],list[i+1) = swap(list, i, i+1)
      }
      else if(list[i]<=list[i+1]){
        sorted = sorted + 1
      }
    }//end iterating for loop
  }//end sorted for loop
  return(list)
}

function swap(list, a, b){
  var temp =  list[a]
  list[a] = list[b]
  list[b] = temp
  return(list[a],list[b])
}
