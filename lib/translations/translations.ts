import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Language = {
  code: string;
  name: string;
};

type TranslationStore = {
  currentLanguage: Language;
  translations: Record<string, Record<string, string>>;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.videos": "Videos",
    "nav.contact": "Contact",
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.products": "产品",
    "nav.videos": "视频",
    "nav.contact": "联系我们",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Nosotros",
    "nav.products": "Productos",
    "nav.videos": "Videos",
    "nav.contact": "Contacto",
  },
  // Add other languages...
};

export const useTranslationStore = create<TranslationStore>()(
  persist(
    (set, get) => ({
      currentLanguage: { code: 'en', name: 'English' },
      translations,
      setLanguage: (language) => set({ currentLanguage: language }),
      t: (key: string) => {
        const { currentLanguage, translations } = get();
        return translations[currentLanguage.code]?.[key] || translations.en[key] || key; // Fallback to English or the key itself
      }
    }),
    {
      name: 'language-storage',
    }
  )
);