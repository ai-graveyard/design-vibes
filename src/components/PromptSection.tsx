import { useState } from 'react';
import { Check, Copy, Download, Sparkles } from 'lucide-react';
import { getFullPromptText, getPromptById, getReproductionPrompt } from '../data/prompts';
import { useDemoSource } from '../hooks/useDemoSource';
import { useAppStore } from '../store/appStore';

export function PromptSection({ styleId }: { styleId: string }) {
  const { language } = useAppStore();
  const zh = language === 'zh';
  const [mode, setMode] = useState<'style' | 'reference'>('reference');
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const { source, error } = useDemoSource(styleId);
  const prompt = getPromptById(styleId);
  if (!prompt) return null;
  const text = mode === 'reference'
    ? source ? getReproductionPrompt(prompt, language, source, window.location.origin) : ''
    : getFullPromptText(prompt, language);
  const copy = async () => {
    try { await navigator.clipboard.writeText(text); setStatus('copied'); }
    catch { setStatus('error'); }
    setTimeout(() => setStatus('idle'), 2200);
  };
  const download = () => {
    const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown;charset=utf-8' }));
    const link = document.createElement('a'); link.href = url; link.download = `${styleId}-${mode}-${language}.md`; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <section className="prompt-panel">
      <h3><Sparkles size={15} />{zh ? '带走这个设计' : 'Make it your own'}</h3>
      <div className="prompt-tabs" aria-label={zh ? '提示词类型' : 'Prompt type'}>
        <button aria-pressed={mode === 'reference'} onClick={() => { setMode('reference'); setStatus('idle'); }}>{zh ? '复现当前演示' : 'Match this demo'}</button>
        <button aria-pressed={mode === 'style'} onClick={() => { setMode('style'); setStatus('idle'); }}>{zh ? '应用这种风格' : 'Apply the style'}</button>
      </div>
      <p>{mode === 'reference'
        ? zh ? '包含参考页面、完整变量、构图说明和视觉验收要求。' : 'Includes the reference, full tokens, composition and visual checks.'
        : zh ? '保留你的业务内容，按照风格原则调整布局与视觉。' : 'Keep your content and adapt the layout and visual principles.'}</p>
      <details><summary>{zh ? '阅读提示词' : 'Read the brief'}</summary><pre>{text || (error ? (zh ? '参考加载失败，请刷新重试。' : 'Reference could not load. Please refresh.') : (zh ? '正在读取参考…' : 'Loading reference…'))}</pre></details>
      <div className="prompt-buttons">
        <button className="studio-primary" disabled={!text} onClick={copy}>{status === 'copied' ? <Check size={15} /> : <Copy size={15} />}{status === 'copied' ? (zh ? '已复制' : 'Copied') : (zh ? '复制提示词' : 'Copy brief')}</button>
        <button disabled={!text} onClick={download} aria-label={zh ? '下载参考资料' : 'Download brief'}><Download size={16} /></button>
      </div>
      <a className="reference-download" href={`/demos/${styleId}.html`} download={`${styleId}.html`}><Download size={13} />{zh ? '下载完整 HTML · 含字体与素材' : 'Download complete HTML · fonts & assets included'}</a>
      {status === 'error' && <p role="status">{zh ? '复制失败，可下载参考资料。' : 'Could not copy. Download the brief instead.'}</p>}
    </section>
  );
}
