import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Users, Award, CheckCircle, Play, Download, Calendar, Phone } from 'lucide-react'
import LeadGenerationButtons from '../common/LeadGenerationButtons'

function Home() {
  const features = [
    { icon: Zap, title: 'Ultra-Bright LED', description: '10,000 lumens output for maximum visibility' },
    { icon: Shield, title: 'IP67 Waterproof', description: 'Protected against water and dust' },
    { icon: Users, title: 'Easy Setup', description: 'Deploy in under 60 seconds' },
    { icon: Award, title: 'Certified Safe', description: 'Meets all safety standards' },
  ]

  const stats = [
    { value: '500+', label: 'Fire Departments' },
    { value: '10K+', label: 'Units Deployed' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ]

  const targetCustomers = [
    'Fire Departments',
    'Airports',
    'Industries',
    'Defence',
    'Police',
    'Mining',
    'Oil & Gas',
    'Hospitals',
    'NGOs',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-6">
                <span className="text-sm font-medium">🚀 New Generation Emergency Lighting</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Emergency Tripod LED Light for Firefighters
              </h1>
              <p className="text-lg md:text-xl text-primary-100 mb-8">
                Professional-grade emergency lighting solution designed for rapid deployment in critical situations. Trusted by fire departments worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  View Products
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Zap className="w-16 h-16 text-white" />
                    </div>
                    <p className="text-white font-semibold">Product Image</p>
                    <p className="text-primary-200 text-sm">Emergency Tripod LED Light</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose FireShield Pro?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built for the toughest conditions, our emergency lighting solutions deliver reliability when it matters most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional emergency lighting solutions for every scenario
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-gray-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Tripod LED Light Model {item}</h3>
                  <p className="text-gray-600 mb-4">Professional-grade emergency lighting with advanced features.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">$1,299</span>
                    <Link
                      to="/products"
                      className="text-primary-600 font-medium hover:text-primary-700"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Serving diverse sectors with reliable emergency lighting solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {targetCustomers.map((customer, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                <span className="text-sm font-medium text-gray-700">{customer}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose how you'd like to engage with us
            </p>
          </div>
          <LeadGenerationButtons />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enhance Your Emergency Response?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of fire departments and organizations that trust FireShield Pro for their emergency lighting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Sales
              <Phone className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-400 transition-colors"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
