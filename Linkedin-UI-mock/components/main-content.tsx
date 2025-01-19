import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ImageIcon, VideoIcon, FileTextIcon } from 'lucide-react'
import { Post } from '@/components/post-variants/post'
import { PollPost } from '@/components/post-variants/poll-post'
import { CarouselPost } from '@/components/post-variants/carousel-post'

export function MainContent() {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <Button variant="outline" className="h-12 w-full justify-start rounded-full text-gray-500">
            Start a post
          </Button>
        </div>
        <div className="mt-4 flex justify-between">
          <Button variant="ghost" className="gap-2">
            <ImageIcon className="h-5 w-5 text-blue-600" />
            Photo
          </Button>
          <Button variant="ghost" className="gap-2">
            <VideoIcon className="h-5 w-5 text-green-600" />
            Video
          </Button>
          <Button variant="ghost" className="gap-2">
            <FileTextIcon className="h-5 w-5 text-orange-600" />
            Write article
          </Button>
        </div>
      </Card>

      <Post />
      <PollPost />
      <CarouselPost />
    </div>
  )
}

