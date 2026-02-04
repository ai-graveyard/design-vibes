import { useAppStore } from '../store/appStore';

export function LanguageToggle() {
  const { language, toggleLanguage } = useAppStore();

  return (
    <button
      onClick={toggleLanguage}
      className="text-xs font-medium tracking-wider text-gray-500 hover:text-black dark:hover:text-white transition-colors px-2 py-1"
      aria-label="Toggle language"
    >
      {language === 'zh' ? 'EN' : '中文'}
    </button>
  );
}
