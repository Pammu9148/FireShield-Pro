import { CheckCircle, TrendingUp, Shield, Clock, DollarSign, Leaf, Award, Headphones } from 'lucide-react'

function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Superior illumination improves visibility in emergency situations, reducing accidents and improving response times.',
      details: ['Reduces accident risk by 40%', 'Improves response time', 'Enhances worker safety'],
    },
    {
      icon: TrendingUp,
      title: 'Increased Productivity',
      description: 'Quick deployment and long battery life allow emergency operations to continue without interruption.',
      details: ['60-second deployment', '12-hour continuous operation', 'Minimal downtime'],
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Low maintenance requirements and long LED lifespan significantly reduce total cost of ownership.',
      details: ['50,000 hour LED life', 'Minimal maintenance', 'Energy efficient'],
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Designed for quick setup in emergency situations where every second counts.',
      details: ['Tool-free setup', 'Auto-lock mechanism', 'One-person operation'],
    },
    {
      icon: Leaf,
      title: 'Environmentally Friendly',
      description: 'Energy-efficient LED technology and rechargeable batteries reduce environmental impact.',
      details: ['Low power consumption', 'Rechargeable batteries', 'RoHS compliant'],
    },
    {
      icon: Award,
      title: 'Certified Quality',
      description: 'All products meet international safety and quality standards for peace of mind.',
      details: ['CE certified', 'IP67 rated', 'ISO 9001 compliant'],
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Dedicated support team available around the clock for technical assistance.',
      details: ['24/7 phone support', 'Online resources', 'On-site training'],
    },
    {
      icon: CheckCircle,
      title: 'Proven Reliability',
      description: 'Trusted by 500+ fire departments with 10,000+ units deployed worldwide.',
      details: ['Field-tested', 'Customer approved', 'Battle-tested'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Benefits & Advantages</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Discover why FireShield Pro is the preferred choice for emergency lighting
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{benefit.description}</p>
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-primary-500 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">ROI Calculator</h2>
              <p className="text-gray-600 mb-8">
                Calculate your potential savings and return on investment with FireShield Pro emergency lighting solutions.
              </p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Number of Units</label>
                  <input type="number" defaultValue="10" className="w-full px-4.py-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="bg-white rounded-lg p-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Annual Lighting Cost</label>
                  <input type="number" defaultValue="5000" className="w-full px-4.py-2 border border-gray-300 rounded-lg" />
                </div>
                <button className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Calculate Savings
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Estimated Annual Savings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Energy Savings</span>
                  <span className="text-2xl font-bold text-green-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Maintenance Savings</span>
                  <span className="text-2xl font-bold text-green-600">$1,800</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Productivity Gain</span>
                  <span className="text-2xl font-bold text-green-600">$3,200</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total Annual Savings</span>
                    <span className="text-3xl font-bold text-primary-600">$7,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Benefits
