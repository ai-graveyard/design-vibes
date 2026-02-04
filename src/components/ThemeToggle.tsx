import { Sun, Moon } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export function ThemeToggle() {
  const { theme, toggleTheme } = useAppStore();

  return (
    <button
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
    </button>
  );
}
