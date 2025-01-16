import { useState, useCallback } from 'react'

interface ResizableQuadrantsProps {
  children: React.ReactNode[]
}

export default function ResizableQuadrants({ children }: ResizableQuadrantsProps) {
  const [horizontalSplit, setHorizontalSplit] = useState(50)
  const [verticalSplit, setVerticalSplit] = useState(50)

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const container = e.currentTarget.getBoundingClientRect()
    setHorizontalSplit((e.clientX - container.left) / container.width * 100)
    setVerticalSplit((e.clientY - container.top) / container.height * 100)
  }, [])

  return (
    <div className="flex-1 relative" onMouseMove={handleMouseMove}>
      <div className="absolute top-0 left-0 w-full h-full flex">
        <div className="flex flex-col" style={{ width: `${horizontalSplit}%` }}>
          <div style={{ height: `${verticalSplit}%` }}>{children[0]}</div>
          <div style={{ height: `${100 - verticalSplit}%` }}>{children[2]}</div>
        </div>
        <div className="flex flex-col" style={{ width: `${100 - horizontalSplit}%` }}>
          <div style={{ height: `${verticalSplit}%` }}>{children[1]}</div>
          <div style={{ height: `${100 - verticalSplit}%` }}>{children[3]}</div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div
          className="absolute bg-gray-300 w-1 h-full cursor-col-resize"
          style={{ left: `${horizontalSplit}%` }}
        />
        <div
          className="absolute bg-gray-300 w-full h-1 cursor-row-resize"
          style={{ top: `${verticalSplit}%` }}
        />
      </div>
    </div>
  )
}

