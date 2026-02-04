import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const { language, theme } = useAppStore();
  const t = translations[language];
  const title = "DESIGNVIBES";
  const isDark = theme === 'dark';

  const scrollToStyles = () => {
    const stylesSection = document.querySelector('#styles-grid');
    if (stylesSection) {
      stylesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`w-full min-h-screen flex flex-col transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      {/* Top Bar */}
      <div className={`border-b px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between transition-colors duration-300 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF9F1C]" />
          <span className={`text-[11px] uppercase tracking-[0.2em] font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {t.hero.designStylesCount}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className={`hidden sm:block text-[11px] font-medium tracking-[0.2em] uppercase ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            VIBE CODING REFERENCE
          </span>
          <div className="hidden sm:block w-2 h-2 bg-[#FF9F1C]" />
          <div className={`flex items-center gap-2 sm:ml-4 sm:pl-4 sm:border-l ${isDark ? 'border-gray-700' : 'border-gray-300'}`}>
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content - Grid Background */}
      <div className="flex-1 relative overflow-hidden flex flex-col">
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Large Typography */}
            <div className="mb-8 sm:mb-12">
              <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-black tracking-[0.02em] leading-none ${isDark ? 'text-white' : 'text-black'}`}>
                {title}
              </h1>
            </div>

            {/* Subtitle Row */}
            <div className={`border-t pt-6 sm:pt-8 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-12">
                {/* Left: Description */}
                <div className="flex items-start gap-4 max-w-xl">
                  <div className="w-8 h-0.5 bg-[#FF9F1C] mt-3 shrink-0" />
                  <div>
                    <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {t.hero.explore} <strong>24</strong> {t.hero.designStyles}
                    </p>
                    <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-[#FF9F1C]' : 'text-[#FF9F1C]'}`}>
                      {t.hero.quote}
                    </p>
                  </div>
                </div>

                {/* Right: Stats */}
                <div className="flex items-end gap-2">
                  <span className={`text-6xl sm:text-7xl lg:text-8xl font-black leading-none ${isDark ? 'text-white' : 'text-black'}`}>
                    24
                  </span>
                  <div className="pb-2">
                    <span className={`text-[11px] uppercase tracking-[0.15em] block ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                      DESIGN STYLES
                    </span>
                    <div className="w-full h-0.5 bg-[#FF9F1C] mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`border-t px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#FF9F1C]" />
            <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.15em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              "LESS, BUT BETTER" — DIETER RAMS
            </span>
          </div>
          <button
            onClick={scrollToStyles}
            type="button"
            className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] transition-colors cursor-pointer ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-black'}`}
          >
            <span>EXPLORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
