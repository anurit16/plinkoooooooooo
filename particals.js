class Particals{
    constructor(x,y){
        var option ={
            restitution:0.4

        }
        this.body = Bodies.circle(x,y,10,option);
        this.color = color(random(0,255),random(0,255),random(0,255));
        
    //this.radius = r;
    World.add(world,this.body);
    }
    display(){
       var angle = this.body.angle;
       var pos =this.body.position ;
    
    
    //var angle = this.body.angle;
     //   particals.scale=1;
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        //rectMode(CENTER);
        noStroke();
        //strokeWeight(3);
        fill(this.color);
        ellipseMode(RADIUS)
        ellipse(0,0,10,10);
        pop();
    }
}