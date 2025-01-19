import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { InfoIcon } from 'lucide-react'

export function RightSidebar() {
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-base font-semibold">Add to your feed</h2>
          <InfoIcon className="h-4 w-4 text-gray-500" />
        </div>
        <div className="space-y-4 p-4 pt-0">
          {[
            {
              name: "Generative AI",
              description: "Company • Technology, Information and Internet",
            },
            {
              name: "The Female Lead",
              description: "Company • Non-profit Organizations",
            },
            {
              name: "We Work Remotely",
              description: "Company • Technology, Information and Internet",
            },
          ].map((item) => (
            <div key={item.name} className="flex items-start gap-2">
              <Avatar className="mt-1">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>{item.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <Button variant="outline" className="mt-2 rounded-full">
                  + Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card>
        <div className="p-4">
          <h2 className="text-base font-semibold text-left">Today's puzzle games</h2>
          <div className="mt-4 space-y-2">
            {[
              { name: "Tango", description: "Harmonize the grid" },
              { name: "Queens", description: "Crown each region" },
              { name: "Pinpoint", description: "Guess the category" },
              { name: "Crossclimb", description: "Unlock a trivia ladder" },
            ].map((game) => (
              <Button
                key={game.name}
                variant="ghost"
                className="w-full justify-start text-left"
              >
                <div className="flex flex-col items-start">
                  <div className="font-semibold">{game.name}</div>
                  <div className="text-sm text-gray-500">{game.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

