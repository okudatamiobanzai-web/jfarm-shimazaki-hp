// =====================================================================
// CONFIG — Edit this file to swap colors, fonts, copy, and images.
// All values are reactive: change & save, the prototype updates.
// =====================================================================

// ── Color palettes ───────────────────────────────────────────────────
// 3 variants. The Tweaks panel lets you pick at runtime;
// edit any value here to permanently change the swatch.
const PALETTES = {
  pasture: {
    label: '牧草グリーン主体',
    bgCream:    '#FBF8F1',
    primary:    '#6F8E5A',
    subSage:    '#BCC9A8',
    cardIvory:  '#EFE6D2',
    accentBrown:'#8B5E3C',
    ctaSunset:  '#D88B5A',
    textDark:   '#3E2F1E',
    textMute:   '#7A6A55',
    line:       '#E5DCC6',
  },
  sunset: {
    label: 'サンセット主体',
    bgCream:    '#FBF6EC',
    primary:    '#C26A3F',
    subSage:    '#E6B894',
    cardIvory:  '#F2E4CF',
    accentBrown:'#7A4A2A',
    ctaSunset:  '#6F8E5A',
    textDark:   '#3A2516',
    textMute:   '#8A6A50',
    line:       '#EBD9BD',
  },
  monotone: {
    label: '生成りモノトーン',
    bgCream:    '#FAF7F0',
    primary:    '#3E2F1E',
    subSage:    '#BCB4A1',
    cardIvory:  '#EDE6D5',
    accentBrown:'#6B5840',
    ctaSunset:  '#3E2F1E',
    textDark:   '#2A1F12',
    textMute:   '#7A6A55',
    line:       '#DDD4BD',
  },
};

// ── Type system ──────────────────────────────────────────────────────
const FONTS = {
  heading: '"Zen Maru Gothic", system-ui, sans-serif',
  body:    '"Noto Sans JP", system-ui, sans-serif',
  display: '"Shippori Mincho", serif',
  latin:   '"Fraunces", Georgia, serif',
  mono:    '"JetBrains Mono", ui-monospace, monospace',
};

