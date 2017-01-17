// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment"); //always make console log to start


/*void setup() {
  size (800, 250);
  background(255);
}*/

function setup() {
  var myCanvas= createCanvas(800, 250);
  myCanvas.parent('mySketch')
  /*background(255);*/
}

function draw() {
  // statements here
  //if the mouse is pressed, changed color
 if (mouseIsPressed){
   console.log("pressed") //console log shows the message when you want to command something to show up (checking)
   fill(0);
 } else {
   fill(255);
 }
 ellipse(mouseX, mouseY, 50, 50); //ellipse after the mouse is pressed to work

}
