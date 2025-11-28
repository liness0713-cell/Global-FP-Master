export enum FPLevel {
  LEVEL_3 = "FP3級 (3rd Grade)",
  LEVEL_2 = "FP2級 (2nd Grade)",
  LEVEL_1 = "FP1級 (1st Grade)"
}

export enum ExamType {
  ACADEMIC = "学科 (Academic)",
  PRACTICAL = "実技 (Practical)"
}

export interface TrilingualText {
  ja: string;
  ja_kana: string; // Phonetic version (Hiragana/Katakana)
  en: string;
  cn: string;
}

export interface Option {
  id: string;
  text: TrilingualText;
}

export interface Question {
  id: string;
  category: string;
  text: TrilingualText;
  options: Option[];
  correctOptionId: string;
  explanation: TrilingualText;
}

export interface AppState {
  currentLevel: FPLevel | null;
  currentExamType: ExamType | null;
  view: 'home' | 'quiz';
}
