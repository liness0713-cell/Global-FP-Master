import { FPLevel, ExamType } from './types';

export const LEVELS = [
  { id: FPLevel.LEVEL_3, label: "FP 3級", sub: "Basic / 基础", color: "bg-teal-500", border: "border-teal-500", bgLight: "bg-teal-50" },
  { id: FPLevel.LEVEL_2, label: "FP 2級", sub: "Intermediate / 中级", color: "bg-blue-600", border: "border-blue-600", bgLight: "bg-blue-50" },
  { id: FPLevel.LEVEL_1, label: "FP 1級", sub: "Expert / 高级", color: "bg-indigo-700", border: "border-indigo-700", bgLight: "bg-indigo-50" },
];

export const EXAM_TYPES = [
  { id: ExamType.ACADEMIC, label: "学科試験", sub: "Academic / 学科" },
  { id: ExamType.PRACTICAL, label: "実技試験", sub: "Practical / 实技" },
];

export interface FPCategory {
  id: string;
  part: number;
  en: string;
  ja: string;
  cn: string;
  icon: string;
  color: string;
}

export const FP_CATEGORIES_DATA: FPCategory[] = [
  { 
    id: "life_planning", 
    part: 1,
    en: "Life Planning", 
    ja: "ライフプランニングと資金計画", 
    cn: "人生规划与资金计划",
    icon: "📊", 
    color: "bg-rose-100 text-rose-800 ring-rose-300" 
  },
  { 
    id: "risk_management", 
    part: 2,
    en: "Risk Management", 
    ja: "リスク管理", 
    cn: "风险管理",
    icon: "🛡️", 
    color: "bg-sky-100 text-sky-800 ring-sky-300" 
  },
  { 
    id: "asset_management", 
    part: 3,
    en: "Financial Asset Management", 
    ja: "金融資産運用", 
    cn: "金融资产运用",
    icon: "📈", 
    color: "bg-emerald-100 text-emerald-800 ring-emerald-300" 
  },
  { 
    id: "tax_planning", 
    part: 4,
    en: "Tax Planning", 
    ja: "タックスプランニング", 
    cn: "税务规划",
    icon: "💰", 
    color: "bg-violet-100 text-violet-800 ring-violet-300" 
  },
  { 
    id: "real_estate", 
    part: 5,
    en: "Real Estate", 
    ja: "不動産", 
    cn: "房地产",
    icon: "🏠", 
    color: "bg-orange-100 text-orange-800 ring-orange-300" 
  },
  { 
    id: "inheritance", 
    part: 6,
    en: "Inheritance / Succession", 
    ja: "相続・事業承継", 
    cn: "继承与事业承继",
    icon: "📜", 
    color: "bg-slate-100 text-slate-800 ring-slate-300" 
  }
];

// Fallback list of strings for random selection logic if needed
export const FP_CATEGORIES = FP_CATEGORIES_DATA.map(c => c.ja);

