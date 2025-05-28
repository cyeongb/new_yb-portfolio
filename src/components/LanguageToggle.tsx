import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
  const { toggleLanguage, isKorean } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-16 h-8 bg-gray-700 light:bg-gray-300 rounded-full transition-all duration-300 hover:bg-gray-600 light:hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
      aria-label={`Switch to ${isKorean ? 'English' : 'Korean'}`}
    >
      {/* 토글 배경 */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div 
          className={`absolute top-0 bottom-0 w-1/2 bg-purple-500 transition-transform duration-300 ${
            isKorean ? 'translate-x-full' : 'translate-x-0'
          }`}
        />
      </div>
      
      {/* 텍스트 레이블 */}
      <div className="relative h-full flex">
        <div className={`flex-1 flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
          !isKorean ? 'text-white' : 'text-gray-400 light:text-gray-600'
        }`}>
          A
        </div>
        <div className={`flex-1 flex items-center justify-center text-xs font-medium transition-colors duration-300 ${
          isKorean ? 'text-white' : 'text-gray-400 light:text-gray-600'
        }`}>
          한
        </div>
      </div>
    </button>
  );
};