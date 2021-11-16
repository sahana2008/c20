//STEPS 1: Add references to the Matter.js ENGINE,WORLD,BODIES,BODY
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//STEP 2: create variable for your own replica of engine and world
let engine;
let world;

var ball, ground, rock;
function setup()
{
  createCanvas(400,400);

  //STEP 3: creating our OWN engine and WORLD
  engine=Engine.create();
  world=engine.world;

  var ballProperties = {
    restitution: 0.95,
    frictionAir:0.01
  }
  //STEP 4: create the physics property body
  ball=Bodies.circle(100,10,20,ballProperties);
  
  //STEP 5: ADD your created body to the matter.js WORLD
  World.add(world,ball);



  var groundProperties={
    isStatic:true
  }
  ground= Bodies.rectangle(200,390,400,20,groundProperties);

  World.add(world,ground);

  console.log(ground)


var rockProperties={
  restitution:1.5
}
  rock=Bodies.circle(200,15,10,rockProperties)
  World.add(world, rock);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  //STEP 6: UPDATE the engine
  Engine.update(engine);


 fill("brown")
 
  //STEP 7 :which all bodies you want to see, just use JAVASCRIPT to get them displayed
   ellipse(ball.position.x,ball.position.y,20)  
   fill("green")
  rect(ground.position.x,ground.position.y,400,20)
  fill("blue")
  ellipse(rock.position.x, rock.position.y,10)
  
}