// Comprehensive Chapter Lists mapping Level -> CategoryID -> String Array
export const FP_CHAPTERS: Record<FPLevel, Record<string, string[]>> = {
  [FPLevel.LEVEL_3]: {
    "life_planning": [
      "FPと関連法規・職業倫理",
      "ライフプランニングの手法・3つの資金",
      "社会保険の概要 (医療・介護)",
      "公的年金制度の基本 (国民年金・厚生年金)",
      "年金給付 (老齢・障害・遺族)",
      "企業年金と個人年金",
      "住宅ローンの仕組みと金利",
      "教育資金と奨学金",
      "カードと消費者信用"
    ],
    "risk_management": [
      "保険の基本用語と仕組み",
      "保険業法とクーリング・オフ",
      "生命保険の基本商品 (定期・終身・養老)",
      "生命保険の特約と見直し",
      "損害保険の基本 (火災・地震・自動車)",
      "第三分野の保険 (医療・がん)",
      "保険と税金 (生命保険料控除など)"
    ],
    "asset_management": [
      "マーケット環境の理解 (景気・金利・物価)",
      "預貯金と金融類似商品",
      "投資信託の仕組みと分類",
      "債券投資 (国債・利回り計算)",
      "株式投資 (指標・売買)",
      "外貨建商品 (為替リスク)",
      "金融商品と税金 (NISA・配当控除)",
      "ポートフォリオと分散投資",
      "金融商品保護制度"
    ],
    "tax_planning": [
      "日本の税制と税金の分類",
      "所得税の仕組みと納税義務者",
      "10種類の所得 (給与・事業・不動産など)",
      "所得控除 (人的控除・物的控除)",
      "税額控除 (住宅ローン控除)",
      "所得税の申告と納付",
      "個人住民税・個人事業税"
    ],
    "real_estate": [
      "不動産の調査と登記",
      "不動産の取引 (売買契約・手付金)",
      "借地借家法",
      "建築基準法 (用途地域・建ぺい率・容積率)",
      "都市計画法",
      "不動産取得と保有の税金",
      "不動産譲渡の税金"
    ],
    "inheritance": [
      "贈与の基本と贈与税",
      "相続の開始と相続人・相続分",
      "遺言と遺留分",
      "相続税の仕組みと計算",
      "相続税の申告と納付",
      "相続財産の評価 (土地・建物)",
      "金融資産の相続評価"
    ]
  },

  [FPLevel.LEVEL_2]: {
    "life_planning": [
      "FPの実務とコンプライアンス",
      "係数を使用した必要額の計算 (6つの係数)",
      "キャッシュフロー表の作成と分析",
      "健康保険・介護保険の詳細",
      "公的年金の併給調整と加算",
      "確定拠出年金 (iDeCo・企業型)",
      "中小法人の資金計画",
      "住宅ローンの繰り上げ返済と借換え",
      "教育ローンと奨学金制度の詳細"
    ],
    "risk_management": [
      "保険約款と法律",
      "生命保険商品詳細 (変額・外貨建)",
      "法人契約の生命保険と経理処理",
      "損害保険商品詳細 (傷害・賠償責任)",
      "法人契約の損害保険と経理処理",
      "リスク管理と保険設計",
      "保険金・給付金と税金"
    ],
    "asset_management": [
      "経済指標の読み方 (GDP・日銀短観)",
      "投資信託のディスクロージャー",
      "債券の利回り計算とリスク",
      "株式投資の指標 (PER・PBR・ROE)",
      "外貨建商品の仕組みと税金",
      "デリバティブ取引 (先物・オプション)",
      "ポートフォリオ理論 (相関係数・シャープレシオ)",
      "金融商品の税制詳細 (損益通算・繰越控除)",
      "消費者保護法と金融商品販売法"
    ],
    "tax_planning": [
      "所得税の計算手順の完全理解",
      "損益通算と損失の繰越控除",
      "各種所得の計算詳細 (譲渡・一時・雑)",
      "所得控除の計算詳細 (医療費・寄付金)",
      "住宅借入金等特別控除の要件",
      "青色申告制度",
      "法人税の基本 (交際費・減価償却)",
      "消費税の基本 (課税・非課税・免税)"
    ],
    "real_estate": [
      "不動産登記法と対抗要件",
      "宅地建物取引業法 (媒介契約・重要事項説明)",
      "借地借家法の詳細 (定期借地・定期借家)",
      "区分所有法 (マンション法)",
      "建築基準法 (道路制限・高さ制限)",
      "不動産の税金特例 (3,000万円控除・買換え)",
      "不動産の有効活用手法 (等価交換・事業受託)"
    ],
    "inheritance": [
      "贈与税の配偶者控除・精算課税制度",
      "相続の承認・放棄・限定承認",
      "遺産分割協議と遺言書",
      "相続税の計算 (2割加算・税額控除)",
      "小規模宅地等の評価減の特例",
      "非上場株式の評価",
      "事業承継対策の基本"
    ]
  },

  [FPLevel.LEVEL_1]: {
    "life_planning": [
      "FP業務と関連業法 (弁護士法・税理士法)",
      "社会保険の適用拡大と詳細規定",
      "在職老齢年金と雇用保険の調整",
      "遺族年金・障害年金の詳細要件",
      "企業年金制度の設計と変更",
      "リタイアメントプランニングの高度な分析",
      "法人の福利厚生と資金計画",
      "中小企業の退職金制度"
    ],
    "risk_management": [
      "保険法の法的性質と判例",
      "生命保険の経理処理 (ハーフタックス等)",
      "法人のリスクマネジメント詳細",
      "損害保険の特殊商品と法人税務",
      "圧縮記帳と保険差益",
      "相続対策としての生命保険活用"
    ],
    "asset_management": [
      "行動ファイナンスと市場の効率性",
      "債券のデュレーションとコンベクシティ",
      "オプション取引 (各種戦略)",
      "現代ポートフォリオ理論 (CAPM・効率的フロンティア)",
      "パフォーマンス評価 (トレイナー・ジェンセン)",
      "金融商品課税の一体化と特定口座",
      "暗号資産と税金"
    ],
    "tax_planning": [
      "所得税の非居住者課税",
      "法人税の益金・損金算入詳細",
      "役員給与と役員退職金の税務",
      "組織再編税制 (合併・分割)",
      "グループ法人税制",
      "消費税の簡易課税とインボイス制度",
      "法人住民税・事業税の詳細",
      "決算書の分析 (財務諸表論)"
    ],
    "real_estate": [
      "不動産投資分析 (NPV・IRR)",
      "不動産証券化 (REIT・ファンド)",
      "借地権の認定課税と権利金",
      "不動産の交換・買換えの特例詳細",
      "農地法と生産緑地法",
      "開発許可制度と都市計画制限",
      "不動産の鑑定評価基準"
    ],
    "inheritance": [
      "相続税・贈与税の納税猶予制度",
      "非上場株式の納税猶予 (事業承継税制)",
      "取引相場のない株式の評価 (類似業種・純資産)",
      "一般社団法人・信託を活用した承継",
      "民法特例 (遺留分に関する特例)",
      "相続税の物納・延納",
      "海外資産の相続と税務"
    ]
  }
};