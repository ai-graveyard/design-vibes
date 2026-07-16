import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowLeftRight, Star, Check, CircleX, ExternalLink } from 'lucide-react';
import { designStyles, type DesignStyle } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { usePageMeta } from '../hooks/usePageMeta';
import { ThemeToggle } from '../components/ThemeToggle';
import { LanguageToggle } from '../components/LanguageToggle';

const selectClass =
  'w-full px-3 py-2 text-sm font-bold rounded-lg border outline-none transition-colors cursor-pointer bg-white border-gray-200 text-black focus:border-[#FF9F1C] dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white dark:focus:border-[#FF9F1C]';

/** 单侧对照列的数据区块 */
function CompareColumn({ style, language }: { style: DesignStyle; language: 'zh' | 'en' }) {
  const t = translations[language];
  const sectionTitle = 'text-[10px] font-bold uppercase tracking-wider mb-2 text-gray-400 dark:text-gray-500';

  return (
    <div className="min-w-0">
      {/* Rating & Tags */}
      <div className="flex items-center gap-2 flex-wrap mb-5">
        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#FF9F1C] text-white rounded">
          <Star className="w-3.5 h-3.5 fill-white" />
          <span className="text-sm font-bold tabular-nums">{style.rating.toFixed(1)}</span>
        </div>
        {(language === 'zh' ? style.tags : style.tagsEn).map((tag, i) => (
          <span key={i} className="px-2 py-1 text-[10px] uppercase tracking-wider rounded bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300">
            {tag}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-xs leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
        {language === 'zh' ? style.description : style.descriptionEn}
      </p>

      {/* Features */}
      <div className="mb-5">
        <h4 className={sectionTitle}>{t.modal.features}</h4>
        <ul className="space-y-1">
          {(language === 'zh' ? style.features : style.featuresEn).map((feature, i) => (
            <li key={i} className="text-[11px] leading-relaxed text-gray-700 dark:text-gray-300">
              · {feature.split(' - ')[0]}
            </li>
          ))}
        </ul>
      </div>

      {/* Use Cases */}
      <div className="mb-5">
        <h4 className={sectionTitle}>{t.modal.useCases}</h4>
        <div className="flex flex-wrap gap-1.5">
          {(language === 'zh' ? style.useCases : style.useCasesEn).slice(0, 4).map((useCase, i) => (
            <span key={i} className="px-2 py-1 text-[10px] bg-black text-white rounded">
              {useCase}
            </span>
          ))}
        </div>
      </div>

      {/* Pros */}
      <div className="mb-5">
        <h4 className={sectionTitle}>
          <span className="text-green-500">✓</span> {t.modal.pros}
        </h4>
        <ul className="space-y-1">
          {(language === 'zh' ? style.pros : style.prosEn).map((pro, i) => (
            <li key={i} className="text-[11px] flex items-start gap-1.5 text-gray-600 dark:text-gray-400">
              <Check className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
              {pro.split(' - ')[0]}
            </li>
          ))}
        </ul>
      </div>

      {/* Cons */}
      <div className="mb-5">
        <h4 className={sectionTitle}>
          <span className="text-red-500">✗</span> {t.modal.cons}
        </h4>
        <ul className="space-y-1">
          {(language === 'zh' ? style.cons : style.consEn).map((con, i) => (
            <li key={i} className="text-[11px] flex items-start gap-1.5 text-gray-600 dark:text-gray-400">
              <CircleX className="w-3 h-3 text-red-500 shrink-0 mt-0.5" />
              {con.split(' - ')[0]}
            </li>
          ))}
        </ul>
      </div>

      {/* Colors */}
      <div className="mb-5">
        <h4 className={sectionTitle}>{t.modal.colors}</h4>
        <div className="flex gap-2 flex-wrap">
          {style.colors.slice(0, 5).map((color, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-lg shadow-sm border border-black/10"
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
      </div>

      {/* Detail Link */}
      <Link
        to={`/style/${style.id}`}
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#FF9F1C] hover:underline"
      >
        {t.compare.openDetail}
        <ExternalLink className="w-3 h-3" />
      </Link>
    </div>
  );
}

export function ComparePage() {
  const { idA, idB } = useParams<{ idA: string; idB: string }>();
  const navigate = useNavigate();
  const { language } = useAppStore();
  const t = translations[language];

  const styleA = designStyles.find((s) => s.id === idA);
  const styleB = designStyles.find((s) => s.id === idB);

  usePageMeta(
    styleA && styleB
      ? `${language === 'zh' ? styleA.name : styleA.nameEn} vs ${language === 'zh' ? styleB.name : styleB.nameEn} · Design Vibes`
      : 'Design Vibes'
  );

  if (!styleA || !styleB) {
    return <Navigate to="/" replace />;
  }

  const setSide = (side: 'a' | 'b', id: string) => {
    const nextA = side === 'a' ? id : styleA.id;
    const nextB = side === 'b' ? id : styleB.id;
    navigate(`/compare/${nextA}/${nextB}`, { replace: true });
  };

  const swap = () => navigate(`/compare/${styleB.id}/${styleA.id}`, { replace: true });

  const options = designStyles.map((s) => (
    <option key={s.id} value={s.id}>
      {language === 'zh' ? s.name : s.nameEn}
    </option>
  ));

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#1a1a1a]">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b px-4 py-3 flex items-center justify-between bg-white border-gray-200 dark:bg-[#0f0f0f] dark:border-gray-800">
        <div className="flex items-center gap-2 md:gap-4">
          <Link
            to="/"
            className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-1.5 rounded-lg transition-colors text-gray-600 hover:text-black hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium hidden sm:inline">
              {language === 'zh' ? '返回' : 'Back'}
            </span>
          </Link>
          <div className="h-5 w-px hidden sm:block bg-gray-200 dark:bg-gray-700" />
          <h1 className="text-sm font-bold text-black dark:text-white">{t.compare.title}</h1>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 max-w-7xl mx-auto w-full">
        {/* Style Pickers */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 mb-4">
          <select
            value={styleA.id}
            onChange={(e) => setSide('a', e.target.value)}
            aria-label={t.compare.styleA}
            className={selectClass}
          >
            {options}
          </select>
          <button
            type="button"
            onClick={swap}
            title={t.compare.swap}
            aria-label={t.compare.swap}
            className="p-2 rounded-lg border transition-colors border-gray-200 text-gray-500 hover:text-black hover:bg-gray-100 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </button>
          <select
            value={styleB.id}
            onChange={(e) => setSide('b', e.target.value)}
            aria-label={t.compare.styleB}
            className={selectClass}
          >
            {options}
          </select>
        </div>

        {/* Live Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {[styleA, styleB].map((style) => (
            <div key={style.id} className="min-w-0">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="relative flex w-1.5 h-1.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-green-500" />
                  </span>
                  <span className="text-xs font-bold truncate text-black dark:text-white">
                    {language === 'zh' ? style.name : style.nameEn}
                  </span>
                  <span className="hidden lg:inline text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    {t.compare.preview}
                  </span>
                </div>
                <a
                  href={`/demos/${style.id}.html`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t.modal.openInNewTab}
                  aria-label={t.modal.openInNewTab}
                  className="p-1.5 rounded-lg transition-colors text-gray-400 hover:text-black hover:bg-gray-100 dark:text-gray-500 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="aspect-[16/10] rounded-lg overflow-hidden shadow-lg border bg-white border-gray-200 dark:border-gray-800">
                <iframe
                  src={`/demos/${style.id}.html`}
                  className="w-full h-full border-0"
                  title={`${style.nameEn} Demo`}
                  sandbox="allow-same-origin"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Data Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pb-10">
          <CompareColumn style={styleA} language={language} />
          <CompareColumn style={styleB} language={language} />
        </div>
      </main>
    </div>
  );
}
