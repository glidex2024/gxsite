# SEO 规范标签修复说明

## 问题解决

已为所有HTML页面添加了 `canonical`（规范）标签，以解决Google Search Console中"重复网页，用户未选定规范网页"的问题。

## 已完成的工作

✅ 为以下页面添加了canonical标签：
- index.html (首页)
- about.html (关于我们)
- contact.html (联系我们)
- courses.html (课程介绍)
- news.html (最新消息)
- news-detail.html (消息详情)
- camp.html (训练营)
- coach-detail.html (教练详情)
- gallery.html (精彩瞬间)

## ✅ 域名已配置完成

所有页面的canonical标签已设置为实际域名：`https://gxsite.pages.dev/`

### 已配置的页面

- 首页：`https://gxsite.pages.dev/`
- 关于我们：`https://gxsite.pages.dev/about.html`
- 联系我们：`https://gxsite.pages.dev/contact.html`
- 课程介绍：`https://gxsite.pages.dev/courses.html`
- 最新消息：`https://gxsite.pages.dev/news.html`
- 消息详情：`https://gxsite.pages.dev/news-detail.html`
- 训练营：`https://gxsite.pages.dev/camp.html`
- 教练详情：`https://gxsite.pages.dev/coach-detail.html`
- 精彩瞬间：`https://gxsite.pages.dev/gallery.html`

### 注意事项

1. **首页URL**：首页的canonical URL已设置为根URL（`/`），而不是 `/index.html`，这是SEO最佳实践。

2. **动态页面**：如果 `news-detail.html` 是动态页面（根据URL参数显示不同内容），您可能需要为每个新闻详情页设置不同的canonical URL。这可能需要使用JavaScript动态生成。

3. **HTTPS**：确保使用HTTPS协议（如果您的网站支持SSL）。

4. **URL格式**：
   - 使用您网站的规范格式（带www或不带www）
   - 确保与Google Search Console中设置的域名一致
   - 确保所有页面的canonical URL格式统一

## 验证

替换域名后，您可以：

1. **在Google Search Console中验证**：
   - 等待Google重新抓取您的网站
   - 检查"覆盖范围"报告，确认重复页面问题是否解决

2. **使用浏览器检查**：
   - 在浏览器中打开任意页面
   - 查看页面源代码
   - 确认 `<head>` 部分中的canonical标签包含正确的URL

3. **使用在线工具验证**：
   - 使用Google的Rich Results Test工具
   - 或使用其他SEO检查工具验证canonical标签

## 其他SEO建议

1. **确保所有页面都有唯一标题和描述**：每个页面的 `<title>` 和 `<meta name="description">` 应该是唯一的。

2. **检查robots.txt**：确保 `robots.txt` 文件正确配置，不会阻止重要页面被索引。

3. **提交sitemap**：在Google Search Console中提交XML sitemap，帮助Google更好地索引您的网站。

4. **301重定向**：如果存在多个URL指向同一内容（如带www和不带www），设置301重定向到规范版本。

## 问题排查

如果替换域名后问题仍然存在：

1. 确认域名格式正确（包括协议、子域名等）
2. 检查是否有其他重复内容源
3. 确认Google已重新抓取您的网站
4. 检查服务器配置，确保URL重写规则正确

