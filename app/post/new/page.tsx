'use client'

import { FormEvent, useRef, useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export default function NewPostPage() {
  const [text, setText] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState('')
  const input = useRef<HTMLInputElement>(null)

  async function submit(e: FormEvent) {
    e.preventDefault(); setStatus('')
    const supabase = createClient(); const { data: { user } } = await supabase.auth.getUser()
    if (!user) return setStatus('Please sign in first.')
    let image_url: string | null = null
    if (file) {
      const ext = file.name.split('.').pop() || 'jpg'
      const path = `${user.id}/${crypto.randomUUID()}.${ext}`
      const upload = await supabase.storage.from('slorigins-media').upload(path, file, { upsert: false })
      if (upload.error) return setStatus(upload.error.message)
      image_url = supabase.storage.from('slorigins-media').getPublicUrl(path).data.publicUrl
    }
    const { error } = await supabase.from('community_posts').insert({ author_id: user.id, body: text, image_url })
    if (error) return setStatus(error.message)
    setText(''); setFile(null); if (input.current) input.current.value=''; setStatus('Post published.')
  }

  return <main className="mx-auto max-w-2xl px-5 py-12"><h1 className="text-3xl font-semibold tracking-tight">Create a post</h1><p className="mt-2 text-slate-600">Share a note, image, local tip or discovery with the community.</p><form onSubmit={submit} className="mt-8 rounded-2xl border border-slate-200 p-6"><textarea value={text} onChange={e=>setText(e.target.value)} rows={7} placeholder="Write something…" className="w-full resize-y rounded-xl border border-slate-200 p-4 outline-none focus:border-slate-950"/><div className="mt-4"><input ref={input} type="file" accept="image/*" onChange={e=>setFile(e.target.files?.[0]||null)} /></div>{status&&<p className="mt-4 text-sm text-slate-600">{status}</p>}<button className="mt-6 rounded-lg bg-slate-950 px-4 py-3 font-semibold text-white">Publish post</button></form></main>
}
