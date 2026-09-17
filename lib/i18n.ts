export const locales = {
  en: { name: 'English', native: 'English' },
  kri: { name: 'Krio', native: 'Krio' },
  men: { name: 'Mende', native: 'Mende' },
  tem: { name: 'Temne', native: 'Temne' },
} as const

export type Locale = keyof typeof locales

export const translations = {
  en: { discover: 'Discover', community: 'Community', regions: 'Regions', buyers: 'Buyers', stories: 'Stories', ecosystem: 'Ecosystem', signIn: 'Sign in' },
  kri: { discover: 'Diskovah', community: 'Kɔmyuniti', regions: 'Plis dɛm', buyers: 'Buya dɛm', stories: 'Stori dɛm', ecosystem: 'Ekosistem', signIn: 'Sign in' },
  men: { discover: 'Nyehila', community: 'Nɔɔ', regions: 'Gbele', buyers: 'Maa', stories: 'Kɔi', ecosystem: 'Nyehila bɛlɛ', signIn: 'Sign in' },
  tem: { discover: 'Ŋma', community: 'Nɔŋɔi', regions: 'Ŋma ŋa', buyers: 'Pɛla', stories: 'Mɛŋɛi', ecosystem: 'Nɔŋɔiŋa', signIn: 'Sign in' },
} as const
