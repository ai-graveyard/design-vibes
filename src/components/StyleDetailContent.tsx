import { Star, Copy, CheckCheck, Monitor, Smartphone, Sparkles, Check, CircleX, ExternalLink, ChevronLeft, ChevronRight, ChevronDown, Eye, Code, TriangleAlert } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { getPromptById } from '../data/prompts';
import { useState } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { DemoCodeView } from './DemoCodeView';
import { DesignTokens } from './DesignTokens';
import { useIsMobile } from '../hooks/useIsMobile';

interface StyleDetailContentProps {
  style: DesignStyle;
}

/** AI 提示词区块：展示与复制的都是完整提示词，收起时仅视觉截断 */
function PromptSection({ styleId }: { styleId: string }) {
  const { language } = useAppStore();
  const t = translations[language];
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const promptData = getPromptById(styleId);

  if (!promptData) return null;
  const fullPrompt = language === 'zh' ? promptData.prompt : promptData.promptEn;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`mb-5 border rounded-lg p-4 bg-gray-50 border-gray-200 dark:bg-[#0a0a0a] dark:border-gray-800`}>
      <div className="flex items-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-[#FF9F1C]" />
        <h4 className={`text-xs font-bold uppercase tracking-wider text-black dark:text-white`}>
          {t.modal.aiPrompt}
        </h4>
      </div>
      <div className={`border rounded-lg p-3 mb-3 bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800`}>
        <pre className={`text-[11px] whitespace-pre-wrap font-mono leading-relaxed ${expanded ? '' : 'line-clamp-4'} text-gray-600 dark:text-gray-400`}>
          {fullPrompt}
        </pre>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className={`mt-2 flex items-center gap-1 text-[10px] uppercase tracking-wider transition-colors text-gray-400 hover:text-black dark:text-gray-500 dark:hover:text-white`}
        >
          {expanded ? t.modal.collapsePrompt : t.modal.expandPrompt}
          <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <button
        onClick={handleCopy}
        type="button"
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
  );
}

