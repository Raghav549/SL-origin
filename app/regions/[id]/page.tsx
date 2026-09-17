import Link from 'next/link'
import { notFound } from 'next/navigation'

const regions: Record<string, { name: string; intro: string; highlights: string[] }> = {
  '1': { name: 'Western Area', intro: 'The coastal urban region around Freetown, with makers, trade activity and community stories.', highlights: ['Craft and design communities', 'Coastal sourcing context', 'Research and buyer connections'] },
  '2': { name: 'Eastern Province', intro: 'A major agricultural and mineral-rich region with diverse local production stories.', highlights: ['Cocoa and coffee pathways', 'Producer communities', 'Origin documentation'] },
  '3': { name: 'Northern Province', intro: 'A broad landscape of agriculture, fibres, crafts and local knowledge.', highlights: ['Natural fibres', 'Agricultural products', 'Community field notes'] },
  '4': { name: 'Southern Province', intro: 'Known for agricultural communities, coastal ecosystems and distinctive craft traditions.', highlights: ['Palm-derived craftwork', 'Community makers', 'Responsible sourcing'] },
  '5': { name: 'North West Province', intro: 'A region with growing community-led discovery and local production opportunities.', highlights: ['Producer stories', 'Materials and craft', 'Regional discovery'] },
}

export default async function RegionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const region = regions[id]
  if (!region) notFound()
  return <main className="mx-auto max-w-5xl px-5 py-12 lg:px-8">
    <Link href="/regions" className="text-sm font-medium text-neutral-500 hover:text-neutral-900">← All regions</Link>
    <header className="mt-6 max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">Region</p>
      <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900">{region.name}</h1>
      <p className="mt-3 text-base leading-7 text-neutral-500">{region.intro}</p>
    </header>
    <section className="mt-8 grid gap-3 sm:grid-cols-3">
      {region.highlights.map(item => <div key={item} className="border-b border-neutral-200 py-4"><div className="text-sm font-medium text-neutral-900">{item}</div><p className="mt-1 text-xs leading-5 text-neutral-500">Explore evidence, people and stories connected to this theme.</p></div>)}
    </section>
    <div className="mt-10 flex flex-wrap gap-2"><Link href="/discover" className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white">Discover products</Link><Link href="/community" className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold">Meet the community</Link><Link href="/buyers" className="rounded-lg border border-neutral-200 px-4 py-2 text-sm font-semibold">See buyer demand</Link></div>
  </main>
}
