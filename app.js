/* ============================================================
   app.js — i18n 渲染逻辑。一般不需要修改。
   语言优先级：localStorage > 浏览器默认语言（中文浏览器默认 zh）
   ============================================================ */

(function () {
  const $ = (id) => document.getElementById(id);

  /* ---------- language state ---------- */
  const stored = localStorage.getItem("lang");
  const browserLang = (navigator.language || "en").toLowerCase().startsWith("zh") ? "zh"
    : (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  let LANG = ["zh", "en", "es"].includes(stored) ? stored : browserLang;

  const pick = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "object") return obj[LANG] ?? obj.en ?? obj.zh ?? "";
    return obj;
  };

  /* ---------- render ---------- */
  function render() {
    document.documentElement.lang = LANG;
    document.title = `${SITE.name} — ${pick(UI.section.about)}`;

    /* top brand + name */
    $("brand-name").textContent = SITE.name;
    $("name").innerHTML = SITE.name +
      (SITE.nameZh ? `<span class="name-zh">${SITE.nameZh}</span>` : "");

    const avatar = $("avatar");
    if (SITE.photo) {
      avatar.style.background = `center/cover no-repeat url("${SITE.photo}")`;
      avatar.textContent = "";
    } else {
      avatar.textContent = SITE.initials || SITE.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
    }

    $("role").textContent = pick(SITE.role);
    $("affiliation").textContent = pick(SITE.affiliation);
    $("email").innerHTML = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;

    $("links").innerHTML = SITE.links
      .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${pick(l.label)}</a>`)
      .join("");

    $("interests").innerHTML = `<h3>${pick(UI.interestsHeading)}</h3>` +
      SITE.interests.map(i => `<span class="tag">${pick(i)}</span>`).join("");

    /* nav + section titles */
    Object.keys(UI.nav).forEach(key => {
      const navLink = document.querySelector(`.nav a[href="#${key}"]`);
      if (navLink) navLink.textContent = pick(UI.nav[key]);
      const titleEl = $(`title-${key}`);
      if (titleEl) titleEl.textContent = pick(UI.section[key]);
    });

    /* bio */
    $("bio").innerHTML = BIO.map(p => `<p>${pick(p)}</p>`).join("");

    /* research */
    if (typeof RESEARCH_PROJECT !== "undefined" && RESEARCH_PROJECT.title) {
      $("research-block").innerHTML = `
        <h3>${pick(RESEARCH_PROJECT.title)}</h3>
        <p>${pick(RESEARCH_PROJECT.desc)}</p>`;
    }

    /* news */
    $("news-list").innerHTML = NEWS
      .map(n => `<li><span class="news-date">${n.date}</span><span>${pick(n.text)}</span></li>`)
      .join("");

    /* publications (grouped by year, newest first) */
    const byYear = {};
    [...PUBLICATIONS].sort((a, b) => b.year - a.year).forEach(p => {
      (byYear[p.year] = byYear[p.year] || []).push(p);
    });
    $("pub-note").textContent = pick(UI.pubNote).replace("{n}", PUBLICATIONS.length);

    $("pub-list").innerHTML = Object.keys(byYear).sort((a, b) => b - a).map(year => `
      <div class="pub-year">${year}</div>
      ${byYear[year].map(p => `
        <div class="pub">
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${p.authors.map(a =>
            a === SITE.name ? `<span class="me">${a}</span>` : a).join(", ")}</div>
          <div class="pub-venue">${[p.venue, pick(p.status)].filter(Boolean).join(" · ")}</div>
          ${p.links && p.links.length ? `<div class="pub-badges">${p.links.map(l =>
            `<a class="badge" href="${l.url}">${pick(l.label)}</a>`).join("")}</div>` : ""}
        </div>`).join("")}
    `).join("");

    /* projects */
    $("project-list").innerHTML = PROJECTS.map(p => `
      <div class="card">
        <h3><a href="${(p.links[0] || {}).url || "#"}">${p.name}</a></h3>
        <p>${pick(p.desc)}</p>
        <div class="card-links">${p.links.map(l =>
          `<a class="badge" href="${l.url}">${pick(l.label)}</a>`).join("")}</div>
      </div>`).join("");

    /* awards & teaching */
    $("award-list").innerHTML = AWARDS
      .map(a => `<li><span class="when">${a.when}</span>${pick(a.text)}</li>`).join("");
    $("teaching-list").innerHTML = TEACHING
      .map(t => `<li><span class="when">${t.when}</span>${pick(t.text)}</li>`).join("");

    /* contact: second line is the email row */
    $("contact-block").innerHTML = CONTACT.lines.map((l, i) =>
      i === 1
        ? `<p>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></p>`
        : (pick(l) ? `<p>${pick(l)}</p>` : "")
    ).join("");

    $("footer").textContent = pick(FOOTER);

    /* hide empty sections */
    const hideIfEmpty = (listId, sectionId) => {
      const el = $(listId);
      if (el && !el.children.length) {
        const sec = document.getElementById(sectionId);
        if (sec) sec.style.display = "none";
        const navLink = document.querySelector(`.nav a[href="#${sectionId}"]`);
        if (navLink) navLink.style.display = "none";
      }
    };
    hideIfEmpty("news-list", "news");
    hideIfEmpty("pub-list", "publications");
    hideIfEmpty("project-list", "projects");
    hideIfEmpty("award-list", "awards");
    hideIfEmpty("teaching-list", "teaching");

    /* language switcher active state */
    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === LANG);
    });
  }

  /* ---------- language switcher ---------- */
  const switcher = $("lang-switch");
  switcher.innerHTML = LANGS.map(l => `<button data-lang="${l.code}">${l.label}</button>`).join("");
  switcher.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    LANG = btn.dataset.lang;
    localStorage.setItem("lang", LANG);
    render();
  });

  /* ---------- theme toggle (persisted) ---------- */
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.setAttribute("data-theme", "dark");
  }
  $("theme-toggle").addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === "dark";
    if (dark) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
  });

  /* ---------- active nav highlight ---------- */
  const navLinks = [...document.querySelectorAll(".nav a")];
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(a => a.style.color = "");
        const link = navLinks.find(a => a.getAttribute("href") === "#" + e.target.id);
        if (link) link.style.color = "var(--accent)";
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => observer.observe(s));

  render();
})();
