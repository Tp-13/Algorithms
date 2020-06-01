var movingRect
var fixedRect
var movingRect1
var fixedRect1
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "red";
  movingRect.velocityX = -5;

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 5;

  movingRect1 = createSprite(400, 100, 50, 50);
  movingRect1.shapeColor = "blue";
  movingRect1.velocityY = 5;

  fixedRect1 = createSprite(400,300,50,50);
  fixedRect1.shapeColor = "blue";
  fixedRect1.velocityY = -5;
}

function draw() {
  background(255,255,255);  
  //movingRect.x = mouseX;
  //movingRect.y = mouseY;
  if (movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 
      && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
      && movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
      && fixedRect.y-movingRect.y < movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    movingRect.velocityX = -1*(movingRect.velocityX);
    fixedRect.velocityX*=(-1)
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  if (movingRect1.x-fixedRect1.x < movingRect1.width/2+fixedRect1.width/2 
    && fixedRect1.x-movingRect1.x < movingRect1.width/2+fixedRect1.width/2
    && movingRect1.y-fixedRect1.y < movingRect1.height/2+fixedRect1.height/2
    && fixedRect1.y-movingRect1.y < movingRect1.height/2+fixedRect1.height/2){
  movingRect1.shapeColor = "red";
  fixedRect1.shapeColor = "red";
  movingRect1.velocityY = -1*(movingRect1.velocityY);
  fixedRect1.velocityY*=(-1)
 }
  else{
    movingRect1.shapeColor = "green";
    fixedRect1.shapeColor = "green";
}

  drawSprites();
}