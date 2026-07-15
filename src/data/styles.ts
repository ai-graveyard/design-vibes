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
    colors: ["#2F4F4F", "#8B4513", "#000000", "#F5F5DC", "#800020"]
  },
].sort((a, b) => b.rating - a.rating);
