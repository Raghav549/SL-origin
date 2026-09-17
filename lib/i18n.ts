export const locales = {
  en: { name: 'English', native: 'English' },
  kri: { name: 'Krio', native: 'Krio' },
  tem: { name: 'Temne', native: 'Temne' },
  men: { name: 'Mende', native: 'Mende' },
} as const

export type Locale = keyof typeof locales
export type TranslationKey = keyof typeof translations.en

export const translations = {
  en: {
    discover: 'Discover',
    community: 'Community',
    regions: 'Regions',
    buyers: 'Buyers',
    stories: 'Stories',
    ecosystem: 'Ecosystem',
    signIn: 'Sign in',
    submit: 'Submit a discovery',
    search: 'Search',
  },
  kri: {
    discover: 'Disklov',
    community: 'Community',
    regions: 'Yu klos ples',
    buyers: 'Buyas',
    stories: 'Stori',
    ecosystem: 'Ecosistem',
    signIn: 'Sign in',
    submit: 'Send wan discovery',
    search: 'Luk fo am',
  },
  tem: {
    discover: 'Aŋa',
    community: 'Nɔŋɔi',
    regions: 'Ŋma',
    buyers: 'Pɛla ŋa',
    stories: 'Mɛŋɛi',
    ecosystem: 'Nɔŋɔiŋa',
    signIn: 'Yaa sign in',
    submit: 'Kɛ discovery',
    search: 'Pɛlɛ',
  },
  men: {
    discover: 'Kɛla',
    community: 'Ɲa la',
    regions: 'Ɲa gbɛlɛ',
    buyers: 'Maa kili',
    stories: 'Kɔi',
    ecosystem: 'Ɲa kɛla',
    signIn: 'Sign in',
    submit: 'Kɛ discovery',
    search: 'Faa',
  },
} satisfies Record<Locale, Record<string, string>>

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale][key]
}
