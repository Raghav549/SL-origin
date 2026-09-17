'use client'

import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import { Globe2, Menu, X } from 'lucide-react'
import { locales, Locale, translations } from '@/lib/i18n'

const links = [
  ['Discover', '/discoveries', 'discover'],
  ['Community', '/community', 'community'],
  ['Regions', '/regions', 'regions'],
  ['Buyers', '/buyers', 'buyers'],
  ['Stories', '/stories', 'stories'],
  ['Ecosystem', '/ecosystem', 'ecosystem'],
] as const

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('slorigins-locale') as Locale | null
    if (stored && stored in locales) setLocale(stored)
  }, [])

  useEffect(() => {
    window.localStorage.setItem('slorigins-locale', locale)
    document.documentElement.lang = locale
  }, [locale])

  const copy = useMemo(() => translations[locale], [locale])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-950 font-black text-white">SL</span>
            <span className="font-black tracking-tight">SLorigins</span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href, key]) => (
              <Link key={href} href={href} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {copy[key as keyof typeof copy] || label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <label className="hidden items-center gap-2 rounded-lg border border-slate-200 px-2.5 py-2 text-sm lg:flex">
              <Globe2 size={15} className="text-slate-500" />
              <select aria-label="Language" value={locale} onChange={e => setLocale(e.target.value as Locale)} className="bg-transparent outline-none">
                {Object.entries(locales).map(([code, item]) => <option key={code} value={code}>{item.native}</option>)}
              </select>
            </label>
            <Link href="/auth" className="hidden rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white lg:block">{copy.signIn}</Link>
            <button aria-label="Menu" className="rounded-lg border border-slate-200 p-2 lg:hidden" onClick={() => setOpen(v => !v)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            <div className="grid gap-2">
              {links.map(([label, href, key]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-50">{copy[key as keyof typeof copy] || label}</Link>)}
              <div className="mt-2 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2">
                <span className="text-sm font-medium">Language</span>
                <select aria-label="Language" value={locale} onChange={e => setLocale(e.target.value as Locale)} className="bg-transparent text-sm outline-none">
                  {Object.entries(locales).map(([code, item]) => <option key={code} value={code}>{item.native}</option>)}
                </select>
              </div>
              <Link href="/auth" onClick={() => setOpen(false)} className="mt-2 rounded-lg bg-slate-950 px-4 py-3 text-center text-sm font-semibold text-white">{copy.signIn}</Link>
            </div>
          </div>
        )}
      </header>
      {children}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 lg:px-8">
          <div>
            <div className="font-black">SLorigins</div>
            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">A Sierra Leone discovery, community and sourcing ecosystem built around evidence, provenance and responsible trade.</p>
          </div>
          <div><div className="font-semibold">Explore</div><div className="mt-3 grid gap-2 text-sm text-slate-500">{links.map(([label, href, key]) => <Link key={href} href={href}>{copy[key as keyof typeof copy] || label}</Link>)}</div></div>
          <div><div className="font-semibold">Company</div><div className="mt-3 grid gap-2 text-sm text-slate-500"><Link href="/about">About</Link><Link href="/how-it-works">How it works</Link><Link href="/verification">Verification</Link><Link href="/legal">Legal & sustainability</Link></div></div>
        </div>
      </footer>
    </div>
  )
}
