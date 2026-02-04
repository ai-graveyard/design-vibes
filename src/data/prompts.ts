export interface StylePrompt {
  id: string;
  name: string;
  nameEn: string;
  prompt: string;
  promptEn: string;
  shortPrompt: string;
  shortPromptEn: string;
}

export const stylePrompts: StylePrompt[] = [
  {
    id: "apple",
    name: "Apple 极简主义",
    nameEn: "Apple Minimalism",
    prompt: "Apple Minimalism style website with generous whitespace, refined typography, and subtle shadows.",
    promptEn: "Apple Minimalism style website with generous whitespace, refined typography, and subtle shadows.",
    shortPrompt: "Apple 极简风格网站，大量留白，San Francisco 字体",
    shortPromptEn: "Apple Minimalism style, generous whitespace, San Francisco font"
  },
  {
    id: "braun",
    name: "迪特·拉姆斯风",
    nameEn: "Braun / Dieter Rams",
    prompt: "Braun/Dieter Rams style with grid system, neutral colors, and functional design.",
    promptEn: "Braun/Dieter Rams style with grid system, neutral colors, and functional design.",
    shortPrompt: "迪特拉姆斯风格，网格系统，中性色调",
    shortPromptEn: "Dieter Rams style, grid system, neutral colors"
  },
  {
    id: "swiss",
    name: "瑞士风格",
    nameEn: "Swiss Style",
    prompt: "Swiss International Style with asymmetric layouts, Helvetica typography, and objective neutrality.",
    promptEn: "Swiss International Style with asymmetric layouts, Helvetica typography, and objective neutrality.",
    shortPrompt: "瑞士风格，非对称布局，Helvetica字体",
    shortPromptEn: "Swiss Style, asymmetric layout, Helvetica font"
  },
  {
    id: "bauhaus",
    name: "包豪斯",
    nameEn: "Bauhaus",
    prompt: "Bauhaus style with geometric shapes, primary colors, and form follows function philosophy.",
    promptEn: "Bauhaus style with geometric shapes, primary colors, and form follows function philosophy.",
    shortPrompt: "包豪斯风格，几何形状，红黄蓝原色",
    shortPromptEn: "Bauhaus style, geometric shapes, primary colors"
  },
  {
    id: "memphis",
    name: "孟菲斯",
    nameEn: "Memphis",
    prompt: "Memphis style with vibrant contrasting colors, geometric patterns, and bold black outlines.",
    promptEn: "Memphis style with vibrant contrasting colors, geometric patterns, and bold black outlines.",
    shortPrompt: "孟菲斯风格，鲜艳对比色，几何图案",
    shortPromptEn: "Memphis style, vibrant colors, geometric patterns"
  },
  {
    id: "glassmorphism",
    name: "玻璃拟态",
    nameEn: "Glassmorphism",
    prompt: "Glassmorphism style with semi-transparent frosted glass effect and backdrop-filter blur.",
    promptEn: "Glassmorphism style with semi-transparent frosted glass effect and backdrop-filter blur.",
    shortPrompt: "玻璃拟态，半透明毛玻璃，backdrop-filter",
    shortPromptEn: "Glassmorphism, frosted glass, backdrop-filter"
  },
  {
    id: "neumorphism",
    name: "新拟态",
    nameEn: "Neumorphism",
    prompt: "Neumorphism style with soft shadows creating embossed effect and monochrome colors.",
    promptEn: "Neumorphism style with soft shadows creating embossed effect and monochrome colors.",
    shortPrompt: "新拟态，软阴影浮雕，单色配色",
    shortPromptEn: "Neumorphism, soft shadows, monochrome colors"
  },
  {
    id: "brutalism",
    name: "粗野主义",
    nameEn: "Brutalism",
    prompt: "Brutalism style with raw unstyled HTML look, large bold typography, and high contrast colors.",
    promptEn: "Brutalism style with raw unstyled HTML look, large bold typography, and high contrast colors.",
    shortPrompt: "粗野主义，原始外观，大字号粗体",
    shortPromptEn: "Brutalism, raw appearance, large bold type"
  },
  {
    id: "anti-design",
    name: "反设计",
    nameEn: "Anti-Design",
    prompt: "Anti-Design style intentionally breaking design rules with chaotic layouts and clashing colors.",
    promptEn: "Anti-Design style intentionally breaking design rules with chaotic layouts and clashing colors.",
    shortPrompt: "反设计，违反规则，混乱布局",
    shortPromptEn: "Anti-Design, breaking rules, chaotic layout"
  },
  {
    id: "flat",
    name: "扁平化",
    nameEn: "Flat Design",
    prompt: "Flat Design style with no shadows, no gradients, solid color blocks, and simple icons.",
    promptEn: "Flat Design style with no shadows, no gradients, solid color blocks, and simple icons.",
    shortPrompt: "扁平化，无阴影渐变，纯色块",
    shortPromptEn: "Flat Design, no shadows, solid colors"
  },
  {
    id: "material",
    name: "Material Design",
    nameEn: "Material Design",
    prompt: "Material Design with paper-based metaphor, shadow hierarchy, and meaningful animations.",
    promptEn: "Material Design with paper-based metaphor, shadow hierarchy, and meaningful animations.",
    shortPrompt: "Material Design，纸张隐喻，层级阴影",
    shortPromptEn: "Material Design, paper metaphor, shadow hierarchy"
  },
  {
    id: "japanese",
    name: "日式极简",
    nameEn: "Japanese Minimalism",
    prompt: "Japanese Minimalism with generous whitespace, natural materials, and zen tranquility.",
    promptEn: "Japanese Minimalism with generous whitespace, natural materials, and zen tranquility.",
    shortPrompt: "日式极简，大量留白，自然材质",
    shortPromptEn: "Japanese Minimalism, whitespace, natural materials"
  },
  {
    id: "scandinavian",
    name: "斯堪的纳维亚",
    nameEn: "Scandinavian",
    prompt: "Scandinavian style with natural light, neutral tones, and Hygge comfort feeling.",
    promptEn: "Scandinavian style with natural light, neutral tones, and Hygge comfort feeling.",
    shortPrompt: "斯堪的纳维亚，自然光线，中性色调",
    shortPromptEn: "Scandinavian, natural light, neutral tones"
  },
  {
    id: "organic",
    name: "有机形态",
    nameEn: "Organic Design",
    prompt: "Organic Design with irregular shapes, flowing lines, and nature-inspired elements.",
    promptEn: "Organic Design with irregular shapes, flowing lines, and nature-inspired elements.",
    shortPrompt: "有机形态，不规则形状，流动线条",
    shortPromptEn: "Organic Design, irregular shapes, flowing lines"
  },
  {
    id: "claymorphism",
    name: "粘土拟态",
    nameEn: "Claymorphism",
    prompt: "Claymorphism style with 3D cartoon texture, rounded fluffy shapes, and soft shadows.",
    promptEn: "Claymorphism style with 3D cartoon texture, rounded fluffy shapes, and soft shadows.",
    shortPrompt: "粘土拟态，3D卡通，圆润形状",
    shortPromptEn: "Claymorphism, 3D cartoon, rounded shapes"
  },
  {
    id: "neo-brutalism",
    name: "新粗野主义",
    nameEn: "Neo-Brutalism",
    prompt: "Neo-Brutalism with high contrast blocks, thick black borders, and hard shadows.",
    promptEn: "Neo-Brutalism with high contrast blocks, thick black borders, and hard shadows.",
    shortPrompt: "新粗野主义，高对比色块，粗黑边框",
    shortPromptEn: "Neo-Brutalism, high contrast, thick borders"
  },
  {
    id: "bento",
    name: "Bento 网格",
    nameEn: "Bento Grid",
    prompt: "Bento Grid layout with modular cards, varying cell sizes, and clear information zoning.",
    promptEn: "Bento Grid layout with modular cards, varying cell sizes, and clear information zoning.",
    shortPrompt: "Bento网格，模块化卡片，大小单元格",
    shortPromptEn: "Bento Grid, modular cards, varying sizes"
  },
  {
    id: "duotone",
    name: "双色调",
    nameEn: "Duotone",
    prompt: "Duotone style using only two colors with strong visual contrast.",
    promptEn: "Duotone style using only two colors with strong visual contrast.",
    shortPrompt: "双色调，两种颜色，强烈对比",
    shortPromptEn: "Duotone, two colors, strong contrast"
  },
  {
    id: "kinetic",
    name: "动态字体",
    nameEn: "Kinetic Typography",
    prompt: "Kinetic Typography with text as animation, scroll-triggered motion, and text morphing.",
    promptEn: "Kinetic Typography with text as animation, scroll-triggered motion, and text morphing.",
    shortPrompt: "动态字体，文字动画，滚动触发",
    shortPromptEn: "Kinetic Typography, text animation, scroll-triggered"
  },
  {
    id: "cyberpunk",
    name: "赛博朋克",
    nameEn: "Cyberpunk",
    prompt: "Cyberpunk style with neon colors, dark backgrounds, glitch art, and futuristic typography.",
    promptEn: "Cyberpunk style with neon colors, dark backgrounds, glitch art, and futuristic typography.",
    shortPrompt: "赛博朋克，霓虹色彩，故障艺术",
    shortPromptEn: "Cyberpunk, neon colors, glitch art"
  },
  {
    id: "vaporwave",
    name: "蒸汽波",
    nameEn: "Vaporwave",
    prompt: "Vaporwave style with 80s/90s retro aesthetics, pink-cyan gradients, and lo-fi aesthetics.",
    promptEn: "Vaporwave style with 80s/90s retro aesthetics, pink-cyan gradients, and lo-fi aesthetics.",
    shortPrompt: "蒸汽波，80s90s复古，粉青渐变",
    shortPromptEn: "Vaporwave, 80s90s retro, pink-cyan gradients"
  },
  {
    id: "maximalism",
    name: "极繁主义",
    nameEn: "Maximalism",
    prompt: "Maximalism style with more is more philosophy, rich colors, and layered patterns.",
    promptEn: "Maximalism style with more is more philosophy, rich colors, and layered patterns.",
    shortPrompt: "极繁主义，多即是多，丰富色彩",
    shortPromptEn: "Maximalism, more is more, rich colors"
  },
  {
    id: "art-deco",
    name: "装饰艺术",
    nameEn: "Art Deco",
    prompt: "Art Deco style with geometric patterns, metallic textures, and symmetric layouts.",
    promptEn: "Art Deco style with geometric patterns, metallic textures, and symmetric layouts.",
    shortPrompt: "装饰艺术，几何图案，金属质感",
    shortPromptEn: "Art Deco, geometric patterns, metallic textures"
  },
  {
    id: "dark-academia",
    name: "暗黑学院",
    nameEn: "Dark Academia",
    prompt: "Dark Academia style with dark tones, classical literature elements, and mysterious atmosphere.",
    promptEn: "Dark Academia style with dark tones, classical literature elements, and mysterious atmosphere.",
    shortPrompt: "暗黑学院，深色调，古典文学",
    shortPromptEn: "Dark Academia, dark tones, classical literature"
  },
];

export function getPromptById(id: string): StylePrompt | undefined {
  return stylePrompts.find(p => p.id === id);
}

export function getAllPrompts(): StylePrompt[] {
  return stylePrompts;
}
