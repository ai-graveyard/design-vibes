import { flushSync } from 'react-dom';
import { useAppStore } from '../store/appStore';

type VTDocument = Document & {
  startViewTransition?: (update: () => void) => { ready: Promise<void>; finished: Promise<void> };
};

/**
 * 主题切换：从点击位置一圈扩散完成明暗切换（View Transitions API）。
 * 不支持的浏览器 / 减动效环境退回瞬切（沿用原来的 300ms 颜色过渡）。
 * dark 类直接同步写到 <html>，不等 App 的 useEffect——
 * startViewTransition 的快照必须在回调返回时就拿到切换后的 DOM。
 */
export function toggleThemeWithReveal(event?: { clientX: number; clientY: number }) {
  const { theme, toggleTheme } = useAppStore.getState();
  const nextIsDark = theme === 'light';
  const apply = () => {
    flushSync(() => toggleTheme());
    document.documentElement.classList.toggle('dark', nextIsDark);
  };

  const doc = document as VTDocument;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!doc.startViewTransition || reduceMotion) {
    apply();
    return;
  }

  const x = event?.clientX ?? window.innerWidth / 2;
  const y = event?.clientY ?? 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  // 扩散期间禁掉全站 transition-colors：圆的边缘才是利落的新旧分界
  document.documentElement.classList.add('theme-revealing');
  const transition = doc.startViewTransition(apply);
  transition.ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
      { duration: 500, easing: 'ease-in-out', pseudoElement: '::view-transition-new(root)' }
    );
  });
  transition.finished.finally(() => document.documentElement.classList.remove('theme-revealing'));
}
