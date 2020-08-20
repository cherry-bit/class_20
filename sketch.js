var fixed, moving;



function setup() {
  createCanvas(1200,800);
   fixed=createSprite(300, 200, 100, 50);
    moving=createSprite(500,200,50,50);
   fixed.shapeColor="green";
   moving.shapeColor="green";


}

function draw() {
  background(0,0,0);
  
  moving.x=World.mouseX;
  moving.y=World.mouseY;

  if (moving.x-fixed.x<fixed.width/2+moving.width/2){
    fixed.shapeColor="red";
    moving.shapeColor="red";
  }

  else{
    fixed.shapeColor="green";
   moving.shapeColor="green";

  }

  drawSprites();
}





