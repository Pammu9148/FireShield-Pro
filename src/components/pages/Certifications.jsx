import { Award, ShieldCheck, FileCheck, Globe } from 'lucide-react'

function Certifications() {
  const certifications = [
    {
      icon: Award,
      title: 'CE Certification',
      description: 'Conformité Européenne marking certifies compliance with European health, safety, and environmental protection standards.',
      details: ['EU Compliance', 'Safety Standards', 'Quality Assurance'],
    },
    {
      icon: ShieldCheck,
      title: 'IP67 Rating',
      description: 'Ingress Protection rating confirming the product is dust-tight and protected against water immersion up to 1 meter.',
      details: ['Dust-tight', 'Water-resistant', 'Durable Design'],
    },
    {
      icon: FileCheck,
      title: 'FCC Certification',
      description: 'Federal Communications Commission certification for electromagnetic interference and radio frequency compliance.',
      details: ['EMI Compliance', 'RF Safety', 'US Market Approved'],
    },
    {
      icon: Globe,
      title: 'RoHS Compliance',
      description: 'Restriction of Hazardous Substances directive compliance ensuring environmentally friendly manufacturing.',
      details: ['Lead-free', 'Environmentally Safe', 'Sustainable'],
    },
  ]

  const standards = [
    { name: 'ISO 9001:2015', description: 'Quality Management System' },
    { name: 'ISO 14001:2015', description: 'Environmental Management System' },
    { name: 'OHSAS 18001', description: 'Occupational Health and Safety' },
    { name: 'IEC 60598', description: 'Luminaires - General Requirements' },
    { name: 'UL 1598', description: 'Standard for Luminaires' },
    { name: 'EN 60598', description: 'European Luminaires Standard' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Standards</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Our commitment to quality, safety, and compliance
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{cert.description}</p>
                  <ul className="space-y-2">
                    {cert.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-xs text-gray-600">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Standards Compliance</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {standards.map((standard, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{standard.name}</h3>
                  <p className="text-sm text-gray-600">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Assurance Process</h2>
                <p className="text-gray-600 mb-6">
                  Every FireShield Pro product undergoes rigorous testing and quality control before reaching our customers.
                </p>
                <ul className="space-y-3">
                  {[
                    'Incoming material inspection',
                    'In-process quality checks',
                    'Final product testing',
                    'Random sample audits',
                    'Customer feedback integration',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <Award className="w-5 h-5 text-primary-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Download Certificates</h3>
                <div className="space-y-3">
                  {['CE Certificate', 'IP67 Test Report', 'FCC Compliance', 'RoHS Declaration'].map((doc, index) => (
                    <button
                      key={index}
                      className="w-full px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-left flex items-center justify-between"
                    >
                      <span>{doc}</span>
                      <span className="text-primary-600">↓</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Certifications
