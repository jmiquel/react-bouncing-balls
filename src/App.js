import React from 'react'

import './App.scss';

export default class App extends React.Component {
  constructor() {
    super();
    this.canvas = {};
    this.ctx = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.animate();
  }
  
  animate() {        
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //requestAnimationFrame(() => this.animate());
  }

  draw(posX, posY) {
    const ball = {
      posX,
      posY,
      radius: 2 * Math.PI
    };

    this.ctx.beginPath();
    this.ctx.fillStyle = '#ff00000';
    this.ctx.arc(
        ball.posX - (ball.radius/2),
        ball.posY - (ball.radius/2),
        ball.radius,
        0,
        2 * Math.PI
    );
    this.ctx.fill();
    this.ctx.closePath();
  };

  handleClick(evt) {
    this.draw(evt.clientX, evt.clientY);
  }

  render() {
    return (
      <div>
        <canvas
          ref={(c) => {
            this.canvas = c
            this.ctx = c.getContext('2d')
          }}
          className="bouncer"
          width='1000'
          height='500'
          onClick={this.handleClick}></canvas>
      </div>
    )
  }
}