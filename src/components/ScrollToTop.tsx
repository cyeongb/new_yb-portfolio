import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤 위치에 따라 버튼 표시/숨김
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 bg-gray-800 light:bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600 light:border-gray-200 hover:scale-110 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
      }`}
      aria-label="맨 위로 이동"
    >
      <ArrowUp className="w-5 h-5 text-gray-300 light:text-gray-600 transition-all duration-300 group-hover:text-purple-400 light:group-hover:text-purple-600 group-hover:-translate-y-0.5" />
      
      {/* 호버시 툴팁 */}
      <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-gray-900 light:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        맨 위로
      </div>
    </button>
  );
};