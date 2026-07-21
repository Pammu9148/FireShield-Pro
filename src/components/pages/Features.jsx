import { Zap, Shield, Clock, Battery, Thermometer, Droplets, Smartphone, Wrench } from 'lucide-react'

function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Ultra-Bright LED Output',
      description: '10,000 lumens of powerful illumination that cuts through smoke, fog, and darkness for maximum visibility in emergency situations.',
      specs: ['10,000 Lumens', '5000K Color Temperature', '120° Beam Angle']
    },
    {
      icon: Shield,
      title: 'IP67 Waterproof Rating',
      description: 'Fully protected against water immersion and dust ingress, ensuring reliable operation in the harshest weather conditions.',
      specs: ['IP67 Certified', 'Dust-tight', 'Water-resistant to 1m depth']
    },
    {
      icon: Clock,
      title: '60-Second Deployment',
      description: 'Rapid deployment system allows setup in under 60 seconds, critical when every second counts in emergency scenarios.',
      specs: ['Quick-release legs', 'Tool-free setup', 'Auto-lock mechanism']
    },
    {
      icon: Battery,
      title: 'Extended Battery Life',
      description: 'High-capacity lithium battery provides up to 12 hours of continuous operation on a single charge.',
      specs: ['12-hour runtime', 'Fast charging in 4 hours', 'Battery level indicator']
    },
    {
      icon: Thermometer,
      title: 'Extreme Temperature Range',
      description: 'Designed to operate in temperatures from -30°C to +50°C, suitable for all climate conditions.',
      specs: ['-30°C to +50°C', 'Thermal protection', 'Heat-resistant housing']
    },
    {
      icon: Droplets,
      title: 'Impact Resistant Design',
      description: 'Military-grade construction withstands drops, impacts, and rough handling in emergency environments.',
      specs: ['1.5m drop tested', 'Reinforced housing', 'Shock-absorbing base']
    },
    {
      icon: Smartphone,
      title: 'Smart Control System',
      description: 'Bluetooth-enabled control via mobile app for remote operation, brightness adjustment, and battery monitoring.',
      specs: ['Mobile app control', 'Remote monitoring', 'Brightness adjustment']
    },
    {
      icon: Wrench,
      title: 'Low Maintenance',
      description: 'Sealed LED modules and robust construction require minimal maintenance, reducing total cost of ownership.',
      specs: ['50,000 hour LED life', 'No bulb replacement', 'Self-cleaning design']
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Features</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Advanced features designed for emergency response professionals
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Specifications:</h4>
                    <ul className="space-y-2">
                      {feature.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features
