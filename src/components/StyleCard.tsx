import { Star, Copy, Check } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { demoComponents } from './demos';
import { getPromptById } from '../data/prompts';
import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

interface StyleCardProps {
  style: DesignStyle;
  onClick: () => void;
}

export function StyleCard({ style, onClick }: StyleCardProps) {
  const { language, theme } = useAppStore();
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  const DemoComponent = demoComponents[style.id];
  const promptData = getPromptById(style.id);
  const isDark = theme === 'dark';

  const handleCopyPrompt = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (promptData) {
      const textToCopy = language === 'zh' ? promptData.shortPrompt : promptData.shortPromptEn;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-lg ${
        isDark
          ? 'bg-[#1a1a1a] border-gray-800 hover:border-[#FF9F1C]'
          : 'bg-white border-gray-200 hover:border-[#FF9F1C]'
      }`}
    >
      {/* Preview Demo */}
      <div className={`relative aspect-[16/10] overflow-hidden rounded-t-xl ${isDark ? 'bg-[#0a0a0a]' : 'bg-gray-50'}`}>
        {DemoComponent && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full">
              <DemoComponent />
            </div>
          </div>
        )}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-md shadow-sm">
          <Star className="w-3 h-3 fill-[#FF9F1C] text-[#FF9F1C]" />
          <span className="text-xs font-bold text-black">{style.rating}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-5">
        {/* Title */}
        <div className="mb-3">
          <h3 className={`font-bold text-base sm:text-lg mb-0.5 ${isDark ? 'text-white' : 'text-black'}`}>
            {language === 'zh' ? style.name : style.nameEn}
          </h3>
          <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {style.nameEn}
          </p>
        </div>

        {/* Description */}
        <p className={`text-xs leading-relaxed mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          {language === 'zh' ? style.description.slice(0, 60) + '...' : style.descriptionEn.slice(0, 80) + '...'}
        </p>

        {/* Core Features */}
        <div className="mb-3">
          <span className={`text-[10px] uppercase tracking-wider mb-1.5 block ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t.card.coreFeatures || '核心特点'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {(language === 'zh' ? style.features : style.featuresEn).slice(0, 4).map((feature, i) => (
              <span
                key={i}
                className={`px-2 py-1 text-[10px] rounded ${
                  isDark
                    ? 'bg-gray-800 text-gray-300'
                    : 'bg-gray-100 text-gray-600'
                }`}
              >
                {feature.split(' - ')[0].slice(0, 12)}
              </span>
            ))}
            {style.features.length > 4 && (
              <span className={`px-2 py-1 text-[10px] rounded ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                +{style.features.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {(language === 'zh' ? style.tags : style.tagsEn).slice(0, 3).map((tag, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 text-[10px] uppercase tracking-wider rounded ${
                i === 0
                  ? 'bg-[#FF9F1C] text-white'
                  : 'bg-black text-white'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className={`flex items-center justify-between pt-3 border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <span className={`text-[10px] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {style.useCases.length} {t.card.useCases}
          </span>
          {promptData && (
            <button
              onClick={handleCopyPrompt}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] uppercase tracking-wider rounded transition-all ${
                copied
                  ? 'bg-green-500 text-white'
                  : isDark
                    ? 'bg-gray-800 text-gray-300 hover:bg-[#FF9F1C] hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-[#FF9F1C] hover:text-white'
              }`}
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? t.card.copied : t.card.copyPrompt}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
