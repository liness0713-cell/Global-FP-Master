import React, { useState } from 'react';
import { FPLevel, ExamType } from '../types';
import { LEVELS, EXAM_TYPES, FP_CATEGORIES_DATA } from '../constants';

interface HomeProps {
  onStart: (level: FPLevel, type: ExamType, category?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onStart }) => {
  const [selectedLevel, setSelectedLevel] = useState<FPLevel>(FPLevel.LEVEL_3);
  const [selectedType, setSelectedType] = useState<ExamType>(ExamType.ACADEMIC);

  // Tabs for Level Selection
  const renderLevelSelector = () => (
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
      {LEVELS.map((level) => (
        <button
          key={level.id}
          onClick={() => setSelectedLevel(level.id)}
          className={`
            relative px-6 py-4 rounded-xl text-left border-2 transition-all flex-1 md:flex-none md:w-48
            ${selectedLevel === level.id 
              ? `${level.border} ${level.bgLight} shadow-md transform scale-105 z-10` 
              : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-500'}
          `}
        >
           <div className={`text-xl font-bold ${selectedLevel === level.id ? 'text-gray-900' : ''}`}>
             {level.label}
           </div>
           <div className="text-xs font-medium uppercase tracking-wide mt-1">
             {level.sub}
           </div>
           {selectedLevel === level.id && (
             <div className={`absolute top-0 right-0 w-3 h-3 rounded-full m-2 ${level.color}`} />
           )}
        </button>
      ))}
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-teal-500">
            Global FP Master
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pass the Financial Planner Skills Test with structured AI-powered learning.
          <br/>
          <span className="text-sm text-gray-400">Choose your level and study mode below.</span>
        </p>
      </div>

      {/* Step 1: Level Selection */}
      {renderLevelSelector()}

      <div className="grid lg:grid-cols-12 gap-8">
        {/* Left Column: Comprehensive Exam */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 h-full flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-2xl">📝</span> Comprehensive Exam
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Simulate the real exam environment with random questions from all categories mixed together.
            </p>

            <div className="space-y-3 mb-6">
               <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Exam Format</label>
               <div className="grid grid-cols-2 gap-2">
                 {EXAM_TYPES.map((type) => (
                   <button
                     key={type.id}
                     onClick={() => setSelectedType(type.id)}
                     className={`
                       p-2 rounded-lg text-sm font-bold border transition-all
                       ${selectedType === type.id 
                         ? 'bg-gray-800 text-white border-gray-800' 
                         : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}
                     `}
                   >
                     {type.label.split("試験")[0]}
                   </button>
                 ))}
               </div>
            </div>

            <div className="mt-auto">
              <button
                onClick={() => onStart(selectedLevel, selectedType)}
                className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Start Mock Exam</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Category Drills */}
        <div className="lg:col-span-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
              <span className="text-2xl">📚</span> Study by Field
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Focus on specific weaknesses. Select a field to start a specialized drill.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FP_CATEGORIES_DATA.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onStart(selectedLevel, selectedType, cat.ja)}
                  className={`
                    p-4 rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all text-left group
                    ${cat.color.replace('text-', 'bg-opacity-10 ')}
                  `}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{cat.icon}</span>
                    <span className={`text-xs px-2 py-1 rounded-full bg-white font-bold opacity-0 group-hover:opacity-100 transition-opacity ${cat.color.split(" ")[1]}`}>
                      START
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 leading-tight mb-1">{cat.ja}</h3>
                  <p className="text-xs text-gray-500">{cat.en}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-400 text-sm">
           Select <span className="font-bold text-gray-600">実技 (Practical)</span> or <span className="font-bold text-gray-600">学科 (Academic)</span> in the left panel to change question style for all modes.
        </p>
      </div>
    </div>
  );
};