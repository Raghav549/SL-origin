'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function NewBuyerRequest() {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [quantity, setQuantity] = useState('')
  const [destination, setDestination] = useState('')
  const [details, setDetails] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  async function submit(e: FormEvent) {
    e.preventDefault(); setLoading(true); setMessage('')
    const supabase = createClient(); const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/auth?next=/buyers/new-request'); return }
    const { error } = await supabase.from('buyer_requests').insert({ buyer_id: user.id, title, quantity: quantity || null, destination: destination || null, description: details, status: 'open' })
    setLoading(false)
    if (error) { setMessage(error.message); return }
    router.push('/buyers')
    router.refresh()
  }
  return <main className="mx-auto max-w-3xl px-5 py-12 lg:px-8"><button onClick={()=>router.back()} className="text-sm text-neutral-500 hover:text-neutral-900">← Back</button><h1 className="mt-6 text-3xl font-semibold tracking-tight">Create a buyer request</h1><p className="mt-2 text-sm leading-6 text-neutral-500">Describe what you need. No payment is taken here; this starts a sourcing conversation.</p><form onSubmit={submit} className="mt-8 grid gap-5"><label className="grid gap-2 text-sm font-medium">What are you looking for?<input required value={title} onChange={e=>setTitle(e.target.value)} className="border-b border-neutral-300 bg-transparent px-0 py-3 outline-none focus:border-neutral-900" placeholder="e.g. natural fibre samples"/></label><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-medium">Quantity<input value={quantity} onChange={e=>setQuantity(e.target.value)} className="border-b border-neutral-300 bg-transparent px-0 py-3 outline-none focus:border-neutral-900" placeholder="e.g. 20 kg"/></label><label className="grid gap-2 text-sm font-medium">Destination<input value={destination} onChange={e=>setDestination(e.target.value)} className="border-b border-neutral-300 bg-transparent px-0 py-3 outline-none focus:border-neutral-900" placeholder="Country / market"/></label></div><label className="grid gap-2 text-sm font-medium">Details<textarea required rows={7} value={details} onChange={e=>setDetails(e.target.value)} className="resize-y border-b border-neutral-300 bg-transparent px-0 py-3 outline-none focus:border-neutral-900" placeholder="Quality, intended use, timing, compliance requirements and anything else the sourcing team should know."/></label>{message && <p className="text-sm text-red-700">{message}</p>}<button disabled={loading} className="w-fit rounded-lg bg-neutral-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">{loading ? 'Submitting…' : 'Submit request'}</button></form></main>
}
