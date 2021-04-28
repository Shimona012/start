var bg;
var space;
function preload(){
  bg=loadImage("images/first bg.png");
}
function setup() {
  createCanvas(800,400);
  space=createSprite(400, 200, 1000, 1000);
  space.visible=false;
}

function draw() {
  background(bg);  
  if(mousePressedOver(space)){
    window.location.href = "https://shimona012.github.io/start/index.html";
window.location.replace("https://shimona012.github.io/middle/");
   // open(,"video")
  }
  drawSprites();
}