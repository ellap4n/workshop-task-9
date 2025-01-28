let webcam;
let i, rx, ry;
let glitch = [];
let scale = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  webcam = createCapture(VIDEO);
  webcam.size(width/scale, height/scale);
  webcam.hide();

  // setup for glitch 
  for(i = 0; i < 800; i++) {
    rx = random(0, width);
    ry = random(0, height);
    glitch[i] = new Square(rx, ry);
  }
}


function draw() {
  webcam.loadPixels();
  image(webcam, width/scale, height/scale);
  filter(POSTERIZE, 4);
  image(webcam, 0, 0);
  image(webcam, width/scale, 0);
  image(webcam, 0, height/scale);


  //Draw glitch on one screen 
  for(i = 0; i < glitch.length; i++) {
    glitch[i].show();
    glitch[i].move();
  }

  // invert colour 
  if(mouseX > width/scale && mouseY < height/scale) {
    let pX = mouseX/scale;
    let pY = mouseY/scale;
    let pixelColour = webcam.get(pX, pY);
    noStroke();
    fill(255 - pixelColour[0], 255 - pixelColour[1], 255 - pixelColour[2]);
    circle(mouseX, mouseY, 30);
  }
}

class Square {
  constructor(x, y) {
  this.x = x;
  this.y = y;
  }

  move() {
  this.x = this.x + random(-20,20);
  this.y = this.y + random(-10, 10);
  }

  show() {
    let pX = this.x/scale;
    let pY = this.y/scale;
    let pixelColour = webcam.get(pX, pY);
    fill(pixelColour[0], pixelColour[1], pixelColour[2]);
    stroke(random(0,255), random(0,255), random(0,255));
    rect(this.x/scale, this.y/scale, 20, 10);
  }

}
