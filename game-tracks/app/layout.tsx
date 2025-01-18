import type { Metadata } from 'next'
import { Inter, Press_Start_2P, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GameTracks - Free Game Music Library',
  description: 'A collection of free music tracks for your games',
}

export { inter, pressStart2P, roboto }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

