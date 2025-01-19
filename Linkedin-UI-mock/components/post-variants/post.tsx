import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoreHorizontalIcon, ThumbsUpIcon, SendIcon, RepeatIcon, MessageCircleIcon } from 'lucide-react'

export function Post() {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Miroslav Chochola" />
            <AvatarFallback>MC</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Janes H. Walter</h3>
              <span className="text-sm text-gray-500">• 2nd</span>
            </div>
            <p className="text-sm text-gray-500">CEO at FutureProof</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">11h</span>
              <Button variant="link" className="h-auto p-0 text-blue-600">
                Visit my store
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="rounded-full text-blue-600">
            + Follow
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontalIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-4">
        <p className="mb-4">
          During my training sessions, I'm often asked whether v0 or Claude is better. I use both paid versions and can explain how I leverage each tool and the specific tasks they perform best.
        </p>
        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg bg-[#1d2535]">
          <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
            <h1 className="text-3xl font-bold text-white">
              For prototypers working on daily iterations, which AI tool is more effective: v0 or Claude?
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Salome Ban  and 31 others</span>
          <span>•</span>
          <span>5 comments</span>
        </div>
        <div className="mt-4 flex justify-between border-t pt-4">
          <Button variant="ghost" className="gap-2">
            <ThumbsUpIcon className="h-5 w-5" />
            Like
          </Button>
          <Button variant="ghost" className="gap-2">
            <MessageCircleIcon className="h-5 w-5" />
            Comment
          </Button>
          <Button variant="ghost" className="gap-2">
            <RepeatIcon className="h-5 w-5" />
            Repost
          </Button>
          <Button variant="ghost" className="gap-2">
            <SendIcon className="h-5 w-5" />
            Share
          </Button>
        </div>
      </div>
    </Card>
  )
}

