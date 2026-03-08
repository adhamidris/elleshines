import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import AnnouncementBar from '@/components/AnnouncementBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartSidebar from '@/components/CartSidebar'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://elleshines.com'),
  title: {
    default: 'Elle Shines — Professional Skincare Tools',
    template: '%s | Elle Shines',
  },
  description:
    'Begin your journey to shiny, healthy skin with Elle Shines. Shop professional-grade skincare tools including nano ionic facial steamers, gua sha sets and ultrasonic skin scrubbers. Free shipping on orders over $50. Shipping to UK, US & Canada.',
  keywords: [
    'skincare tools',
    'facial steamer',
    'gua sha',
    'skin scrubber',
    'beauty tools',
    'face care',
    'skincare routine',
    'Elle Shines',
  ],
  authors: [{ name: 'Elle Shines LTD' }],
  creator: 'Elle Shines LTD',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Elle Shines',
    title: 'Elle Shines — Professional Skincare Tools',
    description:
      'Begin your journey to shiny, healthy skin. Professional-grade beauty tools. Free shipping on orders over $50.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elle Shines — Professional Skincare Tools',
    description:
      'Begin your journey to shiny, healthy skin. Professional-grade beauty tools.',
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
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <CartSidebar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
