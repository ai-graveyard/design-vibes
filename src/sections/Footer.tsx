import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { designStyles } from '../data/styles';

export function Footer() {
  const { language } = useAppStore();
  const t = translations[language];

  return (
    <footer className="w-full border-t px-4 sm:px-6 lg:px-8 py-6 transition-colors duration-300 bg-white border-gray-200 dark:bg-[#0f0f0f] dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#FF9F1C]" />
            <span className="text-sm font-bold tracking-wider text-black dark:text-white">
              DV
            </span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
              DESIGN VIBES
            </span>
          </div>

          {/* Quote */}
          <div className="text-center text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-gray-400 dark:text-gray-500">
            {t.footer.quote}
            <span className="text-[#FF9F1C] ml-2">{t.footer.quoteAuthor}</span>
          </div>

          {/* Stats & Links */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-[#FF9F1C] tabular-nums">{designStyles.length}</span>
              <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {t.footer.stats}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-4 pt-4 border-t flex flex-wrap items-center justify-center gap-3 text-[10px] uppercase tracking-wider border-gray-200 text-gray-400 dark:border-gray-800 dark:text-gray-500">
          <span className="hover:text-[#FF9F1C] transition-colors cursor-pointer">{t.footer.functional}</span>
          <span className="text-[#FF9F1C]">/</span>
          <span className="hover:text-[#FF9F1C] transition-colors cursor-pointer">{t.footer.aesthetic}</span>
          <span className="text-[#FF9F1C]">/</span>
          <span className="hover:text-[#FF9F1C] transition-colors cursor-pointer">{t.footer.minimal}</span>
        </div>
      </div>
    </footer>
  );
}
