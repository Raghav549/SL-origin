import Link from 'next/link'

const highlights = [
  {title:'Discover',href:'/discoveries',text:'Explore verified Sierra Leone origins, materials and products.'},
  {title:'Community',href:'/community',text:'Meet local contributors and follow new discoveries.'},
  {title:'Buyer desk',href:'/buyers',text:'Post demand and connect with verified sourcing workflows.'},
]

export default function Home(){
  return <main className="hero">
    <div className="hero-card depth-card">
      <div className="brand-mark">SL</div>
      <span className="eyebrow">SIERRA LEONE · GLOBAL ORIGINS</span>
      <h1>Discover what the world has not seen yet.</h1>
      <p className="lead">SLorigins connects Sierra Leonean communities, verified discoveries and international buyers through one transparent ecosystem.</p>
      <div className="hero-actions">
        <Link className="button primary" href="/discoveries">Explore discoveries</Link>
        <Link className="button secondary" href="/community">Join the community</Link>
      </div>
      <div className="highlight-grid">{highlights.map(item=><Link key={item.href} href={item.href} className="mini-card depth-card"><strong>{item.title}</strong><span>{item.text}</span></Link>)}</div>
    </div>
  </main>
}
