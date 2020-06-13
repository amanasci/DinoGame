let cacti = [];

function preload() {
  dImg = loadImage("dino.png");
  bImg = loadImage("lighthouse.png");
}

function setup() {
  createCanvas(600, 400);
  dino = new Dino();
}

function keyPressed() {
  if (keyCode === 32) {
    dino.jump();
  } else if (keyCode === 82) window.location.reload();
}

function draw() {
  if (random(1) < 0.005) {
    cacti.push(new Cactus());
  }
  background(0);

  for (let c of cacti) {
    c.move();
    c.show();
    if (dino.hits(c)) {
      console.log("game over");
      noLoop();
    }
  }

  dino.show();
  dino.move();
}
