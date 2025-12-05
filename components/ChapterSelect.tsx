import React from 'react';
import { FPLevel, ExamType } from '../types';
import { FP_CATEGORIES_DATA, FP_CHAPTERS } from '../constants';

interface ChapterSelectProps {
  level: FPLevel;
  categoryId: string;
  onBack: () => void;
  onSelectChapter: (chapterName: string, mode: 'quiz' | 'study', type?: ExamType) => void;
}

// Hardcoded Ruby titles for the Chapter Page Header
const CATEGORY_TITLES: Record<string, string> = {
  "life_planning": "ライフプランニングと<ruby>資金計画<rt>しきんけいかく</rt></ruby>",
  "risk_management": "<ruby>リスク管理<rt>りすくかんり</rt></ruby>",
  "asset_management": "<ruby>金融資産運用<rt>きんゆうしさんうんよう</rt></ruby>",
  "tax_planning": "タックスプランニング",
  "real_estate": "<ruby>不動産<rt>ふどうさん</rt></ruby>",
  "inheritance": "<ruby>相続<rt>そうぞく</rt></ruby>・<ruby>事業承継<rt>じぎょうしょうけい</rt></ruby>"
};

export const ChapterSelect: React.FC<ChapterSelectProps> = ({ 
  level, 
  categoryId, 
  onBack, 
  onSelectChapter 
}) => {
  const categoryData = FP_CATEGORIES_DATA.find(c => c.id === categoryId);
  const chapters = FP_CHAPTERS[level]?.[categoryId] || [];

  if (!categoryData) return <div>Category not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24 animate-fade-in">
      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-2 mt-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors flex-shrink-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
        </button>
        <div className="flex-grow">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">{level}</h2>
          
          <div className="flex items-start gap-4">
            <span className="text-3xl md:text-4xl flex-shrink-0 pt-1">{categoryData.icon}</span>
            <div className="flex flex-col">
              {/* Japanese Title with Ruby */}
              <h1 
                className="text-2xl md:text-3xl font-bold text-gray-900 leading-normal ruby-text mb-1"
                dangerouslySetInnerHTML={{ __html: CATEGORY_TITLES[categoryId] || categoryData.ja }}
              />
              
              {/* English & Chinese Subtitles */}
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 text-sm md:text-base text-gray-500 font-medium">
                <span className="tracking-tight">{categoryData.en}</span>
                <span className="hidden md:inline text-gray-300">|</span>
                <span>{categoryData.cn}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-8 flex items-start gap-3">
        <div className="text-indigo-600 mt-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <p className="text-sm text-indigo-800">
          Choose a mode to proceed: <strong>Study</strong> to learn key concepts, or practice with <strong>Academic</strong> (multiple choice) or <strong>Practical</strong> (calculation/scenario) quizzes.
          <br/>
          <span className="text-xs opacity-75">「学習」で知識を深めるか、「学科」（択一式）、「実技」（計算・応用）で演習してください。</span>
        </p>
      </div>

      {/* Chapter Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* "All / Random" Option */}
        <div className="col-span-1 md:col-span-2 p-6 rounded-xl border-2 border-dashed border-indigo-300 bg-indigo-50/50 flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="flex-grow">
              <h3 className="text-lg font-bold text-indigo-700">
                🎲 Comprehensive Practice
              </h3>
              <p className="text-xs text-indigo-500">Test yourself with random questions from this entire category.</p>
           </div>
           <div className="flex gap-2 w-full md:w-auto flex-shrink-0">
             <button
               onClick={() => onSelectChapter(categoryData.ja, 'quiz', ExamType.ACADEMIC)}
               className="flex-1 md:flex-none px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-bold shadow-sm transition-colors text-sm whitespace-nowrap"
             >
               学科 Quiz
             </button>
             <button
               onClick={() => onSelectChapter(categoryData.ja, 'quiz', ExamType.PRACTICAL)}
               className="flex-1 md:flex-none px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold shadow-sm transition-colors text-sm whitespace-nowrap"
             >
               実技 Quiz
             </button>
           </div>
        </div>

        {chapters.map((chapter, index) => (
          <div
            key={index}
            className="flex flex-col p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all h-full"
          >
            <div className="flex-grow mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="inline-block px-2 py-1 bg-gray-100 text-gray-500 text-[10px] font-bold rounded uppercase">
                  Chapter {index + 1}
                </span>
              </div>
              <h3 className="font-bold text-gray-800 text-lg leading-snug">
                {chapter}
              </h3>
            </div>
            
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-50 mt-2">
               {/* Row 1: Study */}
               <button
                 onClick={() => onSelectChapter(chapter, 'study')}
                 className="w-full py-2 px-4 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 hover:text-emerald-800 font-bold text-sm transition-colors flex items-center justify-center gap-1.5"
               >
                 <span>📖</span> Study
               </button>
               
               {/* Row 2: Quizzes */}
               <div className="grid grid-cols-2 gap-2">
                 <button
                   onClick={() => onSelectChapter(chapter, 'quiz', ExamType.ACADEMIC)}
                   className="py-2 px-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 hover:text-indigo-800 font-bold text-sm transition-colors flex items-center justify-center gap-1"
                 >
                   <span>📝</span> 学科
                 </button>
                 <button
                   onClick={() => onSelectChapter(chapter, 'quiz', ExamType.PRACTICAL)}
                   className="py-2 px-2 rounded-lg bg-orange-50 text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-bold text-sm transition-colors flex items-center justify-center gap-1"
                 >
                   <span>💻</span> 実技
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};