// ── Farm content ─────────────────────────────────────────────────────
const COPY = {
  brand: {
    nameJa:    '有限会社ジェイファームシマザキ',
    nameShort: 'J-Farm Shimazaki',
    nameEn:    'J-Farm Shimazaki',
    tel:       '015-377-3837',
    fax:       '015-377-2810',
    address:   '〒086-0205  北海道野付郡別海町泉川57-11',
  },
  hero: {
    catchMain:  '感謝を、地域へ。',
    catchSub:   '先駆けを、次の世代へ。',
    lede:       '別海町で三代、1,200頭の牛とともに。',
    eyebrow:    'Since 1948  ·  Betsukai, Hokkaido',
  },
  philosophy: {
    label: '経営理念',
    body:  '感謝の気持ちを大切にし、地域とともに、先駆者として、常にワクワク魅力ある牧場を目指す。',
    lines: ['感謝の気持ちを大切にし', '地域とともに', '先駆者として、常にワクワク魅力ある牧場を目指す'],
  },
  vision: {
    label: '長期ビジョン',
    phases: [
      { period: '〜2030', title: '牧場の基礎をつくる',
        body: '搾乳頭数・生産量・組織体制を整え、安定経営の土台を築く。FS牛舎・乾乳舎・哺育舎の完成を経て規模拡大。' },
      { period: '2030〜2040', title: '魅力ある牧場を目指す',
        body: '現場の組織化と役割分担。環境美化と働く人のための牧場づくり。A2ミルクなど高付加価値商品を確立し、発信する。' },
      { period: '2040〜',  title: '先駆者として、笑顔あふれる牧場',
        body: '家族経営型牧場の収益化モデルを提示。研修牧場を設立し、新規就農希望者を仲間として育て、独立を支援。観光牧場・商品展開へ。' },
    ],
  },
  policy2025: {
    label: '2025年度 取組方針',
    items: [
      { key: 'diversity',  title: 'ダイバーシティの推進',      body: '性別・年齢・経歴を問わず、酪農に向き合う仲間を歓迎。多様な働き方を支える組織へ。' },
      { key: '3s',         title: '整理・整頓・清掃の推進',    body: '安全・効率的・快適な職場づくり。物を大切に使い、こまめに掃除する現場文化。' },
      { key: 'animal',     title: 'アニマルウェルフェアの推進', body: '牛のストレスと疾病を減らし、良質な生乳を多く生産する。「5つの自由」を意識する。' },
      { key: 'productivity', title: '生産性の更なる向上',       body: '増産と高付加価値化の両輪。A2ミルク、自社ブランド牛肉、6次産業化。' },
      { key: 'efficiency', title: '作業効率の更なる追求',       body: 'TMR調整・給餌作業の見直し、搾乳時間の最適化。定例MTGで進捗を管理。' },
    ],
  },
  fiveFreedoms: {
    label: '5つの自由（アニマルウェルフェア）',
    items: [
      '飢え、渇き及び栄養不良からの自由',
      '恐怖及び苦悩からの自由',
      '身体的及び熱の不快からの自由',
      '苦痛、傷害及び疾病からの自由',
      '通常の行動様式を発現する自由',
    ],
  },
  numbers: [
    { value: 1948, suffix: '',   label: '創業',         note: '昭和23年、初代・昭七が入植' },
    { value: 1200, suffix: '頭', label: '総飼育頭数',   note: '成牛（搾乳牛）約500頭を含む' },
    { value: 490,  suffix: 'ha', label: '自社草地',     note: '所有290ha＋借地200ha' },
    { value: 4360, suffix: 't',  label: '年間生乳生産', note: '粗飼料はほぼ全量自給' },
  ],
  pillars: [
    {
      key: 'dairy', label: '酪農',
      kicker: 'Dairy',
      desc: '自給粗飼料中心の循環型酪農。2024年よりA2ミルクの生産を開始しました。',
      img: 'about_farm01',
    },
    {
      key: 'beef', label: '肉牛',
      kicker: 'Beef',
      desc: '黒毛和種×ホル交雑「しまざき壮健牛」。半年長い約30ヶ月、放牧運動を取り入れて育てます。',
      img: 'banner_soukengyu',
    },
    {
      key: 'community', label: '地域',
      kicker: 'Community',
      desc: 'ちえのわ事業協同組合、酪農教育ファーム、地元マルシェ。地域で循環する酪農を。',
      img: 'banner_chienowa',
    },
  ],
  community: [
    { title: 'ちえのわ事業協同組合', body: '牧場主が呼びかけ設立。地域の素材でジェラートを開発・販売。' },
    { title: '酪農教育ファーム認証', body: '小中学生の職業体験を受け入れ、牧場での学びの場を提供。' },
    { title: '上西春別中「ミルフェス」', body: '乳和食を味わう授業の講師として、食と命を伝える。' },
    { title: '地元マルシェ・グルメイベント', body: '地域飲食店と連携し、別海の食を発信。' },
  ],
  newsItems: [
    { date: '2026.04.12', text: '春の哺育シーズン、子牛が次々と生まれています' },
    { date: '2026.04.05', text: '採用説明会を弟子屈町「牛肉本舗くろ」にて開催' },
    { date: '2026.03.28', text: 'A2ミルクのオンライン販売、定期便受付開始' },
    { date: '2026.03.20', text: 'ちえのわ春季ジェラート、新フレーバーを発表' },
    { date: '2026.03.11', text: '上西春別中学校「ミルフェス」に講師として参加' },
    { date: '2026.02.28', text: '別海町マルシェに今期も出店します' },
  ],
  history: [
    { year: 1948, title: '初代・島崎昭七、別海町泉川地区に入植',
      body: '長野県出身。戦後まもない昭和23年、酪農開拓者として荒地を切り拓き、酪農を開始。' },
    { year: 1980, title: '二代目・美昭が経営参画',
      body: '機械化を進め、牧場の基盤を拡張。酪農・肉牛の二本柱を育てる。' },
    { year: 2005, title: '有限会社ジェイファームシマザキ設立',
      body: '法人化。酪農部門・肉牛部門・家畜流通部門の3部門体制を確立。' },
    { year: 2009, title: '直営焼肉店「牛肉本舗くろ」開業、EC開始',
      body: '弟子屈町市街に直営店を開業。自社加工場を備え、全国の消費者へ直接発送する仕組みを整える。' },
    { year: 2018, title: 'ちえのわ事業協同組合 設立',
      body: '牧場主の呼びかけで地元酪農家有志と設立。搾りたて生乳のジェラート事業を展開。' },
    { year: 2021, title: '三代目・島崎洋介が経営継承',
      body: '「祖父が受け継いできた酪農を守りたい」。研修牧場構想・ダイバーシティ推進を掲げ、新章へ。' },
    { year: 2024, title: 'A2ミルクの生産を開始',
      body: '次世代に選ばれる酪農を目指し、新しい付加価値づくりへ。' },
  ],
  voices: [
    { name: '島崎 洋介', role: '三代目代表',
      text: '祖父が入植して受け継いできた酪農を、次の世代に渡したい。' },
    { name: '島崎 洋介', role: '三代目代表',
      text: 'この地域をもう一度、活気あるものにしたい。' },
    { name: '島崎 洋介', role: '三代目代表',
      text: '酪農を魅力ある仕事にして、若者に選ばれる産業にしたい。' },
  ],
  recruit: {
    headlineSoft:  '酪農を、次の世代へ。\n仲間を、本気で育てます。',
    headlineBold:  '酪農を継ぐのは、\n君の手かもしれない。',
    ledeSoft: '搾乳・育成・哺育の役割分業制で、未経験でも一歩ずつ。\n研修牧場として、独立まで伴走します。',
    ledeBold: '1948年から続く牧場で、自分の腕一本で生きていく。\n本気で続けたい人を、本気で育てます。',
    features: [
      { title: '役割分業制',     body: '搾乳／育成／哺育に分かれた業務体系で、未経験者も着実にステップアップ。' },
      { title: '権限と目標管理', body: '場長権限を明確化し、定例MTGで目標を共有。意思決定が早い。' },
      { title: 'ダイバーシティ',  body: '性別・年齢・経歴を問わず、酪農に向き合う仲間を歓迎します。' },
      { title: '研修牧場構想',   body: '新規就農希望者を仲間として育て、独立まで伴走する仕組みを整備中。' },
    ],
    principles: [
      '飲用牛乳生産牧場としての自覚を持つ',
      'きれいな環境で作業する',
      '牛にストレスを与えない',
      '報連相をしっかり行う',
      '誠実な行動を心掛ける',
    ],
    schedule: [
      { time: '04:30', act: '朝の搾乳開始', note: 'ロボット＆パーラーを併用' },
      { time: '07:00', act: '哺乳・哺育', note: '子牛の健康チェック' },
      { time: '08:30', act: '朝礼・本日のMTG', note: '担当ごとに目標共有' },
      { time: '09:00', act: '牛舎清掃・餌寄せ', note: 'きれいな環境が品質を決める' },
      { time: '12:00', act: '昼休憩', note: '食堂で皆と食事' },
      { time: '13:30', act: '育成牛のケア・飼料管理', note: '体格・体調を観察' },
      { time: '16:00', act: '夕方の搾乳', note: '一日の集大成' },
      { time: '18:30', act: '日報・退勤', note: '翌日の段取りを確認' },
    ],
    seniors: [
      { name: 'Tさん', age: 28, prev: '札幌・営業職から転職', tenure: '入社3年目', role: '搾乳担当',
        img: 'about_farm02',
        text: '都会から移って3年。最初は牛が怖かったけれど、今は名前で呼べるくらい一頭ずつが愛おしい。',
        day: ['04:30 出勤', '朝の搾乳', '牛舎清掃', '休憩', '夕方搾乳', '18:30 退勤'] },
      { name: 'Mさん', age: 32, prev: '農学部卒・新卒入社', tenure: '入社5年目', role: '育成担当',
        img: 'about_farm03',
        text: '研修プログラムが本当に丁寧。育成担当として独立を見据えて学んでいます。',
        day: ['05:00 出勤', '哺育', '育成牛ケア', '勉強会', '記録整理', '17:30 退勤'] },
      { name: 'Kさん', age: 41, prev: 'UIターン就農', tenure: '入社7年目', role: '哺育リーダー',
        img: 'staff',
        text: '家族と移住。役割分業で休日もきちんと取れて、子育てとの両立ができています。',
        day: ['05:30 出勤', '朝礼', '哺育・記録', '育成計画', '夕方ケア', '17:00 退勤'] },
    ],
    flow: [
      { step: '01', title: 'エントリー',   body: '応募フォームまたはお電話でご連絡ください。',           duration: '即日'       },
      { step: '02', title: '書類・動画選考', body: '履歴書・職務経歴書・自己紹介動画（任意）を確認します。', duration: '1〜3日'     },
      { step: '03', title: 'オンライン面談', body: '代表・場長と1時間ほど。質問も遠慮なくどうぞ。',       duration: '約1時間'    },
      { step: '04', title: '現地見学・体験', body: '別海まで足を運んでいただき、2〜3日の体験就業。交通費支給。', duration: '2〜3日'     },
      { step: '05', title: '最終面談',     body: '条件確認とマッチングの最終すり合わせ。',               duration: '約1時間'    },
      { step: '06', title: '内定・入社準備', body: '住居・引越しのサポート。入社日を調整。',               duration: '内定後1ヶ月' },
    ],
    openings: [
      {
        key: 'milking', title: '搾乳スタッフ', type: '正社員', salary: '月給 22万円〜', exp: '未経験可',
        body: 'パーラー・ロボット併用で、朝夕2回の搾乳を担当。日々の観察力が牛の健康を守ります。',
        tags: ['未経験歓迎', '役割分業', '住居補助'],
      },
      {
        key: 'breeding', title: '育成・哺育スタッフ', type: '正社員', salary: '月給 23万円〜', exp: '未経験可',
        body: '子牛の哺育から育成までを担当。一頭ずつの成長を見守るやりがいのある仕事です。',
        tags: ['未経験歓迎', 'チーム制', '子育て両立'],
      },
      {
        key: 'manager', title: '場長候補（幹部候補）', type: '正社員', salary: '月給 30万円〜', exp: '畜産経験3年以上',
        body: '将来の場長候補として、現場運営・人材育成・経営判断に携わっていただきます。',
        tags: ['幹部候補', '権限あり', '独立支援'],
      },
      {
        key: 'trainee', title: '新規就農研修生', type: '研修生', salary: '研修手当 月18万円〜', exp: '不問',
        body: '研修牧場構想に基づき、独立就農まで伴走。住居・車両のサポートあり。',
        tags: ['独立支援', '研修プログラム', '住居付'],
      },
    ],
    benefits: [
      { label: '勤務時間', value: '変形労働制 実働8時間（シフト）' },
      { label: '休日',    value: '月8日（希望制）／年末年始・夏季休暇' },
      { label: '給与',    value: '月給制 22万円〜／経験・スキルを考慮' },
      { label: '昇給',    value: '年1回（4月）／決算賞与あり' },
      { label: '賞与',    value: '年2回（夏・冬）' },
      { label: '社会保険', value: '健康／厚生年金／雇用／労災 完備' },
      { label: '住居補助', value: '社宅あり（家賃補助制度）／引越し費用補助' },
      { label: '車両補助', value: '入社後の車購入補助制度あり' },
      { label: '研修',    value: '入社後3ヶ月のOJT＋定例勉強会' },
      { label: '制服',    value: '作業着・防寒着 貸与' },
      { label: '福利厚生', value: '健康診断／ストレスチェック／牧場体験招待' },
      { label: '有給休暇', value: '入社半年後に10日付与（取得率80%以上）' },
    ],
    faq: [
      { q: '酪農未経験でも大丈夫ですか？', a: '約6割のスタッフが未経験入社です。OJTと役割分業制により、段階的に仕事を覚えられます。' },
      { q: '移住サポートはありますか？',   a: '社宅提供・引越し費用補助・車両購入補助など、移住を前提とした支援制度を整えています。' },
      { q: '勤務シフトはどのくらい固定？', a: '基本シフトは固定ですが、家庭の事情などは相談可能。育児中のスタッフも在籍しています。' },
      { q: '将来、独立することは可能？',   a: '研修牧場構想として、独立就農までの伴走プログラムを準備中です。まずはご相談ください。' },
      { q: '見学だけでも可能ですか？',     a: 'もちろん歓迎します。日程はフォームまたはお電話でお問い合わせください。' },
      { q: '女性スタッフはいますか？',     a: '搾乳・哺育・事務部門を中心に、複数名の女性スタッフが活躍しています。' },
    ],
  },
};

