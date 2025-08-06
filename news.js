const newsData = [
  {
    date: '10 11月 2024',
    title: '秋ヶ瀬公园滑板交流会',
    detail: '秋高气爽的时节，来一起练习滑板吧！！气温不再炎热的秋季，难以冲浪却又还未下雪，滑板完美填补空白。'
  },
  {
    date: '22 9月 2024',
    title: '成都热雪奇迹JSBA技能认定',
    detail: '日本单板协会JSBA认定，GX户外俱乐部领衔成都热雪奇迹举办了海外JSBA二级一级连考滑行技术认定活动。'
  },
  {
    date: '8 9月 2024',
    title: '千叶大原海岸冲浪体验课',
    detail: '由日本冲浪联盟公认指导员的田中勇吉选手主教，中国冲浪国家技能教练的东霖选手助教/翻译的冲浪体验课程。从岸上训练到海上实战，收获满满！'
  },
  {
    date: '14 8月 2024',
    title: '夏季平花练习会上线',
    detail: '◆日期・8/17(周六)◆活动时间・13:00～17:00◆雪场(室内）・SNOVA新横浜◆集合时间・12:30。欢迎报名参加！'
  },
  {
    date: '28 7月 2024',
    title: '我们去白马参加了日本合作团队的滑板活动',
    detail: '极力推荐★★★★★ 能滑滑板，附近也能露营，体验多元户外乐趣！'
  }
];

document.querySelectorAll('.news-item').forEach(item => {
  item.addEventListener('click', function() {
    const idx = parseInt(item.getAttribute('data-news'));
    const news = newsData[idx];
    const modal = document.getElementById('news-modal');
    const detail = document.getElementById('news-modal-detail');
    detail.innerHTML = `<div style='color:#c9a063;font-weight:900;font-size:1.2rem;margin-bottom:0.5rem;'>${news.title}</div><div style='color:#1a2236;font-size:1.05rem;margin-bottom:0.7rem;'>${news.date}</div><div style='color:#1a2236;font-size:1.08rem;'>${news.detail}</div>`;
    modal.style.display = 'flex';
  });
});
document.querySelector('#news-modal .close-modal').onclick = function() {
  document.getElementById('news-modal').style.display = 'none';
};
window.addEventListener('click', function(e) {
  if (e.target === document.getElementById('news-modal')) {
    document.getElementById('news-modal').style.display = 'none';
  }
}); 