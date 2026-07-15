import { useEffect, useRef, useState } from 'react';

// Demo 页按固定桌面视口渲染后整体缩放，保证缩略图与详情页所见完全一致
const DEMO_WIDTH = 1280;
const DEMO_HEIGHT = 800;

interface DemoPreviewProps {
  styleId: string;
  /** iframe 加载完成前的占位底色，一般传该风格的主色 */
  placeholderColor?: string;
}

export function DemoPreview({ styleId, placeholderColor }: DemoPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => setScale(el.clientWidth / DEMO_WIDTH);
    updateScale();

    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(el);

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
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: placeholderColor }}
    >
      {visible && scale > 0 && (
        <iframe
          src={`/demos/${styleId}.html`}
          title={`${styleId} demo preview`}
          aria-hidden="true"
          tabIndex={-1}
          sandbox=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className="pointer-events-none select-none border-0 origin-top-left transition-opacity duration-500"
          style={{
            width: DEMO_WIDTH,
            height: DEMO_HEIGHT,
            transform: `scale(${scale})`,
            opacity: loaded ? 1 : 0,
          }}
        />
      )}
    </div>
  );
}
