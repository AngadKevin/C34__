class Ball{
constructor(x,y,radius,angle){
var options = {density : 1}
this.ball = Bodies.circle(x,y,radius,options);
this.radius = radius*2;
World.add(world,this.ball);
}
display(){
var angle = this.ball.angle;
push();
translate(this.ball.position.x,this.ball.position.y);
rotate(angle);
ellipse(0,0,this.radius,this.radius);
}
}