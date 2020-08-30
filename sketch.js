
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Ball1,Ball2,Ball3,Ball4,Ball5;
var log1,log2,log3,log4,log5;
var Chain1,Chain2,Chain3,Chain4,Chain5;

function preload()
{
	Title = loadImage("blackbg.png")
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

Radius=25;
	//Create the Bodies Here.
	Ball1 = new Ball(500,400,2*Radius,PI/2);
	Ball2 = new Ball(550,400,2*Radius,PI/2);
	Ball3 = new Ball(600,400,2*Radius,PI/2);
	Ball4 = new Ball(650,400,2*Radius,PI/2);
	Ball5 = new Ball(700,400,2*Radius,PI/2);
	log1 = new log(600,200,300,20,PI/2);
	//log2 = new log(600,200,300,20,PI/2);
	//log3 = new log(600,200,300,20,PI/2);
	//log4 = new log(600,200,300,20,PI/2);
	//log5 = new log(600,200,300,20,PI/2);
	Chain1 = new Chain(Ball1.body,log1.body,-100,10);
	Chain2 = new Chain(Ball2.body,log1.body,-50,10);
	Chain3 = new Chain(Ball3.body,log1.body,0,10);
	Chain4 = new Chain(Ball4.body,log1.body,50,10);
	Chain5 = new Chain(Ball5.body,log1.body,100,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  log1.display();
  //log2.display();
  //log3.display();
  //log4.display();
  //log5.display();


  Ball1.display();
  Ball2.display();
  Ball3.display();
  Ball4.display();
  Ball5.display();
  
  Chain1.display();
  Chain2.display();
  Chain3.display(); 
  Chain4.display();
  Chain5.display();

  imageMode(CENTER);
  image(Title,600,60,700,70)
 
  drawSprites();
 
}

function keyPressed(){

	
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:-50,y:-50});
		
		
	

	}

	
}


