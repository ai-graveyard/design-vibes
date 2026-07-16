import { Sun, Moon } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export function ThemeToggle() {
  const { theme, language, toggleTheme } = useAppStore();
  const label =
    language === 'zh'
      ? theme === 'light' ? '切换为深色模式' : '切换为浅色模式'
      : theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white transition-colors"
      aria-label={label}
      title={label}
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
