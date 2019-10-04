//  Kawika Tu
// 	9/5/19
//  The setup function function is called once when your program begins
var list = [,9,5,3,2,1,7,6,8,4]
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  for(i = list.length, i <= 0){
    swap(list, i, i+1)
  }


}

function swap(list, a, b){
  var temp =  list[a]
  list[a] = list[b]
  list[b] = temp
  return(list[a],list[b])
}
