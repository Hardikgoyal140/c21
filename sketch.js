
var fixedRect, movingRect;
var gameObject1, gameObject2;
var box1;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  box1 = createSprite(200, 400,80,80);
  box1.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(box1,movingRect)){
    box1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }
  
  else {
    box1.shapeColor = "green";
  
    movingRect.shapeColor = "green"
  }
 

//bounceOff(movingRect,fixedRect)
  drawSprites();
}




