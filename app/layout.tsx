import type { Metadata } from 'next'
import { playfair, garamond, archivo } from '@/lib/fonts'
import { siteConfig } from '@/site.config'
import SiteHeader from '@/components/SiteHeader/SiteHeader'
import Footer from '@/components/Footer/Footer'
import Grain from '@/components/Grain/Grain'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://kcl-aiphi.com'),
  title: {
    default: `AIΦ — ${siteConfig.fullName}`,
    template: `%s | AIΦ`,
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    siteName: 'AIΦ',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${garamond.variable} ${archivo.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Grain />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
