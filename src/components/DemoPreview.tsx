import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';

// Demo 页按固定桌面视口渲染后整体缩放，保证缩略图与详情页所见完全一致
const DEMO_WIDTH = 1280;
const DEMO_HEIGHT = 800;
// hover 滚屏模式共渲染 2 屏内容，悬停时向上平移 1 屏模拟"浏览下一屏"。
// 实测最矮的 demo 高约 1670px，1600 保证所有 demo 滚动区间内都有真实内容不露白
const SCROLL_HEIGHT = 1600;

// 触屏（无 hover）环境不做 hover 活化，thumbnail 模式始终显示静态图
const canHover =
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;
// hover 停留片刻才挂载实况 iframe（快速扫过不触发挂卸抖动）
const LIVE_DELAY = 180;
// 离开后等 .demo-pan-frame 的复位 transition（0.9s）滚回顶帧再卸载，画面正好接回静态图
const UNLOAD_DELAY = 950;

interface DemoPreviewProps {
  styleId: string;
  /** iframe 加载完成前的占位底色，一般传该风格的主色 */
  placeholderColor?: string;
  /** 悬停外层 .group 时缩略图缓慢下滚展示整页（触屏与减动效环境自动不启用） */
  scrollOnHover?: boolean;
  /** 跳过接近视口才挂载的懒加载，挂载即渲染（用于弹出层等按需挂载的场景） */
  eager?: boolean;
  /**
   * 静态缩略图模式：默认只渲染构建期截图（pnpm thumbs），悬停外层 .group（与
   * CSS 平移同一锚点）时才挂载实况 iframe、离开后卸载。用于卡片网格 —— 几十个
   * 常驻 iframe 的无限动画 + blur 合成会拖垮整页滚动，静态图则没有这些开销。
   */
  thumbnail?: boolean;
}

export function DemoPreview({
  styleId,
  placeholderColor,
  scrollOnHover = false,
  eager = false,
  thumbnail = false,
}: DemoPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [visible, setVisible] = useState(eager);
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => setScale(el.clientWidth / DEMO_WIDTH);
    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(el);

    if (thumbnail) {
      if (!canHover) return () => resizeObserver.disconnect();
      const group = el.closest('.group');
      if (!group) return () => resizeObserver.disconnect();

      let enterTimer: number | undefined;
      let leaveTimer: number | undefined;
      const onEnter = () => {
        window.clearTimeout(leaveTimer);
        enterTimer = window.setTimeout(() => setVisible(true), LIVE_DELAY);
      };
      const onLeave = () => {
        window.clearTimeout(enterTimer);
        leaveTimer = window.setTimeout(() => {
          setVisible(false);
          setLoaded(false);
        }, UNLOAD_DELAY);
      };
      group.addEventListener('mouseenter', onEnter);
      group.addEventListener('mouseleave', onLeave);

      return () => {
        window.clearTimeout(enterTimer);
        window.clearTimeout(leaveTimer);
        group.removeEventListener('mouseenter', onEnter);
        group.removeEventListener('mouseleave', onLeave);
        resizeObserver.disconnect();
      };
    }

    if (eager) {
      return () => resizeObserver.disconnect();
    }

    // 首次接近视口才挂载 iframe；挂载后保持常驻（反复挂卸会造成滚动时的解析抖动），
    // 屏幕外的绘制与合成开销交给容器上的 content-visibility: auto 跳过
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          intersectionObserver.disconnect();
        }
      },
      { rootMargin: '240px' }
    );
    intersectionObserver.observe(el);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [eager, thumbnail]);

  // 缩放与 hover 平移都经 CSS 变量交给 .demo-pan-frame 处理，
  // 平移量按未缩放坐标给出（transform 先平移后缩放，屏幕距离自动乘 scale）
  const frameStyle = {
    width: DEMO_WIDTH,
    height: scrollOnHover ? SCROLL_HEIGHT : DEMO_HEIGHT,
    opacity: loaded ? 1 : 0,
    '--demo-scale': scale,
    '--demo-pan': scrollOnHover ? `${DEMO_HEIGHT - SCROLL_HEIGHT}px` : '0px',
  } as CSSProperties;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: placeholderColor, contentVisibility: 'auto' }}
    >
      {thumbnail && (
        <img
          src={`/thumbs/${styleId}.jpg`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          draggable={false}
          onLoad={() => setImgLoaded(true)}
          className="absolute inset-0 h-full w-full select-none object-cover transition-opacity duration-500"
          style={{ opacity: imgLoaded ? 1 : 0 }}
        />
      )}
      {visible && scale > 0 && (
        <iframe
          src={`/demos/${styleId}.html`}
          title={`${styleId} demo preview`}
          aria-hidden="true"
          tabIndex={-1}
          sandbox=""
          loading={thumbnail ? 'eager' : 'lazy'}
          onLoad={() => setLoaded(true)}
          // relative z-10 保证 iframe 盖住静态图（img 是 positioned，会画在普通流的 iframe 之上）
          className="pointer-events-none select-none border-0 origin-top-left demo-pan-frame relative z-10"
          style={frameStyle}
        />
      )}
    </div>
  );
}