// ── Member / team profiles ──────────────────────────────────────────
COPY.members = [
  { name: '島崎 洋介', nameEn: 'Yosuke Shimazaki', role: '三代目代表',
    tenure: '2005 入社 / 2021 代表就任', img: 'about_farm02',
    tags: ['経営', '地域連携', '採用'],
    quote: '受け継いだ酪農を、次の世代に胸を張って手渡したい。',
    bio: '2005年に父・美昭のもとで経営参画。ちえのわ事業協同組合の設立、A2ミルクの導入など、地域とブランドを磨く取り組みを推進。' },
  { name: '島崎 美昭', nameEn: 'Yoshiaki Shimazaki', role: '二代目・会長',
    tenure: '1980 入社', img: 'about_farm03',
    tags: ['現場統括', '機械', '人材育成'],
    quote: '牛と向き合う姿勢は、言葉じゃなく、背中で伝える。',
    bio: '機械化と法人化を進め、現在の基盤を築いた二代目。若手スタッフのメンター役として現場にも立つ。' },
  { name: '田中 徹', nameEn: 'Toru Tanaka', role: '場長 / 搾乳部門責任者',
    tenure: '入社12年目', img: 'staff',
    tags: ['搾乳', 'データ管理', 'シフト設計'],
    quote: '毎朝のパーラーは、一頭ずつのコンディション確認の場です。',
    bio: '前職は乳業メーカー。搾乳ロボットとパーラーの併用運用を設計し、乳質の向上に貢献。' },
  { name: '山岸 真帆', nameEn: 'Maho Yamagishi', role: '哺育・育成リーダー',
    tenure: '入社7年目', img: 'about_farm01',
    tags: ['哺育', '育成', '動物福祉'],
    quote: '子牛には一頭ずつ名前を付けます。呼べば、返してくれる。',
    bio: '農学部卒、新卒入社。子牛の生育データを記録し、疾病予防プログラムを運用。' },
  { name: '小林 健', nameEn: 'Ken Kobayashi', role: '肉牛部門 / 壮健牛担当',
    tenure: '入社5年目', img: 'banner_soukengyu',
    tags: ['肥育', 'ブランド', '出荷'],
    quote: '30ヶ月、走り込む牛は肉が違います。',
    bio: '札幌・営業職からの転職。しまざき壮健牛の肥育管理と出荷スケジュールを担当。' },
  { name: '大森 律子', nameEn: 'Ritsuko Omori', role: '管理部門 / 採用広報',
    tenure: '入社3年目', img: 'about_farm02',
    tags: ['採用', '広報', '事務'],
    quote: '採用は、未来のチームメイトに出会う仕事。手を抜きません。',
    bio: 'UIターン入社。SNS発信・採用イベント・経理を担当。ジェラート工房との連携も。' },
];
COPY.teamStats = [
  { value: 24, suffix: '名', label: '現スタッフ数',  note: '男性14名・女性10名' },
  { value: 6,  suffix: '名', label: '女性リーダー層', note: '部門責任者含む' },
  { value: 34, suffix: '歳', label: '平均年齢',     note: '20代から60代まで' },
  { value: 60, suffix: '%',  label: '未経験入社',   note: '他業界からの転職者' },
];

