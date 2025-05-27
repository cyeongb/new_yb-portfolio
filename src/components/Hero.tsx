import { useState, useEffect } from 'react';

// 기술 스택 이미지 목록
const techStackImages = [
  'ApacheTomcat.png',
  'Bootstrap.png',
  'C.png',
  'CSharp.png',
  'C++ (CPlusPlus).png',
  'CSS3.png',
  'Eclipse IDE.png',
  'Figma.png',
  'Flask.png',
  'Git.png',
  'IntelliJ IDEA.png',
  'Java.png',
  'JavaScript.png',
  'Jenkins.png',
  'Jira.png',
  'jQuery.png',
  'Material UI.png',
  'MySQL.png',
  'NET core.png',
  'Node.js.png',
  'Oracle.png',
  'Python.png',
  'React.png',
  'Redux.png',
  'Sass.png',
  'Spring.png',
  'SQL Developer.png',
  'Tailwind CSS.png',
  'Three.js.png',
  'TortoiseGit.png',
  'TypeScript.png',
  'Visual Studio Code (VS Code).png',
  'Visual Studio.png',
];

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = ["I'm Yotta Byte", "I'm a Developer", "I'm Full-Stack"];
  const currentText = texts[currentIndex];

  // 스크롤 이벤트 핸들러 (패럴랙스 효과만)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 무한 타이핑 효과
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && typedText === currentText) {
      // 완성된 텍스트 잠시 대기 후 삭제 시작
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === '') {
      // 모든 텍스트 삭제 후 다음 텍스트로 이동
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    } else {
      // 타이핑 또는 삭제 진행
      const timeout = setTimeout(() => {
        setTypedText(prev => {
          if (isDeleting) {
            return currentText.substring(0, prev.length - 1);
          } else {
            return currentText.substring(0, prev.length + 1);
          }
        });
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isDeleting, currentText, currentIndex, texts.length]);

  // 스크롤에 따른 텍스트 변화 (스크롤 100 이상에서 변경)
  const isScrolled = scrollY > 100;

  // 패럴랙스 효과를 위한 계산
  const parallaxOffset = scrollY * 0.5; // 배경이 절반 속도로 움직임
  const contentOffset = scrollY * 0.2;  // 콘텐츠는 더 천천히 움직임

  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* 패럴랙스 배경 레이어 */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-800 light:from-gray-50 light:via-purple-50/50 light:to-gray-100"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: 'transform'
        }}
      />
      
      {/* 배경 패턴/그리드 효과 */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px)`,
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0),
            linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)
          `,
          backgroundSize: '40px 40px, 80px 80px'
        }}
      />

      {/* 플로팅 파티클 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              transform: `translateY(${parallaxOffset * (0.1 + i * 0.05)}px)`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* 메인 콘텐츠 레이어 */}
      <div 
        className="relative z-10 min-h-screen flex items-center justify-center pt-16"
        style={{
          transform: `translateY(${contentOffset}px)`,
          willChange: 'transform'
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            {/* 무한 타이핑 효과가 적용된 타이틀 */}
            <h1 className="text-4xl sm:text-6xl font-bold text-white light:text-gray-900 mb-4 min-h-[1.2em] drop-shadow-lg">
              {typedText}
              <span className="typing-cursor text-purple-400 light:text-purple-600">|</span>
            </h1>
            
            {/* 스크롤에 따라 변화하는 메인 텍스트 - 제자리에서 변경 */}
            <div className="text-6xl sm:text-8xl font-bold mb-8 transition-all duration-700 ease-in-out drop-shadow-2xl">
              <span className="text-purple-400 light:text-purple-600">It's </span>
              <span 
                className={`inline-block transition-all duration-700 ease-in-out transform ${
                  isScrolled 
                    ? 'text-blue-400 light:text-blue-500' 
                    : 'text-blue-400 light:text-blue-500'
                }`}
              >
                {isScrolled ? 'Yeong' : 'Y'}
              </span>
              <span 
                className={`inline-block transition-all duration-700 ease-in-out transform ${
                  isScrolled 
                    ? 'text-purple-400 light:text-purple-600' 
                    : 'text-purple-400 light:text-purple-600'
                }`}
              >
                {isScrolled ? 'Bi' : 'B'}
              </span>
            </div>
          </div>
          
          {/* 기술 스택 흘러가는 효과 */}
          <div className="mb-8">
            <div className="tech-stack-container">
              <div className="tech-stack-scroll">
                {/* 첫 번째 세트 */}
                {techStackImages.map((image, index) => (
                  <div
                    key={`first-${index}`}
                    className="tech-icon-wrapper"
                  >
                    <img
                      src={`/${image}`}
                      alt={image.replace('.png', '').replace(/[()]/g, '')}
                      className="tech-icon"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
                {/* 두 번째 세트 (무한 루프를 위한 복제) */}
                {techStackImages.map((image, index) => (
                  <div
                    key={`second-${index}`}
                    className="tech-icon-wrapper"
                  >
                    <img
                      src={`/${image}`}
                      alt={image.replace('.png', '').replace(/[()]/g, '')}
                      className="tech-icon"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 스크롤 표시 화살표 - 스크롤하면 페이드아웃 */}
          <div 
            className={`mt-12 transition-opacity duration-500 ${
              isScrolled ? 'opacity-0' : 'opacity-100 animate-bounce'
            }`}
          >
            <svg
              className="w-6 h-6 mx-auto text-purple-400 light:text-purple-600 drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>

          {/* 스크롤 진행 상태 표시 (디버깅용 - 필요시 제거) */}
          {/* {process.env.NODE_ENV === 'development' && (
            <div className="fixed top-20 left-4 text-white bg-black bg-opacity-50 p-2 rounded text-sm z-50">
              Scroll: {Math.round(scrollY)} | Prevent: {preventScroll.toString()}
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};