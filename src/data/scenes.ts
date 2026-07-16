// 选型指南数据：按项目场景/技术难度推荐风格。
// 源自《网站设计风格大全.md》的「按场景推荐」「按技术难度推荐」两表，并纳入后续新增风格。
// styleIds 必须是 styles.ts 中存在的 id。

export interface Scene {
  id: string;
  icon: string;
  name: string;
  nameEn: string;
  styleIds: string[];
}

export const scenes: Scene[] = [
  {
    id: 'saas',
    icon: '🚀',
    name: 'SaaS / 科技产品',
    nameEn: 'SaaS / Tech',
    styleIds: ['apple', 'aurora', 'bento', 'liquid-glass', 'glassmorphism'],
  },
  {
    id: 'ecommerce',
    icon: '🛍️',
    name: '电商 / 零售',
    nameEn: 'E-commerce / Retail',
    styleIds: ['swiss', 'bento', 'scandinavian', 'maximalism'],
  },
  {
    id: 'creative',
    icon: '🎨',
    name: '创意 / 设计',
    nameEn: 'Creative / Design',
    styleIds: ['swiss', 'bauhaus', 'kinetic', 'neo-brutalism', 'editorial'],
  },
  {
    id: 'enterprise',
    icon: '🏢',
    name: '企业 / B2B',
    nameEn: 'Enterprise / B2B',
    styleIds: ['material', 'flat', 'swiss', 'apple'],
  },
  {
    id: 'culture',
    icon: '🏛️',
    name: '艺术 / 文化',
    nameEn: 'Art / Culture',
    styleIds: ['brutalism', 'memphis', 'art-deco', 'dark-academia', 'editorial'],
  },
  {
    id: 'personal',
    icon: '✍️',
    name: '个人 / 博客',
    nameEn: 'Personal / Blog',
    styleIds: ['japanese', 'duotone', 'neo-brutalism', 'terminal', 'editorial'],
  },
  {
    id: 'gaming',
    icon: '🎮',
    name: '游戏 / 娱乐',
    nameEn: 'Gaming / Entertainment',
    styleIds: ['cyberpunk', 'vaporwave', 'pixel', 'claymorphism', 'maximalism'],
  },
  {
    id: 'kids',
    icon: '🧸',
    name: '儿童 / 教育',
    nameEn: 'Kids / Education',
    styleIds: ['claymorphism', 'memphis', 'organic', 'frutiger-aero'],
  },
];

export interface DifficultyTier {
  /** 1-4，对应 ⭐ 数量；难度指纯 CSS 复现的实现成本 */
  level: number;
  name: string;
  nameEn: string;
  styleIds: string[];
}

export const difficultyTiers: DifficultyTier[] = [
  {
    level: 1,
    name: '简单',
    nameEn: 'Easy',
    styleIds: ['flat', 'duotone', 'brutalism', 'neo-brutalism', 'terminal'],
  },
  {
    level: 2,
    name: '中等',
    nameEn: 'Medium',
    styleIds: ['bento', 'swiss', 'material', 'editorial', 'pixel'],
  },
  {
    level: 3,
    name: '较难',
    nameEn: 'Hard',
    styleIds: ['apple', 'glassmorphism', 'kinetic', 'aurora', 'liquid-glass'],
  },
  {
    level: 4,
    name: '困难',
    nameEn: 'Expert',
    styleIds: ['organic', 'claymorphism', 'maximalism', 'frutiger-aero'],
  },
];
