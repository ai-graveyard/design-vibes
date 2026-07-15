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
    prompt: "Apple 极简主义风格网站。配色几乎是单色调：背景用米白到浅灰（#FBFBFD 到 #F5F5F7），文字用低饱和灰（#86868B），不设强调色，克制本身就是设计语言。字体用系统无衬线体，大号标题字距收紧、正文小而浅淡。加一条毛玻璃导航栏（backdrop-filter 模糊+饱和度提升），大胆使用超大圆角（最高可到 130px），四周留白要充足。",
    promptEn: "Apple Minimalism style website. Palette stays almost monochrome — off-white background (#FBFBFD to #F5F5F7) with muted gray text (#86868B) and no bold accent color; restraint itself is the accent. Use a system sans-serif with tight tracking on oversized display headlines and light small body text. Add a frosted translucent nav bar (backdrop-filter blur + saturate) and generous pill-rounded corners (up to 130px) surrounded by huge whitespace.",
    shortPrompt: "Apple 极简风格，米白灰阶配色，毛玻璃导航栏，超大圆角",
    shortPromptEn: "Apple Minimalism, off-white gray palette, frosted glass nav bar, oversized rounded corners"
  },
  {
    id: "braun",
    name: "迪特·拉姆斯风",
    nameEn: "Braun / Dieter Rams",
    prompt: "迪特·拉姆斯 / Braun 风格，严格网格系统。配色以浅暖灰为主（#F7F7F7、#EFEFEF、#ECECEC），只留一处焦橙色强调（#E8500A），用在拨盘、开关等功能性控件上。等宽字体用于技术标签，无衬线字体用于正文。圆角几乎为直角（2-4px），每个元素都要有存在的理由——少即是多。",
    promptEn: "Braun / Dieter Rams style with a strict grid system. Palette is light warm grays (#F7F7F7, #EFEFEF, #ECECEC) with a single burnt-orange accent (#E8500A) reserved for functional controls like dials or switches. Pair a monospace font for technical labels with a clean sans-serif for body text. Keep corners nearly square (2-4px radius) and let every element earn its place — as little design as possible.",
    shortPrompt: "拉姆斯风格，暖灰配色+焦橙强调色，网格化功能按钮",
    shortPromptEn: "Dieter Rams style, warm gray palette with burnt-orange accent, grid-aligned functional controls"
  },
  {
    id: "swiss",
    name: "瑞士风格",
    nameEn: "Swiss Style",
    prompt: "瑞士国际主义风格，严格的非对称网格布局。配色以黑白为主，红（#FF0000）、黄（#FFD700）、蓝（#0000FF）三原色只作为局部强调块出现，不做装饰。等宽字体、宽字距用于小标签，Helvetica 风格无衬线体用于超大号数字和正文。所有元素都不设圆角，靠栏线对齐和大量留白传达客观中立的气质。",
    promptEn: "Swiss International Style with a strict asymmetric grid. Palette is black and white with sparing primary-color blocks (red #FF0000, yellow #FFD700, blue #0000FF) used only as accents, never decoration. Use a wide-tracked monospace for kicker labels and a Helvetica-like sans-serif for oversized numerals and body copy. Keep every corner square — no border-radius — and let column alignment and whitespace carry the objective, neutral tone.",
    shortPrompt: "瑞士风格，黑白+三原色点缀，无圆角网格排版",
    shortPromptEn: "Swiss Style, black-white with primary color accents, square-cornered grid layout"
  },
  {
    id: "bauhaus",
    name: "包豪斯",
    nameEn: "Bauhaus",
    prompt: "包豪斯风格，用纯粹的几何形状构建版面。配色：米白底色（#F4F1EA）、藏青（#1F3BB3）、红（#E2261C）、黄（#F2BE0F）、近黑墨色（#131313）。小标签用等宽字体，标题用几何感无衬线体。标志性手法：用粗黑描边（3-13px）的圆形、三角形、正方形直接构成版面结构，而不是当装饰——形式追随功能。",
    promptEn: "Bauhaus style built from pure geometry. Palette: cream background (#F4F1EA), navy blue (#1F3BB3), red (#E2261C), yellow (#F2BE0F), and near-black ink (#131313). Use monospace for small labels and a geometric sans-serif for headlines. The signature move: compose circles, triangles, and squares with thick black outlines (3-13px) as literal layout elements, not decoration — form follows function.",
    shortPrompt: "包豪斯，米白底+藏青红黄，粗黑描边几何图形",
    shortPromptEn: "Bauhaus, cream base with navy/red/yellow, thick-outlined geometric shapes"
  },
  {
    id: "memphis",
    name: "孟菲斯",
    nameEn: "Memphis",
    prompt: "孟菲斯风格，热闹又俏皮。配色：米白底（#FFF8EC）配亮粉（#FF69B4）、金黄（#FFD700）、番茄红（#FF6347）、绿松石（#00CED1），全部用实心黑色（#000，约 3px）描边。等宽体和无衬线体混搭出剪贴画感。版面上散落波浪曲线、彩色圆点和胶囊/圆形徽标（圆角 999px 或 50%），像贴纸一样。",
    promptEn: "Memphis style, playful and loud. Palette: cream base (#FFF8EC) with hot pink (#FF69B4), gold (#FFD700), tomato red (#FF6347), and turquoise (#00CED1), all outlined in solid black (#000, ~3px). Mix monospace and sans-serif for a scrapbook feel. Scatter squiggle lines, confetti dots, and pill/circle badges (border-radius 999px or 50%) across the layout like stickers.",
    shortPrompt: "孟菲斯，米白底撞亮色+黑色描边，波浪线圆点贴纸感",
    shortPromptEn: "Memphis, cream base with bold colors and black outlines, squiggle-and-dot sticker motifs"
  },
  {
    id: "glassmorphism",
    name: "玻璃拟态",
    nameEn: "Glassmorphism",
    prompt: "玻璃拟态风格，深色画布上的通透感。背景是深藏青（#101233 到 #171A3D），被亮粉（#FF6B9D）、青绿（#4ECDC4）、紫（#9B6BFF）、靛蓝（#667EEA）等发光色点亮。字体用简洁无衬线体。核心技法：毛玻璃面板用 backdrop-filter blur(18-24px) 加 saturate(150%)，配细半透明边框，让玻璃后面的发光色块层叠透出来。",
    promptEn: "Glassmorphism style over a dark canvas. Background is deep navy (#101233 to #171A3D) lit by vivid glow accents — pink (#FF6B9D), teal (#4ECDC4), purple (#9B6BFF), indigo (#667EEA). Use a clean sans-serif. The core technique: frosted panels with backdrop-filter blur(18-24px) plus saturate(150%), a thin semi-transparent border, and layered translucency so glowing shapes behind the glass stay visible.",
    shortPrompt: "玻璃拟态，深藏青底+荧光色晕，毛玻璃blur+半透明边框",
    shortPromptEn: "Glassmorphism, deep navy with glow accents, frosted blur(18-24px) panels with translucent border"
  },
  {
    id: "neumorphism",
    name: "新拟态",
    nameEn: "Neumorphism",
    prompt: "新拟态风格——所有元素像从同一块材质上雕出来的。配色几乎单色：柔和蓝灰底色（#E0E5EC），配同色系的亮阴影和暗阴影（#8296C4、#7A8CA5）。字体用普通无衬线体。核心技法：在同一底色上同时叠加左上方亮阴影（近白）和右下方暗阴影（#8296C4 附近），做出浮雕或凹陷的挤压感——不要用描边。圆角要大而柔和（13-36px，甚至到 999px 的完全胶囊形）。",
    promptEn: "Neumorphism style — everything carved from one material. Palette stays almost monochrome: a soft blue-gray base (#E0E5EC) with matching light and dark shadow tones (#8296C4, #7A8CA5). Use a plain sans-serif. The defining technique: pair a light shadow (top-left, near-white) with a dark shadow (bottom-right, around #8296C4) on the same background color to fake embossed or pressed extrusion — never use a border. Corners stay large and soft (13-36px, up to a full 999px pill).",
    shortPrompt: "新拟态，单色蓝灰+双向柔和阴影，大圆角浮雕感",
    shortPromptEn: "Neumorphism, monochrome blue-gray with dual soft shadows, large-radius embossed look"
  },
  {
    id: "brutalism",
    name: "粗野主义",
    nameEn: "Brutalism",
    prompt: "粗野主义风格——刻意做出未经样式化的原始 HTML 观感。配色用浏览器安全色：经典超链接蓝（#0000EE）、红（#FF0000）、黄（#FFFF00）、紫（#551A8B），底色纯白。字体用浏览器默认字体——衬线体（类 Times）做正文，等宽体做代码感区块。边框保持细窄（1-3px 实线，零圆角），链接保留默认蓝色下划线，文字密集堆叠，刻意不做排版设计。",
    promptEn: "Brutalism style — looks like raw, unstyled HTML on purpose. Palette is web-safe primaries: classic hyperlink blue (#0000EE), red (#FF0000), yellow (#FFFF00), purple (#551A8B), on plain white. Use browser-default typefaces — Times-like serif for body, monospace for code-ish bits. Keep borders thin (1-3px solid, zero radius), leave links underlined in default blue, and pack text into dense, deliberately un-designed blocks.",
    shortPrompt: "粗野主义，浏览器安全色+默认蓝链接，零圆角原始HTML感",
    shortPromptEn: "Brutalism, web-safe colors with default blue links, zero-radius raw-HTML look"
  },
  {
    id: "anti-design",
    name: "反设计",
    nameEn: "Anti-Design",
    prompt: "反设计风格，故意打破常规。配色刻意冲突：纯蓝（#0000FF）、品红（#FF00FF）、黄（#FFFF00），底色是硬朗的黑白。同一页面里混用等宽体、无衬线体、衬线体，不统一字体系统。不同元素配不匹配的粗边框（2-5px，颜色宽度都不同），散布圆形徽标，网格故意错位——但文字仍要保持可读。",
    promptEn: "Anti-Design style, deliberately breaking every convention. Palette clashes on purpose: pure blue (#0000FF), magenta (#FF00FF), yellow (#FFFF00) against stark white and black. Mix monospace, sans-serif, and serif fonts inconsistently within the same page — no single typographic system. Give different elements mismatched thick borders (2-5px, different colors and widths), scatter circular badges, and misalign the grid on purpose, while keeping text still legible.",
    shortPrompt: "反设计，冲突原色+混搭字体，粗细不一的错位边框",
    shortPromptEn: "Anti-Design, clashing primary colors with mixed fonts, mismatched misaligned borders"
  },
  {
    id: "flat",
    name: "扁平化",
    nameEn: "Flat Design",
    prompt: "扁平化风格——纯色，零深度。配色：明橙（#FF9800）、淡紫（#F3E5F5）、米黄（#FFF3E0）色块，底色白色。字体用简洁无衬线体。所有形状都是纯色平涂——不用阴影、不用渐变、不做立体斜面——统一用小圆角（4-16px），配简单的双色线性图标。",
    promptEn: "Flat Design style — solid color, zero depth. Palette: bright orange (#FF9800), soft lavender (#F3E5F5), and cream (#FFF3E0) blocks on a white base. Use a clean sans-serif. Every shape is a flat solid fill — no shadows, no gradients, no bevels — with a consistent small radius (4-16px) and simple two-tone line icons.",
    shortPrompt: "扁平化，橙紫米黄纯色块，无阴影渐变，小圆角线性图标",
    shortPromptEn: "Flat Design, orange-lavender-cream solid blocks, no shadow/gradient, small-radius line icons"
  },
  {
    id: "material",
    name: "Material Design",
    nameEn: "Material Design",
    prompt: "Material Design（Material You 时代）风格，柔和色调层次配色——浅粉（#FFD8E4）、薰衣草紫（#EADDFF、#E8DEF8）、近白（#FEF7FF），点缀 Google 黄（#FBBC05）和红（#EA4335）。字体用类 Roboto 无衬线体。用层叠的高度阴影模拟纸张的 z 轴层级，圆角要大方（16-28px），主操作按钮用实心圆形 FAB（圆角 50%）。",
    promptEn: "Material Design (Material You era) with a pastel tonal palette — blush pink (#FFD8E4), lavender (#EADDFF, #E8DEF8), near-white (#FEF7FF), accented with Google yellow (#FBBC05) and red (#EA4335). Use a Roboto-like grotesque sans-serif. Stack layered elevation shadows to imply a paper-like z-axis, keep corners generously rounded (16-28px), and give primary actions a filled circular FAB (border-radius 50%).",
    shortPrompt: "Material Design，粉紫柔色调+Google黄红点缀，大圆角+层级阴影",
    shortPromptEn: "Material Design, pastel pink-lavender with Google yellow/red accents, large radius with elevation shadows"
  },
  {
    id: "japanese",
    name: "日式极简",
    nameEn: "Japanese Minimalism",
    prompt: "日式极简风格。配色：和纸米白底（#F6F2E6、#EFE9D8），搭配茶褐（#C4A77D）、赭石（#B08D3F）、朱红（#A63A2B）、胡桃棕（#8B7355）。标题用明朝体风格衬线字，正文用轻盈无衬线体。边框要细如发丝（1px），圆角极小（2px），阴影用带朱红色调的暖阴影而不是灰色阴影——克制中带着温度，而不是冷淡的极简。",
    promptEn: "Japanese Minimalism style. Palette: washi-paper cream (#F6F2E6, #EFE9D8) grounded by tan (#C4A77D), ochre (#B08D3F), vermillion red (#A63A2B), and walnut brown (#8B7355). Pair a mincho-like serif for headings with a light sans-serif for body text. Keep borders hairline-thin (1px), corners barely rounded (2px), and use a soft vermillion-tinted shadow instead of a gray one — restraint and warmth over minimal-cold whitespace.",
    shortPrompt: "日式极简，和纸米白+茶褐朱红，细边框朱红暖阴影",
    shortPromptEn: "Japanese Minimalism, washi cream with tan-vermillion accents, hairline borders and warm-tinted shadow"
  },
  {
    id: "scandinavian",
    name: "斯堪的纳维亚",
    nameEn: "Scandinavian",
    prompt: "斯堪的纳维亚风格，温暖自然的氛围。配色：低饱和茶褐（#8F7350）、鼠尾草绿（#7E8D6F）、暖米色（#F0E6CF、#F0E2C4）——像阳光透过窗户洒在原木上。无衬线体搭配轻衬线体，增加一点温度。圆角要柔和且略带手工感（约 12-16px，不追求机械式精确），用木质色调的纹理或点缀传递 Hygge 式的舒适感。",
    promptEn: "Scandinavian style with a cozy, natural mood. Palette: muted tan (#8F7350), sage green (#7E8D6F), and warm cream (#F0E6CF, #F0E2C4) — like light through a window onto raw wood. Mix a plain sans-serif with a light serif for warmth. Give corners a soft, slightly irregular radius (roughly 12-16px, feels hand-cut rather than machine-perfect) and let wood-toned textures or accents carry the hygge comfort.",
    shortPrompt: "斯堪的纳维亚，茶褐鼠尾草绿暖米色，手工感柔角+木质点缀",
    shortPromptEn: "Scandinavian, muted tan-sage-cream palette, soft hand-cut radius with wood-toned accents"
  },
  {
    id: "organic",
    name: "有机形态",
    nameEn: "Organic Design",
    prompt: "有机形态风格，自然流动的气质。配色：深森林绿（#33544A）、鼠尾草绿（#A9C7B9）、中绿（#63A375），底色柔和米白（#F3F7E9、#FFF9F0）。衬线体增加温度，搭配简洁无衬线体。标志性技法：卡片和形状用高度不对称的“水滴形”圆角（例如 42% 58% 37% 63% / 60% 41% 59% 40%）代替矩形，让每个容器看起来像手绘流动的形状，而不是几何直角。",
    promptEn: "Organic Design style, nature-inspired and flowing. Palette: deep forest green (#33544A), sage (#A9C7B9), and mid green (#63A375) over a soft off-white (#F3F7E9, #FFF9F0). Mix a serif for warmth with a plain sans-serif. The signature technique: give cards and shapes heavily asymmetric blob border-radius (e.g. 42% 58% 37% 63% / 60% 41% 59% 40%) instead of rectangles, so every container looks hand-drawn and flowing rather than geometric.",
    shortPrompt: "有机形态，森林绿+米白底，不对称水滴形圆角容器",
    shortPromptEn: "Organic Design, forest green on off-white, asymmetric blob-shaped containers"
  },
  {
    id: "claymorphism",
    name: "粘土拟态",
    nameEn: "Claymorphism",
    prompt: "粘土拟态风格——像柔软的 3D 粘土玩具。配色：糖果色芒果黄（#F7B94F）、粉（#F79CAC）、薄荷绿（#C9FDC9）、兰紫（#C98BD1）、绿（#7FE39C），底色奶油白（#FFF9F4）。字体用圆润友好的无衬线体。圆角要非常大（30-38px，部分元素做成完全胶囊形 999px），叠加蓬松的双色柔和阴影（亮部高光+柔和彩色阴影），让每个元素看起来鼓鼓的、像可以捏一下的粘土。",
    promptEn: "Claymorphism style — soft 3D clay toys. Palette: candy-pastel mango (#F7B94F), pink (#F79CAC), mint (#C9FDC9), orchid (#C98BD1), and green (#7FE39C) over cream (#FFF9F4). Use a rounded, friendly sans-serif. Push border-radius very large (30-38px, some elements fully pill-shaped at 999px) and layer a puffy dual-tone soft shadow (light highlight plus soft colored shadow) so every element looks inflated and squeezable, like modeling clay.",
    shortPrompt: "粘土拟态，糖果色+奶油底，超大圆角+蓬松双色阴影",
    shortPromptEn: "Claymorphism, candy pastel on cream, very large radius with puffy dual-tone shadow"
  },
  {
    id: "neo-brutalism",
    name: "新粗野主义",
    nameEn: "Neo-Brutalism",
    prompt: "新粗野主义风格——张扬、扁平、态度鲜明。配色：亮粉（#FF8FD4）和芥末黄（#F7C548）色块，配黑色（#000），底色米白。等宽体加粗体无衬线体混搭。核心技法：粗实心黑边框（2-3px）配硬边偏移投影（不做模糊，就是一个实色形状偏移 4-8px）——部分元素用尖锐直角，部分用大圆角（40px）形成对比。",
    promptEn: "Neo-Brutalism style — loud, flat, and confident. Palette: hot pink (#FF8FD4) and mustard yellow (#F7C548) blocks against black (#000) on a cream base. Mix a bold monospace with a heavy sans-serif. The core technique: thick solid black borders (2-3px) paired with a hard offset drop shadow (no blur, just an opaque shape offset 4-8px) — and contrast sharp square corners on some elements against a big 40px radius on others.",
    shortPrompt: "新粗野主义，亮粉芥末黄+黑边，硬边偏移投影+直角圆角对比",
    shortPromptEn: "Neo-Brutalism, hot pink and mustard with black borders, hard offset shadow with mixed corner styles"
  },
  {
    id: "bento",
    name: "Bento 网格",
    nameEn: "Bento Grid",
    prompt: "Bento 网格布局，像便当盒一样分格。配色：中性卡片底色（#F5F5F7、暖米 #E8DCC8），搭配紫到蓝的渐变强调色（#7D4CFF、#B48CFF、#6EC1FF、#3A6FF7）。字体用简洁无衬线体。内容排布成模块化圆角卡片网格（圆角 20px），大小不一（1x1、2x1、2x2），每格只装一类信息，偶尔用毛玻璃 blur(12px) 卡片作点缀。",
    promptEn: "Bento Grid layout, like a compartmentalized lunchbox. Palette: neutral card surfaces (#F5F5F7, warm beige #E8DCC8) accented with a purple-to-blue gradient (#7D4CFF, #B48CFF, #6EC1FF, #3A6FF7). Use a clean sans-serif. Arrange content into a modular grid of rounded cards (20px radius) in varying sizes — 1x1, 2x1, 2x2 — each zoned for one piece of information, with an occasional backdrop-filter blur(12px) accent card.",
    shortPrompt: "Bento网格，中性卡片+紫蓝渐变，大小不一的圆角模块",
    shortPromptEn: "Bento Grid, neutral cards with purple-blue gradient accents, varied-size rounded modules"
  },
  {
    id: "duotone",
    name: "双色调",
    nameEn: "Duotone",
    prompt: "双色调风格，用两个色系构建，而不是字面意义上的“只有两个色值”。冷色系：深藏青（#1A1A2E、#2A2A4A）。暖色系：焦橙（#FF6B35、#FF8F66、#C9481A）配奶橙高光（#FFE1D2）。等宽体做标签，无衬线体做正文。整屏分区块交替使用这两个色系，如果有图片素材，用双色调滤镜处理（暗部藏青、亮部橙色）而不是保留原色。",
    promptEn: "Duotone style built from two color families, not two flat hex values. Cool family: deep navy (#1A1A2E, #2A2A4A). Warm family: burnt orange (#FF6B35, #FF8F66, #C9481A) with a cream highlight (#FFE1D2). Use a monospace for labels and sans-serif for body. Alternate full-bleed sections between the two families, and where there is imagery, tint it through a duotone filter (navy shadows, orange highlights) rather than using full color.",
    shortPrompt: "双色调，藏青冷调+焦橙暖调交替分区，图片走双色滤镜",
    shortPromptEn: "Duotone, navy-cool vs orange-warm sections, imagery tinted through a duotone filter"
  },
  {
    id: "kinetic",
    name: "动态字体",
    nameEn: "Kinetic Typography",
    prompt: "动态字体风格——文字本身就是动画，而不是给文字加装饰动画。配色几乎只用灰阶（#0A0A0A、#2B2B2B、#8A8A8A），只留一处红色强调（#FF0000）少量使用，让动效而不是色彩来承载张力。宽字距等宽体用于小标签，加粗无衬线体用于超大号标题。实现上：用平滑滚动（scroll-behavior: smooth）配合滚动触发的关键帧动画，让文字随滚动产生波动、旋转、滑动或跳动——需要具体描述每一段的动效方式（比如某段文字滚动进入时逐字波动，某段整体横向滑出），不要只写“滚动触发动效”这种笼统说法。",
    promptEn: "Kinetic Typography style — text as the animation, not decoration on top of it. Keep color almost grayscale (#0A0A0A, #2B2B2B, #8A8A8A) with a single red accent (#FF0000) used sparingly, so motion — not color — carries the energy. Pair a wide-tracked monospace for small kicker labels with a heavy sans-serif for oversized headlines. Implementation: smooth scroll-behavior plus scroll-triggered keyframe animations that make letters wave, spin, slide, or jump as the user scrolls — describe the specific motion per section (e.g. letters wave in on scroll, or slide horizontally) rather than leaving it generic.",
    shortPrompt: "动态字体，灰阶+红色点缀，滚动触发的逐字波动/滑动动效",
    shortPromptEn: "Kinetic Typography, grayscale with red accent, scroll-triggered letter wave/slide animation"
  },
  {
    id: "cyberpunk",
    name: "赛博朋克",
    nameEn: "Cyberpunk",
    prompt: "赛博朋克风格，霓虹感和故障感并存。背景纯黑（#000），用青色霓虹（约 #00CCCC）、品红（#FF00FF）、亮粉（#FF1493）、黄（#FFFF00）做发光点缀。等宽体做 HUD 风格状态标签，无衬线体做标题。面板做毛玻璃效果（backdrop-filter blur(6px)），配细青色霓虹描边（1px）加发光效果，关键标题用故障风格的重叠/错位文字制造信号损坏感。",
    promptEn: "Cyberpunk style, neon-soaked and glitchy. Background is black (#000), lit by neon cyan (around #00CCCC), magenta (#FF00FF), hot pink (#FF1493), and yellow (#FFFF00) glow accents. Use a monospace font for HUD-style status labels and a sans-serif for headlines. Give panels a backdrop-filter blur(6px) glass effect with a thin 1px neon-cyan glowing border, and layer glitch-style overlapping or misaligned text on key headlines for a broken-signal feel.",
    shortPrompt: "赛博朋克，纯黑底+青品红霓虹，毛玻璃面板+故障错位文字",
    shortPromptEn: "Cyberpunk, black background with neon cyan-magenta glow, glass panels with glitch text"
  },
  {
    id: "vaporwave",
    name: "蒸汽波",
    nameEn: "Vaporwave",
    prompt: "蒸汽波风格，80/90 年代复古未来主义的怀旧感。配色：深靛紫（#12032B）过渡到紫色（#7E5FAE、#8A6BB8），底色黑，用白色细描边（1-2px）做清晰对比。等宽体做复古电脑感标签，无衬线体做标题。渐变天空之上叠加毛玻璃面板（backdrop-filter blur(8px)），加入白色描边的网格线或落日剪影，还原经典蒸汽波地平线画面。",
    promptEn: "Vaporwave style, 80s/90s retro-futurist nostalgia. Palette: deep indigo (#12032B) fading into purple (#7E5FAE, #8A6BB8) on black, with crisp white 1-2px outlines for contrast. Use a monospace for retro computer-style labels and a sans-serif for headlines. Layer backdrop-filter blur(8px) glass panels over a gradient sky, and include a white-outlined grid or sun-silhouette motif to nail the classic vaporwave horizon look.",
    shortPrompt: "蒸汽波，靛紫渐变+白色描边，毛玻璃面板+网格落日剪影",
    shortPromptEn: "Vaporwave, indigo-purple gradient with white outlines, glass panels with grid/sun silhouette"
  },
  {
    id: "maximalism",
    name: "极繁主义",
    nameEn: "Maximalism",
    prompt: "极繁主义风格——多即是多，而且是刻意的多。配色一次性用尽：金黄（#FFD700）、橙红（#FF4500）、亮粉（#FF1493）、紫罗兰（#8B00FF），底色奶油黄（#FFF3D6）。同一版面混用等宽体、无衬线体、衬线体，制造剪贴画式的热闹感。圆形和胶囊徽标层层叠加（圆角 50%、999px），关键元素用粗金色或墨色边框（2-3px）勾边，各区块像拼贴一样互相重叠，而不是对齐在干净的网格上。",
    promptEn: "Maximalism style — more is more, on purpose. Palette throws everything at once: gold (#FFD700), orange-red (#FF4500), hot pink (#FF1493), violet (#8B00FF), on a cream base (#FFF3D6). Mix monospace, sans-serif, and serif fonts within the same layout for a scrapbook energy. Stack overlapping circular and pill badges (border-radius 50%, 999px), outline key elements with thick gold or ink borders (2-3px), and let sections layer and overlap like a dense collage rather than align to a clean grid.",
    shortPrompt: "极繁主义，金橙粉紫撞色+多字体混搭，层叠拼贴式徽标",
    shortPromptEn: "Maximalism, gold-orange-pink-violet clash with mixed fonts, overlapping collage-style badges"
  },
  {
    id: "art-deco",
    name: "装饰艺术",
    nameEn: "Art Deco",
    prompt: "装饰艺术风格，华丽而对称。配色：金色（#D4AF37）和银色（#C0C0C0）金属质感，配羊皮纸底色（#EFE6CF）和近黑炭色（#101713、#0B0E0C）。标题用优雅的展示型衬线字体。关键区域用金色细线描边（1px）做画框，构建对称的扇形或放射状几何图案，标题文字用金色渐变填充，呈现 1920 年代那种华丽光泽。",
    promptEn: "Art Deco style, glamorous and symmetric. Palette: gold (#D4AF37) and silver (#C0C0C0) metallics against parchment (#EFE6CF) and a near-black charcoal (#101713, #0B0E0C). Use an elegant display serif for headlines. Frame key sections with thin gold hairline borders (1px), build symmetric fan or sunburst geometric motifs, and give headline text a metallic gold gradient fill for that glamorous 1920s sheen.",
    shortPrompt: "装饰艺术，金银配羊皮纸炭黑，细金边+扇形放射图案",
    shortPromptEn: "Art Deco, gold-silver on parchment and charcoal, thin gold frames with sunburst motifs"
  },
  {
    id: "dark-academia",
    name: "暗黑学院",
    nameEn: "Dark Academia",
    prompt: "暗黑学院风格，忧郁又书卷气。配色：陈旧羊皮纸色（#FFF3C4、#F7ECC9、#F0E3BD），配深咖啡棕（#3A2A17）、暖金（#F5C85C）、茶褐（#C9B489）——像烛光打在旧皮革和纸张上。标题和正文统一用经典文学感衬线字体。画框和卡片用略不规则的“磨损边缘”圆角（数值不对称，不是干净的矩形），暗示旧书封面的质感，阴影用暖烛光色调而不是冷灰色。",
    promptEn: "Dark Academia style, moody and literary. Palette: aged parchment (#FFF3C4, #F7ECC9, #F0E3BD) grounded by deep espresso brown (#3A2A17), warm gold (#F5C85C), and tan (#C9B489) — like candlelight on old leather and paper. Use a classic literary serif throughout, headlines and body alike. Give frames and cards slightly irregular, worn-edge border-radius (asymmetric values, not a clean rectangle) to suggest an aged book cover, and use warm candlelight-toned shadows instead of cool gray ones.",
    shortPrompt: "暗黑学院，羊皮纸+咖啡棕暖金，磨损边缘圆角+烛光暖阴影",
    shortPromptEn: "Dark Academia, parchment with espresso-brown and gold, worn-edge radius with candlelight shadows"
  },
];

export function getPromptById(id: string): StylePrompt | undefined {
  return stylePrompts.find(p => p.id === id);
}

export function getAllPrompts(): StylePrompt[] {
  return stylePrompts;
}
