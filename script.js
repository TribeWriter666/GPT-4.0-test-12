const canvas = document.getElementById('glitchCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let time = 0;
let hue = 0;

function drawCircle(x, y, radius, hue) {
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.stroke();
}

function hypnoticCircles(x, y, radius, hue) {
  const numCircles = 10;
  const angleStep = (Math.PI * 2) / numCircles;

  for (let i = 0; i < numCircles; i++) {
    const angle = angleStep * i;
    const xOffset = Math.cos(angle + time) * radius;
    const yOffset = Math.sin(angle + time) * radius;

    drawCircle(x + xOffset, y + yOffset, radius / 4, hue);
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(canvas.width, canvas.height) / 4;

  hypnoticCircles(centerX, centerY, radius, hue);

  time += 0.02;
  hue += 0.5;

  requestAnimationFrame(animate);
}

animate();
