
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof = new Roof(380,100,200,50);

	bob1 = new Bob(200,300,10);

	line1 = new Line({x:380,y:100},bob1.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  line1.display();

  drawSprites();
 
}



