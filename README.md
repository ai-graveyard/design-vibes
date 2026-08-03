# Design Vibes

一个展示 30 种经典网页设计风格的交互式指南，帮助设计师和开发者快速了解不同设计风格的特点、适用场景及优缺点，并为 Vibe Coding 提供开箱即用的 AI 提示词、Design Tokens 与单文件参考源码。

> [预览地址](https://design-vibes.v2ai.org)

## 安装 Skill

网站上的提示词、Design Tokens 和避坑指南，也打包成了一个 Skill，让 AI 直接照着写页面，不用来回复制粘贴。

产物就是 [`skills/design-vibes/`](./skills/design-vibes) 这一个目录：一份 `SKILL.md` 加若干 Markdown 参考文件和 HTML 附件，全部用相对路径互相引用，不含任何工具专有的清单文件。**装法就是把它拷进你的 agent 的 skills 目录**，改 `DIR` 即可换工具：

```bash
DIR=~/.claude/skills/design-vibes; mkdir -p "$DIR" && curl -fsSL https://github.com/ai-graveyard/design-vibes/archive/refs/heads/main.tar.gz | tar -xz --strip-components=3 -C "$DIR" design-vibes-main/skills/design-vibes
```

| 工具 | `DIR` |
| :-- | :-- |
| Claude Code | `~/.claude/skills/design-vibes` |
| Codex | `~/.codex/skills/design-vibes` |

两者均已实测通过：agent 会自己加载 `SKILL.md`、按工作流读到 `references/styles/<id>.md`，并取出正确的 tokens。项目级安装把 `~/.claude` 换成项目里的 `.claude` 即可（Codex 同理）。

也可以直接 clone 后 `cp -r skills/design-vibes <你的 skills 目录>/`。

装好后不需要记命令：说「做一个赛博朋克风格的落地页」或「这个首页用什么风格好」，agent 会根据 `description` 自己加载。

Skill 里有什么：

- **30 份风格参考**（`references/styles/<id>.md`）：完整提示词中英双语、从 demo 直接提取的 `:root` tokens、特征 / 适用场景 / 优缺点、避坑清单
- **选型指南**（`references/picker.md`）：按项目类型和实现难度圈定候选
- **交付自检清单**（`references/checklist.md`）：375px 无横向滚动、`padding` 简写在复合类上互相清零、`view()` 动画的 fill 陷阱等实测踩过的坑
- **30 个零依赖单文件 demo**（`assets/demos/<id>.html`）：按需读取，可直接当起点

采用渐进披露：常驻上下文只有约 180 token，选定风格后才读对应的参考文件。

## 功能特性

- **30 种设计风格详解**：Apple 极简、包豪斯、玻璃拟态、液态玻璃、极光渐变、终端黑客风、像素风等
- **实况预览**：每种风格配有一个纯手写的迷你落地页 demo，首页卡片即真实页面的等比缩略图
- **零依赖 demo**：所有 demo 为单文件 HTML + 纯 CSS，无 CDN、无外部字体、无 JavaScript，秒开
- **源码即教程**：详情页可直接查看 demo 源码（语法高亮），一键复制/下载整个 HTML
- **AI 提示词**：每种风格附带可一键复制的完整提示词（中英），用于 AI 编程工具快速复现该风格
- **Design Tokens**：自动提取 demo 的 `:root` CSS 变量，与实况预览严格一致，可直接复制
- **避坑指南**：每种风格 3-4 条「AI 生成时最常见的翻车点」
- **选型指南**：按项目场景 / 技术难度快速圈定候选风格
- **对比模式**：任意两种风格并排实况对比（`/compare/<a>/<b>`），数据逐项对照
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

# 从 src/data 重新生成 Skill 产物 skills/design-vibes/（需 Node ≥ 22.6）
pnpm skill

# 构建生产版本（含校验、skill 生成与 SEO 后处理）
pnpm build

# 重新生成社交分享图（demo 有增改时运行，需 macOS + Chrome）
pnpm og

# 重新生成首页卡片静态缩略图（demo 有增改时运行，需 macOS + Chrome）
pnpm thumbs

# 预览生产版本
pnpm preview
```

## 项目结构

```
├── skills/design-vibes/   # Skill 产物（由 pnpm skill 生成，勿手改）
│   ├── SKILL.md           # skill 本体：工作流 + 30 风格索引表
│   ├── references/        # 按需读取的风格参考、选型指南、交付自检清单
│   └── assets/demos/      # 30 个 demo 副本
├── public/
│   ├── demos/             # 30 个风格 demo（零依赖单文件 HTML，与风格数据一一对应）
│   ├── og/                # 社交分享图（由 pnpm og 生成）
│   └── thumbs/            # 首页卡片静态缩略图（由 pnpm thumbs 生成，hover 时才挂载实况 iframe）
├── scripts/
│   ├── validate-demos.mjs # 数据一致性与 demo 约定校验（build 前自动执行）
│   ├── build-skill.mjs    # 从 src/data 生成 skills/design-vibes/
│   ├── skill-templates/   # SKILL.md 模板与手写的交付自检清单
│   ├── postbuild-seo.mjs  # 为每个风格页生成独立 meta 的静态壳 + sitemap + robots
│   ├── generate-og.mjs    # 用系统 Chrome headless 截 og:image
│   ├── generate-thumbs.mjs# 用系统 Chrome headless 截首页卡片缩略图
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
│   └── pages/             # 首页、风格详情页与对比页
└── 网站设计风格大全.md      # 风格资料源文档
```

## 新增一种风格

1. 在 `src/data/styles.ts` 中追加风格条目（`id` 为唯一标识，含 `pitfalls` 避坑指南）
2. 在 `src/data/prompts.ts` 中追加同 `id` 的提示词
3. 在 `public/demos/` 中新增 `<id>.html` demo（单文件、零外链、零 JS、必须有 `:root` CSS 变量）
4. （可选）在 `src/data/scenes.ts` 的场景/难度中收录该风格
5. 运行 `pnpm validate` 校验三处对齐，`pnpm og` 与 `pnpm thumbs` 重新生成分享图和卡片缩略图
6. 运行 `pnpm skill` 重建 Skill 产物，并把 `skills/` 的变更一起提交（CI 会用 `git diff --exit-code` 卡住漏提交）

首页卡片、侧边栏、详情页、Design Tokens、SEO 静态壳与 Skill 文档都会根据数据自动生成，无需改动组件。

## 部署

`pnpm build` 产物在 `dist/`。每个 `/style/<id>` 都有真实的 `index.html` 静态壳，nginx 无需额外配置即可直访；若希望未知路径也回退到首页，可配置 `try_files $uri $uri/ /index.html;`。

## 许可证

[MIT](./LICENSE)
