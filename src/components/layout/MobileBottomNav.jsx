import { Home, Package, ShoppingBag, User } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

function MobileBottomNav() {
  const location = useLocation()

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/products', icon: Package, label: 'Products' },
    { path: '/cart', icon: ShoppingBag, label: 'Cart' },
    { path: '/profile', icon: User, label: 'Profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-4 transition-colors ${
                isActive ? 'text-primary-600' : 'text-gray-500'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'text-primary-600' : 'text-gray-500'}`} />
              <span className="text-xs mt-1">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default MobileBottomNav
