import { Mail, Github, Download  } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export const Contact = () => {

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

  //이력서 다운 함수
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={sectionRef}  id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`contact-underline border-b border-gray-300 dark:border-gray-600 pb-4 inline-block ${isVisible ? 'animate' : ''}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Contact
            </h2>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-80 h-80 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden cursor-pointer group">
              <img 
                src="/gambi.jpg"
                alt="울감비 사진"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
              />
              <div className="w-full h-full flex items-center justify-center" style={{ display: 'none' }}>
                <span className="text-gray-500 dark:text-gray-400">
                  사진
                </span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full px-8 py-4 flex items-center justify-center overflow-hidden group ">
              <span className="text-purple-800 dark:text-purple-300 font-medium object-cover transition-transform duration-300 group-hover:scale-125 ">
                연락하세요 ◕ ◡ ◕ 냥!
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                 <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 group-hover:scale-125 transition-all duration-200" />
                <a href="mailto:choiyeongbi@gmail.com"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  cyeongb@gmail.com 
                </a>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer">
                <Github className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 group-hover:scale-125 transition-all duration-200" />
                <a
                  href="https://github.com/cyeongb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  github
                </a>
              </div>
              
              <div className="flex items-center space-x-4 group cursor-pointer" onClick={handleResumeDownload}>
                <Download className="w-6 h-6 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 dark:group-hover:text-purple-300 group-hover:scale-125 transition-all duration-200" />
                <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  이력서 다운로드 (PDF)
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Copyright ©2025 Choi YeongBi. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};