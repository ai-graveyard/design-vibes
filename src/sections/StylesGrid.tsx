import { useEffect, useRef, useState } from 'react';
import { StyleSelect } from '../components/StyleSelect';
import { Search } from 'lucide-react';
import { designStyles } from '../data/styles';
import { scenes, difficultyTiers } from '../data/scenes';
import { StyleCard } from '../components/StyleCard';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { useInView } from '../hooks/useInView';

const allTags = ['全部', '极简', '现代', '经典', '艺术', '复古', '活泼', '前卫', '个性', '热门', '流行', '温暖'];
const allTagsEn = ['All', 'Minimal', 'Modern', 'Classic', 'Art', 'Vintage', 'Playful', 'Avant-garde', 'Distinctive', 'Hot', 'Trendy', 'Warm'];

export function StylesGrid() {
  const { language } = useAppStore();
  const [selectedTagIndex, setSelectedTagIndex] = useState(0);
  const [selectedSceneId, setSelectedSceneId] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[language];
  // 卡片入场动画等网格进入视口才播，避免从 Hero 滚下来时早已播完
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  const tags = language === 'zh' ? allTags : allTagsEn;

  const selectedScene = scenes.find(scene => scene.id === selectedSceneId);
  const selectedTier = difficultyTiers.find(tier => String(tier.level) === selectedDifficulty);
  const hasFilters = selectedTagIndex !== 0 || selectedSceneId !== '' || selectedDifficulty !== '' || searchQuery !== '';
  const resetFilters = () => {
    setSelectedTagIndex(0);
    setSelectedSceneId('');
    setSelectedDifficulty('');
    setSearchQuery('');
  };

  const filteredStyles = designStyles.filter((style) => {
    const matchesTag = selectedTagIndex === 0 || style.tags.includes(allTags[selectedTagIndex]) || style.tagsEn.includes(allTagsEn[selectedTagIndex]);
    const matchesScene = !selectedScene || selectedScene.styleIds.includes(style.id);
    const matchesDifficulty = !selectedTier || selectedTier.styleIds.includes(style.id);
    const matchesSearch = searchQuery === '' ||
      style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      style.tagsEn.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesScene && matchesDifficulty && matchesSearch;
  });

  // 筛选反馈：结果集变化时整个网格轻微下沉淡入一次（WAAPI，不重挂载卡片）。
  // 依赖结果数而不是 searchQuery：逐字输入只在结果真的变了才脉冲一下
  const gridEl = useRef<HTMLDivElement | null>(null);
  const isFirstFilter = useRef(true);
  useEffect(() => {
    if (isFirstFilter.current) {
      isFirstFilter.current = false;
      return;
    }
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    gridEl.current?.animate(
      [
        { opacity: 0.4, transform: 'translateY(6px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 180, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
    );
  }, [selectedTagIndex, selectedSceneId, selectedDifficulty, filteredStyles.length]);

  return (
    <section
      id="styles-grid"
      className="scroll-mt-16 w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-colors duration-300 bg-gray-50 dark:bg-[#0f0f0f]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                {t.grid.styleLibrary}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-1 text-black dark:text-white">
                {t.grid.title}
              </h2>
              <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                {t.grid.subtitle}
              </p>
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64 text-black dark:text-white">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                aria-label={t.grid.searchPlaceholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.grid.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border outline-none transition-colors bg-white border-gray-200 text-black placeholder-gray-400 focus:border-[#FF9F1C] dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-[#FF9F1C]"
              />
            </div>
          </div>

          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:max-w-2xl">
            <StyleSelect label={t.grid.scene} showLabel value={selectedSceneId} onChange={setSelectedSceneId} options={[
              { value: '', label: t.grid.allScenes },
              ...scenes.map(scene => ({ value: scene.id, label: language === 'zh' ? scene.name : scene.nameEn })),
            ]} />
            <StyleSelect label={t.grid.difficulty} showLabel value={selectedDifficulty} onChange={setSelectedDifficulty} describedBy="difficulty-hint" options={[
              { value: '', label: t.grid.allDifficulties },
              ...difficultyTiers.map(tier => ({ value: String(tier.level), label: language === 'zh' ? tier.name : tier.nameEn })),
            ]} />
          </div>
          <p id="difficulty-hint" className="mb-4 text-[11px] text-gray-500 dark:text-gray-400">{t.guide.difficultyNote}</p>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <button
                key={tag}
                type="button"
                aria-pressed={selectedTagIndex === index}
                onClick={() => setSelectedTagIndex(index)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all active:scale-95 ${
                  selectedTagIndex === index
                    ? 'bg-action text-action-foreground'
                    : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200 dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 dark:border-transparent'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="mt-4 flex min-h-8 items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span role="status" aria-live="polite" aria-atomic="true">
              <span className="font-bold text-[#FF9F1C]">{filteredStyles.length}</span> {t.grid.count}
            </span>
            {hasFilters && <button type="button" onClick={resetFilters} className="min-h-8 text-xs underline underline-offset-4 hover:text-black dark:hover:text-white">{t.grid.reset}</button>}
          </div>
        </div>

        {/* Grid */}
        {filteredStyles.length > 0 ? (
          <div
            ref={(el) => {
              gridRef(el);
              gridEl.current = el;
            }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredStyles.map((style, index) => (
              <div
                key={style.id}
                className={gridInView ? 'animate-fade-up' : 'opacity-0'}
                style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
              >
                <StyleCard style={style} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 rounded-xl bg-white dark:bg-[#1a1a1a]">
            <p className="text-lg mb-2 text-gray-600 dark:text-gray-400">{t.grid.noResults}</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">{t.grid.noResultsDesc}</p>
            <button type="button" onClick={resetFilters} className="mt-4 rounded-lg bg-action px-4 py-3 text-sm font-semibold text-action-foreground hover:bg-action-hover active:bg-action-active">{t.grid.reset}</button>
          </div>
        )}
      </div>
    </section>
  );
}
