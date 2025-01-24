import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Language = {
  code: string
  name: string
}

type TranslationStore = {
  currentLanguage: Language
  translations: Record<string, Record<string, string>>
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.products": "Products",
    "nav.videos": "Videos",
    "nav.contact": "Contact",
    "home.hero.title": "Pure Water, Clean Future",
    "home.hero.subtitle": "Leading manufacturer of water treatment and purification systems",
    "home.cta.products": "Our Products",
    "home.cta.learnMore": "Learn More",
    // Add more translations
  },
  zh: {
    "nav.home": "首页",
    "nav.about": "关于我们",
    "nav.products": "产品",
    "nav.videos": "视频",
    "nav.contact": "联系我们",
    "home.hero.title": "纯净水，清洁未来",
    "home.hero.subtitle": "领先的水处理和净化系统制造商",
    "home.cta.products": "我们的产品",
    "home.cta.learnMore": "了解更多",
  },
  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Nosotros",
    "nav.products": "Productos",
    "nav.videos": "Videos",
    "nav.contact": "Contacto",
    "home.hero.title": "Agua Pura, Futuro Limpio",
    "home.hero.subtitle": "Fabricante líder de sistemas de tratamiento y purificación de agua",
    "home.cta.products": "Nuestros Productos",
    "home.cta.learnMore": "Más Información",
  },
  // Add other languages with their translations
}

export const useTranslationStore = create<TranslationStore>()(
  persist(
    (set, get) => ({
      currentLanguage: { code: 'en', name: 'English' },
      translations,
      setLanguage: (language) => set({ currentLanguage: language }),
      t: (key: string) => {
        const { currentLanguage, translations } = get()
        return translations[currentLanguage.code]?.[key] || translations.en[key] || key
      }
    }),
    {
      name: 'language-storage',
    }
  )
)