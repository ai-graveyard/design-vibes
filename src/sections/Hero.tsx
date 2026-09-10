import { useEffect, useRef } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { designStyles } from '../data/styles';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero({ onInstall }: { onInstall: () => void }) {
  const { language } = useAppStore();
  const t = translations[language];
  const title = "DESIGN VIBES";

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
      stylesSection.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section id="home" className="w-full min-h-[calc(100svh-4rem)] scroll-mt-16 flex flex-col transition-colors duration-300 bg-white dark:bg-[#1a1a1a]">
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
        <div className="relative z-10 flex-1 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full">
            {/* Large Typography — 字号随视口收缩，保证任何宽度下完整不溢出；逐字入场 */}
            <div className="mb-7 sm:mb-9">
              <h1
                aria-label={title}
                className="hero-title font-black tracking-[0.02em] leading-none whitespace-nowrap text-black dark:text-white"
                style={{ fontSize: 'clamp(2.2rem, 9.4vw, 8rem)' }}
              >
                {title.split('').map((ch, i) => (
                  <span
                    key={i}
                    aria-hidden="true"
                    className="inline-block animate-letter-in"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    {/* 两个 I 用主题橙实心填充，见 index.css .hero-letter-i */}
                    {ch === ' ' ? '\u00A0' : ch === 'I' ? <span className="hero-letter-i">I</span> : ch}
                  </span>
                ))}
              </h1>
            </div>

            {/* Product value — 跟在标题字符之后淡入 */}
            <div
              className="pt-4 sm:pt-6 animate-fade-up-blur"
              style={{ animationDelay: '350ms' }}
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
                {/* Left: Positioning & actions */}
                <div className="max-w-2xl">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-black dark:text-white">
                    {t.hero.valueTitle}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-400">
                    {t.hero.valueDescription}
                  </p>
                  {/* 浏览按钮定位到风格库；安装按需打开，关闭后继续原位置浏览。 */}
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2.5">
                    <button
                      onClick={scrollToStyles}
                      type="button"
                      className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-lg border border-transparent bg-action text-action-foreground transition-all hover:bg-action-hover active:bg-action-active active:scale-[0.98]"
                    >
                      {t.hero.primaryCta}
                      <ChevronDown className="w-4 h-4" />
                      <span className="btn-sheen" aria-hidden="true" />
                    </button>
                    <button
                      onClick={onInstall}
                      type="button"
                      aria-haspopup="dialog"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold rounded-lg border bg-white border-gray-200 text-gray-700 transition-colors hover:border-[#FF9F1C] hover:text-[#D98200] active:scale-[0.98] dark:bg-[#1a1a1a] dark:border-gray-700 dark:text-gray-300 dark:hover:border-[#FF9F1C] dark:hover:text-[#FFB340]"
                    >
                      <Sparkles className="w-4 h-4" />
                      {t.hero.installCta}
                    </button>
                  </div>
                  <p className="mt-3 text-[10px] sm:text-[11px] tracking-wide text-gray-400 dark:text-gray-500">
                    {t.hero.trustNote}
                  </p>
                </div>


              </div>
            </div>
            <div className="hero-studies" aria-label={language === 'zh' ? '精选演示' : 'Featured studies'}>
              {['neo-brutalism', 'braun', 'liquid-glass'].map((id, index) => {
                const style = designStyles.find(item => item.id === id)!;
                return <Link to={`/style/${id}`} key={id} className="hero-study">
                  <div className="hero-study-image"><img src={`/thumbs/${id}.jpg`} alt={language === 'zh' ? `${style.name}真实页面预览` : `${style.nameEn} page preview`} width="1280" height="800" decoding="async" /></div>
                  <div><span>0{index + 1} / {language === 'zh' ? style.name : style.nameEn}</span><ArrowRight size={14} /></div>
                </Link>;
              })}
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
