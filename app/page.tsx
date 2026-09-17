import Link from 'next/link'

const items = [
  { title: 'Discoveries', text: 'Local products, materials, craft and field knowledge.', href: '/discoveries' },
  { title: 'Community', text: 'People, places and stories from Sierra Leone.', href: '/community' },
  { title: 'Regions', text: 'Explore origins by region and local context.', href: '/regions' },
  { title: 'Buyers', text: 'Responsible sourcing requests and demand.', href: '/buyers' },
]

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-16 pt-12 lg:px-8 lg:pt-16">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Sierra Leone · global origins</p>
        <h1 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-neutral-950 sm:text-4xl">Discover what begins here.</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">A community for local knowledge, origins, responsible discovery and global connections.</p>
        <div className="mt-7 flex flex-wrap gap-2.5">
          <Link className="rounded-lg bg-neutral-950 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800" href="/discoveries">Explore discoveries</Link>
          <Link className="rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-900 transition hover:border-slate-300" href="/auth">Join community</Link>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(item => (
          <Link key={item.href} href={item.href} className="sl-surface group rounded-xl p-5 transition hover:-translate-y-0.5 hover:shadow-[10px_10px_24px_rgba(0,0,0,.07),-5px_-5px_14px_rgba(255,255,255,.95)]">
            <h2 className="text-base font-semibold text-neutral-950">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">{item.text}</p>
            <span className="mt-4 inline-block text-xs font-semibold text-slate-700">Open →</span>
          </Link>
        ))}
      </section>

      <section className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80" alt="Green landscape" className="h-72 w-full object-cover sm:h-96" />
        <div className="grid gap-4 p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Built around provenance</p>
            <p className="mt-2 max-w-2xl text-base leading-7 text-slate-700">Every origin starts with people, context and evidence. Discovery can remain community knowledge or move toward responsible sourcing only when it is appropriate.</p>
          </div>
          <Link href="/how-it-works" className="text-sm font-semibold text-neutral-950">How it works →</Link>
        </div>
      </section>
    </main>
  )
}
