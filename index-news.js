// 首页最新消息动态渲染
fetch('news.json')
  .then(res => res.json())
  .then(newsData => {
    // 按日期倒序
    newsData.sort((a, b) => b.date.replace(/\D/g,'') - a.date.replace(/\D/g,''));
    const list = document.getElementById('news-list');
    list.innerHTML = '';
    const unsplashImgs = [
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1515524738708-327f6b0037a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80'
    ];
    for (let i = 0; i < Math.min(4, newsData.length); i++) {
      const n = newsData[i];
      let imgUrl = n.img;
      if (imgUrl && imgUrl.startsWith('/image/news')) {
        const idx = (parseInt(n.id, 10) - 1) % unsplashImgs.length;
        imgUrl = unsplashImgs[idx];
      }
      const item = document.createElement('div');
      item.className = 'news-item';
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-delay', 100 + i * 100);
      item.innerHTML = `
        <a href="news-detail.html?id=${n.id}" style="display:flex;text-decoration:none;color:inherit;">
          <img src="${imgUrl}" alt="${n.title}">
          <div class="news-content">
            <div class="news-date">${n.date}</div>
            <h3>${n.title}</h3>
            <p>${n.summary}</p>
          </div>
        </a>
      `;
      list.appendChild(item);
    }
  }); 