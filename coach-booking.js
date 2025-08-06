// coach-booking.js
const coachCourses = [
  { mode: '一对一私教', price: 800 },
  { mode: '一对多小班', price: 500 },
  { mode: '考级辅导', price: 1000 },
  { mode: '体验课', price: 400 }
];
// 动态教练数据与页面一致
const coachData = window.coachData || [
  { name: '王磊（Leo Wang）' },
  { name: '林美（Mei Lin）' },
  { name: '佐藤健（Ken Sato）' }
];
const modal = document.getElementById('coach-booking-modal');
const stepsContainer = modal.querySelector('.booking-steps');
let bookingState = {};
function renderCoachBookingStep(coachIdx) {
  stepsContainer.innerHTML = `
    <button class="booking-close-btn" style="position:absolute;top:1.1em;right:1.1em;background:transparent;border:none;font-size:1.7em;line-height:1;color:#bbb;cursor:pointer;z-index:10;" title="关闭">×</button>
    <div class="booking-step-content">
      <h3 style="color:var(--main-blue);margin-bottom:1.2em;">预约${coachData[coachIdx].name}课程</h3>
      <label style="font-weight:600;">课程模式</label>
      <select id="course-mode" class="form-input" style="margin-bottom:1.2em;">
        <option value="">请选择</option>
        ${coachCourses.map((c,i)=>`<option value="${i}">${c.mode}（¥${c.price}）</option>`).join('')}
      </select>
      <div id="mode-desc" style="color:var(--main-orange);font-size:1.08rem;margin-bottom:1.2em;"></div>
      <input class="form-input" id="name" placeholder="姓名" required>
      <input class="form-input" id="phone" placeholder="电话" required>
      <input class="form-input" id="email" placeholder="邮箱" required>
      <button class="btn submit-btn" style="margin-top:1.2em;width:100%;">提交预约</button>
    </div>
  `;
  // 关闭按钮
  stepsContainer.querySelector('.booking-close-btn').onclick = function() {
    if (confirm('是否中止本次预约？')) {
      modal.style.display = 'none';
      bookingState = {};
    }
  };
  // 课程模式选择
  const modeSel = stepsContainer.querySelector('#course-mode');
  const modeDesc = stepsContainer.querySelector('#mode-desc');
  modeSel.onchange = function() {
    if (modeSel.value) {
      const c = coachCourses[modeSel.value];
      modeDesc.textContent = `价格：¥${c.price}`;
    } else {
      modeDesc.textContent = '';
    }
  };
  // 提交按钮
  stepsContainer.querySelector('.submit-btn').onclick = function() {
    const name = stepsContainer.querySelector('#name').value.trim();
    const phone = stepsContainer.querySelector('#phone').value.trim();
    const email = stepsContainer.querySelector('#email').value.trim();
    if (!modeSel.value || !name || !phone || !email) {
      alert('请完整填写所有信息');
      return;
    }
    alert('预约成功！我们会尽快与您联系。');
    modal.style.display = 'none';
    bookingState = {};
  };
}
// 事件委托绑定预约按钮
const coachList = document.querySelector('.coaches-list');
coachList.onclick = function(e) {
  const btn = e.target.closest('.coach-book-btn');
  if (btn) {
    const card = btn.closest('.coach-card');
    if (!card) return;
    const idx = parseInt(card.getAttribute('data-coach'), 10);
    modal.style.display = 'flex';
    renderCoachBookingStep(idx);
  }
};
// 禁止点击弹窗外关闭
modal.onclick = function(e) {
  // 只允许点击X关闭
}; 