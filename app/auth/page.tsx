'use client'

import { FormEvent, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const steps = [
  { title: 'About you', fields: ['fullName', 'role', 'occupation'] },
  { title: 'Your place', fields: ['country', 'region', 'district', 'chiefdom'] },
  { title: 'Account', fields: ['email', 'password'] },
] as const

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'signup' | 'signin'>('signup')
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({ fullName: '', role: 'member', occupation: '', country: 'Sierra Leone', region: '', district: '', chiefdom: '', email: '', password: '' })
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const set = (key: keyof typeof form, value: string) => setForm(v => ({ ...v, [key]: value }))
  const valid = useMemo(() => {
    if (mode === 'signin') return !!form.email && form.password.length >= 8
    if (step === 1) return !!form.fullName && !!form.role && !!form.occupation
    if (step === 2) return !!form.country && !!form.region && !!form.district
    return /.+@.+\..+/.test(form.email) && form.password.length >= 8
  }, [form, mode, step])

  async function submit(e: FormEvent) {
    e.preventDefault(); setMessage('')
    if (mode === 'signup' && step < 3) { setStep(s => s + 1); return }
    setLoading(true)
    const supabase = createClient()
    const next = '/home'
    if (mode === 'signup') {
      const { data, error } = await supabase.auth.signUp({ email: form.email, password: form.password, options: { emailRedirectTo: `${window.location.origin}/auth/callback?next=/profile/setup`, data: { display_name: form.fullName, role: form.role, occupation: form.occupation, country: form.country, region: form.region, district: form.district, chiefdom: form.chiefdom } } })
      setLoading(false)
      if (error) return setMessage(error.message)
      if (!data.session) { setMessage('Check your SLorigins verification email. After verification, you will be returned to SLorigins.'); return }
      router.push('/profile/setup')
      return
    }
    const { data, error } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password })
    setLoading(false)
    if (error) return setMessage(error.message)
    if (!data.user?.email_confirmed_at) return setMessage('Please verify your SLorigins email before signing in.')
    router.push(next); router.refresh()
  }

  async function google() {
    const supabase = createClient(); setMessage('')
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: `${window.location.origin}/auth/callback?next=/profile/setup` } })
    if (error) setMessage(error.message)
  }

  return <main className="mx-auto max-w-5xl px-5 py-12 lg:px-8"><div className="max-w-xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">SLorigins account</p><h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">Join the community</h1><p className="mt-2 text-sm leading-6 text-neutral-500">A short three-step setup creates the profile used across your community home.</p></div><div className="mt-8 max-w-xl"><div className="mb-6 flex items-center gap-2 text-xs text-neutral-400">{steps.map((s,i)=><div key={s.title} className={`flex items-center gap-2 ${i+1 === step ? 'text-neutral-900' : ''}`}><span className={`grid h-6 w-6 place-items-center rounded-full border ${i+1 <= step ? 'border-neutral-900 bg-neutral-900 text-white' : 'border-neutral-300'}`}>{i+1}</span>{s.title}</div>)}</div><div className="mb-5 flex gap-2"><button type="button" onClick={()=>{setMode('signup');setStep(1);setMessage('')}} className={`rounded-lg px-3 py-2 text-sm ${mode==='signup'?'bg-neutral-900 text-white':'border border-neutral-200'}`}>Create account</button><button type="button" onClick={()=>{setMode('signin');setMessage('')}} className={`rounded-lg px-3 py-2 text-sm ${mode==='signin'?'bg-neutral-900 text-white':'border border-neutral-200'}`}>Sign in</button></div><form onSubmit={submit} className="space-y-5">{mode==='signup' && step===1 && <><Field label="Full name" value={form.fullName} onChange={v=>set('fullName',v)} /><Field label="What do you do?" value={form.occupation} onChange={v=>set('occupation',v)} placeholder="Maker, farmer, student, researcher…"/><Select label="Community role" value={form.role} onChange={v=>set('role',v)} options={[['member','Community member'],['contributor','Contributor'],['buyer','Buyer'],['researcher','Researcher'],['maker','Maker / producer']]}/></>}{mode==='signup' && step===2 && <><Field label="Country" value={form.country} onChange={v=>set('country',v)} /><Field label="Region / province" value={form.region} onChange={v=>set('region',v)} /><Field label="District" value={form.district} onChange={v=>set('district',v)} /><Field label="Chiefdom / town" value={form.chiefdom} onChange={v=>set('chiefdom',v)} /></>}{(mode==='signin' || step===3) && <><Field label="Email" type="email" value={form.email} onChange={v=>set('email',v)} /><Field label="Password" type="password" value={form.password} onChange={v=>set('password',v)} placeholder="At least 8 characters"/></>}{message && <div className="text-sm leading-6 text-neutral-600">{message}</div>}<div className="flex flex-wrap gap-2">{mode==='signup' && step>1 && <button type="button" onClick={()=>setStep(s=>s-1)} className="rounded-lg border border-neutral-200 px-4 py-3 text-sm font-semibold">Back</button>}<button disabled={!valid || loading} className="rounded-lg bg-neutral-900 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40">{loading ? 'Please wait…' : mode==='signin' ? 'Sign in' : step<3 ? 'Continue' : 'Create account'}</button></div></form>{mode==='signup' && <><div className="my-5 h-px bg-neutral-200"/><button type="button" onClick={google} className="w-full rounded-lg border border-neutral-200 px-4 py-3 text-sm font-semibold">Continue with Google</button></>}</div></main>
}

function Field({label,value,onChange,placeholder,type='text'}:{label:string;value:string;onChange:(v:string)=>void;placeholder?:string;type?:string}){return <label className="grid gap-2 text-sm font-medium text-neutral-900">{label}<input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="border-b border-neutral-300 bg-transparent px-0 py-3 outline-none placeholder:text-neutral-400 focus:border-neutral-900" required/></label>}
function Select({label,value,onChange,options}:{label:string;value:string;onChange:(v:string)=>void;options:string[][]}){return <label className="grid gap-2 text-sm font-medium text-neutral-900">{label}<select value={value} onChange={e=>onChange(e.target.value)} className="rounded-lg border border-neutral-200 bg-white px-3 py-3 outline-none focus:border-neutral-900">{options.map(([v,t])=><option key={v} value={v}>{t}</option>)}</select></label>}
