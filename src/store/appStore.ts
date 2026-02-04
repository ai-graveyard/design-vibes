import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = 'zh' | 'en';
export type Theme = 'light' | 'dark';

interface AppState {
  language: Language;
  theme: Theme;
  setLanguage: (lang: Language) => void;
  setTheme: (theme: Theme) => void;
  toggleLanguage: () => void;
  toggleTheme: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      language: 'zh',
      theme: 'light',
      setLanguage: (lang) => set({ language: lang }),
      setTheme: (theme) => set({ theme }),
      toggleLanguage: () => set((state) => ({ 
        language: state.language === 'zh' ? 'en' : 'zh' 
      })),
      toggleTheme: () => set((state) => ({ 
        theme: state.theme === 'light' ? 'dark' : 'light' 
      })),
    }),
    {
      name: 'designvibes-settings',
    }
  )
);
