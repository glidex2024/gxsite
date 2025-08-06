// 初始化 AOS 动画库
AOS.init({
  duration: 800, // 动画持续时间
  once: true,    // 只执行一次
});

// 初始化 Swiper 轮播
const swiper = new Swiper('.mySwiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// 首页主视觉区全屏轮播
const heroSwiper = new Swiper('.heroSwiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.heroSwiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.heroSwiper .swiper-button-next',
    prevEl: '.heroSwiper .swiper-button-prev',
  },
}); 