// ── Business detail ──────────────────────────────────────────────────
COPY.business = {
  intro: '酪農・肉牛・家畜流通、そして加工販売。生産から食卓まで、循環で繋ぐ4部門。\n本社牧場・第2牧場・共栄牧場の3拠点で、牛のライフステージ別に専門施設を整備しています。',
  divisions: [
    {
      key: 'dairy', kicker: '01', en: 'Dairy',
      title: '酪農部門',
      lede: '自給粗飼料中心の循環型酪農',
      body: '所有290ha＋借地200haの草地で生産した粗飼料を中心に、堆肥還元による循環型の酪農を実践。2024年からはA2ミルクの生産も開始しました。',
      stats: [['搾乳牛', '約500頭'], ['総飼育頭数', '約1,200頭'], ['年間生乳', '約4,360t']],
      img: 'about_farm01',
    },
    {
      key: 'beef', kicker: '02', en: 'Beef',
      title: '肉牛部門',
      lede: '黒毛和種×ホル交雑「しまざき壮健牛」',
      body: '通常より半年長い約30ヶ月の肥育期間。放牧地を歩かせて十分な運動をさせながら育てることで、赤身の旨味を引き出す壮健飼育を実践します。',
      stats: [['肥育期間', '約30ヶ月'], ['ブランド', 'しまざき壮健牛'], ['別称', '別海ハーフ和牛']],
      img: 'banner_soukengyu',
    },
    {
      key: 'process', kicker: '03', en: 'Process & Sales',
      title: '加工・販売部門',
      lede: '直営焼肉店「牛肉本舗くろ」＋EC',
      body: '2009年、弟子屈町に自社加工場を備えた直営焼肉店を開業。同時にECを立ち上げ、全国の消費者へ直接お届けする仕組みを整えました。',
      stats: [['店舗', '弟子屈町'], ['開業', '平成21年(2009)'], ['販路', '全国']],
      img: 'about_farm03',
    },
    {
      key: 'distribution', kicker: '04', en: 'Distribution',
      title: '家畜流通部門',
      lede: '地域の畜産を流通から支える',
      body: '二代目が家畜商の資格を取得して以来、子牛の売買や肥育事業を通じて、地域の健全な畜産経営の基盤づくりに貢献しています。',
      stats: [['対応', '生体・枝肉'], ['範囲', '道東広域'], ['連携', '組合仲間']],
      img: 'main_ph04',
    },
  ],
  sites: [
    { key: 'main',   name: '本社牧場',            role: '哺育・育成・初妊牛管理',   note: '泉川57-11' },
    { key: 'second', name: '第2牧場',             role: '乾乳牛・分娩前後の管理',   note: '搾乳休止中の牛を' },
    { key: 'kyoei',  name: '第3牧場（共栄牧場）', role: '搾乳専用施設',             note: '作業分業化の中核' },
  ],
};

