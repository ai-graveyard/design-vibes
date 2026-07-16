// 零依赖的轻量 HTML/CSS 语法高亮，仅服务于 demo 源码只读展示。
// 输出为已转义的 HTML 字符串，token 用 .tok-* class 标记；
// span 不跨行（按 \n 切开逐段包裹），便于上层按行渲染行号。

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const span = (cls: string, s: string) =>
  s
    .split('\n')
    .map((part) => (part ? `<span class="tok-${cls}">${esc(part)}</span>` : ''))
    .join('\n');

function highlightCssValue(value: string): string {
  return esc(value).replace(
    /#[0-9a-fA-F]{3,8}\b|\b\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw|s|ms|deg|fr|ch)?\b/g,
    (m) => `<span class="tok-num">${m}</span>`
  );
}

function highlightCss(src: string): string {
  let out = '';
  let i = 0;
  let depth = 0;
  const n = src.length;

  while (i < n) {
    if (src.startsWith('/*', i)) {
      const end = src.indexOf('*/', i + 2);
      const j = end === -1 ? n : end + 2;
      out += span('cmt', src.slice(i, j));
      i = j;
      continue;
    }
    if (src[i] === '{') {
      depth++;
      out += '{';
      i++;
      continue;
    }
    if (src[i] === '}') {
      depth = Math.max(0, depth - 1);
      out += '}';
      i++;
      continue;
    }
    // 找到下一个结构字符，据此判断当前片段是选择器还是声明
    let j = i;
    while (j < n && !'{};'.includes(src[j]) && !src.startsWith('/*', j)) j++;
    const chunk = src.slice(i, j);

    if (src[j] === '{') {
      // 选择器 / at-rule（含 @media 内嵌套的情况）
      out += chunk.trim() ? span('sel', chunk) : esc(chunk);
      i = j;
      continue;
    }
    // 声明：property: value
    const colon = chunk.indexOf(':');
    if (depth > 0 && colon !== -1) {
      out += span('prop', chunk.slice(0, colon)) + ':' + highlightCssValue(chunk.slice(colon + 1));
    } else {
      out += esc(chunk);
    }
    i = j;
    if (src[i] === ';') {
      out += ';';
      i++;
    }
  }
  return out;
}

function highlightTag(tag: string): string {
  const m = /^(<\/?)([a-zA-Z][-\w]*)([\s\S]*?)(\/?>)$/.exec(tag);
  if (!m) return span('cmt', tag); // doctype 等
  const [, open, name, rest, close] = m;
  const restOut = rest.replace(
    /([-\w:]+)(=)("[^"]*"|'[^']*')|([-\w:]+)/g,
    (_mm, attrName: string, _eq: string, attrValue: string, bare: string) => {
      if (attrName) {
        return `<span class="tok-attr">${esc(attrName)}</span>=<span class="tok-str">${esc(attrValue)}</span>`;
      }
      return `<span class="tok-attr">${esc(bare)}</span>`;
    }
  );
  return esc(open) + `<span class="tok-tag">${esc(name)}</span>` + restOut + esc(close);
}

export function highlightDemoHtml(src: string): string {
  let out = '';
  let i = 0;
  const n = src.length;

  while (i < n) {
    if (src.startsWith('<!--', i)) {
      const end = src.indexOf('-->', i);
      const j = end === -1 ? n : end + 3;
      out += span('cmt', src.slice(i, j));
      i = j;
      continue;
    }
    if (src.startsWith('<style', i)) {
      const tagEnd = src.indexOf('>', i);
      if (tagEnd === -1) {
        out += esc(src.slice(i));
        break;
      }
      out += highlightTag(src.slice(i, tagEnd + 1));
      const closeIdx = src.indexOf('</style>', tagEnd);
      const cssEnd = closeIdx === -1 ? n : closeIdx;
      out += highlightCss(src.slice(tagEnd + 1, cssEnd));
      if (closeIdx !== -1) {
        out += highlightTag('</style>');
        i = cssEnd + '</style>'.length;
      } else {
        i = n;
      }
      continue;
    }
    if (src[i] === '<') {
      const end = src.indexOf('>', i);
      const j = end === -1 ? n : end + 1;
      out += highlightTag(src.slice(i, j));
      i = j;
      continue;
    }
    let j = src.indexOf('<', i);
    if (j === -1) j = n;
    out += esc(src.slice(i, j));
    i = j;
  }
  return out;
}

/** 把高亮结果按行包裹，配合 CSS counter 显示行号 */
export function renderCodeLines(highlighted: string): string {
  return highlighted
    .split('\n')
    .map((line) => `<span class="code-line">${line}</span>`)
    .join('\n');
}
