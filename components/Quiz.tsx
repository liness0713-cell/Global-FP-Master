import React, { useState, useEffect, useCallback } from 'react';
import { generateQuestion } from '../services/geminiService';
import { FPLevel, ExamType, Question } from '../types';
import { TrilingualBlock } from './TrilingualBlock';
import { LanguageToggle } from './LanguageToggle';

interface QuizProps {
  level: FPLevel;
  type: ExamType;
  chapter: string | null;
  onBack: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ level, type, chapter, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showKana, setShowKana] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);

  const fetchQuestion = useCallback(async () => {
    setLoading(true);
    setError(null);
    setQuestion(null);
    setSelectedOptionId(null);
    setIsCorrect(null);
    
    try {
      const q = await generateQuestion(level, type, chapter);
      setQuestion(q);
    } catch (err) {
      setError("Failed to load question. Please check your connection or API limit.");
    } finally {
      setLoading(false);
    }
  }, [level, type, chapter]);

  useEffect(() => {
    fetchQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOptionClick = (optionId: string) => {
    if (selectedOptionId) return; // Prevent changing answer
    setSelectedOptionId(optionId);
    
    const correct = optionId === question?.correctOptionId;
    setIsCorrect(correct);
    if (correct) {
      setStreak(s => s + 1);
    } else {
      setStreak(0);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={onBack}
            className="text-gray-500 hover:text-gray-800 font-medium flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Menu
          </button>
          <div className="h-6 w-px bg-gray-200"></div>
          <div>
            <div className="text-xs text-gray-400 font-bold uppercase">Mode</div>
            <div className="text-sm font-bold text-gray-800 max-w-[200px] md:max-w-xs truncate">
               {chapter ? chapter : "Comprehensive Mock Exam"}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
           <div className="flex items-center gap-2 text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span className="hidden sm:inline">Streak:</span> {streak}
          </div>
          <LanguageToggle showKana={showKana} onToggle={() => setShowKana(!showKana)} />
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="text-gray-500 animate-pulse">Generating new question...</p>
        </div>
      )}

      {error && (
        <div className="text-center p-8 bg-red-50 rounded-xl border border-red-100">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={fetchQuestion}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && question && (
        <div className="space-y-8 animate-fade-in">
          {/* Question Card */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-bl-lg border-l border-b border-indigo-200">
                {question.category}
             </div>
             <TrilingualBlock content={question.text} showKana={showKana} label="Question" />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option) => {
              let stateClass = "border-gray-200 hover:border-indigo-400 hover:bg-indigo-50 bg-white cursor-pointer";
              
              if (selectedOptionId) {
                if (option.id === question.correctOptionId) {
                  stateClass = "border-green-500 bg-green-50 ring-1 ring-green-500 cursor-default";
                } else if (option.id === selectedOptionId) {
                  stateClass = "border-red-500 bg-red-50 cursor-default";
                } else {
                  stateClass = "border-gray-100 opacity-50 cursor-default";
                }
              }

              return (
                <div
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleOptionClick(option.id);
                    }
                  }}
                  className={`
                    w-full text-left p-5 rounded-xl border-2 transition-all duration-200
                    flex flex-col gap-1 relative
                    ${stateClass}
                  `}
                >
                  <TrilingualBlock 
                    content={option.text} 
                    showKana={showKana} 
                    className="space-y-1" 
                    primaryColor="text-gray-800 text-base font-medium"
                  />
                  
                  {selectedOptionId && option.id === question.correctOptionId && (
                     <div className="absolute right-4 top-1/2 -translate-y-1/2 text-green-600">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                     </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Explanation Section (Revealed after answer) */}
          {selectedOptionId && (
            <div className={`
              rounded-2xl p-6 md:p-8 shadow-inner border-2 
              ${isCorrect ? 'bg-green-50 border-green-100' : 'bg-orange-50 border-orange-100'}
            `}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`
                  p-2 rounded-full 
                  ${isCorrect ? 'bg-green-200 text-green-800' : 'bg-orange-200 text-orange-800'}
                `}>
                  {isCorrect 
                    ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  }
                </div>
                <h3 className={`text-xl font-bold ${isCorrect ? 'text-green-800' : 'text-orange-800'}`}>
                  {isCorrect ? 'Correct! / 正解 / 回答正确' : 'Incorrect / 不正解 / 回答错误'}
                </h3>
              </div>
              
              <TrilingualBlock content={question.explanation} showKana={showKana} label="Explanation / 解説 / 解析" />

              <div className="mt-8 flex justify-end">
                <button
                  onClick={fetchQuestion}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 transform hover:-translate-y-1"
                >
                  <span>Next Question</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};