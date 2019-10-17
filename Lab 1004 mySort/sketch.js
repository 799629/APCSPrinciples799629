//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var oldlist = [9,5,3,2,1,7,6,8,4]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  newlist = BubbleSort(oldlist)
  printList(newlist)
}//end setup

function BubbleSort(list){
  for(var sorted = 0;sorted < list.length;sorted++){
    for(var i = list.length; i <= 0; i++){
      if(int(list[i])>int(list[i+1])){
        console.log("it works")
        list[i],list[i+1] = swap(list, i, (i+1))
      }
      else if(list[i]<=list[i+1]){
        sorted = sorted + 1
      }
    }//end iterating for loop
  }//end sorted for loop
  return (list)
}

function swap(list, a, b){
  //var temp =  list[a]
  //list[a] = list[b]
  //list[b] = temp
  return(list[b],list[a])
}

function printList(list){
  for(var i = 0;i < list.length;i++){
    console.log(list[i])
  }
}
