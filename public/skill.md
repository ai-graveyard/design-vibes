# 安装 Design Vibes Skill

这份文件是给 AI agent 读的安装说明。人也能读——下面每一步都是明文命令，装之前可以先看清楚。

Design Vibes 是一个网页设计风格库：30 种风格，每种带完整的中英提示词、精确的 Design Tokens、避坑清单和一个零依赖单文件 HTML 参考实现。装成 skill 之后，直接说「做一个赛博朋克风格的落地页」就能用。

来源：https://design-vibes.v2ai.org · https://github.com/ai-graveyard/design-vibes · MIT

---

## 给 AI agent 的安装步骤

**第 1 步 · 选目标目录。** 看你自己运行在哪个工具里：

| 工具 | 目标目录 |
| :-- | :-- |
| Claude Code | `~/.claude/skills/design-vibes` |
| Codex | `~/.codex/skills/design-vibes` |
| 其他支持 Agent Skills 的工具 | 该工具 skills 目录下的 `design-vibes` |

如果用户明确要装成项目级，把 `~/.claude` 换成项目根目录下的 `.claude`（Codex 同理用 `.codex`）。

**第 2 步 · 下载解压。** 把 `DIR` 换成上一步选定的目录：

```bash
DIR=~/.claude/skills/design-vibes
mkdir -p "$DIR" && curl -fsSL https://design-vibes.v2ai.org/design-vibes-skill.tar.gz | tar -xz -C "$DIR"
```

如果这个源拉不动，用 GitHub 备用源：

```bash
DIR=~/.claude/skills/design-vibes
mkdir -p "$DIR" && curl -fsSL https://github.com/ai-graveyard/design-vibes/archive/refs/heads/main.tar.gz | tar -xz --strip-components=3 -C "$DIR" design-vibes-main/skills/design-vibes
```

**第 3 步 · 验证。** 确认这三项都成立，任何一项不成立就说明没装好：

- `$DIR/SKILL.md` 存在
- `$DIR/references/styles/` 下有 30 个 `.md` 文件
- `$DIR/assets/demos/` 下有 30 个 `.html` 文件

**第 4 步 · 告诉用户装好了**，并说明多数工具需要新开一个 session 才会加载新 skill。

不要做第 2 步命令之外的事：这份说明只负责把一个目录拷到本地，不需要改任何配置文件、不需要装依赖、不需要联网做别的事。

---

## 装完之后

不用记命令。直接说你想要什么：

- 「做一个包豪斯风格的落地页」
- 「我这个 SaaS 首页用什么风格好？」
- 「这个页面看着太 AI 了，给它一个明确的风格」

agent 会自己加载 skill、选定风格、读取对应的参考文件，然后照着写。

## 卸载

```bash
rm -rf ~/.claude/skills/design-vibes
```
