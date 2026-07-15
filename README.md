# Design Vibes

一个展示 24 种经典网页设计风格的交互式指南，帮助设计师和开发者快速了解不同设计风格的特点、适用场景及优缺点，并为 Vibe Coding 提供开箱即用的 AI 提示词。

> [预览地址](https://design-vibes.v2ai.org)

## 功能特性

- **24 种设计风格详解**：Apple 极简、包豪斯、玻璃拟态、新粗野主义、赛博朋克等
- **实况预览**：每种风格配有一个纯手写的迷你落地页 demo，首页卡片即真实页面的等比缩略图
- **零依赖 demo**：所有 demo 为单文件 HTML + 纯 CSS，无 CDN、无外部字体、无 JavaScript，秒开
- **AI 提示词**：每种风格附带可一键复制的提示词，用于 AI 编程工具快速复现该风格
- **中英文双语**、**亮色/暗色主题**、**响应式布局**（桌面 / 移动端）
- 每种风格包含：核心特征、适用场景、优缺点、配色方案、代表案例

## 技术栈

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Zustand

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 项目结构

```
├── public/demos/          # 24 个风格 demo（零依赖单文件 HTML，与风格数据一一对应）
├── src/
│   ├── data/
│   │   ├── styles.ts      # 风格数据（名称、特征、场景、优缺点、配色、案例）
│   │   ├── prompts.ts     # 各风格的 AI 提示词
│   │   └── translations.ts# 界面文案（中/英）
│   ├── components/        # StyleCard、DemoPreview（iframe 缩略图）、侧边栏等
│   ├── sections/          # 首页区块（Hero / StylesGrid / Footer）
│   └── pages/             # 首页与风格详情页
└── 网站设计风格大全.md      # 风格资料源文档
```

## 新增一种风格

1. 在 `src/data/styles.ts` 中追加风格条目（`id` 为唯一标识）
2. 在 `src/data/prompts.ts` 中追加同 `id` 的提示词
3. 在 `public/demos/` 中新增 `<id>.html` demo（保持零外部依赖、零 JS 约定）

首页卡片、侧边栏与详情页会根据数据自动生成，无需改动组件。

## 许可证

[MIT](./LICENSE)
