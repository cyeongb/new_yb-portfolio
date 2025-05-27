export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
          
          {/* 네비게이션 메뉴 */}
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

          {/* 모바일 메뉴 버튼 (필요시 추가) */}
          <div className="md:hidden">
            <button className="text-gray-300 light:text-gray-700 hover:text-purple-400 light:hover:text-purple-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};