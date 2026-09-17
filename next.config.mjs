import type { Metadata } from 'next'
import './globals.css'
import { SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'SLorigins — Discover Sierra Leone',
  description: 'A community-powered discovery and sourcing ecosystem connecting Sierra Leone with the world.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>
}