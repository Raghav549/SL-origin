import Link from 'next/link'
import React from 'react'

const links=[['Discover','/discoveries'],['Community','/community'],['Regions','/regions'],['Buyers','/buyers'],['Stories','/stories'],['Ecosystem','/ecosystem']]

export function SiteShell({children}:{children:React.ReactNode}){
 return <div className="min-h-screen">
   <header className="sticky top-0 z-50 border-b border-sky-100/80 bg-white/80 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
      <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-white to-sky-100 font-black text-slate-900 shadow-[6px_6px_16px_rgba(40,100,130,.12),-4px_-4px_12px_#fff]">SL</span><span className="font-black tracking-tight">SLorigins</span></Link>
      <nav className="hidden items-center gap-5 lg:flex">{links.map(([label,href])=><Link key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-sky-700">{label}</Link>)}</nav>
      <Link href="/auth" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white shadow-sm">Sign in</Link>
    </div>
   </header>
   {children}
   <footer className="border-t border-sky-100 bg-white"><div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 lg:px-8"><div><div className="font-black">SLorigins</div><p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">A Sierra Leone discovery, community and sourcing ecosystem built around evidence, provenance and responsible trade.</p></div><div><div className="font-bold">Explore</div><div className="mt-3 grid gap-2 text-sm text-slate-500">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</div></div><div><div className="font-bold">Company</div><div className="mt-3 grid gap-2 text-sm text-slate-500"><Link href="/about">About</Link><Link href="/how-it-works">How it works</Link><Link href="/verification">Verification</Link><Link href="/legal">Legal & sustainability</Link></div></div></div></footer>
 </div>
}
