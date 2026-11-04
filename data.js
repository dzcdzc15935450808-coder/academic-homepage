/* ============================================================
   data.js — 所有页面内容 + 三语翻译都在这一个文件里。
   每个可翻译字段写成 { zh, en, es }，app.js 按当前语言取用。
   论文标题等通常保留英文，不用翻译。
   ============================================================ */

const LANGS = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const UI = {
  nav: {
    about:        { zh: "简介",        en: "About",            es: "Sobre mí" },
    research:     { zh: "研究",        en: "Research",         es: "Investigación" },
    news:         { zh: "动态",        en: "News",             es: "Novedades" },
    publications: { zh: "论文",        en: "Publications",     es: "Publicaciones" },
    projects:     { zh: "项目",        en: "Projects",         es: "Proyectos" },
    awards:       { zh: "荣誉",        en: "Awards",           es: "Premios" },
    teaching:     { zh: "教学",        en: "Teaching",         es: "Docencia" },
    contact:      { zh: "联系",        en: "Contact",          es: "Contacto" },
  },
  section: {
    about:        { zh: "简介",        en: "About",            es: "Sobre mí" },
    research:     { zh: "研究",        en: "Research",         es: "Investigación" },
    news:         { zh: "动态",        en: "News",             es: "Novedades" },
    publications: { zh: "论文",        en: "Publications",     es: "Publicaciones" },
    projects:     { zh: "项目",        en: "Projects",         es: "Proyectos" },
    awards:       { zh: "荣誉奖项",    en: "Awards & Honors",  es: "Premios y distinciones" },
    teaching:     { zh: "教学",        en: "Teaching",         es: "Docencia" },
    contact:      { zh: "联系方式",    en: "Contact",          es: "Contacto" },
  },
  interestsHeading: { zh: "研究方向", en: "Research Interests", es: "Líneas de investigación" },
  pubNote: { zh: "（共 {n} 篇，均在审稿中）", en: "({n} manuscripts · currently under review)", es: "({n} manuscritos · en revisión)" },
};

const SITE = {
  name: "Zhecheng Dong",
  nameZh: "董哲诚",
  initials: "ZD",
  role: {
    zh: "艺术史系博士研究生（国家公派 CSC）",
    en: "Ph.D. Student in Art History (CSC Scholarship)",
    es: "Doctorando en Historia del Arte (Beca CSC)",
  },
  affiliation: {
    zh: "巴塞罗那大学 · 艺术史系",
    en: "University of Barcelona · Department of Art History",
    es: "Universidad de Barcelona · Departamento de Historia del Arte",
  },
  email: "zhdongdo81@doct.ub.edu",
  emails: ["zhdongdo81@doct.ub.edu", "zhecheng.dong@kinoscholar.com"],
  photo: "photo.jpg",
  links: [
    { label: { zh: "知影学术 Kinoscholar", en: "Kinoscholar", es: "Kinoscholar" }, url: "https://kinoscholar.com" },
    { label: { zh: "领英", en: "LinkedIn", es: "LinkedIn" }, url: "https://www.linkedin.com/in/zhecheng-dong-862390364" },
    { label: { zh: "ORCID", en: "ORCID", es: "ORCID" }, url: "https://orcid.org/0009-0009-3887-580X" },
  ],
  interests: [
    { zh: "转型期电影",   en: "Transitional Cinema",      es: "Cine de transición" },
    { zh: "慢电影",       en: "Slow Cinema",              es: "Cine lento" },
    { zh: "女性主义电影理论", en: "Feminist Film Theory", es: "Teoría feminista del cine" },
    { zh: "中国电影",     en: "Chinese Cinema",           es: "Cine chino" },
    { zh: "西班牙电影",   en: "Spanish Cinema",           es: "Cine español" },
    { zh: "平台研究",     en: "Platform Studies",         es: "Estudios de plataformas" },
  ],
};

