import { useEffect } from 'react';

/** Assist the first downward gesture without snapping the long style library. */
export function useHeroSnap(disabled: boolean) {
  useEffect(() => {
    if (disabled) return;
    const hero = document.getElementById('home');
    const library = document.getElementById('styles-grid');
    if (!hero || !library) return;

    let lastY = window.scrollY;
    let movingDown = false;
    let touching = false;
    let snapping = false;
    let settleTimer = 0;
    let releaseTimer = 0;

    const snap = () => {
      if (touching || snapping || !movingDown) return;
      const y = window.scrollY;
      const inset = parseFloat(getComputedStyle(library).scrollMarginTop) || 0;
      const target = library.getBoundingClientRect().top + y - inset;
      const start = hero.getBoundingClientRect().top + y - inset;
      const visibleHeight = window.innerHeight - inset;
      // On short screens, let users read the overflowing hero before advancing.
      const threshold = start + Math.max(0, target - start - visibleHeight)
        + Math.min(120, visibleHeight * 0.18);
      if (y < threshold || y >= target - 2) return;

      snapping = true;
      window.scrollTo({
        top: target,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant' : 'smooth',
      });
      // Fallback for browsers without scrollend; ignore our own scroll events.
      releaseTimer = window.setTimeout(release, 1500);
    };

    function release() {
      window.clearTimeout(releaseTimer);
      snapping = false;
      movingDown = false;
      lastY = window.scrollY;
    }

    const onScroll = () => {
      const y = window.scrollY;
      if (!snapping && y !== lastY) movingDown = y > lastY;
      lastY = y;
      window.clearTimeout(settleTimer);
      // Wait for wheel/trackpad momentum to settle rather than fighting it.
      if (!snapping) settleTimer = window.setTimeout(snap, 100);
    };
    const onTouchStart = () => {
      touching = true;
      window.clearTimeout(settleTimer);
    };
    const onTouchEnd = () => {
      touching = false;
      window.clearTimeout(settleTimer);
      settleTimer = window.setTimeout(snap, 100);
    };
    const onScrollEnd = () => {
      if (snapping) release();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', onScrollEnd);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    window.addEventListener('touchcancel', onTouchEnd, { passive: true });
    return () => {
      window.clearTimeout(settleTimer);
      window.clearTimeout(releaseTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', onScrollEnd);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [disabled]);
}
