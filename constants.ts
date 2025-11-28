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