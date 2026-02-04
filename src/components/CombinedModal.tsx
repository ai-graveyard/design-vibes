import { X, Star, Copy, CheckCheck, ChevronLeft, ChevronRight, Monitor, Smartphone, Sparkles, Check, CircleX } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { getPromptById } from '../data/prompts';
import { useState, useEffect } from 'react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

type DeviceType = 'desktop' | 'mobile';

interface CombinedModalProps {
  style: DesignStyle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function CombinedModal({ style, isOpen, onClose }: CombinedModalProps) {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [copied, setCopied] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { language, theme } = useAppStore();
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

  // Reset device when modal opens
  useEffect(() => {
    if (isOpen) {
      setDevice('desktop');
      setIsDetailsOpen(true);
    }
  }, [isOpen]);

  if (!isOpen || !style) return null;

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

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className={`relative z-10 w-full h-full flex ${isMobile ? 'flex-col' : 'flex-row'}`}>

        {/* Preview Area */}
        <div
          className={`flex flex-col transition-all duration-300 ${isDark ? 'bg-[#2a2a2a]' : 'bg-gray-100'}`}
          style={{
            width: isMobile ? '100%' : (isDetailsOpen ? '55%' : '100%'),
            height: isMobile ? '50%' : '100%'
          }}
        >
          {/* Header */}
          <div className={`border-b px-4 py-3 flex items-center justify-between ${isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center gap-4">
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-400 hover:text-black hover:bg-gray-100'}`}
              >
                <X className="w-4 h-4" />
              </button>
              <h2 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                {language === 'zh' ? style.name : style.nameEn}
              </h2>
            </div>

            {/* Device Toggle - hidden on mobile */}
            {!isMobile && (
              <div className={`flex items-center gap-0 rounded-lg overflow-hidden border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <button
                  onClick={() => setDevice('desktop')}
                  className={`p-2 transition-colors ${device === 'desktop' ? 'bg-[#FF9F1C] text-white' : isDark ? 'bg-[#1a1a1a] text-gray-400 hover:text-white' : 'bg-white text-gray-500 hover:text-black'}`}
                >
                  <Monitor className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setDevice('mobile')}
                  className={`p-2 transition-colors ${device === 'mobile' ? 'bg-[#FF9F1C] text-white' : isDark ? 'bg-[#1a1a1a] text-gray-400 hover:text-white' : 'bg-white text-gray-500 hover:text-black'}`}
                >
                  <Smartphone className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Iframe */}
          <div className="flex-1 overflow-hidden flex items-center justify-center p-4">
            <div
              className="bg-white shadow-2xl rounded-lg transition-all duration-300 h-full overflow-hidden"
              style={{
                width: isMobile ? '100%' : getDeviceWidth(),
                maxWidth: '100%'
              }}
            >
              <iframe
                src={demoUrl}
                className="w-full h-full border-0"
                title={`${style.name} Demo`}
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>
        </div>

        {/* Desktop: Collapse Toggle Button */}
        {!isMobile && (
          <button
            onClick={() => setIsDetailsOpen(!isDetailsOpen)}
            className={`absolute top-1/2 -translate-y-1/2 z-20 w-6 h-16 rounded-l-lg flex items-center justify-center transition-colors ${isDark ? 'bg-[#1a1a1a] hover:bg-gray-800' : 'bg-white hover:bg-gray-50'}`}
            style={{
              left: isDetailsOpen ? '55%' : '100%',
              transform: isDetailsOpen ? 'translate(-100%, -50%)' : 'translate(-100%, -50%)'
            }}
          >
            {isDetailsOpen ? (
              <ChevronRight className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            ) : (
              <ChevronLeft className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            )}
          </button>
        )}

        {/* Details Panel */}
        <div
          className={`flex flex-col transition-all duration-300 overflow-hidden ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}
          style={{
            width: isMobile ? '100%' : (isDetailsOpen ? '45%' : '0%'),
            height: isMobile ? '50%' : '100%',
            opacity: isMobile ? 1 : (isDetailsOpen ? 1 : 0),
            pointerEvents: isMobile ? 'auto' : (isDetailsOpen ? 'auto' : 'none')
          }}
        >
          {/* Header with Rating & Tags */}
          <div className={`border-b px-5 py-4 flex items-center justify-between shrink-0 ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
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
