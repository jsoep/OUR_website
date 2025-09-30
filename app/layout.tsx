import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://oxforduniracing.com'),
  title: {
    default: 'Oxford University Racing - Formula Student Team',
    template: '%s | Oxford University Racing',
  },
  description: 'Oxford University Racing is Oxford&apos;s Formula Student team, designing and building single-seater racing cars to compete in international competitions.',
  keywords: ['Oxford University', 'Formula Student', 'Racing', 'Engineering', 'Motorsport'],
  authors: [{ name: 'Oxford University Racing' }],
  creator: 'Oxford University Racing',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://oxforduniracing.com',
    title: 'Oxford University Racing - Formula Student Team',
    description: 'Oxford University Racing is Oxford&apos;s Formula Student team, designing and building single-seater racing cars to compete in international competitions.',
    siteName: 'Oxford University Racing',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Oxford University Racing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oxford University Racing - Formula Student Team',
    description: 'Oxford University Racing is Oxford&apos;s Formula Student team, designing and building single-seater racing cars to compete in international competitions.',
    images: ['/images/og-image.jpg'],
    creator: '@oxforduniracing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="afterInteractive"
        />
        <Script id="netlify-identity-init" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}