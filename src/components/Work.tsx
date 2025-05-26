import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  {
    title: 'TebiBox',
    description: [
      'Tebibox 웹 사이트 구축',
      '실시간 데이터 처리를 통한 효율적인 서비스 제공',
      '사용자 친화적인 UI/UX 디자인으로 접근성 향상',
      '반응형 웹 디자인 적용으로 다양한 디바이스 대응',
      '최신 웹 기술을 활용한 성능 최적화'
    ],
    techStack: 'React.js, Node.js, Express, MongoDB',
    image: '/assets/img/tebibox.png'
  },
  {
    title: 'Stock-Dashboard',
    description: [
      '주식 대시보드 웹 서비스 개발',
      '실시간 주식 데이터 시각화 및 차트 구현',
      'REST API를 통한 금융 데이터 연동',
      '사용자 맞춤형 포트폴리오 관리 기능',
      '반응형 디자인으로 모바일 최적화'
    ],
    techStack: 'React.js, TypeScript, Chart.js, Python, Flask',
    image: '/assets/img/stock.png'
  },
  {
    title: 'Pension Info System',
    description: [
      '국민연금 정보 조회 시스템 개발',
      '공공 API 연동을 통한 실시간 데이터 제공',
      '사용자 인증 및 보안 시스템 구축',
      '연금 계산기 및 예상 수령액 시뮬레이션',
      '개인정보 보호를 위한 암호화 적용'
    ],
    techStack: 'Vue.js, Spring Boot, MySQL, JWT',
    image: '/assets/img/pension.png'
  },
  {
    title: 'Corona Tracker',
    description: [
      '코로나19 현황 추적 대시보드',
      '실시간 감염 현황 데이터 시각화',
      '지역별 통계 및 동향 분석',
      '인터랙티브 지도를 통한 데이터 표현',
      '모바일 친화적 반응형 디자인'
    ],
    techStack: 'React.js, D3.js, Node.js, MongoDB',
    image: '/assets/img/corona.png'
  }
];

export const Work = () => {
  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Work
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16">
          that I've built
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  {project.image || '/assets/img/placeholder.png'}
                </span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <ul className="space-y-2 mb-4">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm flex items-start">
                      <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                      {desc}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.techStack}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            MORE
          </button>
        </div>
      </div>
    </section>
  );
};