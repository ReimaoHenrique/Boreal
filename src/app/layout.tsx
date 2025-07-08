import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Boreal Club - Paradise Edition',
  description: 'A experiência mais imersiva de música eletrônica do Brasil. Prepare-se para uma noite inesquecível no Paradise Beach Club.',
  keywords: ['música eletrônica', 'festa', 'boreal club', 'paradise edition', 'copacabana', 'rio de janeiro'],
  authors: [{ name: 'Boreal Club' }],
  openGraph: {
    title: 'Boreal Club - Paradise Edition',
    description: 'A experiência mais imersiva de música eletrônica do Brasil.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Boreal Club',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Boreal Club - Paradise Edition',
    description: 'A experiência mais imersiva de música eletrônica do Brasil.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

