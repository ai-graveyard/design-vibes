import { useEffect } from 'react';

/** 归位时长。页面自作主张的动画要比用户点击触发的短——用户在等的是控制权还回来 */
const DURATION = 420;
/** 滚轮停止多久算「松手」。macOS 触控板惯性会持续发事件，这个延迟从最后一个事件起算 */
const SETTLE_DELAY = 80;
/** 判定「滚动真的停了」需要连续多少帧位置不变 */
const STILL_FRAMES = 3;
/** 允许逆着推动方向回拉的上限（视口高度的比例）。超过这个距离就改去方向上的下一屏 */
const BACK_TOLERANCE = 0.25;
/** 离目标不到这个距离就当已经归位，不再动画，避免抖动 */
const EPSILON = 4;

/** 先慢后快再慢 */
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const closestTo = (values: number[], y: number) =>
  values.reduce((a, b) => (Math.abs(b - y) < Math.abs(a - y) ? b : a));

/** 不同设备的 deltaMode 单位不同，统一折算成像素，否则方向判断在部分浏览器上失真 */
const deltaToPixels = (e: WheelEvent) => {
  if (e.deltaMode === 1) return e.deltaY * 16; // 行
  if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // 页
  return e.deltaY;
};

/**
 * 整屏吸附（方向性）：滚动停下后归位到整屏，但绝不明显逆着你推的方向回拉。
 *
 * 「吸到最近的点」是上一版最伤手感的地方——往下推 300px 会被拉回上面去，
 * 那是在撤销用户的操作。这一版规则：先取最近的吸附点，若它在推动方向的反方向、
 * 且距离超过视口的 BACK_TOLERANCE，就改去方向上的下一屏。轻微回弹（小于该阈值）
 * 保留，那是「没推动」的正常反馈。
 *
 * 方向来自滚轮事件的 deltaY 而不是 scrollY 差值：passive 监听器与合成器滚动是异步的，
 * 读到的 scrollY 可能已经包含本次滚动（实测合成滚轮事件下必然如此），据此算位移会得 0，
 * 把一次明确的翻页误判成微调。
 *
 * 用 JS 而非 CSS scroll-snap：后者不暴露曲线和时长，且 mandatory 会把页面锁在最后
 * 一个吸附点之前，底部区块够不到（详见 index.css 注释）。
 *
 * .snap-screen 只挂 Hero / 安装区块 / 风格网格顶部三处，网格以下完全自由滚。
 * 仅桌面 + 视口足够高时启用，减动效环境关闭。
 *
 * 想对比「完全没有吸附」的手感：把 HomePage 里的 useScrollSnap() 注释掉即可。
 */
export function useScrollSnap() {
  useEffect(() => {
    const viewportOk = window.matchMedia('(min-width: 1024px) and (min-height: 720px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    let raf = 0;
    let stillRaf = 0;
    let settleTimer = 0;
    let animating = false;
    /** 本次手势累计的滚轮位移（像素），符号即方向 */
    let gestureDelta = 0;

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
        // 否则每帧的 scrollTo 都会被浏览器再包一层平滑滚动，把这里的缓动压扁
        window.scrollTo({ top: from + distance * easeInOutCubic(t), behavior: 'instant' });
        if (t < 1) raf = requestAnimationFrame(step);
        else animating = false;
      };
      raf = requestAnimationFrame(step);
    };

    /**
     * 等滚动真正停稳再回调。
     * 只靠「滚轮事件静默」不够：惯性与浏览器自身的平滑滚动会让事件停了位置还在走。
     */
    const whenScrollStill = (done: () => void) => {
      cancelAnimationFrame(stillRaf);
      let lastY = window.scrollY;
      let stable = 0;
      const tick = () => {
        const y = window.scrollY;
        if (y === lastY) stable += 1;
        else {
          stable = 0;
          lastY = y;
        }
        if (stable >= STILL_FRAMES) done();
        else stillRaf = requestAnimationFrame(tick);
      };
      stillRaf = requestAnimationFrame(tick);
    };

    /** 每次重新读取：字体加载、图片、语言切换都会改变区块高度 */
    const snapTops = () =>
      [...document.querySelectorAll<HTMLElement>('.snap-screen')].map((el) =>
        Math.round(el.getBoundingClientRect().top + window.scrollY)
      );

    const settle = () => {
      const direction = gestureDelta;
      gestureDelta = 0;
      if (direction === 0 || !viewportOk.matches || reduceMotion.matches) return;

      const tops = snapTops();
      if (tops.length === 0) return;

      const y = window.scrollY;
      // 已滚过最后一个吸附点：进入自由区，不再干预
      if (y > tops[tops.length - 1]) return;
      // 已经到底就别往回吸，否则用户永远看不到页面末尾
      if (y + window.innerHeight >= document.documentElement.scrollHeight - EPSILON) return;

      let target = closestTo(tops, y);
      const pullsBackward = direction > 0 ? target < y : target > y;
      if (pullsBackward && Math.abs(target - y) > window.innerHeight * BACK_TOLERANCE) {
        const ahead = direction > 0 ? tops.filter((t) => t > y) : tops.filter((t) => t < y);
        if (ahead.length) target = direction > 0 ? Math.min(...ahead) : Math.max(...ahead);
      }
      animateTo(target);
    };

    const scheduleSettle = () => {
      stopAnimation();
      cancelAnimationFrame(stillRaf);
      clearTimeout(settleTimer);
      settleTimer = window.setTimeout(() => whenScrollStill(settle), SETTLE_DELAY);
    };

    const onWheel = (e: WheelEvent) => {
      gestureDelta += deltaToPixels(e);
      scheduleSettle();
    };

    const onTouchMove = () => {
      // 触屏上方向由位置变化推断即可，这里只保证有非零方向进入 settle
      gestureDelta = gestureDelta || 1;
      scheduleSettle();
    };

    /** 键盘和拖动滚动条时只取消动画，不接管——那些交互用户要的是精确控制 */
    const onInterrupt = () => {
      stopAnimation();
      cancelAnimationFrame(stillRaf);
      clearTimeout(settleTimer);
      gestureDelta = 0;
    };

    window.addEventListener('wheel', onWheel, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onInterrupt);
    window.addEventListener('mousedown', onInterrupt);

    return () => {
      stopAnimation();
      cancelAnimationFrame(stillRaf);
      clearTimeout(settleTimer);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onInterrupt);
      window.removeEventListener('mousedown', onInterrupt);
    };
  }, []);
}
