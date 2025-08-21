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

// 首页背景轮播 - 无分页器和导航按钮
const heroBackgroundSwiper = new Swiper('.heroBackgroundSwiper', {
  loop: true,
  effect: 'fade',
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 1000,
  allowTouchMove: false, // 禁用触摸滑动
}); 