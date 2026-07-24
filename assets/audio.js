/* =====================================================
   XenAudio — 共有音声エンジン
   -----------------------------------------------------
   ・標準波形は「放物線波」(のこぎり波の積分)。
     x(t) = t^2 (t ∈ [-π, π)) のフーリエ級数は
       π²/3 + Σ 4(−1)ⁿ cos(nt)/n²
     すなわち倍音振幅が 1/n² で減衰する。のこぎり波(1/n)より
     高次倍音が穏やかで、帯域を削らずに聴感が丸い。
     比較試聴の基準音として採用（体裁協議で決定）。
   ・エンベロープ標準装備（クリックノイズ防止）。
   ・AudioContext はユーザー操作を起点に遅延生成（自動再生
     ポリシー対応）。
   -----------------------------------------------------
   主API:
     XenAudio.playFreq(freq, opts)
     XenAudio.playFreqs([f...], opts)          // 和音
     XenAudio.playSeq([f...], opts)            // 順次
     XenAudio.playPartials(f0, [amp...], opts) // 加算合成
     XenAudio.hold(freq, opts) -> handle       // 持続音
       handle.setFreq(f) / setGain(g) / stop()
     XenAudio.stopAll()
   ヘルパ:
     XenAudio.centsToRatio(c), ratioToCents(r),
     XenAudio.freqFromCents(base, c), noteName(freq)
   ===================================================== */
(function () {
  "use strict";

  const X = {};
  let ctx = null;
  let master = null;
  let parabolicWave = null;
  const held = new Set();

  const NHARM = 64; // 放物線波の倍音数（十分な帯域・軽量）

  function ensureCtx() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
      // 放物線波: cos 項 (real) に (−1)ⁿ/n²。位相は音色に影響しない。
      const real = new Float32Array(NHARM + 1);
      const imag = new Float32Array(NHARM + 1);
      for (let n = 1; n <= NHARM; n++) {
        real[n] = (n % 2 === 0 ? 1 : -1) / (n * n);
      }
      parabolicWave = ctx.createPeriodicWave(real, imag); // 正規化あり
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  function applyWave(osc, wave) {
    if (!wave || wave === "parabolic") osc.setPeriodicWave(parabolicWave);
    else osc.type = wave; // 'sine' | 'sawtooth' | 'square' | 'triangle'
  }

  /* --- 単音（エンベロープ付きワンショット） --- */
  X.playFreq = function (freq, opts) {
    const o = opts || {};
    const c = ensureCtx();
    const t0 = c.currentTime + (o.when || 0);
    const dur = o.dur != null ? o.dur : 0.9;
    const gain = o.gain != null ? o.gain : 0.22;
    const atk = o.attack != null ? o.attack : 0.012;
    const rel = o.release != null ? o.release : 0.12;

    const osc = c.createOscillator();
    applyWave(osc, o.wave);
    osc.frequency.value = freq;

    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(gain, 0.0002), t0 + atk);
    g.gain.setValueAtTime(Math.max(gain, 0.0002), t0 + Math.max(atk, dur - rel));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    osc.connect(g).connect(master);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
    return osc;
  };

  /* --- 和音 --- */
  X.playFreqs = function (freqs, opts) {
    const o = Object.assign({}, opts);
    const n = Math.max(freqs.length, 1);
    if (o.gain == null) o.gain = Math.min(0.22, 0.5 / n); // 声部数で自動減衰
    freqs.forEach(f => X.playFreq(f, o));
  };

  /* --- 順次再生 --- */
  X.playSeq = function (freqs, opts) {
    const o = opts || {};
    const dur = o.dur != null ? o.dur : 0.55;
    const gap = o.gap != null ? o.gap : 0.08;
    freqs.forEach((f, i) => {
      X.playFreq(f, Object.assign({}, o, { when: (o.when || 0) + i * (dur + gap), dur }));
    });
    return freqs.length * (dur + gap); // 全体の長さ（秒）
  };

  /* --- 加算合成（第Ⅰ部倍音列・第Ⅵ部 Sethares 用） --- */
  X.playPartials = function (f0, amps, opts) {
    const o = opts || {};
    const c = ensureCtx();
    const t0 = c.currentTime + (o.when || 0);
    const dur = o.dur != null ? o.dur : 1.6;
    const atk = o.attack != null ? o.attack : 0.015;
    const rel = o.release != null ? o.release : 0.25;

    // 総音量をおおよそ一定に正規化
    let sum = 0;
    amps.forEach(a => { sum += Math.abs(a); });
    const norm = sum > 0 ? (o.gain != null ? o.gain : 0.3) / sum : 0;

    const bus = c.createGain();
    bus.gain.setValueAtTime(0.0001, t0);
    bus.gain.exponentialRampToValueAtTime(1, t0 + atk);
    bus.gain.setValueAtTime(1, t0 + Math.max(atk, dur - rel));
    bus.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    bus.connect(master);

    amps.forEach((a, i) => {
      if (a <= 0) return;
      const f = f0 * (i + 1);
      if (f > c.sampleRate / 2 * 0.9) return;
      const osc = c.createOscillator();
      osc.type = "sine";
      osc.frequency.value = f;
      const g = c.createGain();
      g.gain.value = a * norm;
      osc.connect(g).connect(bus);
      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
    });
  };

  /* --- 持続音（うなり・粗さ探索用） --- */
  X.hold = function (freq, opts) {
    const o = opts || {};
    const c = ensureCtx();
    const t0 = c.currentTime;
    const gain = o.gain != null ? o.gain : 0.16;

    const osc = c.createOscillator();
    applyWave(osc, o.wave);
    osc.frequency.value = freq;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(gain, t0 + 0.03);
    osc.connect(g).connect(master);
    osc.start(t0);

    const handle = {
      setFreq(f, glide) {
        const t = c.currentTime;
        if (glide) osc.frequency.exponentialRampToValueAtTime(Math.max(f, 1), t + glide);
        else osc.frequency.setValueAtTime(f, t);
      },
      setGain(v) {
        g.gain.setTargetAtTime(Math.max(v, 0.0001), c.currentTime, 0.02);
      },
      stop() {
        const t = c.currentTime;
        g.gain.setTargetAtTime(0.0001, t, 0.03);
        osc.stop(t + 0.25);
        held.delete(handle);
      }
    };
    held.add(handle);
    return handle;
  };

  X.stopAll = function () {
    Array.from(held).forEach(h => h.stop());
  };

  /* --- ヘルパ --- */
  X.centsToRatio = c => Math.pow(2, c / 1200);
  X.ratioToCents = r => 1200 * Math.log2(r);
  X.freqFromCents = (base, c) => base * Math.pow(2, c / 1200);

  const NOTE_NAMES = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  // 12edo 基準の参考音名（A4 = 440 Hz）。微分音表記ではなく方位磁針として使う。
  X.noteName = function (freq) {
    if (!(freq > 0)) return "—";
    const n = 69 + 12 * Math.log2(freq / 440); // MIDIノート番号（実数）
    const ni = Math.round(n);
    const cents = Math.round((n - ni) * 100);
    const name = NOTE_NAMES[((ni % 12) + 12) % 12] + (Math.floor(ni / 12) - 1);
    if (cents === 0) return name;
    return name + (cents > 0 ? "+" : "") + cents + "¢";
  };

  // ページ離脱時に持続音を止める
  window.addEventListener("pagehide", () => { try { X.stopAll(); } catch (e) {} });

  window.XenAudio = X;
})();
