export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            I'm <span className="text-purple-600 dark:text-purple-400">Yotta Byte</span>
          </h1>
          <div className="text-6xl sm:text-8xl font-bold text-purple-600 dark:text-purple-400 mb-8">
            It's <span className="text-blue-500 dark:text-blue-400">Y</span>
            <span className="text-purple-600 dark:text-purple-400">B</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">
            choi YeongBi
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Developer</p>
        </div>
        
        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-purple-600 dark:text-purple-400"
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
      </div>
    </section>
  );
};