import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Sun, Moon, Languages, Columns2 } from 'lucide-react';
import { designStyles } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { StyleSidebar } from '../components/StyleSidebar';
import { StyleDetailContent } from '../components/StyleDetailContent';
import { usePageMeta } from '../hooks/usePageMeta';
import { useIsMobile } from '../hooks/useIsMobile';

const headerBtnClass =
  'p-2 rounded-lg transition-colors text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800';

export function StyleDetailPage() {
  const { styleId } = useParams<{ styleId: string }>();
  const { theme, language, toggleTheme, toggleLanguage } = useAppStore();
  const isMobile = useIsMobile();

  const style = designStyles.find(s => s.id === styleId);

  // usePageMeta 是 hook，必须在提前 return 之前调用
  usePageMeta(
    style ? `${language === 'zh' ? style.name : style.nameEn} · Design Vibes` : 'Design Vibes',
    style ? (language === 'zh' ? style.description : style.descriptionEn) : undefined
  );

  // Redirect to home if style not found
  if (!style) {
    return <Navigate to="/" replace />;
  }

  // 对比入口：当前风格 vs 列表中的下一个风格
  const currentIndex = designStyles.findIndex(s => s.id === style.id);
  const compareWith = designStyles[(currentIndex + 1) % designStyles.length];

  return (
    <div className="h-screen flex flex-col bg-white dark:bg-[#1a1a1a]">
      {/* Header */}
      <header className="shrink-0 border-b px-4 py-3 flex items-center justify-between bg-white border-gray-200 dark:bg-[#0f0f0f] dark:border-gray-800">
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg transition-colors text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">
              {language === 'zh' ? '返回' : 'Back'}
            </span>
          </Link>
          <div className="h-5 w-px hidden sm:block bg-gray-200 dark:bg-gray-700" />
          <h1 className="text-sm font-bold truncate max-w-[150px] sm:max-w-none text-black dark:text-white">
            {language === 'zh' ? style.name : style.nameEn}
          </h1>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          {/* Compare */}
          <Link
            to={`/compare/${style.id}/${compareWith.id}`}
            className={headerBtnClass}
            title={language === 'zh' ? '对比风格' : 'Compare styles'}
            aria-label={language === 'zh' ? '对比风格' : 'Compare styles'}
          >
            <Columns2 className="w-4 h-4" />
          </Link>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className={headerBtnClass}
            title={language === 'zh' ? '切换为英文' : 'Switch to Chinese'}
            aria-label={language === 'zh' ? '切换为英文' : 'Switch to Chinese'}
          >
            <Languages className="w-4 h-4" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={headerBtnClass}
            title={
              language === 'zh'
                ? theme === 'dark' ? '切换为浅色模式' : '切换为深色模式'
                : theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
            aria-label={
              language === 'zh'
                ? theme === 'dark' ? '切换为浅色模式' : '切换为深色模式'
                : theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile: Horizontal card list at top */}
      {isMobile && (
        <div className="shrink-0 border-b border-gray-200 dark:border-gray-800">
          <StyleSidebar currentStyleId={style.id} horizontal />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Desktop: Left Sidebar */}
        {!isMobile && (
          <aside className="w-64 shrink-0 border-r border-gray-200 dark:border-gray-800">
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
