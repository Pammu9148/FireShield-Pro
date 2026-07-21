import { Menu, Search, Bell } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function MobileAppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>

        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">FS</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">FireShield</span>
        </Link>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5 text-gray-700" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-200 bg-white">
          <nav className="py-2">
            <Link to="/about" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              About
            </Link>
            <Link to="/features" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Features
            </Link>
            <Link to="/specifications" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Specifications
            </Link>
            <Link to="/applications" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Applications
            </Link>
            <Link to="/gallery" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Gallery
            </Link>
            <Link to="/benefits" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Benefits
            </Link>
            <Link to="/comparison" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Comparison
            </Link>
            <Link to="/certifications" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Certifications
            </Link>
            <Link to="/testimonials" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Testimonials
            </Link>
            <Link to="/faq" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              FAQ
            </Link>
            <Link to="/contact" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default MobileAppBar
