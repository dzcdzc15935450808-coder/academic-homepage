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
  langLabel: { zh: "语言", en: "Language", es: "Idioma" },
  pubNote: { zh: "", en: "", es: "" },
};

const SITE = {
  name: "Zhecheng Dong",
  nameZh: "董哲诚",
  initials: "ZD",
  role: {
    zh: "博士研究生",
    en: "Ph.D. Student",
    es: "Doctorando",
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
    { label: { zh: "领英", en: "LinkedIn", es: "LinkedIn" }, url: "https://www.linkedin.com/in/zhecheng-dong-862390364" },
    { label: { zh: "谷歌学术", en: "Google Scholar", es: "Google Scholar" }, url: "https://scholar.google.com/citations?hl=es&user=vmRK7i4AAAAJ&view_op=list_works" },
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
    zh: `董哲诚，巴塞罗那大学艺术史系博士研究生，由国家留学基金委（CSC）资助。博士论文题为《过渡城市电影：中国与西班牙电影（1975–2015）中的空间表征与集体记忆比较研究》。主要研究领域为转型期电影、慢电影、女性主义电影理论与平台研究。另为<a href="https://kinoscholar.com" target="_blank">知影学术 Kinoscholar</a> 创始人。`,
    en: `Zhecheng Dong is a Ph.D. student in Art History at the University of Barcelona, funded by the
        China Scholarship Council (CSC). His dissertation is titled <em>Cinematic Cities in Transition:
        Spatial Representation and Collective Memory in Chinese and Spanish Cinema (1975–2015)</em>.
        His research interests are transitional cinema, slow cinema, feminist film theory and platform
        studies. He is the founder of <a href="https://kinoscholar.com" target="_blank">Kinoscholar</a>.`,
    es: `Zhecheng Dong es doctorando en Historia del Arte en la Universidad de Barcelona, con una beca del
        Consejo de Becas de China (CSC). Su tesis doctoral se titula <em>Ciudades cinematográficas en
        transición: representación espacial y memoria colectiva en el cine chino y español (1975–2015)</em>.
        Sus líneas de investigación son el cine de transición, el cine lento, la teoría feminista del cine
        y los estudios de plataformas. Es fundador de <a href="https://kinoscholar.com" target="_blank">Kinoscholar</a>.`,
  },
  {
    zh: `此前在<a href="https://www.upf.edu" target="_blank">庞培法布拉大学</a>获得当代电影与视听研究硕士学位，本科毕业于山西传媒学院广告学专业。`,
    en: `He holds a master's degree in Contemporary Film and Audiovisual Studies from <a href="https://www.upf.edu" target="_blank">Pompeu Fabra University</a>
        and a B.A. in Advertising from Communication University of Shanxi.`,
    es: `Tiene un máster en Estudios de Cine y Medios Audiovisuales Contemporáneos por la
        <a href="https://www.upf.edu" target="_blank">Universidad Pompeu Fabra</a> y una licenciatura en Publicidad
        por la Universidad de Comunicación de Shanxi.`,
  },
];

const NEWS = [
  {
    date: "2026-11",
    text: {
      zh: "论文《Palimpsestic Subjectivity: Feminist Rewriting and Layered Agency in Pilar Miró's Gary Cooper, Who Art in Heaven (1980)》被 Feminist Art Practices and Research: Cosmos（Taylor & Francis）接受，待刊。",
      en: "Article “Palimpsestic Subjectivity: Feminist Rewriting and Layered Agency in Pilar Miró's Gary Cooper, Who Art in Heaven (1980)” accepted by Feminist Art Practices and Research: Cosmos (Taylor & Francis), forthcoming.",
      es: "Artículo «Palimpsestic Subjectivity: Feminist Rewriting and Layered Agency in Pilar Miró's Gary Cooper, Who Art in Heaven (1980)» aceptado por Feminist Art Practices and Research: Cosmos (Taylor & Francis), de próxima publicación.",
    },
  },
  {
    date: "2026-10",
    text: {
      zh: "知影课堂 KinoClass 进入公开测试，地址是 class.kinoscholar.com。",
      en: "KinoClass entered public beta at class.kinoscholar.com.",
      es: "KinoClass entra en beta pública en class.kinoscholar.com.",
    },
  },
  {
    date: "2026-09",
    text: {
      zh: "入学巴塞罗那大学艺术史系，开始博士研究生阶段。",
      en: "Started my Ph.D. in Art History at the University of Barcelona.",
      es: "Comienzo del doctorado en Historia del Arte en la Universidad de Barcelona.",
    },
  },
  {
    date: "2026",
    text: {
      zh: "完成硕士论文《转型期电影中的母亲形象与重写主体性》，依托西班牙国家级科研项目（PID2021-124377NB-I00）。",
      en: "Completed the master's thesis on maternal imagery in transitional cinema, under a Spanish national research project (PID2021-124377NB-I00).",
      es: "Defensa de la tesina sobre la imagen materna en el cine de transición, dentro del proyecto nacional PID2021-124377NB-I00.",
    },
  },
  {
    date: "2025-09",
    text: {
      zh: "入读庞培法布拉大学当代电影与视听研究硕士项目。",
      en: "Began the master's programme in Contemporary Film and Audiovisual Studies at Pompeu Fabra University.",
      es: "Inicio del máster en Estudios de Cine y Medios Audiovisuales Contemporáneos en la UPF.",
    },
  },
];

