/* ============================================================
   data.js — 所有页面内容都在这一个文件里改，不用动 HTML。
   每篇论文/每条新闻/每个项目都是一条记录，复制粘贴改文字即可。
   ============================================================ */

const SITE = {
  name: "Your Name",
  initials: "YN",
  role: "Ph.D. Student in Computer Science",
  affiliation: "Example University · School of Computer Science",
  email: "yourname@example.edu",
  photo: "", // 可填图片路径，如 "photo.jpg"；留空则显示姓名首字母
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/" },
    { label: "GitHub",       url: "https://github.com/" },
    { label: "CV",           url: "#" },
    { label: "Twitter / X",  url: "https://x.com/" },
    { label: "LinkedIn",     url: "https://www.linkedin.com/" },
    { label: "ORCID",        url: "https://orcid.org/" },
  ],
  interests: ["Machine Learning", "NLP", "Computer Vision", "Data Mining"],
};

const BIO = [
  `I am a Ph.D. student at <a href="#">Example University</a>, advised by
   <a href="#">Prof. Someone</a>. My research focuses on building trustworthy
   machine learning systems, with a recent emphasis on large language models.`,
  `Before that, I received my B.S. in Computer Science from
   <a href="#">Another University</a> in 2023. I have spent time as a research
   intern at <a href="#">Some Lab</a>.`,
  `这一段是中文示例：如果你的主页需要中英双语，直接在数组里加段落即可。`,
];

const NEWS = [
  { date: "2026-10", text: "Our paper “Example Paper Title” was accepted to NeurIPS 2026. 🎉" },
  { date: "2026-06", text: "Started a research internship at Example Lab." },
  { date: "2026-03", text: "Received the Example University Graduate Fellowship." },
  { date: "2025-12", text: "Gave a talk at the Example Workshop." },
];

/* venueHl: true 时venue标签会高亮（比如 CCF-A / 顶会） */
const PUBLICATIONS = [
  {
    year: 2026,
    title: "Example Paper Title: A Method for Something Important",
    authors: ["Alice Smith", "Your Name", "Bob Lee"],
    venue: "Advances in Neural Information Processing Systems (NeurIPS)",
    venueHl: true,
    links: [
      { label: "PDF", url: "#" },
      { label: "Code", url: "#" },
      { label: "BibTeX", url: "#" },
    ],
  },
  {
    year: 2026,
    title: "Another Paper on a Different Topic",
    authors: ["Your Name", "Carol Zhang", "Dave Wang"],
    venue: "arXiv preprint arXiv:2601.00000",
    links: [
      { label: "PDF", url: "#" },
      { label: "Project", url: "#" },
    ],
  },
  {
    year: 2025,
    title: "An Earlier Work About Something Else",
    authors: ["Your Name", "Eve Chen"],
    venue: "Proceedings of the Example Conference (EXAM)",
    venueHl: true,
    links: [
      { label: "PDF", url: "#" },
      { label: "Code", url: "#" },
      { label: "Slides", url: "#" },
    ],
  },
];

const PROJECTS = [
  {
    name: "Cool Project One",
    desc: "A short description of the project — what it does, why it matters.",
    links: [
      { label: "GitHub", url: "#" },
      { label: "Demo", url: "#" },
    ],
  },
  {
    name: "Cool Project Two",
    desc: "Another one-line description of a different project.",
    links: [{ label: "GitHub", url: "#" }],
  },
  {
    name: "Course / Open Source Contribution",
    desc: "Course projects and open-source work can also live here.",
    links: [{ label: "Site", url: "#" }],
  },
];

const AWARDS = [
  { when: "2026", text: "Graduate Fellowship, Example University" },
  { when: "2025", text: "Best Paper Award (Honorable Mention), EXAM 2025" },
  { when: "2023", text: "Outstanding Undergraduate Thesis Award" },
];

const TEACHING = [
  { when: "Fall 2026", text: "Teaching Assistant, Machine Learning (Graduate)" },
  { when: "Spring 2026", text: "Teaching Assistant, Data Structures (Undergraduate)" },
];

const CONTACT = {
  lines: [
    `Office: Room 123, Computer Science Building, Example University`,
    `Email: <a href="mailto:yourname@example.edu">yourname@example.edu</a>`,
    `Feel free to reach out about research collaboration or questions about my papers.`,
  ],
};

const FOOTER = `© 2026 Your Name · Built with a simple static template · Last updated Nov 2026`;
