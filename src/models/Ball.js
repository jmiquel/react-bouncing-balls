export default class Ball {
  constructor(props) {
    this.posX = props.posX;
    this.posY = props.posY;
    this.velX = props.velX;
    this.radius = 2 * Math.PI;
    this.color = props.color || '#f00'
    this.direction = 'right'
  }

  move() {
    if (this.direction === 'right')
      this.posX += this.velX;
    else
      this.posX -= this.velX;
  }

  setDirection(direction) {
    this.direction = direction;
  }
}