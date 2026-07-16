import { useMemo, useState } from 'react';
import { Copy, Check, Download, FileCode2 } from 'lucide-react';
import { useDemoSource } from '../hooks/useDemoSource';
import { highlightDemoHtml, renderCodeLines } from '../lib/highlightHtml';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

interface DemoCodeViewProps {
  styleId: string;
}

/** demo 源码只读查看器：固定深色底 + 轻量高亮 + 复制/下载 */
export function DemoCodeView({ styleId }: DemoCodeViewProps) {
  const { source, error } = useDemoSource(styleId);
  const { language } = useAppStore();
  const t = translations[language];
  const [copied, setCopied] = useState(false);

  const html = useMemo(
    () => (source ? renderCodeLines(highlightDemoHtml(source)) : ''),
    [source]
  );

  const handleCopy = async () => {
    if (!source) return;
    await navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!source) return;
    const blob = new Blob([source], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${styleId}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full h-full flex flex-col rounded-lg overflow-hidden bg-[#0d1117] shadow-2xl">
      {/* Toolbar */}
      <div className="shrink-0 flex items-center justify-between gap-2 px-3 py-2 border-b border-white/10">
        <div className="flex items-center gap-2 min-w-0">
          <FileCode2 className="w-3.5 h-3.5 text-gray-500 shrink-0" />
          <span className="text-[11px] font-mono text-gray-400 truncate">
            demos/{styleId}.html
            {source && (
              <span className="text-gray-600"> · {(source.length / 1024).toFixed(1)} KB · HTML + CSS only</span>
            )}
          </span>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            type="button"
            onClick={handleCopy}
            disabled={!source}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] uppercase tracking-wider rounded transition-colors disabled:opacity-40 ${
              copied ? 'bg-green-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-[#FF9F1C] hover:text-white'
            }`}
          >
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? t.card.copied : t.modal.copyCode}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={!source}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] uppercase tracking-wider rounded bg-white/10 text-gray-300 hover:bg-[#FF9F1C] hover:text-white transition-colors disabled:opacity-40"
          >
            <Download className="w-3 h-3" />
            {t.modal.downloadCode}
          </button>
        </div>
      </div>

      {/* Code */}
      <div className="flex-1 overflow-auto">
        {error ? (
          <div className="p-6 text-xs font-mono text-red-400">{t.modal.codeLoadError}</div>
        ) : !source ? (
          <div className="p-6 text-xs font-mono text-gray-500 animate-pulse">…</div>
        ) : (
          <pre className="code-viewer text-[11.5px] leading-[1.7] font-mono py-4 pr-4">
            <code dangerouslySetInnerHTML={{ __html: html }} />
          </pre>
        )}
      </div>
    </div>
  );
}
