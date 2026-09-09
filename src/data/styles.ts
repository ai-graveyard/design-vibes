export interface DesignStyle {
  id: string;
  name: string;
  nameEn: string;
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
    "id": "apple",
    "name": "Apple 风",
    "nameEn": "Apple Minimalism",
    "description": "以产品为中心：短标题、大幅产品画面、清楚的卖点与克制的分区。系统无衬线字体，紧凑标题字距，统一间距；蓝色用于链接和主操作，材质与留白共同建立层级。",
    "descriptionEn": "Center the product: short headlines, large product imagery, clear benefits and restrained sections. System sans-serif, tight display tracking and consistent spacing; reserve blue for links and primary actions. Let material and whitespace establish hierarchy.",
    "tags": [
      "极简",
      "现代",
      "热门"
    ],
    "tagsEn": [
      "Minimal",
      "Modern",
      "Hot"
    ],
    "features": [
      "构图 - 以产品为中心：短标题、大幅产品画面、清楚的卖点与克制的分区。",
      "关键手法 - 系统无衬线字体，紧凑标题字距，统一间距；蓝色用于链接和主操作，材质与留白共同建立层级。"
    ],
    "featuresEn": [
      "Composition - Center the product: short headlines, large product imagery, clear benefits and restrained sections.",
      "Signature - System sans-serif, tight display tracking and consistent spacing; reserve blue for links and primary actions. Let material and whitespace establish hierarchy."
    ],
    "useCases": [
      "高端消费电子官网",
      "SaaS 产品 Landing Page",
      "科技初创公司品牌站",
      "设计师个人作品集",
      "极简电商精选店铺"
    ],
    "useCasesEn": [
      "Premium consumer electronics sites",
      "SaaS product landing pages",
      "Tech startup brand sites",
      "Designer portfolios",
      "Curated minimal e-commerce"
    ],
    "pros": [
      "极致专业感 - 一秒建立信任",
      "永不过时 - 10年后依然优雅",
      "性能卓越 - 首屏加载 < 1.5s",
      "转化率高 - 减少决策疲劳"
    ],
    "prosEn": [
      "Ultimate professionalism - instant trust",
      "Timeless - elegant after 10 years",
      "Excellent performance - FCP < 1.5s",
      "High conversion - reduces decision fatigue"
    ],
    "cons": [
      "对内容质量要求极高 - 平庸内容无处藏身",
      "可能显得冷淡疏离 - 缺乏人情味",
      "开发成本高 - 每个细节都需打磨"
    ],
    "consEn": [
      "Demands excellent content - mediocrity exposed",
      "Can feel cold and distant - lacks warmth",
      "High dev cost - every detail needs polish"
    ],
    "examples": [
      "Apple.com",
      "Linear.app",
      "Notion.so",
      "Stripe.com",
      "Vercel.com"
    ],
    "examplesEn": [
      "Apple.com",
      "Linear.app",
      "Notion.so",
      "Stripe.com",
      "Vercel.com"
    ],
    "pitfalls": [
      "不要把大留白变成内容缺失，也不要把大圆角、无强调色或某个阴影尺寸当作通用规则。"
    ],
    "pitfallsEn": [
      "Whitespace must support content. Oversized corners, no accent color or a single shadow size are not universal rules."
    ],
    "colors": [
      "#ffffff",
      "#f5f5f7",
      "#1d1d1f",
      "#6e6e73",
      "#0071e3"
    ]
  },
  {
    "id": "braun",
    "name": "迪特·拉姆斯风",
    "nameEn": "Braun / Dieter Rams",
    "description": "用模数网格组织信息，按真实功能分组；标签、刻度和控件相互对齐。中性灰、清楚的标识与克制的功能色；触感来自材质细节，装饰服从使用。",
    "descriptionEn": "Use a modular grid and functional grouping. Align labels, scales and controls. Neutral grays, clear labeling and restrained functional color; tactile material details serve use.",
    "tags": [
      "极简",
      "经典"
    ],
    "tagsEn": [
      "Minimal",
      "Classic"
    ],
    "features": [
      "构图 - 用模数网格组织信息，按真实功能分组；标签、刻度和控件相互对齐。",
      "关键手法 - 中性灰、清楚的标识与克制的功能色；触感来自材质细节，装饰服从使用。"
    ],
    "featuresEn": [
      "Composition - Use a modular grid and functional grouping. Align labels, scales and controls.",
      "Signature - Neutral grays, clear labeling and restrained functional color; tactile material details serve use."
    ],
    "useCases": [
      "工业设计公司官网",
      "建筑事务所作品展示",
      "高端家具品牌",
      "专业摄影器材商城",
      "极简主义生活方式品牌"
    ],
    "useCasesEn": [
      "Industrial design company sites",
      "Architecture firm portfolios",
      "Premium furniture brands",
      "Professional photography gear stores",
      "Minimalist lifestyle brands"
    ],
    "pros": [
      "极致专业感 - 跨文化通用",
      "信息传达效率极高",
      "品牌一致性易于维护",
      "开发规范清晰可控"
    ],
    "prosEn": [
      "Ultimate professionalism - cross-cultural",
      "Extremely efficient information delivery",
      "Brand consistency easy to maintain",
      "Clear and controllable dev specs"
    ],
    "cons": [
      "需要深厚的排版功底",
      "不适合需要情感共鸣的品牌",
      "容易被误解为「无设计」"
    ],
    "consEn": [
      "Requires deep typography expertise",
      "Not for brands needing emotional resonance",
      "Can be mistaken for 'no design'"
    ],
    "examples": [
      "Braun.com",
      "Vitsoe.com",
      "Teenage Engineering",
      "Leica",
      "Bang & Olufsen"
    ],
    "examplesEn": [
      "Braun.com",
      "Vitsoe.com",
      "Teenage Engineering",
      "Leica",
      "Bang & Olufsen"
    ],
    "pitfalls": [
      "不要给所有元素加橙色或无功能的仪表盘装饰。"
    ],
    "pitfallsEn": [
      "Avoid orange everywhere or decorative controls without a purpose."
    ],
    "colors": [
      "#f2f2f2",
      "#ffffff",
      "#1a1a1a",
      "#808080",
      "#c9c9c9"
    ]
  },
  {
    "id": "flat",
    "name": "扁平化",
    "nameEn": "Flat Design",
    "description": "用纯色分区、明确字号和简单图标组织任务。平面色块、清晰边界与一致的图标笔画，靠对比和位置形成层级。",
    "descriptionEn": "Organize tasks with solid color regions, clear typography and simple icons. Solid fills, clear boundaries and consistent icon strokes; hierarchy comes from contrast and position.",
    "tags": [
      "极简",
      "现代",
      "经典"
    ],
    "tagsEn": [
      "Minimal",
      "Modern",
      "Classic"
    ],
    "features": [
      "构图 - 用纯色分区、明确字号和简单图标组织任务。",
      "关键手法 - 平面色块、清晰边界与一致的图标笔画，靠对比和位置形成层级。"
    ],
    "featuresEn": [
      "Composition - Organize tasks with solid color regions, clear typography and simple icons.",
      "Signature - Solid fills, clear boundaries and consistent icon strokes; hierarchy comes from contrast and position."
    ],
    "useCases": [
      "移动应用 UI 设计",
      "图标库与 icon 系统",
      "信息图表与数据可视化",
      "企业内部工具界面",
      "简约风格品牌官网"
    ],
    "useCasesEn": [
      "Mobile app UI design",
      "Icon libraries and systems",
      "Infographics and data visualization",
      "Enterprise internal tool interfaces",
      "Minimal brand websites"
    ],
    "pros": [
      "开发效率高 - CSS 简单",
      "加载性能优异",
      "跨平台一致性好",
      "用户学习成本低"
    ],
    "prosEn": [
      "High dev efficiency - simple CSS",
      "Excellent loading performance",
      "Good cross-platform consistency",
      "Low user learning curve"
    ],
    "cons": [
      "缺乏深度可能显得单调",
      "交互 affordance 不够直观",
      "过于普及导致缺乏个性"
    ],
    "consEn": [
      "Lack of depth may seem monotonous",
      "Interaction affordances not intuitive enough",
      "Over-popularity leads to lack of personality"
    ],
    "examples": [
      "Windows 8/10 UI",
      "早期 iOS 7-12",
      "Google Material Design",
      "Spotify"
    ],
    "examplesEn": [
      "Windows 8/10 UI",
      "Early iOS 7-12",
      "Google Material Design",
      "Spotify"
    ],
    "pitfalls": [
      "避免立体斜面、材质反光和装饰性渐变；保留操作状态。"
    ],
    "pitfallsEn": [
      "Avoid bevels, material reflections and decorative gradients; preserve interaction states."
    ],
    "colors": [
      "#FFFFFF",
      "#2196F3",
      "#1976D2",
      "#E3F2FD",
      "#4CAF50"
    ]
  },
  {
    "id": "material",
    "name": "Material Design",
    "nameEn": "Material Design",
    "description": "按 Material 3 的色彩角色、字号层级、形状与状态组织界面。本例采用紫色主色、调性表面与 Roboto；56px FAB 使用 16px 圆角，悬浮与按下状态有明确反馈。",
    "descriptionEn": "Organize UI around Material 3 color roles, type scale, shape and state. This study uses a purple primary, tonal surfaces and Roboto; its 56px FAB has 16px corners with clear hover and pressed feedback.",
    "tags": [
      "现代",
      "经典"
    ],
    "tagsEn": [
      "Modern",
      "Classic"
    ],
    "features": [
      "构图 - 按 Material 3 的色彩角色、字号层级、形状与状态组织界面。",
      "关键手法 - 本例采用紫色主色、调性表面与 Roboto；56px FAB 使用 16px 圆角，悬浮与按下状态有明确反馈。"
    ],
    "featuresEn": [
      "Composition - Organize UI around Material 3 color roles, type scale, shape and state.",
      "Signature - This study uses a purple primary, tonal surfaces and Roboto; its 56px FAB has 16px corners with clear hover and pressed feedback."
    ],
    "useCases": [
      "Android 原生应用开发",
      "企业级 B2B 产品",
      "跨平台 Web 应用",
      "Google 生态系统产品",
      "教育与学习平台"
    ],
    "useCasesEn": [
      "Android native app development",
      "Enterprise B2B products",
      "Cross-platform web applications",
      "Google ecosystem products",
      "Education and learning platforms"
    ],
    "pros": [
      "设计系统极其完整 - 开箱即用",
      "文档详尽 - 学习资源丰富",
      "用户熟悉度高 - 减少学习成本",
      "组件库生态成熟"
    ],
    "prosEn": [
      "Extremely complete design system - ready to use",
      "Thorough documentation - rich learning resources",
      "High user familiarity - reduced learning cost",
      "Mature component library ecosystem"
    ],
    "cons": [
      "品牌个性不足 - 容易千篇一律",
      "过于「Google 味」",
      "动画过渡可能影响性能"
    ],
    "consEn": [
      "Lacks brand personality - can be generic",
      "Too 'Google-like'",
      "Motion transitions may affect performance"
    ],
    "examples": [
      "Google 全系产品",
      "Android 系统 UI",
      "Flutter 应用",
      "YouTube"
    ],
    "examplesEn": [
      "All Google products",
      "Android system UI",
      "Flutter apps",
      "YouTube"
    ],
    "pitfalls": [
      "不要把 Google 品牌四色当成 Material 的必选配色，或把圆形 FAB 当作所有版本的规范。"
    ],
    "pitfallsEn": [
      "Google brand colors are not a required Material palette, and circular FABs are not a rule for every version."
    ],
    "colors": [
      "#FEF7FF",
      "#6750A4",
      "#FFFFFF",
      "#EADDFF",
      "#21005D"
    ]
  },
  {
    "id": "swiss",
    "name": "瑞士风格",
    "nameEn": "Swiss Style / International Typographic",
    "description": "建立非对称网格，标题、栏线、编号和正文共享对齐轴。用新怪诞体的字重、字距和比例建立秩序；红色在本例中承担信息强调。",
    "descriptionEn": "Build an asymmetric grid with shared axes for headlines, rules, numbers and body copy. Use neo-grotesque type weight, spacing and scale to establish order; red carries emphasis in this study.",
    "tags": [
      "极简",
      "经典"
    ],
    "tagsEn": [
      "Minimal",
      "Classic"
    ],
    "features": [
      "构图 - 建立非对称网格，标题、栏线、编号和正文共享对齐轴。",
      "关键手法 - 用新怪诞体的字重、字距和比例建立秩序；红色在本例中承担信息强调。"
    ],
    "featuresEn": [
      "Composition - Build an asymmetric grid with shared axes for headlines, rules, numbers and body copy.",
      "Signature - Use neo-grotesque type weight, spacing and scale to establish order; red carries emphasis in this study."
    ],
    "useCases": [
      "国际艺术双年展官网",
      "先锋出版社品牌",
      "博物馆与文化机构",
      "设计教育平台",
      "高端杂志数字版"
    ],
    "useCasesEn": [
      "International art biennial sites",
      "Avant-garde publisher brands",
      "Museums and cultural institutions",
      "Design education platforms",
      "Premium magazine digital editions"
    ],
    "pros": [
      "经典永恒 - 70年不过时",
      "排版艺术的最高表达",
      "信息架构清晰可辩",
      "极强的文化符号价值"
    ],
    "prosEn": [
      "Timeless classic - 70 years strong",
      "Highest expression of typographic art",
      "Crystal clear information architecture",
      "Strong cultural symbol value"
    ],
    "cons": [
      "学习曲线陡峭 - 非科班难以掌握",
      "字体授权成本高",
      "对内容长度有较高要求"
    ],
    "consEn": [
      "Steep learning curve - hard for non-designers",
      "High font licensing costs",
      "Requires specific content lengths"
    ],
    "examples": [
      "Josef Müller-Brockmann 作品",
      "Emil Ruder 作品",
      "Neue Haas Grotesk 官网",
      "Type Directors Club"
    ],
    "examplesEn": [
      "Josef Müller-Brockmann works",
      "Emil Ruder works",
      "Neue Haas Grotesk site",
      "Type Directors Club"
    ],
    "pitfalls": [
      "不要只放一个超大标题；正文栏宽、基线和留白同样重要，红黄蓝并非强制色盘。"
    ],
    "pitfallsEn": [
      "A large headline alone is insufficient. Column measure, baselines and whitespace matter; primary colors are optional."
    ],
    "colors": [
      "#FFFFFF",
      "#000000",
      "#FF0000",
      "#FFD700",
      "#0000FF"
    ]
  },
  {
    "id": "bento",
    "name": "Bento 网格",
    "nameEn": "Bento Grid",
    "description": "把不同体量的信息放入有主次的模块网格，跨列卡片承担重点内容。本例桌面卡片采用 24px 圆角、白灰表面和少量蓝紫强调，手机按内容顺序重排。",
    "descriptionEn": "Arrange different amounts of information in a hierarchical modular grid; spanning cells carry the main story. This study uses 24px desktop card corners, white-gray surfaces and selective blue-violet accents, reordered for mobile.",
    "tags": [
      "极简",
      "热门",
      "现代"
    ],
    "tagsEn": [
      "Minimal",
      "Hot",
      "Modern"
    ],
    "features": [
      "构图 - 把不同体量的信息放入有主次的模块网格，跨列卡片承担重点内容。",
      "关键手法 - 本例桌面卡片采用 24px 圆角、白灰表面和少量蓝紫强调，手机按内容顺序重排。"
    ],
    "featuresEn": [
      "Composition - Arrange different amounts of information in a hierarchical modular grid; spanning cells carry the main story.",
      "Signature - This study uses 24px desktop card corners, white-gray surfaces and selective blue-violet accents, reordered for mobile."
    ],
    "useCases": [
      "产品功能特性展示",
      "个人主页与 About 页面",
      "仪表盘数据概览",
      "作品集项目展示",
      "App 下载页功能介绍"
    ],
    "useCasesEn": [
      "Product feature showcases",
      "Personal homepage and About pages",
      "Dashboard data overviews",
      "Portfolio project displays",
      "App download feature introductions"
    ],
    "pros": [
      "信息组织结构清晰",
      "移动端响应式优秀",
      "视觉层次丰富有节奏",
      "内容承载能力强"
    ],
    "prosEn": [
      "Clear information organization",
      "Excellent mobile responsiveness",
      "Rich visual hierarchy with rhythm",
      "Strong content capacity"
    ],
    "cons": [
      "内容需要精心规划",
      "过于流行容易模板化",
      "空间分配需要设计功底"
    ],
    "consEn": [
      "Content needs careful planning",
      "Over-popularity can be templated",
      "Space allocation requires design skills"
    ],
    "examples": [
      "Apple 产品页",
      "Linear Features",
      "Notion 官网",
      "Raycast",
      "Arc 浏览器"
    ],
    "examplesEn": [
      "Apple Product Pages",
      "Linear Features",
      "Notion.so",
      "Raycast",
      "Arc Browser"
    ],
    "pitfalls": [
      "不要把它理解成固定配色的独立风格；它可以与设计语言组合，避免每张卡片同等抢眼。"
    ],
    "pitfallsEn": [
      "Bento is a composable layout, not a fixed palette. Avoid giving every tile equal visual weight."
    ],
    "colors": [
      "#F0F0F0",
      "#FFFFFF",
      "#1E1E1E",
      "#000000",
      "#515154"
    ]
  },
  {
    "id": "aurora",
    "name": "极光渐变",
    "nameEn": "Aurora Gradients",
    "description": "用大范围柔和渐变组织背景，保留稳定的文字和产品展示区域。让冷暖色带平滑交汇，控制模糊半径与亮度，强调色延续到少量操作。",
    "descriptionEn": "Use broad soft gradients as atmosphere while keeping copy and product areas stable. Blend warm and cool bands smoothly; control blur and luminance and carry accent color into select actions.",
    "tags": [
      "现代",
      "流行",
      "热门"
    ],
    "tagsEn": [
      "Modern",
      "Trendy",
      "Hot"
    ],
    "features": [
      "构图 - 用大范围柔和渐变组织背景，保留稳定的文字和产品展示区域。",
      "关键手法 - 让冷暖色带平滑交汇，控制模糊半径与亮度，强调色延续到少量操作。"
    ],
    "featuresEn": [
      "Composition - Use broad soft gradients as atmosphere while keeping copy and product areas stable.",
      "Signature - Blend warm and cool bands smoothly; control blur and luminance and carry accent color into select actions."
    ],
    "useCases": [
      "SaaS 产品官网",
      "AI 产品发布页",
      "开发者工具营销页",
      "金融科技品牌",
      "科技大会活动页"
    ],
    "useCasesEn": [
      "SaaS product sites",
      "AI product launch pages",
      "Developer tool marketing",
      "Fintech brands",
      "Tech conference pages"
    ],
    "pros": [
      "专业感与情绪张力兼得",
      "极易与品牌色结合",
      "实现成熟 - 纯 CSS 可达",
      "转化率经过市场验证"
    ],
    "prosEn": [
      "Professional yet emotive",
      "Easy to adapt to brand colors",
      "Mature technique - pure CSS",
      "Market-proven conversion"
    ],
    "cons": [
      "同质化严重 - 满街都是",
      "渐变色彩管理有门槛",
      "过度使用会显得浮夸"
    ],
    "consEn": [
      "Heavily saturated - it's everywhere",
      "Gradient color control takes skill",
      "Overuse reads as flashy"
    ],
    "examples": [
      "Stripe.com",
      "Linear.app",
      "Raycast.com",
      "Resend.com",
      "Clerk.com"
    ],
    "examplesEn": [
      "Stripe.com",
      "Linear.app",
      "Raycast.com",
      "Resend.com",
      "Clerk.com"
    ],
    "pitfalls": [
      "不要把所有卡片都变成渐变；文字背景需要稳定对比。"
    ],
    "pitfallsEn": [
      "Do not turn every card into a gradient; keep a stable contrast behind text."
    ],
    "colors": [
      "#FAFAFC",
      "#FFFFFF",
      "#0A0A14",
      "#55556B",
      "#8B8BA3"
    ]
  },
  {
    "id": "bauhaus",
    "name": "包豪斯",
    "nameEn": "Bauhaus",
    "description": "让几何形状、字体和空间共同构成非对称结构。本例用米白、红黄蓝和几何构成传达实验感；色彩和形状之间有明确关系。",
    "descriptionEn": "Let geometry, typography and space form an asymmetric structure together. Cream, red-yellow-blue and geometric construction express experimentation in this study; color and form have clear relationships.",
    "tags": [
      "艺术",
      "复古",
      "经典"
    ],
    "tagsEn": [
      "Art",
      "Vintage",
      "Classic"
    ],
    "features": [
      "构图 - 让几何形状、字体和空间共同构成非对称结构。",
      "关键手法 - 本例用米白、红黄蓝和几何构成传达实验感；色彩和形状之间有明确关系。"
    ],
    "featuresEn": [
      "Composition - Let geometry, typography and space form an asymmetric structure together.",
      "Signature - Cream, red-yellow-blue and geometric construction express experimentation in this study; color and form have clear relationships."
    ],
    "useCases": [
      "当代艺术画廊官网",
      "设计学院与教育机构",
      "家具品牌旗舰店",
      "建筑设计事务所",
      "创意文化活动专题页"
    ],
    "useCasesEn": [
      "Contemporary art gallery sites",
      "Design schools and institutions",
      "Furniture brand flagships",
      "Architecture design firms",
      "Creative cultural event pages"
    ],
    "pros": [
      "极强的艺术表现力",
      "文化底蕴深厚 - 设计史经典",
      "色彩运用大胆而和谐",
      "元素可无限组合变化"
    ],
    "prosEn": [
      "Extremely strong artistic expression",
      "Deep cultural heritage - design history classic",
      "Bold yet harmonious color use",
      "Elements infinitely combinable"
    ],
    "cons": [
      "需要专业的配色功底",
      "过度使用容易显得复古",
      "商业适用场景相对有限"
    ],
    "consEn": [
      "Requires professional color expertise",
      "Overuse can appear dated",
      "Limited commercial applications"
    ],
    "examples": [
      "Bauhaus-Archiv Berlin",
      "Vitra Design Museum",
      "MoMA Design Store",
      "Alessi"
    ],
    "examplesEn": [
      "Bauhaus-Archiv Berlin",
      "Vitra Design Museum",
      "MoMA Design Store",
      "Alessi"
    ],
    "pitfalls": [
      "不要把粗黑描边或三个原色当成全部历史作品的统一规范。"
    ],
    "pitfallsEn": [
      "Thick black outlines and primary colors are not mandatory across all historical Bauhaus work."
    ],
    "colors": [
      "#F4F1EA",
      "#E2261C",
      "#F2BE0F",
      "#1F3BB3",
      "#131313"
    ]
  },
  {
    "id": "scandinavian",
    "name": "斯堪的纳维亚",
    "nameEn": "Scandinavian",
    "description": "以生活场景和自然材质为中心，清晰的商品信息搭配舒展留白。暖白、木色与鼠尾草绿，轻柔光照和织物细节；字体现代而温暖。",
    "descriptionEn": "Center everyday settings and natural materials, with clear product information and generous space. Warm white, wood and sage, soft lighting and textile detail, with modern warm typography.",
    "tags": [
      "极简",
      "温暖"
    ],
    "tagsEn": [
      "Minimal",
      "Warm"
    ],
    "features": [
      "构图 - 以生活场景和自然材质为中心，清晰的商品信息搭配舒展留白。",
      "关键手法 - 暖白、木色与鼠尾草绿，轻柔光照和织物细节；字体现代而温暖。"
    ],
    "featuresEn": [
      "Composition - Center everyday settings and natural materials, with clear product information and generous space.",
      "Signature - Warm white, wood and sage, soft lighting and textile detail, with modern warm typography."
    ],
    "useCases": [
      "家居家具品牌官网",
      "可持续生活方式品牌",
      "有机食品与咖啡品牌",
      "北欧旅游与体验",
      "亲子与家庭类应用"
    ],
    "useCasesEn": [
      "Home furniture brand sites",
      "Sustainable lifestyle brands",
      "Organic food and coffee brands",
      "Nordic travel and experiences",
      "Family and parenting apps"
    ],
    "pros": [
      "温暖亲切的情感连接",
      "可持续理念的天然载体",
      "大众接受度极高",
      "跨文化适应性好"
    ],
    "prosEn": [
      "Warm and friendly emotional connection",
      "Natural vehicle for sustainability",
      "Extremely high mass acceptance",
      "Good cross-cultural adaptability"
    ],
    "cons": [
      "过于流行导致同质化",
      "可能缺乏视觉冲击力",
      "不适合科技感需求强的场景"
    ],
    "consEn": [
      "Over-popularity leads to homogeneity",
      "May lack visual impact",
      "Not for high-tech contexts"
    ],
    "examples": [
      "IKEA 宜家",
      "HAY",
      "Muuto",
      "Arket",
      "COS"
    ],
    "examplesEn": [
      "IKEA",
      "HAY",
      "Muuto",
      "Arket",
      "COS"
    ],
    "pitfalls": [
      "不要只剩米色卡片；木纹、织物、物体比例和生活感比固定圆角重要。"
    ],
    "pitfallsEn": [
      "Go beyond beige cards; wood, textiles, proportions and lived-in context matter more than a fixed radius."
    ],
    "colors": [
      "#f6f3ed",
      "#ffffff",
      "#e8dcc4",
      "#d4c4b7",
      "#b3987d"
    ]
  },
  {
    "id": "neo-brutalism",
    "name": "新粗野主义",
    "nameEn": "Neo-Brutalism",
    "description": "用清晰的信息分区、粗边框和强烈层级组织内容。本例用黑色硬边阴影、鲜明色块和粗体标题，按下时阴影收缩。",
    "descriptionEn": "Organize content with clear regions, heavy borders and emphatic hierarchy. This study uses black hard-edged shadows, bold color blocks and heavy headings; shadows contract on press.",
    "tags": [
      "前卫",
      "流行",
      "热门"
    ],
    "tagsEn": [
      "Avant-garde",
      "Trendy",
      "Hot"
    ],
    "features": [
      "构图 - 用清晰的信息分区、粗边框和强烈层级组织内容。",
      "关键手法 - 本例用黑色硬边阴影、鲜明色块和粗体标题，按下时阴影收缩。"
    ],
    "featuresEn": [
      "Composition - Organize content with clear regions, heavy borders and emphatic hierarchy.",
      "Signature - This study uses black hard-edged shadows, bold color blocks and heavy headings; shadows contract on press."
    ],
    "useCases": [
      "开发者工具与 CLI 产品",
      "独立开发者个人项目",
      "创意工具与设计平台",
      "科技博客与文档站",
      "黑客马拉松项目"
    ],
    "useCasesEn": [
      "Developer tools and CLI products",
      "Indie developer projects",
      "Creative tools and design platforms",
      "Tech blogs and documentation sites",
      "Hackathon projects"
    ],
    "pros": [
      "个性鲜明 - 辨识度极高",
      "开发友好 - CSS 简单直接",
      "当前非常流行 - 潮流前沿",
      "深色模式适配良好"
    ],
    "prosEn": [
      "Distinctive personality - highly recognizable",
      "Dev-friendly - simple and direct CSS",
      "Currently very trendy - cutting edge",
      "Good dark mode adaptation"
    ],
    "cons": [
      "可能显得粗糙未完成",
      "视觉冲击过强 - 不耐看",
      "企业客户接受度有限"
    ],
    "consEn": [
      "May appear rough and unfinished",
      "Visual impact too strong - not eye-friendly",
      "Limited enterprise client acceptance"
    ],
    "examples": [
      "Figma Community",
      "Gumroad",
      "Poolside.fm",
      "Pitch.com",
      "Notion 模板"
    ],
    "examplesEn": [
      "Figma Community",
      "Gumroad",
      "Poolside.fm",
      "Pitch.com",
      "Notion templates"
    ],
    "pitfalls": [
      "避免给硬阴影加模糊，也不要让强装饰压过文字与点击目标。"
    ],
    "pitfallsEn": [
      "Avoid blurring hard shadows or letting ornament obscure text and targets."
    ],
    "colors": [
      "#FFF6EA",
      "#000000",
      "#FFFFFF",
      "#FF6B35",
      "#004E89"
    ]
  },
  {
    "id": "duotone",
    "name": "双色调",
    "nameEn": "Duotone",
    "description": "让两组色调贯穿文字、分区与图像，控制明暗的对应关系。本例的暗部是深藏青、亮部是橙色；图像要呈现相同的色调映射。",
    "descriptionEn": "Carry two tonal families through type, regions and images, controlling the mapping between shadows and highlights. This study maps shadows to deep navy and highlights to orange, including image treatment.",
    "tags": [
      "艺术",
      "复古"
    ],
    "tagsEn": [
      "Art",
      "Vintage"
    ],
    "features": [
      "构图 - 让两组色调贯穿文字、分区与图像，控制明暗的对应关系。",
      "关键手法 - 本例的暗部是深藏青、亮部是橙色；图像要呈现相同的色调映射。"
    ],
    "featuresEn": [
      "Composition - Carry two tonal families through type, regions and images, controlling the mapping between shadows and highlights.",
      "Signature - This study maps shadows to deep navy and highlights to orange, including image treatment."
    ],
    "useCases": [
      "音乐流媒体平台",
      "运动与健身品牌",
      "创意机构 portfolio",
      "活动海报与营销物料",
      "社交媒体视觉内容"
    ],
    "useCasesEn": [
      "Music streaming platforms",
      "Sports and fitness brands",
      "Creative agency portfolios",
      "Event posters and marketing materials",
      "Social media visual content"
    ],
    "pros": [
      "极强的视觉冲击力",
      "品牌识别度极高",
      "实现技术门槛低",
      "适合大规模视觉系统"
    ],
    "prosEn": [
      "Extremely strong visual impact",
      "Very high brand recognition",
      "Low technical implementation barrier",
      "Suitable for large-scale visual systems"
    ],
    "cons": [
      "色彩组合选择受限",
      "长时间观看易疲劳",
      "原图质量影响效果"
    ],
    "consEn": [
      "Limited color combination choices",
      "Causes fatigue with prolonged viewing",
      "Original image quality affects results"
    ],
    "examples": [
      "Spotify Wrapped",
      "Adidas Originals",
      "NPR",
      "Twitch 品牌",
      "Nike ACG"
    ],
    "examplesEn": [
      "Spotify Wrapped",
      "Adidas Originals",
      "NPR",
      "Twitch branding",
      "Nike ACG"
    ],
    "pitfalls": [
      "不要把两块背景色当成完整示范，也不要要求整个页面只能有两个离散色值。"
    ],
    "pitfallsEn": [
      "Two background blocks alone do not demonstrate the treatment; tonal ranges need not be only two discrete values."
    ],
    "colors": [
      "#1A1A2E",
      "#10101F",
      "#2A2A4A",
      "#FF6B35",
      "#FF8F66"
    ]
  },
  {
    "id": "japanese",
    "name": "日式极简",
    "nameEn": "Japanese Minimalism",
    "description": "用留白、自然节奏和细致的内容比例组织页面。本例采用和纸色、细线、衬线标题与小面积朱红；文字长度决定排版节奏。",
    "descriptionEn": "Use negative space, natural rhythm and careful content proportions. This study pairs paper tones, fine rules, serif headings and small vermilion accents; copy length sets the rhythm.",
    "tags": [
      "极简",
      "经典",
      "温暖"
    ],
    "tagsEn": [
      "Minimal",
      "Classic",
      "Warm"
    ],
    "features": [
      "构图 - 用留白、自然节奏和细致的内容比例组织页面。",
      "关键手法 - 本例采用和纸色、细线、衬线标题与小面积朱红；文字长度决定排版节奏。"
    ],
    "featuresEn": [
      "Composition - Use negative space, natural rhythm and careful content proportions.",
      "Signature - This study pairs paper tones, fine rules, serif headings and small vermilion accents; copy length sets the rhythm."
    ],
    "useCases": [
      "日式料理餐厅官网",
      "茶道/花道文化机构",
      "和风生活方式品牌",
      "日本传统工艺品商店",
      "冥想与身心灵应用"
    ],
    "useCasesEn": [
      "Japanese restaurant websites",
      "Tea/flower ceremony cultural institutions",
      "Japanese lifestyle brands",
      "Traditional Japanese craft stores",
      "Meditation and wellness apps"
    ],
    "pros": [
      "独特的东方禅意美学",
      "极致的高级感与宁静",
      "情感共鸣强烈",
      "与可持续理念天然契合"
    ],
    "prosEn": [
      "Unique Eastern Zen aesthetics",
      "Ultimate premium feel and tranquility",
      "Strong emotional resonance",
      "Natural fit with sustainability"
    ],
    "cons": [
      "文化理解有门槛",
      "过度留白可能显得空洞",
      "需要高质量的内容支撑"
    ],
    "consEn": [
      "Cultural understanding has barriers",
      "Excessive whitespace may seem empty",
      "Requires high-quality content support"
    ],
    "examples": [
      "Muji 无印良品",
      "Kinfolk 杂志",
      "中川政七商店",
      "白井屋"
    ],
    "examplesEn": [
      "Muji",
      "Kinfolk Magazine",
      "Nakagawa Masashichi Shoten",
      "Shiroiya"
    ],
    "pitfalls": [
      "避免把文化风格简化为印章、竖排与空白的堆砌。"
    ],
    "pitfallsEn": [
      "Avoid reducing the aesthetic to an accumulation of seals, vertical text and empty space."
    ],
    "colors": [
      "#f6f2e6",
      "#efe9d8",
      "#2f3b38",
      "#6f6a5b",
      "#8b7355"
    ]
  },
  {
    "id": "organic",
    "name": "有机形态",
    "nameEn": "Organic Design",
    "description": "以不对称的曲线和自然图像形成流动构图，文字保持清晰。形状之间有连续的曲率关系，色彩温和，图形帮助引导阅读。",
    "descriptionEn": "Create a flowing composition with asymmetric curves and natural imagery while keeping text clear. Shapes share a coherent curvature; gentle colors and forms guide reading.",
    "tags": [
      "现代",
      "活泼"
    ],
    "tagsEn": [
      "Modern",
      "Playful"
    ],
    "features": [
      "构图 - 以不对称的曲线和自然图像形成流动构图，文字保持清晰。",
      "关键手法 - 形状之间有连续的曲率关系，色彩温和，图形帮助引导阅读。"
    ],
    "featuresEn": [
      "Composition - Create a flowing composition with asymmetric curves and natural imagery while keeping text clear.",
      "Signature - Shapes share a coherent curvature; gentle colors and forms guide reading."
    ],
    "useCases": [
      "科技公司品牌重塑",
      "创意机构官网",
      "健康与 wellness 产品",
      "教育与学习平台",
      "金融科技品牌人性化"
    ],
    "useCasesEn": [
      "Tech company rebranding",
      "Creative agency sites",
      "Health and wellness products",
      "Education and learning platforms",
      "Fintech brand humanization"
    ],
    "pros": [
      "友好亲和的品牌感知",
      "打破网格的视觉新鲜感",
      "适配性强 - 可融合多种风格",
      "动画实现相对简单"
    ],
    "prosEn": [
      "Friendly and approachable brand perception",
      "Fresh visuals that break the grid",
      "Highly adaptable - blends with many styles",
      "Relatively simple animation implementation"
    ],
    "cons": [
      "响应式设计有挑战",
      "过度使用容易杂乱",
      "SVG 复杂度影响性能"
    ],
    "consEn": [
      "Responsive design challenges",
      "Overuse can become messy",
      "SVG complexity affects performance"
    ],
    "examples": [
      "Stripe.com",
      "Dropbox",
      "Spotify",
      "Mailchimp",
      "Slack"
    ],
    "examplesEn": [
      "Stripe.com",
      "Dropbox",
      "Spotify",
      "Mailchimp",
      "Slack"
    ],
    "pitfalls": [
      "不要把所有文字容器都挤进水滴；自然感不等于失去网格。"
    ],
    "pitfallsEn": [
      "Do not squeeze every text container into a blob; organic form still needs layout discipline."
    ],
    "colors": [
      "#FFF9F0",
      "#A8E6CF",
      "#DCEDC1",
      "#FFD3B6",
      "#FFAAA5"
    ]
  },
  {
    "id": "liquid-glass",
    "name": "液态玻璃",
    "nameEn": "Liquid Glass",
    "description": "将浮动导航与控件放在清晰的内容层之上，避免整页内容都变成玻璃。关注透镜感、边缘高光、动态阴影和背景变化后的可读性；浅色与深色环境均可使用。",
    "descriptionEn": "Place floating navigation and controls above a clear content layer; avoid turning all content into glass. Focus on lensing, edge highlights, adaptive shadows and legibility over changing content; both light and dark contexts are valid.",
    "tags": [
      "现代",
      "热门",
      "前卫"
    ],
    "tagsEn": [
      "Modern",
      "Hot",
      "Avant-garde"
    ],
    "features": [
      "构图 - 将浮动导航与控件放在清晰的内容层之上，避免整页内容都变成玻璃。",
      "关键手法 - 关注透镜感、边缘高光、动态阴影和背景变化后的可读性；浅色与深色环境均可使用。"
    ],
    "featuresEn": [
      "Composition - Place floating navigation and controls above a clear content layer; avoid turning all content into glass.",
      "Signature - Focus on lensing, edge highlights, adaptive shadows and legibility over changing content; both light and dark contexts are valid."
    ],
    "useCases": [
      "操作系统与系统级应用",
      "高端科技产品发布页",
      "音乐/视频播放器界面",
      "智能家居控制面板",
      "AR/VR 空间界面"
    ],
    "useCasesEn": [
      "Operating systems and system-level apps",
      "Premium tech product launch pages",
      "Music/video player interfaces",
      "Smart home control panels",
      "AR/VR spatial interfaces"
    ],
    "pros": [
      "紧贴 Apple 最新设计趋势",
      "通透高级的未来感",
      "层级清晰而不依赖投影",
      "深色场景下极具沉浸感"
    ],
    "prosEn": [
      "Aligned with Apple's latest design direction",
      "Translucent, premium, futuristic",
      "Clear hierarchy without heavy shadows",
      "Deeply immersive in dark contexts"
    ],
    "cons": [
      "浏览器兼容性要求高 - backdrop-filter",
      "低对比场景有可读性风险",
      "多层模糊有性能开销"
    ],
    "consEn": [
      "High browser requirements - backdrop-filter",
      "Readability risk in low contrast",
      "Performance cost of layered blur"
    ],
    "examples": [
      "iOS 26",
      "macOS Tahoe",
      "visionOS",
      "Apple.com"
    ],
    "examplesEn": [
      "iOS 26",
      "macOS Tahoe",
      "visionOS",
      "Apple.com"
    ],
    "pitfalls": [
      "不要等同于增加 blur，也不要把深色光晕和禁用阴影当作官方规则。"
    ],
    "pitfallsEn": [
      "Do not equate it with more blur or treat dark glowing orbs and shadow removal as official requirements."
    ],
    "colors": [
      "#f7f8fa",
      "#19202b",
      "#647084",
      "#dce1e8",
      "#126be4"
    ]
  },
  {
    "id": "editorial",
    "name": "报刊编辑风",
    "nameEn": "Editorial",
    "description": "报头、文章层级、正文栏宽、图片说明和细栏线共同建立阅读顺序。本例用衬线标题、紧凑正文、首字下沉和一幅主图；重点是长文阅读的节奏。",
    "descriptionEn": "Masthead, article hierarchy, column measure, captions and fine rules establish reading order. Serif headlines, compact body copy, a drop cap and a lead image set the reading rhythm in this study.",
    "tags": [
      "经典",
      "个性",
      "艺术"
    ],
    "tagsEn": [
      "Classic",
      "Distinctive",
      "Art"
    ],
    "features": [
      "构图 - 报头、文章层级、正文栏宽、图片说明和细栏线共同建立阅读顺序。",
      "关键手法 - 本例用衬线标题、紧凑正文、首字下沉和一幅主图；重点是长文阅读的节奏。"
    ],
    "featuresEn": [
      "Composition - Masthead, article hierarchy, column measure, captions and fine rules establish reading order.",
      "Signature - Serif headlines, compact body copy, a drop cap and a lead image set the reading rhythm in this study."
    ],
    "useCases": [
      "数字杂志与 Newsletter",
      "深度报道专题页",
      "内容型个人博客",
      "出版社与书评站点",
      "品牌内容中心"
    ],
    "useCasesEn": [
      "Digital magazines and newsletters",
      "Long-form feature stories",
      "Content-first personal blogs",
      "Publishers and book review sites",
      "Brand content hubs"
    ],
    "pros": [
      "阅读体验极佳",
      "永不过时的优雅",
      "内容权威感强",
      "对图片素材依赖低"
    ],
    "prosEn": [
      "Excellent reading experience",
      "Timeless elegance",
      "Strong editorial authority",
      "Low dependency on imagery"
    ],
    "cons": [
      "对文字质量要求极高",
      "视觉冲击力偏弱",
      "多栏布局响应式改造繁琐"
    ],
    "consEn": [
      "Demands high-quality writing",
      "Modest visual impact",
      "Column layouts are fussy responsively"
    ],
    "examples": [
      "NYTimes.com",
      "The New Yorker",
      "Monocle",
      "The Economist"
    ],
    "examplesEn": [
      "NYTimes.com",
      "The New Yorker",
      "Monocle",
      "The Economist"
    ],
    "pitfalls": [
      "避免所有文案都变成超大标题，保留完整段落、出处和图片说明。"
    ],
    "pitfallsEn": [
      "Avoid making every sentence a display headline; retain paragraphs, attribution and captions."
    ],
    "colors": [
      "#FAF7F0",
      "#141414",
      "#3E3A33",
      "#C8102E",
      "#8A857C"
    ]
  },
  {
    "id": "brutalism",
    "name": "粗野主义",
    "nameEn": "Brutalism",
    "description": "用直接的文档结构、强文字层级与显露的链接建立原始网页感。本例使用浏览器式衬线体、直角、细线与链接蓝，保留内容密度。",
    "descriptionEn": "Use direct document structure, emphatic type and visible links for a raw web character. This study uses browser-like serif type, square corners, fine rules and link blue with dense content.",
    "tags": [
      "前卫",
      "个性"
    ],
    "tagsEn": [
      "Avant-garde",
      "Distinctive"
    ],
    "features": [
      "构图 - 用直接的文档结构、强文字层级与显露的链接建立原始网页感。",
      "关键手法 - 本例使用浏览器式衬线体、直角、细线与链接蓝，保留内容密度。"
    ],
    "featuresEn": [
      "Composition - Use direct document structure, emphatic type and visible links for a raw web character.",
      "Signature - This study uses browser-like serif type, square corners, fine rules and link blue with dense content."
    ],
    "useCases": [
      "先锋艺术家个人网站",
      "地下音乐厂牌",
      "实验性数字艺术项目",
      "反主流文化品牌",
      "学术研究型网站"
    ],
    "useCasesEn": [
      "Avant-garde artist personal sites",
      "Underground music labels",
      "Experimental digital art projects",
      "Counter-culture brands",
      "Academic research websites"
    ],
    "pros": [
      "极致的性能 - 几乎零依赖",
      "强烈的视觉冲击与记忆点",
      "反叛精神的完美载体",
      "开发成本极低"
    ],
    "prosEn": [
      "Ultimate performance - near zero dependencies",
      "Strong visual impact and memorability",
      "Perfect vehicle for rebellious spirit",
      "Extremely low development cost"
    ],
    "cons": [
      "用户体验可能极差",
      "商业客户难以接受",
      "可访问性需要特别注意",
      "容易被误认为「没做完」"
    ],
    "consEn": [
      "User experience can be terrible",
      "Hard for commercial clients to accept",
      "Accessibility needs special attention",
      "Often mistaken for 'unfinished'"
    ],
    "examples": [
      "brutalistwebsites.com",
      "Craigslist",
      "Bloomberg.com (部分)",
      "hacker news"
    ],
    "examplesEn": [
      "brutalistwebsites.com",
      "Craigslist",
      "Bloomberg.com (partially)",
      "Hacker News"
    ],
    "pitfalls": [
      "刻意粗粝也需要清楚的导航和可读性，不要把损坏布局当成风格。"
    ],
    "pitfallsEn": [
      "Deliberate roughness still needs navigation and readability; broken layout is not a design principle."
    ],
    "colors": [
      "#FFFFFF",
      "#000000",
      "#0000EE",
      "#551A8B",
      "#FFFF00"
    ]
  },
  {
    "id": "terminal",
    "name": "终端黑客风",
    "nameEn": "Terminal",
    "description": "按命令、输出、日志与状态组织内容，保留终端的阅读顺序。等宽字、有限色盘、光标与清楚的成功/失败状态。",
    "descriptionEn": "Organize content as commands, output, logs and status in a terminal reading sequence. Monospace type, a limited palette, cursor and explicit success/error states.",
    "tags": [
      "复古",
      "个性"
    ],
    "tagsEn": [
      "Vintage",
      "Distinctive"
    ],
    "features": [
      "构图 - 按命令、输出、日志与状态组织内容，保留终端的阅读顺序。",
      "关键手法 - 等宽字、有限色盘、光标与清楚的成功/失败状态。"
    ],
    "featuresEn": [
      "Composition - Organize content as commands, output, logs and status in a terminal reading sequence.",
      "Signature - Monospace type, a limited palette, cursor and explicit success/error states."
    ],
    "useCases": [
      "CLI 工具与开发者产品",
      "程序员个人主页",
      "技术博客",
      "网络安全公司",
      "编程教育平台"
    ],
    "useCasesEn": [
      "CLI tools and dev products",
      "Developer portfolios",
      "Tech blogs",
      "Cybersecurity companies",
      "Coding education platforms"
    ],
    "pros": [
      "开发者受众天然好感",
      "实现成本低 - 几乎零图片",
      "性能极佳",
      "氛围一致性极强"
    ],
    "prosEn": [
      "Instant developer credibility",
      "Cheap to build - nearly zero images",
      "Excellent performance",
      "Powerful atmospheric coherence"
    ],
    "cons": [
      "大众用户有阅读门槛",
      "长文阅读易疲劳",
      "绿色单色情绪单一"
    ],
    "consEn": [
      "Steep readability for general users",
      "Fatiguing for long reads",
      "Monochrome green limits emotional range"
    ],
    "examples": [
      "Warp.dev",
      "Charm.sh",
      "asciinema.org",
      "cool-retro-term"
    ],
    "examplesEn": [
      "Warp.dev",
      "Charm.sh",
      "asciinema.org",
      "cool-retro-term"
    ],
    "pitfalls": [
      "避免满屏无意义代码和持续闪烁；命令示例要可读且说明用途。"
    ],
    "pitfallsEn": [
      "Avoid meaningless code and persistent blinking; commands should be readable and purposeful."
    ],
    "colors": [
      "#060907",
      "#0A0F0B",
      "#33FF66",
      "#E8FFE8",
      "#1E9E4A"
    ]
  },
  {
    "id": "memphis",
    "name": "孟菲斯",
    "nameEn": "Memphis",
    "description": "用有节奏的几何图形、图案与色块构成活泼版面。本例采用波浪、圆点、斜线和撞色，装饰围绕主标题与商品排列。",
    "descriptionEn": "Build a playful layout through rhythmic geometry, patterns and color blocks. Squiggles, dots, diagonals and clashing colors are arranged around the headline and objects in this study.",
    "tags": [
      "艺术",
      "活泼",
      "复古"
    ],
    "tagsEn": [
      "Art",
      "Playful",
      "Vintage"
    ],
    "features": [
      "构图 - 用有节奏的几何图形、图案与色块构成活泼版面。",
      "关键手法 - 本例采用波浪、圆点、斜线和撞色，装饰围绕主标题与商品排列。"
    ],
    "featuresEn": [
      "Composition - Build a playful layout through rhythmic geometry, patterns and color blocks.",
      "Signature - Squiggles, dots, diagonals and clashing colors are arranged around the headline and objects in this study."
    ],
    "useCases": [
      "儿童品牌与教育产品",
      "Y2K 复古时尚品牌",
      "音乐节与创意活动",
      "潮流玩具与收藏品",
      "社交媒体营销素材"
    ],
    "useCasesEn": [
      "Kids brands and educational products",
      "Y2K retro fashion brands",
      "Music festivals and creative events",
      "Designer toys and collectibles",
      "Social media marketing assets"
    ],
    "pros": [
      "极具辨识度和记忆点",
      "充满活力与年轻感",
      "话题性与社交传播力强",
      "与当下 Y2K 复古潮流契合"
    ],
    "prosEn": [
      "Extremely distinctive and memorable",
      "Full of vitality and youthfulness",
      "Strong topic appeal and social shareability",
      "Aligns with current Y2K retro trends"
    ],
    "cons": [
      "视觉冲击过强 - 易疲劳",
      "严肃场景完全不适用",
      "风格极端 - 品牌风险大"
    ],
    "consEn": [
      "Visual impact too strong - causes fatigue",
      "Completely unsuitable for serious contexts",
      "Extreme style - high brand risk"
    ],
    "examples": [
      "Ettore Sottsass 作品",
      "Memphis Milano",
      "Camper 鞋履",
      "Moschino 部分系列"
    ],
    "examplesEn": [
      "Ettore Sottsass works",
      "Memphis Milano",
      "Camper shoes",
      "Moschino collections"
    ],
    "pitfalls": [
      "不要让所有图案等量出现；保留安静区域支撑阅读。"
    ],
    "pitfallsEn": [
      "Avoid distributing every pattern equally; retain quiet areas for reading."
    ],
    "colors": [
      "#FFF8EC",
      "#FF69B4",
      "#00CED1",
      "#FFD700",
      "#FF6347"
    ]
  },
  {
    "id": "art-deco",
    "name": "装饰艺术",
    "nameEn": "Art Deco",
    "description": "用对称轴、阶梯形构图和装饰边框建立仪式感。本例用深绿黑、金色细线、放射形与宽字距标题。",
    "descriptionEn": "Create ceremony with symmetry, stepped composition and ornamental framing. This study uses green-black, fine gold lines, radiating forms and widely spaced headlines.",
    "tags": [
      "经典",
      "复古"
    ],
    "tagsEn": [
      "Classic",
      "Vintage"
    ],
    "features": [
      "构图 - 用对称轴、阶梯形构图和装饰边框建立仪式感。",
      "关键手法 - 本例用深绿黑、金色细线、放射形与宽字距标题。"
    ],
    "featuresEn": [
      "Composition - Create ceremony with symmetry, stepped composition and ornamental framing.",
      "Signature - This study uses green-black, fine gold lines, radiating forms and widely spaced headlines."
    ],
    "useCases": [
      "奢侈品珠宝品牌",
      "高端酒店与度假村",
      "精品婚礼策划",
      "复古主题鸡尾酒吧",
      "古典音乐与剧院"
    ],
    "useCasesEn": [
      "Luxury jewelry brands",
      "High-end hotels and resorts",
      "Boutique wedding planning",
      "Vintage cocktail bars",
      "Classical music and theaters"
    ],
    "pros": [
      "极致的高级感与奢华感",
      "经典永恒 - 100年不过时",
      "强烈的时代感与故事性",
      "适合高端定位品牌"
    ],
    "prosEn": [
      "Ultimate premium and luxury feel",
      "Timeless classic - 100 years strong",
      "Strong era feel and storytelling",
      "Suitable for high-end brand positioning"
    ],
    "cons": [
      "容易显得「老派」",
      "实现细节要求高",
      "年轻用户可能不感冒",
      "素材制作成本高"
    ],
    "consEn": [
      "Can appear 'old-fashioned'",
      "High detail implementation requirements",
      "May not appeal to young users",
      "High material production cost"
    ],
    "examples": [
      "了不起的盖茨比",
      "克莱斯勒大厦",
      "The Savoy London",
      "Tiffany & Co."
    ],
    "examplesEn": [
      "The Great Gatsby",
      "Chrysler Building",
      "The Savoy London",
      "Tiffany & Co."
    ],
    "pitfalls": [
      "不要只靠黑金配色；几何比例和装饰节奏才构成辨识度。"
    ],
    "pitfallsEn": [
      "Black and gold alone are insufficient; geometric proportion and ornamental rhythm carry identity."
    ],
    "colors": [
      "#0B0E0C",
      "#101713",
      "#D4AF37",
      "#8C7325",
      "rgba(212,175,55,.45)"
    ]
  },
  {
    "id": "glassmorphism",
    "name": "玻璃拟态",
    "nameEn": "Glassmorphism",
    "description": "把少量半透明面板放在具有颜色与轮廓的背景之前。背景模糊、透明填充、细亮边与适量阴影共同表达磨砂玻璃；背景必须能被感知。",
    "descriptionEn": "Place a small number of translucent panels over a background with visible color and form. Backdrop blur, transparent fills, fine light borders and moderate shadows express frosted glass; the background must remain perceptible.",
    "tags": [
      "现代",
      "流行",
      "热门"
    ],
    "tagsEn": [
      "Modern",
      "Trendy",
      "Hot"
    ],
    "features": [
      "构图 - 把少量半透明面板放在具有颜色与轮廓的背景之前。",
      "关键手法 - 背景模糊、透明填充、细亮边与适量阴影共同表达磨砂玻璃；背景必须能被感知。"
    ],
    "featuresEn": [
      "Composition - Place a small number of translucent panels over a background with visible color and form.",
      "Signature - Backdrop blur, transparent fills, fine light borders and moderate shadows express frosted glass; the background must remain perceptible."
    ],
    "useCases": [
      "SaaS 控制台与仪表盘",
      "金融科技应用界面",
      "操作系统 UI 设计",
      "科技感官网首页",
      "音乐播放器界面"
    ],
    "useCasesEn": [
      "SaaS dashboards and consoles",
      "Fintech application interfaces",
      "Operating system UI design",
      "Tech-forward homepage designs",
      "Music player interfaces"
    ],
    "pros": [
      "极强的现代感与科技感",
      "视觉层次丰富立体",
      "深色模式表现优异",
      "用户认知度高"
    ],
    "prosEn": [
      "Strong modern and tech feel",
      "Rich and dimensional visual layers",
      "Excellent dark mode performance",
      "High user recognition"
    ],
    "cons": [
      "backdrop-filter 性能开销",
      "对比度与可读性需要调试",
      "低端设备渲染卡顿",
      "Safari 兼容性问题"
    ],
    "consEn": [
      "backdrop-filter performance cost",
      "Contrast and readability need tuning",
      "Laggy on low-end devices",
      "Safari compatibility issues"
    ],
    "examples": [
      "macOS Big Sur",
      "iOS 控制中心",
      "Windows 11",
      "Linear.app",
      "Figma"
    ],
    "examplesEn": [
      "macOS Big Sur",
      "iOS Control Center",
      "Windows 11",
      "Linear.app",
      "Figma"
    ],
    "pitfalls": [
      "避免不透明卡片或多层无差别模糊；先保证文字对比。"
    ],
    "pitfallsEn": [
      "Avoid opaque cards and indiscriminate blur stacks; prioritize text contrast."
    ],
    "colors": [
      "#0d0f26",
      "#171a3d",
      "#f4f5ff",
      "rgba(230,233,255,.68)",
      "rgba(230,233,255,.42)"
    ]
  },
  {
    "id": "dark-academia",
    "name": "暗黑学院",
    "nameEn": "Dark Academia",
    "description": "以书籍、知识与阅读场景组织内容，采用适合长文的文字层级。深木色、墨绿、酒红和纸色，搭配克制的衬线体与材质细节。",
    "descriptionEn": "Organize content around books, scholarship and reading, with a long-form typographic hierarchy. Dark wood, forest green, wine and parchment with restrained serif type and material detail.",
    "tags": [
      "经典",
      "复古"
    ],
    "tagsEn": [
      "Classic",
      "Vintage"
    ],
    "features": [
      "构图 - 以书籍、知识与阅读场景组织内容，采用适合长文的文字层级。",
      "关键手法 - 深木色、墨绿、酒红和纸色，搭配克制的衬线体与材质细节。"
    ],
    "featuresEn": [
      "Composition - Organize content around books, scholarship and reading, with a long-form typographic hierarchy.",
      "Signature - Dark wood, forest green, wine and parchment with restrained serif type and material detail."
    ],
    "useCases": [
      "独立出版社与书店",
      "古典文学数字版",
      "学术研究机构",
      "复古文具品牌",
      "古着店与收藏馆"
    ],
    "useCasesEn": [
      "Independent publishers and bookstores",
      "Classical literature digital editions",
      "Academic research institutions",
      "Vintage stationery brands",
      "Vintage shops and collection galleries"
    ],
    "pros": [
      "独特的神秘氛围感",
      "强烈的文化底蕴",
      "适合深度阅读场景",
      "小众但忠诚的受众"
    ],
    "prosEn": [
      "Unique mysterious atmosphere",
      "Strong cultural depth",
      "Suitable for deep reading contexts",
      "Niche but loyal audience"
    ],
    "cons": [
      "受众相对小众",
      "季节性偏秋冬",
      "可能显得沉重压抑",
      "图片素材要求特殊"
    ],
    "consEn": [
      "Relatively niche audience",
      "Seasonal bias toward fall/winter",
      "Can feel heavy and oppressive",
      "Special image material requirements"
    ],
    "examples": [
      "Oxford University Press",
      "Penguin Classics",
      "The School of Life",
      "Hogwarts Legacy"
    ],
    "examplesEn": [
      "Oxford University Press",
      "Penguin Classics",
      "The School of Life",
      "Hogwarts Legacy"
    ],
    "pitfalls": [
      "不要把背景压黑到看不清正文，也不要只堆叠复古装饰。"
    ],
    "pitfallsEn": [
      "Do not sacrifice body contrast to darkness or merely pile on vintage ornament."
    ],
    "colors": [
      "#1A130C",
      "#241A11",
      "#26382F",
      "#1C2A23",
      "#EADCBE"
    ]
  },
  {
    "id": "pixel",
    "name": "像素风",
    "nameEn": "Pixel Art",
    "description": "将界面建立在统一像素单位上，按游戏 HUD 的信息层级布局。有限色盘、阶梯边缘、硬阴影和 steps 跳帧动效；标题与图形共享像素节奏。",
    "descriptionEn": "Build on a consistent pixel unit and arrange information like a game HUD. Limited palette, stepped edges, hard shadows and stepped motion; type and sprites share a pixel rhythm.",
    "tags": [
      "复古",
      "活泼",
      "个性"
    ],
    "tagsEn": [
      "Vintage",
      "Playful",
      "Distinctive"
    ],
    "features": [
      "构图 - 将界面建立在统一像素单位上，按游戏 HUD 的信息层级布局。",
      "关键手法 - 有限色盘、阶梯边缘、硬阴影和 steps 跳帧动效；标题与图形共享像素节奏。"
    ],
    "featuresEn": [
      "Composition - Build on a consistent pixel unit and arrange information like a game HUD.",
      "Signature - Limited palette, stepped edges, hard shadows and stepped motion; type and sprites share a pixel rhythm."
    ],
    "useCases": [
      "独立游戏工作室",
      "游戏发布会活动页",
      "复古主题电商",
      "数字藏品平台",
      "程序员趣味个人站"
    ],
    "useCasesEn": [
      "Indie game studios",
      "Game launch event pages",
      "Retro-themed e-commerce",
      "Digital collectible platforms",
      "Playful developer sites"
    ],
    "pros": [
      "辨识度拉满",
      "游戏玩家情感共鸣强",
      "图形资产体积小",
      "容错率高 - 粗糙即风格"
    ],
    "prosEn": [
      "Maximum recognizability",
      "Strong gamer resonance",
      "Tiny graphic assets",
      "Forgiving - roughness is the style"
    ],
    "cons": [
      "精致像素画其实很费工",
      "正文可读性受限",
      "严肃场景完全不适用"
    ],
    "consEn": [
      "Good pixel art is laborious",
      "Limited body-text readability",
      "Unusable in serious contexts"
    ],
    "examples": [
      "Celeste",
      "Stardew Valley",
      "itch.io",
      "Poolsuite.net"
    ],
    "examplesEn": [
      "Celeste",
      "Stardew Valley",
      "itch.io",
      "Poolsuite.net"
    ],
    "pitfalls": [
      "避免柔焦、任意小数缩放和圆角；普通等宽字体不自动成为像素字体。"
    ],
    "pitfallsEn": [
      "Avoid soft focus, arbitrary fractional scaling and rounded corners; monospace is not automatically pixel type."
    ],
    "colors": [
      "#1A1C2C",
      "#29366F",
      "#333C57",
      "#94B0C2",
      "#F4F4F4"
    ]
  },
  {
    "id": "cyberpunk",
    "name": "赛博朋克",
    "nameEn": "Cyberpunk",
    "description": "用强烈的明暗对比、技术标识和非对称信息区营造未来城市感。深色基底上有限使用青、品红与警示色，切角和短暂故障动效服务层级。",
    "descriptionEn": "Use strong light-dark contrast, technical labeling and asymmetric information regions for a futuristic urban character. Use cyan, magenta and warning colors selectively over dark surfaces; clipped corners and brief glitches support hierarchy.",
    "tags": [
      "前卫",
      "个性"
    ],
    "tagsEn": [
      "Avant-garde",
      "Distinctive"
    ],
    "features": [
      "构图 - 用强烈的明暗对比、技术标识和非对称信息区营造未来城市感。",
      "关键手法 - 深色基底上有限使用青、品红与警示色，切角和短暂故障动效服务层级。"
    ],
    "featuresEn": [
      "Composition - Use strong light-dark contrast, technical labeling and asymmetric information regions for a futuristic urban character.",
      "Signature - Use cyan, magenta and warning colors selectively over dark surfaces; clipped corners and brief glitches support hierarchy."
    ],
    "useCases": [
      "游戏官网与电竞品牌",
      "科幻电影宣传站",
      "电子音乐与 DJ",
      "夜店与娱乐场所",
      "VR/AR 技术展示"
    ],
    "useCasesEn": [
      "Game websites and esports brands",
      "Sci-fi movie promotional sites",
      "Electronic music and DJs",
      "Nightclubs and entertainment venues",
      "VR/AR technology showcases"
    ],
    "pros": [
      "沉浸感极强 - 氛围感满分",
      "年轻用户共鸣度高",
      "话题性与传播力强",
      "视觉冲击力一流"
    ],
    "prosEn": [
      "Extremely immersive - perfect atmosphere",
      "High resonance with young users",
      "Strong topic appeal and shareability",
      "First-class visual impact"
    ],
    "cons": [
      "可读性挑战 - 深色发光文字",
      "不适合商务严肃场景",
      "容易过度设计",
      "性能消耗较高"
    ],
    "consEn": [
      "Readability challenges - glowing dark text",
      "Not for serious business contexts",
      "Easy to over-design",
      "Higher performance consumption"
    ],
    "examples": [
      "Cyberpunk 2077",
      "银翼杀手 2049",
      "赛博朋克边缘行者",
      "AKIRA"
    ],
    "examplesEn": [
      "Cyberpunk 2077",
      "Blade Runner 2049",
      "Cyberpunk: Edgerunners",
      "AKIRA"
    ],
    "pitfalls": [
      "不要给所有文字加霓虹光，避免持续故障影响阅读与操作。"
    ],
    "pitfallsEn": [
      "Avoid neon on all text and persistent glitches that interrupt reading or interaction."
    ],
    "colors": [
      "#050508",
      "#0a0a12",
      "#0c0c16",
      "#00ffff",
      "#ff00ff"
    ]
  },
  {
    "id": "frutiger-aero",
    "name": "Frutiger Aero",
    "nameEn": "Frutiger Aero",
    "description": "让自然意象与乐观的技术界面共享一幅明亮场景。天空、水、草绿、透亮高光与柔和圆角；光照方向与反射保持一致。",
    "descriptionEn": "Combine natural imagery and optimistic technology in one bright scene. Sky, water, grass green, translucent highlights and soft corners, with consistent lighting and reflection.",
    "tags": [
      "复古",
      "活泼",
      "流行"
    ],
    "tagsEn": [
      "Vintage",
      "Playful",
      "Trendy"
    ],
    "features": [
      "构图 - 让自然意象与乐观的技术界面共享一幅明亮场景。",
      "关键手法 - 天空、水、草绿、透亮高光与柔和圆角；光照方向与反射保持一致。"
    ],
    "featuresEn": [
      "Composition - Combine natural imagery and optimistic technology in one bright scene.",
      "Signature - Sky, water, grass green, translucent highlights and soft corners, with consistent lighting and reflection."
    ],
    "useCases": [
      "天气/环保类应用",
      "怀旧向个人主页",
      "饮品与个护品牌",
      "儿童科技产品",
      "Y2K 复古营销活动页"
    ],
    "useCasesEn": [
      "Weather and eco apps",
      "Nostalgia-driven personal sites",
      "Beverage and personal care brands",
      "Kids' tech products",
      "Y2K revival campaign pages"
    ],
    "pros": [
      "强烈的怀旧情绪共鸣",
      "乐观治愈的独特氛围",
      "在扁平化泛滥中极具辨识度",
      "自带社交传播话题性"
    ],
    "prosEn": [
      "Powerful nostalgia resonance",
      "Uniquely optimistic, healing mood",
      "Stands out in a flat-design world",
      "Built-in social virality"
    ],
    "cons": [
      "分寸难拿捏 - 易显廉价过时",
      "光泽细节工作量大",
      "不适合严肃商务场景"
    ],
    "consEn": [
      "Hard to balance - can look cheap or dated",
      "Gloss details are labor-intensive",
      "Poor fit for serious business"
    ],
    "examples": [
      "Windows Vista",
      "Wii 主界面",
      "iTunes 7",
      "Frutiger Aero Archive"
    ],
    "examplesEn": [
      "Windows Vista",
      "Wii Menu",
      "iTunes 7",
      "Frutiger Aero Archive"
    ],
    "pitfalls": [
      "不要只剩蓝绿渐变；自然内容与光泽材质需要同时存在。"
    ],
    "pitfallsEn": [
      "Blue-green gradients alone are insufficient; natural content and glossy material must coexist."
    ],
    "colors": [
      "#BDE8FF",
      "#E8F7FF",
      "#FFFFFF",
      "#1B4A6B",
      "#48759B"
    ]
  },
  {
    "id": "claymorphism",
    "name": "粘土拟态",
    "nameEn": "Claymorphism",
    "description": "以少量体积饱满的角色或控件为视觉重点，留出呼吸空间。柔软圆角、内高光与带色外阴影形成膨胀感，光照保持统一。",
    "descriptionEn": "Focus on a few voluminous characters or controls with space around them. Soft corners, inset highlights and tinted cast shadows create an inflated volume under consistent lighting.",
    "tags": [
      "现代",
      "活泼"
    ],
    "tagsEn": [
      "Modern",
      "Playful"
    ],
    "features": [
      "构图 - 以少量体积饱满的角色或控件为视觉重点，留出呼吸空间。",
      "关键手法 - 柔软圆角、内高光与带色外阴影形成膨胀感，光照保持统一。"
    ],
    "featuresEn": [
      "Composition - Focus on a few voluminous characters or controls with space around them.",
      "Signature - Soft corners, inset highlights and tinted cast shadows create an inflated volume under consistent lighting."
    ],
    "useCases": [
      "儿童教育应用",
      "社交娱乐平台",
      "游戏化界面设计",
      "NFT 与数字艺术展示",
      "品牌吉祥物周边"
    ],
    "useCasesEn": [
      "Kids education apps",
      "Social entertainment platforms",
      "Gamification interface design",
      "NFT and digital art showcase",
      "Brand mascot merchandise"
    ],
    "pros": [
      "极高的亲和力与可爱感",
      "独特的 3D 视觉效果",
      "适合年轻活泼的品牌",
      "社交分享率高"
    ],
    "prosEn": [
      "Extremely high affinity and cuteness",
      "Unique 3D visual effects",
      "Suitable for young and playful brands",
      "High social share rate"
    ],
    "cons": [
      "实现成本较高 - 需 3D 工具",
      "性能开销大",
      "不适合严肃商业场景"
    ],
    "consEn": [
      "High implementation cost - needs 3D tools",
      "Large performance overhead",
      "Unsuitable for serious business contexts"
    ],
    "examples": [
      "Android 12 Logo",
      "Reddit Snoo",
      "Windows 11 Emoji",
      "Notion AI"
    ],
    "examplesEn": [
      "Android 12 Logo",
      "Reddit Snoo",
      "Windows 11 Emoji",
      "Notion AI"
    ],
    "pitfalls": [
      "避免用普通卡片加投影冒充粘土；避免装饰角色遮挡操作。"
    ],
    "pitfallsEn": [
      "A drop shadow on a flat card is not clay; keep characters away from controls."
    ],
    "colors": [
      "#FFF9F4",
      "#FFB6C1",
      "#F79CAC",
      "#87CEEB",
      "#6FBBDD"
    ]
  },
  {
    "id": "vaporwave",
    "name": "蒸汽波",
    "nameEn": "Vaporwave",
    "description": "用复古窗口、空间网格与超现实图像形成怀旧场景。本例采用粉、青、紫的色调关系，保留明确的前景文字层。",
    "descriptionEn": "Combine retro windows, perspective grids and surreal imagery into a nostalgic scene. This study uses pink, cyan and violet while retaining a distinct foreground text layer.",
    "tags": [
      "艺术",
      "复古"
    ],
    "tagsEn": [
      "Art",
      "Vintage"
    ],
    "features": [
      "构图 - 用复古窗口、空间网格与超现实图像形成怀旧场景。",
      "关键手法 - 本例采用粉、青、紫的色调关系，保留明确的前景文字层。"
    ],
    "featuresEn": [
      "Composition - Combine retro windows, perspective grids and surreal imagery into a nostalgic scene.",
      "Signature - This study uses pink, cyan and violet while retaining a distinct foreground text layer."
    ],
    "useCases": [
      "复古电子音乐项目",
      "潮流服饰限量系列",
      "互联网艺术项目",
      "怀旧主题活动",
      "NFT 与数字收藏品"
    ],
    "useCasesEn": [
      "Retro electronic music projects",
      "Streetwear limited editions",
      "Internet art projects",
      "Nostalgia-themed events",
      "NFTs and digital collectibles"
    ],
    "pros": [
      "独特的亚文化标识",
      "怀旧情怀共鸣强烈",
      "社群认同感强",
      "视觉元素丰富可混搭"
    ],
    "prosEn": [
      "Unique subculture identity",
      "Strong nostalgic resonance",
      "Strong community identification",
      "Rich visual elements for mixing"
    ],
    "cons": [
      "极度小众 - 受众有限",
      "容易显得过时",
      "商业应用场景少",
      "版权素材风险"
    ],
    "consEn": [
      "Extremely niche - limited audience",
      "Easily appears dated",
      "Few commercial applications",
      "Copyright material risks"
    ],
    "examples": [
      "Macintosh Plus - Floral Shoppe",
      "Saint Pepsi",
      "Arizona Iced Tea x Adidas"
    ],
    "examplesEn": [
      "Macintosh Plus - Floral Shoppe",
      "Saint Pepsi",
      "Arizona Iced Tea x Adidas"
    ],
    "pitfalls": [
      "避免荧光背景吞掉文字，不要把所有复古元素都塞进同一屏。"
    ],
    "pitfallsEn": [
      "Avoid losing text in fluorescent backgrounds or packing every retro motif into one screen."
    ],
    "colors": [
      "#FF69B4",
      "#00CED1",
      "#9400D3",
      "#FFD700",
      "#1E90FF"
    ]
  },
  {
    "id": "maximalism",
    "name": "极繁主义",
    "nameEn": "Maximalism",
    "description": "建立一个强主视觉，再用次级文字、图案与层叠内容丰富节奏。高密度、多尺度与鲜明色彩同时存在，仍有主次、重复和呼应。",
    "descriptionEn": "Establish a dominant visual, then enrich it with secondary type, patterns and layered content. High density, multiple scales and vivid colors coexist with hierarchy, repetition and echoes.",
    "tags": [
      "艺术",
      "个性"
    ],
    "tagsEn": [
      "Art",
      "Distinctive"
    ],
    "features": [
      "构图 - 建立一个强主视觉，再用次级文字、图案与层叠内容丰富节奏。",
      "关键手法 - 高密度、多尺度与鲜明色彩同时存在，仍有主次、重复和呼应。"
    ],
    "featuresEn": [
      "Composition - Establish a dominant visual, then enrich it with secondary type, patterns and layered content.",
      "Signature - High density, multiple scales and vivid colors coexist with hierarchy, repetition and echoes."
    ],
    "useCases": [
      "奢侈品牌旗舰站",
      "高端时尚杂志数字版",
      "艺术展览与博物馆",
      "节庆活动专题页",
      "名人与明星官网"
    ],
    "useCasesEn": [
      "Luxury brand flagships",
      "High-end fashion magazine digital editions",
      "Art exhibitions and museums",
      "Festival event pages",
      "Celebrity official sites"
    ],
    "pros": [
      "视觉盛宴 - 感官刺激强烈",
      "品牌个性表达的极致",
      "情感丰富有感染力",
      "适合讲述复杂故事"
    ],
    "prosEn": [
      "Visual feast - intense sensory stimulation",
      "Ultimate brand personality expression",
      "Rich emotions and infectious",
      "Suitable for complex storytelling"
    ],
    "cons": [
      "极易杂乱失控",
      "加载性能差",
      "需要顶级设计功底",
      "可用性可能受影响"
    ],
    "consEn": [
      "Very easy to become chaotic",
      "Poor loading performance",
      "Requires top-tier design skills",
      "Usability may be affected"
    ],
    "examples": [
      "Gucci.com",
      "Valentino",
      "Dolce & Gabbana",
      "Versace",
      "Vogue Italia"
    ],
    "examplesEn": [
      "Gucci.com",
      "Valentino",
      "Dolce & Gabbana",
      "Versace",
      "Vogue Italia"
    ],
    "pitfalls": [
      "不要把无序堆叠当作极繁；需要给主操作和正文留下明确位置。"
    ],
    "pitfallsEn": [
      "Disorder alone is not maximalism; reserve clear space for primary actions and body copy."
    ],
    "colors": [
      "#FFF3D6",
      "#FF1493",
      "#00FF00",
      "#FFD700",
      "#FF4500"
    ]
  },
  {
    "id": "kinetic",
    "name": "动态字体",
    "nameEn": "Kinetic Typography",
    "description": "让文字运动承担节奏与叙事，静止时仍保留完整阅读结构。速度、位移、字距与字重有明确编排，提供暂停并尊重减弱动态效果。",
    "descriptionEn": "Use moving type for rhythm and storytelling while preserving a complete static reading structure. Choreograph speed, displacement, spacing and weight; provide pause and respect reduced motion.",
    "tags": [
      "艺术",
      "前卫"
    ],
    "tagsEn": [
      "Art",
      "Avant-garde"
    ],
    "features": [
      "构图 - 让文字运动承担节奏与叙事，静止时仍保留完整阅读结构。",
      "关键手法 - 速度、位移、字距与字重有明确编排，提供暂停并尊重减弱动态效果。"
    ],
    "featuresEn": [
      "Composition - Use moving type for rhythm and storytelling while preserving a complete static reading structure.",
      "Signature - Choreograph speed, displacement, spacing and weight; provide pause and respect reduced motion."
    ],
    "useCases": [
      "创意机构官网",
      "电影/MV 宣传站",
      "设计师个人作品集",
      "品牌活动专题页",
      "艺术装置互动网站"
    ],
    "useCasesEn": [
      "Creative agency websites",
      "Film/MV promotional sites",
      "Designer personal portfolios",
      "Brand campaign microsites",
      "Art installation interactive sites"
    ],
    "pros": [
      "极强的视觉吸引力与记忆点",
      "叙事能力强 - 讲故事神器",
      "独特的品牌表达方式",
      "获奖作品常客"
    ],
    "prosEn": [
      "Extremely strong visual appeal and memorability",
      "Strong narrative ability - storytelling tool",
      "Unique brand expression method",
      "Regular award winner"
    ],
    "cons": [
      "性能开销大 - 需要优化",
      "可访问性挑战 - motion 敏感用户",
      "内容可能被动画淹没",
      "SEO 不友好"
    ],
    "consEn": [
      "Large performance overhead - needs optimization",
      "Accessibility challenges - motion-sensitive users",
      "Content may be overwhelmed by animation",
      "Not SEO-friendly"
    ],
    "examples": [
      "Apple 产品发布会",
      "Active Theory 作品",
      "Awwwards 获奖站",
      "KIKK Festival"
    ],
    "examplesEn": [
      "Apple keynotes",
      "Active Theory works",
      "Awwwards winners",
      "KIKK Festival"
    ],
    "pitfalls": [
      "避免持续跑马灯代替内容；不要把关键文案放在无法停下的动画里。"
    ],
    "pitfallsEn": [
      "Do not replace content with endless marquees or trap important copy inside unpausable motion."
    ],
    "colors": [
      "#000000",
      "#FFFFFF",
      "#FF0000",
      "#8a8a8a",
      "#2b2b2b"
    ]
  },
  {
    "id": "anti-design",
    "name": "反设计",
    "nameEn": "Anti-Design",
    "description": "有意打破局部对齐和字体惯例，同时让导航与内容顺序可理解。本例用冲突原色、错位标签和字体混搭，形成有控制的反差。",
    "descriptionEn": "Break selected alignment and typographic conventions while keeping navigation and content order understandable. Clashing primaries, displaced labels and mixed type create controlled tension in this study.",
    "tags": [
      "前卫",
      "个性",
      "流行"
    ],
    "tagsEn": [
      "Avant-garde",
      "Distinctive",
      "Trendy"
    ],
    "features": [
      "构图 - 有意打破局部对齐和字体惯例，同时让导航与内容顺序可理解。",
      "关键手法 - 本例用冲突原色、错位标签和字体混搭，形成有控制的反差。"
    ],
    "featuresEn": [
      "Composition - Break selected alignment and typographic conventions while keeping navigation and content order understandable.",
      "Signature - Clashing primaries, displaced labels and mixed type create controlled tension in this study."
    ],
    "useCases": [
      "Z世代潮流品牌",
      "独立音乐人与乐队",
      "街头服饰品牌",
      "创意活动与快闪店",
      "社交媒体病毒营销"
    ],
    "useCasesEn": [
      "Gen Z streetwear brands",
      "Independent musicians and bands",
      "Streetwear fashion brands",
      "Creative events and pop-ups",
      "Social media viral marketing"
    ],
    "pros": [
      "极强的话题性与传播力",
      "精准触达年轻受众",
      "品牌个性表达的极致",
      "社交媒体分享率高"
    ],
    "prosEn": [
      "Extremely high topic appeal and shareability",
      "Precisely reaches young audiences",
      "Ultimate brand personality expression",
      "High social media share rate"
    ],
    "cons": [
      "可用性几乎为零",
      "极易过时 - 生命周期短",
      "品牌风险极高",
      "大众接受度低"
    ],
    "consEn": [
      "Near-zero usability",
      "Easily outdated - short lifecycle",
      "Extremely high brand risk",
      "Low mass acceptance"
    ],
    "examples": [
      "Charli XCX - Brat",
      "Balenciaga 部分campaign",
      "MSCHF",
      "Yaeji"
    ],
    "examplesEn": [
      "Charli XCX - Brat",
      "Balenciaga campaigns",
      "MSCHF",
      "Yaeji"
    ],
    "pitfalls": [
      "不要把遮挡、不可点击或不可读当成设计目标。"
    ],
    "pitfallsEn": [
      "Occlusion, unusable controls and illegibility are not design goals."
    ],
    "colors": [
      "#FFFFFF",
      "#89FC00",
      "#FF00FF",
      "#FF0000",
      "#0000FF"
    ]
  },
  {
    "id": "neumorphism",
    "name": "新拟态",
    "nameEn": "Neumorphism / Soft UI",
    "description": "用同一基底上的凸起与凹陷组织少量控件。成对明暗阴影共享光照方向；选中状态与标签需要额外清楚。",
    "descriptionEn": "Organize a small number of controls through raised and inset forms on one base material. Paired light and dark shadows share a lighting direction; labels and selection need explicit clarity.",
    "tags": [
      "现代",
      "极简"
    ],
    "tagsEn": [
      "Modern",
      "Minimal"
    ],
    "features": [
      "构图 - 用同一基底上的凸起与凹陷组织少量控件。",
      "关键手法 - 成对明暗阴影共享光照方向；选中状态与标签需要额外清楚。"
    ],
    "featuresEn": [
      "Composition - Organize a small number of controls through raised and inset forms on one base material.",
      "Signature - Paired light and dark shadows share a lighting direction; labels and selection need explicit clarity."
    ],
    "useCases": [
      "概念设计与 Dribbble 展示",
      "冥想与放松类应用",
      "智能家居控制面板",
      "简约音乐播放器",
      "个人项目与实验"
    ],
    "useCasesEn": [
      "Concept design and Dribbble showcases",
      "Meditation and relaxation apps",
      "Smart home control panels",
      "Minimal music players",
      "Personal projects and experiments"
    ],
    "pros": [
      "独特的触感与物理感",
      "视觉上柔和舒适",
      "CSS 实现相对简单",
      "在深色模式下表现尚可"
    ],
    "prosEn": [
      "Unique tactile and physical feel",
      "Visually soft and comfortable",
      "Relatively simple CSS implementation",
      "Acceptable in dark mode"
    ],
    "cons": [
      "严重的可访问性问题 - WCAG 不达标",
      "按钮/输入框难以识别",
      "已逐渐被行业淘汰",
      "实际生产环境中罕见"
    ],
    "consEn": [
      "Severe accessibility issues - WCAG non-compliant",
      "Buttons/inputs hard to identify",
      "Gradually phased out by industry",
      "Rare in production environments"
    ],
    "examples": [
      "Dribbble 概念作品",
      "智能家居 UI",
      "Tesla 车机界面参考"
    ],
    "examplesEn": [
      "Dribbble concepts",
      "Smart home UI",
      "Tesla car UI references"
    ],
    "pitfalls": [
      "不要仅靠低对比阴影区分状态，保持键盘焦点和触控可用。"
    ],
    "pitfallsEn": [
      "Do not rely solely on low-contrast shadows for state; retain keyboard focus and usable touch targets."
    ],
    "colors": [
      "#E0E5EC",
      "#EAEFF6",
      "#D6DCE5",
      "#FFFFFF",
      "#A3B1C6"
    ]
  }
];