// ── Brand: Souken-gyu ─────────────────────────────────────────────────
COPY.brandPage = {
  hero: 'しまざき壮健牛',
  heroEn: 'Shimazaki Souken‑Gyu',
  lede: '健やかで、壮らかに。\n別海の風と草と、半年長い肥育時間が育てる味。',
  origin: {
    label: 'ネーミングの由来',
    body: '「壮健」とは、健やかで壮らかなさま。放牧運動を取り入れた飼育方法と、約30ヶ月という長い肥育時間が、その名にふさわしい肉質をつくります。',
  },
  features: [
    { num: '30', unit: 'ヶ月', label: '肥育期間', note: '通常より半年長く、じっくりと' },
    { num: '490', unit: 'ha', label: '草地・放牧地', note: '所有290ha＋借地200ha' },
    { num: '2',   unit: '系統', label: '黒毛和種×ホル交雑', note: '別海ハーフ和牛として' },
  ],
  channels: [
    { name: '牛肉本舗 くろ', desc: '弟子屈町・直営焼肉店', meta: '生産者の店として、希少部位もその日の状態でご提供。' },
    { name: 'オンラインストア', desc: 'shimazaki-gyu.com', meta: '全国配送・贈答にも。定期便のお問い合わせも受付中。' },
  ],
};

