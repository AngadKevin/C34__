const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, ball, ground;
var box1,box2;
var rope1;
function setup(){
createCanvas(3000,800);
engine = Engine.create();
world = engine.world;
var groundoption = {
isStatic: true
}
ground = Bodies.rectangle(1500,790,3000,5,groundoption);
World.add(world,ground);
box1 = new Box(900,100,70,70);
box2 = new Box(900,100,70,70);
box3 = new Box(900,100,70,70);
box4 = new Box(900,100,70,70);
box5 = new Box(900,100,70,70);
box6 = new Box(900,100,70,70);
box7 = new Box(1000,100,70,70);
box8 = new Box(1000,100,70,70);
box9 = new Box(1000,100,70,70);
box10 = new Box(1000,100,70,70);
box11= new Box(1000,100,70,70);
box12 = new Box(1000,100,70,70);
box13 = new Box(1100,100,70,70);
box14 = new Box(1100,100,70,70);
box15 = new Box(1100,100,70,70);
box16 = new Box(1100,100,70,70);
box17= new Box(1100,100,70,70);
box18 = new Box(1100,100,70,70);
ball1 = new Ball(200,200,80);
rope1=new Rope(ball1.body,{x:500,y:50});

} 

function draw(){
background("black");
Engine.update(engine);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,3000,5);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
box17.display();
box18.display();
ball1.display();
rope1.display();
}

