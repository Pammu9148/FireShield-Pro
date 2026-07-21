import { Play, Download, Calendar, Phone, Users } from 'lucide-react'
import { useState } from 'react'

function LeadGenerationButtons() {
  const [activeModal, setActiveModal] = useState(null)

  const actions = [
    {
      icon: Play,
      title: 'Request Demo',
      description: 'Schedule a live demonstration of our products',
      color: 'bg-blue-500 hover:bg-blue-600',
      modal: 'demo'
    },
    {
      icon: Phone,
      title: 'Get Quotation',
      description: 'Receive a customized price quote',
      color: 'bg-green-500 hover:bg-green-600',
      modal: 'quotation'
    },
    {
      icon: Users,
      title: 'Become Dealer',
      description: 'Join our dealer network',
      color: 'bg-purple-500 hover:bg-purple-600',
      modal: 'dealer'
    },
    {
      icon: Download,
      title: 'Download Brochure',
      description: 'Get detailed product information',
      color: 'bg-orange-500 hover:bg-orange-600',
      modal: 'brochure'
    },
    {
      icon: Calendar,
      title: 'Book Meeting',
      description: 'Schedule a consultation with our team',
      color: 'bg-red-500 hover:bg-red-600',
      modal: 'meeting'
    },
  ]

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
      {actions.map((action, index) => {
        const Icon = action.icon
        return (
          <button
            key={index}
            onClick={() => setActiveModal(action.modal)}
            className={`${action.color} text-white p-6 rounded-xl hover:shadow-lg transition-all`}
          >
            <Icon className="w-8 h-8 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">{action.title}</h3>
            <p className="text-sm opacity-90">{action.description}</p>
          </button>
        )
      })}

      {activeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">
              {actions.find(a => a.modal === activeModal)?.title}
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <textarea
                placeholder="Message (Optional)"
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="flex-1 px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default LeadGenerationButtons
