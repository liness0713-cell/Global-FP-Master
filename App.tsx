import React, { useState } from 'react';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { StudyView } from './components/StudyView';
import { ChapterSelect } from './components/ChapterSelect';
import { FPLevel, ExamType } from './types';

type ViewState = 'home' | 'chapters' | 'quiz' | 'study';

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<FPLevel | null>(null);
  const [currentType, setCurrentType] = useState<ExamType | null>(null);
  const [currentCategoryId, setCurrentCategoryId] = useState<string | null>(null);
  const [currentChapter, setCurrentChapter] = useState<string | null>(null);
  const [view, setView] = useState<ViewState>('home');

  const handleStart = (level: FPLevel, type: ExamType, categoryId?: string) => {
    setCurrentLevel(level);
    setCurrentType(type);
    
    if (categoryId) {
      // If a category is selected, go to Chapter Select screen
      setCurrentCategoryId(categoryId);
      setView('chapters');
    } else {
      // If Mock Exam (no category), go straight to Quiz
      setCurrentCategoryId(null);
      setCurrentChapter(null);
      setView('quiz');
    }
  };

  const handleChapterSelect = (chapterName: string, mode: 'quiz' | 'study', examType?: ExamType) => {
    setCurrentChapter(chapterName);
    
    // If a specific exam type is requested (e.g. Practical from chapter list), update it.
    if (examType) {
      setCurrentType(examType);
    }
    
    setView(mode);
  };

  const handleBackToHome = () => {
    setView('home');
    setCurrentCategoryId(null);
    setCurrentChapter(null);
  };

  const handleBackToChapters = () => {
    if (currentCategoryId) {
      setView('chapters');
      setCurrentChapter(null);
    } else {
      handleBackToHome();
    }
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation / Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={handleBackToHome}>
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-sm">
                FP
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Global FP Master</span>
            </div>
            
            <div className="flex items-center space-x-4">
               <span className="hidden md:block text-gray-400 text-xs">AI Powered Study Tool</span>
               <div className="h-4 w-px bg-gray-300 hidden md:block"></div>
               <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">Beta</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {view === 'quiz' && currentLevel && currentType && (
          <Quiz 
            level={currentLevel} 
            type={currentType} 
            chapter={currentChapter} // Pass the specific chapter
            onBack={handleBackToChapters} 
          />
        )}

        {view === 'study' && currentLevel && currentChapter && (
           <StudyView
             level={currentLevel}
             chapter={currentChapter}
             onBack={handleBackToChapters}
           />
        )}

        {view === 'chapters' && currentLevel && currentCategoryId && (
          <ChapterSelect
            level={currentLevel}
            categoryId={currentCategoryId}
            onBack={handleBackToHome}
            onSelectChapter={handleChapterSelect}
          />
        )}

        {view === 'home' && (
          <Home onStart={handleStart} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-8">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Global FP Master. Powered by Google Gemini.
            </p>
            <p className="text-gray-300 text-xs mt-2 mb-4">
              Disclaimer: Content is AI-generated for study practice purposes.
            </p>
            
            {/* Friend Link */}
            <div className="text-sm text-gray-500 pt-4 border-t border-gray-100 w-full max-w-xs mx-auto">
              <span className="text-xs text-gray-400 mr-2">Friend Link:</span>
              <a 
                href="https://blog.gyuba-chan.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-500 hover:text-indigo-700 hover:underline transition-colors font-medium"
              >
                千葉２狗 🐶
              </a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
