import { Press_Start_2P, Roboto } from 'next/font/google'

const pressStart2P = Press_Start_2P({ weight: '400', subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })

export function Header() {
  return (
    <header className="bg-background border-b border-border mb-8">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col items-center">
          <h1 className={`text-2xl ${pressStart2P.className} bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-yellow-400 mb-2`}>
            GameTracks
          </h1>
          <span className={`text-sm text-muted-foreground italic ${roboto.className}`}>
            Free Game Music Library
          </span>
        </div>
      </div>
    </header>
  )
}

