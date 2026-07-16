import { useState } from 'react';
import { Search } from 'lucide-react';
import { designStyles } from '../data/styles';
import { StyleCard } from '../components/StyleCard';
import { useAppStore } from '../store/appStore';
import { translations } from '../data/translations';
import { useInView } from '../hooks/useInView';

const allTags = ['全部', '极简', '现代', '经典', '艺术', '复古', '活泼', '前卫', '个性', '热门', '流行', '温暖'];
const allTagsEn = ['All', 'Minimal', 'Modern', 'Classic', 'Art', 'Vintage', 'Playful', 'Avant-garde', 'Distinctive', 'Hot', 'Trendy', 'Warm'];

export function StylesGrid() {
  const { language } = useAppStore();
  const defaultTag = language === 'zh' ? '全部' : 'All';
  const [selectedTag, setSelectedTag] = useState<string>(defaultTag);
  const [searchQuery, setSearchQuery] = useState('');
  const t = translations[language];
  // 卡片入场动画等网格进入视口才播，避免从 Hero 滚下来时早已播完
  const [gridRef, gridInView] = useInView<HTMLDivElement>();

  const tags = language === 'zh' ? allTags : allTagsEn;

  // 判断是否选择了"全部"标签（中文或英文）
  const isAllSelected = selectedTag === '全部' || selectedTag === 'All';

  const filteredStyles = designStyles.filter((style) => {
    const matchesTag = isAllSelected || style.tags.includes(selectedTag) || style.tagsEn.includes(selectedTag);
    const matchesSearch = searchQuery === '' ||
      style.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      style.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      style.tagsEn.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTag && matchesSearch;
  });

  return (
    <section
      id="styles-grid"
      className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-colors duration-300 bg-gray-50 dark:bg-[#0f0f0f]"
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
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-64 text-black dark:text-white">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.grid.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border outline-none transition-colors bg-white border-gray-200 text-black placeholder-gray-400 focus:border-[#FF9F1C] dark:bg-[#1a1a1a] dark:border-gray-800 dark:text-white dark:placeholder-gray-500 dark:focus:border-[#FF9F1C]"
              />
            </div>
          </div>

          {/* Filter Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full transition-all active:scale-95 ${
                  selectedTag === tag
                    ? 'bg-[#FF9F1C] text-white'
                    : 'bg-white text-gray-600 hover:text-black hover:bg-gray-100 border border-gray-200 dark:bg-[#1a1a1a] dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 dark:border-transparent'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="mt-4 text-sm text-gray-400 dark:text-gray-500">
            <span className="font-bold text-[#FF9F1C]">{filteredStyles.length}</span> {t.grid.count}
          </div>
        </div>

        {/* Grid */}
        {filteredStyles.length > 0 ? (
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
          </div>
        )}
      </div>
    </section>
  );
}
