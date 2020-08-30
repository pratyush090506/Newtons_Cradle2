class Ball {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1,
          
        
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
      this.image =loadImage("ball.png");
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      
      imageMode(CENTER);
      fill(255,255,255);
      
      

      image (this.image,0,0,this.radius);
      pop();
    }
  };