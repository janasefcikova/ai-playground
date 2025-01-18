'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Music, ChevronRight, Pause, Play, Repeat } from 'lucide-react'
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Song } from '@/lib/types'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SongCardProps {
  song: Song
  isCurrentlyPlaying: boolean
  setCurrentlyPlaying: (slug: string | null) => void
}

export function SongCard({ song, isCurrentlyPlaying, setCurrentlyPlaying }: SongCardProps) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isLooping, setIsLooping] = useState(false)

  useEffect(() => {
    const audioElement = new Audio(song.file.url)
    audioElement.addEventListener('ended', () => {
      if (!isLooping) {
        setCurrentlyPlaying(null)
      }
    })
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ''
      audioElement.removeEventListener('ended', () => setCurrentlyPlaying(null))
    }
  }, [song.file.url, setCurrentlyPlaying, isLooping])

  useEffect(() => {
    if (audio) {
      audio.loop = isLooping
    }
  }, [audio, isLooping])

  useEffect(() => {
    if (isCurrentlyPlaying && audio) {
      audio.play()
    } else if (audio) {
      audio.pause()
    }
  }, [isCurrentlyPlaying, audio])

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (!audio) return

    if (isCurrentlyPlaying) {
      setCurrentlyPlaying(null)
    } else {
      setCurrentlyPlaying(song.slug)
    }
  }, [audio, isCurrentlyPlaying, setCurrentlyPlaying, song.slug])

  const toggleLoop = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsLooping(!isLooping)
  }, [isLooping])

  return (
    <Link href={`/song/${song.slug}`}>
      <div className="group relative">
        <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 opacity-75 blur group-hover:opacity-100 transition duration-200" />
        <Card className="relative bg-background hover:bg-accent transition-colors dark">
          <CardHeader className="flex flex-row items-center gap-4 p-4">
            <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Music className="h-4 w-4 text-primary" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold leading-none">{song.name}</h3>
              <p className="text-sm text-muted-foreground">By {song.author}</p>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-4">
            <p className="text-sm text-muted-foreground line-clamp-2">
              {song.description || 'No description provided.'}
            </p>
            <div className="flex items-center justify-between">
              <Badge variant="secondary">{song.genre}</Badge>
              <Badge variant="secondary">{song.license}</Badge>
            </div>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center"
                      onClick={togglePlay}
                    >
                      {isCurrentlyPlaying ? (
                        <Pause className="h-4 w-4 text-primary" />
                      ) : (
                        <Play className="h-4 w-4 text-primary" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isCurrentlyPlaying ? 'Pause' : 'Play'}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`h-8 w-8 rounded-full ${isLooping ? 'bg-primary/20' : 'bg-primary/10'} hover:bg-primary/20 flex items-center justify-center`}
                      onClick={toggleLoop}
                    >
                      <Repeat className={`h-4 w-4 ${isLooping ? 'text-primary' : 'text-primary/60'}`} />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{isLooping ? 'Disable loop' : 'Enable loop'}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 px-2 text-sm flex items-center gap-1"
            >
              Details
              <ChevronRight className="h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Link>
  )
}

