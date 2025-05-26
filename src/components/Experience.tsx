import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: 'SAMSUNG DS PLM',
    period: '2022 - 2024',
    description: [
      '삼성전자 DS부문 PLM 솔루션 운영 및 개발',
      'PLM Product Lifecycle Management 시스템 구축',
      'Java SpringBoot 기반 백엔드 API 개발 및 최적화',
      'JSP, jQuery 기반 사용자 인터페이스 개발',
      'Oracle Database 설계 및 성능 튜닝'
    ],
    techStack: 'Java (SpringBoot, JPA), JSP, jQuery, Oracle SQL'
  },
  {
    company: 'DOTMAN',
    period: '2021',
    description: [
      'Flutter 기반 크로스플랫폼 모바일 애플리케이션 개발',
      'React.js를 활용한 반응형 웹 애플리케이션 구축',
      'PHP Laravel 프레임워크를 사용한 RESTful API 개발',
      'MySQL 데이터베이스 설계 및 쿼리 최적화',
      'Git을 활용한 형상관리 및 협업 프로세스 구축'
    ],
    techStack: 'Flutter, React.js, PHP Laravel, MySQL, Git'
  },
  {
    company: 'KT DS',
    period: '2020',
    description: [
      'Vue.js 기반 SPA(Single Page Application) 개발',
      'Node.js Express 서버 구축 및 API 설계',
      'MySQL 데이터베이스 ERD 설계 및 구현',
      'RESTful API 아키텍처 설계 및 문서화',
      'Agile 방법론을 적용한 프로젝트 관리'
    ],
    techStack: 'Vue.js, Node.js Express, MySQL, RESTful API'
  }
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 bg-gray-800 light:bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="border-b border-gray-600 light:border-gray-300 pb-4 inline-block">
            <h2 className="text-3xl sm:text-4xl font-bold text-white light:text-gray-900">
              Work Experience
            </h2>
          </div>
        </div>
        
        <div className="relative">
          {/* 타임라인 라인 */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600 light:bg-gray-300"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* 타임라인 도트 */}
                <div className="absolute left-6 w-4 h-4 bg-purple-500 light:bg-purple-600 rounded-full border-4 border-gray-800 light:border-gray-50 z-10"></div>
                
                {/* 콘텐츠 영역 */}
                <div className="ml-16 w-full">
                  {/* 회사명과 토글 버튼 */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-purple-400 light:text-purple-600">
                        {exp.company}
                      </h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-gray-400 light:text-gray-600 font-medium">
                          {exp.period}
                        </span>
                        {/* <span className="text-gray-500 light:text-gray-500">▼</span> */}
                      </div>
                    </div>
                    
                    {/* 토글 버튼 */}
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="p-2 hover: light:hover:bg-gray-200 rounded-full transition-all duration-200 group"
                    >
                      {expandedIndex === index ? (
                        <ChevronDown className="w-5 h-5 text-gray-400 light:text-gray-600 group-hover:text-purple-300 light:group-hover:text-purple-700 group-hover:scale-125 group-hover:stroke-2 transition-all duration-200" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-gray-400 light:text-gray-600 group-hover:text-purple-300 light:group-hover:text-purple-700 group-hover:scale-125 group-hover:stroke-2 transition-all duration-200" />
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 light:text-gray-500 mb-4">
                    {exp.techStack}
                  </p>
                  
                  {/* 펼쳐지는 상세 내용 */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-gray-900 light:bg-white rounded-lg p-6 border border-gray-700 light:border-gray-200 shadow-lg">
                      <ul className="space-y-3">
                        {exp.description.map((desc, idx) => (
                          <li key={idx} className="text-gray-300 light:text-gray-700 flex items-start">
                            <span className="text-purple-400 light:text-purple-600 mr-3 mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700 light:border-gray-200">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-gray-400 light:text-gray-500">주요 기술:</span>
                          {exp.techStack?.split(', ').map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="px-2 py-1 bg-purple-900/20 light:bg-purple-100 text-purple-300 light:text-purple-700 text-xs rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
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