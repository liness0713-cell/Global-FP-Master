import React, { useState } from 'react';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { FPLevel, ExamType } from './types';

const App: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState<FPLevel | null>(null);
  const [currentType, setCurrentType] = useState<ExamType | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const [isQuizActive, setIsQuizActive] = useState(false);

  const handleStart = (level: FPLevel, type: ExamType, category?: string) => {
    setCurrentLevel(level);
    setCurrentType(type);
    setCurrentCategory(category || null);
    setIsQuizActive(true);
  };

  const handleBack = () => {
    setIsQuizActive(false);
    setCurrentCategory(null);
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-50 text-gray-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation / Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={handleBack}>
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
        {isQuizActive && currentLevel && currentType ? (
          <Quiz 
            level={currentLevel} 
            type={currentType} 
            category={currentCategory}
            onBack={handleBack} 
          />
        ) : (
          <Home onStart={handleStart} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-8">
         <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Global FP Master. Powered by Google Gemini.
            </p>
            <p className="text-gray-300 text-xs mt-2">
              Disclaimer: Content is AI-generated for study practice purposes.
            </p>
         </div>
      </footer>
    </div>
  );
};

export default App;