/* =====================================================
   微分音のグリモワール — サイト構造データ
   nav.js がこのデータからサイドバー目次・ページ送り・
   相互参照リンクを自動生成。
   ===================================================== */
window.SITE_TOC = [
  {
    id: "intro", num: "序", title: "序章",
    items: [
      { file: "intro.html", title: "本書の使い方", pub: true }
    ]
  },
  {
    id: "p1", num: "Ⅰ", title: "第Ⅰ部 土台：音・周波数・知覚",
    items: [
      { file: "part1-01-sound.html",          title: "1. 音・振動・対数的ピッチ・うなり", pub: true },
      { file: "part1-02-cents.html",          title: "2. セントと比、音程の算術",         pub: true },
      { file: "part1-03-harmonics.html",      title: "3. 倍音列",       pub: true },
      { file: "part1-04-psychoacoustics.html",title: "4. 臨界帯域・粗さ・協和の土台",     pub: true },
      { file: "part1-05-jnd.html",            title: "5. 音高弁別閾（JND）",              pub: true }
    ]
  },
  {
    id: "p2", num: "Ⅱ", title: "第Ⅱ部 純正律とその格子",
    items: [
      { file: "part2-01-ji-limits.html",   title: "1. 純正音程と素数リミット", pub: true },
      { file: "part2-02-lattice.html",     title: "2. 格子・トネッツ",         pub: true },
      { file: "part2-03-syntonic.html",    title: "3. コンマとジレンマ",       pub: true },
      { file: "part2-04-commas.html",      title: "4. そのほかのコンマ",       pub: true },
      { file: "part2-05-fokker.html",      title: "5. Fokker 周期性ブロック",  pub: true }
    ]
  },
  {
    id: "p3", num: "Ⅲ", title: "第Ⅲ部 音律を組み立てる",
    items: [
      { file: "part3-01-tempering.html",  title: "1. テンパリングの発想",              pub: true },
      { file: "part3-02-rtt.html",        title: "2. RTT の言語",   pub: true },
      { file: "part3-03-edo.html",        title: "3. EDO ", pub: true },
      { file: "part3-04-mos.html",        title: "4. MOS 音階",                        pub: true },
      { file: "part3-05-optimization.html",title:"5. チューニングの決定と評価",        pub: true },
      { file: "part3-06-notation.html",   title: "6. 微分音記譜法",            pub: true }
    ]
  },
  {
    id: "p4", num: "Ⅳ", title: "第Ⅳ部 31平均律",
    items: [
      { file: "part4-01-why31.html",     title: "1. なぜ31か",                    pub: true },
      { file: "part4-02-faces.html",     title: "2. 31の多面性",                  pub: true },
      { file: "part4-03-history.html",   title: "3. 歴史", pub: true },
      { file: "part4-04-modern.html",    title: "4. 現代の31平均律",              pub: true },
      { file: "part4-05-keyboard.html",  title: "5. 記譜・音名・鍵盤・指板",      pub: true },
      { file: "part4-06-harmony.html",   title: "6. 西洋音楽の拡張ハーモニー",   pub: true }
    ]
  },
  {
    id: "p5", num: "Ⅴ", title: "第Ⅴ部 音律アトラス",
    items: [
      { file: "part5-01-multiplicity.html", title: "1. 多重性の原理と読み方",       pub: true },
      { file: "part5-02-matrix.html",       title: "2. 相互参照マトリクス", pub: true },
      { file: "part5-03-families.html",     title: "3. 種族ごとの解説",           pub: true },
      { file: "part5-04-spotlights.html",   title: "4. EDO スポットライト",         pub: true },
      { file: "part5-05-small-edos.html",   title: "5. 小 EDO と MOS の両端",       pub: true },
      { file: "part5-06-nonoctave.html",    title: "6. 非オクターブ音律",           pub: true }
    ]
  },
  {
    id: "p6", num: "Ⅵ", title: "第Ⅵ部 響きの科学",
    items: [
      { file: "part6-01-he.html",          title: "1. Harmonic Entropy",              pub: true },
      { file: "part6-02-scale-he.html",    title: "2. 音階の平均 HE と31の極小性",     pub: true },
      { file: "part6-03-timbre.html",      title: "3. 音色 vs 音律",         pub: true },
      { file: "part6-04-delta-rational.html", title: "4. Delta-Rational コードの概説", pub: true },
      { file: "part6-05-virtual-pitch.html",  title: "5. MFと結合音",     pub: true },
      { file: "part6-06-consonance.html",  title: "6. 協和の起源をめぐる論争",         pub: true },
      { file: "part6-07-brain.html",       title: "7. 音楽と脳",                       pub: true }
    ]
  },
  {
    id: "p7", num: "Ⅶ", title: "第Ⅶ部 実践と現場",
    items: [
      { file: "part7-01-scala.html",       title: "1. 調律ファイル",       pub: true },
      { file: "part7-02-midi.html",        title: "2. MIDI・MPE・MTS-ESP・MIDI 2.0", pub: true },
      { file: "part7-03-plugins.html",     title: "3. プラグインと音源",           pub: true },
      { file: "part7-04-instruments.html", title: "4. 楽器",                       pub: true },
      { file: "part7-05-workflow.html",    title: "5. 31edo 制作ワークフロー",           pub: true }
    ]
  },
  {
    id: "apx", num: "付", title: "付録",
    items: [
      { file: "appendix-a-glossary.html",  title: "A. 用語集",                     pub: true },
      { file: "appendix-b-references.html",title: "B. 参照",                       pub: true },
      { file: "appendix-c-tables.html",    title: "C. 早見表・マトリクス・MOS-Tree", pub: true }
    ]
  }
];
