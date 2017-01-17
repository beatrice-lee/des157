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


function draw() { //draw - runs once a frame
    background(225);


function mouseClicked(){ //mouseClick runs everytime the mouse is clicked
  //if the mouse is pressed and released, changed random color
    fill(random(0,255), random(0,255), random(0,255), 50);

    //rect after the mouse is pressed to work
    rect(mouseX, mouseY, y, y);
}
