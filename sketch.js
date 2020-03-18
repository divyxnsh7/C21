var fixedRect, movingRect;
var obj1, obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "blue";
  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  obj1.x = World.mouseX;
  obj1.y = World.mouseY;

  if (isTouching(obj1,obj2)) {
  obj1.shapeColor = "red";
  obj2.shapeColor = "red";  
  }
  else {
  obj1.shapeColor = "blue";
  obj2.shapeColor = "blue";
  }
  drawSprites();
}

