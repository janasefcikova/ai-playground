import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookmarkIcon, GroupIcon, NewspaperIcon, CalendarIcon } from 'lucide-react'

export function LeftSidebar() {
  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div className="relative h-14 bg-[#a0b4b7]" />
        <div className="px-4 pb-4">
          <Avatar className="absolute -mt-[72px] h-[72px] w-[72px] border-2 border-white">
            <AvatarImage src="/placeholder.svg" alt="Profile picture" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="mt-8 space-y-0.5">
            <h2 className="text-base font-semibold">Jana Sefcikova</h2>
            <p className="text-sm text-gray-600">
              Software Engineer and Coach, remote worldwide/on-site Zurich
            </p>
            <p className="text-xs text-gray-500">Switzerland</p>
            <p className="text-xs text-gray-500">Charles University in Prague</p>
          </div>
          <div className="mt-4 space-y-2 border-t pt-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Profile viewers</span>
              <span className="font-semibold text-blue-600">105</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Post impressions</span>
              <span className="font-semibold text-blue-600">32</span>
            </div>
          </div>
        </div>
      </Card>

      <Card>
        <div className="space-y-1 p-4">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BookmarkIcon className="h-4 w-4" />
            Saved items
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <GroupIcon className="h-4 w-4" />
            Groups
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <NewspaperIcon className="h-4 w-4" />
            Newsletters
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <CalendarIcon className="h-4 w-4" />
            Events
          </Button>
        </div>
      </Card>
    </div>
  )
}

