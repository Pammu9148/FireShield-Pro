import useMediaQuery from '../hooks/useMediaQuery'
import MobileAppBar from './MobileAppBar'
import MobileBottomNav from './MobileBottomNav'

function MobileLayout({ children }) {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMobile) return null

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <MobileAppBar />
      <main className="flex-1 overflow-y-auto pb-20 scrollbar-hide">
        {children}
      </main>
      <MobileBottomNav />
    </div>
  )
}

export default MobileLayout
