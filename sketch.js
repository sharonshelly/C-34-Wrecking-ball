
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(300,400);
	ground = new Ground(400,680,800,20);
	rope = new Rope(ball.body,{x:300,y:50});
	wall = new Wall();


	Engine.run(engine);
  
}


function draw() {
  
  background(220);
  
  ground.display();
  ball.display();
  rope.display();
  wall.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}


