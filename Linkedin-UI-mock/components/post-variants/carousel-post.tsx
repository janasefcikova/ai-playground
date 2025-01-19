"use client"
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MoreHorizontalIcon, ThumbsUpIcon, SendIcon, RepeatIcon, MessageCircleIcon, ChevronRightIcon, ChevronLeftIcon } from 'lucide-react'

export function CarouselPost() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <Card className="p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-gray-500">Suggested</span>
        <Button variant="ghost" size="icon">
          <MoreHorizontalIcon className="h-5 w-5" />
        </Button>
      </div>

      <div className="flex items-start justify-between">
        <div className="flex gap-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg" alt="Ashley Couto" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">Amber Dona</h3>
              <span className="text-sm text-gray-500">• 2nd</span>
            </div>
            <p className="text-sm text-gray-600">
              Career coach helping lift your career to next level up
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500">6d</span>
              <Button variant="link" className="h-auto p-0 text-blue-600">
                View my newsletter
              </Button>
            </div>
          </div>
        </div>
        <Button variant="outline" className="rounded-full text-blue-600">
          + Follow
        </Button>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">3 signs you're actually a perfectionist</h2>
        <p className="mt-1 text-gray-600">(Master these 3 steps to grow your career) ...more</p>

        <div className="relative mt-4">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold">Slide {currentSlide + 1}</h3>
                <p className="text-gray-600">Click arrows to navigate</p>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Button
              variant="secondary"
              size="icon"
              className="h-8 w-8 rounded-full bg-white shadow-lg"
              onClick={nextSlide}
            >
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
          
          {currentSlide > 0 && (
            <div className="absolute inset-y-0 left-4 flex items-center">
              <Button
                variant="secondary"
                size="icon"
                className="h-8 w-8 rounded-full bg-white shadow-lg"
                onClick={prevSlide}
              >
                <ChevronLeftIcon className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <span>👍😊🎯</span>
            <span>Peter Baniar and 2,647 others</span>
          </div>
          <div className="flex items-center gap-2">
            <span>256 comments</span>
            <span>•</span>
            <span>356 reposts</span>
          </div>
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

