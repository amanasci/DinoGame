class Cactus {
  constructor() {
    this.r = 85;
    this.x = width;
    this.y = height - this.r;
    this.vel = 16;
  }

  move() {
    this.x -= this.vel;
  }

  show() {
    image(bImg, this.x, this.y, this.r, this.r);
  }
}
