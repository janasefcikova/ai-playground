import { SongCard } from './SongCard'
import { Song } from '@/lib/types'

interface SongGridProps {
  songs: Song[]
  currentlyPlaying: string | null
  setCurrentlyPlaying: (slug: string | null) => void
}

export function SongGrid({ songs, currentlyPlaying, setCurrentlyPlaying }: SongGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {songs.map((song) => (
        <SongCard 
          key={song.slug} 
          song={song} 
          isCurrentlyPlaying={currentlyPlaying === song.slug}
          setCurrentlyPlaying={setCurrentlyPlaying}
        />
      ))}
    </div>
  )
}

