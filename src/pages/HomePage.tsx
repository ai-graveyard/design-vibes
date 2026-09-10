import { useState } from 'react';
import { Hero } from '../sections/Hero';
import { StylesGrid } from '../sections/StylesGrid';
import { InstallSkill } from '../sections/InstallSkill';
import { Footer } from '../sections/Footer';
import { HomeNav } from '../components/HomeNav';
import { BackToTop } from '../components/BackToTop';
import { usePageMeta } from '../hooks/usePageMeta';
import { useHeroSnap } from '../hooks/useHeroSnap';
import { useAppStore } from '../store/appStore';
import { designStyles } from '../data/styles';

export function HomePage() {
  const { language } = useAppStore();
  const [installOpen, setInstallOpen] = useState(false);
  useHeroSnap(installOpen);
  const count = designStyles.length;
  usePageMeta(
    language === 'zh' ? 'Design Vibes · 网页改造提示词库' : 'Design Vibes · Web Restyle Prompt Library',
    language === 'zh'
      ? `浏览 ${count} 种网页设计风格的真实效果，复制完整改造提示词，在 Codex、Claude Code 或 Cursor 中直接修改自己的项目。`
      : `Preview ${count} real web design styles and copy complete restyle prompts for Codex, Claude Code, or Cursor.`
  );
  return (
    <>
      <HomeNav onInstall={() => setInstallOpen(true)} />
      <main>
        <Hero onInstall={() => setInstallOpen(true)} />
        <StylesGrid />
      </main>
      <Footer />
      <BackToTop disabled={installOpen} />
      {installOpen && <InstallSkill onClose={() => setInstallOpen(false)} />}
    </>
  );
}
