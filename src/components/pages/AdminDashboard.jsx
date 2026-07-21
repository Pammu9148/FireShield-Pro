import { useState } from 'react'
import { LayoutDashboard, Package, MessageSquare, Users, BarChart3, Settings, LogOut, Plus, Edit, Trash2, TrendingUp, DollarSign, ShoppingCart, AlertCircle } from 'lucide-react'

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'enquiries', label: 'Enquiries', icon: MessageSquare },
    { id: 'dealers', label: 'Dealers', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  const stats = [
    { label: 'Total Revenue', value: '$125,430', change: '+12%', icon: DollarSign, color: 'green' },
    { label: 'Total Orders', value: '1,234', change: '+8%', icon: ShoppingCart, color: 'blue' },
    { label: 'Active Dealers', value: '89', change: '+5%', icon: Users, color: 'purple' },
    { label: 'Pending Enquiries', value: '23', change: '-3%', icon: MessageSquare, color: 'orange' },
  ]

  const products = [
    { id: 1, name: 'Emergency Tripod LED Light Pro', price: 1299, stock: 45, status: 'Active' },
    { id: 2, name: 'Emergency Tripod LED Light Elite', price: 1799, stock: 32, status: 'Active' },
    { id: 3, name: 'Emergency Tripod LED Light Compact', price: 899, stock: 67, status: 'Active' },
  ]

  const enquiries = [
    { id: 1, name: 'John Smith', email: 'john@firedept.com', subject: 'Product Demo', status: 'Pending', date: '2024-01-15' },
    { id: 2, name: 'Sarah Johnson', email: 'sarah@airport.com', subject: 'Bulk Order', status: 'New', date: '2024-01-14' },
    { id: 3, name: 'Mike Wilson', email: 'mike@mining.com', subject: 'Technical Support', status: 'Resolved', date: '2024-01-13' },
  ]

  const dealers = [
    { id: 1, name: 'Emergency Supplies Inc', location: 'New York', status: 'Active', orders: 156 },
    { id: 2, name: 'Safety First Corp', location: 'California', status: 'Active', orders: 98 },
    { id: 3, name: 'Global Fire Solutions', location: 'Texas', status: 'Pending', orders: 0 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen hidden lg:block">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <nav className="p-4 space-y-2">
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
          <div className="absolute bottom-0 left-0 w-64 p-4 border-t border-gray-200 bg-white">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">
          {/* Mobile Header */}
          <div className="lg:hidden mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Dashboard</h1>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                        </div>
                        <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Enquiries</h3>
                  <div className="space-y-3">
                    {enquiries.slice(0, 3).map((enquiry) => (
                      <div key={enquiry.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div>
                          <p className="font-medium text-gray-900">{enquiry.name}</p>
                          <p className="text-sm text-gray-600">{enquiry.subject}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          enquiry.status === 'New' ? 'bg-blue-100 text-blue-700' :
                          enquiry.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {enquiry.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Top Dealers</h3>
                  <div className="space-y-3">
                    {dealers.slice(0, 3).map((dealer) => (
                      <div key={dealer.id} className="flex items-center justify-between py-2 border-b border-gray-100">
                        <div>
                          <p className="font-medium text-gray-900">{dealer.name}</p>
                          <p className="text-sm text-gray-600">{dealer.location}</p>
                        </div>
                        <span className="font-semibold text-gray-900">{dealer.orders} orders</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Product Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Product
                </button>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                        <td className="px-6 py-4 text-gray-900">${product.price}</td>
                        <td className="px-6 py-4 text-gray-900">{product.stock}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'enquiries' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Enquiries</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Email</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Subject</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {enquiries.map((enquiry) => (
                      <tr key={enquiry.id} className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{enquiry.name}</td>
                        <td className="px-6 py-4 text-gray-600">{enquiry.email}</td>
                        <td className="px-6 py-4 text-gray-900">{enquiry.subject}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            enquiry.status === 'New' ? 'bg-blue-100 text-blue-700' :
                            enquiry.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {enquiry.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600">{enquiry.date}</td>
                        <td className="px-6 py-4">
                          <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'dealers' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Dealer Management</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Dealer
                </button>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dealer</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Location</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Orders</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dealers.map((dealer) => (
                      <tr key={dealer.id} className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{dealer.name}</td>
                        <td className="px-6 py-4 text-gray-600">{dealer.location}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            dealer.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {dealer.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-900">{dealer.orders}</td>
                        <td className="px-6 py-4">
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Analytics</h2>
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Sales Overview</h3>
                  <div className="h-64 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                      <p className="text-gray-600">Sales Chart</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Traffic Sources</h3>
                  <div className="h-64 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 text-secondary-400 mx-auto mb-2" />
                      <p className="text-gray-600">Traffic Chart</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                      <input type="text" defaultValue="FireShield Pro" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input type="email" defaultValue="info@fireshieldpro.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email notifications for new orders</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Email notifications for new enquiries</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600 rounded" />
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
