const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground;
var plinkos,particals,divisions;

function setup(){
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
    particals =[];
    plinkos = [];
    divisions =[];
    
  ground = new Ground(200,795,800,10)
 /*
 for (var k = 0; k<= width; k=k+80){
   division.push(new Divisions(k, height=divisionHeight/2,10,divisionHeight));
 }
*/
for (var j=40; j<= width; j=j+50)
{
  plinkos.push(new Plinko(j,75));
}
for (var j=15; j<= width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
}
for (var j=40; j<=width; j=j+50)
{
  plinkos.push(new Plinko(j,275));
}
for (var j=15; j<=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,375));
}

for (var k = 0; k<=width; k=k +80)
{
  divisions.push(new Divisions(k , height-divisionHeight/2,10,divisionHeight));
}

//if(frameCount%60===0){
 // particals.push(new Particals(random(width/2-10,width/2+10),10,10));
//}


}



var divisionHeight = 300;


function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  for (var j=0; j<plinkos.length; j++){
plinkos[j].display();
  }
for (var k=0; k<divisions.length;k++){
  divisions[k].display();
}
if(frameCount%60===0){
  particals.push(new Particals(random(width/2-10,width/2+10),10,10));
}
for (var h = 0; h< particals.length; h++){
  particals[h].display();
}
 
}