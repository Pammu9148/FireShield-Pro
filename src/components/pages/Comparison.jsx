import { Check, X } from 'lucide-react'

function Comparison() {
  const competitors = [
    { name: 'FireShield Pro', highlight: true },
    { name: 'Competitor A', highlight: false },
    { name: 'Competitor B', highlight: false },
  ]

  const features = [
    { name: 'Lumen Output', values: ['10,000', '8,000', '6,000'] },
    { name: 'Battery Life', values: ['12 hours', '8 hours', '6 hours'] },
    { name: 'Deployment Time', values: ['60 seconds', '120 seconds', '180 seconds'] },
    { name: 'IP Rating', values: ['IP67', 'IP65', 'IP54'] },
    { name: 'LED Lifespan', values: ['50,000 hrs', '30,000 hrs', '25,000 hrs'] },
    { name: 'Mobile App Control', values: ['Yes', 'No', 'No'] },
    { name: 'Bluetooth Connectivity', values: ['Yes', 'No', 'No'] },
    { name: 'Temperature Range', values: ['-30°C to +50°C', '-20°C to +40°C', '-10°C to +35°C'] },
    { name: 'Weight', values: ['8.5 kg', '12 kg', '15 kg'] },
    { name: 'Warranty', values: ['2 Years', '1 Year', '1 Year'] },
    { name: '24/7 Support', values: ['Yes', 'No', 'Limited'] },
    { name: 'Certifications', values: ['CE, FCC, RoHS', 'CE only', 'CE only'] },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Comparison</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            See how FireShield Pro compares to other emergency lighting solutions
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 bg-gray-50">Feature</th>
                  {competitors.map((competitor, index) => (
                    <th
                      key={index}
                      className={`px-6 py-4 text-center font-semibold ${
                        competitor.highlight
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-50 text-gray-900'
                      }`}
                    >
                      {competitor.name}
                      {competitor.highlight && (
                        <span className="block text-xs font-normal mt-1">Recommended</span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={index}
                    className={`border-t border-gray-100 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-gray-700">{feature.name}</td>
                    {feature.values.map((value, valueIndex) => (
                      <td
                        key={valueIndex}
                        className={`px-6 py-4 text-center ${
                          competitors[valueIndex].highlight
                            ? 'bg-primary-50 font-semibold text-primary-700'
                            : 'text-gray-900'
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-xl p-6 border-2 border-primary-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why FireShield Pro Wins</h3>
              <ul className="space-y-3">
                {[
                  'Highest lumen output',
                  'Longest battery life',
                  'Fastest deployment',
                  'Smart mobile control',
                  'Best warranty',
                  '24/7 support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <Check className="w-5 h-5 text-primary-600 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor A Limitations</h3>
              <ul className="space-y-3">
                {[
                  'Lower brightness',
                  'Shorter battery life',
                  'Slower deployment',
                  'No smart features',
                  'Limited warranty',
                  'No 24/7 support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitor B Limitations</h3>
              <ul className="space-y-3">
                {[
                  'Lowest brightness',
                  'Shortest battery life',
                  'Slowest deployment',
                  'No smart features',
                  'Limited warranty',
                  'Limited support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <X className="w-5 h-5 text-red-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Comparison
