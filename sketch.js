var car;
var wall;
var speed;
var weight;
var deformation;


function setup() {
  createCanvas(1500,700);
speed = random (15,90);
weight = random (400,1500);

car = createSprite (50,200,50,50);
car.velocityX = speed;
car.shapeColor = "blue";

wall = createSprite (1120,200,60,height/2);
wall.shapeColor = "white";

deformation = (0.5 * weight * speed * speed)/ 22500;

}

function draw() {
  background("gray");  
  
if(isTouching(car,wall)){
    
    if(deformation < 100){
      car.shapeColor = "green";
    }

    if(100<deformation<180){
      car.shapeColor = "yellow";
    }
    
    if(deformation > 180){
      car.shapeColor = "red";
    }
}
 
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
  //making the function return a boolean value
      return true;
}
else {
  return false;
}
}