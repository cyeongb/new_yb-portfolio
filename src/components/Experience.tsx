import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    company: 'SAMSUNG DS PLM',
    period: '2022 - 2024',
    description: [
      'PLM에서 솔루션 운영',
      'PLM Product 개발',
      'Backend 및 Frontend 개발'
    ],
    techStack: 'Java (SpringBoot, JPA), JSP, jQuery, Oracle SQL'
  },
  {
    company: 'DOTMAN',
    period: '2021',
    description: [
      'Flutter 및 웹 솔루션 개발',
      'React.js 웹 애플리케이션 구축',
      'PHP와 MySQL을 사용한 백엔드 개발'
    ],
    techStack: 'Flutter, React.js, PHP, MySQL, Git'
  },
  {
    company: 'KT DS',
    period: '2020',
    description: [
      'Vue.js 기반 웹 프론트엔드 개발',
      'Node.js API 서버 구축',
      'MySQL 데이터베이스 설계 및 관리'
    ],
    techStack: 'Vue.js, Node.js, MySQL, Git'
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border-l-4 border-purple-600 dark:border-purple-400"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {exp.company}
                </h3>
                <span className="text-gray-600 dark:text-gray-400 font-medium">
                  {exp.period}
                </span>
              </div>
              
              <ul className="space-y-2 mb-4">
                {exp.description.map((desc, idx) => (
                  <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    {desc}
                  </li>
                ))}
              </ul>
              
              {exp.techStack && (
                <div className="mt-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    기술 스택: {exp.techStack}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};