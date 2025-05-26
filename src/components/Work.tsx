import { useState } from 'react';
import { ExternalLink, Github, Heart, ChevronDown } from 'lucide-react';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: 'Tebihome',
    description: [
      'Tebihome 브랜드 웹사이트 구축 및 운영',
      '실시간 데이터 처리 시스템을 통한 효율적인 서비스 제공',
      '사용자 중심의 UI/UX 디자인으로 사용성 및 접근성 향상',
      '반응형 웹 디자인 적용으로 다양한 디바이스 완벽 대응',
      '최신 웹 기술 스택을 활용한 성능 최적화 및 SEO 개선'
    ],
    techStack: 'React.js, Node.js, Express, MongoDB, Tailwind CSS',
    image: '/assets/img/tebihome.png',
    githubUrl: 'https://github.com/yottabyte/tebihome',
    liveUrl: 'https://tebihome.example.com'
  },
  {
    title: 'Stock-Dashboard',
    description: [
      '실시간 주식 시장 데이터 대시보드 웹 서비스 개발',
      'Chart.js와 D3.js를 활용한 인터랙티브 데이터 시각화',
      'WebSocket 기반 실시간 데이터 스트리밍 구현',
      '사용자 맞춤형 포트폴리오 관리 및 알림 기능',
      '모바일 퍼스트 반응형 디자인으로 완벽한 크로스 플랫폼 지원'
    ],
    techStack: 'React.js, TypeScript, Chart.js, Python Flask, WebSocket',
    image: '/assets/img/stock.png',
    githubUrl: 'https://github.com/yottabyte/stock-dashboard',
    liveUrl: 'https://stock-dashboard.example.com'
  },
  {
    title: 'Pension Info System',
    description: [
      '국민연금 정보 조회 및 관리 웹 시스템 개발',
      '공공데이터 API 연동을 통한 실시간 연금 정보 제공',
      'JWT 기반 사용자 인증 및 권한 관리 시스템 구축',
      '연금 수령액 계산기 및 예상 수령 시뮬레이션 기능',
      '개인정보 암호화 및 보안 강화를 통한 안전한 데이터 처리'
    ],
    techStack: 'Vue.js, Spring Boot, MySQL, JWT, 공공데이터API',
    image: '/assets/img/pension.png',
    githubUrl: 'https://github.com/yottabyte/pension-system',
    liveUrl: 'https://pension-info.example.com'
  },
  {
    title: 'Corona Tracker',
    description: [
      'COVID-19 실시간 현황 추적 및 분석 대시보드',
      'D3.js 기반 인터랙티브 지도 및 차트 시각화',
      '국가별/지역별 상세 통계 및 트렌드 분석',
      '실시간 데이터 업데이트 및 푸시 알림 서비스',
      '다국어 지원 및 웹 접근성 가이드라인 준수'
    ],
    techStack: 'React.js, D3.js, Node.js, MongoDB, 공공API',
    image: '/assets/img/corona.png',
    githubUrl: 'https://github.com/yottabyte/corona-tracker',
    liveUrl: 'https://corona-tracker.example.com'
  }
];

export const Work = () => {
  const [showMore, setShowMore] = useState(false);

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
    <section id="work" className="py-20 bg-gray-900 light:bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="border-b border-gray-600 light:border-gray-300 pb-4 inline-block">
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
                    <span className="text-gray-400 light:text-gray-500 text-lg block mb-2 group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors">
                      프로젝트 캡쳐화면
                    </span>
                    <span className="text-gray-400 light:text-gray-500 text-sm group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors">
                      {project.image}
                    </span>
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
                  <button className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group">
                    <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">GitHub</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group">
                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-red-400 light:hover:text-red-500 transition-all duration-200 hover:scale-105 group">
                    <Heart className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:fill-current" />
                    <span className="text-sm font-medium">Like</span>
                  </button>
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
                      <span className="text-gray-400 light:text-gray-500 text-lg block mb-2 group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors">
                        프로젝트 캡쳐화면
                      </span>
                      <span className="text-gray-400 light:text-gray-500 text-sm group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors">
                        {project.image}
                      </span>
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
                    <button className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group">
                      <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">GitHub</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-purple-400 light:hover:text-purple-600 transition-all duration-200 hover:scale-105 group">
                      <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 light:text-gray-600 hover:text-red-400 light:hover:text-red-500 transition-all duration-200 hover:scale-105 group">
                      <Heart className="w-4 h-4 group-hover:scale-110 transition-transform group-hover:fill-current" />
                      <span className="text-sm font-medium">Like</span>
                    </button>
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