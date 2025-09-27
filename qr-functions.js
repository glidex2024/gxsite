// 显示所有二维码
function showAllQR() {
  showAllQRCode();
}

// 显示所有二维码弹窗
function showAllQRCode() {
// 创建弹窗容器
const modal = document.createElement('div');
modal.className = 'qr-modal';
modal.innerHTML = `
  <div class="qr-modal-content">
    <div class="qr-modal-header">
      <h3>课程预约</h3>
      <p>请选择联系方式进行课程预约</p>
      <button class="qr-modal-close" onclick="closeQRModal()">&times;</button>
    </div>
    <div class="qr-modal-body">
      <div class="qr-grid">
        <div class="qr-item">
          <img src="image/qrcode/1.PNG" alt="微信" class="qr-image">
          <p class="qr-label">微信</p>
        </div>
        <div class="qr-item">
          <img src="image/qrcode/2.JPG" alt="Line" class="qr-image">
          <p class="qr-label">Line</p>
        </div>
        <div class="qr-item">
          <img src="image/qrcode/3.PNG" alt="WhatsApp" class="qr-image">
          <p class="qr-label">WhatsApp</p>
        </div>
        <div class="qr-item">
          <img src="image/qrcode/4.jpeg" alt="小红书" class="qr-image">
          <p class="qr-label">小红书</p>
        </div>
      </div>
      <p class="qr-tip">请使用手机扫描二维码</p>
    </div>
  </div>
`;

// 添加到页面
document.body.appendChild(modal);

// 显示弹窗
setTimeout(() => modal.classList.add('show'), 10);

// 点击背景关闭
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    closeQRModal();
  }
});
}


// 关闭二维码弹窗
function closeQRModal() {
  const modal = document.querySelector('.qr-modal');
  if (modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.remove(), 300);
  }
}
