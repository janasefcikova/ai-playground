import { Button } from "@/components/ui/button"
import { BriefcaseIcon, HomeIcon, MessageCircleIcon, NetworkIcon, BadgeAlertIcon as NotificationIcon, UserIcon } from 'lucide-react'

export function NavigationMenu() {
  return (
    <nav className="flex items-center justify-between w-full max-w-md">
      <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5">
        <HomeIcon className="h-5 w-5" />
        <span className="text-xs">Home</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5">
        <NetworkIcon className="h-5 w-5" />
        <span className="text-xs">My Network</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5">
        <BriefcaseIcon className="h-5 w-5" />
        <span className="text-xs">Jobs</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5">
        <MessageCircleIcon className="h-5 w-5" />
        <span className="text-xs">Messaging</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5">
        <NotificationIcon className="h-5 w-5" />
        <span className="text-xs">Notifications</span>
      </Button>
      <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5">
        <UserIcon className="h-5 w-5" />
        <span className="text-xs">Me</span>
      </Button>
    </nav>
  )
}

