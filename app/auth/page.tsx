'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'signin' | 'signup'>('signup')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('Contributor')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault(); setError(''); setLoading(true)
    const supabase = createClient()
    const result = mode === 'signup'
      ? await supabase.auth.signUp({ email, password, options: { data: { display_name: name, role } } })
      : await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (result.error) return setError(result.error.message)
    if (mode === 'signup' && !result.data.session) {
      setError('Account created. Check your email to verify it, then sign in.')
      setMode('signin')
      return
    }
    router.push('/home')
    router.refresh()
  }

  async function google() {
    setError(''); const supabase = createClient()
    const { error: authError } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback` } })
    if (authError) setError(authError.message)
  }

  return <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center"><div><p className="text-sm font-semibold text-slate-500">SLorigins account</p><h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight md:text-5xl">Join the community and make your origin part of the record.</h1><p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">Create a profile with your name, photo, role and place. After verification, your home becomes the community feed.</p></div><form onSubmit={submit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"><div className="flex rounded-lg bg-slate-50 p-1"><button type="button" className={`flex-1 rounded-md px-3 py-2 text-sm ${mode==='signup'?'bg-white shadow-sm font-semibold':''}`} onClick={()=>setMode('signup')}>Create account</button><button type="button" className={`flex-1 rounded-md px-3 py-2 text-sm ${mode==='signin'?'bg-white shadow-sm font-semibold':''}`} onClick={()=>setMode('signin')}>Sign in</button></div>{mode==='signup'&&<><label className="mt-6 block text-sm font-medium">Full name<input value={name} onChange={e=>setName(e.target.value)} required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-slate-950"/></label><label className="mt-4 block text-sm font-medium">I am a<select value={role} onChange={e=>setRole(e.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3"><option>Contributor</option><option>Maker / producer</option><option>Buyer</option><option>Researcher</option></select></label></>}<label className="mt-4 block text-sm font-medium">Email<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-slate-950"/></label><label className="mt-4 block text-sm font-medium">Password<input type="password" minLength={8} value={password} onChange={e=>setPassword(e.target.value)} required className="mt-2 w-full rounded-lg border border-slate-300 px-3 py-3 outline-none focus:border-slate-950"/></label>{error&&<p className="mt-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">{error}</p>}<button disabled={loading} className="mt-6 w-full rounded-lg bg-slate-950 px-4 py-3 font-semibold text-white disabled:opacity-50">{loading?'Please wait…':mode==='signup'?'Create account':'Sign in'}</button><button type="button" onClick={google} className="mt-3 w-full rounded-lg border border-slate-300 px-4 py-3 font-semibold">Continue with Google</button></form></div></main>
}
