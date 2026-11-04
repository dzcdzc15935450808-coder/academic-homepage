/* ============================================================
   data.js · 页面全部内容。每个可翻译字段写成 { zh, en, es }，
   app.js 按当前语言取用。改内容只改这个文件。
   ============================================================ */

const LANGS = [
  { code: "zh", label: "中文" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const SITE = {
  name: "Zhecheng Dong",
  nameZh: "董哲诚",
  email: "zhdongdo81@doct.ub.edu",
  emails: ["zhdongdo81@doct.ub.edu", "zhecheng.dong@kinoscholar.com"],
  city: "Barcelona",
  links: [
    { label: "ORCID", url: "https://orcid.org/0009-0009-3887-580X" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/zhecheng-dong-862390364" },
    { label: "Kinoscholar", url: "https://kinoscholar.com" },
  ],
};

const UI = {
  nav: {
    research: { zh: "研究", en: "Research", es: "Investigación" },
    news: { zh: "动态", en: "News", es: "Novedades" },
    work: { zh: "项目", en: "Work", es: "Proyectos" },
    contact: { zh: "联系", en: "Contact", es: "Contacto" },
  },
  skip: { zh: "跳到正文", en: "Skip to content", es: "Saltar al contenido" },
  titles: {
    zh: "董哲诚，艺术史博士研究生，巴塞罗那大学",
    en: "Zhecheng Dong, PhD student in art history, University of Barcelona",
    es: "Zhecheng Dong, doctorando en Historia del Arte, Universidad de Barcelona",
  },
  descriptions: {
    zh: "董哲诚，巴塞罗那大学艺术史系博士研究生（CSC）。研究中国与西班牙的转型期电影（1975–2015），以及电影如何保存被拆除的城市记忆。",
    en: "Zhecheng Dong is a PhD student in art history at the University of Barcelona, working on Chinese and Spanish transitional cinema (1975–2015) and how film preserves the memory of demolished cities.",
    es: "Zhecheng Dong es doctorando en Historia del Arte en la Universidad de Barcelona; investiga el cine de transición chino y español (1975–2015) y cómo el cine conserva la memoria de las ciudades demolidas.",
  },
};

/* ---------- Hero ---------- */
const HERO = {
  title: {
    zh: ["城市拆了", "电影还在"],
    en: ["The city goes", "the film stays"],
    es: ["La ciudad cae", "el cine queda"],
  },
  lede: {
    zh: "我是董哲诚，巴塞罗那大学艺术史系博士研究生。研究中国与西班牙的转型期电影。",
    en: "I am Zhecheng Dong, a PhD student in art history at the University of Barcelona, working on Chinese and Spanish cinema.",
    es: "Soy Zhecheng Dong, doctorando en Historia del Arte en la Universidad de Barcelona. Investigo el cine chino y español.",
  },
  action: { zh: "写信", en: "Write to me", es: "Escríbeme" },
  facts: [
    { value: "1975–2015", label: { zh: "研究跨度", en: "Period", es: "Periodo" } },
    { value: "12", label: { zh: "部影片", en: "films", es: "películas" } },
    { value: "4", label: { zh: "座田野城市", en: "fieldwork cities", es: "ciudades de campo" } },
  ],
};

/* ---------- About ---------- */
const ABOUT = {
  statement: {
    zh: "我研究电影如何保存一座被拆掉的城市。中国与西班牙，1975 到 2015。",
    en: "I study how film keeps a city that has been torn down. China and Spain, 1975 to 2015.",
    es: "Estudio cómo el cine conserva una ciudad que ha sido demolida. China y España, 1975–2015.",
  },
  body: {
    zh: "我是巴塞罗那大学艺术史系的博士研究生，由国家留学基金委（CSC）资助。此前在庞培法布拉大学获得当代电影与视听研究文学硕士，本科毕业于山西传媒学院广告学。我也是知影学术 Kinoscholar 的创始人。",
    en: "I am a PhD student in the Department of Art History at the University of Barcelona, funded by the China Scholarship Council. I hold an MA in Contemporary Film and Audiovisual Studies from Pompeu Fabra University and a BA in Advertising from Shanxi Media College. I also founded Kinoscholar.",
    es: "Soy doctorando en el Departamento de Historia del Arte de la Universidad de Barcelona, con una beca del Consejo de Becas de China (CSC). Tengo un máster en Estudios de Cine y Medios Audiovisuales Contemporáneos por la Universidad Pompeu Fabra y una licenciatura en Publicidad por la Shanxi Media College. También fundé Kinoscholar.",
  },
  notes: [
    { zh: "巴塞罗那 · 2026", en: "Barcelona · 2026", es: "Barcelona · 2026" },
    { zh: "国家留学基金委（CSC）资助", en: "China Scholarship Council fellowship", es: "Beca del Consejo de Becas de China" },
  ],
  portraitAlt: {
    zh: "董哲诚的肖像",
    en: "Portrait of Zhecheng Dong",
    es: "Retrato de Zhecheng Dong",
  },
};

/* ---------- Research ---------- */
const RESEARCH = {
  heading: { zh: "博士研究", en: "Doctoral research", es: "Tesis doctoral" },
  name: {
    zh: "过渡城市电影：中国与西班牙电影（1975–2015）中的空间表征与集体记忆比较研究",
    en: "Cinematic Cities in Transition: Spatial Representation and Collective Memory in Chinese and Spanish Cinema (1975–2015)",
    es: "Ciudades cinematográficas en transición: representación espacial y memoria colectiva en el cine chino y español (1975–2015)",
  },
  method: {
    zh: "十二部影片，两种转型。方法上是形式细读、基于 ELAN 的镜头长度统计，以及在马德里、巴塞罗那、北京、上海的田野工作。要回答的问题只有一个。",
    en: "Twelve films, two transitions. The method is close formal analysis, ELAN-based shot-length statistics, and fieldwork in Madrid, Barcelona, Beijing and Shanghai. There is only one question to answer.",
    es: "Doce películas, dos transiciones. El método combina el análisis formal, la estadística de duración de planos con ELAN y el trabajo de campo en Madrid, Barcelona, Pekín y Shanghái. Solo hay una pregunta que responder.",
  },
  field: {
    zh: "田野：马德里、巴塞罗那、北京、上海。",
    en: "Fieldwork: Madrid, Barcelona, Beijing, Shanghai.",
    es: "Trabajo de campo: Madrid, Barcelona, Pekín, Shanghái.",
  },
  notes: [
    { zh: "论文进行中，2026 年起", en: "Dissertation in progress, since 2026", es: "Tesis en curso, desde 2026" },
    { zh: "方法与档案：ELAN 镜头统计", en: "Method: ELAN shot-length statistics", es: "Método: estadística de planos con ELAN" },
  ],
  plates: [
    {
      img: "assets/madrid.webp",
      w: 950,
      h: 1188,
      alt: { zh: "从高处看马德里格兰大道，街道向远处延伸", en: "Gran Vía in Madrid seen from above, the street running into the distance", es: "La Gran Vía de Madrid desde arriba, la calle hacia el fondo" },
      caption: { zh: "马德里，格兰大道，2014", en: "Madrid, Gran Vía, 2014", es: "Madrid, Gran Vía, 2014" },
      credit: "Carlos Delgado",
      licence: "CC BY-SA 4.0",
      licenceUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
      href: "https://commons.wikimedia.org/wiki/File:Gran_V%C3%ADa_-_01.jpg",
    },
    {
      img: "assets/barcelona.webp",
      w: 1400,
      h: 612,
      alt: { zh: "巴塞罗那航拍，扩展区的网格街道一直延伸到海边", en: "Aerial view of Barcelona, the grid of the Eixample running towards the sea", es: "Vista aérea de Barcelona, la cuadrícula del Eixample hacia el mar" },
      caption: { zh: "巴塞罗那，2021", en: "Barcelona, 2021", es: "Barcelona, 2021" },
      credit: "dronepicr",
      licence: "CC BY 2.0",
      licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
      href: "https://commons.wikimedia.org/wiki/File:Aerial_view_of_Barcelona,_Spain_(51227309370)_edited.jpg",
    },
  ],
};

/* ---------- The two cities ---------- */
const DIPTYCH = {
  heading: {
    zh: "相隔三年，两座城市开始做同一件事",
    en: "Three years apart, two cities begin the same work",
    es: "Con tres años de diferencia, dos ciudades empiezan lo mismo",
  },
  madrid: {
    year: "1975",
    city: { zh: "马德里", en: "Madrid", es: "Madrid" },
    text: {
      zh: "佛朗哥去世，西班牙进入转型。城市以拆除旧街区、重新赋义公共空间来确立新的秩序。",
      en: "Franco dies and Spain enters its transition. The city fixes a new order by demolishing old neighbourhoods and giving public space a new meaning.",
      es: "Muere Franco y España entra en su transición. La ciudad fija un orden nuevo demoliendo barrios antiguos y resignificando el espacio público.",
    },
    directors: { zh: "研究对象：米罗、莫利纳、绍拉", en: "Films by Miró, Molina, Saura", es: "Películas de Miró, Molina, Saura" },
  },
  beijing: {
    year: "1978",
    city: { zh: "北京", en: "Beijing", es: "Pekín" },
    text: {
      zh: "改革开放开始。此后的二十年，胡同与老城在推土机下变成新的天际线。",
      en: "Reform and opening begin. Over the next two decades, the hutongs and the old city become a new skyline under the bulldozer.",
      es: "Comienzan la reforma y la apertura. Durante las dos décadas siguientes, los hutongs y la ciudad antigua se convierten en un nuevo perfil bajo la excavadora.",
    },
    directors: { zh: "研究对象：贾樟柯、娄烨、王兵", en: "Films by Jia Zhangke, Lou Ye, Wang Bing", es: "Películas de Jia Zhangke, Lou Ye, Wang Bing" },
  },
  question: {
    zh: "当建筑环境毁于拆除，电影如何保存城市记忆？",
    en: "When the built environment is destroyed, how does cinema preserve urban memory?",
    es: "Cuando el entorno construido se destruye, ¿cómo preserva el cine la memoria urbana?",
  },
};

/* ---------- News ---------- */
const NEWS = [
  {
    date: "2026-10",
    text: {
      zh: "知影学术 Kinoscholar 公开测试上线。",
      en: "Kinoscholar opens its public beta.",
      es: "Kinoscholar abre su beta pública.",
    },
  },
  {
    date: "2026-09",
    text: {
      zh: "入学巴塞罗那大学艺术史系，开始博士阶段（CSC 公派）。",
      en: "Start the PhD in Art History at the University of Barcelona, funded by the CSC.",
      es: "Comienzo del doctorado en Historia del Arte en la Universidad de Barcelona, con beca CSC.",
    },
  },
  {
    date: "2026",
    text: {
      zh: "完成硕士论文《转型期电影中的母亲形象与重写主体性》，依托西班牙国家级科研项目 PID2021-124377NB-I00。",
      en: "Complete the MA thesis on maternal imagery in transitional cinema, within the Spanish national research project PID2021-124377NB-I00.",
      es: "Defensa del trabajo de fin de máster sobre la imagen materna en el cine de transición, dentro del proyecto nacional PID2021-124377NB-I00.",
    },
  },
  {
    date: "2025-09",
    text: {
      zh: "入读庞培法布拉大学当代电影与视听研究文学硕士。",
      en: "Begin the MA in Contemporary Film and Audiovisual Studies at Pompeu Fabra University.",
      es: "Inicio del máster en Estudios de Cine y Medios Audiovisuales Contemporáneos en la Universidad Pompeu Fabra.",
    },
  },
];

/* ---------- Work ---------- */
const WORK = {
  heading: { zh: "知影学术 Kinoscholar", en: "Kinoscholar", es: "Kinoscholar" },
  desc: {
    zh: "我做的学术写作平台。读文献、写稿、翻译、查引用，在同一张桌面上完成，底层是检索增强生成。",
    en: "An academic writing platform I founded: reading, drafting, translation and citation checking on one desk, built on retrieval-augmented generation.",
    es: "Una plataforma de escritura académica que fundé: lectura, escritura, traducción y verificación de citas en un mismo escritorio, sobre generación aumentada por recuperación.",
  },
  link: "kinoscholar.com",
  url: "https://kinoscholar.com",
  shot: "assets/kinoscholar.webp",
  shotW: 1200,
  shotH: 694,
  shotAlt: {
    zh: "Kinoscholar 写作界面：左侧章节，中间编辑器，右侧讨论台",
    en: "The Kinoscholar writing interface: chapters on the left, the editor in the middle, discussion on the right",
    es: "La interfaz de escritura de Kinoscholar: capítulos a la izquierda, editor en el centro, discusión a la derecha",
  },
  caption: { zh: "Kinoscholar 写作台，2026", en: "The Kinoscholar writing desk, 2026", es: "El escritorio de escritura de Kinoscholar, 2026" },
};

/* ---------- Contact ---------- */
const CONTACT = {
  statement: {
    zh: "欢迎就转型期电影、平台研究，或者合作写稿来信。",
    en: "Write to me about transitional cinema, platform studies, or a piece we might write together.",
    es: "Escríbeme sobre cine de transición, estudios de plataformas o un texto que podamos escribir juntos.",
  },
  meta: {
    zh: "巴塞罗那 · 一般两天内回复",
    en: "Barcelona · usually within two days",
    es: "Barcelona · normalmente en dos días",
  },
};

/* ---------- Colophon ---------- */
const COLOPHON = {
  credits: {
    zh: "图片：马德里，格兰大道，Carlos Delgado 摄，CC BY-SA 4.0；巴塞罗那，dronepicr 摄，CC BY 2.0。两张照片均作灰度处理，版权归原作者。Kinoscholar 界面为作者截图，肖像由本人提供。",
    en: "Images: Madrid, Gran Vía, photograph by Carlos Delgado, CC BY-SA 4.0; Barcelona, photograph by dronepicr, CC BY 2.0. Both images are shown in greyscale; rights remain with their authors. The Kinoscholar interface is the author's own screenshot; the portrait is supplied by the author.",
    es: "Imágenes: Madrid, Gran Vía, fotografía de Carlos Delgado, CC BY-SA 4.0; Barcelona, fotografía de dronepicr, CC BY 2.0. Ambas se muestran en escala de grises; los derechos son de sus autores. La interfaz de Kinoscholar es una captura del autor; el retrato lo aporta el propio autor.",
  },
  type: {
    zh: "字体：拉丁字母为 Schibsted Grotesk（SIL OFL），中文标题用宋体，正文用苹方。",
    en: "Type: Schibsted Grotesk for Latin (SIL OFL); Songti for Chinese headings, PingFang for Chinese text.",
    es: "Tipografía: Schibsted Grotesk para el latín (SIL OFL); Songti para los títulos chinos y PingFang para el texto chino.",
  },
  updated: {
    zh: "最近更新 2026 年 11 月 · © 董哲诚",
    en: "Last updated November 2026 · © Zhecheng Dong",
    es: "Última actualización: noviembre de 2026 · © Zhecheng Dong",
  },
};
