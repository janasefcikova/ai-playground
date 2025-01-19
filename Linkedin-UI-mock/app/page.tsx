import { TopNavigation } from '@/components/top-navigation'
import { LeftSidebar } from '@/components/left-sidebar'
import { MainContent } from '@/components/main-content'
import { RightSidebar } from '@/components/right-sidebar'

export default function LinkedInDashboard() {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <TopNavigation />
      <main className="mx-auto max-w-[1128px] px-4 pt-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-12">
          <div className="md:col-span-1 lg:col-span-3">
            <LeftSidebar />
          </div>
          <div className="md:col-span-2 lg:col-span-6">
            <MainContent />
          </div>
          <div className="md:col-span-1 lg:col-span-3">
            <RightSidebar />
          </div>
        </div>
      </main>
    </div>
  )
}

