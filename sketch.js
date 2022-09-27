var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obs1, obs2, obs3, obs4, obs5, obs6;

var rand;

var newImage;

var score;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
 
  obs1 = loadImage ("obstacle1.png");
  obs2 = loadImage ("obstacle2.png");
  obs3 = loadImage ("obstacle3.png");
  obs4 = loadImage ("obstacle4.png");
  obs5 = loadImage ("obstacle5.png");
  obs6 = loadImage ("obstacle6.png");

}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hola"+ 5)
  score=0;
  
}

function draw() {
  background(180);
  text("puntuación:" + score, 10,20);
  score=score+ Math.round(frameCount/60);
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //aparecer nubes
  spawnClouds();
  spawnObstacles();
  drawSprites();
}

function spawnClouds() {
  //escribir aquí el código para aparecer las nubes
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //asignar tiempo de vida a una variable
    cloud.lifetime = 190
    
    //ajustar la profundidad
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnObstacles(){
if (frameCount% 60 === 0){
var obstacle= createSprite(600,170,10,20);
obstacle.velocityX=-4;
rand=Math.round (random(1,6));
switch (rand){
case 1:obstacle.addImage(obs1);
break;
case 2:obstacle.addImage(obs2);
break;
case 3:obstacle.addImage(obs3);
break;
case 4:obstacle.addImage(obs4);
break;
case 5:obstacle.addImage(obs5);
break;
case 6:obstacle.addImage(obs6);
break;
default:break;

}
obstacle.scale=0.5;
obstacle.lifetime=180


}

  
}

 

