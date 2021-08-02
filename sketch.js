
// This will open the dilog box as soon as webpage
var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable:');
function setup(){
  var b = createButton("click here to Swap");
  var b1 = createButton("Add");
  var b2 = createButton("subtract");
  var b3 = createButton("multiply");
  var b4 = createButton("divide");
  b1.mousePressed(add);
  b2.mousePressed(subtract);
  b3.mousePressed(multiply);
  b4.mousePressed(divide);
  
  }
function add(){
  // This is a life of the code. outside of the braces this code will not work
  var c = a+b; 
  console.log("answer = "+ c);
  // console.log will print on the bowser outout of the addition and we have written a plus sign to combine
  // english and the virables, This opration of add plus is know as concatenation.
}

function subtract(){

  var c = a-b;
  console.log("answer = "+ c);
}
function divide(){

  var c = a/b;
  console.log("answer = "+ c);
}

function multiply(){

  var c = a*b;
  console.log("answer = "+ c);
}
function draw()
{
}
