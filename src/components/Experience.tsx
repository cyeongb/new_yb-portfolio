import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: 'SAMSUNG DS PLM',
    period: '2022 - 2024',
    title:'삼성전자 DS부문 PLM 시스템 운영 및 개발',
    description: [
      'PLM 6개 사업부 제품 Lifecycle Management 시스템 관리 및 요청사항에 따른 작업. ',
      '6개 사업부 : MEMORY / FOUNDRY / LED / 반도체연구소 / NEW SLSI / 설비연구소',
      '사업부간의 필요한 데이터 인터페이스 개발 및 스키마 생성, 데이터 추출 작업',
    ],
    techStack: 'Java , JSP, PL/SQL, Oracle, Javascript, jQuery, MVC, MyBatis'
  },
  {
    company: 'DOTMAN',
    period: '2021',
    title:'다양한 프로젝트의 기획, 퍼블리싱, 프론트엔드 개발을 주로 담당',
    description: [
      '고객사측에서 받은 디자인을 토대로 퍼블리싱, 프론트 개발을 진행.',
      '프론트엔드 : React.js를 활용한 반응형 웹 애플리케이션 구축',
      '기획,퍼블리싱 : Figma 를 이용한 스토리보드 작업, 색채 및 디자인 작업, html,css 목업',
      '참여 프로젝트 : Tebihome 원 게시판 홈페이지, Ellexi Philo-v CCTV 관리자 홈페이지 ',
    ],
    techStack: 'Javascript(ES6), React.js, React-Admin, Redux-thunk, Material-ui, Git, Figma'
  },
  {
    company: 'KT',
    period: '2020',
    title:'마이페이지 팀 소속으로 요금제 관련 개발건 진행함.',
    description: [
      '가족결합 요금제를 사용하는 고객들을 대상으로 유형에 따른 KT 결합 요금제를 추천하는 페이지 개발.',
      '타 부서와 협업하여 기획문서에 따른 풀스택 개발 진행',
      'Agile 방법론을 적용한 프로젝트 진행'
    ],
    techStack: 'Java, JQuery, JSP(JSTL), Ant(build), JENKINS , RED MINE, JIRA, SVN, Mysql'
  }
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
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

  const toggleExpanded = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-800 light:bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`experience-underline border-b border-gray-600 light:border-gray-300 pb-4 inline-block ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white light:text-gray-900">
              My Experience
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
                  
                  <p className="text-gray-300 light:text-gray-500 mb-4">
                    {exp.title}
                  </p>
                  
                  {/* 펼쳐지는 상세 내용 */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}>
                    <div className="bg-gray-900 light:bg-white rounded-lg p-6 border border-gray-700 light:border-gray-200 shadow-lg">
                      <ul className="space-y-3">
                        {exp?.description?.map((desc, idx) => (
                          <li key={idx} className="text-gray-300 light:text-gray-700 flex items-start">
                            <span className="text-purple-400 light:text-purple-600 mr-3 mt-1.5 text-xs">●</span>
                            <span className="leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-4 pt-4 border-t border-gray-700 light:border-gray-200">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-gray-400 light:text-gray-500">주요 기술:</span>
                          {exp?.techStack?.split(', ').map((tech, techIdx) => (
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