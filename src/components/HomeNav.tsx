import { Sparkles } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { ThemeToggle } from './ThemeToggle';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

export function HomeNav({ onInstall }: { onInstall: () => void }) {
  const { language } = useAppStore();
  const t = translations[language];

  return (
    <header className="home-nav sticky top-0 z-30 border-b border-gray-200 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-[#1a1a1a]/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Design Vibes" className="flex shrink-0 items-center gap-2 text-xs font-bold tracking-widest text-black dark:text-white">
          <span className="h-2 w-2 bg-[#FF9F1C]" aria-hidden="true" />
          <span className="sm:hidden">DV</span>
          <span className="hidden sm:inline">DESIGN VIBES</span>
        </a>
        <div className="flex items-center gap-1 sm:gap-5">
          <nav aria-label={t.nav.label} className="flex items-center gap-1 sm:gap-4">
            <a href="#styles-grid" className="inline-flex min-h-11 items-center px-2 text-xs text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white">{t.nav.styles}</a>
            <button type="button" onClick={onInstall} aria-haspopup="dialog" className="inline-flex min-h-11 items-center gap-1.5 rounded-lg px-2 text-xs font-semibold text-[#A15B00] hover:bg-orange-50 dark:text-[#FFB340] dark:hover:bg-white/5">
              <Sparkles className="hidden h-3.5 w-3.5 sm:block" aria-hidden="true" />
              {t.install.kicker}
            </button>
          </nav>
          <div className="flex items-center border-l border-gray-200 pl-1 sm:pl-3 dark:border-gray-700">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
