import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import { Check, ChevronDown } from 'lucide-react';

type Props = {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  describedBy?: string;
  showLabel?: boolean;
};

export function StyleSelect({ label, value, options, onChange, describedBy, showLabel = false }: Props) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const search = useRef({ text: '', time: 0 });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [placement, setPlacement] = useState({ above: false, height: 320 });
  const selected = Math.max(0, options.findIndex(option => option.value === value));

  useEffect(() => {
    if (!open) return;
    const dismiss = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const close = () => setOpen(false);
    document.addEventListener('pointerdown', dismiss);
    window.addEventListener('blur', close);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      window.removeEventListener('blur', close);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  useEffect(() => {
    if (open) document.getElementById(`${id}-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [open, active, id]);

  const expand = (index = selected) => {
    const rect = trigger.current!.getBoundingClientRect();
    const below = window.innerHeight - rect.bottom - 12;
    const above = rect.top - 12;
    const upwards = below < 240 && above > below;
    setPlacement({ above: upwards, height: Math.min(320, Math.max(44, upwards ? above : below)) });
    setActive(index);
    search.current = { text: '', time: 0 };
    setOpen(true);
  };
  const choose = (index: number) => {
    onChange(options[index].value);
    setOpen(false);
    trigger.current?.focus();
  };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const key = event.key;
    if (key === 'Tab') { setOpen(false); return; }
    if (key === 'Escape') { if (open) { event.preventDefault(); event.stopPropagation(); setOpen(false); } return; }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(key)) {
      event.preventDefault();
      if (!open) { expand(key === 'Home' ? 0 : key === 'End' ? options.length - 1 : selected); return; }
      if (key === 'Enter' || key === ' ') { choose(active); return; }
      setActive(key === 'Home' ? 0 : key === 'End' ? options.length - 1 : Math.max(0, Math.min(options.length - 1, active + (key === 'ArrowDown' ? 1 : -1))));
    } else if (key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const text = (Date.now() - search.current.time < 700 ? search.current.text : '') + key.toLocaleLowerCase();
      const match = options.findIndex(option => option.label.toLocaleLowerCase().startsWith(text));
      if (!open) expand(match < 0 ? selected : match);
      else if (match >= 0) setActive(match);
      search.current = { text, time: Date.now() };
    }
  };

  return (
    <div ref={root} className="style-select" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
      <button ref={trigger} type="button" className="style-select-trigger" role="combobox" aria-label={label} aria-describedby={describedBy} aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? id : undefined} aria-activedescendant={open ? `${id}-${active}` : undefined} onClick={() => open ? setOpen(false) : expand()} onKeyDown={onKeyDown}>
        {showLabel && <span className="style-select-label">{label}</span>}
        <span className="style-select-value">{options[selected]?.label}</span>
        <ChevronDown size={16} aria-hidden="true" className={open ? 'is-open' : ''} />
      </button>
      {open && <ul id={id} role="listbox" aria-label={label} className={`style-select-menu${placement.above ? ' opens-above' : ''}`} style={{ maxHeight: placement.height }}>
        {options.map((option, index) => <li id={`${id}-${index}`} key={option.value} role="option" aria-selected={option.value === value} className={`style-select-option${index === active ? ' is-active' : ''}`} onPointerMove={() => setActive(index)} onMouseDown={event => event.preventDefault()} onClick={() => choose(index)}>
          <span>{option.label}</span>{option.value === value && <Check size={16} aria-hidden="true" />}
        </li>)}
      </ul>}
    </div>
  );
}
