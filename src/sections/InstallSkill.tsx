import { useState, type ReactNode } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
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

/**
 * 复制按钮。primary 只留给「最快」那条路径——整屏唯一的橙色实心块，
 * 橙色在这里是"该点这个"的信号，不是装饰。已复制态用黑白反色，不引入第三个颜色。
 */
function CopyButton({
  text,
  label,
  copiedLabel,
  primary = false,
}: {
  text: string;
  label: string;
  copiedLabel: string;
  primary?: boolean;
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
      className={`shrink-0 inline-flex items-center gap-1 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-[2px] transition-colors ${
        copied
          ? 'bg-black text-white dark:bg-white dark:text-black'
          : primary
            ? 'bg-[#FF9F1C] text-white hover:bg-[#E8900A]'
            : 'border border-gray-200 text-gray-600 hover:border-gray-400 hover:text-black dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:text-white'
      }`}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? copiedLabel : label}
    </button>
  );
}

/** 两种装法共用同一个容器：一条 label 行（内容类型 + 复制）+ 内容体，只有 hairline，没有填色 */
function CopyBox({ label, action, children }: { label: string; action: ReactNode; children: ReactNode }) {
  return (
    <div className="rounded-[2px] border border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-gray-200 dark:border-gray-800">
        <span className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">{label}</span>
        {action}
      </div>
      {children}
    </div>
  );
}

