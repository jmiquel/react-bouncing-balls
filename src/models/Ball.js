export default class Ball {
  constructor(props) {
    this.posX = props.posX;
    this.posY = props.posY;
    this.velX = props.velX;
    this.velY = 5;
    this.radius = 2 * Math.PI;
    this.color = props.color || '#f00';
    this.gravity = 0.5;
    this.damping = 0.7;
    this.friction = 0.8;
    this.maxPosX = props.maxPosX;
    this.maxPosY = props.maxPosY;
  }

  move() {
    // Changes direction when reaching either top or bottom of the canvas (X axes)
    if(this.posX + this.radius >= this.maxPosX) {
      this.velX = -this.velX * this.damping;
      this.posX = this.maxPosX - this.radius;
    } else if (this.posX - this.radius <= 0) {
      this.posX = this.radius;    
    }
    // Changes direction when reaching either left or right of the canvas (Y axes)
    if(this.posY + this.radius >= this.maxPosY) {
        this.velY = -this.velY * this.damping;
        this.posY = this.maxPosY - this.radius;
        // Adds extra force (to pull down) when hitting the walls
        this.velX *= this.friction;
    } else if (this.posY - this.radius <= 0) {
        this.velY = -this.velY * this.damping;
        this.posY = this.radius;
    }
    
    this.velY -= this.gravity;
    
    this.posX += this.velX;
    this.posY -= this.velY;
  }
}