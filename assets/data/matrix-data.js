/* 律射×EDO 相互参照マトリクス（自動生成）
   Xen wiki "Tour of regular temperaments" のコンマ定義に基づき、
   patent val による支持判定・pure-octave POTE generator・★○△評価・contorted 検出を機械計算。
   EDO は 5〜100 を総覧。cell: {gs:generatorステップ数, gc:generator(¢), err:POTEとの差(¢), mark:★≤1/○≤5/△, cont:contorted}
   supportOnly の律（rank-3 や tritave 周期）は cell:{sup:true} のみ。*/
window.MATRIX = {
  edos: [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],
  fams: {
    meantone: { jp:"ミーントーン", g:"種族", pote:503.761, period:1200, perDiv:1, primes:[2,3,5], c:"81/80",
      cells: {5:{gs:2,gc:480,err:-23.8,mark:"△"}, 7:{gs:3,gc:514.3,err:10.5,mark:"△"}, 12:{gs:5,gc:500,err:-3.8,mark:"○"}, 19:{gs:8,gc:505.3,err:1.5,mark:"○"}, 24:{gs:10,gc:500,err:-3.8,mark:"○",cont:1}, 26:{gs:11,gc:507.7,err:3.9,mark:"○"}, 31:{gs:13,gc:503.2,err:-0.5,mark:"★"}, 36:{gs:15,gc:500,err:-3.8,mark:"○",cont:1}, 38:{gs:16,gc:505.3,err:1.5,mark:"○",cont:1}, 43:{gs:18,gc:502.3,err:-1.4,mark:"○"}, 45:{gs:19,gc:506.7,err:2.9,mark:"○"}, 50:{gs:21,gc:504,err:0.2,mark:"★"}, 55:{gs:23,gc:501.8,err:-1.9,mark:"○"}, 57:{gs:24,gc:505.3,err:1.5,mark:"○",cont:1}, 62:{gs:26,gc:503.2,err:-0.5,mark:"★",cont:1}, 67:{gs:28,gc:501.5,err:-2.3,mark:"○"}, 69:{gs:29,gc:504.3,err:0.6,mark:"★"}, 74:{gs:31,gc:502.7,err:-1.1,mark:"○"}, 76:{gs:32,gc:505.3,err:1.5,mark:"○",cont:1}, 81:{gs:34,gc:503.7,err:-0.1,mark:"★"}, 86:{gs:36,gc:502.3,err:-1.4,mark:"○",cont:1}, 88:{gs:37,gc:504.5,err:0.8,mark:"★"}, 93:{gs:39,gc:503.2,err:-0.5,mark:"★",cont:1}, 98:{gs:41,gc:502,err:-1.7,mark:"○"}, 100:{gs:42,gc:504,err:0.2,mark:"★",cont:1}}
    },
    schismatic: { jp:"Schismatic", g:"種族", pote:498.264, period:1200, perDiv:1, primes:[2,3,5], c:"32805/32768",
      cells: {12:{gs:5,gc:500,err:1.7,mark:"○"}, 17:{gs:7,gc:494.1,err:-4.1,mark:"○"}, 24:{gs:10,gc:500,err:1.7,mark:"○",cont:1}, 29:{gs:12,gc:496.6,err:-1.7,mark:"○"}, 36:{gs:15,gc:500,err:1.7,mark:"○",cont:1}, 41:{gs:17,gc:497.6,err:-0.7,mark:"★"}, 53:{gs:22,gc:498.1,err:-0.2,mark:"★"}, 65:{gs:27,gc:498.5,err:0.2,mark:"★"}, 77:{gs:32,gc:498.7,err:0.4,mark:"★"}, 82:{gs:34,gc:497.6,err:-0.7,mark:"★",cont:1}, 89:{gs:37,gc:498.9,err:0.6,mark:"★"}, 94:{gs:39,gc:497.9,err:-0.4,mark:"★"}}
    },
    mavila: { jp:"Mavila", g:"種族", pote:520.194, period:1200, perDiv:1, primes:[2,3,5], c:"135/128",
      cells: {7:{gs:3,gc:514.3,err:-5.9,mark:"△"}, 9:{gs:4,gc:533.3,err:13.1,mark:"△"}, 11:{gs:5,gc:545.5,err:25.3,mark:"△"}, 16:{gs:7,gc:525,err:4.8,mark:"○"}, 23:{gs:10,gc:521.7,err:1.5,mark:"○"}}
    },
    porcupine: { jp:"Porcupine", g:"種族", pote:163.95, period:1200, perDiv:1, primes:[2,3,5], c:"250/243",
      cells: {7:{gs:1,gc:171.4,err:7.5,mark:"△"}, 8:{gs:1,gc:150,err:-14,mark:"△"}, 15:{gs:2,gc:160,err:-4,mark:"○"}, 22:{gs:3,gc:163.6,err:-0.3,mark:"★"}, 29:{gs:4,gc:165.5,err:1.6,mark:"○"}, 30:{gs:4,gc:160,err:-4,mark:"○",cont:1}, 37:{gs:5,gc:162.2,err:-1.8,mark:"○"}, 44:{gs:6,gc:163.6,err:-0.3,mark:"★",cont:1}, 51:{gs:7,gc:164.7,err:0.8,mark:"★"}, 59:{gs:8,gc:162.7,err:-1.2,mark:"○"}, 66:{gs:9,gc:163.6,err:-0.3,mark:"★",cont:1}}
    },
    negri: { jp:"Negri", g:"種族", pote:125.755, period:1200, perDiv:1, primes:[2,3,5], c:"16875/16384",
      cells: {9:{gs:1,gc:133.3,err:7.6,mark:"△"}, 10:{gs:1,gc:120,err:-5.8,mark:"△"}, 19:{gs:2,gc:126.3,err:0.6,mark:"★"}, 20:{gs:2,gc:120,err:-5.8,mark:"△",cont:1}, 28:{gs:3,gc:128.6,err:2.8,mark:"○"}, 29:{gs:3,gc:124.1,err:-1.6,mark:"○"}, 38:{gs:4,gc:126.3,err:0.6,mark:"★",cont:1}, 47:{gs:5,gc:127.7,err:1.9,mark:"○"}, 48:{gs:5,gc:125,err:-0.8,mark:"★"}, 57:{gs:6,gc:126.3,err:0.6,mark:"★",cont:1}, 76:{gs:8,gc:126.3,err:0.6,mark:"★",cont:1}}
    },
    tetracot: { jp:"Tetracot", g:"種族", pote:176.16, period:1200, perDiv:1, primes:[2,3,5], c:"20000/19683",
      cells: {7:{gs:1,gc:171.4,err:-4.7,mark:"○"}, 27:{gs:4,gc:177.8,err:1.6,mark:"○"}, 34:{gs:5,gc:176.5,err:0.3,mark:"★"}, 41:{gs:6,gc:175.6,err:-0.6,mark:"★"}, 48:{gs:7,gc:175,err:-1.2,mark:"○"}, 61:{gs:9,gc:177,err:0.9,mark:"★"}, 68:{gs:10,gc:176.5,err:0.3,mark:"★",cont:1}, 75:{gs:11,gc:176,err:-0.2,mark:"★"}, 82:{gs:12,gc:175.6,err:-0.6,mark:"★",cont:1}, 95:{gs:14,gc:176.8,err:0.7,mark:"★"}}
    },
    magic: { jp:"Magic", g:"種族", pote:380.058, period:1200, perDiv:1, primes:[2,3,5], c:"3125/3072",
      cells: {6:{gs:2,gc:400,err:19.9,mark:"△",cont:1}, 16:{gs:5,gc:375,err:-5.1,mark:"△"}, 19:{gs:6,gc:378.9,err:-1.1,mark:"○"}, 22:{gs:7,gc:381.8,err:1.8,mark:"○"}, 25:{gs:8,gc:384,err:3.9,mark:"○"}, 35:{gs:11,gc:377.1,err:-2.9,mark:"○"}, 38:{gs:12,gc:378.9,err:-1.1,mark:"○",cont:1}, 41:{gs:13,gc:380.5,err:0.4,mark:"★"}, 44:{gs:14,gc:381.8,err:1.8,mark:"○",cont:1}, 57:{gs:18,gc:378.9,err:-1.1,mark:"○",cont:1}, 60:{gs:19,gc:380,err:-0.1,mark:"★"}, 63:{gs:20,gc:381,err:0.9,mark:"★"}, 66:{gs:21,gc:381.8,err:1.8,mark:"○",cont:1}, 76:{gs:24,gc:378.9,err:-1.1,mark:"○",cont:1}, 79:{gs:25,gc:379.7,err:-0.3,mark:"★"}, 82:{gs:26,gc:380.5,err:0.4,mark:"★",cont:1}, 85:{gs:27,gc:381.2,err:1.1,mark:"○"}}
    },
    hanson: { jp:"Kleismic", g:"種族", pote:317.007, period:1200, perDiv:1, primes:[2,3,5], c:"15625/15552",
      cells: {15:{gs:4,gc:320,err:3,mark:"○"}, 19:{gs:5,gc:315.8,err:-1.2,mark:"○"}, 23:{gs:6,gc:313,err:-4,mark:"○"}, 30:{gs:8,gc:320,err:3,mark:"○",cont:1}, 34:{gs:9,gc:317.6,err:0.6,mark:"★"}, 38:{gs:10,gc:315.8,err:-1.2,mark:"○",cont:1}, 49:{gs:13,gc:318.4,err:1.4,mark:"○"}, 53:{gs:14,gc:317,err:0,mark:"★"}, 57:{gs:15,gc:315.8,err:-1.2,mark:"○",cont:1}, 68:{gs:18,gc:317.6,err:0.6,mark:"★",cont:1}, 72:{gs:19,gc:316.7,err:-0.3,mark:"★"}, 76:{gs:20,gc:315.8,err:-1.2,mark:"○",cont:1}, 83:{gs:22,gc:318.1,err:1.1,mark:"○"}, 87:{gs:23,gc:317.2,err:0.2,mark:"★"}, 91:{gs:24,gc:316.5,err:-0.5,mark:"★"}}
    },
    orson: { jp:"Orson", g:"種族", pote:271.627, period:1200, perDiv:1, primes:[2,3,5], c:"2109375/2097152",
      cells: {9:{gs:2,gc:266.7,err:-5,mark:"○"}, 13:{gs:3,gc:276.9,err:5.3,mark:"△"}, 22:{gs:5,gc:272.7,err:1.1,mark:"○"}, 31:{gs:7,gc:271,err:-0.7,mark:"★"}, 40:{gs:9,gc:270,err:-1.6,mark:"○"}, 44:{gs:10,gc:272.7,err:1.1,mark:"○",cont:1}, 53:{gs:12,gc:271.7,err:0.1,mark:"★"}, 62:{gs:14,gc:271,err:-0.7,mark:"★",cont:1}, 66:{gs:15,gc:272.7,err:1.1,mark:"○",cont:1}, 75:{gs:17,gc:272,err:0.4,mark:"★"}, 84:{gs:19,gc:271.4,err:-0.2,mark:"★"}, 93:{gs:21,gc:271,err:-0.7,mark:"★",cont:1}, 97:{gs:22,gc:272.2,err:0.5,mark:"★"}}
    },
    wurschmidt: { jp:"Würschmidt", g:"種族", pote:387.799, period:1200, perDiv:1, primes:[2,3,5], c:"393216/390625",
      cells: {6:{gs:2,gc:400,err:12.2,mark:"△",cont:1}, 28:{gs:9,gc:385.7,err:-2.1,mark:"○"}, 31:{gs:10,gc:387.1,err:-0.7,mark:"★"}, 34:{gs:11,gc:388.2,err:0.4,mark:"★"}, 37:{gs:12,gc:389.2,err:1.4,mark:"○"}, 62:{gs:20,gc:387.1,err:-0.7,mark:"★",cont:1}, 65:{gs:21,gc:387.7,err:-0.1,mark:"★"}, 68:{gs:22,gc:388.2,err:0.4,mark:"★",cont:1}, 71:{gs:23,gc:388.7,err:0.9,mark:"★"}, 93:{gs:30,gc:387.1,err:-0.7,mark:"★",cont:1}, 96:{gs:31,gc:387.5,err:-0.3,mark:"★"}, 99:{gs:32,gc:387.9,err:0.1,mark:"★"}}
    },
    amity: { jp:"Amity", g:"種族", pote:339.519, period:1200, perDiv:1, primes:[2,3,5], c:"1600000/1594323",
      cells: {7:{gs:2,gc:342.9,err:3.3,mark:"○"}, 39:{gs:11,gc:338.5,err:-1.1,mark:"○"}, 46:{gs:13,gc:339.1,err:-0.4,mark:"★"}, 53:{gs:15,gc:339.6,err:0.1,mark:"★"}, 60:{gs:17,gc:340,err:0.5,mark:"★"}, 92:{gs:26,gc:339.1,err:-0.4,mark:"★",cont:1}, 99:{gs:28,gc:339.4,err:-0.1,mark:"★"}}
    },
    dicot: { jp:"Dicot", g:"種族", pote:348.594, period:1200, perDiv:1, primes:[2,3,5], c:"25/24",
      cells: {6:{gs:2,gc:400,err:51.4,mark:"△",cont:1}, 7:{gs:2,gc:342.9,err:-5.7,mark:"△"}, 10:{gs:3,gc:360,err:11.4,mark:"△"}, 13:{gs:4,gc:369.2,err:20.6,mark:"△"}, 17:{gs:5,gc:352.9,err:4.3,mark:"○"}, 20:{gs:6,gc:360,err:11.4,mark:"△",cont:1}}
    },
    augmented: { jp:"Augmented", g:"種族", pote:93.362, period:400, perDiv:3, primes:[2,3,5], c:"128/125",
      cells: {6:{gs:0,gc:0,err:-93.4,mark:"△",cont:1}, 9:{gs:1,gc:133.3,err:40,mark:"△"}, 12:{gs:1,gc:100,err:6.6,mark:"△"}, 15:{gs:1,gc:80,err:-13.4,mark:"△"}, 18:{gs:1,gc:66.7,err:-26.7,mark:"△"}, 21:{gs:2,gc:114.3,err:20.9,mark:"△"}, 24:{gs:2,gc:100,err:6.6,mark:"△",cont:1}, 27:{gs:2,gc:88.9,err:-4.5,mark:"○"}, 30:{gs:2,gc:80,err:-13.4,mark:"△",cont:1}, 33:{gs:3,gc:109.1,err:15.7,mark:"△"}, 36:{gs:3,gc:100,err:6.6,mark:"△",cont:1}, 39:{gs:3,gc:92.3,err:-1.1,mark:"○"}, 42:{gs:3,gc:85.7,err:-7.6,mark:"△"}}
    },
    diminished5: { jp:"Diminished (5-lim)", g:"種族", pote:99.507, period:300, perDiv:4, primes:[2,3,5], c:"648/625",
      cells: {8:{gs:1,gc:150,err:50.5,mark:"△"}, 12:{gs:1,gc:100,err:0.5,mark:"★"}, 16:{gs:1,gc:75,err:-24.5,mark:"△"}, 24:{gs:2,gc:100,err:0.5,mark:"★",cont:1}, 28:{gs:2,gc:85.7,err:-13.8,mark:"△"}, 36:{gs:3,gc:100,err:0.5,mark:"★",cont:1}, 40:{gs:3,gc:90,err:-9.5,mark:"△"}, 52:{gs:4,gc:92.3,err:-7.2,mark:"△"}, 64:{gs:5,gc:93.8,err:-5.8,mark:"△"}}
    },
    blackwood: { jp:"Blackwood", g:"種族", pote:80.406, period:240, perDiv:5, primes:[2,3,5], c:"256/243",
      cells: {5:{gs:0,gc:0,err:-80.4,mark:"△"}, 10:{gs:1,gc:120,err:39.6,mark:"△"}, 15:{gs:1,gc:80,err:-0.4,mark:"★"}, 20:{gs:2,gc:120,err:39.6,mark:"△",cont:1}, 25:{gs:2,gc:96,err:15.6,mark:"△"}, 30:{gs:2,gc:80,err:-0.4,mark:"★",cont:1}}
    },
    diaschismic: { jp:"Diaschismic", g:"種族", pote:104.898, period:600, perDiv:2, primes:[2,3,5], c:"2048/2025",
      cells: {10:{gs:1,gc:120,err:15.1,mark:"△"}, 12:{gs:1,gc:100,err:-4.9,mark:"○"}, 14:{gs:1,gc:85.7,err:-19.2,mark:"△"}, 20:{gs:2,gc:120,err:15.1,mark:"△",cont:1}, 22:{gs:2,gc:109.1,err:4.2,mark:"○"}, 24:{gs:2,gc:100,err:-4.9,mark:"○",cont:1}, 32:{gs:3,gc:112.5,err:7.6,mark:"△"}, 34:{gs:3,gc:105.9,err:1,mark:"★"}, 36:{gs:3,gc:100,err:-4.9,mark:"○",cont:1}, 44:{gs:4,gc:109.1,err:4.2,mark:"○",cont:1}, 46:{gs:4,gc:104.3,err:-0.6,mark:"★"}, 54:{gs:5,gc:111.1,err:6.2,mark:"△"}, 56:{gs:5,gc:107.1,err:2.2,mark:"○"}, 58:{gs:5,gc:103.4,err:-1.4,mark:"○"}, 66:{gs:6,gc:109.1,err:4.2,mark:"○",cont:1}, 68:{gs:6,gc:105.9,err:1,mark:"★",cont:1}, 70:{gs:6,gc:102.9,err:-2,mark:"○"}, 78:{gs:7,gc:107.7,err:2.8,mark:"○"}, 80:{gs:7,gc:105,err:0.1,mark:"★"}, 90:{gs:8,gc:106.7,err:1.8,mark:"○"}, 92:{gs:8,gc:104.3,err:-0.6,mark:"★",cont:1}}
    },
    immunity: { jp:"Immunity", g:"種族", pote:247.07, period:1200, perDiv:1, primes:[2,3,5], c:"1638400/1594323",
      cells: {5:{gs:1,gc:240,err:-7.1,mark:"△"}, 29:{gs:6,gc:248.3,err:1.2,mark:"○"}, 34:{gs:7,gc:247.1,err:0,mark:"★"}, 39:{gs:8,gc:246.2,err:-0.9,mark:"★"}, 63:{gs:13,gc:247.6,err:0.5,mark:"★"}, 68:{gs:14,gc:247.1,err:0,mark:"★",cont:1}, 73:{gs:15,gc:246.6,err:-0.5,mark:"★"}, 97:{gs:20,gc:247.4,err:0.4,mark:"★"}}
    },
    srutal: { jp:"Srutal", g:"種族", pote:107.048, period:600, perDiv:2, primes:[2,3,5,7], c:"2048/2025・50/49",
      cells: {10:{gs:1,gc:120,err:13,mark:"△"}, 12:{gs:1,gc:100,err:-7,mark:"△"}, 20:{gs:2,gc:120,err:13,mark:"△",cont:1}, 22:{gs:2,gc:109.1,err:2,mark:"○"}, 32:{gs:3,gc:112.5,err:5.5,mark:"△"}, 44:{gs:4,gc:109.1,err:2,mark:"○",cont:1}, 54:{gs:5,gc:111.1,err:4.1,mark:"○"}}
    },
    flattone: { jp:"Flattone", g:"種族", pote:506.221, period:1200, perDiv:1, primes:[2,3,5,7], c:"81/80・525/512",
      cells: {7:{gs:3,gc:514.3,err:8.1,mark:"△"}, 19:{gs:8,gc:505.3,err:-1,mark:"★"}, 26:{gs:11,gc:507.7,err:1.5,mark:"○"}, 45:{gs:19,gc:506.7,err:0.4,mark:"★"}}
    },
    archy: { jp:"Archytas 連盟", g:"連盟", pote:490.679, period:1200, perDiv:1, primes:[2,3,7], c:"64/63",
      cells: {5:{gs:2,gc:480,err:-10.7,mark:"△"}, 7:{gs:3,gc:514.3,err:23.6,mark:"△"}, 8:{gs:3,gc:450,err:-40.7,mark:"△"}, 10:{gs:4,gc:480,err:-10.7,mark:"△",cont:1}, 12:{gs:5,gc:500,err:9.3,mark:"△"}, 13:{gs:5,gc:461.5,err:-29.1,mark:"△"}, 15:{gs:6,gc:480,err:-10.7,mark:"△",cont:1}, 17:{gs:7,gc:494.1,err:3.4,mark:"○"}, 20:{gs:8,gc:480,err:-10.7,mark:"△",cont:1}, 22:{gs:9,gc:490.9,err:0.2,mark:"★"}, 25:{gs:10,gc:480,err:-10.7,mark:"△",cont:1}, 27:{gs:11,gc:488.9,err:-1.8,mark:"○"}, 30:{gs:12,gc:480,err:-10.7,mark:"△",cont:1}, 32:{gs:13,gc:487.5,err:-3.2,mark:"○"}, 37:{gs:15,gc:486.5,err:-4.2,mark:"○"}, 42:{gs:17,gc:485.7,err:-5,mark:"○"}, 44:{gs:18,gc:490.9,err:0.2,mark:"★",cont:1}, 49:{gs:20,gc:489.8,err:-0.9,mark:"★"}, 54:{gs:22,gc:488.9,err:-1.8,mark:"○",cont:1}, 59:{gs:24,gc:488.1,err:-2.5,mark:"○"}}
    },
    semaphore: { jp:"Semaphoresmic 連盟", g:"連盟", pote:250.385, period:1200, perDiv:1, primes:[2,3,7], c:"49/48",
      cells: {5:{gs:1,gc:240,err:-10.4,mark:"△"}, 6:{gs:1,gc:200,err:-50.4,mark:"△"}, 9:{gs:2,gc:266.7,err:16.3,mark:"△"}, 10:{gs:2,gc:240,err:-10.4,mark:"△",cont:1}, 14:{gs:3,gc:257.1,err:6.8,mark:"△"}, 15:{gs:3,gc:240,err:-10.4,mark:"△",cont:1}, 19:{gs:4,gc:252.6,err:2.2,mark:"○"}, 20:{gs:4,gc:240,err:-10.4,mark:"△",cont:1}, 24:{gs:5,gc:250,err:-0.4,mark:"★"}, 25:{gs:5,gc:240,err:-10.4,mark:"△",cont:1}, 29:{gs:6,gc:248.3,err:-2.1,mark:"○"}, 30:{gs:6,gc:240,err:-10.4,mark:"△",cont:1}, 34:{gs:7,gc:247.1,err:-3.3,mark:"○"}, 39:{gs:8,gc:246.2,err:-4.2,mark:"○"}}
    },
    slendric: { jp:"Gamelismic 連盟", g:"連盟", pote:233.688, period:1200, perDiv:1, primes:[2,3,7], c:"1029/1024",
      cells: {5:{gs:1,gc:240,err:6.3,mark:"△"}, 10:{gs:2,gc:240,err:6.3,mark:"△",cont:1}, 11:{gs:2,gc:218.2,err:-15.5,mark:"△"}, 15:{gs:3,gc:240,err:6.3,mark:"△",cont:1}, 16:{gs:3,gc:225,err:-8.7,mark:"△"}, 20:{gs:4,gc:240,err:6.3,mark:"△",cont:1}, 21:{gs:4,gc:228.6,err:-5.1,mark:"△"}, 25:{gs:5,gc:240,err:6.3,mark:"△",cont:1}, 26:{gs:5,gc:230.8,err:-2.9,mark:"○"}, 30:{gs:6,gc:240,err:6.3,mark:"△",cont:1}, 31:{gs:6,gc:232.3,err:-1.4,mark:"○"}, 36:{gs:7,gc:233.3,err:-0.4,mark:"★"}, 41:{gs:8,gc:234.1,err:0.5,mark:"★"}, 46:{gs:9,gc:234.8,err:1.1,mark:"○"}, 47:{gs:9,gc:229.8,err:-3.9,mark:"○"}, 51:{gs:10,gc:235.3,err:1.6,mark:"○"}, 52:{gs:10,gc:230.8,err:-2.9,mark:"○",cont:1}, 56:{gs:11,gc:235.7,err:2,mark:"○"}, 57:{gs:11,gc:231.6,err:-2.1,mark:"○"}, 61:{gs:12,gc:236.1,err:2.4,mark:"○"}, 62:{gs:12,gc:232.3,err:-1.4,mark:"○",cont:1}, 66:{gs:13,gc:236.4,err:2.7,mark:"○"}, 67:{gs:13,gc:232.8,err:-0.9,mark:"★"}, 71:{gs:14,gc:236.6,err:2.9,mark:"○"}, 72:{gs:14,gc:233.3,err:-0.4,mark:"★",cont:1}, 77:{gs:15,gc:233.8,err:0.1,mark:"★"}, 82:{gs:16,gc:234.1,err:0.5,mark:"★",cont:1}, 87:{gs:17,gc:234.5,err:0.8,mark:"★"}, 88:{gs:17,gc:231.8,err:-1.9,mark:"○"}, 92:{gs:18,gc:234.8,err:1.1,mark:"○",cont:1}, 93:{gs:18,gc:232.3,err:-1.4,mark:"○",cont:1}, 97:{gs:19,gc:235.1,err:1.4,mark:"○"}, 98:{gs:19,gc:232.7,err:-1,mark:"○"}}
    },
    rastmic: { jp:"Rastmic 連盟", g:"連盟", pote:350.525, period:1200, perDiv:1, primes:[2,3,11], c:"243/242",
      cells: {7:{gs:2,gc:342.9,err:-7.7,mark:"△"}, 10:{gs:3,gc:360,err:9.5,mark:"△"}, 14:{gs:4,gc:342.9,err:-7.7,mark:"△",cont:1}, 17:{gs:5,gc:352.9,err:2.4,mark:"○"}, 24:{gs:7,gc:350,err:-0.5,mark:"★"}, 31:{gs:9,gc:348.4,err:-2.1,mark:"○"}, 34:{gs:10,gc:352.9,err:2.4,mark:"○",cont:1}, 38:{gs:11,gc:347.4,err:-3.2,mark:"○"}, 41:{gs:12,gc:351.2,err:0.7,mark:"★"}, 48:{gs:14,gc:350,err:-0.5,mark:"★",cont:1}, 55:{gs:16,gc:349.1,err:-1.4,mark:"○"}, 58:{gs:17,gc:351.7,err:1.2,mark:"○"}, 62:{gs:18,gc:348.4,err:-2.1,mark:"○",cont:1}, 65:{gs:19,gc:350.8,err:0.2,mark:"★"}, 72:{gs:21,gc:350,err:-0.5,mark:"★",cont:1}, 79:{gs:23,gc:349.4,err:-1.2,mark:"○"}, 82:{gs:24,gc:351.2,err:0.7,mark:"★",cont:1}, 89:{gs:26,gc:350.6,err:0,mark:"★"}, 96:{gs:28,gc:350,err:-0.5,mark:"★",cont:1}}
    },
    sensamagic: { jp:"Sensamagic 連盟", g:"連盟", supportOnly:true, primes:[3,5,7], c:"245/243", equave:3,
      cells: {5:{sup:1}, 8:{sup:1}, 9:{sup:1}, 12:{sup:1}, 13:{sup:1}, 17:{sup:1}, 18:{sup:1}, 21:{sup:1}, 22:{sup:1}, 25:{sup:1}, 26:{sup:1}, 30:{sup:1}, 31:{sup:1}, 34:{sup:1}, 35:{sup:1}, 38:{sup:1}, 39:{sup:1}, 42:{sup:1}, 43:{sup:1}, 44:{sup:1}, 47:{sup:1}, 48:{sup:1}, 51:{sup:1}, 52:{sup:1}, 55:{sup:1}, 56:{sup:1}, 60:{sup:1}, 61:{sup:1}, 64:{sup:1}, 65:{sup:1}, 68:{sup:1}, 69:{sup:1}, 73:{sup:1}, 74:{sup:1}, 77:{sup:1}, 78:{sup:1}, 81:{sup:1}, 82:{sup:1}, 86:{sup:1}, 87:{sup:1}, 90:{sup:1}, 91:{sup:1}, 94:{sup:1}, 95:{sup:1}, 99:{sup:1}, 100:{sup:1}}
    },
    gariboh: { jp:"Gariboh 連盟", g:"連盟", supportOnly:true, primes:[3,5,7], c:"3125/3087", equave:3,
      cells: {6:{sup:1}, 7:{sup:1}, 13:{sup:1}, 19:{sup:1}, 20:{sup:1}, 26:{sup:1}, 32:{sup:1}, 33:{sup:1}, 39:{sup:1}, 45:{sup:1}, 46:{sup:1}, 52:{sup:1}, 58:{sup:1}, 65:{sup:1}, 71:{sup:1}, 78:{sup:1}, 84:{sup:1}, 91:{sup:1}, 97:{sup:1}}
    },
    septimal_meantone: { jp:"septimal ミーントーン", g:"種族", pote:503.505, period:1200, perDiv:1, primes:[2,3,5,7], c:"81/80・126/125",
      cells: {12:{gs:5,gc:500,err:-3.5,mark:"○"}, 19:{gs:8,gc:505.3,err:1.8,mark:"○"}, 31:{gs:13,gc:503.2,err:-0.3,mark:"★"}, 43:{gs:18,gc:502.3,err:-1.2,mark:"○"}, 50:{gs:21,gc:504,err:0.5,mark:"★"}, 62:{gs:26,gc:503.2,err:-0.3,mark:"★",cont:1}, 74:{gs:31,gc:502.7,err:-0.8,mark:"★"}, 81:{gs:34,gc:503.7,err:0.2,mark:"★"}, 93:{gs:39,gc:503.2,err:-0.3,mark:"★",cont:1}}
    },
    superpyth: { jp:"Superpyth", g:"連盟拡張", pote:489.709, period:1200, perDiv:1, primes:[2,3,5,7], c:"64/63・245/243",
      cells: {5:{gs:2,gc:480,err:-9.7,mark:"△"}, 17:{gs:7,gc:494.1,err:4.4,mark:"○"}, 22:{gs:9,gc:490.9,err:1.2,mark:"○"}, 27:{gs:11,gc:488.9,err:-0.8,mark:"★"}, 44:{gs:18,gc:490.9,err:1.2,mark:"○",cont:1}, 49:{gs:20,gc:489.8,err:0.1,mark:"★"}}
    },
    godzilla: { jp:"Godzilla", g:"連盟拡張", pote:252.635, period:1200, perDiv:1, primes:[2,3,5,7], c:"49/48・81/80",
      cells: {5:{gs:1,gc:240,err:-12.6,mark:"△"}, 19:{gs:4,gc:252.6,err:0,mark:"★"}, 24:{gs:5,gc:250,err:-2.6,mark:"○"}}
    },
    mothra: { jp:"Mothra", g:"連盟拡張", pote:232.193, period:1200, perDiv:1, primes:[2,3,5,7], c:"1029/1024・81/80",
      cells: {5:{gs:1,gc:240,err:7.8,mark:"△"}, 26:{gs:5,gc:230.8,err:-1.4,mark:"○"}, 31:{gs:6,gc:232.3,err:0.1,mark:"★"}, 36:{gs:7,gc:233.3,err:1.1,mark:"○"}, 57:{gs:11,gc:231.6,err:-0.6,mark:"★"}, 62:{gs:12,gc:232.3,err:0.1,mark:"★",cont:1}, 67:{gs:13,gc:232.8,err:0.6,mark:"★"}, 88:{gs:17,gc:231.8,err:-0.4,mark:"★"}, 93:{gs:18,gc:232.3,err:0.1,mark:"★",cont:1}, 98:{gs:19,gc:232.7,err:0.5,mark:"★"}}
    },
    miracle: { jp:"Miracle", g:"連盟拡張", pote:116.675, period:1200, perDiv:1, primes:[2,3,5,7], c:"225/224・1029/1024",
      cells: {10:{gs:1,gc:120,err:3.3,mark:"○"}, 11:{gs:1,gc:109.1,err:-7.6,mark:"△"}, 20:{gs:2,gc:120,err:3.3,mark:"○",cont:1}, 21:{gs:2,gc:114.3,err:-2.4,mark:"○"}, 31:{gs:3,gc:116.1,err:-0.5,mark:"★"}, 41:{gs:4,gc:117.1,err:0.4,mark:"★"}, 51:{gs:5,gc:117.6,err:1,mark:"★"}, 52:{gs:5,gc:115.4,err:-1.3,mark:"○"}, 62:{gs:6,gc:116.1,err:-0.5,mark:"★",cont:1}, 72:{gs:7,gc:116.7,err:0,mark:"★"}, 82:{gs:8,gc:117.1,err:0.4,mark:"★",cont:1}, 93:{gs:9,gc:116.1,err:-0.5,mark:"★",cont:1}}
    },
    valentine: { jp:"Valentine", g:"連盟拡張", pote:77.864, period:1200, perDiv:1, primes:[2,3,5,7], c:"1029/1024・126/125",
      cells: {15:{gs:1,gc:80,err:2.1,mark:"○"}, 16:{gs:1,gc:75,err:-2.9,mark:"○"}, 30:{gs:2,gc:80,err:2.1,mark:"○",cont:1}, 31:{gs:2,gc:77.4,err:-0.4,mark:"★"}, 46:{gs:3,gc:78.3,err:0.4,mark:"★"}, 47:{gs:3,gc:76.6,err:-1.3,mark:"○"}, 61:{gs:4,gc:78.7,err:0.8,mark:"★"}, 62:{gs:4,gc:77.4,err:-0.4,mark:"★",cont:1}, 77:{gs:5,gc:77.9,err:0.1,mark:"★"}, 92:{gs:6,gc:78.3,err:0.4,mark:"★",cont:1}, 93:{gs:6,gc:77.4,err:-0.4,mark:"★",cont:1}}
    },
    orwell: { jp:"Orwell", g:"種族拡張", pote:271.509, period:1200, perDiv:1, primes:[2,3,5,7], c:"225/224・1728/1715",
      cells: {9:{gs:2,gc:266.7,err:-4.8,mark:"○"}, 22:{gs:5,gc:272.7,err:1.2,mark:"○"}, 31:{gs:7,gc:271,err:-0.5,mark:"★"}, 40:{gs:9,gc:270,err:-1.5,mark:"○"}, 44:{gs:10,gc:272.7,err:1.2,mark:"○",cont:1}, 53:{gs:12,gc:271.7,err:0.2,mark:"★"}, 62:{gs:14,gc:271,err:-0.5,mark:"★",cont:1}, 75:{gs:17,gc:272,err:0.5,mark:"★"}, 84:{gs:19,gc:271.4,err:-0.1,mark:"★"}, 93:{gs:21,gc:271,err:-0.5,mark:"★",cont:1}}
    },
    myna: { jp:"Myna", g:"種族拡張", pote:310.146, period:1200, perDiv:1, primes:[2,3,5,7], c:"126/125・2401/2400",
      cells: {27:{gs:7,gc:311.1,err:1,mark:"★"}, 31:{gs:8,gc:309.7,err:-0.5,mark:"★"}, 35:{gs:9,gc:308.6,err:-1.6,mark:"○"}, 58:{gs:15,gc:310.3,err:0.2,mark:"★"}, 62:{gs:16,gc:309.7,err:-0.5,mark:"★",cont:1}, 89:{gs:23,gc:310.1,err:0,mark:"★"}, 93:{gs:24,gc:309.7,err:-0.5,mark:"★",cont:1}}
    },
    pajara: { jp:"Pajara", g:"種族拡張", pote:107.048, period:600, perDiv:2, primes:[2,3,5,7], c:"2048/2025・64/63",
      cells: {10:{gs:1,gc:120,err:13,mark:"△"}, 12:{gs:1,gc:100,err:-7,mark:"△"}, 20:{gs:2,gc:120,err:13,mark:"△",cont:1}, 22:{gs:2,gc:109.1,err:2,mark:"○"}, 32:{gs:3,gc:112.5,err:5.5,mark:"△"}, 44:{gs:4,gc:109.1,err:2,mark:"○",cont:1}, 54:{gs:5,gc:111.1,err:4.1,mark:"○"}}
    },
    hemiwur: { jp:"Hemiwürschmidt", g:"連盟", pote:193.898, period:1200, perDiv:1, primes:[2,3,5,7], c:"3136/3125・2401/2400",
      cells: {6:{gs:1,gc:200,err:6.1,mark:"△"}, 31:{gs:5,gc:193.5,err:-0.3,mark:"★"}, 37:{gs:6,gc:194.6,err:0.7,mark:"★"}, 62:{gs:10,gc:193.5,err:-0.3,mark:"★",cont:1}, 68:{gs:11,gc:194.1,err:0.2,mark:"★"}, 93:{gs:15,gc:193.5,err:-0.3,mark:"★",cont:1}, 99:{gs:16,gc:193.9,err:0,mark:"★"}}
    },
    hemithirds: { jp:"Hemithirds", g:"連盟", pote:193.244, period:1200, perDiv:1, primes:[2,3,5,7], c:"3136/3125・1029/1024",
      cells: {25:{gs:4,gc:192,err:-1.2,mark:"○"}, 31:{gs:5,gc:193.5,err:0.3,mark:"★"}, 56:{gs:9,gc:192.9,err:-0.4,mark:"★"}, 62:{gs:10,gc:193.5,err:0.3,mark:"★",cont:1}, 87:{gs:14,gc:193.1,err:-0.1,mark:"★"}, 93:{gs:15,gc:193.5,err:0.3,mark:"★",cont:1}}
    },
    marvel: { jp:"Marvel, rank-3", g:"rank3", supportOnly:true, primes:[2,3,5,7], c:"225/224",
      cells: {9:{sup:1}, 10:{sup:1}, 11:{sup:1}, 12:{sup:1}, 19:{sup:1}, 20:{sup:1}, 21:{sup:1}, 22:{sup:1}, 29:{sup:1}, 31:{sup:1}, 32:{sup:1}, 33:{sup:1}, 40:{sup:1}, 41:{sup:1}, 43:{sup:1}, 44:{sup:1}, 50:{sup:1}, 51:{sup:1}, 52:{sup:1}, 53:{sup:1}, 54:{sup:1}, 60:{sup:1}, 62:{sup:1}, 63:{sup:1}, 64:{sup:1}, 72:{sup:1}, 74:{sup:1}, 75:{sup:1}, 81:{sup:1}, 82:{sup:1}, 84:{sup:1}, 85:{sup:1}, 91:{sup:1}, 93:{sup:1}, 94:{sup:1}, 96:{sup:1}}
    },
    starling: { jp:"Starling, rank-3", g:"rank3", supportOnly:true, primes:[2,3,5,7], c:"126/125",
      cells: {12:{sup:1}, 15:{sup:1}, 16:{sup:1}, 19:{sup:1}, 27:{sup:1}, 28:{sup:1}, 30:{sup:1}, 31:{sup:1}, 34:{sup:1}, 35:{sup:1}, 42:{sup:1}, 43:{sup:1}, 46:{sup:1}, 47:{sup:1}, 50:{sup:1}, 58:{sup:1}, 61:{sup:1}, 62:{sup:1}, 65:{sup:1}, 70:{sup:1}, 73:{sup:1}, 74:{sup:1}, 77:{sup:1}, 81:{sup:1}, 89:{sup:1}, 92:{sup:1}, 93:{sup:1}}
    },
    mohajira: { jp:"Mohajira", g:"連盟拡張", pote:348.094, period:1200, perDiv:1, primes:[2,3,5,11], c:"81/80・121/120",
      cells: {7:{gs:2,gc:342.9,err:-5.2,mark:"△"}, 24:{gs:7,gc:350,err:1.9,mark:"○"}, 31:{gs:9,gc:348.4,err:0.3,mark:"★"}, 38:{gs:11,gc:347.4,err:-0.7,mark:"★"}, 55:{gs:16,gc:349.1,err:1,mark:"★"}, 62:{gs:18,gc:348.4,err:0.3,mark:"★",cont:1}}
    },
    bohpier: { jp:"Bohpier", g:"連盟拡張", supportOnly:true, primes:[3,5,7], c:"245/243・3125/3087", equave:3,
      cells: {13:{sup:1}, 26:{sup:1}, 39:{sup:1}, 52:{sup:1}, 65:{sup:1}, 78:{sup:1}, 91:{sup:1}}
    }
  }
};
