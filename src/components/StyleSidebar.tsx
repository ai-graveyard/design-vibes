import { NavLink } from 'react-router-dom';
import { Star } from 'lucide-react';
import { designStyles, type DesignStyle } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { DemoPreview } from './DemoPreview';
import { useEffect, useRef, forwardRef } from 'react';

interface StyleSidebarProps {
  currentStyleId: string;
  horizontal?: boolean;
}

export function StyleSidebar({ currentStyleId, horizontal = false }: StyleSidebarProps) {
  const { language } = useAppStore();
  const activeItemRef = useRef<HTMLAnchorElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to active item on mount and when currentStyleId changes
  useEffect(() => {
    if (activeItemRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeItem = activeItemRef.current;

      if (horizontal) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        if (itemRect.left < containerRect.left || itemRect.right > containerRect.right) {
          activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      } else {
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        if (itemRect.top < containerRect.top || itemRect.bottom > containerRect.bottom) {
          activeItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  }, [currentStyleId, horizontal]);

  if (horizontal) {
    return (
      <div
        ref={containerRef}
        className="w-full overflow-x-auto bg-gray-50 dark:bg-[#0f0f0f]"
      >
        <div className="flex gap-2 p-3 min-w-max">
          {designStyles.map((style) => (
            <StyleSidebarItemHorizontal
              key={style.id}
              style={style}
              isActive={style.id === currentStyleId}
              language={language}
              ref={style.id === currentStyleId ? activeItemRef : null}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="h-full overflow-y-auto bg-gray-50 dark:bg-[#0f0f0f]"
    >
      <div className="p-3 space-y-2">
        {designStyles.map((style) => (
          <StyleSidebarItem
            key={style.id}
            style={style}
            isActive={style.id === currentStyleId}
            language={language}
            ref={style.id === currentStyleId ? activeItemRef : null}
          />
        ))}
      </div>
    </div>
  );
}

interface StyleSidebarItemProps {
  style: DesignStyle;
  isActive: boolean;
  language: 'zh' | 'en';
}

// Vertical sidebar item (for desktop)
const StyleSidebarItem = forwardRef<HTMLAnchorElement, StyleSidebarItemProps>(
  ({ style, isActive, language }, ref) => {
    return (
      <NavLink
        ref={ref}
        to={`/style/${style.id}`}
        aria-current={isActive ? 'page' : undefined}
        className={`block rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : 'border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-600'
        }`}
      >
        {/* Mini Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-white dark:bg-[#1a1a1a]">
          <DemoPreview styleId={style.id} placeholderColor={style.colors[0]} />
        </div>

        {/* Info */}
        <div className="px-3 py-2.5 border-t bg-white border-gray-100 dark:bg-[#1a1a1a] dark:border-gray-800">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold truncate text-black dark:text-white">
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <div className="flex items-center gap-1 shrink-0 px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800">
              <Star className="w-3.5 h-3.5 text-[#FF9F1C] fill-[#FF9F1C]" />
              <span className="text-xs font-bold tabular-nums text-black dark:text-white">
                {style.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
);

StyleSidebarItem.displayName = 'StyleSidebarItem';

// Horizontal sidebar item (for mobile)
const StyleSidebarItemHorizontal = forwardRef<HTMLAnchorElement, StyleSidebarItemProps>(
  ({ style, isActive, language }, ref) => {
    return (
      <NavLink
        ref={ref}
        to={`/style/${style.id}`}
        aria-current={isActive ? 'page' : undefined}
        className={`block w-36 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : 'border-gray-200 dark:border-gray-800'
        }`}
      >
        {/* Mini Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-white dark:bg-[#1a1a1a]">
          <DemoPreview styleId={style.id} placeholderColor={style.colors[0]} />
        </div>

        {/* Info */}
        <div className="px-2 py-1.5 border-t bg-white border-gray-100 dark:bg-[#1a1a1a] dark:border-gray-800">
          <div className="flex items-center justify-between gap-1">
            <h3 className="text-[11px] font-bold truncate text-black dark:text-white">
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <div className="flex items-center gap-0.5 shrink-0 px-1 py-0.5 rounded bg-gray-100 dark:bg-gray-800">
              <Star className="w-2.5 h-2.5 text-[#FF9F1C] fill-[#FF9F1C]" />
              <span className="text-[10px] font-bold tabular-nums text-black dark:text-white">
                {style.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
);

StyleSidebarItemHorizontal.displayName = 'StyleSidebarItemHorizontal';
