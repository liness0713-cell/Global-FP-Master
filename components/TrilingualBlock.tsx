import React from 'react';
import { TrilingualText } from '../types';

interface TrilingualBlockProps {
  content: TrilingualText;
  showKana: boolean;
  className?: string;
  label?: string;
  primaryColor?: string;
}

export const TrilingualBlock: React.FC<TrilingualBlockProps> = ({ 
  content, 
  showKana, 
  className = "", 
  label,
  primaryColor = "text-gray-900"
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {label && <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{label}</div>}
      
      {/* Japanese Section with Ruby Toggle */}
      <div 
        className={`text-lg md:text-xl font-bold leading-relaxed ruby-text ${primaryColor} ${!showKana ? 'hide-ruby' : ''}`}
        dangerouslySetInnerHTML={{ __html: content.ja }}
      />

      {/* Translations Group */}
      <div className="space-y-1.5 pl-3 border-l-2 border-gray-200">
        <div className="text-sm md:text-base text-gray-600">
          <span className="inline-block w-6 font-bold text-gray-400 text-xs align-middle">CN</span>
          {content.cn}
        </div>
        <div className="text-sm md:text-base text-gray-600 font-sans">
          <span className="inline-block w-6 font-bold text-gray-400 text-xs align-middle">EN</span>
          {content.en}
        </div>
      </div>
    </div>
  );
};