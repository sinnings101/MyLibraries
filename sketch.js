var fixedRectangle;
var movingRectangle;
var block
function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(400, 200, 100, 50);
  movingRectangle =   createSprite(600, 200, 50, 100);
  block = createSprite(400,50,50,50);
  movingRectangle.debug = true;
  fixedRectangle.debug = true;
  
  fixedRectangle.velocityY = -2
  block.velocityY = 1

  fixedRectangle.shapeColor = "blue";
  movingRectangle.shapeColor = "blue";
}

function draw() {
  background(0,0,0);

  // movingRectangle.x = World.mouseX;
  // movingRectangle.y = World.mouseY;

  bounceOff(fixedRectangle,block);

  drawSprites();
}