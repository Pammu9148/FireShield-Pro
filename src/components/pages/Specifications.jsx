import { Ruler, Weight, Zap, Battery, Thermometer, Droplets, Box, Radio } from 'lucide-react'

function Specifications() {
  const specs = {
    general: [
      { label: 'Model', value: 'FS-PRO-2024' },
      { label: 'Product Type', value: 'Emergency Tripod LED Light' },
      { label: 'Certification', value: 'CE, FCC, RoHS, IP67' },
      { label: 'Warranty', value: '2 Years Standard' },
    ],
    lighting: [
      { label: 'LED Output', value: '10,000 Lumens' },
      { label: 'Color Temperature', value: '5000K (Daylight)' },
      { label: 'Beam Angle', value: '120°' },
      { label: 'LED Lifespan', value: '50,000 Hours' },
      { label: 'CRI', value: '>90' },
    ],
    power: [
      { label: 'Battery Type', value: 'Lithium-ion 12V 20Ah' },
      { label: 'Runtime', value: '12 Hours (Full Brightness)' },
      { label: 'Charging Time', value: '4 Hours (Fast Charge)' },
      { label: 'Charging Input', value: '100-240V AC, 12V DC' },
      { label: 'Power Consumption', value: '100W Max' },
    ],
    physical: [
      { label: 'Height (Extended)', value: '2.5 meters' },
      { label: 'Height (Collapsed)', value: '0.8 meters' },
      { label: 'Weight', value: '8.5 kg' },
      { label: 'Material', value: 'Aluminum Alloy + ABS' },
      { label: 'Fold Size', value: '80cm x 20cm x 20cm' },
    ],
    environmental: [
      { label: 'Operating Temperature', value: '-30°C to +50°C' },
      { label: 'Storage Temperature', value: '-40°C to +60°C' },
      { label: 'Water Resistance', value: 'IP67' },
      { label: 'Impact Resistance', value: '1.5m Drop Test' },
      { label: 'Humidity', value: '10% - 95% RH' },
    ],
    connectivity: [
      { label: 'Bluetooth', value: 'BLE 5.0' },
      { label: 'Mobile App', value: 'iOS & Android Compatible' },
      { label: 'Control Range', value: '30 meters' },
      { label: 'Firmware Updates', value: 'Over-the-Air (OTA)' },
    ],
  }

  const sections = [
    { id: 'general', title: 'General Specifications', icon: Box },
    { id: 'lighting', title: 'Lighting Specifications', icon: Zap },
    { id: 'power', title: 'Power & Battery', icon: Battery },
    { id: 'physical', title: 'Physical Dimensions', icon: Ruler },
    { id: 'environmental', title: 'Environmental Ratings', icon: Thermometer },
    { id: 'connectivity', title: 'Connectivity & Control', icon: Radio },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Specifications</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Detailed technical specifications for the Emergency Tripod LED Light
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((section) => {
            const Icon = section.icon
            const sectionSpecs = specs[section.id]
            return (
              <div key={section.id} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-8 h-8 text-primary-600" />
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <table className="w-full">
                    <tbody>
                      {sectionSpecs.map((spec, index) => (
                        <tr
                          key={index}
                          className={`border-t border-gray-100 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                        >
                          <td className="px-6 py-4 font-medium text-gray-700 w-1/3">{spec.label}</td>
                          <td className="px-6 py-4 text-gray-900">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          })}

          <div className="bg-primary-50 rounded-xl p-8 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Need More Information?</h3>
            <p className="text-gray-600 mb-6">
              Download our detailed technical datasheet or contact our engineering team for custom specifications.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Download Datasheet
              </button>
              <button className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Engineering
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Specifications
