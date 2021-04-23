//variables
var floor,backgroundimg,marioimgLEFT,marioimgRIGHT,MARIOmoving,MARIOjump,bck,marioleftmovement;
var mario,grd;
var bx1,bx2,bx3,bx4,bx5,bx6,bx7,bx8,bx9,bx10;
var single,double,triple,blocks,lb;
var barrier1, barrier2;
var si,ei;
var lb1,lb2,lb3,lb4,lb5,lb6,lb7,lb8,lb9,lb10,lbGROUP;
var pil1,pil2,pil3,pil4,pil5,p1,p2;

//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//PRELOAD
function preload(){


backgroundimg=loadImage("img folder/game elements/background.png")
marioimgLEFT=loadAnimation("img folder/mario img/mario back.png")
marioimgRIGHT=loadAnimation("img folder/mario img/mario front.png")
MARIOmoving=loadAnimation("img folder/mario img/mario1 movement.png","img folder/mario img/mario2 movement.png","img folder/mario img/mario3 movement.png");
marioleftmovement=loadAnimation("img folder/mario img/m1.png","img folder/mario img/m2.png","img folder/mario img/m3.png");
MARIOjump=loadAnimation("img folder/mario img/mario jumping.png");
MARIOjump2=loadAnimation("img folder/mario img/mj.png")

//loading blocks
single=loadImage("img folder/game elements/single block.png")
double=loadImage("img folder/game elements/two blocks.png")
triple=loadImage("img folder/game elements/3blocks.png")
blocks=loadImage("img folder/game elements/6blocks.png")

lb=loadImage("img folder/game elements/points.png")

p1=loadImage("img folder/pillars/p1.png");

p2=loadImage("img folder/pillars/p2.png");
}



function setup() {
// WORLD properties
createCanvas(displayWidth,displayHeight);
engine = Engine.create();
world = engine.world;
//GROUND construction
floor=new Ground(2490,displayHeight-90,5000,200);
//BACKGROUND construction
bck=new background1(displayWidth*1.62,displayHeight/2,5000,900)

si=new startimg(-340,displayHeight/2,650,900);
e1=new endimg(5315,displayHeight/2,650,900);
//ground
grd=createSprite(displayWidth/2,685,10000,20);
grd.visible=false;
//MARIO
mario=createSprite(180,600,20,20)
mario.addAnimation("mario right",marioimgRIGHT);
mario.addAnimation("jumping",MARIOjump);
mario.addAnimation("moving",MARIOmoving);
mario.addAnimation("stop",marioimgLEFT);
mario.addAnimation("leftmovement",marioleftmovement);
mario.addAnimation("jumping2",MARIOjump2);
mario.scale=0.6;
Engine.run(engine);

//blocks for mario
bx1=createSprite(1100,450,80,80)
bx1.addImage(triple);
bx2=createSprite(1650,420,80,80)
bx2.addImage(double);
bx3=createSprite(2300,450,80,80)
bx3.addImage(blocks);
bx4=createSprite(2900,420,80,80)
bx4.addImage(single);
bx5=createSprite(3500,460,80,80)
bx5.addImage(triple);
bx6=createSprite(4000,420,80,80)
bx6.addImage(single);
//flag blocks
bx7=createSprite(4770,640,80,80)
bx7.addImage(blocks);
bx8=createSprite(4880,571,80,80)
bx8.addImage(triple);
bx9=createSprite(4732,571,80,80)
bx9.addImage(single);
bx10=createSprite(4917,500,80,80)
bx10.addImage(double);

//making edges for the full canvas
barrier1=createSprite(10,displayHeight/2,20,2000)
barrier1.visible=false;
barrier2=createSprite(5000,displayHeight/2,20,2000)
barrier2.visible=false;

//making point blocks
lb1=createSprite(1300,100,80,80);
lb1.addImage(lb)
lb1.scale=0.3;

lb2=createSprite(1788,140,80,80);
lb2.addImage(lb)
lb2.scale=0.3;

lb3=createSprite(2180,100,80,80);
lb3.addImage(lb)
lb3.scale=0.3;

lb4=createSprite(2400,100,80,80);
lb4.addImage(lb)
lb4.scale=0.3;

lb5=createSprite(2900,70,80,80);
lb5.addImage(lb)
lb5.scale=0.3;

lb6=createSprite(3500,100,80,80);
lb6.addImage(lb)
lb6.scale=0.3;

lb7=createSprite(4000,70,80,80);
lb7.addImage(lb)
lb7.scale=0.3;

//making pillars
pil1=createSprite(1400,635,20,20)
pil1.addImage(p1);

pil2=createSprite(1900,615,20,20)
pil2.addImage(p2);

pil3=createSprite(2690,635,20,20)
pil3.addImage(p1);

pil4=createSprite(3250,615,20,20)
pil4.addImage(p2);

pil5=createSprite(4200,635,20,20)
pil5.addImage(p1);


mario.setCollider("rectangle",0,5,170,220);
mario.debug=false;


}


