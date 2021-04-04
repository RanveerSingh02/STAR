const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;
var fairy,fairyImg;
var bgImg;
var star,starImg;




function preload()
{
   //preload the images here
   fairyImg = loadImage("images/fairy2.png");
   bgImg = loadImage("images/starnight.png");
   starImg = loadImage("images/star.png");
}

function setup() {
  createCanvas(1200, 700);
  
  engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

  fairy=createSprite(300,300,50,50);
  fairy.addImage(fairyImg);
  fairy.scale=0.3;
  
  star=createSprite(1000,100,50,50)
  star.addImage(starImg);
  star.scale= 0.2;



}


function draw() {
  background(bgImg);



drawSprites();
}
function keyPressed(){
  
    if(keyCode === RIGHT_ARROW){
       fairy.x = fairy.x +5
    }
    if(keyCode === LEFT_ARROW){
      fairy.x = fairy.x -5
   }

   if(keyCode === DOWN_ARROW){
   Matter.Body.setSatic(starBody,false);
 }


}
