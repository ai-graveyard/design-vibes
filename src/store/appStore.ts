import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'zh' | 'en';
export type Theme = 'light' | 'dark';
export type PreviewDevice = 'desktop' | 'mobile';

interface AppState {
  language: Language;
  theme: Theme;
  previewDevice: PreviewDevice;
  isDetailsPanelCollapsed: boolean;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  setPreviewDevice: (device: PreviewDevice) => void;
  toggleDetailsPanel: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'zh',
      theme: 'light',
      previewDevice: 'desktop',
      isDetailsPanelCollapsed: false,
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => set({ theme }),
      toggleLanguage: () => set((state) => ({
        language: state.language === 'zh' ? 'en' : 'zh'
      })),
      toggleTheme: () => set((state) => ({
        theme: state.theme === 'light' ? 'dark' : 'light'
      })),
      setPreviewDevice: (device) => set({ previewDevice: device }),
      toggleDetailsPanel: () => set((state) => ({
        isDetailsPanelCollapsed: !state.isDetailsPanelCollapsed
      })),
    }),
    {
      name: 'designvibes-settings',
    }
  )
);
