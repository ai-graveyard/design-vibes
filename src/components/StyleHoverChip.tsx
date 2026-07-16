import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { designStyles } from '../data/styles';
import { DemoPreview } from './DemoPreview';
import { useAppStore } from '../store/appStore';

// 弹出预览卡尺寸：16:10 实况缩略图 + 底部名称条
const POP_WIDTH = 256;
const POP_HEIGHT = POP_WIDTH * (10 / 16) + 30;
const POP_GAP = 10;
const OPEN_DELAY = 220;

/** 触屏设备（无 hover）不弹预览，点击直接跳详情 */
const canHover =
  typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

interface StyleHoverChipProps {
  styleId: string;
  className?: string;
  children: React.ReactNode;
}

/** 风格名 chip：hover 稍作停留后在旁边弹出该风格的实况迷你预览 */
export function StyleHoverChip({ styleId, className, children }: StyleHoverChipProps) {
  const { language } = useAppStore();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const timerRef = useRef<number | undefined>(undefined);

  const style = designStyles.find((s) => s.id === styleId);

  const show = () => {
    if (!canHover) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      const rect = linkRef.current?.getBoundingClientRect();
      if (!rect) return;
      const margin = 12;
      const x = Math.min(
        Math.max(rect.left + rect.width / 2 - POP_WIDTH / 2, margin),
        window.innerWidth - POP_WIDTH - margin
      );
      // 默认弹在上方，顶部空间不足时翻到下方
      const fitsAbove = rect.top >= POP_HEIGHT + POP_GAP + margin;
      const y = fitsAbove ? rect.top - POP_GAP - POP_HEIGHT : rect.bottom + POP_GAP;
      setPos({ x, y });
    }, OPEN_DELAY);
  };

  const hide = () => {
    window.clearTimeout(timerRef.current);
    setPos(null);
  };

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  if (!style) return null;

  return (
    <>
      <Link
        ref={linkRef}
        to={`/style/${styleId}`}
        className={className}
        onMouseEnter={show}
        onMouseLeave={hide}
        onClick={hide}
      >
        {children}
      </Link>
      {pos &&
        createPortal(
          <div
            role="presentation"
            className="fixed z-50 pointer-events-none animate-pop-in rounded-lg overflow-hidden border shadow-xl bg-white border-gray-200 dark:bg-[#0f0f0f] dark:border-gray-700"
            style={{ left: pos.x, top: pos.y, width: POP_WIDTH }}
          >
            <div className="relative aspect-[16/10]">
              <DemoPreview styleId={styleId} placeholderColor={style.colors[0]} eager />
            </div>
            <div className="h-[30px] px-2.5 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
              <span className="text-[10px] uppercase tracking-wider truncate text-gray-500 dark:text-gray-400">
                {language === 'zh' ? style.name : style.nameEn}
              </span>
              <span className="flex items-center gap-1 shrink-0">
                <Star className="w-2.5 h-2.5 fill-[#FF9F1C] text-[#FF9F1C]" />
                <span className="text-[10px] font-bold tabular-nums text-black dark:text-white">
                  {style.rating.toFixed(1)}
                </span>
              </span>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
