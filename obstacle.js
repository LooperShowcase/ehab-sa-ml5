class obstacle {
  constructor() {
    this.size = 50;
    this.x = width;
    this.y = height - this.size;
  }

  show() {
    image(obstacleImage, this.x, this.y, this.size, this.size);
  }

  moveBy() {
    this.x -= 10;
  }
}
