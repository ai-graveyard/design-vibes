export interface DesignStyle {
  id: string;
  name: string;
  nameEn: string;
  rating: number;
  description: string;
  descriptionEn: string;
  tags: string[];
  tagsEn: string[];
  features: string[];
  featuresEn: string[];
  useCases: string[];
  useCasesEn: string[];
  pros: string[];
  prosEn: string[];
  cons: string[];
  consEn: string[];
  examples: string[];
  examplesEn: string[];
  /** 避坑指南：做这种风格最常见的翻车点 */
  pitfalls: string[];
  pitfallsEn: string[];
  colors: string[];
}

export const designStyles: DesignStyle[] = [
  {
    id: "apple",
    name: "Apple 风",
    nameEn: "Apple Minimalism",
    rating: 4.5,
    description: "以「大道至简」为核心理念，通过精确到像素的留白控制、考究的 SF Pro 字体系统、微妙的高斯模糊与阴影，打造出优雅克制的数字艺术品。每个元素都经过深思熟虑，拒绝一切冗余。",
    descriptionEn: "Centered on 'simplicity is the ultimate sophistication', featuring pixel-perfect whitespace control, refined SF Pro typography system, subtle Gaussian blur and shadows to create elegant digital artworks. Every element is deliberate, rejecting all redundancy.",
    tags: ["极简", "现代", "热门"],
    tagsEn: ["Minimal", "Modern", "Hot"],
    features: [
      "大面积呼吸留白 - 内容密度极低",
      "SF Pro 字体家族 - 9种字重精准控制",
      "微妙渐变阴影 - 0.5-2px 超薄投影",
      "4K 超清产品图 - HDR 色彩还原",
      "60fps 贝塞尔曲线动画"
    ],
    featuresEn: [
      "Generous breathing space - ultra-low content density",
      "SF Pro font family - 9 weights for precise control",
      "Subtle gradient shadows - 0.5-2px ultra-thin drops",
      "4K product imagery - HDR color reproduction",
      "60fps Bézier curve animations"
    ],
    useCases: [
      "高端消费电子官网",
      "SaaS 产品 Landing Page",
      "科技初创公司品牌站",
      "设计师个人作品集",
      "极简电商精选店铺"
    ],
    useCasesEn: [
      "Premium consumer electronics sites",
      "SaaS product landing pages",
      "Tech startup brand sites",
      "Designer portfolios",
      "Curated minimal e-commerce"
    ],
    pros: [
      "极致专业感 - 一秒建立信任",
      "永不过时 - 10年后依然优雅",
      "性能卓越 - 首屏加载 < 1.5s",
      "转化率高 - 减少决策疲劳"
    ],
    prosEn: [
      "Ultimate professionalism - instant trust",
      "Timeless - elegant after 10 years",
      "Excellent performance - FCP < 1.5s",
      "High conversion - reduces decision fatigue"
    ],
    cons: [
      "对内容质量要求极高 - 平庸内容无处藏身",
      "可能显得冷淡疏离 - 缺乏人情味",
      "开发成本高 - 每个细节都需打磨"
    ],
    consEn: [
      "Demands excellent content - mediocrity exposed",
      "Can feel cold and distant - lacks warmth",
      "High dev cost - every detail needs polish"
    ],
    examples: ["Apple.com", "Linear.app", "Notion.so", "Stripe.com", "Vercel.com"],
    examplesEn: ["Apple.com", "Linear.app", "Notion.so", "Stripe.com", "Vercel.com"],
    pitfalls: [
      "留白给得零散不成系统——Apple 的间距是 8 的倍数刻度，随手的大 margin 只会显得空",
      "强调色到处用——蓝色只属于链接与主 CTA，满屏蓝按钮就不是 Apple 了",
      "阴影下手太重——超过 2px 的实体投影立刻廉价，要用发丝级的超薄阴影",
      "字重全用 Bold——层级靠字号与灰度区分，不靠加粗"
    ],
    pitfallsEn: [
      "Scattered, unsystematic whitespace — Apple spacing follows an 8pt scale; random large margins just look empty",
      "Accent color everywhere — blue belongs only to links and the primary CTA",
      "Heavy shadows — anything beyond 2px reads cheap; keep them hairline-thin",
      "Bold everywhere — hierarchy comes from size and gray value, not weight"
    ],
    colors: ["#FFFFFF", "#000000", "#F5F5F7", "#0071E3", "#1D1D1F"]
  },
  {
    id: "braun",
    name: "迪特·拉姆斯风",
    nameEn: "Braun / Dieter Rams",
    rating: 4.4,
    description: "遵循「好设计的十条原则」，以网格为骨架、功能为灵魂。摒弃一切装饰性元素，让每个像素都服务于目的。这是工业设计之父 Dieter Rams 的数字化诠释——诚实、持久、少即是多。",
    descriptionEn: "Following 'Ten Principles for Good Design', with grid as skeleton and function as soul. Eliminating all decorative elements, every pixel serves a purpose. A digital interpretation of industrial design father Dieter Rams — honest, enduring, less but better.",
    tags: ["极简", "经典"],
    tagsEn: ["Minimal", "Classic"],
    features: [
      "严格的 8pt 网格系统",
      "中性灰度配色 - 仅保留功能色",
      "清晰的视觉层级 - 信息密度可控",
      "无装饰元素 - 零无意义的像素",
      "功能至上的交互设计"
    ],
    featuresEn: [
      "Strict 8pt grid system",
      "Neutral grayscale - only functional colors",
      "Clear visual hierarchy - controlled density",
      "No decorative elements - zero meaningless pixels",
      "Function-first interaction design"
    ],
    useCases: [
      "工业设计公司官网",
      "建筑事务所作品展示",
      "高端家具品牌",
      "专业摄影器材商城",
      "极简主义生活方式品牌"
    ],
    useCasesEn: [
      "Industrial design company sites",
      "Architecture firm portfolios",
      "Premium furniture brands",
      "Professional photography gear stores",
      "Minimalist lifestyle brands"
    ],
    pros: [
      "极致专业感 - 跨文化通用",
      "信息传达效率极高",
      "品牌一致性易于维护",
      "开发规范清晰可控"
    ],
    prosEn: [
      "Ultimate professionalism - cross-cultural",
      "Extremely efficient information delivery",
      "Brand consistency easy to maintain",
      "Clear and controllable dev specs"
    ],
    cons: [
      "需要深厚的排版功底",
      "不适合需要情感共鸣的品牌",
      "容易被误解为「无设计」"
    ],
    consEn: [
      "Requires deep typography expertise",
      "Not for brands needing emotional resonance",
      "Can be mistaken for 'no design'"
    ],
    examples: ["Braun.com", "Vitsoe.com", "Teenage Engineering", "Leica", "Bang & Olufsen"],
    examplesEn: ["Braun.com", "Vitsoe.com", "Teenage Engineering", "Leica", "Bang & Olufsen"],
    pitfalls: [
      "强调色出现第二处——焦橙只给一个功能控件，多了就成了装饰",
      "加了装饰性图形——拉姆斯风里每个像素都要有功能理由",
      "网格对不齐——8pt 网格是骨架，一处错位全盘皆输"
    ],
    pitfallsEn: [
      "A second accent — the burnt orange goes on exactly one functional control; more becomes decoration",
      "Decorative graphics — every pixel needs a functional reason here",
      "Broken grid alignment — the 8pt grid is the skeleton; one misalignment ruins it all"
    ],
    colors: ["#FFFFFF", "#000000", "#808080", "#C0C0C0", "#F2F2F2"]
  },
  {
    id: "swiss",
    name: "瑞士风格",
    nameEn: "Swiss Style / International Typographic",
    rating: 4.0,
    description: "1950年代诞生于苏黎世的设计革命，主张「客观性」与「普世性」。通过非对称布局打破沉闷，用 Helvetica 构建视觉秩序，以文字本身作为主要图形元素——这是纯粹的排版艺术。",
    descriptionEn: "A design revolution born in 1950s Zurich, advocating 'objectivity' and 'universality'. Breaking monotony through asymmetric layouts, building visual order with Helvetica, using typography itself as the primary graphic element — pure typographic art.",
    tags: ["极简", "经典"],
    tagsEn: ["Minimal", "Classic"],
    features: [
      "非对称动态布局 - 打破视觉惯性",
      "Helvetica/Neue Haas Grotesk 字体",
      "高对比黑白主调 - 点缀原色",
      "数学化的留白比例 - 黄金分割",
      "文字即图像 - 排版雕塑"
    ],
    featuresEn: [
      "Asymmetric dynamic layouts - breaking visual inertia",
      "Helvetica/Neue Haas Grotesk typography",
      "High-contrast black & white - primary color accents",
      "Mathematical whitespace ratios - golden ratio",
      "Type as image - typographic sculpture"
    ],
    useCases: [
      "国际艺术双年展官网",
      "先锋出版社品牌",
      "博物馆与文化机构",
      "设计教育平台",
      "高端杂志数字版"
    ],
    useCasesEn: [
      "International art biennial sites",
      "Avant-garde publisher brands",
      "Museums and cultural institutions",
      "Design education platforms",
      "Premium magazine digital editions"
    ],
    pros: [
      "经典永恒 - 70年不过时",
      "排版艺术的最高表达",
      "信息架构清晰可辩",
      "极强的文化符号价值"
    ],
    prosEn: [
      "Timeless classic - 70 years strong",
      "Highest expression of typographic art",
      "Crystal clear information architecture",
      "Strong cultural symbol value"
    ],
    cons: [
      "学习曲线陡峭 - 非科班难以掌握",
      "字体授权成本高",
      "对内容长度有较高要求"
    ],
    consEn: [
      "Steep learning curve - hard for non-designers",
      "High font licensing costs",
      "Requires specific content lengths"
    ],
    examples: ["Josef Müller-Brockmann 作品", "Emil Ruder 作品", "Neue Haas Grotesk 官网", "Type Directors Club"],
    examplesEn: ["Josef Müller-Brockmann works", "Emil Ruder works", "Neue Haas Grotesk site", "Type Directors Club"],
    pitfalls: [
      "三原色当装饰铺满——红黄蓝只做小面积功能强调，大面积使用就成了海报涂鸦",
      "用了圆角——瑞士风的世界里没有 border-radius",
      "居中对称布局——非对称网格才是灵魂，居中就平庸了"
    ],
    pitfallsEn: [
      "Primary colors as decoration — red/yellow/blue are small functional accents; large fields turn it into poster paint",
      "Rounded corners — border-radius does not exist in Swiss style",
      "Centered symmetric layouts — the asymmetric grid is the soul; centering makes it generic"
    ],
    colors: ["#FFFFFF", "#000000", "#FF0000", "#FFD700", "#0000FF"]
  },
  {
    id: "bauhaus",
    name: "包豪斯",
    nameEn: "Bauhaus",
    rating: 3.9,
    description: "1919年魏玛的艺术革命，主张「艺术与技术的统一」。红黄蓝三原色、圆方三角基本形，这些元素在百年后依然散发着前卫的光芒。包豪斯不仅是风格，更是一种思考设计的方式。",
    descriptionEn: "The 1919 art revolution in Weimar, advocating 'unity of art and technology'. Primary colors red-yellow-blue, basic shapes circle-square-triangle — these elements still radiate avant-garde energy a century later. Bauhaus isn't just a style, it's a way of thinking about design.",
    tags: ["艺术", "复古", "经典"],
    tagsEn: ["Art", "Vintage", "Classic"],
    features: [
      "几何形状主导 - 圆方三角",
      "红黄蓝原色 + 黑白灰",
      "形式追随功能的严格逻辑",
      "不对称的视觉平衡",
      "工艺与艺术的完美融合"
    ],
    featuresEn: [
      "Geometric shapes - circle, square, triangle",
      "Primary colors red-yellow-blue + black-white-gray",
      "Strict form follows function logic",
      "Asymmetric visual balance",
      "Perfect fusion of craft and art"
    ],
    useCases: [
      "当代艺术画廊官网",
      "设计学院与教育机构",
      "家具品牌旗舰店",
      "建筑设计事务所",
      "创意文化活动专题页"
    ],
    useCasesEn: [
      "Contemporary art gallery sites",
      "Design schools and institutions",
      "Furniture brand flagships",
      "Architecture design firms",
      "Creative cultural event pages"
    ],
    pros: [
      "极强的艺术表现力",
      "文化底蕴深厚 - 设计史经典",
      "色彩运用大胆而和谐",
      "元素可无限组合变化"
    ],
    prosEn: [
      "Extremely strong artistic expression",
      "Deep cultural heritage - design history classic",
      "Bold yet harmonious color use",
      "Elements infinitely combinable"
    ],
    cons: [
      "需要专业的配色功底",
      "过度使用容易显得复古",
      "商业适用场景相对有限"
    ],
    consEn: [
      "Requires professional color expertise",
      "Overuse can appear dated",
      "Limited commercial applications"
    ],
    examples: ["Bauhaus-Archiv Berlin", "Vitra Design Museum", "MoMA Design Store", "Alessi"],
    examplesEn: ["Bauhaus-Archiv Berlin", "Vitra Design Museum", "MoMA Design Store", "Alessi"],
    pitfalls: [
      "几何图形只当背景贴纸——圆、三角、方要参与版面结构，而不是漂浮装饰",
      "描边粗细不一致——粗黑描边要统一刻度，杂乱线宽毁掉秩序感",
      "配色加了粉紫青——红黄蓝三原色加黑白米就是全部，多一色都不是包豪斯"
    ],
    pitfallsEn: [
      "Shapes as floating stickers — circles, triangles, squares must structure the layout, not decorate it",
      "Inconsistent stroke widths — the thick black outlines need one scale; mixed weights kill the order",
      "Extra hues — red, yellow, blue plus black/cream is the whole palette; one more and it's not Bauhaus"
    ],
    colors: ["#FF0000", "#FFFF00", "#0000FF", "#000000", "#FFFFFF"]
  },
  {
    id: "memphis",
    name: "孟菲斯",
    nameEn: "Memphis",
    rating: 3.5,
    description: "1981年米兰掀起的设计叛逆风暴，由 Ettore Sottsass 领导的设计小组向「好品味」宣战。鲜艳冲突的色彩、荒诞的几何图案、粗粝的黑色轮廓线——这是后现代主义最疯狂的视觉盛宴。",
    descriptionEn: "The 1981 design rebellion storm from Milan, led by Ettore Sottsass declaring war on 'good taste'. Vibrant clashing colors, absurd geometric patterns, rough black outlines — this is postmodernism's wildest visual feast.",
    tags: ["艺术", "活泼", "复古"],
    tagsEn: ["Art", "Playful", "Vintage"],
    features: [
      "高饱和度对比色冲撞",
      "波点、条纹、锯齿几何图案",
      "3-5px 粗黑轮廓线",
      "塑料感与人工质感",
      "故意「丑陋」的反叛美学"
    ],
    featuresEn: [
      "High-saturation contrasting color clashes",
      "Polka dots, stripes, zigzag geometric patterns",
      "3-5px thick black outlines",
      "Plastic and artificial textures",
      "Intentionally 'ugly' rebellious aesthetics"
    ],
    useCases: [
      "儿童品牌与教育产品",
      "Y2K 复古时尚品牌",
      "音乐节与创意活动",
      "潮流玩具与收藏品",
      "社交媒体营销素材"
    ],
    useCasesEn: [
      "Kids brands and educational products",
      "Y2K retro fashion brands",
      "Music festivals and creative events",
      "Designer toys and collectibles",
      "Social media marketing assets"
    ],
    pros: [
      "极具辨识度和记忆点",
      "充满活力与年轻感",
      "话题性与社交传播力强",
      "与当下 Y2K 复古潮流契合"
    ],
    prosEn: [
      "Extremely distinctive and memorable",
      "Full of vitality and youthfulness",
      "Strong topic appeal and social shareability",
      "Aligns with current Y2K retro trends"
    ],
    cons: [
      "视觉冲击过强 - 易疲劳",
      "严肃场景完全不适用",
      "风格极端 - 品牌风险大"
    ],
    consEn: [
      "Visual impact too strong - causes fatigue",
      "Completely unsuitable for serious contexts",
      "Extreme style - high brand risk"
    ],
    examples: ["Ettore Sottsass 作品", "Memphis Milano", "Camper 鞋履", "Moschino 部分系列"],
    examplesEn: ["Ettore Sottsass works", "Memphis Milano", "Camper shoes", "Moschino collections"],
    pitfalls: [
      "元素散得太满——贴纸感需要呼吸空间，塞满就成了视觉噪音",
      "描边有粗有细——所有元素统一 3px 左右的黑描边才有成套感",
      "配色用了低饱和莫兰迪——孟菲斯的颜色必须高饱和高明度地对撞"
    ],
    pitfallsEn: [
      "Overcrowding — the sticker charm needs breathing room; cramming turns it into noise",
      "Mixed outline weights — a uniform ~3px black stroke is what makes elements feel like one set",
      "Muted palettes — Memphis colors must clash at high saturation and brightness"
    ],
    colors: ["#FF69B4", "#00CED1", "#FFD700", "#000000", "#FF6347"]
  },
  {
    id: "glassmorphism",
    name: "玻璃拟态",
    nameEn: "Glassmorphism",
    rating: 3.4,
    description: "macOS Big Sur 开创的设计语言，通过 CSS backdrop-filter 实现的毛玻璃效果创造出晶莹剔透的界面层次。半透明的朦胧美与渐变色背景交织，是现代 UI 设计中最具科技感的表达方式。",
    descriptionEn: "A design language pioneered by macOS Big Sur, using CSS backdrop-filter for frosted glass effects creating crystalline interface layers. Semi-transparent haziness interweaving with gradient backgrounds — the most tech-forward expression in modern UI design.",
    tags: ["现代", "流行", "热门"],
    tagsEn: ["Modern", "Trendy", "Hot"],
    features: [
      "backdrop-filter: blur(10-40px)",
      "rgba 半透明背景 - 透明度 10-30%",
      "1px 微妙边框 + 内发光",
      "多层叠加的深度感",
      "渐变/mesh gradient 背景"
    ],
    featuresEn: [
      "backdrop-filter: blur(10-40px)",
      "rgba semi-transparent bg - 10-30% opacity",
      "1px subtle borders + inner glow",
      "Multi-layer stacking depth",
      "Gradient/mesh gradient backgrounds"
    ],
    useCases: [
      "SaaS 控制台与仪表盘",
      "金融科技应用界面",
      "操作系统 UI 设计",
      "科技感官网首页",
      "音乐播放器界面"
    ],
    useCasesEn: [
      "SaaS dashboards and consoles",
      "Fintech application interfaces",
      "Operating system UI design",
      "Tech-forward homepage designs",
      "Music player interfaces"
    ],
    pros: [
      "极强的现代感与科技感",
      "视觉层次丰富立体",
      "深色模式表现优异",
      "用户认知度高"
    ],
    prosEn: [
      "Strong modern and tech feel",
      "Rich and dimensional visual layers",
      "Excellent dark mode performance",
      "High user recognition"
    ],
    cons: [
      "backdrop-filter 性能开销",
      "对比度与可读性需要调试",
      "低端设备渲染卡顿",
      "Safari 兼容性问题"
    ],
    consEn: [
      "backdrop-filter performance cost",
      "Contrast and readability need tuning",
      "Laggy on low-end devices",
      "Safari compatibility issues"
    ],
    examples: ["macOS Big Sur", "iOS 控制中心", "Windows 11", "Linear.app", "Figma"],
    examplesEn: ["macOS Big Sur", "iOS Control Center", "Windows 11", "Linear.app", "Figma"],
    pitfalls: [
      "玻璃后面没有东西——没有彩色光斑可透，毛玻璃就只是一层灰色滤镜",
      "模糊值太小——blur 低于 15px 看起来像没擦干净的屏幕而不是玻璃",
      "忘了细边框——1px 半透明白边是玻璃边缘的关键暗示"
    ],
    pitfallsEn: [
      "Nothing behind the glass — without colorful shapes to blur, frosted panels are just gray filters",
      "Blur too weak — under 15px it looks like a smudged screen, not glass",
      "Missing the hairline border — the 1px translucent white edge is what sells the pane"
    ],
    colors: ["rgba(255,255,255,0.15)", "#E0E0E0", "#FF6B9D", "#4ECDC4", "#667EEA"]
  },
  {
    id: "neumorphism",
    name: "新拟态",
    nameEn: "Neumorphism / Soft UI",
    rating: 2.3,
    description: "2020年短暂爆火的设计趋势，通过双向软阴影（一明一暗）模拟真实世界的浮雕质感。柔和的单色调配色带来独特的触感体验，但严重的可访问性问题让它迅速从主流视野消退。",
    descriptionEn: "A briefly viral 2020 design trend, simulating real-world embossed textures through dual soft shadows (one light, one dark). Soft monochrome palettes create unique tactile experiences, but severe accessibility issues caused its rapid fade from mainstream.",
    tags: ["现代", "极简"],
    tagsEn: ["Modern", "Minimal"],
    features: [
      "双向软阴影 - 高光+投影",
      "单色/低饱和度配色方案",
      "8-16px 模糊半径的圆角元素",
      "按压/凹陷的交互状态",
      "极低的视觉对比度"
    ],
    featuresEn: [
      "Dual soft shadows - highlight + drop",
      "Monochrome/low-saturation color schemes",
      "8-16px blur radius rounded elements",
      "Pressed/inset interaction states",
      "Extremely low visual contrast"
    ],
    useCases: [
      "概念设计与 Dribbble 展示",
      "冥想与放松类应用",
      "智能家居控制面板",
      "简约音乐播放器",
      "个人项目与实验"
    ],
    useCasesEn: [
      "Concept design and Dribbble showcases",
      "Meditation and relaxation apps",
      "Smart home control panels",
      "Minimal music players",
      "Personal projects and experiments"
    ],
    pros: [
      "独特的触感与物理感",
      "视觉上柔和舒适",
      "CSS 实现相对简单",
      "在深色模式下表现尚可"
    ],
    prosEn: [
      "Unique tactile and physical feel",
      "Visually soft and comfortable",
      "Relatively simple CSS implementation",
      "Acceptable in dark mode"
    ],
    cons: [
      "严重的可访问性问题 - WCAG 不达标",
      "按钮/输入框难以识别",
      "已逐渐被行业淘汰",
      "实际生产环境中罕见"
    ],
    consEn: [
      "Severe accessibility issues - WCAG non-compliant",
      "Buttons/inputs hard to identify",
      "Gradually phased out by industry",
      "Rare in production environments"
    ],
    examples: ["Dribbble 概念作品", "智能家居 UI", "Tesla 车机界面参考"],
    examplesEn: ["Dribbble concepts", "Smart home UI", "Tesla car UI references"],
    pitfalls: [
      "元素和背景不同色——新拟态的一切必须从同一块底色里长出来",
      "加了描边——挤压感全靠双向阴影，一条 border 就穿帮",
      "弱对比还堆小字——本就低对比的风格，正文要更大更深才能读"
    ],
    pitfallsEn: [
      "Elements a different color than the background — everything must be carved from one material",
      "Adding borders — the extrusion illusion lives in the dual shadows; a border breaks the spell",
      "Tiny low-contrast text — in an inherently soft style, body text needs extra size and darkness"
    ],
    colors: ["#E0E5EC", "#FFFFFF", "#A3B1C6", "#7A8CA5", "#C8D0D8"]
  },
  {
    id: "brutalism",
    name: "粗野主义",
    nameEn: "Brutalism",
    rating: 3.6,
    description: "源自建筑领域的「新粗野主义」在网页设计中的极端表达——拒绝美化、暴露结构、回归原始。系统字体、默认链接样式、无装饰的表格，这是对过度设计的有力反叛。",
    descriptionEn: "An extreme expression of architectural 'New Brutalism' in web design — refusing beautification, exposing structure, returning to raw. System fonts, default link styles, undecorated tables — a powerful rebellion against over-design.",
    tags: ["前卫", "个性"],
    tagsEn: ["Avant-garde", "Distinctive"],
    features: [
      "未经修饰的 HTML 默认样式",
      "超大字号粗体标题 - 72px+",
      "高对比黑白/荧光色配色",
      "暴露的代码结构与网格",
      "系统默认字体 - Times/Arial"
    ],
    featuresEn: [
      "Unstyled HTML default styles",
      "Oversized bold headings - 72px+",
      "High-contrast black-white/neon colors",
      "Exposed code structure and grid",
      "System default fonts - Times/Arial"
    ],
    useCases: [
      "先锋艺术家个人网站",
      "地下音乐厂牌",
      "实验性数字艺术项目",
      "反主流文化品牌",
      "学术研究型网站"
    ],
    useCasesEn: [
      "Avant-garde artist personal sites",
      "Underground music labels",
      "Experimental digital art projects",
      "Counter-culture brands",
      "Academic research websites"
    ],
    pros: [
      "极致的性能 - 几乎零依赖",
      "强烈的视觉冲击与记忆点",
      "反叛精神的完美载体",
      "开发成本极低"
    ],
    prosEn: [
      "Ultimate performance - near zero dependencies",
      "Strong visual impact and memorability",
      "Perfect vehicle for rebellious spirit",
      "Extremely low development cost"
    ],
    cons: [
      "用户体验可能极差",
      "商业客户难以接受",
      "可访问性需要特别注意",
      "容易被误认为「没做完」"
    ],
    consEn: [
      "User experience can be terrible",
      "Hard for commercial clients to accept",
      "Accessibility needs special attention",
      "Often mistaken for 'unfinished'"
    ],
    examples: ["brutalistwebsites.com", "Craigslist", "Bloomberg.com (部分)", "hacker news"],
    examplesEn: ["brutalistwebsites.com", "Craigslist", "Bloomberg.com (partially)", "Hacker News"],
    pitfalls: [
      "偷偷做了美化——加圆角、加阴影、加渐变，那就不再是粗野主义",
      "字体换成精致无衬线——浏览器默认的 Times 与等宽体才有生猛感",
      "排版太规整——刻意的密集堆叠与错位才是态度本身"
    ],
    pitfallsEn: [
      "Sneaking in polish — rounded corners, shadows, gradients all betray the point",
      "Swapping in refined sans-serifs — default Times and monospace carry the rawness",
      "Layouts too tidy — deliberate density and misalignment are the attitude"
    ],
    colors: ["#000000", "#FFFF00", "#FF0000", "#FFFFFF", "#00FF00"]
  },
  {
    id: "anti-design",
    name: "反设计",
    nameEn: "Anti-Design",
    rating: 2.8,
    description: "「规则生来就是用来打破的」——反设计是对传统设计原则的全面颠覆。混乱的布局、冲突的配色、扭曲的字体，一切看似「错误」的选择都是刻意为之。这是 Z 世代数字原住民的视觉母语。",
    descriptionEn: "'Rules are made to be broken' — Anti-Design is a total subversion of traditional design principles. Chaotic layouts, clashing colors, distorted typography — every seemingly 'wrong' choice is intentional. This is Gen Z digital natives' visual mother tongue.",
    tags: ["前卫", "个性", "流行"],
    tagsEn: ["Avant-garde", "Distinctive", "Trendy"],
    features: [
      "故意违反对齐与间距规则",
      "冲突色彩组合 - 绿配红、粉配橙",
      "扭曲拉伸的字体处理",
      "随机化的元素位置",
      "低画质/故障美学元素"
    ],
    featuresEn: [
      "Intentionally breaking alignment and spacing",
      "Clashing color combos - green-red, pink-orange",
      "Distorted and stretched typography",
      "Randomized element positions",
      "Low-quality/glitch aesthetic elements"
    ],
    useCases: [
      "Z世代潮流品牌",
      "独立音乐人与乐队",
      "街头服饰品牌",
      "创意活动与快闪店",
      "社交媒体病毒营销"
    ],
    useCasesEn: [
      "Gen Z streetwear brands",
      "Independent musicians and bands",
      "Streetwear fashion brands",
      "Creative events and pop-ups",
      "Social media viral marketing"
    ],
    pros: [
      "极强的话题性与传播力",
      "精准触达年轻受众",
      "品牌个性表达的极致",
      "社交媒体分享率高"
    ],
    prosEn: [
      "Extremely high topic appeal and shareability",
      "Precisely reaches young audiences",
      "Ultimate brand personality expression",
      "High social media share rate"
    ],
    cons: [
      "可用性几乎为零",
      "极易过时 - 生命周期短",
      "品牌风险极高",
      "大众接受度低"
    ],
    consEn: [
      "Near-zero usability",
      "Easily outdated - short lifecycle",
      "Extremely high brand risk",
      "Low mass acceptance"
    ],
    examples: ["Charli XCX - Brat", "Balenciaga 部分campaign", "MSCHF", "Yaeji"],
    examplesEn: ["Charli XCX - Brat", "Balenciaga campaigns", "MSCHF", "Yaeji"],
    pitfalls: [
      "乱得没有秩序——反设计是精心策划的失控，随机堆砌只是真的乱",
      "把可用性也一起反掉——按钮仍要能找到、能点击",
      "叛逆得不够彻底——半吊子的冲突看起来像失误而不是宣言"
    ],
    pitfallsEn: [
      "Chaos without curation — anti-design is engineered loss of control; random mess is just mess",
      "Breaking usability too — buttons must still be findable and clickable",
      "Half-hearted rebellion — mild clashes read as mistakes, not statements"
    ],
    colors: ["#89FC00", "#FF0000", "#0000FF", "#FFFF00", "#FF00FF"]
  },
  {
    id: "flat",
    name: "扁平化",
    nameEn: "Flat Design",
    rating: 4.1,
    description: "2012年由微软 Metro UI 开创、iOS 7 发扬光大的设计革命。告别拟物化的阴影与纹理，拥抱纯色块、简洁图标与 2D 表现。这是数字界面回归本质的里程碑，至今仍是最广泛应用的设计语言。",
    descriptionEn: "A design revolution pioneered by Microsoft Metro UI in 2012 and popularized by iOS 7. Farewell to skeuomorphic shadows and textures, embracing solid colors, simple icons, and 2D representation. A milestone of digital interfaces returning to essence, still the most widely used design language.",
    tags: ["极简", "现代", "经典"],
    tagsEn: ["Minimal", "Modern", "Classic"],
    features: [
      "零阴影、零渐变、零纹理",
      "纯色块与明确边界",
      "简洁的几何图标 - 线性/面性",
      "2D 平面化表现手法",
      "大面积留白与呼吸感"
    ],
    featuresEn: [
      "Zero shadows, gradients, textures",
      "Solid color blocks with clear boundaries",
      "Simple geometric icons - line/fill",
      "2D flat representation",
      "Generous whitespace and breathing room"
    ],
    useCases: [
      "移动应用 UI 设计",
      "图标库与 icon 系统",
      "信息图表与数据可视化",
      "企业内部工具界面",
      "简约风格品牌官网"
    ],
    useCasesEn: [
      "Mobile app UI design",
      "Icon libraries and systems",
      "Infographics and data visualization",
      "Enterprise internal tool interfaces",
      "Minimal brand websites"
    ],
    pros: [
      "开发效率高 - CSS 简单",
      "加载性能优异",
      "跨平台一致性好",
      "用户学习成本低"
    ],
    prosEn: [
      "High dev efficiency - simple CSS",
      "Excellent loading performance",
      "Good cross-platform consistency",
      "Low user learning curve"
    ],
    cons: [
      "缺乏深度可能显得单调",
      "交互 affordance 不够直观",
      "过于普及导致缺乏个性"
    ],
    consEn: [
      "Lack of depth may seem monotonous",
      "Interaction affordances not intuitive enough",
      "Over-popularity leads to lack of personality"
    ],
    examples: ["Windows 8/10 UI", "早期 iOS 7-12", "Google Material Design", "Spotify"],
    examplesEn: ["Windows 8/10 UI", "Early iOS 7-12", "Google Material Design", "Spotify"],
    pitfalls: [
      "可点击元素认不出来——去掉一切质感后，按钮必须靠色块与形状自证身份",
      "色块平得没有层级——扁平不等于所有区块同等重要",
      "图标风格混搭——线性图标和面性图标混用立刻露馅"
    ],
    pitfallsEn: [
      "Unrecognizable click targets — with all texture gone, buttons must prove themselves via color and shape",
      "No hierarchy between blocks — flat style still needs visual priority",
      "Mixed icon styles — combining outline and filled icons instantly breaks the system"
    ],
    colors: ["#2196F3", "#4CAF50", "#FF9800", "#9C27B0", "#00BCD4"]
  },
  {
    id: "material",
    name: "Material Design",
    nameEn: "Material Design",
    rating: 4.1,
    description: "Google 于 2014 年发布的设计系统，基于「数字纸张」的隐喻构建。通过阴影层级表达 Z 轴深度，用有意义的动画传达交互反馈。这是最完整、文档最详尽的设计规范体系。",
    descriptionEn: "Google's design system released in 2014, built on the 'digital paper' metaphor. Expressing Z-axis depth through shadow hierarchy, conveying interaction feedback with meaningful motion. The most complete and thoroughly documented design specification system.",
    tags: ["现代", "经典"],
    tagsEn: ["Modern", "Classic"],
    features: [
      "纸张隐喻 - 卡片式 UI",
      "阴影层级系统 - 1dp 到 24dp",
      "有意义的动画过渡 - 300-500ms",
      "大胆鲜明的品牌色运用",
      "响应式触摸反馈 - ripple 效果"
    ],
    featuresEn: [
      "Paper metaphor - card-based UI",
      "Shadow hierarchy - 1dp to 24dp",
      "Meaningful motion transitions - 300-500ms",
      "Bold and vibrant brand color use",
      "Responsive touch feedback - ripple effects"
    ],
    useCases: [
      "Android 原生应用开发",
      "企业级 B2B 产品",
      "跨平台 Web 应用",
      "Google 生态系统产品",
      "教育与学习平台"
    ],
    useCasesEn: [
      "Android native app development",
      "Enterprise B2B products",
      "Cross-platform web applications",
      "Google ecosystem products",
      "Education and learning platforms"
    ],
    pros: [
      "设计系统极其完整 - 开箱即用",
      "文档详尽 - 学习资源丰富",
      "用户熟悉度高 - 减少学习成本",
      "组件库生态成熟"
    ],
    prosEn: [
      "Extremely complete design system - ready to use",
      "Thorough documentation - rich learning resources",
      "High user familiarity - reduced learning cost",
      "Mature component library ecosystem"
    ],
    cons: [
      "品牌个性不足 - 容易千篇一律",
      "过于「Google 味」",
      "动画过渡可能影响性能"
    ],
    consEn: [
      "Lacks brand personality - can be generic",
      "Too 'Google-like'",
      "Motion transitions may affect performance"
    ],
    examples: ["Google 全系产品", "Android 系统 UI", "Flutter 应用", "YouTube"],
    examplesEn: ["All Google products", "Android system UI", "Flutter apps", "YouTube"],
    pitfalls: [
      "海拔乱用——Material 的阴影深度对应层级语义，不是随手的装饰",
      "圆角刻度各自为政——圆角有 token 体系，别每张卡片自创一套",
      "动效缺席——涟漪反馈与转场是 Material 的灵魂，静态的只是彩色卡片"
    ],
    pitfallsEn: [
      "Random elevation — shadow depth encodes hierarchy in Material; it's not ad-hoc decoration",
      "Freestyle corner radii — radii follow tokens; don't invent per card",
      "No motion — ripples and transitions are the soul; without them it's just colored cards"
    ],
    colors: ["#4285F4", "#34A853", "#FBBC05", "#EA4335", "#5F6368"]
  },
  {
    id: "japanese",
    name: "日式极简",
    nameEn: "Japanese Minimalism",
    rating: 3.8,
    description: "根植于禅宗美学的设计哲学，核心是「間」(Ma) 的艺术——空间不是空无，而是充满意义的存在。自然材质的肌理、不对称的枯山水平衡、季节感的色彩运用，这是东方智慧的数字化表达。",
    descriptionEn: "A design philosophy rooted in Zen aesthetics, centered on 'Ma' (間) — the art of space where emptiness is not void but meaningful existence. Natural material textures, asymmetric karesansui balance, seasonal color use — this is Eastern wisdom in digital form.",
    tags: ["极简", "经典", "温暖"],
    tagsEn: ["Minimal", "Classic", "Warm"],
    features: [
      "「間」的留白艺术 - 60%+ 空白",
      "自然材质肌理 - 和纸/木纹/石材",
      "不对称的动态平衡",
      "手写书法元素点缀",
      "四季感的色彩变化"
    ],
    featuresEn: [
      "'Ma' whitespace art - 60%+ empty space",
      "Natural material textures - washi/wood/stone",
      "Asymmetric dynamic balance",
      "Handwritten calligraphy accents",
      "Seasonal color transitions"
    ],
    useCases: [
      "日式料理餐厅官网",
      "茶道/花道文化机构",
      "和风生活方式品牌",
      "日本传统工艺品商店",
      "冥想与身心灵应用"
    ],
    useCasesEn: [
      "Japanese restaurant websites",
      "Tea/flower ceremony cultural institutions",
      "Japanese lifestyle brands",
      "Traditional Japanese craft stores",
      "Meditation and wellness apps"
    ],
    pros: [
      "独特的东方禅意美学",
      "极致的高级感与宁静",
      "情感共鸣强烈",
      "与可持续理念天然契合"
    ],
    prosEn: [
      "Unique Eastern Zen aesthetics",
      "Ultimate premium feel and tranquility",
      "Strong emotional resonance",
      "Natural fit with sustainability"
    ],
    cons: [
      "文化理解有门槛",
      "过度留白可能显得空洞",
      "需要高质量的内容支撑"
    ],
    consEn: [
      "Cultural understanding has barriers",
      "Excessive whitespace may seem empty",
      "Requires high-quality content support"
    ],
    examples: ["Muji 无印良品", "Kinfolk 杂志", "中川政七商店", "白井屋"],
    examplesEn: ["Muji", "Kinfolk Magazine", "Nakagawa Masashichi Shoten", "Shiroiya"],
    pitfalls: [
      "把留白当成空白——日式的「间」是构图的一部分，要有意图地不对称分布",
      "排印西式化——小字号、宽字距的克制才是气质来源，大标题一喊就破功",
      "颜色超过三种——墨、纸，加一点朱或蓝就足够"
    ],
    pitfallsEn: [
      "Whitespace as mere emptiness — Japanese ma is compositional, distributed with asymmetric intent",
      "Western-loud typography — restraint via small sizes and wide tracking carries the mood; shouting headlines break it",
      "More than three colors — ink, paper, and one touch of vermilion or indigo suffice"
    ],
    colors: ["#F5F5DC", "#8B7355", "#2F4F4F", "#D4AF37", "#C4A77D"]
  },
  {
    id: "scandinavian",
    name: "斯堪的纳维亚",
    nameEn: "Scandinavian",
    rating: 3.9,
    description: "北欧设计的数字化延续，核心理念是「Hygge」——舒适、温馨、亲密。功能性与美学的完美平衡，自然光线的柔和质感，大地色系的温暖调性。这是让人想要蜷缩在沙发上的设计。",
    descriptionEn: "Digital continuation of Nordic design, centered on 'Hygge' — comfort, warmth, intimacy. Perfect balance of functionality and aesthetics, soft quality of natural light, warm earth-tone palette. Design that makes you want to curl up on the sofa.",
    tags: ["极简", "温暖"],
    tagsEn: ["Minimal", "Warm"],
    features: [
      "Hygge 舒适感的氛围营造",
      "自然光线的柔和渲染",
      "大地色+灰绿色调性",
      "天然材质质感 - 亚麻/羊毛/原木",
      "圆润柔和的几何形态"
    ],
    featuresEn: [
      "Hygge cozy atmosphere creation",
      "Soft natural light rendering",
      "Earth tones + muted green palette",
      "Natural material textures - linen/wool/wood",
      "Rounded soft geometric forms"
    ],
    useCases: [
      "家居家具品牌官网",
      "可持续生活方式品牌",
      "有机食品与咖啡品牌",
      "北欧旅游与体验",
      "亲子与家庭类应用"
    ],
    useCasesEn: [
      "Home furniture brand sites",
      "Sustainable lifestyle brands",
      "Organic food and coffee brands",
      "Nordic travel and experiences",
      "Family and parenting apps"
    ],
    pros: [
      "温暖亲切的情感连接",
      "可持续理念的天然载体",
      "大众接受度极高",
      "跨文化适应性好"
    ],
    prosEn: [
      "Warm and friendly emotional connection",
      "Natural vehicle for sustainability",
      "Extremely high mass acceptance",
      "Good cross-cultural adaptability"
    ],
    cons: [
      "过于流行导致同质化",
      "可能缺乏视觉冲击力",
      "不适合科技感需求强的场景"
    ],
    consEn: [
      "Over-popularity leads to homogeneity",
      "May lack visual impact",
      "Not for high-tech contexts"
    ],
    examples: ["IKEA 宜家", "HAY", "Muuto", "Arket", "COS"],
    examplesEn: ["IKEA", "HAY", "Muuto", "Arket", "COS"],
    pitfalls: [
      "白得发冷——北欧的白是暖白，要配原木色与织物质感才有 hygge",
      "版面塞满产品图——留白与大图的松弛感正是核心卖点",
      "用了高饱和强调色——低饱和的自然色系才是这个味"
    ],
    pitfallsEn: [
      "Cold sterile white — Nordic white is warm, paired with wood tones and textile texture for hygge",
      "Cramming product shots — the relaxed spacing and large imagery are the whole point",
      "High-saturation accents — desaturated natural hues are the register"
    ],
    colors: ["#F5F5F5", "#D4C4B7", "#8B9A7C", "#E8DCC4", "#A9B5A3"]
  },
  {
    id: "organic",
    name: "有机形态",
    nameEn: "Organic Design",
    rating: 3.8,
    description: "告别僵硬的直角与网格，拥抱自然界的流动曲线。不规则的 blob 形状、渐变色彩的柔和过渡、仿佛呼吸般的动态效果。这是 Stripe、Dropbox 等科技公司人性化表达的设计语言。",
    descriptionEn: "Farewell to rigid right angles and grids, embracing nature's flowing curves. Irregular blob shapes, soft gradient color transitions, breathing-like dynamic effects. The humanized expression design language of tech companies like Stripe and Dropbox.",
    tags: ["现代", "活泼"],
    tagsEn: ["Modern", "Playful"],
    features: [
      "SVG blob 有机形状",
      "CSS 渐变的柔和过渡",
      "自然灵感的色彩组合",
      "柔和边缘与圆角处理",
      "微动画呼吸感效果"
    ],
    featuresEn: [
      "SVG blob organic shapes",
      "Soft CSS gradient transitions",
      "Nature-inspired color combinations",
      "Soft edges and rounded corners",
      "Micro-animation breathing effects"
    ],
    useCases: [
      "科技公司品牌重塑",
      "创意机构官网",
      "健康与 wellness 产品",
      "教育与学习平台",
      "金融科技品牌人性化"
    ],
    useCasesEn: [
      "Tech company rebranding",
      "Creative agency sites",
      "Health and wellness products",
      "Education and learning platforms",
      "Fintech brand humanization"
    ],
    pros: [
      "友好亲和的品牌感知",
      "打破网格的视觉新鲜感",
      "适配性强 - 可融合多种风格",
      "动画实现相对简单"
    ],
    prosEn: [
      "Friendly and approachable brand perception",
      "Fresh visuals that break the grid",
      "Highly adaptable - blends with many styles",
      "Relatively simple animation implementation"
    ],
    cons: [
      "响应式设计有挑战",
      "过度使用容易杂乱",
      "SVG 复杂度影响性能"
    ],
    consEn: [
      "Responsive design challenges",
      "Overuse can become messy",
      "SVG complexity affects performance"
    ],
    examples: ["Stripe.com", "Dropbox", "Spotify", "Mailchimp", "Slack"],
    examplesEn: ["Stripe.com", "Dropbox", "Spotify", "Mailchimp", "Slack"],
    pitfalls: [
      "blob 形状太规则——有机形态要像自然生长，接近正圆或椭圆就失去了意义",
      "曲线里混进直角——一处生硬的矩形会打断整个流动感",
      "动画太快——有机风的动效要像呼吸，快了就焦躁"
    ],
    pitfallsEn: [
      "Blobs too regular — organic shapes must feel grown; near-circles defeat the purpose",
      "Hard corners sneaking in — one sharp rectangle interrupts the entire flow",
      "Fast animations — organic motion should breathe; speed makes it anxious"
    ],
    colors: ["#A8E6CF", "#DCEDC1", "#FFD3B6", "#FFAAA5", "#98D8C8"]
  },
  {
    id: "claymorphism",
    name: "粘土拟态",
    nameEn: "Claymorphism",
    rating: 3.0,
    description: "3D 渲染风格进入 UI 设计的前沿趋势。圆润蓬松的粘土质感、柔和的内阴影、Pastel 糖果色调。像是在屏幕上捏出了一个可爱的卡通世界，充满触摸欲。",
    descriptionEn: "A frontier trend of 3D rendering entering UI design. Rounded fluffy clay textures, soft inner shadows, pastel candy colors. Like molding a cute cartoon world on screen, full of touchable appeal.",
    tags: ["现代", "活泼"],
    tagsEn: ["Modern", "Playful"],
    features: [
      "3D 粘土质感模拟",
      "圆润 blob 形状 - border-radius: 50%",
      "柔和内阴影 + 环境光",
      "Pastel 低饱和糖果色系",
      "微妙的高光与反射"
    ],
    featuresEn: [
      "3D clay texture simulation",
      "Rounded blob shapes - border-radius: 50%",
      "Soft inner shadows + ambient light",
      "Pastel low-saturation candy colors",
      "Subtle highlights and reflections"
    ],
    useCases: [
      "儿童教育应用",
      "社交娱乐平台",
      "游戏化界面设计",
      "NFT 与数字艺术展示",
      "品牌吉祥物周边"
    ],
    useCasesEn: [
      "Kids education apps",
      "Social entertainment platforms",
      "Gamification interface design",
      "NFT and digital art showcase",
      "Brand mascot merchandise"
    ],
    pros: [
      "极高的亲和力与可爱感",
      "独特的 3D 视觉效果",
      "适合年轻活泼的品牌",
      "社交分享率高"
    ],
    prosEn: [
      "Extremely high affinity and cuteness",
      "Unique 3D visual effects",
      "Suitable for young and playful brands",
      "High social share rate"
    ],
    cons: [
      "实现成本较高 - 需 3D 工具",
      "性能开销大",
      "不适合严肃商业场景"
    ],
    consEn: [
      "High implementation cost - needs 3D tools",
      "Large performance overhead",
      "Unsuitable for serious business contexts"
    ],
    examples: ["Android 12 Logo", "Reddit Snoo", "Windows 11 Emoji", "Notion AI"],
    examplesEn: ["Android 12 Logo", "Reddit Snoo", "Windows 11 Emoji", "Notion AI"],
    pitfalls: [
      "内阴影丢了——黏土的膨胀感靠外投影与内高光同时存在",
      "圆角不够大——低于 20px 就不像捏出来的",
      "配色太成人——粘土拟态天生属于高明度的糖果色"
    ],
    pitfallsEn: [
      "Missing the inner shadow — clay's puffiness needs the outer drop and inner highlight together",
      "Radii too small — under ~20px it stops looking hand-molded",
      "Grown-up palettes — clay lives in high-key candy colors"
    ],
    colors: ["#FFB6C1", "#87CEEB", "#98FB98", "#DDA0DD", "#FFDAB9"]
  },
  {
    id: "neo-brutalism",
    name: "新粗野主义",
    nameEn: "Neo-Brutalism",
    rating: 3.9,
    description: "传统粗野主义的现代进化版本，保留原始的视觉冲击力，但加入了更多可用性考量。粗黑边框、鲜艳色块、硬边阴影，像是用马克笔勾勒的界面。Figma 社区和独立开发者的最爱。",
    descriptionEn: "A modern evolution of traditional brutalism, keeping raw visual impact while adding usability considerations. Thick black borders, vibrant color blocks, hard-edge shadows — like interfaces sketched with markers. Favorite of Figma community and indie developers.",
    tags: ["前卫", "流行", "热门"],
    tagsEn: ["Avant-garde", "Trendy", "Hot"],
    features: [
      "3-5px 粗黑边框",
      "纯色块填充 - 无渐变",
      "硬边偏移阴影 - 4-8px",
      "系统字体 + 粗体字重",
      "高对比度配色方案"
    ],
    featuresEn: [
      "3-5px thick black borders",
      "Solid color fills - no gradients",
      "Hard-edge offset shadows - 4-8px",
      "System fonts + bold weights",
      "High-contrast color schemes"
    ],
    useCases: [
      "开发者工具与 CLI 产品",
      "独立开发者个人项目",
      "创意工具与设计平台",
      "科技博客与文档站",
      "黑客马拉松项目"
    ],
    useCasesEn: [
      "Developer tools and CLI products",
      "Indie developer projects",
      "Creative tools and design platforms",
      "Tech blogs and documentation sites",
      "Hackathon projects"
    ],
    pros: [
      "个性鲜明 - 辨识度极高",
      "开发友好 - CSS 简单直接",
      "当前非常流行 - 潮流前沿",
      "深色模式适配良好"
    ],
    prosEn: [
      "Distinctive personality - highly recognizable",
      "Dev-friendly - simple and direct CSS",
      "Currently very trendy - cutting edge",
      "Good dark mode adaptation"
    ],
    cons: [
      "可能显得粗糙未完成",
      "视觉冲击过强 - 不耐看",
      "企业客户接受度有限"
    ],
    consEn: [
      "May appear rough and unfinished",
      "Visual impact too strong - not eye-friendly",
      "Limited enterprise client acceptance"
    ],
    examples: ["Figma Community", "Gumroad", "Poolside.fm", "Pitch.com", "Notion 模板"],
    examplesEn: ["Figma Community", "Gumroad", "Poolside.fm", "Pitch.com", "Notion templates"],
    pitfalls: [
      "阴影做了模糊——必须是 0 模糊的硬实体投影，位移 4-8px",
      "描边细于 2px——粗黑描边就是它的身份证",
      "按下去没有位移——active 时卡片要真的「怼」进阴影的位置"
    ],
    pitfallsEn: [
      "Blurred shadows — they must be hard, zero-blur solid offsets of 4-8px",
      "Borders thinner than 2px — the thick black outline is the ID card",
      "No press displacement — on :active the card should physically slam into its shadow"
    ],
    colors: ["#000000", "#FF6B35", "#004E89", "#FFFFFF", "#F7C548"]
  },
  {
    id: "bento",
    name: "Bento 网格",
    nameEn: "Bento Grid",
    rating: 4.0,
    description: "灵感源自日本便当盒的模块化布局系统，由 Apple 产品页面发扬光大。不同大小的卡片单元像精心摆放的食材，创造出丰富的视觉韵律。这是信息组织与视觉美学的完美结合。",
    descriptionEn: "A modular layout system inspired by Japanese bento boxes, popularized by Apple product pages. Different-sized card units like carefully arranged ingredients create rich visual rhythm. A perfect combination of information organization and visual aesthetics.",
    tags: ["极简", "热门", "现代"],
    tagsEn: ["Minimal", "Hot", "Modern"],
    features: [
      "模块化卡片系统 - 1:1, 2:1, 1:2 比例",
      "大小不等的单元格组合",
      "统一的 16-24px 圆角",
      "清晰的功能分区",
      "响应式网格重排"
    ],
    featuresEn: [
      "Modular card system - 1:1, 2:1, 1:2 ratios",
      "Varying cell size combinations",
      "Unified 16-24px border radius",
      "Clear functional sections",
      "Responsive grid reflow"
    ],
    useCases: [
      "产品功能特性展示",
      "个人主页与 About 页面",
      "仪表盘数据概览",
      "作品集项目展示",
      "App 下载页功能介绍"
    ],
    useCasesEn: [
      "Product feature showcases",
      "Personal homepage and About pages",
      "Dashboard data overviews",
      "Portfolio project displays",
      "App download feature introductions"
    ],
    pros: [
      "信息组织结构清晰",
      "移动端响应式优秀",
      "视觉层次丰富有节奏",
      "内容承载能力强"
    ],
    prosEn: [
      "Clear information organization",
      "Excellent mobile responsiveness",
      "Rich visual hierarchy with rhythm",
      "Strong content capacity"
    ],
    cons: [
      "内容需要精心规划",
      "过于流行容易模板化",
      "空间分配需要设计功底"
    ],
    consEn: [
      "Content needs careful planning",
      "Over-popularity can be templated",
      "Space allocation requires design skills"
    ],
    examples: ["Apple 产品页", "Linear Features", "Notion 官网", "Raycast", "Arc 浏览器"],
    examplesEn: ["Apple Product Pages", "Linear Features", "Notion.so", "Raycast", "Arc Browser"],
    pitfalls: [
      "格子大小没有节奏——bento 的魅力在大小格的韵律，全部等大就成了普通网格",
      "单个格子信息过载——每格只讲一件事",
      "圆角与间距各自为政——所有格子共享同一套 radius 和 gap 才像一个便当盒"
    ],
    pitfallsEn: [
      "No size rhythm — bento charm lives in varied cell sizes; uniform cells are just a grid",
      "Overstuffed cells — each box tells exactly one thing",
      "Freestyle radius and gaps — every cell must share one radius and gap to read as one box"
    ],
    colors: ["#FFFFFF", "#F0F0F0", "#000000", "#007AFF", "#1E1E1E"]
  },
  {
    id: "duotone",
    name: "双色调",
    nameEn: "Duotone",
    rating: 3.9,
    description: "将复杂的图像简化为两种颜色的强烈对比，创造出如丝网印刷般的艺术效果。Spotify 的年度回顾让这种风格家喻户晓。大胆的色彩选择是品牌识别的利器。",
    descriptionEn: "Simplifying complex images to stark contrast of two colors, creating silkscreen-like artistic effects. Spotify Wrapped made this style universally known. Bold color choices are a weapon for brand recognition.",
    tags: ["艺术", "复古"],
    tagsEn: ["Art", "Vintage"],
    features: [
      "仅使用两种颜色",
      "图像的双色调处理",
      "强烈的视觉对比",
      "CSS filter/blend mode 实现",
      "复古与现代的融合"
    ],
    featuresEn: [
      "Only two colors used",
      "Duotone image treatment",
      "Strong visual contrast",
      "CSS filter/blend mode implementation",
      "Fusion of retro and modern"
    ],
    useCases: [
      "音乐流媒体平台",
      "运动与健身品牌",
      "创意机构 portfolio",
      "活动海报与营销物料",
      "社交媒体视觉内容"
    ],
    useCasesEn: [
      "Music streaming platforms",
      "Sports and fitness brands",
      "Creative agency portfolios",
      "Event posters and marketing materials",
      "Social media visual content"
    ],
    pros: [
      "极强的视觉冲击力",
      "品牌识别度极高",
      "实现技术门槛低",
      "适合大规模视觉系统"
    ],
    prosEn: [
      "Extremely strong visual impact",
      "Very high brand recognition",
      "Low technical implementation barrier",
      "Suitable for large-scale visual systems"
    ],
    cons: [
      "色彩组合选择受限",
      "长时间观看易疲劳",
      "原图质量影响效果"
    ],
    consEn: [
      "Limited color combination choices",
      "Causes fatigue with prolonged viewing",
      "Original image quality affects results"
    ],
    examples: ["Spotify Wrapped", "Adidas Originals", "NPR", "Twitch 品牌", "Nike ACG"],
    examplesEn: ["Spotify Wrapped", "Adidas Originals", "NPR", "Twitch branding", "Nike ACG"],
    pitfalls: [
      "第三种颜色混进来——双色调的纪律就是两个色相（加各自深浅）",
      "两色对比不足——要选色相环上距离足够远的对撞色",
      "照片保持全彩——图片必须做双色映射，否则立刻出戏"
    ],
    pitfallsEn: [
      "A third hue sneaks in — the discipline is two hues plus their tints",
      "Weak contrast between the two — pick hues far apart on the wheel",
      "Full-color photos — imagery must be duotone-mapped or the spell breaks"
    ],
    colors: ["#1E3A8A", "#F97316", "#7C3AED", "#10B981", "#000000"]
  },
  {
    id: "kinetic",
    name: "动态字体",
    nameEn: "Kinetic Typography",
    rating: 2.9,
    description: "让文字从静态阅读对象变成动态视觉体验。滚动触发的字体动画、文字的拆解重组、3D 空间中的字体运动。这是创意机构和导演们最爱的数字表达方式。",
    descriptionEn: "Transforming text from static reading objects to dynamic visual experiences. Scroll-triggered typography animations, text deconstruction and reassembly, font movement in 3D space. The favorite digital expression of creative agencies and directors.",
    tags: ["艺术", "前卫"],
    tagsEn: ["Art", "Avant-garde"],
    features: [
      "GSAP/Framer Motion 字体动画",
      "滚动触发的渐进式展示",
      "文字粒子化解散重组",
      "3D CSS 变换效果",
      "可变字体 variable fonts"
    ],
    featuresEn: [
      "GSAP/Framer Motion typography animation",
      "Scroll-triggered progressive reveals",
      "Text particle dissolution and reassembly",
      "3D CSS transform effects",
      "Variable fonts animation"
    ],
    useCases: [
      "创意机构官网",
      "电影/MV 宣传站",
      "设计师个人作品集",
      "品牌活动专题页",
      "艺术装置互动网站"
    ],
    useCasesEn: [
      "Creative agency websites",
      "Film/MV promotional sites",
      "Designer personal portfolios",
      "Brand campaign microsites",
      "Art installation interactive sites"
    ],
    pros: [
      "极强的视觉吸引力与记忆点",
      "叙事能力强 - 讲故事神器",
      "独特的品牌表达方式",
      "获奖作品常客"
    ],
    prosEn: [
      "Extremely strong visual appeal and memorability",
      "Strong narrative ability - storytelling tool",
      "Unique brand expression method",
      "Regular award winner"
    ],
    cons: [
      "性能开销大 - 需要优化",
      "可访问性挑战 - motion 敏感用户",
      "内容可能被动画淹没",
      "SEO 不友好"
    ],
    consEn: [
      "Large performance overhead - needs optimization",
      "Accessibility challenges - motion-sensitive users",
      "Content may be overwhelmed by animation",
      "Not SEO-friendly"
    ],
    examples: ["Apple 产品发布会", "Active Theory 作品", "Awwwards 获奖站", "KIKK Festival"],
    examplesEn: ["Apple keynotes", "Active Theory works", "Awwwards winners", "KIKK Festival"],
    pitfalls: [
      "所有文字同时在动——动态字体需要编排节奏，全部一起动等于没有焦点",
      "循环不停不歇——动画要慢、要留静止段，否则让人头晕",
      "忽略 prefers-reduced-motion——动效风格的可访问性红线"
    ],
    pitfallsEn: [
      "Everything animating at once — kinetic type needs choreography; simultaneous motion means no focus",
      "Relentless loops — keep cycles slow with resting beats, or it's nauseating",
      "Ignoring prefers-reduced-motion — the accessibility red line of motion-heavy styles"
    ],
    colors: ["#FF0000", "#000000", "#FFFFFF", "#FFD700", "#00FFFF"]
  },
  {
    id: "cyberpunk",
    name: "赛博朋克",
    nameEn: "Cyberpunk",
    rating: 3.3,
    description: "「高科技，低生活」的数字美学——霓虹灯光穿透夜雨，故障艺术闪烁在废弃的屏幕上。品红、青色、黄色的霓虹三色组合，配合深黑背景，构建出一个充满反乌托邦气质的未来世界。",
    descriptionEn: "'High tech, low life' digital aesthetics — neon lights pierce through night rain, glitch art flickers on abandoned screens. Neon magenta, cyan, yellow combination against deep black, constructing a dystopian future world.",
    tags: ["前卫", "个性"],
    tagsEn: ["Avant-garde", "Distinctive"],
    features: [
      "霓虹色发光效果 - text-shadow/box-shadow",
      "深黑 #0a0a0a 背景",
      "Glitch 故障艺术效果",
      "科幻感无衬线字体",
      "扫描线与 CRT 纹理"
    ],
    featuresEn: [
      "Neon glow effects - text-shadow/box-shadow",
      "Deep black #0a0a0a backgrounds",
      "Glitch art effects",
      "Sci-fi sans-serif typography",
      "Scanlines and CRT textures"
    ],
    useCases: [
      "游戏官网与电竞品牌",
      "科幻电影宣传站",
      "电子音乐与 DJ",
      "夜店与娱乐场所",
      "VR/AR 技术展示"
    ],
    useCasesEn: [
      "Game websites and esports brands",
      "Sci-fi movie promotional sites",
      "Electronic music and DJs",
      "Nightclubs and entertainment venues",
      "VR/AR technology showcases"
    ],
    pros: [
      "沉浸感极强 - 氛围感满分",
      "年轻用户共鸣度高",
      "话题性与传播力强",
      "视觉冲击力一流"
    ],
    prosEn: [
      "Extremely immersive - perfect atmosphere",
      "High resonance with young users",
      "Strong topic appeal and shareability",
      "First-class visual impact"
    ],
    cons: [
      "可读性挑战 - 深色发光文字",
      "不适合商务严肃场景",
      "容易过度设计",
      "性能消耗较高"
    ],
    consEn: [
      "Readability challenges - glowing dark text",
      "Not for serious business contexts",
      "Easy to over-design",
      "Higher performance consumption"
    ],
    examples: ["Cyberpunk 2077", "银翼杀手 2049", "赛博朋克边缘行者", "AKIRA"],
    examplesEn: ["Cyberpunk 2077", "Blade Runner 2049", "Cyberpunk: Edgerunners", "AKIRA"],
    pitfalls: [
      "霓虹全都开到最亮——霓虹要有主次层级，全亮等于全灰",
      "故障效果太频繁——glitch 是标点符号不是正文",
      "文字直接压在噪点上——赛博朋克也需要可读性的底垫"
    ],
    pitfallsEn: [
      "Every neon at max — glow needs hierarchy; all-bright reads as flat gray",
      "Constant glitching — glitch is punctuation, not prose",
      "Text straight on noise — even cyberpunk needs readable backing"
    ],
    colors: ["#FF00FF", "#00FFFF", "#FFFF00", "#000000", "#FF1493"]
  },
  {
    id: "vaporwave",
    name: "蒸汽波",
    nameEn: "Vaporwave",
    rating: 3.0,
    description: "诞生于 2010 年代互联网的亚文化美学，是对 80/90 年代消费主义的讽刺性怀旧。粉紫渐变、古典雕塑、日文片假名、Windows 95 界面元素混搭出一种诡异的梦境感。",
    descriptionEn: "A subculture aesthetic born from 2010s internet, a satirical nostalgia for 80s/90s consumerism. Pink-purple gradients, classical sculptures, Japanese katakana, Windows 95 interface elements mixed into an eerie dreamlike feeling.",
    tags: ["艺术", "复古"],
    tagsEn: ["Art", "Vintage"],
    features: [
      "粉紫青渐变主色调",
      "古典大理石雕塑拼贴",
      "日文片假名/繁体中文装饰",
      "棋盘格与 3D 网格地面",
      "像素化与低保真处理"
    ],
    featuresEn: [
      "Pink-purple-cyan gradient palette",
      "Classical marble sculpture collages",
      "Japanese katakana/Chinese decorations",
      "Checkerboard and 3D grid floors",
      "Pixelation and lo-fi processing"
    ],
    useCases: [
      "复古电子音乐项目",
      "潮流服饰限量系列",
      "互联网艺术项目",
      "怀旧主题活动",
      "NFT 与数字收藏品"
    ],
    useCasesEn: [
      "Retro electronic music projects",
      "Streetwear limited editions",
      "Internet art projects",
      "Nostalgia-themed events",
      "NFTs and digital collectibles"
    ],
    pros: [
      "独特的亚文化标识",
      "怀旧情怀共鸣强烈",
      "社群认同感强",
      "视觉元素丰富可混搭"
    ],
    prosEn: [
      "Unique subculture identity",
      "Strong nostalgic resonance",
      "Strong community identification",
      "Rich visual elements for mixing"
    ],
    cons: [
      "极度小众 - 受众有限",
      "容易显得过时",
      "商业应用场景少",
      "版权素材风险"
    ],
    consEn: [
      "Extremely niche - limited audience",
      "Easily appears dated",
      "Few commercial applications",
      "Copyright material risks"
    ],
    examples: ["Macintosh Plus - Floral Shoppe", "Saint Pepsi", "Arizona Iced Tea x Adidas"],
    examplesEn: ["Macintosh Plus - Floral Shoppe", "Saint Pepsi", "Arizona Iced Tea x Adidas"],
    pitfalls: [
      "只有粉紫渐变没有符号——蒸汽波靠雕像、棕榈、网格地平线这些符号叙事",
      "字体太现代——需要衬线斜体或全角宽字距的复古味（还有日文假名点缀）",
      "饱和度拉满——蒸汽波是褪色的梦，要带一层雾感"
    ],
    pitfallsEn: [
      "Gradient without iconography — vaporwave narrates through statues, palms, grid horizons",
      "Too-modern typefaces — it wants italic serifs or wide-tracked retro faces (plus katakana accents)",
      "Full saturation — vaporwave is a faded dream; keep a hazy wash over it"
    ],
    colors: ["#FF69B4", "#00CED1", "#9400D3", "#FFD700", "#1E90FF"]
  },
  {
    id: "maximalism",
    name: "极繁主义",
    nameEn: "Maximalism",
    rating: 3.0,
    description: "「多即是多，少即是无聊」——极繁主义是对极简主义的直接对抗。层叠的图案、丰富的色彩、多种字体的混搭，像是一场视觉的狂欢派对。Gucci 和 Valentino 将其推向奢侈品的巅峰。",
    descriptionEn: "'More is more, less is bore' — Maximalism is direct opposition to minimalism. Layered patterns, rich colors, multiple font combinations, like a visual carnival party. Gucci and Valentino pushed it to luxury's pinnacle.",
    tags: ["艺术", "个性"],
    tagsEn: ["Art", "Distinctive"],
    features: [
      "丰富饱和的色彩层叠",
      "多种图案纹理混搭",
      "2-4 种字体自由组合",
      "密集的视觉元素排布",
      "装饰性边框与分割线"
    ],
    featuresEn: [
      "Rich saturated color layering",
      "Multiple pattern and texture mixing",
      "2-4 fonts freely combined",
      "Dense visual element arrangement",
      "Decorative borders and dividers"
    ],
    useCases: [
      "奢侈品牌旗舰站",
      "高端时尚杂志数字版",
      "艺术展览与博物馆",
      "节庆活动专题页",
      "名人与明星官网"
    ],
    useCasesEn: [
      "Luxury brand flagships",
      "High-end fashion magazine digital editions",
      "Art exhibitions and museums",
      "Festival event pages",
      "Celebrity official sites"
    ],
    pros: [
      "视觉盛宴 - 感官刺激强烈",
      "品牌个性表达的极致",
      "情感丰富有感染力",
      "适合讲述复杂故事"
    ],
    prosEn: [
      "Visual feast - intense sensory stimulation",
      "Ultimate brand personality expression",
      "Rich emotions and infectious",
      "Suitable for complex storytelling"
    ],
    cons: [
      "极易杂乱失控",
      "加载性能差",
      "需要顶级设计功底",
      "可用性可能受影响"
    ],
    consEn: [
      "Very easy to become chaotic",
      "Poor loading performance",
      "Requires top-tier design skills",
      "Usability may be affected"
    ],
    examples: ["Gucci.com", "Valentino", "Dolce & Gabbana", "Versace", "Vogue Italia"],
    examplesEn: ["Gucci.com", "Valentino", "Dolce & Gabbana", "Versace", "Vogue Italia"],
    pitfalls: [
      "多而无序——极繁是有层次的丰富而不是随机堆放，要保留视觉动线",
      "元素之间没有呼应——图案与色彩要成组、成家族地重复出现",
      "可读性牺牲殆尽——正文区仍然需要一块相对安静的底"
    ],
    pitfallsEn: [
      "Abundance without order — maximalism is layered richness, not random piles; keep a visual path",
      "No echoing motifs — patterns and colors must repeat in families",
      "Sacrificing all readability — body copy still needs a calmer backing"
    ],
    colors: ["#FF1493", "#00FF00", "#FFD700", "#FF4500", "#8B00FF"]
  },
  {
    id: "art-deco",
    name: "装饰艺术",
    nameEn: "Art Deco",
    rating: 3.5,
    description: "诞生于 1920 年代巴黎的黄金时代美学，「摩登」与「奢华」的完美结合。几何化的装饰图案、金银双色的金属光泽、对称的纪念碑式构图。这是克莱斯勒大厦和盖茨比派对的视觉语言。",
    descriptionEn: "Golden age aesthetics born in 1920s Paris, a perfect fusion of 'modern' and 'luxury'. Geometric decorative patterns, gold-silver metallic sheen, symmetric monumental compositions. The visual language of the Chrysler Building and Gatsby parties.",
    tags: ["经典", "复古"],
    tagsEn: ["Classic", "Vintage"],
    features: [
      "几何化装饰图案 - 扇形/阶梯",
      "金色+银色金属质感",
      "严格对称的纪念碑构图",
      "细密的线条与边框",
      "衬线字体的优雅运用"
    ],
    featuresEn: [
      "Geometric decorative patterns - fans/steps",
      "Gold + silver metallic textures",
      "Strictly symmetric monumental compositions",
      "Fine lines and borders",
      "Elegant serif typography use"
    ],
    useCases: [
      "奢侈品珠宝品牌",
      "高端酒店与度假村",
      "精品婚礼策划",
      "复古主题鸡尾酒吧",
      "古典音乐与剧院"
    ],
    useCasesEn: [
      "Luxury jewelry brands",
      "High-end hotels and resorts",
      "Boutique wedding planning",
      "Vintage cocktail bars",
      "Classical music and theaters"
    ],
    pros: [
      "极致的高级感与奢华感",
      "经典永恒 - 100年不过时",
      "强烈的时代感与故事性",
      "适合高端定位品牌"
    ],
    prosEn: [
      "Ultimate premium and luxury feel",
      "Timeless classic - 100 years strong",
      "Strong era feel and storytelling",
      "Suitable for high-end brand positioning"
    ],
    cons: [
      "容易显得「老派」",
      "实现细节要求高",
      "年轻用户可能不感冒",
      "素材制作成本高"
    ],
    consEn: [
      "Can appear 'old-fashioned'",
      "High detail implementation requirements",
      "May not appeal to young users",
      "High material production cost"
    ],
    examples: ["了不起的盖茨比", "克莱斯勒大厦", "The Savoy London", "Tiffany & Co."],
    examplesEn: ["The Great Gatsby", "Chrysler Building", "The Savoy London", "Tiffany & Co."],
    pitfalls: [
      "金色用成土豪金——Deco 的金是细线条的金属光泽，不是大面积填充",
      "图案不对称——对称与放射结构是装饰艺术的骨架",
      "字体用了圆润无衬线——它需要几何感衬线或装饰性大写字母"
    ],
    pitfallsEn: [
      "Gold as bulk fill — Deco gold lives in fine metallic linework, not large fills",
      "Asymmetric ornament — symmetry and radiating structure are the skeleton",
      "Soft rounded sans-serifs — it wants geometric serifs or decorative capitals"
    ],
    colors: ["#FFD700", "#C0C0C0", "#000000", "#8B4513", "#1C1C1C"]
  },
  {
    id: "dark-academia",
    name: "暗黑学院",
    nameEn: "Dark Academia",
    rating: 3.4,
    description: "源自 Tumblr 和 TikTok 的美学亚文化，是对古典教育与知识追求的浪漫化想象。深色调的皮革与木纹、古典文学的意象、神秘的学院氛围。像是走进霍格沃茨或牛津的古老图书馆。",
    descriptionEn: "An aesthetic subculture from Tumblr and TikTok, a romanticized imagination of classical education and knowledge pursuit. Dark leather and wood tones, classical literature imagery, mysterious academic atmosphere. Like entering Hogwarts or Oxford's ancient libraries.",
    tags: ["经典", "复古"],
    tagsEn: ["Classic", "Vintage"],
    features: [
      "深色调 - 棕/墨绿/酒红/黑",
      "复古质感 - 皮革/旧纸/蜡封",
      "衬线字体 - Garamond/Baskerville",
      "古典装饰元素 - 羽毛笔/书籍",
      "moody 氛围光影"
    ],
    featuresEn: [
      "Dark tones - brown/forest green/burgundy/black",
      "Vintage textures - leather/old paper/wax seals",
      "Serif fonts - Garamond/Baskerville",
      "Classical decorative elements - quills/books",
      "Moody atmospheric lighting"
    ],
    useCases: [
      "独立出版社与书店",
      "古典文学数字版",
      "学术研究机构",
      "复古文具品牌",
      "古着店与收藏馆"
    ],
    useCasesEn: [
      "Independent publishers and bookstores",
      "Classical literature digital editions",
      "Academic research institutions",
      "Vintage stationery brands",
      "Vintage shops and collection galleries"
    ],
    pros: [
      "独特的神秘氛围感",
      "强烈的文化底蕴",
      "适合深度阅读场景",
      "小众但忠诚的受众"
    ],
    prosEn: [
      "Unique mysterious atmosphere",
      "Strong cultural depth",
      "Suitable for deep reading contexts",
      "Niche but loyal audience"
    ],
    cons: [
      "受众相对小众",
      "季节性偏秋冬",
      "可能显得沉重压抑",
      "图片素材要求特殊"
    ],
    consEn: [
      "Relatively niche audience",
      "Seasonal bias toward fall/winter",
      "Can feel heavy and oppressive",
      "Special image material requirements"
    ],
    examples: ["Oxford University Press", "Penguin Classics", "The School of Life", "Hogwarts Legacy"],
    examplesEn: ["Oxford University Press", "Penguin Classics", "The School of Life", "Hogwarts Legacy"],
    pitfalls: [
      "黑得没有暖光——暗黑学院是烛光下的暖棕黑，冷灰黑就成了赛博哥特",
      "材质缺席——羊皮纸、皮革、木纹的质感是氛围的一半",
      "衬线字体太现代——要有旧印刷的味道（Garamond 一系）"
    ],
    pitfallsEn: [
      "Cold blackness — dark academia is warm candlelit brown-black; cool grays turn it cyber-goth",
      "No texture — parchment, leather, and wood grain carry half the mood",
      "Modern serifs — it needs old-print flavor (the Garamond family)"
    ],
    colors: ["#2F4F4F", "#8B4513", "#000000", "#F5F5DC", "#800020"]
  },
  {
    id: "liquid-glass",
    name: "液态玻璃",
    nameEn: "Liquid Glass",
    rating: 3.8,
    description: "Apple 在 2025 年 WWDC 发布的新一代设计语言，玻璃拟态的进化形态。界面元素如同真实的液态玻璃——折射、镜面高光与动态模糊随内容流动，层级由材质厚度而非阴影表达。克制的深色画布上，光线成为唯一的装饰。",
    descriptionEn: "Apple's next-generation design language unveiled at WWDC 2025 — glassmorphism evolved. UI elements behave like real liquid glass: refraction, specular highlights, and dynamic blur flow with content, while hierarchy comes from material thickness rather than shadows. On a restrained dark canvas, light itself is the only ornament.",
    tags: ["现代", "热门", "前卫"],
    tagsEn: ["Modern", "Hot", "Avant-garde"],
    features: [
      "镜面高光边缘 - 顶部 1px 白色内高光",
      "深度背景模糊 - blur 28-40px + 饱和提升",
      "全胶囊圆角 - 面板 28px 起、按钮 999px",
      "彩色光晕背景 - 玻璃后漂浮的发光 orb",
      "材质厚度分层 - 用透明度而非阴影表达层级"
    ],
    featuresEn: [
      "Specular edge highlight - 1px white inner top glow",
      "Deep backdrop blur - 28-40px with saturation boost",
      "Full capsule radii - 28px+ panels, 999px buttons",
      "Glowing orb backdrops - colored light behind glass",
      "Material-depth layering - opacity over shadows"
    ],
    useCases: [
      "操作系统与系统级应用",
      "高端科技产品发布页",
      "音乐/视频播放器界面",
      "智能家居控制面板",
      "AR/VR 空间界面"
    ],
    useCasesEn: [
      "Operating systems and system-level apps",
      "Premium tech product launch pages",
      "Music/video player interfaces",
      "Smart home control panels",
      "AR/VR spatial interfaces"
    ],
    pros: [
      "紧贴 Apple 最新设计趋势",
      "通透高级的未来感",
      "层级清晰而不依赖投影",
      "深色场景下极具沉浸感"
    ],
    prosEn: [
      "Aligned with Apple's latest design direction",
      "Translucent, premium, futuristic",
      "Clear hierarchy without heavy shadows",
      "Deeply immersive in dark contexts"
    ],
    cons: [
      "浏览器兼容性要求高 - backdrop-filter",
      "低对比场景有可读性风险",
      "多层模糊有性能开销"
    ],
    consEn: [
      "High browser requirements - backdrop-filter",
      "Readability risk in low contrast",
      "Performance cost of layered blur"
    ],
    examples: ["iOS 26", "macOS Tahoe", "visionOS", "Apple.com"],
    examplesEn: ["iOS 26", "macOS Tahoe", "visionOS", "Apple.com"],
    pitfalls: [
      "拿玻璃拟态旧配方交差——液态玻璃的关键是顶边镜面高光与「厚度」层级，不只是模糊",
      "背景光晕静止不动——光要缓慢漂移，静止的光晕像贴图",
      "硬套在浅色底上——它只在深色画布上成立"
    ],
    pitfallsEn: [
      "Recycling plain glassmorphism — Liquid Glass hinges on the specular top edge and thickness hierarchy, not just blur",
      "Static orbs — the light must drift slowly; frozen glow looks pasted on",
      "Forcing it onto light backgrounds — it only convinces on a dark canvas"
    ],
    colors: ["#0A0E1F", "#5AC8FA", "#BF5AF2", "#FF9F0A", "#F2F4F8"]
  },
  {
    id: "frutiger-aero",
    name: "Frutiger Aero",
    nameEn: "Frutiger Aero",
    rating: 3.3,
    description: "2004-2013 年间统治世界的乐观科技美学——Windows Vista 的光泽按钮、天空草地壁纸、漂浮的水泡与锦鲤。它相信科技会带来更绿色美好的未来。如今作为千禧怀旧浪潮在社交平台上强势回归。",
    descriptionEn: "The optimistic tech aesthetic that ruled 2004-2013 — Windows Vista's glossy buttons, sky-and-grass wallpapers, floating bubbles and koi fish. It believed technology would bring a greener, brighter future. Now roaring back across social platforms as millennial nostalgia.",
    tags: ["复古", "活泼", "流行"],
    tagsEn: ["Vintage", "Playful", "Trendy"],
    features: [
      "光泽质感 - 上半部白色高光渐变",
      "自然意象 - 天空/草地/水滴/气泡",
      "天蓝草绿配色 - 明亮高饱和",
      "饱满圆角 - 16-28px 水润感",
      "光晕与镜头光斑点缀"
    ],
    featuresEn: [
      "Glossy surfaces - white top-half highlight gradients",
      "Nature imagery - sky/grass/water/bubbles",
      "Sky blue and grass green - bright and saturated",
      "Plump radii - 16-28px dewy softness",
      "Glows and lens flare accents"
    ],
    useCases: [
      "天气/环保类应用",
      "怀旧向个人主页",
      "饮品与个护品牌",
      "儿童科技产品",
      "Y2K 复古营销活动页"
    ],
    useCasesEn: [
      "Weather and eco apps",
      "Nostalgia-driven personal sites",
      "Beverage and personal care brands",
      "Kids' tech products",
      "Y2K revival campaign pages"
    ],
    pros: [
      "强烈的怀旧情绪共鸣",
      "乐观治愈的独特氛围",
      "在扁平化泛滥中极具辨识度",
      "自带社交传播话题性"
    ],
    prosEn: [
      "Powerful nostalgia resonance",
      "Uniquely optimistic, healing mood",
      "Stands out in a flat-design world",
      "Built-in social virality"
    ],
    cons: [
      "分寸难拿捏 - 易显廉价过时",
      "光泽细节工作量大",
      "不适合严肃商务场景"
    ],
    consEn: [
      "Hard to balance - can look cheap or dated",
      "Gloss details are labor-intensive",
      "Poor fit for serious business"
    ],
    examples: ["Windows Vista", "Wii 主界面", "iTunes 7", "Frutiger Aero Archive"],
    examplesEn: ["Windows Vista", "Wii Menu", "iTunes 7", "Frutiger Aero Archive"],
    pitfalls: [
      "做成了磨砂玻璃——Aero 的质感是光泽塑料与水面，高光要锐利清晰",
      "自然元素缺席——没有天空、草地、气泡，就只剩一个过时的渐变按钮",
      "配色发灰——它的蓝与绿必须干净明亮，像洗过的晴天"
    ],
    pitfallsEn: [
      "Frosting instead of gloss — Aero is shiny plastic and water; highlights must be crisp",
      "No nature — without sky, grass, and bubbles it's just a dated gradient button",
      "Grayish tints — its blues and greens must stay clean and bright, like a washed sky"
    ],
    colors: ["#BDE8FF", "#4CA6E8", "#8FD400", "#FFFFFF", "#1B4A6B"]
  },
  {
    id: "aurora",
    name: "极光渐变",
    nameEn: "Aurora Gradients",
    rating: 4.0,
    description: "当代 SaaS 营销页的统治性美学：干净的白底与克制的排版之上，一片缓慢流动的极光渐变作为唯一的情绪出口。源自 Stripe 的标志性 hero 动效，如今已是「专业而不无聊」的代名词。",
    descriptionEn: "The dominant aesthetic of modern SaaS marketing: over a clean white canvas and restrained typography, one slowly flowing aurora gradient serves as the sole emotional outlet. Born from Stripe's iconic hero animation, it's now shorthand for 'professional but not boring'.",
    tags: ["现代", "流行", "热门"],
    tagsEn: ["Modern", "Trendy", "Hot"],
    features: [
      "弥散极光渐变 - 多层模糊色块交叠",
      "干净白底 - 渐变只在关键区绽放",
      "渐变文字 - background-clip: text",
      "细灰边框卡片 - 1px hairline",
      "缓慢流动动画 - 8s+ 循环"
    ],
    featuresEn: [
      "Diffused aurora gradients - layered blurred color fields",
      "Clean white base - gradients bloom only at key moments",
      "Gradient text - background-clip: text",
      "Hairline gray cards - 1px borders",
      "Slow drifting animation - 8s+ loops"
    ],
    useCases: [
      "SaaS 产品官网",
      "AI 产品发布页",
      "开发者工具营销页",
      "金融科技品牌",
      "科技大会活动页"
    ],
    useCasesEn: [
      "SaaS product sites",
      "AI product launch pages",
      "Developer tool marketing",
      "Fintech brands",
      "Tech conference pages"
    ],
    pros: [
      "专业感与情绪张力兼得",
      "极易与品牌色结合",
      "实现成熟 - 纯 CSS 可达",
      "转化率经过市场验证"
    ],
    prosEn: [
      "Professional yet emotive",
      "Easy to adapt to brand colors",
      "Mature technique - pure CSS",
      "Market-proven conversion"
    ],
    cons: [
      "同质化严重 - 满街都是",
      "渐变色彩管理有门槛",
      "过度使用会显得浮夸"
    ],
    consEn: [
      "Heavily saturated - it's everywhere",
      "Gradient color control takes skill",
      "Overuse reads as flashy"
    ],
    examples: ["Stripe.com", "Linear.app", "Raycast.com", "Resend.com", "Clerk.com"],
    examplesEn: ["Stripe.com", "Linear.app", "Raycast.com", "Resend.com", "Clerk.com"],
    pitfalls: [
      "渐变铺满全页——极光只在 hero 与 CTA 绽放，其余保持素净",
      "相邻色相脏了——过渡必须干净通透，混浊立刻显得廉价",
      "忘了动起来——静止的极光只是一团彩色模糊"
    ],
    pitfallsEn: [
      "Gradients everywhere — the aurora blooms only in hero and CTA bands; keep the rest plain",
      "Muddy hue transitions — blends must stay clean and luminous or it cheapens fast",
      "No motion — a static aurora is just colored blur"
    ],
    colors: ["#FAFAFC", "#635BFF", "#00D4FF", "#FF80BF", "#0A0A14"]
  },
  {
    id: "editorial",
    name: "报刊编辑风",
    nameEn: "Editorial",
    rating: 3.8,
    description: "把百年报刊排版工艺搬进浏览器：衬线报头、细规则线、多栏文字流、首字下沉与引文抽排。设计完全服务于阅读节奏，墨、线与留白就是全部的装饰。数字时代里最持久优雅的信息美学。",
    descriptionEn: "A century of newspaper typographic craft brought to the browser: serif mastheads, hairline rules, multi-column text flows, drop caps and pull quotes. Design serves reading rhythm entirely — ink, rules, and whitespace are the only ornaments. The most enduring information aesthetic of the digital age.",
    tags: ["经典", "个性", "艺术"],
    tagsEn: ["Classic", "Distinctive", "Art"],
    features: [
      "超大衬线报头 - Didone 气质",
      "细规则线分栏 - 1px hairline",
      "多栏文字流 - CSS columns",
      "首字下沉 - ::first-letter",
      "编辑元素齐全 - kicker/byline/引文"
    ],
    featuresEn: [
      "Oversized serif masthead - Didone flavor",
      "Hairline column rules - 1px",
      "Multi-column text flow - CSS columns",
      "Drop caps - ::first-letter",
      "Full editorial kit - kickers/bylines/pull quotes"
    ],
    useCases: [
      "数字杂志与 Newsletter",
      "深度报道专题页",
      "内容型个人博客",
      "出版社与书评站点",
      "品牌内容中心"
    ],
    useCasesEn: [
      "Digital magazines and newsletters",
      "Long-form feature stories",
      "Content-first personal blogs",
      "Publishers and book review sites",
      "Brand content hubs"
    ],
    pros: [
      "阅读体验极佳",
      "永不过时的优雅",
      "内容权威感强",
      "对图片素材依赖低"
    ],
    prosEn: [
      "Excellent reading experience",
      "Timeless elegance",
      "Strong editorial authority",
      "Low dependency on imagery"
    ],
    cons: [
      "对文字质量要求极高",
      "视觉冲击力偏弱",
      "多栏布局响应式改造繁琐"
    ],
    consEn: [
      "Demands high-quality writing",
      "Modest visual impact",
      "Column layouts are fussy responsively"
    ],
    examples: ["NYTimes.com", "The New Yorker", "Monocle", "The Economist"],
    examplesEn: ["NYTimes.com", "The New Yorker", "Monocle", "The Economist"],
    pitfalls: [
      "规则线太粗——报刊的线是 0.5-1px 的 hairline，粗了就成了表格",
      "栏宽失控——每栏 45-75 字符是可读性铁律",
      "编辑元素缺席——没有 kicker、byline、首字下沉，就只是分了栏的博客"
    ],
    pitfallsEn: [
      "Heavy rules — editorial lines are 0.5-1px hairlines; thicker reads as spreadsheet",
      "Runaway measure — 45-75 characters per column is the iron law",
      "Missing editorial furniture — without kickers, bylines, and drop caps it's just a blog in columns"
    ],
    colors: ["#FAF7F0", "#141414", "#C8102E", "#8A857C", "#E8E2D5"]
  },
  {
    id: "terminal",
    name: "终端黑客风",
    nameEn: "Terminal",
    rating: 3.6,
    description: "把 CRT 磷光屏的绿色辉光、扫描线与命令行语法搬上网页。等宽字体是唯一的字体，命令与输出是唯一的叙事。对开发者而言这是母语般的亲切感，对大众则是黑客电影式的神秘想象。",
    descriptionEn: "The green phosphor glow, scanlines, and command-line grammar of CRT screens brought to the web. Monospace is the only typeface; commands and output are the only narrative. Native tongue for developers, hacker-movie mystique for everyone else.",
    tags: ["复古", "个性"],
    tagsEn: ["Vintage", "Distinctive"],
    features: [
      "全站等宽字体 - ui-monospace 栈",
      "磷光绿辉光 - text-shadow 光晕",
      "CRT 扫描线 - repeating-gradient 叠加",
      "闪烁块状光标 - step 动画",
      "终端窗口 chrome 与 $ 提示符"
    ],
    featuresEn: [
      "Monospace everywhere - ui-monospace stack",
      "Phosphor green glow - text-shadow halos",
      "CRT scanlines - repeating-gradient overlay",
      "Blinking block cursor - step animation",
      "Terminal chrome with $ prompts"
    ],
    useCases: [
      "CLI 工具与开发者产品",
      "程序员个人主页",
      "技术博客",
      "网络安全公司",
      "编程教育平台"
    ],
    useCasesEn: [
      "CLI tools and dev products",
      "Developer portfolios",
      "Tech blogs",
      "Cybersecurity companies",
      "Coding education platforms"
    ],
    pros: [
      "开发者受众天然好感",
      "实现成本低 - 几乎零图片",
      "性能极佳",
      "氛围一致性极强"
    ],
    prosEn: [
      "Instant developer credibility",
      "Cheap to build - nearly zero images",
      "Excellent performance",
      "Powerful atmospheric coherence"
    ],
    cons: [
      "大众用户有阅读门槛",
      "长文阅读易疲劳",
      "绿色单色情绪单一"
    ],
    consEn: [
      "Steep readability for general users",
      "Fatiguing for long reads",
      "Monochrome green limits emotional range"
    ],
    examples: ["Warp.dev", "Charm.sh", "asciinema.org", "cool-retro-term"],
    examplesEn: ["Warp.dev", "Charm.sh", "asciinema.org", "cool-retro-term"],
    pitfalls: [
      "混进了非等宽字体——一处 sans-serif 就足以出戏",
      "绿色只有一档——磷光绿需要亮、暗、辉光多档层次",
      "扫描线太重——叠加层透明度超过 10% 会杀死可读性"
    ],
    pitfallsEn: [
      "A non-monospace font sneaks in — one sans-serif breaks character",
      "Single-shade green — phosphor needs bright, dim, and glow tiers",
      "Scanlines too heavy — overlay opacity beyond ~10% kills readability"
    ],
    colors: ["#0A0F0B", "#33FF66", "#FFB000", "#0F5F2E", "#E8FFE8"]
  },
  {
    id: "pixel",
    name: "像素风",
    nameEn: "Pixel Art",
    rating: 3.4,
    description: "8-bit 游戏机的限定色盘与马赛克方块美学。每个图形都由可见的像素格构成，动画逐帧跳动而非平滑过渡，界面像一台老游戏机的开机画面。粗糙即魅力，怀旧即语言。",
    descriptionEn: "The limited palettes and mosaic-block aesthetic of 8-bit consoles. Every graphic is built from visible pixel cells, animations jump frame-by-frame instead of easing, and the interface feels like an old console boot screen. Roughness is the charm; nostalgia is the language.",
    tags: ["复古", "活泼", "个性"],
    tagsEn: ["Vintage", "Playful", "Distinctive"],
    features: [
      "限定色盘 - NES/PICO-8 式 8-16 色",
      "box-shadow 像素画 - 逐格绘制图标",
      "零圆角零模糊 - 硬边一切",
      "steps() 跳帧动画",
      "HUD 元素 - SCORE/生命值/PRESS START"
    ],
    featuresEn: [
      "Limited palettes - NES/PICO-8 style 8-16 colors",
      "Box-shadow pixel art - icons drawn cell by cell",
      "Zero radius, zero blur - hard edges everywhere",
      "Frame-stepped animations - steps()",
      "HUD elements - SCORE/hearts/PRESS START"
    ],
    useCases: [
      "独立游戏工作室",
      "游戏发布会活动页",
      "复古主题电商",
      "数字藏品平台",
      "程序员趣味个人站"
    ],
    useCasesEn: [
      "Indie game studios",
      "Game launch event pages",
      "Retro-themed e-commerce",
      "Digital collectible platforms",
      "Playful developer sites"
    ],
    pros: [
      "辨识度拉满",
      "游戏玩家情感共鸣强",
      "图形资产体积小",
      "容错率高 - 粗糙即风格"
    ],
    prosEn: [
      "Maximum recognizability",
      "Strong gamer resonance",
      "Tiny graphic assets",
      "Forgiving - roughness is the style"
    ],
    cons: [
      "精致像素画其实很费工",
      "正文可读性受限",
      "严肃场景完全不适用"
    ],
    consEn: [
      "Good pixel art is laborious",
      "Limited body-text readability",
      "Unusable in serious contexts"
    ],
    examples: ["Celeste", "Stardew Valley", "itch.io", "Poolsuite.net"],
    examplesEn: ["Celeste", "Stardew Valley", "itch.io", "Poolsuite.net"],
    pitfalls: [
      "用了平滑缓动曲线——一切运动必须 steps() 跳帧",
      "圆角和模糊混进来——像素世界里没有抗锯齿",
      "色盘失控——超过 16 色就没有 8-bit 的味道了"
    ],
    pitfallsEn: [
      "Smooth easing curves — all motion must jump via steps()",
      "Rounded corners or blur creeping in — the pixel world has no anti-aliasing",
      "Palette sprawl — beyond 16 colors the 8-bit flavor is gone"
    ],
    colors: ["#1A1C2C", "#B13E53", "#FFCD75", "#41A6F6", "#A7F070"]
  },
].sort((a, b) => b.rating - a.rating);