const BIO = [
  {
    zh: `我是<a href="https://web.ub.edu" target="_blank">巴塞罗那大学</a>艺术史系博士研究生，由国家留学基金委（CSC）资助。
        博士课题比较中国与西班牙的转型期电影（1975—2015），考察电影如何在拆迁与重建中保存
        「具身城市记忆」。`,
    en: `I am a Ph.D. student in Art History at the <a href="https://web.ub.edu" target="_blank">University of Barcelona</a>,
        funded by the Chinese Scholarship Council (CSC). My doctoral research compares Chinese and Spanish
        transitional cinema (1975–2015), examining how film preserves embodied urban memory in the face of
        demolition and redevelopment.`,
    es: `Soy doctorando en Historia del Arte en la <a href="https://web.ub.edu" target="_blank">Universidad de Barcelona</a>,
        con financiación de la CSC (Consejo de Becas del Gobierno chino). Mi tesis doctoral compara el cine de
        transición chino y español (1975–2015) y estudia cómo el cine preserva la memoria urbana encarnada
        ante la demolición y la reurbanización.`,
  },
  {
    zh: `我的研究将电影现象学、女性主义理论与平台研究结合起来。此前我在<a href="https://www.upf.edu" target="_blank">庞培法布拉大学</a>
        获得当代电影与视听研究文学硕士，本科毕业于山西传媒学院广告学专业。`,
    en: `My work brings film phenomenology, feminist theory, and platform studies into dialogue. I hold an M.A.
        in Contemporary Film and Audiovisual Studies from <a href="https://www.upf.edu" target="_blank">Pompeu Fabra University</a>,
        and a B.A. in Advertising from Shanxi Media College.`,
    es: `Mi trabajo pone en diálogo la fenomenología del cine, la teoría feminista y los estudios de plataformas.
        Tengo un máster en Estudios de Cine y Medios Audiovisuales Contemporáneos por la
        <a href="https://www.upf.edu" target="_blank">Universidad Pompeu Fabra</a> y una licenciatura en Publicidad
        por la Shanxi Media College.`,
  },
  {
    zh: `我也是<a href="https://kinoscholar.com" target="_blank">知影学术 Kinoscholar</a>的创始人——一个基于检索增强生成（RAG）的
        学术写作平台，集成文献阅读与翻译、论文写作与审计功能。`,
    en: `I am also the founder of <a href="https://kinoscholar.com" target="_blank">Kinoscholar</a>,
        an academic-writing platform built on retrieval-augmented generation (RAG).`,
    es: `También soy fundador de <a href="https://kinoscholar.com" target="_blank">Kinoscholar</a>,
        una plataforma de escritura académica basada en generación aumentada por recuperación (RAG).`,
  },
];

const NEWS = [
  {
    date: "2026-09",
    text: {
      zh: "入学巴塞罗那大学艺术史系，开始博士研究生阶段（CSC 公派）。",
      en: "Started my Ph.D. in Art History at the University of Barcelona (CSC-funded).",
      es: "Comienzo del doctorado en Historia del Arte en la Universidad de Barcelona (beca CSC).",
    },
  },
  {
    date: "2026-10",
    text: {
      zh: "知影学术 Kinoscholar 公开测试上线，欢迎体验 kinoscholar.com。",
      en: "Kinoscholar entered public beta — try it at kinoscholar.com.",
      es: "Kinoscholar lanza su beta pública — disponible en kinoscholar.com.",
    },
  },
  {
    date: "2025-09",
    text: {
      zh: "入读庞培法布拉大学当代电影与视听研究文学硕士。",
      en: "Began the M.A. in Contemporary Film and Audiovisual Studies at Pompeu Fabra University.",
      es: "Inicio del máster en Estudios de Cine y Medios Audiovisuales Contemporáneos en la UPF.",
    },
  },
  {
    date: "2025",
    text: {
      zh: "完成硕士论文《转型期电影中的母亲形象与重写主体性》，依托西班牙国家级科研项目（PID2021-124377NB-I00）。",
      en: "Completed the master's thesis on maternal imagery in transitional cinema, under a Spanish national research project (PID2021-124377NB-I00).",
      es: "Defensa de la tesina sobre la imagen materna en el cine de transición, dentro del proyecto nacional PID2021-124377NB-I00.",
    },
  },
];

/* 在审论文 —— 用户要求先不列出；添加条目后此板块自动显示 */
const PUBLICATIONS = [];

