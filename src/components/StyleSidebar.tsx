import { NavLink } from 'react-router-dom';

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
        className={`group block rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : 'border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-600'
        }`}
      >
        {/* Mini Preview */}
        <div className="relative aspect-[16/10] overflow-hidden bg-white dark:bg-[#1a1a1a]">
          <DemoPreview styleId={style.id} placeholderColor={style.colors[0]} thumbnail />
        </div>

        {/* Info */}
        <div className="px-3 py-2.5 border-t bg-white border-gray-100 dark:bg-[#1a1a1a] dark:border-gray-800">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-sm font-bold truncate text-black dark:text-white">
              {language === 'zh' ? style.name : style.nameEn}
            </h3>

          </div>
        </div>
      </NavLink>
    );
  }
);

StyleSidebarItem.displayName = 'StyleSidebarItem';

// Mobile navigation stays compact so the actual design gets the screen.
const StyleSidebarItemHorizontal = forwardRef<HTMLAnchorElement, StyleSidebarItemProps>(
  ({ style, isActive, language }, ref) => <NavLink ref={ref} to={`/style/${style.id}`} aria-current={isActive ? 'page' : undefined}
    className={`shrink-0 px-3 py-2.5 rounded-lg text-xs font-medium border ${isActive ? 'border-[#d99431] bg-[#fff1db] text-[#774607]' : 'border-transparent text-gray-600 dark:text-gray-300'}`}>
    {language === 'zh' ? style.name : style.nameEn}
  </NavLink>
);
StyleSidebarItemHorizontal.displayName = 'StyleSidebarItemHorizontal';
