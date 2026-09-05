# GX 滑雪学校网站 · 统一设计系统（Design System）v3

配色方向参考 Snowminds（snowminds.com）的视觉气质——白色为主导背景、冷色（蓝）打底、暖色仅作点缀——但没有照搬其品牌色，重新设计了属于本站的一套配色。

状态：**颜色系统已在 `style.css` 落地并生效**，全站 12 个页面通过共用变量继承，其余组件的圆角/阴影/间距细节收敛留待后续按页面推进。

---

## 配色思路（对比 v2）

v2 是"墨黑 + 天蓝 + 橙"，问题是导航/footer 的大面积墨黑背景和橙色 CTA 并排，视觉上偏警示色系统、偏沉重。v3 参考 Snowminds 的做法：**深色只占小面积（导航/footer），页面主体几乎全白/冰蓝，暖色严格只用于 CTA 和关键数字**，整体更清爽、更"雪山感"。

## 最终 Color Tokens（已在 `style.css` 生效）

```css
--color-primary: #14344f;        /* 深蓝：导航/footer 深色底，替代原墨黑 */
--color-primary-dark: #0b2338;   /* 更深场景 / hover */
--color-secondary: #2e86c1;      /* 天蓝：链接、次按钮、激活态 */
--color-accent: #e4703a;         /* 珊瑚橙：唯一强调色，仅用于 CTA / 关键按钮 / 关键数字 */
--color-accent-hover: #c85a28;
--color-bg: #ffffff;             /* 主背景，占比应在 70% 以上 */
--color-surface: #eaf2f7;        /* 冰蓝调次背景，替代原中性灰，用于交替 section / 卡片底色 */
--color-text: #1b2733;           /* 冷灰蓝正文，替代纯黑 */
--color-text-muted: #64748b;     /* 冷灰次文字 */
--color-border: #d7e3ec;         /* 冰蓝调描边 */
--color-success / --color-warning / --color-error: 不变，仅用于系统反馈，不作装饰
--font-family: Inter, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Microsoft YaHei', 'Noto Sans SC', sans-serif;
--space-1..7: 8/16/24/32/48/64/96px
--radius-sm: 6px; --radius-none: 0
--shadow-float: 仅浮层元素（弹窗/下拉）使用
```

## 使用原则（重点）

- `--color-accent`（珊瑚橙）**不允许**出现在背景、大色块、装饰渐变里，只用于：主 CTA 按钮、价格/关键数字、少量图标高亮。
- `--color-primary`（深蓝）只用于导航栏、footer 这类"边框式"小面积深色区域，不再铺满内容区块。
- 页面主体背景以 `--color-bg`(白) 和 `--color-surface`(冰蓝灰) 交替为主。

## 这次会话的改动方式

沿用变量指向（`var()`）的做法：`style.css` 的 `:root` 里，所有旧变量（`--main-blue`、`--accent-orange`、`--primary-blue` 等近 20 个）以及 `recruitment.html` 用到的本地变量名（`--ink`/`--blue`/`--lime`/`--ice`/`--line`/`--muted`）都已经指向这一套新 token，不需要逐条修改调用点。同时把 `.navbar`/`.footer`/按钮阴影等处硬编码的深色 rgba 值（原来是墨黑，这次改成新的深蓝 `rgb(20,52,79)`）在全部 9 个页面里做了统一替换。

`git diff --stat` 可查看具体改动范围，全部是颜色值层面的修改，没有改变任何 HTML 结构或布局属性。

## 下一步建议

1. 浏览器里核对桌面/移动端效果（尤其导航栏、CTA 按钮、招聘页、新闻/课程卡片）。
2. 按钮系统收敛：9 种按钮 class 的圆角/内边距/阴影统一。
3. 卡片系统收敛：10 种卡片实现统一。
4. 按页面推进：首页 → 学校介绍/课程 → 教练/学生页 → 新闻/活动/招生 → 联系我们/FAQ。
