import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isKorean: boolean;
  isEnglish: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ko');

  useEffect(() => {
    // localStorage에서 저장된 언어 설정 불러오기
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // HTML 클래스 업데이트
    const htmlElement = document.documentElement;
    if (language === 'en') {
      htmlElement.classList.add('english');
      htmlElement.classList.remove('korean');
    } else {
      htmlElement.classList.add('korean');
      htmlElement.classList.remove('english');
    }
    
    // localStorage에 언어 설정 저장
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ko' ? 'en' : 'ko');
  };

  const value = {
    language,
    toggleLanguage,
    isKorean: language === 'ko',
    isEnglish: language === 'en'
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};