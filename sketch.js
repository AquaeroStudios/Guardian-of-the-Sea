var START = 0
var PLAY = 1;
var END = 2;
var gameState = 0;
var bagImg;
var fish, boy_running;
var ground, invisibleGround, groundImage;
var bottleImg, canImg, spoonImg, strawImg;
var bgImg;
//var cloudsGroup, cloudImage;
var obstaclesGroup, boat, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6;
var title_img
//var form;
var score=0;
var Point=0;

var gameOver, restart;

//Things to do:
// Crop the images
// Fix the images
// Do restart button

localStorage["HighestScore"] = 0;

function preload(){
  boy_running = loadAnimation("images/fish1 (2).png", "images/fish2 (2).png", "images/fish3 (2).png");
  bgImg = loadImage("images/bg.jpg")
  bagImg = loadImage("images/garbage/bag.png");
  bottleImg = loadImage("images/garbage/bottle.png")
  canImg = loadImage("images/garbage/can.png");
  spoonImg = loadImage("images/garbage/spoon.png")
  strawImg = loadImage("images/garbage/straw.png")
  groundImage = loadImage("images/ground2.png");
  title_img = loadImage("images/tittle.png");
  instructions_img = loadImage("images/instructions.jpg");
  //cloudImage = loadImage("images/cloud.png");
  logo = loadImage("images/logo.png");
  boy_collided = loadAnimation("images/fish1 (2).png");
  tree = loadImage("images/obstacles/tree.png");
  chair = loadImage("images/obstacles/chair.png");
  boat2 = loadImage("images/obstacles/boat (2).png");
  yacht = loadImage("images/obstacles/yacht.png");
  umbrella = loadImage("images/obstacles/umbrella2.png");
  castle = loadImage("images/obstacles/castle.png");
  obstacle5 = loadImage("images/obstacles/obstacle5.png");
  obstacle6 = loadImage("images/obstacles/obstacle6.png");
  
  //gameOverImg = loadImage("gameOver.png");
  restartImg = loadImage("images/restart.png");

}

function setup() {
  createCanvas(600, 400);
  
  fish = createSprite(200,180,20,50);
  title_img.scale = 0.5;
  
  
  fish.addAnimation("running",boy_running);
  fish.addAnimation("collided", boy_collided);
  fish.scale = 0.15;

  
 // ground = createSprite(200,290,400,20);
 // ground.addImage("ground",groundImage);
 // ground.x = ground.width /2;
 // ground.velocityX = -(6 + 3*score/100);
  
  //gameOver = createSprite(300,100);
 // gameOver.addImage(gameOverImg);
  
  restart = createSprite(300,140);
  restart.addImage(restartImg);
  
  //gameOver.scale = 0.5;
  restart.scale = 0.2;

  //gameOver.visible = false;
  restart.visible = false;
  
  invisibleGround = createSprite(200,300,400,10);
  invisibleGround.visible = false;
  
  garbageGroup = new Group();
  //cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;

  if(gameState === START){
    form = new Form();
    form.display();
    fish.visible = false;
    //ground.velocityX = 0;
   // ground.visible = false;
  }
}

function draw() {
    fish.setCollider("rectangle",0,0,250,300)
  //fish.debug = true;
  //background(bgImg);
  
  if (gameState===PLAY){
    background(bgImg);
    textSize(45);
    textFont('cursive');
    fill('orange');
    text("Score: "+ Point, 400,100);
    fish.visible= true;
   // ground.visible = true;
    score = score + Math.round(getFrameRate()/60);
   // ground.velocityX = -(6 + 3*score/100);
  
    if(keyDown("space") && fish.y >= 230) {
      fish.velocityY = -12;
    }
  
    fish.velocityY = fish.velocityY + 0.8
  
   // if (ground.x < 0){
    //  ground.x = ground.width/2;
    //}
  
    fish.collide(invisibleGround);
    //spawnClouds();
    spawnObstacles();
    spawnGarbage();
    
  
    if(obstaclesGroup.isTouching(fish)){
        gameState = END;
    }
    if(garbageGroup.isTouching(fish)){
      garbageGroup.destroyEach();
      Point = Point + 1;
    }

  }
  else if (gameState === END) {
     background(bgImg);
    //gameOver.visible = true;
   // restart.visible = true;
    fish.changeAnimation("collided",boy_collided);
    textFont('fantasy');
    textSize(80);
    fill('green');
    text('Game Over ',120,100);
    textSize(60);
    fill('orange');
    text('Score: ' + Point,200,360);
    form.reset();
    
    //set velcity of each game object to 0
    //ground.velocityX = 0;
    fish.velocityY = 0;
    obstaclesGroup.setVelocityXEach(0);
    //cloudsGroup.setVelocityXEach(0);
    garbageGroup.setVelocityXEach(0);
    
    garbageGroup.destroyEach();
    
    //set lifetime of the game objects so that they are never destroyed
    obstaclesGroup.setLifetimeEach(-1);
    //cloudsGroup.setLifetimeEach(-1);
   // obstaclesGroup.destroyEach();
    fish.visible = true;
    obstaclesGroup.visible = true;
    
  //  if(mousePressedOver(restart)) {
   //   reset();
   // }
  }
  
  drawSprites();
}

/*function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,120,40,10);
    cloud.y = Math.round(random(80,120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = fish.depth;
    fish.depth = fish.depth + 1;
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}*/

function spawnObstacles() {
  if(frameCount % 60 === 0 ) {
    var obstacle = createSprite(600,275,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -(6 + 3*score/100);
    //obstacle.setCollider("rectangle",0,0,140,100)
    //generate random obstacles
    var rand = Math.round(random(1,5));
    switch(rand) {
      case 1: obstacle.addImage(boat2);
              obstacle.setCollider("rectangle",0,0,140,80)
              break;
      case 2: obstacle.addImage(yacht);
              break;
      case 3: obstacle.addImage(umbrella);
              obstacle.setCollider("rectangle",0,0,140,80)
              break;
      case 4: obstacle.addImage(castle);
              obstacle.setCollider("rectangle",0,0,150,120)
              break;
      case 5: obstacle.addImage(tree);
              break;
       case 6: obstacle.addImage(chair);
              break;
      default: break;

    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

function spawnGarbage(){
  if(frameCount % 50 === 0 && !(frameCount % 300 === 0)) {
    var garbage = createSprite(600,250,200, 200);
    //garbage.debug = true;
    //generate random obstacles
    var rand = Math.round(random(1,5));
    console.log(rand);
    switch(rand) {
      case 1: garbage.addImage(bagImg);
              break;
      case 2: garbage.addImage(bottleImg);
              break;
      case 3: garbage.addImage(canImg);
              break;
      case 4: garbage.addImage(spoonImg);
              break;
      case 5: garbage.addImage(strawImg);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    garbage.scale = 0.075;
    garbage.lifetime = 300;
    garbage.velocityX = -(6 + 3*score/100);
    //add each obstacle to the group
    garbageGroup.add(garbage);
    garbage.depth  = fish.depth;
    fish.depth = fish.depth +1;
    //garbage.visible = true;
  }
}

function reset(){
  gameState = PLAY;
 // gameOver.visible = false;
  restart.visible = false;
  
  obstaclesGroup.destroyEach();
  //cloudsGroup.destroyEach();
  
  fish.changeAnimation("running",boy_running);
  
 // if(localStorage["HighestScore"]>Point){
 //   localStorage["HighestScore"] = Point;
 // }
 // console.log(localStorage["HighestScore"]);
  
  Point = 0;
  
}