import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ноён Борх | Дээд зэрэглэлийн металл боловсруулалт ба аж үйлдвэрийн шийдэл',
  description:
    'Монголын тэргүүлэх дээд зэрэглэлийн ган боловсруулалт ба аж үйлдвэрийн барилгын компани. Бид дэлхийн түвшний металл бүтээц, тусгай боловсруулалт, аж үйлдвэрийн шийдлийг хүргэдэг.',
  keywords: [
    'ган боловсруулалт',
    'металл боловсруулалт',
    'аж үйлдвэрийн барилга',
    'Монгол',
    'металл бүтээц',
    'Ноён Борх',
    'noyn borkh',
  ],
  authors: [{ name: 'Ноён Борх ХХК' }],
  creator: 'Ноён Борх ХХК',
  metadataBase: new URL('https://noynborkh.mn'),
  openGraph: {
    title: 'Ноён Борх | Дээд зэрэглэлийн металл боловсруулалт',
    description:
      'Монголын тэргүүлэх дээд зэрэглэлийн ган боловсруулалт ба аж үйлдвэрийн барилгын компани.',
    url: 'https://noynborkh.mn',
    siteName: 'Ноён Борх',
    locale: 'mn_MN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ноён Борх | Дээд зэрэглэлийн металл боловсруулалт',
    description:
      'Монголын тэргүүлэх дээд зэрэглэлийн ган боловсруулалт ба аж үйлдвэрийн барилгын компани.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: '/apple-icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#111111',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="mn" className="bg-background" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster position="top-center" richColors closeButton />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
