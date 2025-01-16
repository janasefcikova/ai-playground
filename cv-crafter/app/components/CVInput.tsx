import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CVInputProps {
  cv: string
  setCV: (cv: string) => void
  isCollapsed: boolean
  setIsCollapsed: (isCollapsed: boolean) => void
}

export default function CVInput({ cv, setCV, isCollapsed, setIsCollapsed }: CVInputProps) {
  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'h-12' : 'h-1/5 min-h-[20vh]'}`}>
      <div className="flex justify-between items-center p-2 bg-gray-100">
        <h2 className="text-xl font-bold">CV Input</h2>
        <button onClick={toggleCollapse} className="p-2">
          {isCollapsed ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {!isCollapsed && (
        <textarea
          value={cv}
          onChange={(e) => setCV(e.target.value)}
          className="w-full h-[calc(100%-3rem)] p-2 resize-none"
          placeholder="Paste your CV here..."
        />
      )}
    </div>
  )
}

