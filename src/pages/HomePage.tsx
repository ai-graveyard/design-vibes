import { Hero } from '../sections/Hero';
import { StylesGrid } from '../sections/StylesGrid';
import { SceneGuide } from '../sections/SceneGuide';
import { Footer } from '../sections/Footer';
import { usePageMeta } from '../hooks/usePageMeta';
import { useAppStore } from '../store/appStore';
import { designStyles } from '../data/styles';

export function HomePage() {
  const { language } = useAppStore();
  const count = designStyles.length;
  usePageMeta(
    'Design Vibes · 网页设计风格大全',
    language === 'zh'
      ? `Design Vibes — ${count} 种经典网页设计风格的交互式指南：实况预览、单文件源码、Design Tokens、避坑指南与 AI 提示词。`
      : `Design Vibes — an interactive guide to ${count} classic web design styles: live previews, single-file source, design tokens, pitfalls, and AI prompts.`
  );
  return (
    <>
      <Hero />
      <StylesGrid />
      <SceneGuide />
      <Footer />
    </>
  );
}