/* 已接受论文 1 篇；在审论文不列出 */
const PUBLICATIONS = [
  {
    year: 2026,
    title: "Palimpsestic Subjectivity: Feminist Rewriting and Layered Agency in Pilar Miró's Gary Cooper, Who Art in Heaven (1980)",
    authors: ["Zhecheng Dong"],
    venue: "Feminist Art Practices and Research: Cosmos, Taylor & Francis",
    status: { zh: "已接受，待刊", en: "Accepted, forthcoming", es: "Aceptado, de próxima publicación" },
    links: [{ label: { zh: "期刊", en: "Journal", es: "Revista" }, url: "https://www.tandfonline.com/journals/rfar20" }],
  },
];

/* 博士研究项目 */
const RESEARCH_PROJECT = {
  title: {
    zh: "过渡城市电影：中国与西班牙电影（1975—2015）中的空间表征与集体记忆比较研究",
    en: "Cinematic Cities in Transition: Spatial Representation and Collective Memory in Chinese and Spanish Cinema (1975–2015)",
    es: "Ciudades cinematográficas en transición: representación espacial y memoria colectiva en el cine chino y español (1975–2015)",
  },
  desc: {
    zh: `城市被拆掉之后，电影保存了什么？1975 年的马德里和 1978 年的北京，都先经历政权更替，再经历城市重构：
        拆掉历史街区，重新定义公共空间。论文用「具身城市记忆」的框架（Huyssen、Marks、Bruno、Taylor），
        比较贾樟柯、娄烨、王兵与米罗、莫利纳、绍拉的十二部影片，方法上是形式细读、用 ELAN 统计镜头长度，
        以及马德里、巴塞罗那、北京、上海的田野工作。`,
    en: `When a city is torn down, what does film keep? Madrid in 1975 and Beijing in 1978 both went through a
        political transition and then a rebuilding: historic neighborhoods demolished, public space given new
        meaning. The dissertation uses an "embodied urban memory" framework (Huyssen, Marks, Bruno, Taylor) to
        compare twelve films by Jia Zhangke, Lou Ye, Wang Bing, Pilar Miró, Josefina Molina and Carlos Saura,
        through close formal analysis, ELAN shot-length statistics, and fieldwork in Madrid, Barcelona, Beijing
        and Shanghai.`,
    es: `Cuando una ciudad se derriba, ¿qué conserva el cine? Madrid en 1975 y Pekín en 1978 vivieron primero una
        transición política y después una reconstrucción: barrios históricos demolidos y espacio público
        resignificado. La tesis usa el marco de la "memoria urbana encarnada" (Huyssen, Marks, Bruno, Taylor) para
        comparar doce películas de Jia Zhangke, Lou Ye, Wang Bing, Pilar Miró, Josefina Molina y Carlos Saura,
        mediante análisis formal, estadísticas de duración de planos con ELAN y trabajo de campo en Madrid,
        Barcelona, Pekín y Shanghái.`,
  },
};

const PROJECTS = [
  {
    name: "Kinoscholar 知影学术",
    desc: {
      zh: "创始人。该平台致力于以技术消除语言与知识获取的不平等，使学术知识面向更广泛的公众开放。",
      en: "Founder. The platform works to close the gap in language and access to knowledge, so that scholarship reaches a wider public.",
      es: "Fundador. La plataforma trabaja por cerrar la brecha de idioma y de acceso al conocimiento, para que la investigación llegue a un público más amplio.",
    },
    links: [{ label: { zh: "官网", en: "Website", es: "Sitio web" }, url: "https://kinoscholar.com" }],
  },
  {
    name: "TIEMPHA",
    desc: {
      zh: "研究员。巴塞罗那大学研究团队，依托西班牙国家级科研项目 ITACA——《技术世的想象》（PID2023-151921NB-I00），以生态批评视角研究视觉文化与艺术。",
      en: "Researcher. University of Barcelona research group, working under the Spanish national research project ITACA — Imaginarios del Tecnoceno (PID2023-151921NB-I00), studying visual culture and the arts from an ecocritical perspective.",
      es: "Investigador. Grupo de investigación de la Universidad de Barcelona, en el marco del proyecto nacional ITACA — Imaginarios del Tecnoceno (PID2023-151921NB-I00), que estudia la cultura visual y las artes desde un enfoque ecocrítico.",
    },
    links: [{ label: { zh: "官网", en: "Website", es: "Sitio web" }, url: "https://tiempha.es/" }],
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
  {
    when: "2025",
    text: {
      zh: '庞培法布拉大学校级优秀论文，论文《Deprived Violence and Bare Life: A Comparative Reading of "homo sacer" in Mafia and A Touch of Sin》',
      en: 'Extraordinary Prize for the best thesis, Pompeu Fabra University, for <em>Deprived Violence and Bare Life: A Comparative Reading of "homo sacer" in Mafia and A Touch of Sin</em>',
      es: 'Premio Extraordinario a la mejor tesis, Universidad Pompeu Fabra, por <em>Deprived Violence and Bare Life: A Comparative Reading of "homo sacer" in Mafia and A Touch of Sin</em>',
    },
  },
  {
    when: "2023",
    text: {
      zh: "学生世界影响力电影节（SWIFF）最佳导演提名",
      en: "Best Director nomination, Student World Impact Film Festival (SWIFF)",
      es: "Nominación a Mejor Dirección, Student World Impact Film Festival (SWIFF)",
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
      zh: "研究方向：转型期电影、电影现象学、平台研究。欢迎来信。",
      en: "Research: transitional cinema, film phenomenology, platform studies. Write if you work on any of this.",
      es: "Líneas: cine de transición, fenomenología del cine, estudios de plataformas. Escríbeme si trabajas en algo de esto.",
    },
  ],
  site: "https://zhecheng.kinoscholar.com",
};

const FOOTER = {
  zh: "© 2026 董哲诚",
  en: "© 2026 Zhecheng Dong",
  es: "© 2026 Zhecheng Dong",
};
