import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'What is the battery life of the Emergency Tripod LED Light?',
      answer: 'The FireShield Pro Emergency Tripod LED Light provides up to 12 hours of continuous operation on a single charge at full brightness. The battery can be fully recharged in approximately 4 hours using the included fast charger.',
    },
    {
      question: 'How long does it take to deploy the light?',
      answer: 'The light is designed for rapid deployment and can be fully set up in under 60 seconds. The quick-release legs and auto-lock mechanism allow one person to deploy the unit quickly in emergency situations.',
    },
    {
      question: 'Is the light waterproof and dust-resistant?',
      answer: 'Yes, the FireShield Pro has an IP67 rating, making it completely dust-tight and protected against water immersion up to 1 meter depth for 30 minutes. This makes it suitable for use in all weather conditions.',
    },
    {
      question: 'What is the brightness output of the LED light?',
      answer: 'The Emergency Tripod LED Light produces 10,000 lumens of bright, daylight-white illumination (5000K color temperature) with a 120° beam angle, providing excellent visibility in emergency situations.',
    },
    {
      question: 'Does the product come with a warranty?',
      answer: 'Yes, all FireShield Pro products come with a standard 2-year warranty covering manufacturing defects and component failures. Extended warranty options are available for purchase.',
    },
    {
      question: 'Can I control the light remotely?',
      answer: 'Yes, the FireShield Pro features Bluetooth connectivity and can be controlled via our mobile app (available for iOS and Android). You can adjust brightness, check battery status, and control multiple units remotely.',
    },
    {
      question: 'What temperature range can the light operate in?',
      answer: 'The light is designed to operate in extreme temperatures from -30°C to +50°C (-22°F to +122°F), making it suitable for use in diverse climates and environments.',
    },
    {
      question: 'Is the light suitable for hazardous environments?',
      answer: 'Yes, we offer intrinsically safe models specifically designed for use in hazardous environments such as oil refineries, chemical plants, and mining operations. Please contact us for specific hazardous area certifications.',
    },
    {
      question: 'What certifications does the product have?',
      answer: 'The FireShield Pro is CE certified, FCC compliant, RoHS compliant, and IP67 rated. It meets international safety and quality standards including ISO 9001:2015.',
    },
    {
      question: 'Do you offer bulk discounts for large orders?',
      answer: 'Yes, we offer competitive pricing for bulk orders and government tenders. Contact our sales team for custom quotations based on your specific requirements and volume.',
    },
    {
      question: 'How do I become a dealer?',
      answer: 'We welcome partnerships with qualified dealers and distributors. Visit our "Become Dealer" page or contact our business development team to discuss partnership opportunities and requirements.',
    },
    {
      question: 'What is the lead time for orders?',
      answer: 'Standard orders typically ship within 5-7 business days. Custom orders and large volumes may require additional lead time. Expedited shipping options are available for urgent requirements.',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Find answers to common questions about FireShield Pro products and services
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our support team is available 24/7 to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Contact Support
            </button>
            <button className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
