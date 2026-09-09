import { useEffect, useRef, useState } from 'react';
import { PanelRightClose, PanelRightOpen } from 'lucide-react';
import type { DesignStyle } from '../data/styles';
import { useAppStore, type PreviewDevice } from '../store/appStore';
import { useIsMobile } from '../hooks/useIsMobile';
import { DemoViewport } from './DemoViewport';
import { PreviewToolbar } from './PreviewToolbar';
import { DemoCodeView } from './DemoCodeView';
import { DesignTokens } from './DesignTokens';
import { PromptSection } from './PromptSection';
import { StyleNotes } from './StyleNotes';

export function StyleDetailContent({ style }: { style: DesignStyle }) {
  const { language, previewDevice, setPreviewDevice, isDetailsPanelCollapsed, toggleDetailsPanel } = useAppStore();
  const isMobile = useIsMobile();
  const [mobileDevice, setMobileDevice] = useState<PreviewDevice>('mobile');
  const device = isMobile ? mobileDevice : previewDevice;
  const setDevice = isMobile ? setMobileDevice : setPreviewDevice;
  const zh = language === 'zh';
  const [code, setCode] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [size, setSize] = useState<{ width: number; height: number; scale: number }>();
  const [fullscreen, setFullscreen] = useState(false);
  const studio = useRef<HTMLElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!fullscreen) return;
    const container = studio.current;
    returnFocus.current = document.activeElement as HTMLElement;
    const siblings: { element: HTMLElement; inert: boolean }[] = [];
    let ancestor: HTMLElement | null = container;
    while (ancestor?.parentElement && ancestor.parentElement !== document.documentElement) {
      for (const sibling of ancestor.parentElement.children) {
        if (sibling !== ancestor && sibling instanceof HTMLElement) { siblings.push({ element: sibling, inert: sibling.inert }); sibling.inert = true; }
      }
      ancestor = ancestor.parentElement;
    }
    const getTargets = () => [...(container?.querySelectorAll<HTMLElement>('button, select, a, iframe') ?? [])].filter(el => !el.hasAttribute('disabled'));
    getTargets()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFullscreen(false);
      if (event.key === 'Tab') {
        const targets = getTargets(); const first = targets[0]; const last = targets.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener('keydown', keydown);
    return () => { document.removeEventListener('keydown', keydown); for (const item of siblings) item.element.inert = item.inert; returnFocus.current?.focus(); };
  }, [fullscreen]);
  return (
    <div className={`style-detail-content ${isDetailsPanelCollapsed ? 'details-collapsed' : ''}`}>
      <section ref={studio} className={`preview-studio ${fullscreen ? 'preview-fullscreen' : ''}`} role={fullscreen ? 'dialog' : undefined} aria-modal={fullscreen || undefined} aria-label={zh ? '设计预览' : 'Design preview'}>
        <h2 className="sr-only">{zh ? style.name : style.nameEn} · {zh ? '交互演示' : 'Live study'}</h2>
        <PreviewToolbar language={language} device={device} onDevice={setDevice} styleId={style.id} size={size} code={code} onCode={() => setCode(!code)} fullscreen={fullscreen} onFullscreen={() => setFullscreen(!fullscreen)} onReset={() => setResetKey(key => key + 1)}>
          {!isMobile && <button onClick={toggleDetailsPanel} aria-expanded={!isDetailsPanelCollapsed} title={zh ? (isDetailsPanelCollapsed ? '展开说明' : '收起说明') : (isDetailsPanelCollapsed ? 'Show guide' : 'Hide guide')} aria-label={zh ? (isDetailsPanelCollapsed ? '展开说明' : '收起说明') : (isDetailsPanelCollapsed ? 'Show guide' : 'Hide guide')}>{isDetailsPanelCollapsed ? <PanelRightOpen size={16} /> : <PanelRightClose size={16} />}</button>}
        </PreviewToolbar>
        <div className={`studio-canvas ${code ? 'show-code' : ''}`}>
          {code ? <DemoCodeView styleId={style.id} /> : <DemoViewport key={`${style.id}-${resetKey}`} styleId={style.id} device={device} fitHeight={fullscreen} onSize={setSize} />}
        </div>
        <div className="studio-caption">{zh ? '在画布内滚动查看完整页面；全屏可以看清更多细节。' : 'Scroll inside the canvas to explore. Go fullscreen for a closer look.'}</div>
      </section>
      <aside className="style-details" aria-label={zh ? '风格说明与参考资料' : 'Style guide and reference'}>
        <PromptSection styleId={style.id} />
        <StyleNotes styleId={style.id} language={language} />
        <DesignTokens styleId={style.id} />
        <details className="study-more"><summary>{zh ? '适用场景与取舍' : 'Use cases and trade-offs'}</summary>
          <div className="study-tags">{(zh ? style.useCases : style.useCasesEn).map(item => <span key={item}>{item}</span>)}</div>
          <h4>{zh ? '优点' : 'Strengths'}</h4><ul>{(zh ? style.pros : style.prosEn).map(item => <li key={item}>{item}</li>)}</ul>
          <h4>{zh ? '需要考虑' : 'Considerations'}</h4><ul>{(zh ? style.cons : style.consEn).map(item => <li key={item}>{item}</li>)}</ul>
        </details>
      </aside>
    </div>
  );
}
