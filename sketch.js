
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
	var box1, box2, box3
	var paper
	
function preload()
{
	
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper (100,320)
ground = new Ground(600,height,1200,20)
box1 = createSprite (1080,790,220,10);
World.add(world,box1);

box2 = createSprite (975,740, 10, 100)
World.add(world,box2);

box3 = createSprite (1195,740,10,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();

console.log("ground")

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 130, y:-130})
	}
} 


