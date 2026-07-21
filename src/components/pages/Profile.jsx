import { useState } from 'react'
import { User, MapPin, Phone, Mail, Lock, CreditCard, Package, Settings, Bell, LogOut, Edit } from 'lucide-react'

function Profile() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isEditing, setIsEditing] = useState(false)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  const orders = [
    { id: 'FS-2024-001', date: '2024-01-15', status: 'Delivered', total: 2598 },
    { id: 'FS-2024-002', date: '2024-02-20', status: 'Shipped', total: 1299 },
    { id: 'FS-2024-003', date: '2024-03-10', status: 'Processing', total: 1799 },
  ]

  const addresses = [
    {
      id: 1,
      type: 'Business',
      name: 'John Doe',
      company: 'Fire Department',
      address: '123 Emergency Lane',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
      default: true,
    },
    {
      id: 2,
      type: 'Shipping',
      name: 'John Doe',
      company: '',
      address: '456 Home Street',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201',
      country: 'USA',
      default: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">My Profile</h1>
          <p className="text-primary-100">Manage your account and preferences</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <h2 className="font-bold text-gray-900">John Doe</h2>
                    <p className="text-sm text-gray-600">john.doe@example.com</p>
                  </div>
                </div>
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          activeTab === tab.id
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        {tab.label}
                      </button>
                    )
                  })}
                </nav>
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      {isEditing ? 'Cancel' : 'Edit'}
                    </button>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        defaultValue="John Doe"
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 234 567 8900"
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        defaultValue="Fire Department"
                        disabled={!isEditing}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg disabled:bg-gray-50 disabled:text-gray-500"
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <div className="mt-6 flex gap-4">
                      <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                        Save Changes
                      </button>
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'orders' && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">{order.id}</h3>
                            <p className="text-sm text-gray-600">{order.date}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                              order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                              'bg-yellow-100 text-yellow-700'
                            }`}>
                              {order.status}
                            </span>
                            <span className="font-bold text-gray-900">${order.total.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Saved Addresses</h2>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Add New
                    </button>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                        {address.default && (
                          <span className="inline-block px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded mb-2">
                            Default
                          </span>
                        )}
                        <h3 className="font-semibold text-gray-900 mb-1">{address.name}</h3>
                        {address.company && <p className="text-sm text-gray-600 mb-2">{address.company}</p>}
                        <p className="text-sm text-gray-600">
                          {address.address}<br />
                          {address.city}, {address.state} {address.zip}<br />
                          {address.country}
                        </p>
                        <div className="mt-4 flex gap-2">
                          <button className="text-sm text-primary-600 hover:text-primary-700">Edit</button>
                          <button className="text-sm text-red-500 hover:text-red-600">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Payment Methods</h2>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Add New
                    </button>
                  </div>
                  <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center">
                    <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">No payment methods saved yet</p>
                    <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                      Add Payment Method
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                  <div className="space-y-4">
                    {[
                      'Order updates',
                      'Shipping notifications',
                      'Promotional emails',
                      'Product recommendations',
                      'Newsletter',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100">
                        <span className="text-gray-700">{item}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" defaultChecked={index < 3} className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <h3 className="font-medium text-gray-900">Change Password</h3>
                        <p className="text-sm text-gray-600">Update your password regularly</p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Change
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                      </div>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                        Enable
                      </button>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <div>
                        <h3 className="font-medium text-gray-900">Delete Account</h3>
                        <p className="text-sm text-gray-600">Permanently delete your account</p>
                      </div>
                      <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Profile
