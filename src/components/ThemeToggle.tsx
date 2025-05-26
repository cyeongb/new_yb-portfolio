import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-50 p-4 bg-gray-800 light:bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-600 light:border-gray-200 hover:scale-110 group"
      aria-label={isDark ? '라이트 모드로 변경' : '다크 모드로 변경'}
    >
      <div className="relative">
        {isDark ? (
          <Sun className="w-6 h-6 text-yellow-400 transition-all duration-300 group-hover:text-yellow-300 group-hover:rotate-45" />
        ) : (
          <Moon className="w-6 h-6 text-gray-600 transition-all duration-300 group-hover:text-gray-800 group-hover:rotate-12" />
        )}
        
        {/* 글로우 효과 */}
        <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
          isDark 
            ? 'bg-yellow-400/20 group-hover:bg-yellow-400/30' 
            : 'bg-gray-600/10 group-hover:bg-gray-600/20'
        } scale-0 group-hover:scale-150 blur-xl`} />
      </div>
      
      {/* 호버시 툴팁 */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 light:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {isDark ? '라이트 모드' : '다크 모드'}
      </div>
    </button>
  );
};