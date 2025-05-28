import { useState,useEffect, useRef } from 'react';
import { ExternalLink, Github, Heart, ChevronDown } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: 'TebiBox',
    description: [
      '고객사(tebihome)측에서 받은 디자인을 토대로 퍼블리싱, 프론트 개발 진행함',
      'React.js를 활용한 반응형 웹 애플리케이션 구축',
      '유치원 원장님,선생님과 학부모 및 일반사용자가 사용하는 유치원 홈페이지 제작',
      '학부모와 유치원선생님들이 서로 주고받는 알림장, 게시판, 앨범, 푸시알림, 각종 프로그램으로 구성',
    ],
    techStack: 'React.js, Javascript(ES6), Redux-thunk, Material-ui, React-Admin,  Figma',
    image: '/tebibox.png',
    githubUrl: '',
    liveUrl: 'https://www.tebibox.com/',
    notion:''
  },
  {
    title: 'Stock-Dashboard',
    description: [
      'yfinance 를 활용한 실시간 주식 시장 데이터를 활용한 주가 예측 대시보드',
      '실시간 주가 데이터 업데이트 하여 일별/주별/월별/연별 차트 구현',
      '선형회귀 모델을 사용한 미국 주가 예측',
      '즐겨찾기 기능으로 주식 추가하여 저장 및 관리 가능',
      '선형 차트, 캔들스틱 차트로 데이터 시각화 구현.'
    ],
    techStack: 'Python, React.js, scikit-learn, yfinance, Flask, Plotly.js, Axios',
    image: '/stock.png',
    githubUrl: 'https://github.com/cyeongb/stock-prediction',
    liveUrl: 'https://stock-frontend-dusky.vercel.app/dashboard',
    notion:'https://www.notion.so/cyeongb/5-_-1e3aa4605a0b80a08ed7f9e38e367c0b?pvs=4'
  },
  {
    title: 'Korea Pension Info',
    description: [
      '공공데이터 API 연동을 통한 실시간 연금 정보 제공',
      '법정동 코드 및 나이로 지역별 연금 정보 조회 가능',
      '주소창에 입력하면, 해당 이름으로 db 에 저장되어있는 법정동 코드로 API 요청을 보내 데이터를 받는 형식으로 개발.',
      '지역별 가입 현황 조회, 수급현황 조회, 나이별 가입, 수급현황 조회 기능 구현.',
      '추후 4% 인상되는 "4% 인상시 납부금액"을 구현하여  현재 납부금액과 비교 가능.'
    ],
    techStack: 'Mysql, React.js, Express.js, Node.js, Axios, Tailwind CSS, 공공데이터API',
    image: '/pension.png',
    githubUrl: 'https://github.com/cyeongb/pension-api-project',
    liveUrl: '',
    notion:'https://www.notion.so/cyeongb/3-1ceaa4605a0b8079a78ec0a027686b6b?pvs=4'
  },
  {
    title: 'Travel Vlog',
    description: [
      '고객사(tebihome)측에서 받은 디자인을 토대로 퍼블리싱, 프론트 개발 진행함',
      'React.js를 활용한 반응형 웹 애플리케이션 구축',
      '유치원 원장님,선생님과 학부모 및 일반사용자가 사용하는 유치원 홈페이지 제작',
      '학부모와 유치원선생님들이 서로 주고받는 알림장, 게시판, 앨범, 푸시알림, 각종 프로그램으로 구성',
    ],
    techStack: 'Javascript, 반응형, Google map API, Youtube Iframe API, HTML & CSS',
    image: '/travel.png',
    githubUrl: 'https://github.com/cyeongb/project2',
    liveUrl: 'https://cyeongb.github.io/project2/',
    notion:'https://www.notion.so/cyeongb/2-YB-s-Travel-1ceaa4605a0b8036b6fefccb04eafc97?pvs=4'
  }
];

