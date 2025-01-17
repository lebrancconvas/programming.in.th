import { ReactNode } from 'react'

import { Metadata } from 'next'

import { Analytics } from '@vercel/analytics/react'
import { Inter, Noto_Sans_Thai } from 'next/font/google'

import '@/styles/index.css'
import '@/styles/style.scss'

import {
  LayoutWithTheme,
  Footer,
  Navbar,
  Providers
} from '@/components/RootLayout'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

const notoSans = Noto_Sans_Thai({
  variable: '--font-noto-sans-thai',
  subsets: ['thai'],
  display: 'swap'
})

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="th" className={`${inter.variable} ${notoSans.variable}`}>
      <body>
        <Providers>
          <LayoutWithTheme>
            <Navbar />
            <main className="flex min-h-screen w-screen flex-col">
              {children}
            </main>
            <Footer />
          </LayoutWithTheme>
        </Providers>
      </body>
      <Analytics />
    </html>
  )
}

export const metadata = {
  metadataBase: new URL('https://programming.in.th'),
  themeColor: '#000000',
  icons: {
    icon: '/assets/img/icon-512.png',
    apple: '/assets/img/icon-apple.png'
  },
  manifest: '/manifest.json',
  description:
    'PROGRAMMING.IN.TH provides you with the fundamentals of algorithmic problem-solving, an important skill to differentiate yourself as a programmer in an increasingly technologically advanced world.',
  openGraph: {
    title: 'PROGRAMMING.IN.TH',
    description:
      'PROGRAMMING.IN.TH provides you with the fundamentals of algorithmic problem-solving, an important skill to differentiate yourself as a programmer in an increasingly technologically advanced world.',
    url: 'https://programming.in.th',
    siteName: 'programming.in.th',
    images: [
      {
        url: '/assets/img/og.jpg',
        width: 1200,
        height: 630,
        alt: 'programming.in.th'
      }
    ],
    locale: 'th_TH',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'programming.in.th'
  }
} satisfies Metadata