/* 博士研究项目 */
const RESEARCH_PROJECT = {
  title: {
    zh: "过渡城市电影：中国与西班牙电影（1975—2015）中的空间表征与集体记忆比较研究",
    en: "Cinematic Cities in Transition: Spatial Representation and Collective Memory in Chinese and Spanish Cinema (1975–2015)",
    es: "Ciudades cinematográficas en transición: representación espacial y memoria colectiva en el cine chino y español (1975–2015)",
  },
  desc: {
    zh: `1975 年的马德里与 1978 年的北京先后经历政权更替，随之而来的城市重构以拆除历史街区、
        重新赋义公共空间来确立新的意识形态与市场逻辑。本研究提出「具身城市记忆」分析框架
        （融汇 Huyssen、Marks、Bruno、Taylor 等理论），比较贾樟柯、娄烨、王兵与米罗、莫利纳、
        绍拉等导演的十二部影片，结合形式细读、基于 ELAN 的镜头长度统计，以及马德里、巴塞罗那、
        北京、上海的田野工作，探讨：当建筑环境毁于拆除，电影如何保存城市记忆？`,
    en: `Madrid in 1975 and Beijing in 1978 both underwent political transitions followed by urban
        restructuring — demolishing historic neighborhoods and resignifying public space. Drawing on
        "embodied urban memory" (Huyssen, Marks, Bruno, Taylor), this project compares twelve films by
        Jia Zhangke, Lou Ye, Wang Bing, Pilar Miró, and others, combining close formal analysis,
        ELAN-based shot-length statistics, and fieldwork in Madrid, Barcelona, Beijing, and Shanghai.
        Core question: when the built environment is destroyed, how does cinema preserve urban memory?`,
    es: `Madrid en 1975 y Pekín en 1978 vivieron transiciones políticas seguidas de reestructuraciones
        urbanas: demolición de barrios históricos y resignificación del espacio público. A partir del
        marco de la "memoria urbana encarnada" (Huyssen, Marks, Bruno, Taylor), este proyecto compara
        doce películas de Jia Zhangke, Lou Ye, Wang Bing, Pilar Miró y otros directores, combinando
        análisis formal, estadísticas de duración de planos con ELAN y trabajo de campo en Madrid,
        Barcelona, Pekín y Shanghái. Pregunta central: cuando el entorno construido se destruye,
        ¿cómo preserva el cine la memoria urbana?`,
  },
};

const PROJECTS = [
  {
    name: "Kinoscholar 知影学术",
    desc: {
      zh: "创始人。基于检索增强生成（RAG）的新一代学术写作平台，集成文献阅读与翻译、论文写作与审计功能。",
      en: "Founder. A next-generation academic-writing platform built on RAG — integrating literature reading and translation, paper writing, and integrity auditing.",
      es: "Fundador. Una plataforma de escritura académica de nueva generación basada en RAG: lectura y traducción de literatura, escritura de artículos y auditoría de integridad.",
    },
    links: [{ label: { zh: "官网", en: "Website", es: "Sitio web" }, url: "https://kinoscholar.com" }],
  },
];

const AWARDS = [
  {
    when: "2026",
    text: {
      zh: "国家留学基金委（CSC）博士奖学金，赴西班牙攻读博士学位",
      en: "Chinese Scholarship Council (CSC) Fellowship for doctoral studies in Spain",
      es: "Beca del Consejo de Becas del Gobierno chino (CSC) para estudios doctorales en España",
    },
  },
];

const TEACHING = []; // 暂无教学经历；添加条目后此板块自动显示

const CONTACT = {
  emailLabel: { zh: "邮箱", en: "Email", es: "Correo" },
  lines: [
    {
      zh: "巴塞罗那大学艺术史系",
      en: "Department of Art History, University of Barcelona",
      es: "Departamento de Historia del Arte, Universidad de Barcelona",
    },
    {
      zh: "研究方向：转型期电影、电影现象学、平台研究。欢迎学术交流与合作。",
      en: "Research: transitional cinema, film phenomenology, platform studies. Open to academic exchange and collaboration.",
      es: "Líneas: cine de transición, fenomenología del cine, estudios de plataformas. Abierto a intercambio y colaboración académica.",
    },
  ],
};

const FOOTER = {
  zh: "© 2026 董哲诚 · 最近更新于 2026 年 11 月",
  en: "© 2026 Zhecheng Dong · Last updated Nov 2026",
  es: "© 2026 Zhecheng Dong · Última actualización: noviembre de 2026",
};
