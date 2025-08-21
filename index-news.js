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
      item.className = 'news-card';
      item.setAttribute('data-aos', 'fade-up');
      item.setAttribute('data-aos-delay', 100 + i * 100);
      item.style.cssText = `
        background: #fff;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        cursor: pointer;
      `;
      item.innerHTML = `
        <a href="news-detail.html?id=${n.id}" style="text-decoration:none;color:inherit;display:block;">
          <img src="${imgUrl}" alt="${n.title}" style="width:100%;height:180px;object-fit:cover;">
          <div style="padding:1.5rem;">
            <div style="color:#666;font-size:0.9rem;margin-bottom:0.5rem;">${n.date}</div>
            <h3 style="color:#333;font-size:1.1rem;margin-bottom:1rem;line-height:1.4;">${n.title}</h3>
            <p style="color:#666;font-size:0.95rem;line-height:1.6;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;">${n.summary}</p>
          </div>
        </a>
      `;
      
      // 添加悬停效果
      item.onmouseenter = function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
      };
      item.onmouseleave = function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      };
      
      list.appendChild(item);
    }
  }); 