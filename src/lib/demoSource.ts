export interface DemoToken { name: string; value: string }

/** Shared by the website, copyable brief and Skill builder. Ignore CSS comments. */
export function parseDemoTokens(source: string): DemoToken[] {
  const clean = source.replace(/\/\*[\s\S]*?\*\//g, '');
  const block = /:root\s*\{([^}]*)\}/.exec(clean)?.[1] ?? '';
  return [...block.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)]
    .map((match) => ({ name: match[1], value: match[2].trim().replace(/\s+/g, ' ') }));
}

export function demoTokenCss(source: string): string {
  return `:root {\n${parseDemoTokens(source).map(({ name, value }) => `  ${name}: ${value};`).join('\n')}\n}`;
}

const cache = new Map<string, Promise<string>>();
export function loadDemoSource(styleId: string): Promise<string> {
  if (!cache.has(styleId)) {
    const request = fetch(`/demos/${styleId}.html`).then(async (response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const source = await response.text();
      if (!parseDemoTokens(source).length) throw new Error('Invalid demo source');
      return source;
    }).catch((error: unknown) => { cache.delete(styleId); throw error; });
    cache.set(styleId, request);
  }
  return cache.get(styleId)!;
}