export const Work = () => {
  const [showMore, setShowMore] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const toggleMore = () => {
    setShowMore(!showMore);
    
    if (!showMore) {
      // 펼칠 때 - 잠시 후 아래로 스크롤
      setTimeout(() => {
        const element = document.getElementById('work');
        if (element) {
          const elementRect = element.getBoundingClientRect();
          const elementBottom = elementRect.bottom + window.scrollY;
          window.scrollTo({
            top: elementBottom - window.innerHeight + 100,
            behavior: 'smooth'
          });
        }
      }, 350);
    } else {
      // 접을 때 - 원래 위치로 스크롤
      setTimeout(() => {
        const element = document.getElementById('work');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <section ref={sectionRef} id="work" className="py-20 bg-gray-900 light:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`work-underline border-b border-gray-600 light:border-gray-300 pb-4 inline-block ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white light:text-gray-900">
              Work
            </h2>
          </div>
          <p className="text-gray-400 light:text-gray-600 mt-4 text-lg">
            that I've built
          </p>
        </div>
        
        {/* 기본 2개 프로젝트 */}
        <div className="space-y-16">
          {projects.slice(0, 2).map((project, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* 프로젝트 이미지 */}
              <div className="w-full lg:w-1/2">
                <div className="bg-gray-800 light:bg-gray-100 rounded-lg p-8 aspect-video flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <div className="text-center">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
                    />
                  </div>
                </div>
              </div>
              
              {/* 프로젝트 정보 */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-purple-400 light:text-purple-600 mb-3 hover:text-purple-300 light:hover:text-purple-700 hover:scale-105 transition-all duration-200 cursor-pointer inline-block">
                    {project.title}
                  </h3>
                  
                  <div className="bg-gray-800 light:bg-gray-50 rounded-lg p-6 shadow-lg">
                    <ul className="space-y-2">
                      {project.description.map((desc, idx) => (
                        <li key={idx} className="text-gray-300 light:text-gray-700 text-sm leading-relaxed flex items-start">
                          <span className="text-purple-400 light:text-purple-600 mr-3 mt-1.5 text-xs">●</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* 기술 스택 태그 */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.split(', ').map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-purple-900/20 light:bg-purple-100 text-purple-300 light:text-purple-700 text-xs rounded-full border border-purple-500/30 light:border-purple-300 hover:bg-purple-800/30 light:hover:bg-purple-200 hover:scale-105 hover:border-purple-400 light:hover:border-purple-400 transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* 링크 버튼들 */}
                <div className="flex items-center space-x-4">
                  {/* GitHub 링크 */}
                  {project.githubUrl && project.githubUrl.trim() !== '' ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group"
                    >
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">github</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-600 light:text-gray-400 opacity-50 cursor-not-allowed">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">github</span>
                    </div>
                  )}

                  {/* Live URL 링크 */}
                  {project.liveUrl && project.liveUrl.trim() !== '' ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Link</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-600 light:text-gray-400 opacity-50 cursor-not-allowed">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Link</span>
                    </div>
                  )}

                  {/* Notion 링크 */}
                  {project.notion && project.notion.trim() !== '' ? (
                    <a
                      href={project.notion}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-red-400 light:hover:text-red-500 transition-all duration-200 hover:scale-105 group"
                    >
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:fill-current" />
                      <span className="text-sm font-medium">Notion</span>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-600 light:text-gray-400 opacity-50 cursor-not-allowed">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">Notion</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MORE 버튼 */}
        <div className="text-center mt-16">
          <button
            onClick={toggleMore}
            className="group relative"
          >
            {/* MORE 텍스트 - 접혀있을 때만 표시 */}
            {!showMore && (
              <div className="flex items-center justify-center space-x-3 mb-2 transition-all duration-300">
                <span className="text-2xl font-bold text-purple-400 light:text-purple-600 group-hover:text-purple-300 light:group-hover:text-purple-700 transition-all duration-300 group-hover:scale-110">
                  M
                </span>
                <span className="text-2xl font-bold text-purple-400 light:text-purple-600 group-hover:text-purple-300 light:group-hover:text-purple-700 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '50ms' }}>
                  O
                </span>
                <span className="text-2xl font-bold text-purple-400 light:text-purple-600 group-hover:text-purple-300 light:group-hover:text-purple-700 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '100ms' }}>
                  R
                </span>
                <span className="text-2xl font-bold text-purple-400 light:text-purple-600 group-hover:text-purple-300 light:group-hover:text-purple-700 transition-all duration-300 group-hover:scale-110" style={{ transitionDelay: '150ms' }}>
                  E
                </span>
              </div>
            )}
            
            {/* 하단 라인 - 항상 표시 */}
            <div className={`bg-gray-600 light:bg-gray-300 mx-auto mb-2 group-hover:bg-purple-400 light:group-hover:bg-purple-600 transition-all duration-500 ${
              showMore ? 'w-32 h-0.5' : 'w-24 h-0.5'
            }`}></div>
            
            {/* 화살표 아이콘 - 항상 표시 */}
            <div className="flex justify-center">
              <ChevronDown 
                className={`w-6 h-6 text-gray-400 light:text-gray-600 group-hover:text-purple-400 light:group-hover:text-purple-600 group-hover:scale-110 transition-all duration-500 ${
                  showMore ? 'rotate-180' : 'rotate-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* 추가 프로젝트들 - 부드러운 애니메이션 */}
        <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
          showMore ? 'max-h-[2000px] opacity-100 mt-16' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="space-y-16">
            {projects.slice(2).map((project, index) => (
              <div 
                key={index + 2}
                className={`flex flex-col ${(index + 2) % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center transform transition-all duration-700 ${
                  showMore ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* 프로젝트 이미지 */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-gray-800 light:bg-gray-100 rounded-lg p-8 aspect-video flex items-center justify-center transition-all duration-300 hover:scale-105 cursor-pointer group">
                    <div className="text-center">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const placeholder = target.nextElementSibling as HTMLElement;
                          if (placeholder) {
                            placeholder.style.display = 'flex';
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
                
                {/* 프로젝트 정보 */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400 light:text-purple-600 mb-3 hover:text-purple-300 light:hover:text-purple-700 hover:scale-105 transition-all duration-200 cursor-pointer inline-block">
                      {project.title}
                    </h3>
                    
                    <div className="bg-gray-800 light:bg-gray-50 rounded-lg p-6 shadow-lg">
                      <ul className="space-y-2">
                        {project.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-300 light:text-gray-700 text-sm leading-relaxed flex items-start">
                            <span className="text-purple-400 light:text-purple-600 mr-3 mt-1.5 text-xs">●</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* 기술 스택 태그 */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.split(', ').map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-purple-900/20 light:bg-purple-100 text-purple-300 light:text-purple-700 text-xs rounded-full border border-purple-500/30 light:border-purple-300 hover:bg-purple-800/30 light:hover:bg-purple-200 hover:scale-105 hover:border-purple-400 light:hover:border-purple-400 transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* 링크 버튼들 */}
                  <div className="flex items-center space-x-4">
                    {/* GitHub 링크 */}
                    {project.githubUrl && project.githubUrl.trim() !== '' ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group"
                      >
                        <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">github</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-600 light:text-gray-400 opacity-50 cursor-not-allowed">
                        <Github className="w-4 h-4" />
                        <span className="text-sm font-medium">github</span>
                      </div>
                    )}

                    {/* Live URL 링크 */}
                    {project.liveUrl && project.liveUrl.trim() !== '' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">Link</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-600 light:text-gray-400 opacity-50 cursor-not-allowed">
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm font-medium">Link</span>
                      </div>
                    )}

                    {/* Notion 링크 */}
                    {project.notion && project.notion.trim() !== '' ? (
                      <a
                        href={project.notion}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-red-400 light:hover:text-red-500 transition-all duration-200 hover:scale-105 group"
                      >
                        <Heart className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:fill-current" />
                        <span className="text-sm font-medium">Notion</span>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-2 text-gray-600 light:text-gray-400 opacity-50 cursor-not-allowed">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm font-medium">Notion</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};