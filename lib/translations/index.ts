import { create } from 'zustand'

export type Language = {
  code: string
  name: string
}

type TranslationStore = {
  currentLanguage: Language
  setLanguage: (language: Language) => void
}

export const useTranslationStore = create<TranslationStore>((set) => ({
  currentLanguage: { code: 'en', name: 'English' },
  setLanguage: (language) => set({ currentLanguage: language })
}))