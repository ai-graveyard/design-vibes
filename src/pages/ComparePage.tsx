import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowLeftRight } from 'lucide-react';
import { designStyles } from '../data/styles';
import { useAppStore, type PreviewDevice } from '../store/appStore';
import { useIsMobile } from '../hooks/useIsMobile';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';
import { DemoViewport } from '../components/DemoViewport';
import { PreviewToolbar } from '../components/PreviewToolbar';
import { StyleNotes } from '../components/StyleNotes';
import { usePageMeta } from '../hooks/usePageMeta';

export function ComparePage() {
  const { idA, idB } = useParams();
  const navigate = useNavigate();
  const { language } = useAppStore();
  const zh = language === 'zh';
  const mobile = useIsMobile();
  const [desktopDevice, setDesktopDevice] = useState<PreviewDevice>('desktop');
  const [mobileDevice, setMobileDevice] = useState<PreviewDevice>('mobile');
  const device = mobile ? mobileDevice : desktopDevice;
  const setDevice = mobile ? setMobileDevice : setDesktopDevice;
  const [sync, setSync] = useState(true);
  const [ready, setReady] = useState(0);
  const frameA = useRef<HTMLIFrameElement | null>(null);
  const frameB = useRef<HTMLIFrameElement | null>(null);
  const onReadyA = useCallback((frame: HTMLIFrameElement) => { frameA.current = frame; setReady(n => n + 1); }, []);
  const onReadyB = useCallback((frame: HTMLIFrameElement) => { frameB.current = frame; setReady(n => n + 1); }, []);
  const a = designStyles.find(style => style.id === idA);
  const b = designStyles.find(style => style.id === idB);
  usePageMeta(a && b ? `${a.nameEn} / ${b.nameEn} · Design Vibes` : 'Design Vibes');
  useEffect(() => {
    if (!sync) return;
    const first = frameA.current?.contentWindow;
    const second = frameB.current?.contentWindow;
    if (!first || !second) return;
    let active: Window | null = null;
    let release = 0;
    const move = (source: Window, target: Window) => {
      if (active && active !== source) return;
      active = source;
      const max = source.document.documentElement.scrollHeight - source.innerHeight;
      const targetMax = target.document.documentElement.scrollHeight - target.innerHeight;
      target.scrollTo({ top: max > 0 ? (source.scrollY / max) * Math.max(0, targetMax) : 0, behavior: 'instant' });
      clearTimeout(release);
      release = window.setTimeout(() => { active = null; }, 100);
    };
    const fromA = () => move(first, second);
    const fromB = () => move(second, first);
    first.addEventListener('scroll', fromA, { passive: true });
    second.addEventListener('scroll', fromB, { passive: true });
    return () => { clearTimeout(release); first.removeEventListener('scroll', fromA); second.removeEventListener('scroll', fromB); };
  }, [sync, ready, idA, idB]);
  if (!a || !b) return <Navigate to="/" replace />;
  const pick = (side: 'a' | 'b', value: string) => navigate(`/compare/${side === 'a' ? value : a.id}/${side === 'b' ? value : b.id}`, { replace: true });
  return (
    <div className="compare-page">
      <header className="compare-header"><Link to="/"><ArrowLeft size={17} /><span>{zh ? '风格库' : 'Library'}</span></Link><h1>{zh ? '并排看，差异更清楚。' : 'See the difference, side by side.'}</h1><div><LanguageToggle /><ThemeToggle /></div></header>
      <main className="compare-main">
        <div className="compare-controls"><PreviewToolbar device={device} onDevice={setDevice} language={language} /><label className="sync-control"><input type="checkbox" checked={sync} onChange={event => setSync(event.target.checked)} />{zh ? '同步滚动' : 'Sync scrolling'}</label><button className="swap-button" onClick={() => navigate(`/compare/${b.id}/${a.id}`, { replace: true })}><ArrowLeftRight size={16} />{zh ? '交换' : 'Swap'}</button></div>
        <p className="compare-hint">{zh ? '两侧使用相同的演示视口。滚动任一画布，按页面进度比较完整作品。' : 'Both studies use the same layout viewport. Scroll either canvas to compare each page at the same progress.'}</p>
        <div className="compare-grid">
          {[a, b].map((style, index) => <section key={index} className="compare-study">
            <label className="compare-picker"><span>{index === 0 ? 'A' : 'B'}</span><select aria-label={zh ? `风格 ${index === 0 ? 'A' : 'B'}` : `Style ${index === 0 ? 'A' : 'B'}`} value={style.id} onChange={event => pick(index === 0 ? 'a' : 'b', event.target.value)}>{designStyles.map(option => <option value={option.id} key={option.id}>{zh ? option.name : option.nameEn}</option>)}</select><Link to={`/style/${style.id}`}>{zh ? '打开' : 'Open'} ↗</Link></label>
            <DemoViewport styleId={style.id} device={device} onReady={index === 0 ? onReadyA : onReadyB} />
            <StyleNotes styleId={style.id} language={language} />
          </section>)}
        </div>
      </main>
    </div>
  );
}
