import { useEffect, useState } from 'react';

// demo 源码按 styleId 全局缓存，Code 标签与 Design Tokens 共用同一次请求
const cache = new Map<string, Promise<string>>();

interface DemoSourceState {
  source: string | null;
  error: boolean;
}

export function useDemoSource(styleId: string): DemoSourceState {
  const [state, setState] = useState<DemoSourceState>({ source: null, error: false });

  useEffect(() => {
    let alive = true;

    if (!cache.has(styleId)) {
      cache.set(
        styleId,
        fetch(`/demos/${styleId}.html`).then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text();
        })
      );
    }

    cache.get(styleId)!.then(
      (source) => {
        if (alive) setState({ source, error: false });
      },
      () => {
        cache.delete(styleId);
        if (alive) setState({ source: null, error: true });
      }
    );

    return () => {
      alive = false;
    };
  }, [styleId]);

  return state;
}
