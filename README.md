# 极地滑雪学校网站

## 项目简介

这是一个纯静态的滑雪学校网站，使用HTML、CSS和JavaScript构建，数据通过JSON文件提供。

## 目录结构

- `index.html` 首页（含雪花和滑雪动画）
- `courses.html` 课程介绍（含课程预定）
- `about.html` 关于我们
- `gallery.html` 图片集
- `contact.html` 联系我们
- `news.html` 最新消息列表
- `news-detail.html` 消息详情页
- `coaches.html` 教练团队
- `camp.html` 训练营
- `style.css` 全站样式
- `snow.js` 雪花与全站动态效果
- `ski.js` 首页滑雪动画
- `booking.js` 课程预定弹窗与交互
- `news.json` 新闻数据文件

## 部署方式

直接用静态服务器（如 VSCode Live Server、python -m http.server、nginx、apache 等）打开 `index.html` 即可。

## 数据管理

- 新闻数据存储在 `news.json` 文件中
- 支持动态加载和分页显示
- 无需数据库，纯静态部署

## 主要功能

- 响应式设计，支持移动端
- 动态雪花效果和滑雪动画
- 新闻列表和详情页面
- 课程预定功能
- 教练团队展示
- 训练营介绍

## 注意事项

- 所有数据都通过JSON文件提供，无需后端服务
- 图片使用Unsplash CDN，确保网络连接
- 支持现代浏览器的ES6特性 