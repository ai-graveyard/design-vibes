import { useEffect, useState } from 'react';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * 元素首次进入视口时置 true（一次性），用于滚动 reveal 动画。
 * 减动效环境下直接返回 true，保证配合 opacity-0 隐藏态的内容始终可见。
 * 返回 [ref, inView]：ref 为 callback ref，元素挂载时才建立 observer。
 */
export function useInView<T extends HTMLElement>(rootMargin = '0px 0px -80px 0px') {
  const [el, setEl] = useState<T | null>(null);
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!el || inView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [el, inView, rootMargin]);

  return [setEl, inView] as const;
}
