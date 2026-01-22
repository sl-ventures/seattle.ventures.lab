import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Seattle Venture Labs - The Bridge to U.S. Scale',
  description: 'For the world\'s most ambitious founders, Seattle Venture Labs is the definitive gateway to the U.S. market and Tier-1 venture capital.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

