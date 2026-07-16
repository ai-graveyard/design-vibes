import { useEffect, useState } from 'react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** 挂载后从 0 计数到 target（easeOutCubic），减动效环境直接显示终值 */
export function useCountUp(target: number, duration = 900) {
  const [value, setValue] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      // 减动效环境一帧直达终值，其余场景 easeOutCubic 递增
      const progress = prefersReducedMotion ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return value;
}
