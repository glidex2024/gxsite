const canvas = document.getElementById('snow-canvas');
const ctx = canvas.getContext('2d');
let snowflakes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = document.querySelector('.hero').offsetHeight;
}

function createSnowflakes() {
  const count = Math.floor(canvas.width / 10);
  snowflakes = [];
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1.5,
      d: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.5 + 0.5
    });
  }
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.globalAlpha = 0.8;
  ctx.fillStyle = '#fff';
  snowflakes.forEach(flake => {
    ctx.globalAlpha = flake.opacity;
    ctx.beginPath();
    ctx.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();
}

function updateSnowflakes() {
  snowflakes.forEach(flake => {
    flake.y += flake.d;
    flake.x += Math.sin(flake.y / 30) * 0.5;
    if (flake.y > canvas.height) {
      flake.y = -flake.r;
      flake.x = Math.random() * canvas.width;
    }
  });
}

function animateSnow() {
  drawSnowflakes();
  updateSnowflakes();
  requestAnimationFrame(animateSnow);
}

// 鼠标动态缩放效果
function updateMouseEffect(e) {
  const x = e.clientX;
  const y = e.clientY;
  document.documentElement.style.setProperty('--mouse-x', x + 'px');
  document.documentElement.style.setProperty('--mouse-y', y + 'px');
  document.body.classList.add('mousemove');
  // 主要内容元素
  document.querySelectorAll('.hero-content, .course-item, .gallery-grid img, .contact-form, .contact-info').forEach(el => {
    el.classList.add('mouse-effect');
  });
}
function resetMouseEffect() {
  document.body.classList.remove('mousemove');
  document.querySelectorAll('.mouse-effect').forEach(el => el.classList.remove('mouse-effect'));
}
document.addEventListener('mousemove', updateMouseEffect);
document.addEventListener('mouseleave', resetMouseEffect);

// 首页大图轮播
function initCarousel() {
  const slides = Array.from(document.querySelectorAll('.carousel-slide'));
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  const dotsContainer = document.getElementById('carousel-dots');
  let current = 0;
  let timer = null;

  function showSlide(idx) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === idx);
      if (dotsContainer.children[i])
        dotsContainer.children[i].classList.toggle('active', i === idx);
    });
    current = idx;
  }

  function nextSlide() {
    showSlide((current + 1) % slides.length);
  }
  function prevSlide() {
    showSlide((current - 1 + slides.length) % slides.length);
  }
  function startAuto() {
    timer = setInterval(nextSlide, 5000);
  }
  function stopAuto() {
    clearInterval(timer);
  }

  // dots
  dotsContainer.innerHTML = '';
  slides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.onclick = () => { showSlide(i); stopAuto(); startAuto(); };
    dotsContainer.appendChild(dot);
  });

  prevBtn.onclick = () => { prevSlide(); stopAuto(); startAuto(); };
  nextBtn.onclick = () => { nextSlide(); stopAuto(); startAuto(); };

  showSlide(0);
  startAuto();

  // 鼠标悬停暂停
  document.getElementById('carousel').addEventListener('mouseenter', stopAuto);
  document.getElementById('carousel').addEventListener('mouseleave', startAuto);
}

if (document.getElementById('carousel')) {
  initCarousel();
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createSnowflakes();
});

resizeCanvas();
createSnowflakes();
animateSnow(); 