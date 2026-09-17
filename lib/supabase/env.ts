export const supabaseEnv = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
  publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? '',
}

export function assertSupabaseEnv() {
  if (!supabaseEnv.url || !supabaseEnv.publishableKey) {
    throw new Error('Missing Supabase environment variables')
  }
}
