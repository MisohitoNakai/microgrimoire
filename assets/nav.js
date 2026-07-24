/* =====================================================
   nav.js — 目次・ナビゲーションの自動生成
   ===================================================== */
(function () {
  "use strict";

  const here = location.pathname.split("/").pop() || "index.html";

  function flatToc() {
    const flat = [];
    (window.SITE_TOC || []).forEach(part => {
      part.items.forEach(it => flat.push(Object.assign({ part }, it)));
    });
    return flat;
  }

  /* ---------- サイドバー ---------- */
  function buildSidebar() {
    const sb = document.getElementById("sidebar");
    if (!sb || !window.SITE_TOC) return;

    // 用語検索
    const gs = document.createElement("div");
    gs.className = "gsearch";
    gs.innerHTML =
      '<input type="search" placeholder="用語を検索…" aria-label="用語を検索">' +
      '<div class="gsearch-results" role="listbox"></div>';
    sb.appendChild(gs);
    wireSearch(gs);

    window.SITE_TOC.forEach(part => {
      const div = document.createElement("div");
      div.className = "toc-part";
      const t = document.createElement("span");
      t.className = "toc-part-title";
      t.textContent = part.title;
      div.appendChild(t);
      const ul = document.createElement("ul");
      part.items.forEach(it => {
        const li = document.createElement("li");
        if (it.pub) {
          const a = document.createElement("a");
          a.href = it.file;
          a.textContent = it.title;
          if (it.file === here) a.className = "current";
          li.appendChild(a);
        } else {
          const s = document.createElement("span");
          s.className = "toc-unpub";
          s.textContent = it.title;
          li.appendChild(s);
        }
        ul.appendChild(li);
      });
      div.appendChild(ul);
      sb.appendChild(div);
    });

    const cur = sb.querySelector("a.current");
    if (cur) cur.scrollIntoView({ block: "center" });
  }

  /* ---------- 用語検索 ---------- */
  function wireSearch(gs) {
    const input = gs.querySelector("input");
    const box = gs.querySelector(".gsearch-results");
    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      box.innerHTML = "";
      if (!q || !window.GLOSSARY) return;
      const hits = window.GLOSSARY.filter(e =>
        e.t.toLowerCase().includes(q) ||
        (e.en && e.en.toLowerCase().includes(q)) ||
        (e.d && e.d.toLowerCase().includes(q))
      ).slice(0, 8);
      hits.forEach(e => {
        const d = document.createElement("div");
        d.className = "gres";
        const head = document.createElement("div");
        const b = document.createElement("b");
        b.textContent = e.t;
        head.appendChild(b);
        if (e.en) {
          const en = document.createElement("span");
          en.className = "gres-en";
          en.textContent = e.en;
          head.appendChild(en);
        }
        d.appendChild(head);
        const p = document.createElement("p");
        p.textContent = e.d;
        d.appendChild(p);
        if (e.ref) {
          const file = e.ref.split("#")[0];
          const pub = flatToc().some(it => it.file === file && it.pub);
          if (pub) {
            const a = document.createElement("a");
            a.href = e.ref;
            a.textContent = "→ 本文へ";
            d.appendChild(a);
          }
        }
        box.appendChild(d);
      });
    });
    document.addEventListener("click", ev => {
      if (!gs.contains(ev.target)) box.innerHTML = "";
    });
  }

  /* ---------- ハンバーガー ---------- */
  function wireToggle() {
    const btn = document.getElementById("nav-toggle");
    const overlay = document.getElementById("sidebar-overlay");
    if (btn) btn.addEventListener("click", () => document.body.classList.toggle("nav-open"));
    if (overlay) overlay.addEventListener("click", () => document.body.classList.remove("nav-open"));
    document.querySelectorAll("#sidebar a").forEach(a =>
      a.addEventListener("click", () => document.body.classList.remove("nav-open")));
  }

  /* ---------- ページ送り ---------- */
  function buildPager() {
    const pager = document.getElementById("pager");
    if (!pager) return;
    const flat = flatToc().filter(it => it.pub);
    const idx = flat.findIndex(it => it.file === here);
    if (idx < 0) return;
    if (idx > 0) {
      const p = flat[idx - 1];
      const a = document.createElement("a");
      a.href = p.file;
      a.innerHTML = '<span class="pager-dir">← 前の節</span><span class="pager-title"></span>';
      a.querySelector(".pager-title").textContent = p.title;
      pager.appendChild(a);
    }
    if (idx < flat.length - 1) {
      const n = flat[idx + 1];
      const a = document.createElement("a");
      a.className = "pager-next";
      a.href = n.file;
      a.innerHTML = '<span class="pager-dir">次の節 →</span><span class="pager-title"></span>';
      a.querySelector(".pager-title").textContent = n.title;
      pager.appendChild(a);
    }
  }

  /* ---------- 相互参照 ---------- */
  function resolveXrefs() {
    const flat = flatToc();
    document.querySelectorAll(".xref").forEach(sp => {
      const file = sp.getAttribute("data-file");
      const anchor = sp.getAttribute("data-anchor");
      const target = flat.find(it => it.file === file);
      if (target && target.pub) {
        const a = document.createElement("a");
        a.href = file + (anchor ? "#" + anchor : "");
        a.innerHTML = sp.innerHTML;
        sp.replaceWith(a);
      } else {
        sp.classList.add("xref-pending");
        if (target) sp.title = target.part.title + "／" + target.title + "（準備中）";
      }
    });
  }

  /* ---------- 見出しアンカー ---------- */
  function headingAnchors() {
    let n = 0;
    document.querySelectorAll(".content h2, .content h3").forEach(h => {
      if (!h.id) h.id = "h-" + (++n);
      const a = document.createElement("a");
      a.className = "hanchor";
      a.href = "#" + h.id;
      a.textContent = "¶";
      a.setAttribute("aria-label", "この見出しへのリンク");
      h.appendChild(a);
    });
  }

  /* ---------- index 用フル目次 ---------- */
  function buildFullToc() {
    const root = document.getElementById("full-toc");
    if (!root || !window.SITE_TOC) return;
    window.SITE_TOC.forEach(part => {
      const div = document.createElement("div");
      div.className = "ftoc-part";
      const h = document.createElement("h3");
      h.textContent = part.title;
      div.appendChild(h);
      const ul = document.createElement("ul");
      part.items.forEach(it => {
        const li = document.createElement("li");
        if (it.pub) {
          const a = document.createElement("a");
          a.href = it.file;
          a.textContent = it.title;
          li.appendChild(a);
        } else {
          const s = document.createElement("span");
          s.className = "toc-unpub";
          s.textContent = it.title;
          li.appendChild(s);
        }
        ul.appendChild(li);
      });
      div.appendChild(ul);
      root.appendChild(div);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildSidebar();
    wireToggle();
    buildPager();
    resolveXrefs();
    headingAnchors();
    buildFullToc();
  });
})();
