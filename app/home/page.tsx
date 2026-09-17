import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function HomePage() {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  if (!data.user) return <main className="mx-auto max-w-4xl px-5 py-20"><h1 className="text-3xl font-semibold">Your community home</h1><p className="mt-3 text-slate-600">Please sign in to access your home feed.</p><Link href="/auth" className="mt-6 inline-block rounded-lg bg-slate-950 px-4 py-2 text-white">Sign in</Link></main>
  return <main className="mx-auto max-w-5xl px-5 py-12 lg:px-8"><div className="flex items-end justify-between gap-4"><div><p className="text-sm text-slate-500">Welcome back</p><h1 className="mt-1 text-3xl font-semibold tracking-tight">Community home</h1><p className="mt-3 text-slate-600">Share what you know. Follow new origins. Discover people and places.</p></div><Link href="/post/new" className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white">Create post</Link></div><section className="mt-8 rounded-2xl border border-slate-200 p-6"><h2 className="text-lg font-semibold">Your profile</h2><div className="mt-3 grid gap-1 text-sm text-slate-600"><span>{data.user.user_metadata?.display_name || data.user.email}</span><span>{data.user.user_metadata?.role || 'Community member'}</span><span>{data.user.email}</span></div></section><section className="mt-6 rounded-2xl border border-slate-200 p-6"><h2 className="text-lg font-semibold">Community feed</h2><p className="mt-2 text-sm text-slate-500">Your personalized feed will appear here as members post discoveries, stories, images and field notes.</p><Link href="/community" className="mt-4 inline-block text-sm font-semibold">Browse community →</Link></section></main>
}
