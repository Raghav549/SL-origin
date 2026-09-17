const DEFAULT_SUPABASE_URL = 'https://mfowrgnzxdzfmtsetfhf.supabase.co'
const DEFAULT_SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_p42odP5F6L14GJ1FTYrvpQ_PluERO84'

export const supabaseEnv = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL,
  publishableKey:
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    DEFAULT_SUPABASE_PUBLISHABLE_KEY,
}

export function assertSupabaseEnv() {
  if (!supabaseEnv.url || !supabaseEnv.publishableKey) {
    throw new Error('Missing Supabase environment variables')
  }
}
