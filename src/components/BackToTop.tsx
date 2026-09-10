import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useAppStore } from '../store/appStore';

export function BackToTop({ disabled = false }: { disabled?: boolean }) {
  const language = useAppStore(state => state.language);
  const [visible, setVisible] = useState(() => window.scrollY >= window.innerHeight / 2);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY >= window.innerHeight / 2);
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      window.removeEventListener('resize', updateVisibility);
    };
  }, []);

  const label = language === 'zh' ? '回到顶部' : 'Back to top';
  const shown = visible && !disabled;

  const scrollToTop = () => {
    // Keep keyboard focus useful after the floating button disappears.
    document.querySelector<HTMLAnchorElement>('.home-nav a[href="#home"]')
      ?.focus({ preventScroll: true });
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant' : 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      title={label}
      aria-hidden={!shown}
      tabIndex={shown ? 0 : -1}
      className={`fixed right-5 bottom-[calc(1.25rem+env(safe-area-inset-bottom))] sm:right-8 sm:bottom-8 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-lg transition-[opacity,transform,visibility,background-color,color] duration-200 hover:bg-action hover:text-action-foreground active:scale-95 dark:border-gray-700 dark:bg-[#1a1a1a] dark:text-gray-200 dark:hover:bg-action dark:hover:text-action-foreground motion-reduce:transition-none ${
        shown ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
