import './globals.css'
import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'SLorigins — Sierra Leone, discovered and connected',
  description: 'A community-powered discovery and sourcing ecosystem connecting Sierra Leone with global buyers.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>
}
