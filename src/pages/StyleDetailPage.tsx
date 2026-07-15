import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import { designStyles } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { StyleSidebar } from '../components/StyleSidebar';
import { StyleDetailContent } from '../components/StyleDetailContent';

export function StyleDetailPage() {
  const { styleId } = useParams<{ styleId: string }>();
  const { theme, language, toggleTheme, toggleLanguage } = useAppStore();
  const isDark = theme === 'dark';
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const style = designStyles.find(s => s.id === styleId);

  // Redirect to home if style not found
  if (!style) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={`h-screen flex flex-col ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      {/* Header */}
      <header className={`shrink-0 border-b px-4 py-3 flex items-center justify-between ${isDark ? 'bg-[#0f0f0f] border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className={`flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">
              {language === 'zh' ? '返回' : 'Back'}
            </span>
          </Link>
          <div className={`h-5 w-px hidden sm:block ${isDark ? 'bg-gray-700' : 'bg-gray-200'}`} />
          <h1 className={`text-sm font-bold truncate max-w-[150px] sm:max-w-none ${isDark ? 'text-white' : 'text-black'}`}>
            {language === 'zh' ? style.name : style.nameEn}
          </h1>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
            title={language === 'zh' ? 'Switch to English' : '切换到中文'}
          >
            <Languages className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-black hover:bg-gray-100'}`}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile: Horizontal card list at top */}
      {isMobile && (
        <div className={`shrink-0 border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <StyleSidebar currentStyleId={style.id} horizontal />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop: Left Sidebar */}
        {!isMobile && (
          <aside className={`w-64 shrink-0 border-r ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <StyleSidebar currentStyleId={style.id} />
          </aside>
        )}

        {/* Right Content — key 让切换风格时组件本地状态（复制态）自动重置；设备预览是全局状态，切换风格不受影响 */}
        <main className="flex-1 overflow-hidden">
          <StyleDetailContent key={style.id} style={style} />
        </main>
      </div>
    </div>
  );
}
