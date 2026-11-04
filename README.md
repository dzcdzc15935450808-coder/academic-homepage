# dongzhecheng.com

董哲诚的个人学术主页。零依赖静态站，部署在 Vercel，域名 `dongzhecheng.com`。

## 本地预览

```bash
npm run dev        # http://127.0.0.1:7100/
```

## 改内容

所有文案在 `data.js`。每个可翻译字段写成 `{ zh, en, es }`，`app.js` 按当前语言取用；
中文字段是默认语言，直接改 `zh` 即可。

| 对象 | 对应页面部分 |
|---|---|
| `SITE` | 姓名、邮箱、外链 |
| `HERO` | 首屏标题（两行）、导语、按钮、三个数字 |
| `ABOUT` | 简介段落、左侧注脚 |
| `RESEARCH` | 博士论文标题、方法、田野说明、两张图版 |
| `DIPTYCH` | 红色对照页：马德里 1975 / 北京 1978 |
| `NEWS` | 动态列表 |
| `WORK` | Kinoscholar 项目与截图说明 |
| `CONTACT` | 结尾邀请语与回复时间 |
| `COLOPHON` | 页脚版权、字体与图片来源 |

改完 `data.js` 不需要构建，刷新即可。

## 结构

```
index.html    页面骨架、meta、Open Graph、JSON-LD
styles.css    设计系统（颜色、字号、34% 轴线、响应式）
data.js       全部内容与三语翻译
app.js        渲染、语言切换、入场动效
assets/       图片（马德里、巴塞罗那、肖像、Kinoscholar 截图）
fonts/        Schibsted Grotesk（自托管，SIL OFL）
og.jpg        分享卡片 1200×630
```

## 设计与技术约定

- 版式来自「印刷年鉴」：一条 34% 的轴线，标题从轴线上起排，正文挂在右侧，左栏放注脚。
- 颜色只有三种：纸（`#e2dccf`）、墨（`#2a1110`）、红（`#952625`）。
- 中文标题宋体，正文苹方；拉丁字母 Schibsted Grotesk。
- 不用边框、阴影、渐变、等宽字体；章节之间只用留白和整页色块分隔。
- 语言切换不刷新页面，只重写文本并更新 URL（`?lang=en`）；不带参数即中文。
- 动效只有一种：进入视口时上浮 18px 淡入，逐项延迟 55ms；`prefers-reduced-motion` 下全部取消。

## 部署

Vercel 项目 `dongzhecheng-home` 连接本仓库 `main` 分支，构建命令留空、输出目录为根目录。
推送到 `main` 即上线。

注意：同一个仓库还连过一个叫 `academic-homepage` 的 Vercel 项目（Framework 被识别成
Node，部署后 500）。那个项目应删除，避免每次推送双构建和误分享。

## 图片版权

- 马德里，格兰大道：Carlos Delgado，CC BY-SA 4.0，Wikimedia Commons。
- 巴塞罗那：dronepicr，CC BY 2.0，Wikimedia Commons。
- Kinoscholar 界面：作者本人截图。
- 肖像：作者本人提供。

完整来源见 `assets/credits.json`，页脚也标注了许可。
