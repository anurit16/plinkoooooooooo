class Plinko{
    constructor(x,y){
        var option ={
            isStatic:true

        }
        this.body = Bodies.circle(x,y,10,option);
    
    //this.l= length;
    this.x = x;
    this.y = y;
    World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    var angle = this.body.angle;
     //   particals.scale=1;
       
       // translate(paperpos.x,paperpos.y);
        rotate (angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        //ellipse(0,0,20,20);
        ellipse( 0, 0, 20,20);
        pop();

    }
}