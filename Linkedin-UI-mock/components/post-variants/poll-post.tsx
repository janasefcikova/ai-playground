import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoreHorizontalIcon, ThumbsUpIcon, SendIcon, RepeatIcon, MessageCircleIcon } from 'lucide-react'

export function PollPost() {
  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Startitup" />
            <AvatarFallback>SU</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Startitup</h3>
              <span className="text-sm text-gray-500">• 29,678 followers</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">11h</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <MoreHorizontalIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="mt-4">
        <h2 className="mb-2 text-xl font-semibold">How are you spending today?</h2>
        <p className="mb-4 text-sm text-gray-500">
          The author can see how you vote. Learn more
        </p>
        
        <div className="space-y-3">
          {[
            { text: "Relaxing at home 🧘‍♀️", votes: 35 },
            { text: "On a trip with family 🏞️", votes: 28 },
            { text: "Doing sports 🏃", votes: 20 },
            { text: "Working 💼", votes: 17 }
          ].map((option) => (
            <Button
              key={option.text}
              variant="outline"
              className="relative h-12 w-full justify-start overflow-hidden rounded-full"
            >
              <div
                className="absolute inset-0 bg-blue-50"
                style={{ width: `${option.votes}%` }}
              />
              <span className="relative z-10 px-4">{option.text}</span>
            </Button>
          ))}
        </div>

        <div className="mt-4 text-sm text-gray-500">
          398 votes • 1w left
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <span>3</span>
          <span>•</span>
          <span>2 comments</span>
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

