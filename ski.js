const skiCanvas = document.getElementById('ski-canvas');
const skiCtx = skiCanvas.getContext('2d');
let skier = { x: -60, y: 40, speed: 2.2 };

function resizeSkiCanvas() {
  skiCanvas.width = window.innerWidth;
  skiCanvas.height = skiCanvas.parentElement.offsetHeight * 0.4;
}

function drawSkier() {
  skiCtx.clearRect(0, 0, skiCanvas.width, skiCanvas.height);
  // 雪地
  skiCtx.fillStyle = '#e6f7ff';
  skiCtx.beginPath();
  skiCtx.moveTo(0, skiCanvas.height * 0.7);
  skiCtx.lineTo(skiCanvas.width, skiCanvas.height * 0.9);
  skiCtx.lineTo(skiCanvas.width, skiCanvas.height);
  skiCtx.lineTo(0, skiCanvas.height);
  skiCtx.closePath();
  skiCtx.fill();
  // 滑雪者
  let x = skier.x, y = skiCanvas.height * 0.7 - 20;
  // 身体
  skiCtx.save();
  skiCtx.translate(x, y);
  skiCtx.scale(1.2, 1.2);
  skiCtx.fillStyle = '#1a3a5d';
  skiCtx.beginPath();
  skiCtx.arc(0, 0, 10, 0, Math.PI * 2); // 头
  skiCtx.fill();
  skiCtx.fillStyle = '#3498db';
  skiCtx.fillRect(-6, 10, 12, 22); // 身体
  skiCtx.strokeStyle = '#1a3a5d';
  skiCtx.lineWidth = 3;
  // 手
  skiCtx.beginPath();
  skiCtx.moveTo(-6, 18);
  skiCtx.lineTo(-18, 28);
  skiCtx.moveTo(6, 18);
  skiCtx.lineTo(18, 28);
  skiCtx.stroke();
  // 腿
  skiCtx.beginPath();
  skiCtx.moveTo(-3, 32);
  skiCtx.lineTo(-10, 44);
  skiCtx.moveTo(3, 32);
  skiCtx.lineTo(10, 44);
  skiCtx.stroke();
  // 雪板
  skiCtx.strokeStyle = '#2980b9';
  skiCtx.lineWidth = 4;
  skiCtx.beginPath();
  skiCtx.moveTo(-14, 46);
  skiCtx.lineTo(14, 48);
  skiCtx.stroke();
  skiCtx.restore();
}

function updateSkier() {
  skier.x += skier.speed;
  if (skier.x > skiCanvas.width + 60) {
    skier.x = -60;
  }
}

function animateSki() {
  drawSkier();
  updateSkier();
  requestAnimationFrame(animateSki);
}

window.addEventListener('resize', resizeSkiCanvas);
resizeSkiCanvas();
animateSki(); 