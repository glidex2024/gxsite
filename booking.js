document.addEventListener('DOMContentLoaded', function() {
  // 课程预约弹窗逻辑
  const modal = document.getElementById('booking-modal');
  const form = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');
  let currentPrice = 0;

  // 打开弹窗
  document.querySelector('.coaches-list').onclick = function(e) {
    const btn = e.target.closest('.book-btn');
    if (btn) {
      modal.style.display = 'block';
      document.getElementById('book-course').value = btn.getAttribute('data-course');
      document.getElementById('book-hours').value = 1;
      currentPrice = parseInt(btn.getAttribute('data-price'));
      updateTotal();
      success.style.display = 'none';
    }
  };
  // 关闭弹窗
  Array.from(document.getElementsByClassName('close-modal')).forEach(btn => {
    btn.onclick = function() {
      modal.style.display = 'none';
    };
  });
  window.onclick = function(e) {
    if (e.target === modal) modal.style.display = 'none';
  };
  // 费用自动计算
  function updateTotal() {
    const hours = parseInt(document.getElementById('book-hours').value) || 1;
    document.getElementById('booking-total').textContent = '¥' + (currentPrice * hours);
  }
  document.getElementById('book-hours').oninput = updateTotal;

  // 表单提交
  form.onsubmit = function(e) {
    e.preventDefault();
    // 收集数据
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      course: form.course.value,
      hours: form.hours.value,
      exp: form.exp.value,
      insurance: form.insurance.value,
      total: document.getElementById('booking-total').textContent
    };
    // 邮件发送（EmailJS）
    // 你需要在 https://www.emailjs.com/ 注册并替换下方 user_xxx, service_xxx, template_xxx
    emailjs.send('service_xxx', 'template_xxx', data, 'user_xxx')
      .then(function() {
        modal.style.display = 'none';
        success.style.display = 'block';
        form.reset();
      }, function(error) {
        alert('预约失败，请稍后再试！');
      });
    return false;
  };
  // 初始化 EmailJS（需引入 emailjs SDK）
  if (typeof emailjs !== 'undefined') {
    emailjs.init('user_xxx');
  }
}); 