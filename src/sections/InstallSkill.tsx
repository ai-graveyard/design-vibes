import { useState } from 'react';
import { Copy, Check, Sparkles, Terminal, ExternalLink } from 'lucide-react';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { designStyles } from '../data/styles';
import { useInView } from '../hooks/useInView';

const SITE = 'https://design-vibes.v2ai.org';

/** 让 agent 在线读取安装说明的一句话，方式一的核心 */
const AGENT_PROMPT_ZH = `请阅读 ${SITE}/skill.md 并按其中的说明安装这个 skill。`;
const AGENT_PROMPT_EN = `Read ${SITE}/skill.md and install the skill following the instructions there.`;

const INSTALL_CMD = `DIR=~/.claude/skills/design-vibes
mkdir -p "$DIR" && curl -fsSL ${SITE}/design-vibes-skill.tar.gz | tar -xz -C "$DIR"`;

function CopyButton({
  text,
  label,
  copiedLabel,
  className = '',
}: {
  text: string;
  label: string;
  copiedLabel: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded transition-colors ${className} ${
        copied
          ? 'bg-green-500 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-[#FF9F1C] hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-[#FF9F1C] dark:hover:text-white'
      }`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? copiedLabel : label}
    </button>
  );
}

/** 安装 Skill：两种装法（让 agent 读 /skill.md 自己装 / 一行命令），首页的第二个转化点 */
export function InstallSkill() {
  const { language } = useAppStore();
  const t = translations[language];
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>();

  const agentPrompt = language === 'zh' ? AGENT_PROMPT_ZH : AGENT_PROMPT_EN;
  const contains = t.install.contains.replaceAll('{count}', String(designStyles.length));

  // lg:min-h-screen + 垂直居中：吸附到区块顶部后整块正好占满一屏，不会露出半截下一屏
  return (
    <section
      id="install-skill"
      className="snap-screen w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-y-2 transition-colors duration-300 border-[#FF9F1C]/35 bg-[#FFF9F0] dark:border-[#FF9F1C]/25 dark:bg-[#14110c] lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header —— 暖色底 + 橙色描边，从上下两个中性色区块里跳出来 */}
        <div ref={headerRef} className={`mb-10 sm:mb-16 ${headerInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-6 h-0.5 bg-[#FF9F1C] shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] text-[#D98200] dark:text-[#FFB340]">
              {t.install.kicker}
            </span>
            <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-[#FF9F1C] text-white">
              {t.install.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-black dark:text-white">
            {t.install.title}
          </h2>
          <p className="text-sm sm:text-base mt-3 sm:mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
            {t.install.subtitle}
          </p>
        </div>

        {/* 两种装法 */}
        {/* 等宽等高：两卡骨架一致（标题 / 说明 / 主体块 flex-1 / 底部一行），
            内容量的差额由中间的主体块吸收，卡片外沿始终对齐 */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* 方式一：让 AI 自己装 */}
          <div
            className={`flex flex-col rounded-xl border p-4 sm:p-6 bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800 ${
              cardsInView ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <Sparkles className="w-4 h-4 text-[#FF9F1C] shrink-0" />
              <h3 className="text-sm font-bold text-black dark:text-white">{t.install.methodALabel}</h3>
              <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-[#FF9F1C] text-white">
                {t.install.methodABadge}
              </span>
            </div>
            <p className="text-xs mb-3 sm:mb-4 leading-relaxed text-gray-500 dark:text-gray-400">
              {t.install.methodAHint}
            </p>
            {/* 复制按钮沉到框右下角：框被 flex-1 撑高时，按钮跟着走，不会孤零零浮在右上 */}
            <div className="flex-1 flex flex-col justify-center gap-3 sm:gap-4 rounded-lg border p-3 sm:p-4 border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#0a0a0a]">
              {/* 这句话就是「最快」路径的主角，字号给足，两行正好填满框 */}
              <p className="min-w-0 text-[12.5px] sm:text-[15px] leading-relaxed break-words text-gray-800 dark:text-gray-200">
                {agentPrompt}
              </p>
              <CopyButton
                text={agentPrompt}
                label={t.install.copy}
                copiedLabel={t.install.copied}
                className="self-end"
              />
            </div>
            <a
              href={`${SITE}/skill.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-4 self-start inline-flex items-center gap-1 text-[11px] transition-colors text-gray-500 hover:text-[#D98200] dark:text-gray-400 dark:hover:text-[#FFB340]"
            >
              {t.install.inspect}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* 方式二：一行命令 */}
          <div
            className={`flex flex-col rounded-xl border p-4 sm:p-6 bg-white border-gray-200 dark:bg-[#1a1a1a] dark:border-gray-800 ${
              cardsInView ? 'animate-fade-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '80ms' }}
          >
            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
              <Terminal className="w-4 h-4 text-[#FF9F1C] shrink-0" />
              <h3 className="text-sm font-bold text-black dark:text-white">{t.install.methodBLabel}</h3>
            </div>
            <p className="text-xs mb-3 sm:mb-4 leading-relaxed text-gray-500 dark:text-gray-400">
              {t.install.methodBHint}
            </p>
            <div className="flex-1 flex flex-col rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-[#0a0a0a]">
              <div className="flex items-center justify-between gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 border-b border-gray-200 dark:border-gray-800">
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  bash
                </span>
                <CopyButton text={INSTALL_CMD} label={t.install.copy} copiedLabel={t.install.copied} />
              </div>
              {/* 桌面折行显示完整命令（等宽后横向放不下）；移动端保持横向滚，否则要多占两行、撑破一屏 */}
              <pre className="min-w-0 px-3 py-2.5 sm:px-3.5 sm:py-3 overflow-x-auto sm:overflow-x-visible">
                <code className="text-[11px] font-mono leading-relaxed whitespace-pre sm:whitespace-pre-wrap sm:break-words text-gray-700 dark:text-gray-300">
                  {INSTALL_CMD}
                </code>
              </pre>
            </div>
            <p className="mt-3 sm:mt-4 text-[11px] leading-relaxed text-gray-400 dark:text-gray-500">
              {t.install.codexNote}{' '}
              <code className="font-mono text-sky-700 dark:text-sky-300">~/.codex/skills/design-vibes</code>
            </p>
          </div>
        </div>

        <p className="mt-4 sm:mt-8 text-[11px] leading-relaxed text-gray-400 dark:text-gray-500">
          {contains} {t.install.restartNote}
        </p>
      </div>
    </section>
  );
}
