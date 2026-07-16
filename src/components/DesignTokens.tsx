import { useMemo, useState } from 'react';
import { Copy, Check, Braces } from 'lucide-react';
import { useDemoSource } from '../hooks/useDemoSource';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

interface DesignTokensProps {
  styleId: string;
}

const isColorValue = (v: string) =>
  /^#[0-9a-fA-F]{3,8}$/.test(v) || /^(rgb|hsl)a?\(/.test(v);

/** Design Tokens 区块：直接解析 demo 源码的 :root 变量，保证与实况预览一致 */
export function DesignTokens({ styleId }: DesignTokensProps) {
  const { source } = useDemoSource(styleId);
  const { language, theme } = useAppStore();
  const t = translations[language];
  const isDark = theme === 'dark';
  const [copied, setCopied] = useState(false);

  const tokens = useMemo(() => {
    if (!source) return [];
    const m = /:root\s*\{([^}]*)\}/.exec(source);
    if (!m) return [];
    return [...m[1].matchAll(/--([-\w]+)\s*:\s*([^;]+);/g)].map((mm) => ({
      name: `--${mm[1]}`,
      value: mm[2].trim().replace(/\s+/g, ' '),
    }));
  }, [source]);

  if (tokens.length === 0) return null;

  const cssBlock = `:root {\n${tokens.map((tk) => `  ${tk.name}: ${tk.value};`).join('\n')}\n}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(cssBlock);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-2">
        <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-black'}`}>
          <Braces className="w-3.5 h-3.5 text-[#FF9F1C]" />
          {t.modal.designTokens}
        </h4>
        <button
          type="button"
          onClick={handleCopy}
          className={`flex items-center gap-1 px-2 py-1 text-[10px] uppercase tracking-wider rounded transition-colors ${
            copied
              ? 'bg-green-500 text-white'
              : isDark
                ? 'bg-gray-800 text-gray-300 hover:bg-[#FF9F1C] hover:text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-[#FF9F1C] hover:text-white'
          }`}
        >
          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
          {copied ? t.card.copied : t.modal.copyTokens}
        </button>
      </div>
      <p className={`text-[10px] mb-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
        {t.modal.tokensHint}
      </p>
      <div className={`border rounded-lg overflow-hidden ${isDark ? 'border-gray-800 bg-[#0a0a0a]' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-h-52 overflow-y-auto px-3 py-2">
          {tokens.map((tk) => (
            <div key={tk.name} className="flex items-center gap-2 py-1 min-w-0">
              {isColorValue(tk.value) ? (
                <span
                  className="w-3.5 h-3.5 rounded shrink-0 border border-black/10"
                  style={{ backgroundColor: tk.value }}
                />
              ) : (
                <span className="w-3.5 h-3.5 shrink-0" />
              )}
              <code className={`text-[10.5px] font-mono shrink-0 ${isDark ? 'text-sky-300' : 'text-sky-700'}`}>
                {tk.name}
              </code>
              <code className={`text-[10.5px] font-mono truncate ${isDark ? 'text-gray-400' : 'text-gray-500'}`} title={tk.value}>
                {tk.value}
              </code>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
