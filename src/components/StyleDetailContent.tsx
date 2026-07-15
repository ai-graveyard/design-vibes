import { Star, Copy, CheckCheck, Monitor, Smartphone, Sparkles, Check, CircleX, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { getPromptById } from '../data/prompts';
import { useState, useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

interface StyleDetailContentProps {
  style: DesignStyle;
}

export function StyleDetailContent({ style }: StyleDetailContentProps) {
  const [copied, setCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const {
    language,
    theme,
    previewDevice: device,
    setPreviewDevice: setDevice,
    isDetailsPanelCollapsed,
    toggleDetailsPanel,
  } = useAppStore();
  const t = translations[language];

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile': return '375px';
      default: return '100%';
    }
  };

  const demoUrl = `/demos/${style.id}.html`;
  const promptData = getPromptById(style.id);

  const handleCopyPrompt = async () => {
    if (promptData) {
      const textToCopy = language === 'zh' ? promptData.prompt : promptData.promptEn;
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isDark = theme === 'dark';

  // Mobile layout: single scrollable column
  if (isMobile) {
    return (
      <div className="h-full overflow-y-auto">
        {/* Preview Area */}
        <div className={`${isDark ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`}>
          {/* Header */}
          <div className={`border-b px-4 py-3 flex items-center justify-between ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center gap-2">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
              </span>
              <h2 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {language === 'zh' ? style.name : style.nameEn}
              </h2>
            </div>
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.modal.openInNewTab}
              aria-label={t.modal.openInNewTab}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-black hover:bg-gray-100'}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Iframe - fixed aspect ratio */}
          <div className="p-4">
            <div className="aspect-[16/10] bg-white shadow-2xl rounded-lg overflow-hidden">
              <iframe
                src={demoUrl}
                className="w-full h-full border-0"
                title={`${style.name} Demo`}
                sandbox="allow-same-origin"
              />
            </div>
          </div>
        </div>

        {/* Details Panel */}
        <div className={`${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
          {/* Header with Rating & Tags */}
          <div className={`border-b px-5 py-4 flex items-center justify-between ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF9F1C] text-white rounded">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span className="text-sm font-bold">{style.rating}</span>
              </div>
              <div className="flex gap-1.5">
                {(language === 'zh' ? style.tags : style.tagsEn).slice(0, 2).map((tag, i) => (
                  <span key={i} className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-5">
            {/* Style Name */}
            <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>

            {/* Description */}
            <p className={`text-xs leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              {language === 'zh' ? style.description : style.descriptionEn}
            </p>

            {/* AI Prompt Section */}
            {promptData && (
              <div className={`mb-5 border rounded-lg p-4 ${isDark ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#FF9F1C]" />
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
                    {t.modal.aiPrompt}
                  </h4>
                </div>
                <div className={`border rounded-lg p-3 mb-3 ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
                  <pre className={`text-[11px] whitespace-pre-wrap font-mono leading-relaxed line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {language === 'zh' ? promptData.shortPrompt : promptData.shortPromptEn}
                  </pre>
                </div>
                <button
                  onClick={handleCopyPrompt}
                  className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg transition-colors ${
                    copied
                      ? 'bg-green-500 text-white'
                      : 'bg-[#FF9F1C] text-white hover:bg-[#E8900A]'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4" />
                      {t.modal.copiedFull}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {t.modal.copyFullPrompt}
                    </>
                  )}
                </button>
              </div>
            )}

            {/* Core Features */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.modal.features}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'zh' ? style.features : style.featuresEn).slice(0, 5).map((feature, i) => (
                  <span key={i} className={`px-2.5 py-1 text-[10px] rounded ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {feature.split(' - ')[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.modal.useCases}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'zh' ? style.useCases : style.useCasesEn).slice(0, 4).map((useCase, i) => (
                  <span key={i} className="px-2.5 py-1 text-[10px] bg-black text-white rounded">
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  <span className="text-green-500">✓</span> {t.modal.pros || '优点'}
                </h4>
                <ul className="space-y-1">
                  {(language === 'zh' ? style.pros : style.prosEn).slice(0, 3).map((pro, i) => (
                    <li key={i} className={`text-[10px] flex items-start gap-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                      {pro.split(' - ')[0]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  <span className="text-red-500">✗</span> {t.modal.cons || '缺点'}
                </h4>
                <ul className="space-y-1">
                  {(language === 'zh' ? style.cons : style.consEn).slice(0, 3).map((con, i) => (
                    <li key={i} className={`text-[10px] flex items-start gap-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      <CircleX className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                      {con.split(' - ')[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Color Palette */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.modal.colors || '配色方案'}
              </h4>
              <div className="flex gap-2">
                {style.colors.slice(0, 5).map((color, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg shadow-sm border border-gray-200"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="pb-4">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
                {t.modal.examples || '代表案例'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'zh' ? style.examples : style.examplesEn).slice(0, 4).map((example, i) => (
                  <span key={i} className={`px-2.5 py-1 text-[10px] rounded border ${isDark ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop layout: side by side
  return (
    <div className="flex h-full flex-row">
      {/* Preview Area */}
      <div
        className={`flex flex-col flex-1 min-w-0 transition-all duration-300 ${isDark ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`}
        style={{ height: '100%' }}
      >
        {/* Header */}
        <div className={`border-b px-4 py-3 flex items-center justify-between ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex w-1.5 h-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
            </span>
            <h2 className={`text-sm font-bold truncate ${isDark ? 'text-white' : 'text-black'}`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h2>
            <span className={`hidden lg:inline text-[10px] uppercase tracking-wider ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
              {t.modal.livePreview}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Device Toggle */}
            <div className={`flex items-center gap-0 rounded-lg overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <button
                onClick={() => setDevice('desktop')}
                type="button"
                title="Desktop"
                aria-pressed={device === 'desktop'}
                className={`p-2 transition-colors ${device === 'desktop' ? 'bg-[#FF9F1C] text-white' : isDark ? 'bg-[#1a1a1a] text-gray-400 hover:text-white' : 'bg-white text-gray-500 hover:text-black'}`}
              >
                <Monitor className="w-4 h-4" />
              </button>
              <button
                onClick={() => setDevice('mobile')}
                type="button"
                title="Mobile"
                aria-pressed={device === 'mobile'}
                className={`p-2 transition-colors ${device === 'mobile' ? 'bg-[#FF9F1C] text-white' : isDark ? 'bg-[#1a1a1a] text-gray-400 hover:text-white' : 'bg-white text-gray-500 hover:text-black'}`}
              >
                <Smartphone className="w-4 h-4" />
              </button>
            </div>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.modal.openInNewTab}
              aria-label={t.modal.openInNewTab}
              className={`p-2 rounded-lg border transition-colors ${isDark ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800' : 'border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100'}`}
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            {isDetailsPanelCollapsed && (
              <button
                type="button"
                onClick={toggleDetailsPanel}
                title={language === 'zh' ? '展开详情' : 'Expand details'}
                aria-label={language === 'zh' ? '展开详情' : 'Expand details'}
                className="p-2 rounded-lg bg-[#FF9F1C] text-white transition-colors hover:bg-[#E8900A]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
          <div
            className="bg-white shadow-2xl rounded-lg transition-all duration-300 h-full overflow-hidden"
            style={{
              width: getDeviceWidth(),
              maxWidth: '100%'
            }}
          >
            <iframe
              src={demoUrl}
              className="w-full h-full border-0"
              title={`${style.name} Demo`}
              sandbox="allow-same-origin"
            />
          </div>
        </div>
      </div>

      {/* Details Panel */}
      <div
        className={`flex flex-col shrink-0 border-l transition-all duration-300 overflow-hidden ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}
        style={{ width: isDetailsPanelCollapsed ? '0px' : '400px', height: '100%' }}
      >
      <div className="w-[400px] h-full flex flex-col shrink-0">
        {/* Header with Rating & Tags */}
        <div className={`border-b px-4 py-3 flex items-center justify-between shrink-0 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleDetailsPanel}
              title={language === 'zh' ? '收起详情' : 'Collapse details'}
              aria-label={language === 'zh' ? '收起详情' : 'Collapse details'}
              className={`shrink-0 p-2 rounded-lg border transition-colors ${isDark ? 'border-gray-700 text-gray-400 hover:text-white hover:bg-gray-800' : 'border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100'}`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF9F1C] text-white rounded">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span className="text-sm font-bold">{style.rating}</span>
            </div>
            <div className="flex gap-1.5">
              {(language === 'zh' ? style.tags : style.tagsEn).slice(0, 2).map((tag, i) => (
                <span key={i} className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Style Name */}
          <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
            {language === 'zh' ? style.name : style.nameEn}
          </h3>

          {/* Description */}
          <p className={`text-xs leading-relaxed mb-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {language === 'zh' ? style.description : style.descriptionEn}
          </p>

          {/* AI Prompt Section */}
          {promptData && (
            <div className={`mb-5 border rounded-lg p-4 ${isDark ? 'bg-[#0a0a0a] border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-[#FF9F1C]" />
                <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-white' : 'text-black'}`}>
                  {t.modal.aiPrompt}
                </h4>
              </div>
              <div className={`border rounded-lg p-3 mb-3 ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
                <pre className={`text-[11px] whitespace-pre-wrap font-mono leading-relaxed line-clamp-3 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {language === 'zh' ? promptData.shortPrompt : promptData.shortPromptEn}
                </pre>
              </div>
              <button
                onClick={handleCopyPrompt}
                className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs uppercase tracking-wider rounded-lg transition-colors ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-[#FF9F1C] text-white hover:bg-[#E8900A]'
                }`}
              >
                {copied ? (
                  <>
                    <CheckCheck className="w-4 h-4" />
                    {t.modal.copiedFull}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t.modal.copyFullPrompt}
                  </>
                )}
              </button>
            </div>
          )}

          {/* Core Features */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.modal.features}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'zh' ? style.features : style.featuresEn).slice(0, 5).map((feature, i) => (
                <span key={i} className={`px-2.5 py-1 text-[10px] rounded ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                  {feature.split(' - ')[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.modal.useCases}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'zh' ? style.useCases : style.useCasesEn).slice(0, 4).map((useCase, i) => (
                <span key={i} className="px-2.5 py-1 text-[10px] bg-black text-white rounded">
                  {useCase}
                </span>
              ))}
            </div>
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 ${isDark ? 'text-white' : 'text-black'}`}>
                <span className="text-green-500">✓</span> {t.modal.pros || '优点'}
              </h4>
              <ul className="space-y-1">
                {(language === 'zh' ? style.pros : style.prosEn).slice(0, 3).map((pro, i) => (
                  <li key={i} className={`text-[10px] flex items-start gap-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                    {pro.split(' - ')[0]}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 ${isDark ? 'text-white' : 'text-black'}`}>
                <span className="text-red-500">✗</span> {t.modal.cons || '缺点'}
              </h4>
              <ul className="space-y-1">
                {(language === 'zh' ? style.cons : style.consEn).slice(0, 3).map((con, i) => (
                  <li key={i} className={`text-[10px] flex items-start gap-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    <CircleX className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    {con.split(' - ')[0]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.modal.colors || '配色方案'}
            </h4>
            <div className="flex gap-2">
              {style.colors.slice(0, 5).map((color, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-lg shadow-sm border border-gray-200"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Examples */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-white' : 'text-black'}`}>
              {t.modal.examples || '代表案例'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'zh' ? style.examples : style.examplesEn).slice(0, 4).map((example, i) => (
                <span key={i} className={`px-2.5 py-1 text-[10px] rounded border ${isDark ? 'border-gray-700 text-gray-400' : 'border-gray-200 text-gray-600'}`}>
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
