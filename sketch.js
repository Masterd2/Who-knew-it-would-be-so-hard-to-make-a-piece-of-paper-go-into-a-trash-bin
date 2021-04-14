
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var paperobj, imagebecauseimagesarentworkingnormally;
var world;

function preload() {
	imagebecauseimagesarentworkingnormally = loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperobj=new paper(130,145,10,10)
	paperobj.scale=0.25
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  keyPressed();

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperobj.body, paperobj.body.position, {x:130,y:-145})
	}
}