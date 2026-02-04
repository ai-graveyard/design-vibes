import { X, Monitor, Tablet, Smartphone, Copy, Check, Sparkles } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { getPromptById } from '../data/prompts';
import { useState } from 'react';

type DeviceType = 'desktop' | 'tablet' | 'mobile';

interface DemoModalProps {
  style: DesignStyle | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ style, isOpen, onClose }: DemoModalProps) {
  const [device, setDevice] = useState<DeviceType>('desktop');
  const [copied, setCopied] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  if (!isOpen || !style) return null;

  const getDeviceWidth = () => {
    switch (device) {
      case 'mobile': return '375px';
      case 'tablet': return '768px';
      default: return '100%';
    }
  };

  const demoUrl = `/demos/${style.id}.html`;
  const promptData = getPromptById(style.id);

  const handleCopyPrompt = async () => {
    if (promptData) {
      await navigator.clipboard.writeText(promptData.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Header */}
      <div className="relative z-10 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold text-black">{style.name}</h2>
          <span className="text-sm text-gray-500">{style.nameEn}</span>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Copy Prompt Button */}
          <button
            onClick={() => setShowPrompt(!showPrompt)}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            {showPrompt ? '隐藏提示词' : '获取提示词'}
          </button>

          {/* Device toggle */}
          <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-2 rounded transition-colors ${
                device === 'desktop' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              <Monitor className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice('tablet')}
              className={`p-2 rounded transition-colors ${
                device === 'tablet' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              <Tablet className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDevice('mobile')}
              className={`p-2 rounded transition-colors ${
                device === 'mobile' ? 'bg-white shadow-sm text-black' : 'text-gray-500 hover:text-black'
              }`}
            >
              <Smartphone className="w-4 h-4" />
            </button>
          </div>
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Prompt Panel */}
      {showPrompt && promptData && (
        <div className="relative z-10 bg-gray-50 border-b border-gray-200 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-black">AI 提示词</h3>
                <p className="text-sm text-gray-500">复制以下提示词，粘贴到 ChatGPT/Claude 等 AI 工具中使用</p>
              </div>
              <button
                onClick={handleCopyPrompt}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  copied 
                    ? 'bg-green-500 text-white' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    已复制
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    复制提示词
                  </>
                )}
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4 max-h-60 overflow-y-auto">
              <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                {promptData.prompt}
              </pre>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
              <span className="bg-gray-200 px-2 py-1 rounded">简化版</span>
              <span>{promptData.shortPrompt}</span>
            </div>
          </div>
        </div>
      )}

      {/* Iframe container */}
      <div className="relative z-10 flex-1 bg-gray-900 overflow-auto flex items-start justify-center p-8">
        <div 
          className="bg-white shadow-2xl transition-all duration-300"
          style={{ 
            width: getDeviceWidth(),
            minWidth: device === 'desktop' ? '100%' : undefined,
            height: '100%'
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

      {/* Footer info */}
      <div className="relative z-10 bg-white border-t border-gray-200 px-4 py-2 flex items-center gap-4 text-sm">
        <span className="text-gray-500">评分: <span className="text-black font-semibold">{style.rating}</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">{style.tags.join(', ')}</span>
      </div>
    </div>
  );
}
