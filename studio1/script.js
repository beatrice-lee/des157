// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("this is a js comment"); //always make console log to start


function setup() {
  var myCanvas= createCanvas(800, 250);
  myCanvas.parent('mySketch')
  smooth();
    noStroke();
    rectMode(CENTER); //for every click the rect appears from center point
    y=100;
}

function draw() {
    background(225);


function mouseClicked(){
  //if the mouse is pressed, changed random color
    fill(random(0,255), random(0,255), random(0,255), 50);

    //rect after the mouse is pressed to work
    rect(mouseX, mouseY, y, y);
}
