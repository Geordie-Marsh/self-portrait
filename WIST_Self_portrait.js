var pointSize=120;
var printedString = "o";

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(0);
 fill(255);
 textSize(120);
}
function draw() {
  
}

function mousePressed(){
  text(printedString, mouseX, mouseY);
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) {
    pointSize-=10; 
  } else if (keyCode === RIGHT_ARROW) {
    pointSize+=10;
  } else if (keyCode === DOWN_ARROW) {
    printedString = ".";
    fill(0);
  } else {
    printedString = key;
    fill(255);
  }
  textSize(pointSize);
}
