import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon } from 'lucide-react'
import Image from "next/image"
import { NavigationMenu } from './navigation-menu'

export function TopNavigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-14 max-w-[1128px] items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/">
            <a href="https://www.vecteezy.com/free-png/linkedin-icon">Linkedin Icon PNGs by Vecteezy</a>
            <Image
                src="https://static.vecteezy.com/system/resources/previews/018/910/721/large_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"
                alt="LinkedIn"
                width={34}
                height={34}
                className="h-8 w-8 object-contain"
            />
          </Link>
          <div className="relative hidden md:block">
            <SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input
              type="search"
              placeholder="Search"
              className="h-9 w-[280px] bg-[#eef3f8] pl-8 placeholder:text-gray-600"
            />
          </div>
        </div>

        <NavigationMenu />

      </div>
    </header>
  )
}

