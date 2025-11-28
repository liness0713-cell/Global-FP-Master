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

  // Helper to remove Ruby tags for clean TTS reading
  // <ruby>漢字<rt>かんじ</rt></ruby> -> 漢字
  const cleanText = (html: string) => {
    return html.replace(/<rt>.*?<\/rt>/g, '').replace(/<[^>]+>/g, '');
  };

  const handleSpeak = (text: string, lang: string) => {
    if (!window.speechSynthesis) return;
    
    // Cancel any currently playing audio
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 1.0; 
    
    // Try to select a better voice if available (optional)
    // const voices = window.speechSynthesis.getVoices();
    // const voice = voices.find(v => v.lang.includes(lang));
    // if (voice) utterance.voice = voice;

    window.speechSynthesis.speak(utterance);
  };

  const SpeakerIcon = ({ onClick, className = "" }: { onClick: () => void, className?: string }) => (
    <button 
      onClick={(e) => { 
        e.stopPropagation(); 
        onClick(); 
      }}
      className={`
        p-1.5 rounded-full flex-shrink-0 transition-colors
        text-gray-300 hover:text-indigo-600 hover:bg-indigo-50
        ${className}
      `}
      title="Read aloud"
      aria-label="Read aloud"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 001.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06zM18.584 5.106a.75.75 0 011.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 11-1.06-1.06 2.368 2.368 0 010-3.35 3.068 3.068 0 000-4.332 2.368 2.368 0 010-3.35.75.75 0 010-1.06z" />
        <path d="M15.932 7.757a.75.75 0 011.061 0 6 6 0 010 8.486.75.75 0 01-1.06-1.061 4.5 4.5 0 000-6.364.75.75 0 010-1.06z" />
      </svg>
    </button>
  );

  return (
    <div className={`space-y-3 ${className}`}>
      {label && <div className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-1">{label}</div>}
      
      {/* Japanese Section with Ruby Toggle */}
      <div className="flex items-start gap-2 group">
        <div 
          className={`flex-grow text-lg md:text-xl font-bold leading-relaxed ruby-text ${primaryColor} ${!showKana ? 'hide-ruby' : ''}`}
          dangerouslySetInnerHTML={{ __html: content.ja }}
        />
        <SpeakerIcon 
          onClick={() => handleSpeak(cleanText(content.ja), 'ja-JP')} 
          className="mt-1"
        />
      </div>

      {/* Translations Group */}
      <div className="space-y-2 pl-3 border-l-2 border-gray-200">
        {/* CN */}
        <div className="flex items-start gap-2 group">
           <span className="inline-block w-6 font-bold text-gray-400 text-xs align-middle mt-1 flex-shrink-0">CN</span>
           <span className="flex-grow text-sm md:text-base text-gray-600">{content.cn}</span>
           <SpeakerIcon 
             onClick={() => handleSpeak(content.cn, 'zh-CN')} 
           />
        </div>
        {/* EN */}
        <div className="flex items-start gap-2 group font-sans">
          <span className="inline-block w-6 font-bold text-gray-400 text-xs align-middle mt-1 flex-shrink-0">EN</span>
          <span className="flex-grow text-sm md:text-base text-gray-600">{content.en}</span>
          <SpeakerIcon 
            onClick={() => handleSpeak(content.en, 'en-US')} 
          />
        </div>
      </div>
    </div>
  );
};