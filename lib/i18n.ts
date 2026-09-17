export const locales = {
  en: { name: 'English', native: 'English' },
  kri: { name: 'Krio', native: 'Krio' },
  tem: { name: 'Temne', native: 'Temne' },
  men: { name: 'Mende', native: 'Mende' },
} as const

export type Locale = keyof typeof locales

export const translations: Record<Locale, Record<string, string>> = {
  en: { discover: 'Discover', community: 'Community', regions: 'Regions', buyers: 'Buyers', stories: 'Stories', ecosystem: 'Ecosystem', signIn: 'Sign in' },
  kri: { discover: 'Discover', community: 'Community', regions: 'Regions', buyers: 'Buyers', stories: 'Stories', ecosystem: 'Ecosystem', signIn: 'Sign in' },
  tem: { discover: 'Discover', community: 'Community', regions: 'Regions', buyers: 'Buyers', stories: 'Stories', ecosystem: 'Ecosystem', signIn: 'Sign in' },
  men: { discover: 'Discover', community: 'Community', regions: 'Regions', buyers: 'Buyers', stories: 'Stories', ecosystem: 'Ecosystem', signIn: 'Sign in' },
}
