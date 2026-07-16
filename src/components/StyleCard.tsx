import { Star, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { DesignStyle } from '../data/styles';
import { DemoPreview } from './DemoPreview';
import { getPromptById } from '../data/prompts';
import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

interface StyleCardProps {
  style: DesignStyle;
}

export function StyleCard({ style }: StyleCardProps) {
  const { language, theme } = useAppStore();
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  const promptData = getPromptById(style.id);
  const isDark = theme === 'dark';

  const handleCopyPrompt = async (e: React.MouseEvent) => {
    // 阻止外层 Link 的默认跳转
    e.preventDefault();
    e.stopPropagation();
    if (promptData) {
      const textToCopy = language === 'zh' ? promptData.shortPrompt : promptData.shortPromptEn;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Link
      to={`/style/${style.id}`}
      className={`group block rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF9F1C] focus-visible:ring-offset-2 ${
        isDark
          ? 'bg-[#1a1a1a] border-gray-800 hover:border-[#FF9F1C] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.6)] focus-visible:ring-offset-[#0f0f0f]'
          : 'bg-white border-gray-200 hover:border-[#FF9F1C] hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.15)] focus-visible:ring-offset-gray-50'
      }`}
    >
      <article>
        {/* 真实 demo 的缩放预览 */}
        <div className={`relative aspect-[16/10] overflow-hidden border-b ${isDark ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
          <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <DemoPreview styleId={style.id} placeholderColor={style.colors[0]} />
          </div>

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-md shadow-sm">
            <Star className="w-3 h-3 fill-[#FF9F1C] text-[#FF9F1C]" />
            <span className="text-xs font-bold text-black tabular-nums">{style.rating.toFixed(1)}</span>
          </div>

          {/* Hover Hint */}
          <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1.5 bg-black/80 backdrop-blur-sm rounded-md opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="text-[10px] uppercase tracking-wider text-white">{t.card.viewDetail}</span>
            <ArrowUpRight className="w-3 h-3 text-[#FF9F1C]" />
          </div>
        </div>

        {/* Info */}
        <div className="p-4 sm:p-5">
          {/* Title */}
          <div className="mb-3">
            <h3 className={`font-bold text-base sm:text-lg mb-0.5 transition-colors group-hover:text-[#FF9F1C] ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>
            <p className={`text-[10px] uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {style.nameEn}
            </p>
          </div>

          {/* Description */}
          <p className={`text-xs leading-relaxed mb-3 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'zh' ? style.description : style.descriptionEn}
          </p>

          {/* Core Features */}
          <div className="mb-3">
            <span className={`text-[10px] uppercase tracking-wider mb-1.5 block ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {t.card.coreFeatures}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'zh' ? style.features : style.featuresEn).slice(0, 4).map((feature, i) => (
                <span
                  key={i}
                  className={`inline-block max-w-36 truncate px-2 py-1 text-[10px] rounded ${
                    isDark
                      ? 'bg-gray-800 text-gray-300'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {feature.split(' - ')[0]}
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
            <span className={`text-[10px] tabular-nums ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {style.useCases.length} {t.card.useCases}
            </span>
            {promptData && (
              <button
                onClick={handleCopyPrompt}
                type="button"
                aria-label={t.card.copyPrompt}
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
      </article>
    </Link>
  );
}
