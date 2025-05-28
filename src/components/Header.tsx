import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import { LanguageToggle } from './LanguageToggle';
// import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const { isKorean } = useLanguage();


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    // 모바일 메뉴 닫기
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // 모바일 메뉴 닫기
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900/90 light:bg-white/90 backdrop-blur-sm border-b border-gray-700 light:border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고/브랜드 - 메인으로 이동 */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 group transition-all duration-300 hover:scale-110"
          >
            <div className="w-8 h-8 bg-purple-500 light:bg-purple-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-purple-400 light:group-hover:bg-purple-700 group-hover:shadow-lg group-hover:shadow-purple-500/50">
              <span className="text-white font-bold text-sm transition-all duration-300 group-hover:text-lg">YB</span>
            </div>
            <span className="text-xl font-bold text-white light:text-gray-900 transition-all duration-300 group-hover:text-purple-400 light:group-hover:text-purple-600 group-hover:scale-105">
              Yeong Bi
            </span>
          </button>
                     
          {/* 데스크톱 네비게이션 메뉴 */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 hover:font-semibold"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 hover:font-semibold"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 hover:font-semibold"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-300 font-medium hover:scale-110 hover:font-semibold"
            >
              Contact
            </button>
          </nav>
           
          {/* 모바일 햄버거 메뉴 버튼 */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-300 hover:scale-110"
              aria-label="메뉴 토글"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 - 드롭다운 */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-64 opacity-100 pb-4' 
            : 'max-h-0 opacity-0 pb-0'
        }`}>
          <nav className="flex flex-col space-y-3 pt-4 border-t border-gray-700 light:border-gray-200">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-4 py-2 text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 hover:bg-gray-800/50 light:hover:bg-gray-100 transition-all duration-300 font-medium rounded-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left px-4 py-2 text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 hover:bg-gray-800/50 light:hover:bg-gray-100 transition-all duration-300 font-medium rounded-lg"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="text-left px-4 py-2 text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 hover:bg-gray-800/50 light:hover:bg-gray-100 transition-all duration-300 font-medium rounded-lg"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-4 py-2 text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600 hover:bg-gray-800/50 light:hover:bg-gray-100 transition-all duration-300 font-medium rounded-lg"
            >
              Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};