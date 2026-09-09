import { ExternalLink } from 'lucide-react';
import { styleSpecs, specVersion, kindNames } from '../data/styleSpecs';
import type { Language } from '../store/appStore';

export function StyleNotes({ styleId, language }: { styleId: string; language: Language }) {
  const spec = styleSpecs[styleId];
  const zh = language === 'zh';
  return (
    <section className="style-notes">
      <div className="study-meta"><span>{kindNames[spec.kind][language]}</span><span>{zh ? '示例' : 'Study'} {specVersion}</span></div>
      <h3>{zh ? '怎么看这个风格' : 'What makes this style'}</h3>
      {[{ label: zh ? '构图' : 'Composition', text: spec.composition[language] }, { label: zh ? '关键手法' : 'Signature', text: spec.signature[language] }, { label: zh ? '避免误用' : 'Avoid', text: spec.avoid[language] }].map((item, i) => (
        <div className="style-note" key={item.label}><span>0{i + 1}</span><div><h4>{item.label}</h4><p>{item.text}</p></div></div>
      ))}
      <p className="study-boundary">{spec.approximation?.[language] ?? (zh ? '本页为原创网页演绎。配色、素材与具体尺寸属于这个示例，可根据项目内容调整。' : 'An original web study. Palette, assets and exact dimensions belong to this example and may be adapted to the project.')}</p>
      {spec.references && <div className="study-references"><h4>{zh ? '参考依据' : 'References'}</h4>{spec.references.map(ref => <a href={ref.url} key={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}<ExternalLink size={12} /></a>)}</div>}
    </section>
  );
}
