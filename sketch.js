var astronaut;
var bg;
var sleep ;
var gym;
var bath;
var brush;
var eat;
var move ;

function preload (){
bg = loadImage('images/iss.png');
sleep = loadImage('images/sleep.png');
brush = loadImage('images/brush.png');
gym = loadAnimation('images/gym1.png','images/gym2.png','images/gym11.png','images/gym12.png');
eat = loadAnimation('images/eat1.png','images/eat2.png');
bath = loadAnimation('images/bath1.png','images/bath2.png');
move = loadAnimation('images/move.png','images/move1.png');
}
function setup() {
  createCanvas(400, 400);

  astronaut=createSprite(300,230);
  astronaut.addAnimation('sleeping', sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill('white');

  
  if(keyDown('UP_ARROW')){
    astronaut.addAnimation('brushing',brush);
    astronaut.changeAnimation('brushing');
    astronaut.y= 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown('LEFT _ARROW')){
    astronaut.addAnimation('eating',eat);
    astronaut.changeAnimation('eating');
    astronaut.x=150;
    astronaut.y=300;
    astronaut.velocityX=0.5;
    astronaut.velocityY=0.5;
  }

  if(keyDown('RIGHT_ARROW')){
    astronaut.addAnimation('bathing',bath);
    astronaut.changeAnimation('bathing');
    astronaut.x=300;
    astronaut.velocityX=0.5;
    astronaut.velocityY=0.5;
  }

  if(keyDown('m')){
    astronaut.addAnimation('moveing',move);
    astronaut.changeAnimation('moveing');
    astronaut.velocityX=1;
    astronaut.velocityY=1;
  }
  
}