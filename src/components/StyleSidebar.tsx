import { NavLink } from 'react-router-dom';
import { Star } from 'lucide-react';
import { designStyles, type DesignStyle } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { demoComponents } from './demos';
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
        // Horizontal scroll
        const containerRect = container.getBoundingClientRect();
        const itemRect = activeItem.getBoundingClientRect();
        if (itemRect.left < containerRect.left || itemRect.right > containerRect.right) {
          activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      } else {
        // Vertical scroll
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
    const DemoComponent = demoComponents[style.id];

    return (
      <NavLink
        ref={ref}
        to={`/style/${style.id}`}
        className={`block rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : isDark
              ? 'border-gray-800 hover:border-gray-600'
              : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        {/* Mini Preview */}
        <div className={`aspect-[16/9] overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          {DemoComponent ? (
            <div className="w-full h-full transform scale-[0.25] origin-top-left" style={{ width: '400%', height: '400%' }}>
              <DemoComponent />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Preview</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className={`px-3 py-2 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <div className="flex items-center justify-between">
            <h3 className={`text-xs font-medium truncate ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <div className="flex items-center gap-0.5 shrink-0 ml-2">
              <Star className="w-3 h-3 text-[#FF9F1C] fill-[#FF9F1C]" />
              <span className={`text-[10px] font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {style.rating}
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
    const DemoComponent = demoComponents[style.id];

    return (
      <NavLink
        ref={ref}
        to={`/style/${style.id}`}
        className={`block w-36 shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
          isActive
            ? 'border-[#FF9F1C] shadow-lg'
            : isDark
              ? 'border-gray-800'
              : 'border-gray-200'
        }`}
      >
        {/* Mini Preview */}
        <div className={`aspect-[16/10] overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          {DemoComponent ? (
            <div className="w-full h-full transform scale-[0.25] origin-top-left" style={{ width: '400%', height: '400%' }}>
              <DemoComponent />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className={`text-[10px] ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>Preview</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className={`px-2 py-1.5 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          <div className="flex items-center justify-between">
            <h3 className={`text-[10px] font-medium truncate ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <div className="flex items-center gap-0.5 shrink-0 ml-1">
              <Star className="w-2.5 h-2.5 text-[#FF9F1C] fill-[#FF9F1C]" />
              <span className={`text-[9px] font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {style.rating}
              </span>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
);

StyleSidebarItemHorizontal.displayName = 'StyleSidebarItemHorizontal';
