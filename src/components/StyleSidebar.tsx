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
  const { language, theme } = useAppStore();
  const isDark = theme === 'dark';
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
        className={`w-full overflow-x-auto ${isDark ? 'bg-[#0f0f0f]' : 'bg-gray-50'}`}
      >
        <div className="flex gap-2 p-3 min-w-max">
          {designStyles.map((style) => (
            <StyleSidebarItemHorizontal
              key={style.id}
              style={style}
              isActive={style.id === currentStyleId}
              isDark={isDark}
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
      className={`h-full overflow-y-auto ${isDark ? 'bg-[#0f0f0f]' : 'bg-gray-50'}`}
    >
      <div className="p-3 space-y-2">
        {designStyles.map((style) => (
          <StyleSidebarItem
            key={style.id}
            style={style}
            isActive={style.id === currentStyleId}
            isDark={isDark}
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
  isDark: boolean;
  language: 'zh' | 'en';
}

// Vertical sidebar item (for desktop)
const StyleSidebarItem = forwardRef<HTMLAnchorElement, StyleSidebarItemProps>(
  ({ style, isActive, isDark, language }, ref) => {
    return (
      <NavLink
        ref={ref}
        to={`/style/${style.id}`}
        aria-current={isActive ? 'page' : undefined}
        className={`block rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : isDark
              ? 'border-gray-800 hover:border-gray-600'
              : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        {/* Mini Preview */}
        <div className={`relative aspect-[16/10] overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <DemoPreview styleId={style.id} placeholderColor={style.colors[0]} />
        </div>

        {/* Info */}
        <div className={`px-3 py-2.5 border-t ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center justify-between gap-2">
            <h3 className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <div className={`flex items-center gap-1 shrink-0 px-1.5 py-0.5 rounded ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Star className="w-3.5 h-3.5 text-[#FF9F1C] fill-[#FF9F1C]" />
              <span className={`text-xs font-bold tabular-nums ${isDark ? 'text-white' : 'text-black'}`}>
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
  ({ style, isActive, isDark, language }, ref) => {
    return (
      <NavLink
        ref={ref}
        to={`/style/${style.id}`}
        aria-current={isActive ? 'page' : undefined}
        className={`block w-36 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : isDark
              ? 'border-gray-800'
              : 'border-gray-200'
        }`}
      >
        {/* Mini Preview */}
        <div className={`relative aspect-[16/10] overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <DemoPreview styleId={style.id} placeholderColor={style.colors[0]} />
        </div>

        {/* Info */}
        <div className={`px-2 py-1.5 border-t ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-100'}`}>
          <div className="flex items-center justify-between gap-1">
            <h3 className={`text-[11px] font-bold truncate ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <div className={`flex items-center gap-0.5 shrink-0 px-1 py-0.5 rounded ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
              <Star className="w-2.5 h-2.5 text-[#FF9F1C] fill-[#FF9F1C]" />
              <span className={`text-[10px] font-bold tabular-nums ${isDark ? 'text-white' : 'text-black'}`}>
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
