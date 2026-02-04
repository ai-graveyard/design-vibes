import { X, Star, Check, XCircle, ExternalLink, Palette, Briefcase, ThumbsUp, ThumbsDown, Copy, Sparkles } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { demoComponents } from './demos';
import { getPromptById } from '../data/prompts';
import { useState } from 'react';

interface StyleDetailModalProps {
  style: DesignStyle | null;
  isOpen: boolean;
  onClose: () => void;
  onViewDemo: () => void;
}

export function StyleDetailModal({ style, isOpen, onClose, onViewDemo }: StyleDetailModalProps) {
  const [copied, setCopied] = useState(false);
  
  if (!isOpen || !style) return null;

  const DemoComponent = demoComponents[style.id];
  const promptData = getPromptById(style.id);

  const handleCopyPrompt = async () => {
    if (promptData) {
      await navigator.clipboard.writeText(promptData.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white overflow-hidden border border-gray-200 animate-slide-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          {/* Hero Demo */}
          <div className="relative aspect-[21/9] overflow-hidden bg-gray-50 border-b border-gray-200">
            {DemoComponent && <DemoComponent />}
            
            {/* View Demo Button */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={onViewDemo}
                className="px-4 py-2 bg-black text-white text-sm font-medium hover:bg-[#FF9F1C] transition-colors flex items-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                预览完整网站
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-8">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex items-center gap-1 px-3 py-1 bg-black text-white">
                    <Star className="w-4 h-4 fill-white" />
                    <span className="text-sm font-semibold">{style.rating}</span>
                  </div>
                  {style.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-black">{style.name}</h2>
                <p className="text-lg text-gray-500 uppercase tracking-wider">{style.nameEn}</p>
              </div>
            </div>

            {/* Copy Prompt Section */}
            {promptData && (
              <div className="border border-gray-200 p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FF9F1C]" />
                    <h3 className="text-sm font-bold text-black uppercase tracking-wide">AI 提示词</h3>
                  </div>
                  <button
                    onClick={handleCopyPrompt}
                    className={`flex items-center gap-2 px-3 py-1.5 text-xs uppercase tracking-wide transition-colors ${
                      copied 
                        ? 'bg-green-500 text-white' 
                        : 'bg-black text-white hover:bg-[#FF9F1C]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3" />
                        已复制
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        复制提示词
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-white border border-gray-200 p-3 max-h-32 overflow-y-auto">
                  <pre className="text-xs text-gray-600 whitespace-pre-wrap font-mono leading-relaxed">
                    {promptData.shortPrompt}
                  </pre>
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">{style.description}</p>
            </div>

            {/* Features */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-5 h-5 text-black" />
                <h3 className="text-lg font-bold text-black">核心特点</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {style.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-3 bg-gray-50 border border-gray-200"
                  >
                    <div className="w-2 h-2 bg-black" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-5 h-5 text-black" />
                <h3 className="text-lg font-bold text-black">适用场景</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {style.useCases.map((useCase, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-black text-white text-sm"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsUp className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-bold text-black">优点</h3>
                </div>
                <ul className="space-y-2">
                  {style.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-black mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ThumbsDown className="w-5 h-5 text-black" />
                  <h3 className="text-lg font-bold text-black">缺点</h3>
                </div>
                <ul className="space-y-2">
                  {style.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Color Palette */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">配色方案</h3>
              <div className="flex gap-3 flex-wrap">
                {style.colors.map((color, i) => (
                  <div
                    key={i}
                    className="group relative"
                  >
                    <div
                      className="w-16 h-16 border border-gray-200 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: color }}
                    />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div>
              <h3 className="text-lg font-bold text-black mb-4">代表案例</h3>
              <div className="flex flex-wrap gap-3">
                {style.examples.map((example, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 border border-gray-200 text-sm"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
