import { useEffect, useRef } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { designStyles } from '../data/styles';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useCountUp } from '../hooks/useCountUp';
import { Link } from 'react-router-dom';

export function Hero() {
  const { language } = useAppStore();
  const t = translations[language];
  const title = "DESIGN VIBES";
  const styleCount = designStyles.length;
  const displayCount = useCountUp(styleCount);

  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  // 聚光灯直接写 DOM（CSS 变量 + class），避免 mousemove 触发 React 重渲染
  const handleGridMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;
    const { clientX, clientY } = e;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = spotlight.getBoundingClientRect();
      spotlight.style.setProperty('--mx', `${clientX - rect.left}px`);
      spotlight.style.setProperty('--my', `${clientY - rect.top}px`);
      spotlight.classList.add('is-active');
    });
  };

  const handleGridMouseLeave = () => {
    cancelAnimationFrame(rafRef.current);
    spotlightRef.current?.classList.remove('is-active');
  };

  const scrollToStyles = () => {
    const stylesSection = document.querySelector('#styles-grid');
    if (stylesSection) {
      stylesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col transition-colors duration-300 bg-white dark:bg-[#1a1a1a]">
      {/* Top Bar */}
      <div className="border-b px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between transition-colors duration-300 border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF9F1C]" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-medium tabular-nums text-gray-500 dark:text-gray-400">
            {styleCount} {t.hero.designStylesCount}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block text-[11px] font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-gray-400">
            {t.hero.tagline}
          </span>
          <div className="hidden sm:block w-2 h-2 bg-[#FF9F1C]" />
          <div className="flex items-center gap-2 sm:ml-4 sm:pl-4 sm:border-l border-gray-300 dark:border-gray-700">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Main Content - Grid Background */}
      <div
        className="flex-1 relative overflow-hidden flex flex-col"
        onMouseMove={handleGridMouseMove}
        onMouseLeave={handleGridMouseLeave}
      >
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 hero-grid" />
        {/* 鼠标聚光灯：照亮脚下的网格线（见 index.css .hero-spotlight） */}
        <div ref={spotlightRef} className="hero-spotlight" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Large Typography — 字号随视口收缩，保证任何宽度下完整不溢出；逐字入场 */}
            <div className="mb-7 sm:mb-9">
              <h1
                aria-label={title}
                className="font-black tracking-[0.02em] leading-none whitespace-nowrap text-black dark:text-white"
                style={{ fontSize: 'clamp(2.5rem, 10.6vw, 9rem)' }}
              >
                {title.split('').map((ch, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="inline-block animate-letter-in"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {ch === ' ' ? '\u00A0' : ch}
                  </span>
                ))}
              </h1>
            </div>

            {/* Product value — 跟在标题字符之后淡入 */}
            <div
              className="pt-4 sm:pt-6 animate-fade-up"
              style={{ animationDelay: '350ms' }}
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
                {/* Left: Positioning & actions */}
                <div className="max-w-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-0.5 bg-[#FF9F1C] shrink-0" />
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#D98200] dark:text-[#FFB340]">
                      {t.hero.productLabel}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-black dark:text-white">
                    {t.hero.valueTitle}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {t.hero.valueDescription}
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-2.5">
                    <button
                      onClick={scrollToStyles}
                      type="button"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-lg bg-[#FF9F1C] text-white transition-all hover:bg-[#E8900A] active:scale-[0.98]"
                    >
                      {t.hero.primaryCta}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <Link
                      to="/style/apple"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-lg border bg-white border-gray-200 text-gray-700 transition-colors hover:border-[#FF9F1C] hover:text-[#D98200] dark:bg-[#1a1a1a] dark:border-gray-700 dark:text-gray-300 dark:hover:border-[#FF9F1C] dark:hover:text-[#FFB340]"
                    >
                      {t.hero.secondaryCta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="mt-3 text-[10px] sm:text-[11px] tracking-wide text-gray-400 dark:text-gray-500">
                    {t.hero.trustNote}
                  </p>
                </div>

                {/* Right: Stats — 数字从 0 滚动到位，作为内容规模证明 */}
                <div className="hidden sm:flex items-end gap-2 shrink-0">
                  <span className="text-6xl lg:text-8xl font-black leading-none tabular-nums text-black dark:text-white">
                    {displayCount}
                  </span>
                  <div className="pb-2">
                    <span className="text-[11px] uppercase tracking-[0.15em] block text-gray-400 dark:text-gray-500">
                      {t.hero.designStylesCount}
                    </span>
                    <div className="w-full h-0.5 bg-[#FF9F1C] mt-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative z-10 border-t px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800">
          <div className="hidden sm:flex items-center gap-3 lg:gap-5 text-[10px] lg:text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-400">
            {[t.hero.step1, t.hero.step2, t.hero.step3].map((step, index) => (
              <div key={step} className="flex items-center gap-3 lg:gap-5">
                <span className="flex items-center gap-2 whitespace-nowrap">
                  <span className="font-bold tabular-nums text-[#FF9F1C]">0{index + 1}</span>
                  {step}
                </span>
                {index < 2 && <ArrowRight className="w-3.5 h-3.5 text-gray-300 dark:text-gray-700" />}
              </div>
            ))}
          </div>
          <div className="flex sm:hidden items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#FF9F1C]" />
            <span className="text-[10px] tracking-wide text-gray-500 dark:text-gray-400">
              {t.hero.stepsCompact}
            </span>
          </div>
          <button
            onClick={scrollToStyles}
            type="button"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] transition-colors cursor-pointer text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
          >
            <span>{t.hero.primaryCta}</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