// ── Community detail ─────────────────────────────────────────────────
COPY.communityPage = {
  intro: '別海の地で、酪農家として、地域の一員として。\n小さな取り組みを、ひとつひとつ積み重ねています。',
  heroStat: [
    { value: 8,  suffix: '年',  label: 'ちえのわ 活動年数',  note: '2018年設立' },
    { value: 12, suffix: '件',  label: '年間イベント出店',    note: 'マルシェ・フェス' },
    { value: 350, suffix: '名+', label: '教育ファーム 来訪者', note: '小中高校生' },
    { value: 6,  suffix: '自治体', label: '連携エリア',         note: '別海町・道東' },
  ],
  programs: [
    {
      kicker: 'Project 01', title: 'ちえのわ事業協同組合',
      img: 'banner_chienowa',
      body: '別海の酪農家に呼びかけ、共同で立ち上げた組合。地域の素材を使ったジェラートを開発・販売し、酪農と地域経済の循環をつくっています。',
      tag: '出資・共同経営',
      since: '2018', scale: '組合員5名',
    },
    {
      kicker: 'Project 02', title: '酪農教育ファーム認証',
      img: 'about_farm02',
      body: '小中学生の職業体験を受け入れ、牛と暮らす日常、命の重みを伝える学びの場を提供しています。次世代への種まきとして。',
      tag: '教育・受け入れ',
      since: '2016', scale: '年間約350名',
    },
    {
      kicker: 'Project 03', title: '上西春別中「ミルフェス」',
      img: 'about_farm01',
      body: '地元中学校の家庭科授業に講師として参加。乳和食を題材に、地元の食材と食文化の魅力を伝えています。',
      tag: '授業・講師',
      since: '2020', scale: '年2回',
    },
    {
      kicker: 'Project 04', title: '地元マルシェ・グルメイベント',
      img: 'about_farm03',
      body: '別海町・近隣の飲食店と連携し、マルシェやイベントへ出店。地域の食を発信する継続的な取り組みです。',
      tag: '出店・連携',
      since: '2015', scale: '年12回前後',
    },
  ],
  calendar: [
    { month: '4月',  title: '酪農教育ファーム 春の受入開始', kind: '教育' },
    { month: '5月',  title: '別海町マルシェ 春',            kind: 'イベント' },
    { month: '6月',  title: 'ちえのわ 夏フレーバー発売',     kind: '商品' },
    { month: '7月',  title: 'なかしべつ夏祭り 出店',         kind: 'イベント' },
    { month: '9月',  title: '上西春別中「ミルフェス」',       kind: '教育' },
    { month: '10月', title: '別海ジャンボホタテ・ミルク祭り', kind: 'イベント' },
    { month: '11月', title: '道東乳製品フェア 参加',         kind: 'イベント' },
    { month: '2月',  title: '新人研修受入 / 採用説明会',     kind: '採用' },
  ],
  partners: [
    { name: '別海町役場',      kind: '自治体' },
    { name: '別海町商工会',    kind: '経済団体' },
    { name: '上西春別中学校',  kind: '学校' },
    { name: '弟子屈町・釧路市', kind: '連携自治体' },
    { name: 'MMJ',            kind: '生乳出荷' },
    { name: '酪農教育ファーム推進委員会', kind: '認証機関' },
    { name: '北海道大学 農学部', kind: '学術連携' },
    { name: '道東マルシェ実行委員会', kind: 'イベント' },
  ],
  voices: [
    { who: '上西春別中学校 家庭科教諭', text: '牛乳を「飲むもの」から「知るもの」へ。生徒の表情が変わりました。' },
    { who: '別海町役場 産業振興課',     text: 'ちえのわは、町の酪農を若い世代に届ける貴重な窓口です。' },
    { who: '来訪された小学6年生',       text: '子牛に名前があるって、生きてるって感じがしてうれしかった。' },
  ],
};

