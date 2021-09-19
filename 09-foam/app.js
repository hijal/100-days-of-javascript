const canvas = document.getElementById('canvasId');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let array = [];
let colors = [
  'rgb(208, 234, 232)',
  'rgba(205, 253, 253)',
  'rgba(242, 250, 254)',
];

const MAX_SIZE = 40;
const MIN_SIZE = 0;
const MOUSE_RADIUS = 100;

let mouse = {
  x: null,
  y: null,
};

window.addEventListener('mousemove', function (e) {
  mouse.x = e.x;
  mouse.y = e.y;
});

function Foam(x, y, dirX, dirY, size, color) {
  this.x = x;
  this.y = y;
  this.dirX = dirX;
  this.dirY = dirY;
  this.size = size;
  this.color = color;
}

Foam.prototype.draw = function () {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
  this.fillStyle = this.color;
  ctx.fill();
};

Foam.prototype.update = function () {
  if (this.x - this.size * 2 < 0 || this.x + this.size * 2 > canvas.width) {
    this.dirX -= this.dirX;
  }
  if (this.y - this.size * 2 < 0 || this.y - this.size * 2 > canvas.height) {
    this.dirY -= this.dirY;
  }
  this.dirX += this.dirX;
  this.dirY += this.dirY;

  if (
    mouse.x - this.x < MOUSE_RADIUS &&
    mouse.x - this.x > -MOUSE_RADIUS &&
    mouse.y - this.y < MOUSE_RADIUS &&
    mouse.y - this.y > -MOUSE_RADIUS
  ) {
    if (this.size < MAX_SIZE) {
      this.size += 3;
      this.x -= 1.5;
    }
  } else if (this.size > MIN_SIZE) {
    this.size -= 0.1;
  }
  if (this.size < 0) {
    this.size = 0;
  }
  this.draw();
};

function init() {
  array = [];
  for (let i = 0; i < 1000; i++) {
    let size = 10;
    let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
    let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
    let dirX = Math.random() * 0.2 - 0.1;
    let dirY = Math.random() * 0.2 - 0.1;
    let color = colors[Math.floor(Math.random() * colors.length)];
    array.push(new Foam(x, y, dirX, dirY, size, color));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < array.length; i++) {
    array[i].update();
  }
}

init();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

setInterval(function () {
  mouse.x = undefined;
  mouse.y = undefined;
}, 1000);
