'use client'

import { useState } from 'react'
import { SongGrid } from '@/components/SongGrid'
import { songsData } from '@/lib/songs'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Home() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="container mx-auto py-6 px-4 flex-1">
        <SongGrid 
          songs={songsData} 
          currentlyPlaying={currentlyPlaying}
          setCurrentlyPlaying={setCurrentlyPlaying}
        />
      </main>
      <Footer />
    </div>
  )
}