// ── News dummy items (extends top page set) ──────────────────────────
COPY.newsAll = [
  { date: '2026.04.12', tag: '日々', text: '春の哺育シーズン、子牛が次々と生まれています', img: 'about_farm01' },
  { date: '2026.04.05', tag: '採用', text: '採用説明会を弟子屈町「牛肉本舗くろ」にて開催', img: 'staff' },
  { date: '2026.03.28', tag: '商品', text: 'A2ミルクのオンライン販売、定期便受付開始', img: 'main_ph04' },
  { date: '2026.03.20', tag: 'ちえのわ', text: '春季ジェラートに新フレーバーを追加しました', img: 'banner_chienowa' },
  { date: '2026.03.11', tag: '地域', text: '上西春別中学校「ミルフェス」に講師として参加', img: 'about_farm02' },
  { date: '2026.02.28', tag: 'イベント', text: '別海町マルシェに今期も出店します', img: 'about_farm03' },
];

// ── Instagram feed mock data ─────────────────────────────────────────
const INSTAGRAM = {
  handle: 'jfarm_shimazaki',
  name: 'Jファームシマザキ',
  bio: '1948年創業 / 北海道別海町の酪農 / 搾乳牛500頭 / しまざき壮健牛・ちえのわジェラート',
  url: 'jfarm-shimazaki.jp',
  posts: 842,
  followers: 3420,
  following: 128,
  feed: [
    { img: 'main_ph01',       type: 'carousel', likes: 284, comments: 12, date: '2d',  caption: '朝の搾乳。気温-8℃。湯気の向こうにサイレージを運ぶトラクター。#別海町 #酪農 #A2ミルク' },
    { img: 'about_farm01',    type: 'photo',    likes: 512, comments: 23, date: '4d',  caption: '初雪の牧草地。440haを真っ白に。来季の備蓄は去年より10％増し。#牧草地 #北海道' },
    { img: 'about_farm02',    type: 'reel',     likes: 1240, comments: 48,  date: '1w', caption: '子牛の哺育。スタッフが一頭ずつ名前で呼びます。#哺育 #子牛 #しまざき壮健牛' },
    { img: 'staff',           type: 'photo',    likes: 398, comments: 19, date: '1w', caption: '搾乳班の朝礼。今朝は新人さん初日。#チーム #採用情報' },
    { img: 'about_farm03',    type: 'photo',    likes: 621, comments: 31, date: '2w', caption: '三代目と二代目。受け継ぐもの、変えていくもの。#家族経営 #Since1948' },
    { img: 'banner_chienowa', type: 'carousel', likes: 847, comments: 54, date: '2w', caption: '春のジェラート、桜ミルク・よもぎ・いちご入荷。ちえのわ店頭でどうぞ。#ジェラート #ちえのわ' },
    { img: 'main_ph04',       type: 'photo',    likes: 342, comments: 14, date: '3w', caption: '堆肥還元の日。循環型酪農の要。#循環型酪農 #堆肥' },
    { img: 'banner_soukengyu',type: 'photo',    likes: 489, comments: 22, date: '3w', caption: 'しまざき壮健牛、出荷準備中。#和牛 #しまざき壮健牛' },
    { img: 'about_farm01',    type: 'reel',     likes: 2103, comments: 87, date: '1mo', caption: '牧場一日密着。朝5時から夜まで。Reel長めです。#牧場の日々 #Vlog' },
  ],
};

