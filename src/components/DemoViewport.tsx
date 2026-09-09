import { useEffect, useRef, useState } from 'react';
import type { PreviewDevice } from '../store/appStore';

import { demoDevices } from '../lib/demoDevices';

interface Props {
  styleId: string;
  device: PreviewDevice;
  fitHeight?: boolean;
  onReady?: (frame: HTMLIFrameElement) => void;
  onSize?: (size: { width: number; height: number; scale: number }) => void;
}

/** The layout viewport stays fixed; only its visual presentation is scaled. */
export function DemoViewport({ styleId, device, fitHeight = false, onReady, onSize }: Props) {
  const box = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [available, setAvailable] = useState({ width: 0, height: 0 });
  const [loadedId, setLoadedId] = useState('');
  useEffect(() => {
    const element = box.current;
    if (!element) return;
    const observer = new ResizeObserver(() => {
      const parent = element.parentElement!;
      const css = getComputedStyle(parent);
      setAvailable({ width: element.clientWidth, height: parent.clientHeight - parseFloat(css.paddingTop) - parseFloat(css.paddingBottom) });
    });
    observer.observe(element);
    if (element.parentElement) observer.observe(element.parentElement);
    return () => observer.disconnect();
  }, []);
  const dimensions = device === 'responsive'
    ? { width: Math.max(1, Math.round(available.width)), height: 800 }
    : demoDevices[device];
  const { width, height } = dimensions;
  const scale = available.width ? Math.min(1, available.width / width, fitHeight ? available.height / height : 1) : 0;
  useEffect(() => { if (scale) onSize?.({ width, height, scale }); }, [width, height, scale, onSize]);
  return (
    <div ref={box} className="demo-viewport" data-device={device}>
      {scale > 0 && (
        <div className="demo-viewport-page" style={{ width: width * scale, height: height * scale }}>
          {loadedId !== styleId && <div className="demo-loading" aria-label="Loading preview">…</div>}
          <iframe
            ref={frame}
            src={`/demos/${styleId}.html`}
            title={`${styleId} interactive demo`}
            sandbox="allow-scripts allow-same-origin allow-forms"
            className="demo-viewport-frame"
            style={{ width, height, transform: `scale(${scale})` }}
            onLoad={() => {
              setLoadedId(styleId);
              const iframe = frame.current;
              if (!iframe) return;
              onReady?.(iframe);
              iframe.contentWindow?.addEventListener('keydown', (event: KeyboardEvent) => {
                const overlay = iframe.closest<HTMLElement>('.preview-fullscreen');
                const doc = iframe.contentDocument;
                if (!overlay || !doc || doc.querySelector('dialog[open]')) return;
                if (event.key === 'Escape') document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
                if (event.key === 'Tab') {
                  const targets = [...doc.querySelectorAll<HTMLElement>('a[href],button,input,select,textarea,[tabindex]')].filter(el => el.tabIndex >= 0 && el.getClientRects().length > 0 && !el.hasAttribute('disabled'));
                  if (!event.shiftKey && doc.activeElement === targets.at(-1)) { event.preventDefault(); overlay.querySelector<HTMLElement>('button,select,a')?.focus(); }
                  if (event.shiftKey && doc.activeElement === targets[0]) { event.preventDefault(); [...overlay.querySelectorAll<HTMLElement>('button,select,a')].at(-1)?.focus(); }
                }
              });
            }}
          />
        </div>
      )}
    </div>
  );
}
