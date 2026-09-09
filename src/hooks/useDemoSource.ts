import { useEffect, useState } from 'react';
import { loadDemoSource } from '../lib/demoSource';

export function useDemoSource(styleId: string) {
  const [state, setState] = useState<{ id: string; source: string | null; error: boolean }>({ id: '', source: null, error: false });
  useEffect(() => {
    let alive = true;
    loadDemoSource(styleId).then(
      source => { if (alive) setState({ id: styleId, source, error: false }); },
      () => { if (alive) setState({ id: styleId, source: null, error: true }); },
    );
    return () => { alive = false; };
  }, [styleId]);
  return state.id === styleId ? state : { source: null, error: false };
}
