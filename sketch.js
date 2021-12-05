const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, division;

var plinkos = [];
var divisions = [];
var particles = [];
var particle;

var divisionHeight = 300;

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height, width, 20);

  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(
      new Divisions(k, height - divisionHeight / 2, 10, divisionHeight)
    );
  }

  //------------------///////-----Could have done this way but it was making the output load too slow because of nested for-loops ------------------

  // for (var j = 0; j<= width; j= j+50){
  //   for (var i= 75; i<350; i = i+70)
  //   plinkos.push(new Plinko(j,i));
  // }

  //new way for creation of plinkos

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 75));
  }

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j + 25, 125));
  }

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j + 25, 225));
  }

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j + 25, 325));
  }

  for (var j = 0; j <= width; j = j + 50) {
    plinkos.push(new Plinko(j, 375));
  }
}
function draw() {
  background(0);

  Engine.update(engine);

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for (var j = 0; j < divisions.length; j++) {
    divisions[j].display();
  }

  ground.display();

  if (particle != null) {
    particle.display();
    if (particle.body.position.y > 760) {
      if (particle.body.position.x < 300) {
        score = score + 500;
        particle = null;
        if (count >= 5) gameState = 'end';
      } else if (
        particle.body.position.x < 600 &&
        particle.body.position.x > 301
      ) {
        score = score + 100;
        particle = null;
        if (count >= 5) gameState = 'end';
      } else if (
        particle.body.position.x < 900 &&
        particle.body.position.x > 601
      ) {
        score = score + 200;
        particle = null;
        if (count >= 5) gameState = 'end';
      }
    }
  }

  textSize(35);
  text(' 500 ', 5, 550);
  text(' 200 ', 80, 550);
  text(' 350 ', 160, 550);
  text(' 500 ', 240, 550);
  text(' 750 ', 320, 550);
  text(' 100 ', 400, 550);
  text(' 500 ', 480, 550);
  text(' 200 ', 560, 550);
  text(' 200 ', 640, 550);
  text(' 100 ', 720, 550);
}

// function mousePressed() {
//   console.log("It works")
//   particle = new Particle(mouseX , 10 , random(5 , 15))
// }

var value = 0;

function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }

  console.log(value);
}

function mousePressed() {
  console.log('It works');
  particle = new Particle(mouseX, 10, random(5, 15));
}