export function StyleDetailContent({ style }: StyleDetailContentProps) {
  const isMobile = useIsMobile();
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview');
  const {
    language,
    previewDevice: device,
    setPreviewDevice: setDevice,
    isDetailsPanelCollapsed,
    toggleDetailsPanel,
  } = useAppStore();
  const t = translations[language];

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile': return '375px';
      default: return '100%';
    }
  };

  const demoUrl = `/demos/${style.id}.html`;

  // Mobile layout: single scrollable column
  if (isMobile) {
    return (
      <div className="h-full overflow-y-auto">
        {/* Preview Area */}
        <div className={`bg-gray-100 dark:bg-[#2a2a2a]`}>
          {/* Header */}
          <div className={`border-b px-4 py-3 flex items-center justify-between bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800`}>
            <div className="flex items-center gap-2">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
              </span>
              <h2 className={`text-sm font-bold text-black dark:text-white`}>
                {language === 'zh' ? style.name : style.nameEn}
              </h2>
            </div>
            <div className="flex items-center gap-1.5">
              {/* View Toggle: Preview / Code */}
              <div className={`flex items-center gap-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700`}>
                <button
                  onClick={() => setViewMode('preview')}
                  type="button"
                  title={t.modal.previewTab}
                  aria-pressed={viewMode === 'preview'}
                  className={`p-2 transition-colors ${viewMode === 'preview' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-gray-500 hover:text-black dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white'}`}
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('code')}
                  type="button"
                  title={t.modal.codeTab}
                  aria-pressed={viewMode === 'code'}
                  className={`p-2 transition-colors ${viewMode === 'code' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-gray-500 hover:text-black dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white'}`}
                >
                  <Code className="w-4 h-4" />
                </button>
              </div>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={t.modal.openInNewTab}
                aria-label={t.modal.openInNewTab}
                className={`p-2 rounded-lg transition-colors text-gray-500 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Iframe / Code view - fixed height area */}
          <div className="p-4">
            {viewMode === 'code' ? (
              <div className="h-[440px]">
                <DemoCodeView styleId={style.id} />
              </div>
            ) : (
              <div className="aspect-[16/10] bg-white shadow-2xl rounded-lg overflow-hidden">
                <iframe
                  src={demoUrl}
                  className="w-full h-full border-0"
                  title={`${style.name} Demo`}
                  sandbox="allow-same-origin"
                />
              </div>
            )}
          </div>
        </div>

        {/* Details Panel */}
        <div className={`bg-white dark:bg-[#1a1a1a]`}>
          {/* Header with Rating & Tags */}
          <div className={`border-b px-5 py-4 flex items-center justify-between border-gray-200 dark:border-gray-800`}>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF9F1C] text-white rounded">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span className="text-sm font-bold">{style.rating}</span>
              </div>
              <div className="flex gap-1.5">
                {(language === 'zh' ? style.tags : style.tagsEn).slice(0, 2).map((tag, i) => (
                  <span key={i} className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-5 py-5">
            {/* Style Name */}
            <h3 className={`text-xl font-bold mb-2 text-black dark:text-white`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h3>

            {/* Description */}
            <p className={`text-xs leading-relaxed mb-5 text-gray-600 dark:text-gray-400`}>
              {language === 'zh' ? style.description : style.descriptionEn}
            </p>

            {/* AI Prompt Section */}
            <PromptSection styleId={style.id} />

            {/* Core Features */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
                {t.modal.features}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'zh' ? style.features : style.featuresEn).slice(0, 5).map((feature, i) => (
                  <span key={i} className={`px-2.5 py-1 text-[10px] rounded bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`}>
                    {feature.split(' - ')[0]}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
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
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 text-black dark:text-white`}>
                  <span className="text-green-500">✓</span> {t.modal.pros || '优点'}
                </h4>
                <ul className="space-y-1">
                  {(language === 'zh' ? style.pros : style.prosEn).slice(0, 3).map((pro, i) => (
                    <li key={i} className={`text-[10px] flex items-start gap-1 text-gray-600 dark:text-gray-400`}>
                      <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                      {pro.split(' - ')[0]}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 text-black dark:text-white`}>
                  <span className="text-red-500">✗</span> {t.modal.cons || '缺点'}
                </h4>
                <ul className="space-y-1">
                  {(language === 'zh' ? style.cons : style.consEn).slice(0, 3).map((con, i) => (
                    <li key={i} className={`text-[10px] flex items-start gap-1 text-gray-600 dark:text-gray-400`}>
                      <CircleX className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                      {con.split(' - ')[0]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pitfalls */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-black dark:text-white`}>
                <TriangleAlert className="w-3.5 h-3.5 text-amber-500" />
                {t.modal.pitfalls}
              </h4>
              <p className={`text-[10px] mb-2 text-gray-400 dark:text-gray-500`}>
                {t.modal.pitfallsHint}
              </p>
              <ul className={`space-y-1.5 border rounded-lg p-3 border-amber-200 bg-amber-50/60 dark:border-amber-500/20 dark:bg-amber-500/5`}>
                {(language === 'zh' ? style.pitfalls : style.pitfallsEn).map((pitfall, i) => (
                  <li key={i} className={`text-[11px] leading-relaxed flex items-start gap-1.5 text-gray-700 dark:text-gray-300`}>
                    <span className="text-amber-500 shrink-0">•</span>
                    {pitfall}
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Palette */}
            <div className="mb-5">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
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

            {/* Design Tokens（提取自 demo :root） */}
            <DesignTokens styleId={style.id} />

            {/* Examples */}
            <div className="pb-4">
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
                {t.modal.examples || '代表案例'}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {(language === 'zh' ? style.examples : style.examplesEn).slice(0, 4).map((example, i) => (
                  <span key={i} className={`px-2.5 py-1 text-[10px] rounded border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-400`}>
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
        className={`flex flex-col flex-1 min-w-0 transition-all duration-300 bg-gray-100 dark:bg-[#2a2a2a]`}
        style={{ height: '100%' }}
      >
        {/* Header */}
        <div className={`border-b px-4 py-3 flex items-center justify-between bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800`}>
          <div className="flex items-center gap-2 min-w-0">
            <span className="relative flex w-1.5 h-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
            </span>
            <h2 className={`text-sm font-bold truncate text-black dark:text-white`}>
              {language === 'zh' ? style.name : style.nameEn}
            </h2>
            <span className={`hidden lg:inline text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500`}>
              {t.modal.livePreview}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* View Toggle: Preview / Code */}
            <div className={`flex items-center gap-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700`}>
              <button
                onClick={() => setViewMode('preview')}
                type="button"
                title={t.modal.previewTab}
                aria-pressed={viewMode === 'preview'}
                className={`p-2 transition-colors ${viewMode === 'preview' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-gray-500 hover:text-black dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white'}`}
              >
                <Eye className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('code')}
                type="button"
                title={t.modal.codeTab}
                aria-pressed={viewMode === 'code'}
                className={`p-2 transition-colors ${viewMode === 'code' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-gray-500 hover:text-black dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white'}`}
              >
                <Code className="w-4 h-4" />
              </button>
            </div>

            {/* Device Toggle（仅预览模式） */}
            {viewMode === 'preview' && (
              <div className={`flex items-center gap-0 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700`}>
                <button
                  onClick={() => setDevice('desktop')}
                  type="button"
                  title={t.modal.desktop}
                  aria-label={t.modal.desktop}
                  aria-pressed={device === 'desktop'}
                  className={`p-2 transition-colors ${device === 'desktop' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-gray-500 hover:text-black dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  type="button"
                  title={t.modal.mobile}
                  aria-label={t.modal.mobile}
                  aria-pressed={device === 'mobile'}
                  className={`p-2 transition-colors ${device === 'mobile' ? 'bg-[#FF9F1C] text-white' : 'bg-white text-gray-500 hover:text-black dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white'}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.modal.openInNewTab}
              aria-label={t.modal.openInNewTab}
              className={`p-2 rounded-lg border transition-colors border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800`}
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

        {/* Iframe / Code view */}
        <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
          {viewMode === 'code' ? (
            <DemoCodeView styleId={style.id} />
          ) : (
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
          )}
        </div>
      </div>

      {/* Details Panel */}
      <div
        className={`flex flex-col shrink-0 border-l transition-all duration-300 overflow-hidden bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800`}
        style={{ width: isDetailsPanelCollapsed ? '0px' : '400px', height: '100%' }}
      >
      <div className="w-[400px] h-full flex flex-col shrink-0">
        {/* Header with Rating & Tags */}
        <div className={`border-b px-4 py-3 flex items-center justify-between shrink-0 border-gray-200 dark:border-gray-800`}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleDetailsPanel}
              title={language === 'zh' ? '收起详情' : 'Collapse details'}
              aria-label={language === 'zh' ? '收起详情' : 'Collapse details'}
              className={`shrink-0 p-2 rounded-lg border transition-colors border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF9F1C] text-white rounded">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span className="text-sm font-bold">{style.rating}</span>
            </div>
            <div className="flex gap-1.5">
              {(language === 'zh' ? style.tags : style.tagsEn).slice(0, 2).map((tag, i) => (
                <span key={i} className={`px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-5 py-5">
          {/* Style Name */}
          <h3 className={`text-xl font-bold mb-2 text-black dark:text-white`}>
            {language === 'zh' ? style.name : style.nameEn}
          </h3>

          {/* Description */}
          <p className={`text-xs leading-relaxed mb-5 text-gray-600 dark:text-gray-400`}>
            {language === 'zh' ? style.description : style.descriptionEn}
          </p>

          {/* AI Prompt Section */}
          <PromptSection styleId={style.id} />

          {/* Core Features */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
              {t.modal.features}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'zh' ? style.features : style.featuresEn).slice(0, 5).map((feature, i) => (
                <span key={i} className={`px-2.5 py-1 text-[10px] rounded bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300`}>
                  {feature.split(' - ')[0]}
                </span>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
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
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 text-black dark:text-white`}>
                <span className="text-green-500">✓</span> {t.modal.pros || '优点'}
              </h4>
              <ul className="space-y-1">
                {(language === 'zh' ? style.pros : style.prosEn).slice(0, 3).map((pro, i) => (
                  <li key={i} className={`text-[10px] flex items-start gap-1 text-gray-600 dark:text-gray-400`}>
                    <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                    {pro.split(' - ')[0]}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-1 text-black dark:text-white`}>
                <span className="text-red-500">✗</span> {t.modal.cons || '缺点'}
              </h4>
              <ul className="space-y-1">
                {(language === 'zh' ? style.cons : style.consEn).slice(0, 3).map((con, i) => (
                  <li key={i} className={`text-[10px] flex items-start gap-1 text-gray-600 dark:text-gray-400`}>
                    <CircleX className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
                    {con.split(' - ')[0]}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pitfalls */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 text-black dark:text-white`}>
              <TriangleAlert className="w-3.5 h-3.5 text-amber-500" />
              {t.modal.pitfalls}
            </h4>
            <p className={`text-[10px] mb-2 text-gray-400 dark:text-gray-500`}>
              {t.modal.pitfallsHint}
            </p>
            <ul className={`space-y-1.5 border rounded-lg p-3 border-amber-200 bg-amber-50/60 dark:border-amber-500/20 dark:bg-amber-500/5`}>
              {(language === 'zh' ? style.pitfalls : style.pitfallsEn).map((pitfall, i) => (
                <li key={i} className={`text-[11px] leading-relaxed flex items-start gap-1.5 text-gray-700 dark:text-gray-300`}>
                  <span className="text-amber-500 shrink-0">•</span>
                  {pitfall}
                </li>
              ))}
            </ul>
          </div>

          {/* Color Palette */}
          <div className="mb-5">
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
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

          {/* Design Tokens（提取自 demo :root） */}
          <DesignTokens styleId={style.id} />

          {/* Examples */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 text-black dark:text-white`}>
              {t.modal.examples || '代表案例'}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(language === 'zh' ? style.examples : style.examplesEn).slice(0, 4).map((example, i) => (
                <span key={i} className={`px-2.5 py-1 text-[10px] rounded border border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-400`}>
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
