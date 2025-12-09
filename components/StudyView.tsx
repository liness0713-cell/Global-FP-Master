
import React, { useState, useEffect, useCallback } from 'react';
import { generateStudyNote } from '../services/geminiService';
import { getStaticStudyNote } from '../data/staticStudyData';
import { FPLevel, StudyNote } from '../types';
import { TrilingualBlock } from './TrilingualBlock';
import { LanguageToggle } from './LanguageToggle';

interface StudyViewProps {
  level: FPLevel;
  chapter: string;
  onBack: () => void;
}

export const StudyView: React.FC<StudyViewProps> = ({ level, chapter, onBack }) => {
  const [loading, setLoading] = useState(true);
  const [note, setNote] = useState<StudyNote | null>(null);
  const [showKana, setShowKana] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUsingStatic, setIsUsingStatic] = useState(false);

  const fetchNote = useCallback(async (forceRefresh = false) => {
    setLoading(true);
    setError(null);
    setNote(null);
    setIsUsingStatic(false);
    
    // 1. Try to load offline/static content first
    if (!forceRefresh) {
      const staticData = getStaticStudyNote(level, chapter);
      if (staticData) {
        // Add a small artificial delay just to make the transition feel smoother, or remove it for instant speed.
        // For now, instantaneous.
        setNote(staticData);
        setIsUsingStatic(true);
        setLoading(false);
        return;
      }
    }

    // 2. Fallback to AI generation
    try {
      const data = await generateStudyNote(level, chapter);
      setNote(data);
    } catch (err) {
      setError("Failed to generate study content. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }, [level, chapter]);

  useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 pb-24">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6 bg-white p-4 rounded-xl shadow-sm border border-gray-100 sticky top-20 z-40">
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button 
            onClick={onBack}
            className="text-gray-500 hover:text-gray-800 font-medium flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back
          </button>
          <div className="h-6 w-px bg-gray-200"></div>
          <div>
            <div className="text-xs text-gray-400 font-bold uppercase">Topic</div>
            <div className="text-sm font-bold text-gray-800 max-w-[200px] md:max-w-xs truncate">
               {chapter}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
          <LanguageToggle showKana={showKana} onToggle={() => setShowKana(!showKana)} />
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center h-64 space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          <p className="text-gray-500 animate-pulse">
            {isUsingStatic ? "Loading content..." : "AI generating study notes..."}
          </p>
        </div>
      )}

      {error && (
        <div className="text-center p-8 bg-red-50 rounded-xl border border-red-100">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => fetchNote(true)}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      )}

      {!loading && !error && note && (
        <div className="space-y-8 animate-fade-in">
          {/* Title Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-white p-6 md:p-10 rounded-3xl shadow-sm border border-indigo-100 text-center relative overflow-hidden">
             {isUsingStatic && (
               <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-1 rounded-full border border-teal-100">
                 <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                 OFFLINE READY
               </div>
             )}
             <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-4 text-3xl">📖</div>
             <TrilingualBlock 
               content={note.title} 
               showKana={showKana} 
               className="justify-center text-center"
               primaryColor="text-gray-900 text-2xl md:text-3xl"
             />
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {note.sections.map((section, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="mb-4 pb-4 border-b border-gray-100 flex items-start gap-3">
                   <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-700 font-bold rounded-lg text-sm">
                     {idx + 1}
                   </span>
                   <div className="flex-grow">
                     <TrilingualBlock 
                       content={section.title} 
                       showKana={showKana} 
                       primaryColor="text-gray-800 text-xl"
                     />
                   </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <TrilingualBlock 
                    content={section.content} 
                    showKana={showKana} 
                    primaryColor="text-gray-700 leading-relaxed"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="flex justify-center pt-8 pb-8">
            <button
               onClick={() => fetchNote(true)}
               className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors border border-transparent hover:border-indigo-100"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
              <span>{isUsingStatic ? "Regenerate with AI (Updates Content)" : "Regenerate Content"}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
