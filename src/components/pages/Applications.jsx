import { Building2, Plane, Shield, Factory, Truck, Home, Users } from 'lucide-react'

function Applications() {
  const applications = [
    {
      icon: Shield,
      title: 'Fire Departments',
      description: 'Primary emergency lighting for fire scenes, rescue operations, and disaster response. Provides critical illumination in smoke-filled environments.',
      useCases: ['Fire scene illumination', 'Search and rescue', 'Disaster response', 'Training exercises'],
    },
    {
      icon: Plane,
      title: 'Airports',
      description: 'Emergency lighting for runway incidents, aircraft rescue, and airport security operations. Meets aviation safety standards.',
      useCases: ['Runway emergencies', 'Aircraft rescue', 'Security operations', 'Maintenance lighting'],
    },
    {
      icon: Factory,
      title: 'Industrial Facilities',
      description: 'Emergency lighting for industrial accidents, power outages, and maintenance operations in factories and plants.',
      useCases: ['Industrial accidents', 'Power outages', 'Maintenance operations', 'Safety drills'],
    },
    {
      icon: Building2,
      title: 'Defence & Military',
      description: 'Tactical lighting for military operations, base security, and field deployments. Rugged design for combat conditions.',
      useCases: ['Field operations', 'Base security', 'Training exercises', 'Emergency response'],
    },
    {
      icon: Truck,
      title: 'Police & Law Enforcement',
      description: 'Scene lighting for crime investigations, traffic accidents, and special operations. Portable and quick to deploy.',
      useCases: ['Crime scenes', 'Traffic accidents', 'Special operations', 'Crowd control'],
    },
    {
      icon: Home,
      title: 'Mining Operations',
      description: 'Underground and surface mine emergency lighting. Designed for harsh mining environments with explosion-proof options.',
      useCases: ['Underground emergencies', 'Surface operations', 'Rescue missions', 'Safety inspections'],
    },
    {
      icon: Factory,
      title: 'Oil & Gas',
      description: 'Emergency lighting for refineries, offshore platforms, and pipeline operations. Intrinsically safe models available.',
      useCases: ['Refinery emergencies', 'Offshore platforms', 'Pipeline incidents', 'Maintenance work'],
    },
    {
      icon: Building2,
      title: 'Hospitals & Healthcare',
      description: 'Backup emergency lighting for hospitals, clinics, and healthcare facilities during power outages and disasters.',
      useCases: ['Power outages', 'Disaster response', 'Field hospitals', 'Emergency rooms'],
    },
    {
      icon: Users,
      title: 'NGOs & Disaster Relief',
      description: 'Portable emergency lighting for disaster relief operations, refugee camps, and humanitarian missions worldwide.',
      useCases: ['Disaster relief', 'Refugee camps', 'Humanitarian missions', 'Field operations'],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Applications</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Trusted across diverse industries for critical emergency lighting needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Use Cases:</h4>
                    <ul className="space-y-2">
                      {app.useCases.map((useCase, ucIndex) => (
                        <li key={ucIndex} className="flex items-center text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {useCase}
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

      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Solutions Available</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We offer customized solutions for specialized applications. Contact our team to discuss your specific requirements.
          </p>
          <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
            Discuss Custom Requirements
          </button>
        </div>
      </section>
    </div>
  )
}

export default Applications
