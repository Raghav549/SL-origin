import Link from 'next/link'

const items = [
  { slug: 'cocoa-fine-cacao', title: 'Cocoa & fine cacao', region: 'Eastern Province', type: 'Agriculture', image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'natural-fibres', title: 'Natural fibres', region: 'Northern Province', type: 'Materials', image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'palm-craftwork', title: 'Palm-derived craftwork', region: 'Southern Province', type: 'Craft & culture', image: 'https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'coffee-highlands', title: 'Highland coffee', region: 'Eastern Province', type: 'Agriculture', image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'clay-ceramics', title: 'Natural clay & ceramics', region: 'Western Area', type: 'Materials', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'spice-gardens', title: 'Aromatic spice crops', region: 'Northern Province', type: 'Agriculture', image: 'https://images.unsplash.com/photo-1509351631168-9b7d2ef0a7c9?auto=format&fit=crop&w=1200&q=85' },
]

export default function DiscoverPage() {
  return <main className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
    <header className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">Discover</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-900">What is here, and what can it become?</h1>
      <p className="mt-3 text-base leading-7 text-neutral-500">Explore people, materials, crops and craft stories with provenance and responsible-sourcing context.</p>
    </header>
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map(item => <Link key={item.slug} href={`/community/${item.slug}`} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,.07)]">
        <div className="aspect-[4/3] overflow-hidden bg-neutral-100"><img src={item.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"/></div>
        <div className="p-5"><div className="text-xs font-medium text-neutral-400">{item.type} · {item.region}</div><h2 className="mt-2 text-base font-semibold text-neutral-900">{item.title}</h2><p className="mt-2 text-sm text-neutral-500">Open discovery, verification, community context and sourcing options.</p></div>
      </Link>)}
    </div>
  </main>
}
