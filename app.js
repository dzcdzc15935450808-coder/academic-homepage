/* ============================================================
   app.js · 渲染 + 三语切换 + 入场动效。
   语言优先级：?lang= > localStorage > 浏览器语言。
   切换语言不刷新页面，只重写文本。
   ============================================================ */

(function () {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
  const pick = (v) => {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[LANG] ?? v.en ?? v.zh ?? "";
  };

  const params = new URLSearchParams(location.search);
  const stored = localStorage.getItem("lang");
  const nav = (navigator.language || "en").toLowerCase();
  const browser = nav.startsWith("zh") ? "zh" : nav.startsWith("es") ? "es" : "en";
  const fromUrl = params.get("lang");
  let LANG = ["zh", "en", "es"].includes(fromUrl) ? fromUrl
    : ["zh", "en", "es"].includes(stored) ? stored
    : browser;

  let io = null;

  /* ---------- chrome ---------- */
  function renderChrome() {
    $("skip-link").textContent = pick(UI.skip);
    $("mark").textContent = LANG === "zh" ? SITE.nameZh : SITE.name;

    $("nav").innerHTML = Object.keys(UI.nav)
      .map((k) => `<a href="#${k}">${pick(UI.nav[k])}</a>`)
      .join("");

    $("lang").innerHTML = LANGS
      .map((l) => `<button type="button" data-lang="${l.code}" aria-pressed="${l.code === LANG}">${l.label}</button>`)
      .join("");
  }

  /* ---------- hero ---------- */
  function renderHero() {
    const lines = HERO.title[LANG] || HERO.title.zh;
    $("hero-line-1").textContent = lines[0];
    $("hero-line-2").textContent = lines[1];
    $("hero-lede").textContent = pick(HERO.lede);

    const action = $("hero-action");
    action.textContent = `${pick(HERO.action)} ↗`;
    action.href = `mailto:${SITE.email}?subject=${encodeURIComponent(LANG === "zh" ? "来自个人主页的来信" : "Hello from your homepage")}`;

    $("hero-facts").innerHTML = HERO.facts
      .map((f) => `<li class="fact"><span class="fact__v latin">${f.value}</span><span class="fact__k">${pick(f.label)}</span></li>`)
      .join("");
  }

  /* ---------- about ---------- */
  function renderAbout() {
    const portrait = `<img class="dropcap" src="assets/portrait.webp" width="733" height="733" alt="${esc(pick(ABOUT.portraitAlt))}" decoding="async">`;
    $("about-statement").innerHTML = portrait + pick(ABOUT.statement);
    $("about-body").textContent = pick(ABOUT.body);
    $("about-notes").innerHTML = ABOUT.notes.map((n) => `<p>${pick(n)}</p>`).join("");
  }

  /* ---------- research ---------- */
  function renderResearch() {
    $("research-heading").textContent = pick(RESEARCH.heading);
    $("research-name").textContent = pick(RESEARCH.name);
    $("research-method").textContent = pick(RESEARCH.method);
    $("research-field").textContent = pick(RESEARCH.field);
    $("research-notes").innerHTML = RESEARCH.notes.map((n) => `<p>${pick(n)}</p>`).join("");

    $("diptych-head").textContent = pick(DIPTYCH.heading);
    ["madrid", "beijing"].forEach((key) => {
      const c = DIPTYCH[key];
      $(`${key}-year`).textContent = c.year;
      $(`${key}-city`).textContent = pick(c.city);
      $(`${key}-text`).textContent = pick(c.text);
      $(`${key}-films`).textContent = pick(c.directors);
    });
    $("diptych-question").textContent = pick(DIPTYCH.question);

    $("plates").innerHTML = RESEARCH.plates.map((p) => `
      <figure class="plate">
        <img src="${p.img}" width="${p.w}" height="${p.h}" alt="${esc(pick(p.alt))}" loading="lazy" decoding="async">
        <figcaption>
          <span class="plate__cap">${pick(p.caption)}</span>
          <span class="plate__credit">
            <a href="${p.href}" target="_blank" rel="noopener">${p.credit}</a>, ${p.licence}
          </span>
        </figcaption>
      </figure>`).join("");
  }

  /* ---------- news ---------- */
  function renderNews() {
    $("news-heading").textContent = pick(UI.nav.news);
    $("news-list").innerHTML = NEWS.map((n) => `
      <article class="news__item">
        <p class="news__date latin">${n.date}</p>
        <p class="news__text">${pick(n.text)}</p>
      </article>`).join("");
  }

  /* ---------- work ---------- */
  function renderWork() {
    $("work-heading").textContent = pick(WORK.heading);
    $("work-desc").textContent = pick(WORK.desc);
    $("work-caption").textContent = pick(WORK.caption);

    const link = $("work-link");
    link.textContent = WORK.link;
    link.href = WORK.url;

    const img = $("work-img");
    img.src = WORK.shot;
    img.alt = pick(WORK.shotAlt);
    img.width = WORK.shotW;
    img.height = WORK.shotH;
  }

  /* ---------- contact ---------- */
  function renderContact() {
    $("contact-statement").textContent = pick(CONTACT.statement);
    $("contact-meta").textContent = pick(CONTACT.meta);
    $("contact-links").innerHTML =
      SITE.emails.map((e) => `<a class="link link--big" href="mailto:${e}">${e}</a>`).join("") +
      SITE.links.map((l) => `<a class="link" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
  }

  /* ---------- colophon ---------- */
  function renderColophon() {
    $("colophon-credits").textContent = pick(COLOPHON.credits);
    $("colophon-type").textContent = pick(COLOPHON.type);
    $("colophon-updated").textContent = pick(COLOPHON.updated);
  }

  /* ---------- meta ---------- */
  function renderMeta() {
    document.documentElement.lang = LANG;
    document.title = pick(UI.titles);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", pick(UI.descriptions));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pick(UI.titles));
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", pick(UI.descriptions));
  }

  function renderAll() {
    renderMeta();
    renderChrome();
    renderHero();
    renderAbout();
    renderResearch();
    renderNews();
    renderWork();
    renderContact();
    renderColophon();
    markRise();
  }

  /* ---------- entrance motion ---------- */
  function markRise() {
    if (!("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    }

    const selectors = [
      ".about .statement", ".about .body", ".about .notes p",
      ".research .h2", ".research__name", ".research .body",
      ".diptych__head", ".city", ".diptych__q",
      ".plates .plate", ".field-note",
      ".news .h2", ".news__item",
      ".work__shot", ".work__text > *",
      ".contact .statement", ".contact__links", ".contact__meta",
      ".colophon__grid > p",
    ];

    const els = [];
    selectors.forEach((s) => document.querySelectorAll(s).forEach((el) => els.push(el)));
    els.forEach((el, i) => {
      el.classList.add("rise");
      el.style.setProperty("--i", String(i % 6));
      io.observe(el);
    });
  }

  /* ---------- language ---------- */
  $("lang").addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn || btn.dataset.lang === LANG) return;

    LANG = btn.dataset.lang;
    localStorage.setItem("lang", LANG);

    const url = new URL(location.href);
    if (LANG === "zh") url.searchParams.delete("lang");
    else url.searchParams.set("lang", LANG);
    history.replaceState(null, "", url);

    renderAll();
    document.getElementById("top").scrollIntoView({ block: "start" });
  });

  /* ---------- boot ---------- */
  renderAll();

  requestAnimationFrame(() => {
    document.documentElement.classList.add("is-ready");
  });
})();
