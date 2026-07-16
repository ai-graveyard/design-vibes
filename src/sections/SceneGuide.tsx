import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { scenes, difficultyTiers } from '../data/scenes';
import { designStyles } from '../data/styles';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';

/** 选型指南：按场景 / 按技术难度推荐风格，chips 直链详情页 */
export function SceneGuide() {
  const { language, theme } = useAppStore();
  const t = translations[language];
  const isDark = theme === 'dark';

  const styleName = (id: string) => {
    const style = designStyles.find((s) => s.id === id);
    if (!style) return id;
    return language === 'zh' ? style.name : style.nameEn;
  };

  const chipClass = `inline-block px-2.5 py-1 text-[11px] rounded-full border transition-colors ${
    isDark
      ? 'border-gray-700 text-gray-300 hover:border-[#FF9F1C] hover:text-[#FF9F1C]'
      : 'border-gray-200 text-gray-600 hover:border-[#FF9F1C] hover:text-[#FF9F1C]'
  }`;

  return (
    <section className={`w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-colors duration-300 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <span className={`text-[10px] uppercase tracking-[0.2em] ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
            {t.guide.kicker}
          </span>
          <h2 className={`text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-black'}`}>
            {t.guide.title}
          </h2>
          <p className={`text-sm mt-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {t.guide.subtitle}
          </p>
        </div>

        {/* By Scenario */}
        <h3 className={`text-xs font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {t.guide.byScene}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-10">
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className={`rounded-xl border p-4 transition-colors ${
                isDark ? 'bg-[#0f0f0f] border-gray-800 hover:border-gray-700' : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg leading-none">{scene.icon}</span>
                <h4 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {language === 'zh' ? scene.name : scene.nameEn}
                </h4>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {scene.styleIds.map((id) => (
                  <Link key={id} to={`/style/${id}`} className={chipClass}>
                    {styleName(id)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* By Difficulty */}
        <h3 className={`text-xs font-bold uppercase tracking-wider mb-1 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
          {t.guide.byDifficulty}
        </h3>
        <p className={`text-[11px] mb-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          {t.guide.difficultyNote}
        </p>
        <div className={`rounded-xl border divide-y ${isDark ? 'border-gray-800 divide-gray-800 bg-[#0f0f0f]' : 'border-gray-200 divide-gray-200 bg-gray-50'}`}>
          {difficultyTiers.map((tier) => (
            <div key={tier.level} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 px-4 py-3">
              <div className="flex items-center gap-2 sm:w-36 shrink-0">
                <span className="flex">
                  {Array.from({ length: tier.level }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#FF9F1C] text-[#FF9F1C]" />
                  ))}
                </span>
                <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  {language === 'zh' ? tier.name : tier.nameEn}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tier.styleIds.map((id) => (
                  <Link key={id} to={`/style/${id}`} className={chipClass}>
                    {styleName(id)}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