function draw() {
  //background color
  background("black");

console.log(mario.x);

//jump when the space key is pressed
if(keyDown("space")&& mario.y >= 300 && mario.velocityX===8) {
  
  mario.changeAnimation("jumping",MARIOjump)
  mario.velocityY = -22;
  
}
else if(keyDown("space")&& mario.y >= 300 && mario.velocityX===-8){
  
  mario.changeAnimation("jumping2",MARIOjump2)
  mario.velocityY = -22;
  
 
}
else if(keyDown("space")&& mario.y >= 300 && mario.velocityX===0){
  mario.changeAnimation("jumping",MARIOjump)
  mario.velocityY = -22;
 


}

//movement
if(keyWentDown("Right_arrow")&& mario.y>=300){

  mario.changeAnimation("moving",MARIOmoving);
  mario.velocityX=8;

  }

if(keyWentUp("Right_arrow")&& mario.y >= 300){

  mario.changeAnimation("mario right",marioimgRIGHT);
  mario.velocityX=0;
  }

  if(keyWentDown("Left_arrow")&& mario.y>=300){

    mario.changeAnimation("leftmovement",marioleftmovement);
    mario.velocityX=-8;


    }
  
  if(keyWentUp("Left_arrow")&& mario.y >= 300){
  
    mario.changeAnimation("stop",marioimgLEFT);
    mario.velocityX=0;
    }


if(mario.isTouching(lb1)){
lb1.scale=lb1.scale-0.027
if(lb1.scale<=-0.078){
  lb1.visible=false
  lb1.destroy();
}}

if(mario.isTouching(lb2)){
  lb2.scale=lb2.scale-0.027
  if(lb2.scale<=-0.078){
    lb2.visible=false
    lb2.destroy();
  }}

  if(mario.isTouching(lb3)){
    lb3.scale=lb3.scale-0.027
    if(lb3.scale<=-0.078){
      lb3.visible=false
      lb3.destroy();
    }}

    if(mario.isTouching(lb4)){
      lb4.scale=lb4.scale-0.027
      if(lb4.scale<=-0.078){
        lb4.visible=false
        lb4.destroy();
      }}

      if(mario.isTouching(lb5)){
        lb5.scale=lb5.scale-0.027
        if(lb5.scale<=-0.078){
          lb5.visible=false
          lb5.destroy();
        }}

        if(mario.isTouching(lb6)){
          lb6.scale=lb6.scale-0.027
          if(lb6.scale<=-0.078){
            lb6.visible=false
            lb6.destroy();
          }}

          if(mario.isTouching(lb7)){
            lb7.scale=lb7.scale-0.027
            if(lb7.scale<=-0.078){
              lb7.visible=false
              lb7.destroy();
            }}

  camera.position.x = mario.x;
  camera.position.y = displayHeight/2

//add gravity
mario.velocityY = mario.velocityY + 0.8

//mario collision with boxes
mario.collide(bx1);
mario.collide(bx2);
mario.collide(bx3);
mario.collide(bx4);
mario.collide(bx5);
mario.collide(bx6);
mario.collide(bx7);
mario.collide(bx8);
mario.collide(bx9);
mario.collide(bx10);

//edge collision
mario.collide(barrier1);
mario.collide(barrier2);

//mario collision with pillars
mario.collide(pil1);
mario.collide(pil2);
mario.collide(pil3);
mario.collide(pil4);
mario.collide(pil5);

//collision properties
mario.collide(grd);

//DISPLAY
bck.display();
floor.display();
si.display();
e1.display();
drawSprites();

}


