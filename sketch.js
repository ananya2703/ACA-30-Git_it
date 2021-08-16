
var player;
var target;
var edges;
var snakeGroup;


function setup() {
  createCanvas(1000,600);
  bunnyImage = loadImage("images/bunny.png");
  carrotImage = loadImage("images/carrot.png");
  snakeImage = loadImage("images/snake.png");
  gardenImage = loadImage("images/garden.png");
  brickImage = loadImage("images/brick.png");
  edges=createEdgeSprites();

  snakeGroup= new Group();

  player=createSprite(40,550,20,20);
  player.addImage(bunnyImage);
  player.scale = 0.3;

  target=createSprite(900,60);
  target.addImage(carrotImage);
  target.scale = 0.1;

  obs1=createSprite(100,200,100,15);
  obs1.velocityX=1;
  obs1.addImage(brickImage);
  obs1.scale = 0.4;

  obs2=createSprite(240,200,100,15);
  obs2.velocityX=-1;
  obs2.addImage(brickImage);
  obs2.scale = 0.4;

  obs3=createSprite(380,200,100,15);
  obs3.velocityX=1;
  obs3.addImage(brickImage);
  obs3.scale = 0.4;

  obs4=createSprite(520,200,100,15);
  obs4.velocityX=-1;
  obs4.addImage(brickImage);
  obs4.scale = 0.4;

  obs5=createSprite(60,250,100,15);
  obs5.velocityX=1;
  obs5.addImage(brickImage);
  obs5.scale = 0.4;

  obs6=createSprite(210,250,100,15);
  obs6.velocityX=-1;
  obs6.addImage(brickImage);
  obs6.scale = 0.4;

  obs7=createSprite(360,250,100,15);
  obs7.velocityX=1;
  obs7.addImage(brickImage);
  obs7.scale = 0.4;

  obs8=createSprite(500,250,100,15);
  obs8.velocityX=-1;
  obs8.addImage(brickImage);
  obs8.scale = 0.4;
  
}

function draw() {
  background(gardenImage);

  stroke("green");
  noFill();
  ellipse(100,350,40,30);
  generateSnakes();

  player.bounceOff(edges[0]);
  player.bounceOff(edges[1]);
  player.bounceOff(edges[2]);
  player.bounceOff(edges[3]);

  obs1.bounceOff(edges[0]);
  obs1.bounceOff(edges[1]);
  obs2.bounceOff(edges[0]);
  obs2.bounceOff(edges[1]);
  obs3.bounceOff(edges[0]);
  obs3.bounceOff(edges[1]);
  obs4.bounceOff(edges[0]);
  obs4.bounceOff(edges[1]);
  obs5.bounceOff(edges[0]);
  obs5.bounceOff(edges[1]);
  obs6.bounceOff(edges[0]);
  obs6.bounceOff(edges[1]);
  obs7.bounceOff(edges[0]);
  obs7.bounceOff(edges[1]);
  obs8.bounceOff(edges[0]);
  obs8.bounceOff(edges[1]);

  if(keyDown("up")) {
    player.y=player.y-3;
  }
  if(keyDown("down")) {
    player.y=player.y+3;
  }
  if(keyDown("left")) {
    player.x=player.x-3;
  }
  if(keyDown("right")) {
    player.x=player.x+3
  }


  drawSprites();

  function generateSnakes(){
    if(frameCount % 30===0){
      console.log(frameCount);
      var snake = createSprite(100,350,40,5);
      snake.addImage(snakeImage);
      snake.scale= random(0.1, 0.4);
      snake.velocityX=random(-4,4);
      snake.velocityY=random(-4,4);
      snakeGroup.add(snake);
    }
  }

  for(var i = 0 ; i< (snakeGroup).length ;i++){
    var temp = (snakeGroup).get(i) ;
    if (player.isTouching(temp)) {
      player.x=40;
      player.y=550;
    }   
  }

  
  if(player.isTouching(target)) {
    text("YOU WIN" ,100,100);
  }
  if(player.isTouching(obs1)) {
    obs1.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs2)) {
    obs2.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs3)) {
    obs3.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs4)) {
    obs4.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs5)) {
    obs5.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs6)) {
    obs6.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs7)) {
    obs7.velocityX=0;
    text("YOU LOSE" ,100,100);
    player.x = 40;
    player.y = 550;
  }
  if(player.isTouching(obs8)) {
    obs8.velocityX=0;
    text("YOU LOSE",100,100);
    player.x = 40;
    player.y = 550;
  }

  
  drawSprites();
}