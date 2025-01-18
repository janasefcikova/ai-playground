'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Song } from '@/lib/types'
import Link from 'next/link'
import { Play, Pause, ChevronLeft, ExternalLink, Tag } from 'lucide-react'

interface SongDetailsProps {
  song: Song
}

export function SongDetails({ song }: SongDetailsProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audioElement = new Audio(song.file.url)
    audioElement.addEventListener('ended', () => setIsPlaying(false))
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ''
      audioElement.removeEventListener('ended', () => setIsPlaying(false))
    }
  }, [song.file.url])

  const togglePlay = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 opacity-75 blur"></div>
      <Card className="relative bg-black text-white">
        <CardHeader>
          <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="absolute top-4 left-4">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back
            </Button>
          </Link>
          <a 
            href={song.source} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute top-4 right-4 text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            Source
            <ExternalLink className="h-3 w-3" />
          </a>
          </div>
          <CardTitle className="text-2xl font-bold text-center mt-8">{song.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex justify-center">
              <Button
                onClick={togglePlay}
                variant="outline"
                size="lg"
                className="w-16 h-16 rounded-full"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8" />
                ) : (
                  <Play className="h-8 w-8" />
                )}
              </Button>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold">By {song.author}</p>
              <p className="text-sm text-gray-400">{song.published}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary">{song.genre}</Badge>
              <Badge variant="secondary">{song.license}</Badge>
            </div>
            <p className="text-center">{song.description}</p>
            <div className="grid gap-2">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Tag className="h-4 w-4" />
                  <span className="font-semibold">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {song.tags.map((tag) => (
                    <Button
                      key={tag}
                      variant="secondary"
                      size="sm"
                      className="h-7 rounded-full text-xs hover:bg-secondary/80"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-start">
          {song.copyright_notice && (
            <p className="text-xs text-gray-400 italic px-3 py-1">
              <strong className="font-semibold text-gray-300 mr-1">Copyright:</strong>
              {song.copyright_notice}
            </p>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

