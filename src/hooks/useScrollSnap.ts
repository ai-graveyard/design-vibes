import { useEffect } from 'react';

/** 一次整屏归位的时长。比 Chrome 原生吸附（约 300ms）慢一倍多，够看清是「被吸过去」而不是瞬移 */
const DURATION = 760;
/** 滚轮停止多久算「松手」。macOS 触控板惯性会持续发事件，这个延迟从最后一个事件起算 */
const SETTLE_DELAY = 140;
/** 离目标不到这个距离就当已经归位，不再动画，避免抖动 */
const EPSILON = 4;

/** 先慢后快再慢 */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * 整屏吸附：滚动停下后把视口归位到最近的 .snap-screen 顶部。
 *
 * 用 JS 而非 CSS scroll-snap，因为后者不暴露动画曲线和时长；且实测 mandatory
 * 会把页面锁死在最后一个吸附点之前，底部区块够不到（详见 index.css 注释）。
 *
 * 只吸附 .snap-screen 标记的前几屏，最后一个吸附点之后完全自由滚动。
 * 仅桌面 + 视口足够高时启用，减动效环境下整体关闭。
 */
export function useScrollSnap() {
  useEffect(() => {
    const viewportOk = window.matchMedia('(min-width: 1024px) and (min-height: 720px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let raf = 0;
    let settleTimer = 0;
    let animating = false;

    const stopAnimation = () => {
      cancelAnimationFrame(raf);
      animating = false;
    };

    const animateTo = (to: number) => {
      const from = window.scrollY;
      const distance = to - from;
      if (Math.abs(distance) < EPSILON) return;

      const start = performance.now();
      animating = true;
      const step = (now: number) => {
        if (!animating) return;
        const t = Math.min(1, (now - start) / DURATION);
        // 必须显式 instant：html 上有全局 scroll-behavior: smooth，
        // 否则每帧的 scrollTo 都会被浏览器再包一层平滑滚动，和这里的缓动打架，
        // 实测会把 760ms 压缩成约 274ms（就是「太快」的来源）
        window.scrollTo({ top: from + distance * easeInOutCubic(t), behavior: 'instant' });
        if (t < 1) raf = requestAnimationFrame(step);
        else animating = false;
      };
      raf = requestAnimationFrame(step);
    };

    /** 每次重新读取：字体加载、图片、语言切换都会改变区块高度 */
    const snapTops = () =>
      [...document.querySelectorAll<HTMLElement>('.snap-screen')].map(
        (el) => Math.round(el.getBoundingClientRect().top + window.scrollY)
      );

    const settle = () => {
      if (!viewportOk.matches || reduceMotion.matches) return;
      const tops = snapTops();
      if (tops.length === 0) return;

      const y = window.scrollY;
      // 最后一个吸附点之后不再干预，让长内容自由滚动
      if (y > tops[tops.length - 1]) return;
      // 已经滚到底就别再往回吸，否则用户永远看不到页面末尾
      if (y + window.innerHeight >= document.documentElement.scrollHeight - EPSILON) return;

      const nearest = tops.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a));
      animateTo(nearest);
    };

    /** 用户任何主动滚动都先掐掉进行中的归位动画，再重新计时 */
    const onUserScroll = () => {
      stopAnimation();
      clearTimeout(settleTimer);
      settleTimer = window.setTimeout(settle, SETTLE_DELAY);
    };

    /** 键盘和拖动滚动条时只取消动画，不接管——那些交互用户要的是精确控制 */
    const onInterrupt = () => {
      stopAnimation();
      clearTimeout(settleTimer);
    };

    window.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true });
    window.addEventListener('keydown', onInterrupt);
    window.addEventListener('mousedown', onInterrupt);

    return () => {
      stopAnimation();
      clearTimeout(settleTimer);
      window.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('touchmove', onUserScroll);
      window.removeEventListener('keydown', onInterrupt);
      window.removeEventListener('mousedown', onInterrupt);
    };
  }, []);
}
