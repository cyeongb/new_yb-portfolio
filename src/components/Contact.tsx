import { Mail, Github, Linkedin } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Contact
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="w-80 h-80 mx-auto bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">
                사진 gambi.jpg
              </span>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full px-8 py-4 inline-block">
              <span className="text-purple-800 dark:text-purple-300 font-medium">
                연락하세요! ◕ ◡ ◕
              </span>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  choiyeongbi@gmail.com
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <a
                  href="https://github.com/yottabyte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  github.com/yottabyte
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">
                  LinkedIn Profile
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Copyright ©2024 Choi YeongBi. All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};