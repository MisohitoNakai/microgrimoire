/* channel-keyboard.js
   31平均律「白鍵3段・黒鍵2段」チャンネル鍵盤図を SVG で描く共有ルーチン。
   配置（左から、0＝中段白鍵の起点＝MIDI No.60。-1=30 は 0 の左）：
     上段白鍵：1,6,11,14,19,24,29／上段黒鍵：3,8,16,21,26
     中段白鍵：0,5,10,13,18,23,28／下段黒鍵：2,7,15,20,25
     下段白鍵：-1(=30),4,9,12,17,22,27
   配色：Reaper 準拠。Ch.1 赤系・Ch.2 黄系・Ch.3 緑系。
*/
window.ChannelKeyboard = (function () {
  "use strict";
  const NS = "http://www.w3.org/2000/svg";
  const norm = x => ((x % 31) + 31) % 31;
  const ROWS = {
    upperWhite: [1, 6, 11, 14, 19, 24, 29],
    upperBlack: [3, 8, 16, 21, 26],
    midWhite: [0, 5, 10, 13, 18, 23, 28],
    lowerBlack: [2, 7, 15, 20, 25],
    lowerWhite: [-1, 4, 9, 12, 17, 22, 27]
  };
  const CH1 = [0, 2, 5, 8, 10, 13, 15, 18, 20, 23, 26, 28];
  const CH2 = [1, 3, 6, 9, 11, 14, 16, 19, 21, 24, 27, 29];
  const CH3 = [-1, 1, 4, 7, 9, 12, 14, 17, 19, 22, 25, 27].map(norm);
  const COL = {
    1: { fill: "#e8564b", edge: "#b32f26", text: "#48100c" },
    2: { fill: "#f2c14e", edge: "#c99320", text: "#4d3a08" },
    3: { fill: "#5cb26a", edge: "#3a8248", text: "#0f3419" },
    0: { fill: "#d7d9e6", edge: "#9a9caa", text: "#33343d" }
  };
  function primaryCh(s) {
    // 9(E半フラット)・27(B半フラット)は Ch.2/Ch.3 の両方に属するが、
    // 下段白鍵として扱う際は Ch.3（緑）が直感的なため表示色は Ch.3 とする
    if (s === 9 || s === 27) return 3;
    return CH1.includes(s) ? 1 : CH2.includes(s) ? 2 : CH3.includes(s) ? 3 : 0;
  }
  function allCh(s) { const a = []; if (CH1.includes(s)) a.push(1); if (CH2.includes(s)) a.push(2); if (CH3.includes(s)) a.push(3); return a; }
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }
  const HS = "\uE282", HF = "\uE280";
  const NAT = { C: 0, D: 5, E: 10, F: 13, G: 18, A: 23, B: 28 };
  const szName = (function () {
    const nm = new Array(31).fill(null);
    Object.entries(NAT).forEach(([L, s]) => { nm[s] = [L, ""]; });
    // 半音変化（±1歩）を先に確定 → 半♯7・半♭7
    [[1, HS], [-1, HF]].forEach(([d, sym]) => {
      Object.entries(NAT).forEach(([L, s]) => {
        const t = norm(s + d); if (!nm[t]) nm[t] = [L, sym];
      });
    });
    // 残りに ♯・♭（±2歩）→ 各5音（E♯・B♯・F♭・C♭ は生じない）
    [[2, "\u266f"], [-2, "\u266d"]].forEach(([d, sym]) => {
      Object.entries(NAT).forEach(([L, s]) => {
        const t = norm(s + d); if (!nm[t]) nm[t] = [L, sym];
      });
    });
    return nm;
  })();
  function render(container, opts) {
    opts = opts || {};
    const onPlay = opts.onPlay || function () {};
    const showNames = opts.showNames !== false;
    const COLW = 34, X0 = 40;
    const colX = pc => X0 + (pc + 1) * COLW;
    const wW = COLW * 1.9, bW = COLW * 1.5;
    const yUpW = 14, hUpW = 78;
    const yMidW = yUpW + 46, hMidW = 84;
    const yLoW = yMidW + 50, hLoW = 78;
    const yUpB = yUpW + 30, hB = 62;
    const yLoB = yMidW + 34;
    const totalW = colX(29) + wW / 2 + 20;
    const totalH = yLoW + hLoW + 34;
    container.innerHTML = "";
    const svg = el("svg", { viewBox: "0 0 " + totalW.toFixed(0) + " " + totalH.toFixed(0), width: "100%" }, container);
    function label(g, step, cx, cyTop, h, col, big) {
      if (!showNames) return;
      const [L, sym] = szName[norm(step)];
      const ty = cyTop + h - 12;
      const t = el("text", { x: cx.toFixed(1), y: ty.toFixed(1), "text-anchor": "middle", "font-size": big ? 12.5 : 11, fill: col.text, "font-weight": 700 }, g);
      t.textContent = L + ((sym === HS || sym === HF) ? "" : sym);
      if (sym === HS || sym === HF) {
        t.setAttribute("x", (cx - 5).toFixed(1));
        el("text", { x: (cx + 6).toFixed(1), y: (ty + 1).toFixed(1), "font-size": big ? 15 : 13, "font-family": "BravuraText, serif", fill: col.text }, g).textContent = sym;
      }
      el("text", { x: cx.toFixed(1), y: (cyTop + 13).toFixed(1), "text-anchor": "middle", "font-size": 9, fill: col.text, "fill-opacity": 0.72 }, g).textContent = norm(step) + "";
    }
    function whiteKey(step, pc, yTop, h) {
      const s = norm(step), c = COL[primaryCh(s)];
      const cx = colX(pc), x1 = cx - wW / 2, x2 = cx + wW / 2, sh = 6;
      const g = el("g", { style: "cursor:pointer" }, svg);
      const pts = [[x1 + sh, yTop], [x2 - sh, yTop], [x2, yTop + sh], [x2, yTop + h - sh], [x2 - sh, yTop + h], [x1 + sh, yTop + h], [x1, yTop + h - sh], [x1, yTop + sh]].map(p => p[0].toFixed(1) + "," + p[1].toFixed(1)).join(" ");
      el("polygon", { points: pts, fill: c.fill, stroke: "#ffffff", "stroke-width": 2, "fill-opacity": 0.9 }, g);
      label(g, s, cx, yTop, h, c, true);
      g.addEventListener("click", () => onPlay(step));
    }
    function blackKey(step, pc, yTop, h) {
      const s = norm(step), c = COL[primaryCh(s)];
      const cx = colX(pc), x = cx - bW / 2;
      const g = el("g", { style: "cursor:pointer" }, svg);
      el("rect", { x: x.toFixed(1), y: yTop.toFixed(1), width: bW.toFixed(1), height: h.toFixed(1), rx: 4, fill: c.fill, stroke: c.edge, "stroke-width": 2 }, g);
      label(g, s, cx, yTop, h, c, false);
      g.addEventListener("click", () => onPlay(step));
    }
    ROWS.lowerWhite.forEach(s => whiteKey(s, s, yLoW, hLoW));
    ROWS.midWhite.forEach(s => whiteKey(s, s, yMidW, hMidW));
    ROWS.upperWhite.forEach(s => whiteKey(s, s, yUpW, hUpW));
    ROWS.lowerBlack.forEach(s => blackKey(s, s, yLoB, hB));
    ROWS.upperBlack.forEach(s => blackKey(s, s, yUpB, hB));
    return { svg, ROWS, CH1, CH2, CH3, primaryCh, allCh, szName, totalW, totalH };
  }
  return { render, ROWS, CH1, CH2, CH3, primaryCh, allCh, COL };
})();
