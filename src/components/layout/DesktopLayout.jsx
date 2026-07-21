import useMediaQuery from '../hooks/useMediaQuery'
import DesktopNavbar from './DesktopNavbar'

function DesktopLayout({ children }) {
  const isDesktop = useMediaQuery('(min-width: 769px)')

  if (!isDesktop) return null

  return (
    <div className="min-h-screen bg-white">
      <DesktopNavbar />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

export default DesktopLayout