// ── Image references (existing site URLs) ────────────────────────────
// Routed through images.weserv.nl proxy because the source site is http-only
// (mixed-content blocks direct loads from https pages). The proxy serves the
// images over https with CORS, so all referenced photos render reliably.
const _proxy = (host, path) => `https://images.weserv.nl/?url=${host}${path}`;
const _jfarm = (path) => _proxy('jfarm-shimazaki.jp', path);
const IMAGES = {
  main_ph01:        _jfarm('/wp/wp-content/uploads/2015/04/main_ph01-2.png'),
  main_ph04:        _jfarm('/wp/wp-content/uploads/2015/04/main_ph04.png'),
  about_farm01:     _jfarm('/wp/wp-content/uploads/2015/04/about_farm01.jpg'),
  about_farm02:     _jfarm('/wp/wp-content/uploads/2015/04/about_farm02.jpg'),
  about_farm03:     _jfarm('/wp/wp-content/uploads/2015/04/about_farm03.jpg'),
  staff:            _jfarm('/wp/wp-content/uploads/2016/01/2016-01-22-18.07.02-720x380.jpg'),
  banner_soukengyu: _jfarm('/wp/wp-content/uploads/2015/04/banner_soukengyu.png'),
  banner_chienowa:  _jfarm('/wp/wp-content/uploads/2015/04/banner_chienowa1.png'),
  logo:             _jfarm('/wp/wp-content/uploads/2015/04/logo1.png'),
};

// Expose for other scripts
Object.assign(window, { PALETTES, FONTS, COPY, IMAGES, INSTAGRAM });
