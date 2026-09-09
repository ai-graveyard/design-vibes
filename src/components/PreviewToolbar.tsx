import type { ReactNode } from 'react';
import { ExternalLink, Maximize2, Minimize2, Code2, Eye, RotateCcw, Monitor, Tablet, Smartphone, Scan } from 'lucide-react';
import { demoDevices } from '../lib/demoDevices';
import type { Language, PreviewDevice } from '../store/appStore';

const deviceOptions = [
  { id: 'desktop', icon: Monitor },
  { id: 'tablet', icon: Tablet },
  { id: 'mobile', icon: Smartphone },
  { id: 'responsive', icon: Scan },
] as const;

interface Props {
  device: PreviewDevice;
  onDevice: (device: PreviewDevice) => void;
  language: Language;
  styleId?: string;
  size?: { width: number; height: number; scale: number };
  fullscreen?: boolean;
  onFullscreen?: () => void;
  code?: boolean;
  onCode?: () => void;
  onReset?: () => void;
  children?: ReactNode;
}

export function PreviewToolbar({ device, onDevice, language, styleId, size, fullscreen, onFullscreen, code, onCode, onReset, children }: Props) {
  const zh = language === 'zh';
  return (
    <div className="preview-toolbar" role="group" aria-label={zh ? '预览工具' : 'Preview controls'}>
      <div className="device-switcher" role="group" aria-label={zh ? '预览设备' : 'Preview device'}>
        {deviceOptions.map(({ id, icon: Icon }) => {
          const label = id === 'responsive' ? (zh ? '自适应' : 'Responsive') : demoDevices[id][language];
          const title = id === 'responsive' ? label : `${label} · ${demoDevices[id].width} × ${demoDevices[id].height}`;
          return (
            <button key={id} type="button" data-device={id} onClick={() => onDevice(id)} aria-pressed={device === id} aria-label={label} title={title}>
              <Icon size={16} aria-hidden="true" />
            </button>
          );
        })}
      </div>
      {size && <span className="preview-size" aria-live="polite">{size.width} × {size.height} <span>· {Math.round(size.scale * 100)}%</span></span>}
      <div className="preview-actions">
        {onReset && <button onClick={onReset} title={zh ? '重置演示' : 'Reset demo'} aria-label={zh ? '重置演示' : 'Reset demo'}><RotateCcw size={16} /></button>}
        {onCode && <button onClick={onCode} aria-pressed={code} title={zh ? (code ? '查看演示' : '查看源码') : (code ? 'Preview' : 'View source')} aria-label={zh ? (code ? '查看演示' : '查看源码') : (code ? 'Preview' : 'View source')}>{code ? <Eye size={16} /> : <Code2 size={16} />}</button>}
        {onFullscreen && <button onClick={onFullscreen} title={zh ? (fullscreen ? '退出全屏' : '全屏预览') : (fullscreen ? 'Exit fullscreen' : 'Fullscreen preview')} aria-label={zh ? (fullscreen ? '退出全屏' : '全屏预览') : (fullscreen ? 'Exit fullscreen' : 'Fullscreen preview')}>{fullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}</button>}
        {styleId && <a href={`/demos/${styleId}.html`} target="_blank" rel="noopener noreferrer" title={zh ? '独立打开' : 'Open demo'} aria-label={zh ? '独立打开' : 'Open demo'}><ExternalLink size={16} /></a>}
        {children && <><span className="preview-action-divider" aria-hidden="true" />{children}</>}
      </div>
    </div>
  );
}
