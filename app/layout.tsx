import './globals.css'
import type { Metadata } from 'next'
import { SiteShell } from '@/components/site-shell'

export const metadata: Metadata = {
  title: 'SLorigins — Discover Sierra Leone with the people who know it',
  description: 'A community-powered Sierra Leone discovery, knowledge and responsible sourcing ecosystem.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>
}
