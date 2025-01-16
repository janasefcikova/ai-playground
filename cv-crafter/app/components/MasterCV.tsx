import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface MasterCVProps {
  masterCV: string
  setMasterCV: (masterCV: string) => void
}

export default function MasterCV({ masterCV, setMasterCV }: MasterCVProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const toggleCollapse = () => setIsCollapsed(!isCollapsed)

  return (
    <div className={`transition-all duration-300 ease-in-out ${isCollapsed ? 'h-12' : 'h-1/5 min-h-[20vh]'}`}>
      <div className="flex justify-between items-center p-2 bg-gray-100">
        <h2 className="text-xl font-bold">Master CV</h2>
        <button onClick={toggleCollapse} className="p-2">
          {isCollapsed ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>
      {!isCollapsed && (
        <textarea
          value={masterCV}
          onChange={(e) => setMasterCV(e.target.value)}
          className="w-full h-[calc(100%-3rem)] p-2 resize-none"
          placeholder="Paste your master CV here..."
        />
      )}
    </div>
  )
}

