# Design Vibes

一个展示 30 种经典网页设计风格的交互式指南，帮助设计师和开发者快速了解不同设计风格的特点、适用场景及优缺点，并为 Vibe Coding 提供开箱即用的 AI 提示词、Design Tokens 与单文件参考源码。

> [预览地址](https://design-vibes.v2ai.org)

## 功能特性

- **30 种设计风格详解**：Apple 极简、包豪斯、玻璃拟态、液态玻璃、极光渐变、终端黑客风、像素风等
- **实况预览**：每种风格配有一个纯手写的迷你落地页 demo，首页卡片即真实页面的等比缩略图
- **零依赖 demo**：所有 demo 为单文件 HTML + 纯 CSS，无 CDN、无外部字体、无 JavaScript，秒开
- **源码即教程**：详情页可直接查看 demo 源码（语法高亮），一键复制/下载整个 HTML
- **AI 提示词**：每种风格附带可一键复制的完整提示词（中英），用于 AI 编程工具快速复现该风格
- **Design Tokens**：自动提取 demo 的 `:root` CSS 变量，与实况预览严格一致，可直接复制
- **避坑指南**：每种风格 3-4 条「AI 生成时最常见的翻车点」
- **选型指南**：按项目场景 / 技术难度快速圈定候选风格
- **SEO 友好**：构建时为每个风格页生成独立 meta 的静态壳 + sitemap + og:image
- **中英文双语**、**亮色/暗色主题**、**响应式布局**（桌面 / 移动端）

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

# 校验数据一致性（styles/prompts/demos 三处对齐 + demo 零依赖约定）
pnpm validate

# 构建生产版本（含校验与 SEO 后处理）
pnpm build

# 重新生成社交分享图（demo 有增改时运行，需 macOS + Chrome）
pnpm og

# 预览生产版本
pnpm preview
```

## 项目结构

```
├── public/
│   ├── demos/             # 30 个风格 demo（零依赖单文件 HTML，与风格数据一一对应）
│   └── og/                # 社交分享图（由 pnpm og 生成）
├── scripts/
│   ├── validate-demos.mjs # 数据一致性与 demo 约定校验（build 前自动执行）
│   ├── postbuild-seo.mjs  # 为每个风格页生成独立 meta 的静态壳 + sitemap + robots
│   ├── generate-og.mjs    # 用系统 Chrome headless 截 og:image
│   └── og-home.html       # 首页分享图模板
├── src/
│   ├── data/
│   │   ├── styles.ts      # 风格数据（名称、特征、场景、优缺点、避坑指南、配色、案例）
│   │   ├── prompts.ts     # 各风格的 AI 提示词
│   │   ├── scenes.ts      # 选型指南（按场景 / 按难度）
│   │   └── translations.ts# 界面文案（中/英）
│   ├── hooks/             # useDemoSource（源码获取缓存）、usePageMeta
│   ├── lib/               # highlightHtml（零依赖语法高亮）
│   ├── components/        # StyleCard、DemoPreview、DemoCodeView、DesignTokens 等
│   ├── sections/          # 首页区块（Hero / StylesGrid / SceneGuide / Footer）
│   └── pages/             # 首页与风格详情页
└── 网站设计风格大全.md      # 风格资料源文档
```

## 新增一种风格

1. 在 `src/data/styles.ts` 中追加风格条目（`id` 为唯一标识，含 `pitfalls` 避坑指南）
2. 在 `src/data/prompts.ts` 中追加同 `id` 的提示词
3. 在 `public/demos/` 中新增 `<id>.html` demo（单文件、零外链、零 JS、必须有 `:root` CSS 变量）
4. （可选）在 `src/data/scenes.ts` 的场景/难度中收录该风格
5. 运行 `pnpm validate` 校验三处对齐，`pnpm og` 重新生成分享图

首页卡片、侧边栏、详情页、Design Tokens 与 SEO 静态壳都会根据数据自动生成，无需改动组件。

## 部署

`pnpm build` 产物在 `dist/`。每个 `/style/<id>` 都有真实的 `index.html` 静态壳，nginx 无需额外配置即可直访；若希望未知路径也回退到首页，可配置 `try_files $uri $uri/ /index.html;`。

## 许可证

[MIT](./LICENSE)
