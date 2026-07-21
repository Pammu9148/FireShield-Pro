import { Star, Quote } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: 'Chief Michael Anderson',
      role: 'Fire Chief, Metro Fire Department',
      location: 'New York, USA',
      rating: 5,
      content: 'FireShield Pro has transformed our emergency response capabilities. The rapid deployment and exceptional brightness have significantly improved our operational efficiency during critical incidents.',
      image: null,
    },
    {
      name: 'Sarah Chen',
      role: 'Safety Director, International Airport',
      location: 'Singapore',
      rating: 5,
      content: 'We deployed FireShield Pro units across our airport emergency response fleet. The reliability and performance have exceeded our expectations. An essential tool for aviation safety.',
      image: null,
    },
    {
      name: 'James Wilson',
      role: 'Operations Manager, Mining Corp',
      location: 'Australia',
      rating: 5,
      content: 'The rugged design and IP67 rating make FireShield Pro perfect for our mining operations. These lights have proven themselves in the toughest underground conditions.',
      image: null,
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Emergency Response Coordinator',
      location: 'Mexico City, Mexico',
      rating: 5,
      content: 'During disaster relief operations, FireShield Pro units provided critical illumination when power infrastructure was compromised. Truly life-saving equipment.',
      image: null,
    },
    {
      name: 'Colonel Robert Hayes',
      role: 'Base Commander, Military Installation',
      location: 'Texas, USA',
      rating: 5,
      content: 'The military-grade construction and tactical features make FireShield Pro ideal for defense applications. Our units have performed flawlessly in field exercises.',
      image: null,
    },
    {
      name: 'Priya Sharma',
      role: 'Plant Manager, Petrochemical Industries',
      location: 'Mumbai, India',
      rating: 5,
      content: 'Intrinsically safe options for hazardous environments have been a game-changer for our refinery operations. Safety and reliability combined in one package.',
      image: null,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Hear from our satisfied customers across industries
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-primary-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Satisfied Customers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Become one of the 500+ organizations that trust FireShield Pro for their emergency lighting needs.
          </p>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { value: '500+', label: 'Fire Departments' },
              { value: '50+', label: 'Countries' },
              { value: '10K+', label: 'Units Deployed' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Request Reference
          </button>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
