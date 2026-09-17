import Link from 'next/link'

export default function NotFound() {
  return <main className="mx-auto max-w-xl px-5 py-24 text-center"><div className="text-sm font-semibold text-slate-500">404</div><h1 className="mt-3 text-3xl font-semibold">That page is not part of the current SLorigins map.</h1><p className="mt-3 text-slate-600">Use the navigation to continue exploring the ecosystem.</p><Link href="/" className="mt-6 inline-block rounded-lg bg-slate-950 px-4 py-2 text-white">Back home</Link></main>
}
