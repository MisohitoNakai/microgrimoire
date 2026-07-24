/* =====================================================
   Fig — SVG 図解の共通ヘルパ
   汎用の座標系つきプロットを生成する。各ページのウィジェット
   スクリプトから利用。依存なし・軽量。
   ===================================================== */
(function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";

  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  /* plot(container, opts)
     opts: { w, h, pad:{l,r,t,b}, x:[min,max], y:[min,max] }
     返り値: { svg, g, X(), Y(), line, path, polyline, text, clear() ... } */
  function plot(container, opts) {
    const o = Object.assign({
      w: 680, h: 300,
      pad: { l: 52, r: 16, t: 14, b: 42 },
      x: [0, 1], y: [0, 1]
    }, opts);
    if (opts && opts.pad) o.pad = Object.assign({ l: 52, r: 16, t: 14, b: 42 }, opts.pad);

    container.innerHTML = "";
    const svg = el("svg", {
      viewBox: `0 0 ${o.w} ${o.h}`,
      width: "100%", role: "img"
    }, container);

    const iw = o.w - o.pad.l - o.pad.r;
    const ih = o.h - o.pad.t - o.pad.b;
    const X = v => o.pad.l + (v - o.x[0]) / (o.x[1] - o.x[0]) * iw;
    const Y = v => o.pad.t + ih - (v - o.y[0]) / (o.y[1] - o.y[0]) * ih;

    const gGrid = el("g", null, svg);
    const gData = el("g", null, svg);
    const gAxis = el("g", null, svg);
    const gAnno = el("g", null, svg);

    const api = {
      svg, X, Y, opts: o,
      gGrid, gData, gAxis, gAnno,

      axisX(ticks, fmt, label) {
        el("line", { x1: o.pad.l, y1: o.pad.t + ih, x2: o.pad.l + iw, y2: o.pad.t + ih,
          stroke: "#1e1f24", "stroke-width": 1 }, gAxis);
        ticks.forEach(t => {
          const x = X(t);
          el("line", { x1: x, y1: o.pad.t + ih, x2: x, y2: o.pad.t + ih + 5,
            stroke: "#1e1f24", "stroke-width": 1 }, gAxis);
          const tx = el("text", { x, y: o.pad.t + ih + 20, "text-anchor": "middle",
            "font-size": 11.5, fill: "#565863" }, gAxis);
          tx.textContent = fmt ? fmt(t) : t;
        });
        if (label) {
          const lx = el("text", { x: o.pad.l + iw / 2, y: o.h - 6,
            "text-anchor": "middle", "font-size": 12, fill: "#565863" }, gAxis);
          lx.textContent = label;
        }
      },

      axisY(ticks, fmt, label) {
        el("line", { x1: o.pad.l, y1: o.pad.t, x2: o.pad.l, y2: o.pad.t + ih,
          stroke: "#1e1f24", "stroke-width": 1 }, gAxis);
        ticks.forEach(t => {
          const y = Y(t);
          el("line", { x1: o.pad.l - 5, y1: y, x2: o.pad.l, y2: y,
            stroke: "#1e1f24", "stroke-width": 1 }, gAxis);
          const tx = el("text", { x: o.pad.l - 9, y: y + 4, "text-anchor": "end",
            "font-size": 11.5, fill: "#565863" }, gAxis);
          tx.textContent = fmt ? fmt(t) : t;
        });
        if (label) {
          const lx = el("text", { x: o.pad.l, y: o.pad.t - 2,
            "text-anchor": "start", "font-size": 12, fill: "#565863" }, gAxis);
          lx.textContent = label;
        }
      },

      vline(xv, attrs) {
        return el("line", Object.assign({
          x1: X(xv), y1: o.pad.t, x2: X(xv), y2: o.pad.t + ih,
          stroke: "#e4e5ea", "stroke-width": 1
        }, attrs || {}), gGrid);
      },

      polyline(points, attrs) {
        const d = points.map((p, i) =>
          (i ? "L" : "M") + X(p[0]).toFixed(2) + " " + Y(p[1]).toFixed(2)).join("");
        return el("path", Object.assign({
          d, fill: "none", stroke: "#3b4a9c", "stroke-width": 2,
          "stroke-linejoin": "round"
        }, attrs || {}), gData);
      },

      dot(xv, yv, attrs) {
        return el("circle", Object.assign({
          cx: X(xv), cy: Y(yv), r: 3.5, fill: "#3b4a9c"
        }, attrs || {}), gAnno);
      },

      label(xv, yv, textStr, attrs) {
        const t = el("text", Object.assign({
          x: X(xv), y: Y(yv), "font-size": 11.5, fill: "#1e1f24",
          "text-anchor": "middle"
        }, attrs || {}), gAnno);
        t.textContent = textStr;
        return t;
      },

      clearData() { gData.innerHTML = ""; },
      clearGrid() { gGrid.innerHTML = ""; },
      clearAnno() { gAnno.innerHTML = ""; }
    };
    return api;
  }

  window.Fig = { el, plot };
})();
