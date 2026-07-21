import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MobileLayout from './MobileLayout'
import DesktopLayout from './DesktopLayout'
import AIChatbot from '../common/AIChatbot'
import Home from '../pages/Home'
import About from '../pages/About'
import Features from '../pages/Features'
import Specifications from '../pages/Specifications'
import Applications from '../pages/Applications'
import Gallery from '../pages/Gallery'
import Benefits from '../pages/Benefits'
import Comparison from '../pages/Comparison'
import Certifications from '../pages/Certifications'
import Testimonials from '../pages/Testimonials'
import FAQ from '../pages/FAQ'
import Contact from '../pages/Contact'
import Products from '../pages/Products'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import AdminDashboard from '../pages/AdminDashboard'
import DealerPortal from '../pages/DealerPortal'

function AppLayout() {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <MobileLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dealer-portal" element={<DealerPortal />} />
          </Routes>
        </AnimatePresence>
      </MobileLayout>

      <DesktopLayout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/specifications" element={<Specifications />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/comparison" element={<Comparison />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/dealer-portal" element={<DealerPortal />} />
          </Routes>
        </AnimatePresence>
      </DesktopLayout>

      <AIChatbot />
    </div>
  )
}

export default AppLayout
