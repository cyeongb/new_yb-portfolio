import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // 로컬 스토리지에서 테마 설정 확인
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // 시스템 설정 확인
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
  const root = window.document.documentElement;
  if (isDark) {
    root.classList.add('dark');
    root.classList.remove('light');
    // console.log('Dark mode:', root.classList);
    localStorage.setItem('theme', 'dark');
  } else {
    root.classList.remove('dark'); 
    root.classList.add('light');     
    // console.log('Light mode:', root.classList);
    localStorage.setItem('theme', 'light');
  }
}, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return { isDark, toggleTheme };
};