import { songsData } from '@/lib/songs'
import { SongDetails } from '@/components/SongDetails'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function SongPage({ params }: { params: { slug: string } }) {
  const song = songsData.find((s) => s.slug === params.slug)

  if (!song) {
    return <div>Song not found</div>
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto py-8 px-4 flex-1">
        <SongDetails song={song} />
      </main>
      <Footer />
    </div>
  )
}

