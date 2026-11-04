# Academic Homepage Template

一个零依赖的静态学术主页模板。所有内容都在 `data.js` 里改，结构和样式分别
在 `index.html` / `styles.css` / `app.js`，一般不需要动。

## 本地预览

```bash
npm run dev        # 打开 http://localhost:7100/
```

## 改内容

打开 `data.js`，按字段改：

| 字段 | 内容 |
|---|---|
| `SITE` | 姓名、职位、单位、邮箱、头像、外链按钮、研究方向 |
| `BIO` | 个人简介段落（支持 `<a>` 链接和中文） |
| `NEWS` | 动态/新闻，每条一个日期 + 一句话 |
| `PUBLICATIONS` | 论文列表，自动按年份分组排序，作者名等于 `SITE.name` 的会自动加粗标红 |
| `PROJECTS` | 项目卡片 |
| `AWARDS` / `TEACHING` | 奖项、教学经历 |
| `CONTACT` / `FOOTER` | 联系方式、页脚 |

## 部署（任选其一，均免费）

1. **GitHub Pages**：把文件夹推到一个 repo，Settings → Pages 选 main 分支根目录。
2. **Vercel / Cloudflare Pages**：新建项目，指向这个文件夹，构建命令留空，输出目录就是根目录。
3. 绑定自定义域名在上述平台的设置里加一条 CNAME 即可。

## 结构

```
index.html    页面骨架（不用改）
styles.css    样式（暗色模式用 CSS 变量，改 --accent 可换主题色）
data.js       ★ 所有内容
app.js        渲染逻辑（不用改）
server.js     本地预览服务器（不用改）
```
