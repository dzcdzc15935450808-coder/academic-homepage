/* ============================================================
   app.js — i18n 渲染逻辑（zh / en / es）。
   语言优先级：localStorage > 浏览器语言；中文界面主名显示「董哲诚」。
   ============================================================ */

(function () {
  const $ = (id) => document.getElementById(id);

  const stored = localStorage.getItem("lang");
  const nav = (navigator.language || "en").toLowerCase();
  const browserLang = nav.startsWith("zh") ? "zh" : nav.startsWith("es") ? "es" : "en";
  const urlLang = new URLSearchParams(location.search).get("lang");
  let LANG = ["zh", "en", "es"].includes(urlLang) ? urlLang
    : ["zh", "en", "es"].includes(stored) ? stored : browserLang;

  const pick = (obj) => {
    if (obj == null) return "";
    if (typeof obj === "object") return obj[LANG] ?? obj.en ?? obj.zh ?? "";
    return obj;
  };

  /* localized primary/secondary names: 中文界面主名是中文名 */
  const primaryName = LANG === "zh" && SITE.nameZh ? SITE.nameZh : SITE.name;
  const altName = LANG === "zh" && SITE.nameZh ? SITE.name : SITE.nameZh;

  function render() {
    document.documentElement.lang = LANG;
    document.title = `${primaryName} — ${pick(UI.section.about)}`;

    $("brand-name").textContent = primaryName;
    $("name").innerHTML = primaryName +
      (altName ? `<span class="name-alt">${altName}</span>` : "");

    /* film still */
    const img = $("photo");
    img.src = SITE.photo || "";
    img.onerror = () => { img.closest(".film-still").style.display = "none"; };
    const orcid = (SITE.links || []).find(l => (l.url || "").includes("orcid.org"));
    $("photo-caption").innerHTML = orcid
      ? `<a href="${orcid.url}" target="_blank" rel="noopener">ORCID <span class="cap-id">${orcid.url.split("/").pop()}</span></a>`
      : "";

    $("role").textContent = pick(SITE.role);
    $("affiliation").textContent = pick(SITE.affiliation);

    const emails = SITE.emails && SITE.emails.length ? SITE.emails : [SITE.email];
    $("emails").innerHTML = emails
      .map(e => `<a href="mailto:${e}">${e}</a>`).join("");

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

    $("bio").innerHTML = BIO.map(p => `<p>${pick(p)}</p>`).join("");

    const researchBlock = $("research-block");
    if (researchBlock && typeof RESEARCH_PROJECT !== "undefined" && RESEARCH_PROJECT.title) {
      researchBlock.innerHTML = `
        <h3>${pick(RESEARCH_PROJECT.title)}</h3>
        <p>${pick(RESEARCH_PROJECT.desc)}</p>`;
    }

    $("news-list").innerHTML = NEWS
      .map(n => `<li><span class="news-date">${n.date}</span><span>${pick(n.text)}</span></li>`)
      .join("");

    /* publications */
    const byYear = {};
    [...PUBLICATIONS].sort((a, b) => b.year - a.year).forEach(p => {
      (byYear[p.year] = byYear[p.year] || []).push(p);
    });
    $("pub-note").textContent = PUBLICATIONS.length
      ? pick(UI.pubNote).replace("{n}", PUBLICATIONS.length) : "";

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
      <div class="proj">
        <h3><a href="${(p.links[0] || {}).url || "#"}">${p.name}</a></h3>
        <p>${pick(p.desc)}</p>
        <div class="proj-links">${p.links.map(l =>
          `<a class="badge" href="${l.url}">${pick(l.label)}</a>`).join("")}</div>
      </div>`).join("");

    $("award-list").innerHTML = AWARDS
      .map(a => `<li><span class="when">${a.when}</span><span>${pick(a.text)}</span></li>`).join("");
    $("teaching-list").innerHTML = TEACHING
      .map(t => `<li><span class="when">${t.when}</span><span>${pick(t.text)}</span></li>`).join("");

    /* contact: address, then one row per email, then the rest */
    const label = pick(CONTACT.emailLabel);
    $("contact-block").innerHTML =
      CONTACT.lines.map(l => (pick(l) ? `<p>${pick(l)}</p>` : "")).join("") +
      emails.map((e, i) => `<p>${i === 0 ? label + ": " : ""}<a href="mailto:${e}">${e}</a></p>`).join("") +
      (CONTACT.site ? `<p><a href="${CONTACT.site}">${CONTACT.site.replace(/^https?:\/\//, "")}</a></p>` : "");

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

    document.querySelectorAll(".lang-switch button").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === LANG);
    });
    $("lang-select").setAttribute("aria-label", pick(UI.langLabel));
  }

  /* language switcher */
  const switcher = $("lang-switch");
  switcher.innerHTML = LANGS.map(l => `<button data-lang="${l.code}">${l.label}</button>`).join("");

  /* phones get a native dropdown instead of three pills */
  const langSelect = $("lang-select");
  langSelect.innerHTML = LANGS.map(l => `<option value="${l.code}">${l.label}</option>`).join("");
  langSelect.value = LANG;
  langSelect.addEventListener("change", () => {
    localStorage.setItem("lang", langSelect.value);
    location.reload();
  });
  switcher.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    LANG = btn.dataset.lang;
    localStorage.setItem("lang", LANG);
    /* re-derive names for the new language without a reload */
    location.reload();
  });

  /* theme toggle; ?theme=dark|light deep-links and persists */
  const root = document.documentElement;
  const urlTheme = new URLSearchParams(location.search).get("theme");
  const savedTheme = ["dark", "light"].includes(urlTheme) ? urlTheme
    : localStorage.getItem("theme");
  if (savedTheme === "dark" || (!savedTheme && matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.setAttribute("data-theme", "dark");
  }
  $("theme-toggle").addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === "dark";
    if (dark) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
  });

  render();

})();
