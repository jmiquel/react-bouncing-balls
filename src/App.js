import React from 'react';
import Ball from './models/Ball';
import getRandomNumber from './utils/getRandomNumber';

import './App.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.canvas = {};
    this.ctx = {};
    this.ballsArr = [];
    this.colors = ['#f00', '#0f0', '#00f'];
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.animate();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ballsArr.forEach((ball) => {
      ball.move();
      this.draw(ball);
    });

    requestAnimationFrame(() => this.animate());
  }

  draw(ball) {
    this.ctx.beginPath();
    this.ctx.fillStyle = ball.color;
    this.ctx.arc(
      ball.posX - ball.radius / 2,
      ball.posY - ball.radius / 2,
      ball.radius,
      0,
      2 * Math.PI
    );
    this.ctx.fill();
    this.ctx.closePath();
  }

  handleClick(evt) {
    const ballProps = {
      posX: evt.clientX,
      posY: evt.clientY,
      size: getRandomNumber(1, 8),
      velX: getRandomNumber(0, 8),
      velY: getRandomNumber(0, 15),
      color: this.colors[getRandomNumber(0, 3)],
      maxPosY: 500,
      maxPosX: 1000,
    };
    const ball = new Ball(ballProps);

    this.ballsArr.push(ball);
  }

  render() {
    return (
      <div>
        <canvas
          ref={(c) => {
            this.canvas = c;
            this.ctx = c.getContext('2d');
          }}
          width="1000"
          height="500"
          onClick={this.handleClick}
        ></canvas>
      </div>
    );
  }
}
