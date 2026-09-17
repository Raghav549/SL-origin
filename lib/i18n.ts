export const locales = {
  en: { name: 'English', native: 'English' },
  kri: { name: 'Krio', native: 'Krio' },
  men: { name: 'Mende', native: 'Mende' },
  tem: { name: 'Temne', native: 'Temne' },
} as const

export type Locale = keyof typeof locales

type Copy = { discover:string; community:string; regions:string; buyers:string; stories:string; ecosystem:string; signIn:string; home:string; profile:string; settings:string; notifications:string; submit:string; language:string }

export const translations: Record<Locale, Copy> = {
  en: { discover:'Discover', community:'Community', regions:'Regions', buyers:'Buyers', stories:'Stories', ecosystem:'Ecosystem', signIn:'Sign in', home:'Home', profile:'Profile', settings:'Settings', notifications:'Notifications', submit:'Submit a discovery', language:'Language' },
  kri: { discover:'Diskovah', community:'Kɔmyuniti', regions:'Plis dɛm', buyers:'Buya dɛm', stories:'Stori dɛm', ecosystem:'Ekosistem', signIn:'Sign in', home:'Om', profile:'Profil', settings:'Set am', notifications:'Notifikeshɔn', submit:'Send wan discovery', language:'Langwej' },
  men: { discover:'Nyehila', community:'Nɔɔ', regions:'Gbele', buyers:'Maa', stories:'Kɔi', ecosystem:'Nyehila bɛlɛ', signIn:'Sign in', home:'Kɛlɛ', profile:'Yela', settings:'Kɛlɛma', notifications:'Tɔɔma', submit:'Kɛ discovery', language:'Kumase' },
  tem: { discover:'Ŋma', community:'Nɔŋɔi', regions:'Ŋma ŋa', buyers:'Pɛla', stories:'Mɛŋɛi', ecosystem:'Nɔŋɔiŋa', signIn:'Sign in', home:'Kɛlɛ', profile:'Ɔna', settings:'Fɛlɛ', notifications:'Tɔŋɔi', submit:'Kɛ discovery', language:'Kasa' },
}
