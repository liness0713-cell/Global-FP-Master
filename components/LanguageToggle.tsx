import React from 'react';

interface LanguageToggleProps {
  showKana: boolean;
  onToggle: () => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ showKana, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all
        ${showKana 
          ? 'bg-green-100 text-green-700 ring-2 ring-green-500' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
      `}
    >
      <span className="text-xs font-bold border border-current rounded px-1">あ</span>
      <span>{showKana ? 'Kana Mode ON' : 'Kana Mode OFF'}</span>
    </button>
  );
};