/** 安装 Skill：两种装法（让 agent 读 /skill.md 自己装 / 一行命令），首页的第二个转化点 */
export function InstallSkill() {
  const { language } = useAppStore();
  const t = translations[language];
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [bodyRef, bodyInView] = useInView<HTMLDivElement>();

  const agentPrompt = language === 'zh' ? AGENT_PROMPT_ZH : AGENT_PROMPT_EN;

  // 底部参数表：把原来那行灰色小字拆成「标签 / 数值」，当作产品参数读
  const specs = [
    {
      label: t.install.specStyles,
      value: t.install.specStylesValue.replaceAll('{count}', String(designStyles.length)),
    },
    { label: t.install.specContext, value: t.install.specContextValue },
    { label: t.install.specEffect, value: t.install.specEffectValue },
  ];

  // lg:min-h-screen + 垂直居中：吸附到区块顶部后整块正好占满一屏，不会露出半截下一屏
  return (
    <section
      id="install-skill"
      className="snap-screen w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 border-y transition-colors duration-300 border-gray-200 bg-white dark:border-gray-800 dark:bg-[#1a1a1a] lg:min-h-screen lg:flex lg:items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header —— eyebrow 沿用 Hero 的「实心方块 + 大写字距」，全站同一套 */}
        <div ref={headerRef} className={headerInView ? 'animate-fade-up-blur' : 'opacity-0'}>
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-[#FF9F1C] shrink-0" />
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
              {t.install.kicker}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-black dark:text-white">
            {t.install.title}
          </h2>
          <p className="text-sm sm:text-base mt-3 sm:mt-4 max-w-3xl leading-relaxed text-gray-600 dark:text-gray-400">
            {t.install.subtitle}
          </p>
        </div>

        {/* 两种装法：没有卡片外框，靠编号 + 一横一竖两条 hairline 分栏。
            竖线上接这里的 border-t、下接参数表的 border-t，两端都落在别的线上；
            交给 grid 自己画（border-l）的话，线长会等于较高那栏的内容高度，
            短的那栏下方就凭空吊一截，看着像没画完 */}
        {/* 结构线（border-t + 中缝竖线）不参与动画立即就位，内容按 01 → 02 → 参数表
            三档 90ms 步进落座（对齐 SceneGuide 的 stagger 语法），标题档为 0ms */}
        <div
          ref={bodyRef}
          className="relative mt-6 sm:mt-12 pt-6 sm:pt-8 lg:pb-14 border-t border-gray-200 dark:border-gray-800"
        >
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-800"
          />
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* 01 让 AI 自己装 */}
            <div
              className={`lg:pr-10 xl:pr-14 ${bodyInView ? 'animate-fade-up-blur' : 'opacity-0'}`}
              style={{ animationDelay: '90ms' }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold tabular-nums text-[#FF9F1C]">01</span>
                <h3 className="text-base font-bold text-black dark:text-white">{t.install.methodALabel}</h3>
                <span className="text-[11px] text-gray-500 dark:text-gray-400">{t.install.methodABadge}</span>
              </div>
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                {t.install.methodAHint}
              </p>
              <div className="mt-4 sm:mt-5">
                <CopyBox
                  label={t.install.promptLabel}
                  action={
                    <CopyButton text={agentPrompt} label={t.install.copy} copiedLabel={t.install.copied} primary />
                  }
                >
                  <p className="min-w-0 px-3 py-3 text-[13px] sm:text-sm leading-relaxed break-words text-gray-800 dark:text-gray-200">
                    {agentPrompt}
                  </p>
                </CopyBox>
              </div>
              <a
                href={`${SITE}/skill.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-[11px] transition-colors text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white"
              >
                {t.install.inspect}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* 02 一行命令 */}
            <div
              className={`mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 lg:mt-0 lg:pt-0 lg:border-t-0 lg:pl-10 xl:pl-14 ${
                bodyInView ? 'animate-fade-up-blur' : 'opacity-0'
              }`}
              style={{ animationDelay: '180ms' }}
            >
              <div className="flex items-baseline gap-3">
                <span className="text-[11px] font-bold tabular-nums text-[#FF9F1C]">02</span>
                <h3 className="text-base font-bold text-black dark:text-white">{t.install.methodBLabel}</h3>
              </div>
              <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
                {t.install.methodBHint}
              </p>
              <div className="mt-4 sm:mt-5">
                <CopyBox
                  label="bash"
                  action={<CopyButton text={INSTALL_CMD} label={t.install.copy} copiedLabel={t.install.copied} />}
                >
                  {/* 桌面折行显示完整命令（等宽后横向放不下）；移动端保持横向滚，否则要多占两行、撑破一屏 */}
                  <pre className="min-w-0 px-3 py-3 overflow-x-auto sm:overflow-x-visible">
                    <code className="text-[11px] font-mono leading-relaxed whitespace-pre sm:whitespace-pre-wrap sm:break-words text-gray-700 dark:text-gray-300">
                      {INSTALL_CMD}
                    </code>
                  </pre>
                </CopyBox>
              </div>
              <p className="mt-3 text-[11px] leading-relaxed text-gray-500 dark:text-gray-400">
                {t.install.codexNote}{' '}
                <code className="font-mono text-gray-700 dark:text-gray-300">~/.codex/skills/design-vibes</code>
              </p>
            </div>
          </div>
        </div>

        {/* 参数表：装进去到底是什么代价，三个数说完。
            lg 下 mt-0——上面那块用 pb-14 顶住，上边框正好接住竖线的下端。
            border-y 而不是 border-t：下边框把这一栏封口，格子之间的竖线两端才都有着落。
            窄屏排成「标签左 / 数值右」的单行，竖着堆三个 label-over-value 会白吃掉半屏 */}
        <dl
          className={`mt-8 sm:mt-14 lg:mt-0 grid grid-cols-1 sm:grid-cols-3 border-y border-gray-200 dark:border-gray-800 ${
            bodyInView ? 'animate-fade-up-blur' : 'opacity-0'
          }`}
          style={{ animationDelay: '270ms' }}
        >
          {specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex items-baseline justify-between gap-3 py-3 sm:block sm:py-5 border-gray-200 dark:border-gray-800 ${
                i > 0 ? 'border-t sm:border-t-0 sm:border-l' : ''
              } ${i === 0 ? 'sm:pr-6' : i === specs.length - 1 ? 'sm:pl-6' : 'sm:px-6'}`}
            >
              <dt className="text-[10px] uppercase tracking-[0.15em] text-gray-500 dark:text-gray-400">
                {spec.label}
              </dt>
              <dd className="text-sm font-bold tabular-nums text-black dark:text-white sm:mt-1.5 sm:text-xl">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
