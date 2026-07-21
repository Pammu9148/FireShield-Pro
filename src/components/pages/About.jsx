import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react'

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About FireShield Pro</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Building trusted emergency lighting solutions since 2015
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                FireShield Pro was founded with a simple mission: to provide firefighters and emergency responders with the most reliable, powerful, and easy-to-deploy lighting solutions.
              </p>
              <p className="text-gray-600 mb-4">
                Founded in 2015 by a team of engineers and former firefighters, we understand the critical importance of reliable equipment in emergency situations. Every product we build is tested in real-world conditions to ensure it performs when it matters most.
              </p>
              <p className="text-gray-600">
                Today, FireShield Pro is trusted by over 500 fire departments and emergency services organizations worldwide, with more than 10,000 units deployed in critical situations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center">
              <Award className="w-32 h-32 text-gray-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Eye className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the global leader in emergency lighting solutions, setting the standard for reliability, innovation, and safety in critical response situations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Target className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower emergency responders with cutting-edge lighting technology that enhances safety, improves response times, and saves lives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Heart className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Safety, innovation, reliability, and customer focus drive everything we do. We never compromise on quality.
              </p>
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Award, title: 'Industry Certified', desc: 'All products meet international safety standards' },
                { icon: Users, title: 'Expert Team', desc: 'Engineers and firefighters working together' },
                { icon: Globe, title: 'Global Reach', desc: 'Serving customers in 50+ countries' },
                { icon: Target, title: 'Customer Focused', desc: '24/7 support and dedicated account managers' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <item.icon className="w-10 h-10 text-primary-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
