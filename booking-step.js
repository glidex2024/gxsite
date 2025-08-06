// booking-step.js
const courses = [
  { name: "初学者课程", price: 500, desc: "适合零基础学员，系统学习滑雪基础动作与安全知识。" },
  { name: "中级课程", price: 700, desc: "适合有基础的学员，提升转弯、刹车、坡道等技巧。" },
  { name: "高级课程", price: 900, desc: "挑战高阶动作，赛道训练，进阶滑雪体验。" },
  { name: "儿童课程", price: 400, desc: "专为儿童设计，寓教于乐，安全有趣。" }
];
const steps = [
  function step1(state, next) {
    return `
      <h3>选择课程</h3>
      <select id="course-select" class="form-input">
        <option value="">请选择课程</option>
        ${courses.map((c, i) => `<option value="${i}">${c.name}</option>`).join('')}
      </select>
      <div id="course-desc" class="course-desc"></div>
      <button class="btn next-btn" disabled>下一步</button>
    `;
  },
  function step2(state, next) {
    let courseInfo = '';
    let courseIdx = typeof state.course === 'string' ? parseInt(state.course, 10) : state.course;
    if (typeof courseIdx !== 'undefined' && courses[courseIdx]) {
      const c = courses[courseIdx];
      courseInfo = `<div class="selected-course-info" style="background:#f8fafd;border-left:4px solid var(--main-orange);border-radius:8px;padding:0.7em 1em 0.7em 1.2em;margin-bottom:1.2em;">
        <span style='font-weight:700;color:var(--main-blue);font-size:1.08rem;'>${c.name}</span>
        <span style='color:var(--main-orange);font-weight:600;margin-left:1.2em;'>¥${c.price}/小时</span>
      </div>`;
    }
    return `
      <h3>填写基本信息</h3>
      ${courseInfo}
      <input class="form-input" id="name" placeholder="姓名" value="${state.name||''}" required>
      <input class="form-input" id="phone" placeholder="电话" value="${state.phone||''}" required>
      <input class="form-input" id="email" placeholder="邮箱" value="${state.email||''}" required>
      <button class="btn prev-btn">上一步</button>
      <button class="btn next-btn" disabled>下一步</button>
    `;
  },
  function step3(state, next) {
    return `
      <h3>滑雪经验</h3>
      <div class="radio-group">
        ${["从未滑雪", "初学者", "中级", "高级"].map((exp, i) =>
          `<label><input type="radio" name="exp" value="${exp}" ${state.exp===exp?'checked':''}>${exp}</label>`
        ).join('')}
      </div>
      <button class="btn prev-btn">上一步</button>
      <button class="btn next-btn" ${state.exp?'':'disabled'}>下一步</button>
    `;
  },
  function step4(state, next) {
    return `
      <h3>保险购买</h3>
      <label><input type="checkbox" id="insurance" ${state.insurance?'checked':''}> 已购买保险</label>
      <button class="btn prev-btn">上一步</button>
      <button class="btn next-btn">下一步</button>
    `;
  },
  function step5(state, next) {
    return `
      <h3>免责条款</h3>
      <div class="disclaimer">
        <p>极限运动有一定风险，报名即视为自愿承担相关风险，主办方不承担意外责任。</p>
      </div>
      <label><input type="checkbox" id="agree" ${state.agree?'checked':''}> 我已阅读并同意免责条款</label>
      <button class="btn prev-btn">上一步</button>
      <button class="btn next-btn" ${state.agree?'':'disabled'}>下一步</button>
    `;
  },
  function step6(state, next) {
    const c = courses[state.course];
    return `
      <h3>确认预约信息</h3>
      <ul class="confirm-list">
        <li>课程：${c.name}</li>
        <li>价格：¥${c.price}</li>
        <li>简介：${c.desc}</li>
        <li>姓名：${state.name}</li>
        <li>电话：${state.phone}</li>
        <li>邮箱：${state.email}</li>
        <li>滑雪经验：${state.exp}</li>
        <li>保险：${state.insurance?'已购买':'未购买'}</li>
      </ul>
      <button class="btn prev-btn">上一步</button>
      <button class="btn submit-btn">提交预约</button>
    `;
  }
];
let bookingState = {};
let currentStep = 0;
const modal = document.getElementById('booking-modal');
const stepsContainer = modal.querySelector('.booking-steps');
// 修改弹窗结构，右上角加X按钮
function renderStep(stepIdx) {
  // 如果已选课程且stepIdx为0，直接跳到step2
  if (stepIdx === 0 && typeof bookingState.course !== 'undefined' && bookingState.course !== '') {
    renderStep(1);
    return;
  }
  // 包裹弹窗内容，右上角加关闭按钮
  stepsContainer.innerHTML = `
    <button class="booking-close-btn" style="position:absolute;top:1.1em;right:1.1em;background:transparent;border:none;font-size:1.7em;line-height:1;color:#bbb;cursor:pointer;z-index:10;" title="关闭">×</button>
    <div class="booking-step-content">${steps[stepIdx](bookingState, renderStep)}</div>
  `;
  // 关闭按钮事件
  stepsContainer.querySelector('.booking-close-btn').onclick = function() {
    if (confirm('是否中止本次预约？')) {
      modal.style.display = 'none';
      bookingState = {};
    }
  };
  if (stepIdx === 0) {
    const select = document.getElementById('course-select');
    const desc = document.getElementById('course-desc');
    // 如果有预选课程，自动选中并禁用下拉
    if (typeof bookingState.course !== 'undefined' && bookingState.course !== '') {
      select.value = bookingState.course;
      select.disabled = true;
      desc.innerHTML = `<div class="price">价格：¥${courses[bookingState.course].price}</div><div>${courses[bookingState.course].desc}</div>`;
      stepsContainer.querySelector('.next-btn').disabled = false;
    }
    select.onchange = () => {
      if (select.value) {
        bookingState.course = select.value;
        desc.innerHTML = `<div class="price">价格：¥${courses[select.value].price}</div><div>${courses[select.value].desc}</div>`;
        stepsContainer.querySelector('.next-btn').disabled = false;
      } else {
        desc.innerHTML = '';
        stepsContainer.querySelector('.next-btn').disabled = true;
      }
    };
    stepsContainer.querySelector('.next-btn').onclick = () => { renderStep(1); };
  } else if (stepIdx === 1) {
    const name = stepsContainer.querySelector('#name');
    const phone = stepsContainer.querySelector('#phone');
    const email = stepsContainer.querySelector('#email');
    const nextBtn = stepsContainer.querySelector('.next-btn');
    function validate() {
      // 更宽松的邮箱校验
      nextBtn.disabled = !(name.value && phone.value && email.value && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value));
    }
    [name, phone, email].forEach(input => {
      input.oninput = validate;
      input.onchange = validate;
      input.onblur = validate;
    });
    setTimeout(validate, 0);
    nextBtn.onclick = () => {
      bookingState.name = name.value;
      bookingState.phone = phone.value;
      bookingState.email = email.value;
      renderStep(2);
    };
    stepsContainer.querySelector('.prev-btn').onclick = () => { renderStep(0); };
  } else if (stepIdx === 2) {
    stepsContainer.querySelectorAll('input[name="exp"]').forEach(radio => {
      radio.onchange = () => {
        bookingState.exp = radio.value;
        stepsContainer.querySelector('.next-btn').disabled = false;
      };
    });
    stepsContainer.querySelector('.next-btn').onclick = () => { renderStep(3); };
    stepsContainer.querySelector('.prev-btn').onclick = () => { renderStep(1); };
  } else if (stepIdx === 3) {
    const insurance = stepsContainer.querySelector('#insurance');
    insurance.onchange = () => { bookingState.insurance = insurance.checked; };
    stepsContainer.querySelector('.next-btn').onclick = () => {
      bookingState.insurance = insurance.checked;
      renderStep(4);
    };
    stepsContainer.querySelector('.prev-btn').onclick = () => { renderStep(2); };
  } else if (stepIdx === 4) {
    const agree = stepsContainer.querySelector('#agree');
    agree.onchange = () => { bookingState.agree = agree.checked; stepsContainer.querySelector('.next-btn').disabled = !agree.checked; };
    stepsContainer.querySelector('.next-btn').onclick = () => { renderStep(5); };
    stepsContainer.querySelector('.prev-btn').onclick = () => { renderStep(3); };
  } else if (stepIdx === 5) {
    stepsContainer.querySelector('.submit-btn').onclick = () => {
      alert('预约成功！我们会尽快与您联系。');
      modal.style.display = 'none';
      bookingState = {};
      currentStep = 0;
    };
    stepsContainer.querySelector('.prev-btn').onclick = () => { renderStep(4); };
  }
}
// 支持从卡片点击预约时自动选中课程
function selectCourseAndBook(courseIdx) {
  bookingState = { course: String(courseIdx) };
  modal.style.display = 'flex';
  renderStep(0);
  // 高亮选中卡片
  document.querySelectorAll('.course-card').forEach((el, i) => {
    el.classList.toggle('selected', i === courseIdx);
  });
}
// 立即预约按钮（下方大按钮）
// document.getElementById('start-booking-btn').onclick = function() {
//   bookingState = {};
//   modal.style.display = 'flex';
//   renderStep(0);
//   document.querySelectorAll('.course-card').forEach(el => el.classList.remove('selected'));
// };
// 卡片上的立即预约按钮
if (document.querySelectorAll('.book-btn').length) {
  document.querySelectorAll('.book-btn').forEach((btn, idx) => {
    btn.onclick = function(e) {
      e.preventDefault();
      selectCourseAndBook(idx);
    };
  });
}
// 禁止点击弹窗外关闭
modal.onclick = function(e) {
  // 只允许点击X关闭
  // if (e.target === modal) modal.style.display = 'none';
}; 