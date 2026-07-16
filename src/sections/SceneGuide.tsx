import { Star } from 'lucide-react';
import { scenes, difficultyTiers } from '../data/scenes';
import { designStyles } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { StyleHoverChip } from '../components/StyleHoverChip';
import { useInView } from '../hooks/useInView';

const chipClass =
  'inline-block px-2.5 py-1 text-[11px] rounded-full border transition-colors border-gray-200 text-gray-600 hover:border-[#FF9F1C] hover:text-[#FF9F1C] dark:border-gray-700 dark:text-gray-300 dark:hover:border-[#FF9F1C] dark:hover:text-[#FF9F1C]';

/** 选型指南：按场景 / 按技术难度推荐风格，chips 直链详情页并支持 hover 弹出实况预览 */
export function SceneGuide() {
  const { language } = useAppStore();
  const t = translations[language];
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [sceneGridRef, sceneGridInView] = useInView<HTMLDivElement>();
  const [tierListRef, tierListInView] = useInView<HTMLDivElement>();

  const styleName = (id: string) => {
    const style = designStyles.find((s) => s.id === id);
    if (!style) return id;
    return language === 'zh' ? style.name : style.nameEn;
  };

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-colors duration-300 bg-white dark:bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className={`mb-8 sm:mb-10 ${headerInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
            {t.guide.kicker}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-black dark:text-white">
            {t.guide.title}
          </h2>
          <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
            {t.guide.subtitle}
          </p>
        </div>

        {/* By Scenario */}
        <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 text-gray-700 dark:text-gray-300 ${sceneGridInView ? 'animate-fade-up' : 'opacity-0'}`}>
          {t.guide.byScene}
        </h3>
        <div ref={sceneGridRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {scenes.map((scene, index) => (
            <div
              key={scene.id}
              className={`rounded-xl border p-4 transition-colors bg-gray-50 border-gray-200 hover:border-gray-300 dark:bg-[#0f0f0f] dark:border-gray-800 dark:hover:border-gray-700 ${sceneGridInView ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: `${Math.min(index, 6) * 70}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg leading-none">{scene.icon}</span>
                <h4 className="text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? scene.name : scene.nameEn}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {scene.styleIds.map((id) => (
                  <StyleHoverChip key={id} styleId={id} className={chipClass}>
                    {styleName(id)}
                  </StyleHoverChip>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* By Difficulty */}
        <div ref={tierListRef} className={tierListInView ? 'animate-fade-up' : 'opacity-0'}>
          <h3 className="text-xs font-bold uppercase tracking-wider mb-1 text-gray-700 dark:text-gray-300">
            {t.guide.byDifficulty}
          </h3>
          <p className="text-[11px] mb-4 text-gray-400 dark:text-gray-500">
            {t.guide.difficultyNote}
          </p>
          <div className="rounded-xl border divide-y border-gray-200 divide-gray-200 bg-gray-50 dark:border-gray-800 dark:divide-gray-800 dark:bg-[#0f0f0f]">
            {difficultyTiers.map((tier) => (
              <div key={tier.level} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3">
                <div className="flex items-center gap-2 sm:w-36 shrink-0">
                  <span className="flex">
                    {Array.from({ length: tier.level }).map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#FF9F1C] text-[#FF9F1C]" />
                    ))}
                  </span>
                  <span className="text-xs font-bold text-black dark:text-white">
                    {language === 'zh' ? tier.name : tier.nameEn}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {tier.styleIds.map((id) => (
                    <StyleHoverChip key={id} styleId={id} className={chipClass}>
                      {styleName(id)}
                    </StyleHoverChip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
