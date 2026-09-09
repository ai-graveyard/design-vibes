import { designStyles } from './styles.ts';
import { styleSpecs, specVersion } from './styleSpecs.ts';
import { demoTokenCss } from '../lib/demoSource.ts';

export interface StylePrompt {
  id: string;
  name: string;
  nameEn: string;
  prompt: string;
  promptEn: string;
  shortPrompt: string;
  shortPromptEn: string;
}

export const stylePrompts: StylePrompt[] = designStyles.map(style => {
  const spec = styleSpecs[style.id];
  return {
    id: style.id, name: style.name, nameEn: style.nameEn,
    prompt: `${style.name}。${spec.composition.zh}${spec.signature.zh}${spec.avoid.zh}配色与尺寸可根据内容调整；精确复现请使用当前演示的参考包。`,
    promptEn: `${style.nameEn}. ${spec.composition.en} ${spec.signature.en} ${spec.avoid.en} Adapt palette and dimensions to the content; use the current demo reference brief for an exact reproduction.`,
    shortPrompt: `${style.name}：${spec.composition.zh}`,
    shortPromptEn: `${style.nameEn}: ${spec.composition.en}`,
  };
});

export function getPromptById(id: string): StylePrompt | undefined {
  return stylePrompts.find(p => p.id === id);
}

/**
 * 在风格描述外补齐“修改现有项目”所需的执行边界。
 * 纯前端字符串拼接，不调用任何模型；用户复制后交给自己的 AI 编程工具执行。
 */
export function getFullPromptText(prompt: StylePrompt, language: 'zh' | 'en'): string {
  if (language === 'zh') {
    return `请直接修改当前项目中的现有网页，将整体视觉风格调整为「${prompt.name}」。不要新建演示项目，不要只输出建议，请实际完成代码修改。

开始前：
- 先阅读现有项目结构、页面入口和相关组件，确认当前使用的框架与样式方案。
- 沿用现有技术栈和组件组织方式，不要无故引入新的框架、组件库或依赖。
- 识别并保留现有页面的业务目标、信息层级和主要交互流程。

目标风格：
${prompt.prompt}

改造要求：
1. 保留现有业务逻辑、接口调用、路由、数据结构和核心文案，不删除已有功能。
2. 可以调整布局、间距、字号、配色、边框、圆角、阴影和动效，但不要为了套用风格牺牲可读性与可用性。
3. 风格要覆盖导航栏、Hero、内容区、卡片、按钮、表单和页脚等主要区域，避免只修改背景色或局部装饰。
4. 优先复用现有组件与 CSS 变量，合并重复样式，保持同类组件的视觉规则一致。
5. 同时适配桌面端与移动端，检查常见断点下的字号、间距、换行、点击区域和内容顺序。
6. 保留清晰的 hover、focus、active、disabled 等交互状态，并保证文字与背景有足够对比度。
7. 不使用与目标风格无关的渐变、发光、玻璃效果或装饰图形；没有明确用途的视觉元素不要添加。

完成标准：
- 页面形成统一、可辨识的「${prompt.name}」视觉语言，而不是简单替换颜色。
- 页面无横向滚动、元素遮挡、文字溢出或移动端布局错位。
- 原有功能和交互可以正常使用。
- 完成后运行项目已有的检查或构建命令，并简要说明修改了哪些文件、采用了哪些关键视觉规则。`;
  }

  return `Directly modify the existing pages in the current project to use a ${prompt.nameEn} visual direction. Do not create a separate demo project and do not stop at recommendations—make the code changes.

Before editing:
- Inspect the existing project structure, page entry points, related components, framework, and styling approach.
- Keep the current stack and component organization. Do not add a new framework, UI library, or dependency without a clear need.
- Identify and preserve the page's business goal, information hierarchy, and primary interaction flow.

Target style:
${prompt.promptEn}

Implementation requirements:
1. Preserve existing business logic, API calls, routes, data structures, core copy, and working features.
2. You may refine layout, spacing, typography, color, borders, radii, shadows, and motion, but never sacrifice readability or usability just to match the style.
3. Apply the visual language consistently across the navigation, hero, content areas, cards, buttons, forms, and footer instead of changing only the background or a few decorations.
4. Reuse existing components and CSS variables where possible, consolidate duplicated styles, and keep equivalent components visually consistent.
5. Support both desktop and mobile. Check typography, spacing, wrapping, tap targets, and content order at common breakpoints.
6. Preserve clear hover, focus, active, and disabled states, with sufficient text/background contrast.
7. Do not introduce gradients, glow, glass effects, or decorative shapes that do not belong to the target style. Every added visual element should have a purpose.

Definition of done:
- The page expresses a consistent, recognizable ${prompt.nameEn} system rather than a superficial color swap.
- There is no horizontal scrolling, overlap, clipped text, or broken mobile layout.
- Existing functionality and interactions still work.
- Run the project's existing checks or build command, then briefly summarize the files changed and the key visual rules applied.`;
}

export function getAllPrompts(): StylePrompt[] {
  return stylePrompts;
}

export function getReproductionPrompt(prompt: StylePrompt, language: 'zh' | 'en', source: string, referenceOrigin = 'https://design-vibes.v2ai.org'): string {
  const spec = styleSpecs[prompt.id];
  const css = demoTokenCss(source);
  const reference = new URL(`/demos/${prompt.id}.html`, referenceOrigin).href;
  const study = language === 'zh'
    ? `复现参考 · ${specVersion}
先打开并完整阅读示例 ${reference}；该地址用于获取参考，不要求你改动该网站。以附件 HTML（如有）为准。
参考构图：${spec.composition.zh}
关键手法：${spec.signature.zh}
避免：${spec.avoid.zh}
${spec.approximation?.zh ?? '这是一个原创网页演绎，示例中的品牌、产品和业务数据均为展示用途。'}

以下是当前演示的完整 CSS 变量。尽量复现示例时保留这些参数；业务内容所需的改动请明确说明。`
    : `Reproduction reference · ${specVersion}
Open and read the full example at ${reference}. This is a reference source, not a request to modify that website. Prefer an attached HTML source when supplied.
Composition: ${spec.composition.en}
Signature: ${spec.signature.en}
Avoid: ${spec.avoid.en}
${spec.approximation?.en ?? 'An original web study. Brands, products and business data are fictional demonstration content.'}

These are the complete CSS variables from the current demo. Preserve them for a close reproduction; explain adjustments needed by the real content.`;
  const acceptance = language === 'zh'
    ? '视觉验收：分别在 390×844、768×1024、1280×800 和 1440×900 视口检查。并排核对字体、字重、网格、留白、图像裁切、材质与操作状态；加载字体及素材后截图；额外检查减弱动态效果。不要只以构建通过作为还原完成。参考的图片、字体、SVG 与内联交互脚本均在演示 HTML 内，复用时保留来源与许可说明。'
    : 'Visual acceptance: check 390×844, 768×1024, 1280×800 and 1440×900. Compare type, weight, grid, spacing, image crop, material and interaction states side by side. Capture after fonts and assets load, and check reduced motion separately. A passing build alone is not visual acceptance. Images, fonts, SVG and inline interactions are contained in the demo HTML; preserve source and license notices when reusing them.';
  return `${getFullPromptText(prompt, language)}

${study}

\`\`\`css
${css}
\`\`\`

${acceptance}`;
}
