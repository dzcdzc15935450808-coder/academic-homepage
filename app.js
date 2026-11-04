/* ============================================================
   app.js — 从 data.js 渲染页面。一般不需要修改。
   ============================================================ */

(function () {
  const $ = (id) => document.getElementById(id);

  /* ---- Header / sidebar ---- */
  document.title = `${SITE.name} — Academic Homepage`;
  $("brand-name").textContent = SITE.name;
  $("name").textContent = SITE.name;

  const avatar = $("avatar");
  if (SITE.photo) {
    avatar.style.background = `center/cover no-repeat url("${SITE.photo}")`;
    avatar.textContent = "";
  } else {
    avatar.textContent = SITE.initials || SITE.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }

  $("role").textContent = SITE.role;
  $("affiliation").textContent = SITE.affiliation;
  $("email").innerHTML = `<a href="mailto:${SITE.email}">${SITE.email}</a>`;

  $("links").innerHTML = SITE.links
    .map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`)
    .join("");

  $("interests").innerHTML = `<h3>Research Interests</h3>` +
    SITE.interests.map(i => `<span class="tag">${i}</span>`).join("");

  /* ---- Bio ---- */
  $("bio").innerHTML = BIO.map(p => `<p>${p}</p>`).join("");

  /* ---- News ---- */
  $("news-list").innerHTML = NEWS
    .map(n => `<li><span class="news-date">${n.date}</span><span>${n.text}</span></li>`)
    .join("");

  /* ---- Publications (grouped by year, newest first) ---- */
  const byYear = {};
  [...PUBLICATIONS].sort((a, b) => b.year - a.year).forEach(p => {
    (byYear[p.year] = byYear[p.year] || []).push(p);
  });
  $("pub-note").textContent =
    `(${PUBLICATIONS.length} publications · names are in no particular order)`;

  $("pub-list").innerHTML = Object.keys(byYear).sort((a, b) => b - a).map(year => `
    <div class="pub-year">${year}</div>
    ${byYear[year].map(p => `
      <div class="pub">
        <div class="pub-title"><a href="${(p.links[0] || {}).url || "#"}">${p.title}</a></div>
        <div class="pub-authors">${p.authors.map(a =>
          a === SITE.name ? `<span class="me">${a}</span>` : a).join(", ")}</div>
        <div class="pub-venue">${p.venue}</div>
        <div class="pub-badges">${p.links.map(l =>
          `<a class="badge" href="${l.url}">${l.label}</a>`).join("")}
          ${p.venueHl ? `<span class="badge hl">${p.venue.split("(")[1]?.replace(")", "") || "Top Venue"}</span>` : ""}
        </div>
      </div>`).join("")}
  `).join("");

  /* ---- Projects ---- */
  $("project-list").innerHTML = PROJECTS.map(p => `
    <div class="card">
      <h3><a href="${(p.links[0] || {}).url || "#"}">${p.name}</a></h3>
      <p>${p.desc}</p>
      <div class="card-links">${p.links.map(l =>
        `<a class="badge" href="${l.url}">${l.label}</a>`).join("")}</div>
    </div>`).join("");

  /* ---- Awards & Teaching ---- */
  $("award-list").innerHTML = AWARDS
    .map(a => `<li><span class="when">${a.when}</span>${a.text}</li>`).join("");
  $("teaching-list").innerHTML = TEACHING
    .map(t => `<li><span class="when">${t.when}</span>${t.text}</li>`).join("");

  /* ---- Contact & footer ---- */
  $("contact-block").innerHTML = CONTACT.lines.map(l => `<p>${l}</p>`).join("");
  $("footer").textContent = FOOTER;

  /* ---- Theme toggle (persisted) ---- */
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || (!saved && matchMedia("(prefers-color-scheme: dark)").matches)) {
    root.setAttribute("data-theme", "dark");
  }
  $("theme-toggle").addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === "dark";
    if (dark) root.removeAttribute("data-theme");
    else root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", dark ? "light" : "dark");
  });

  /* ---- Active nav highlight ---- */
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
})();
