import { useState } from 'react'
import { LayoutDashboard, Package, ShoppingCart, TrendingUp, FileText, Settings, LogOut, Download, AlertCircle } from 'lucide-react'

function DealerPortal() {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: ShoppingCart },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  const stats = [
    { label: 'Total Orders', value: '156', change: '+12%', icon: ShoppingCart, color: 'blue' },
    { label: 'Total Revenue', value: '$45,230', change: '+18%', icon: TrendingUp, color: 'green' },
    { label: 'Pending Orders', value: '8', change: '-2', icon: AlertCircle, color: 'orange' },
    { label: 'Products Available', value: '45', change: '+5', icon: Package, color: 'purple' },
  ]

  const orders = [
    { id: 'ORD-2024-001', date: '2024-01-15', items: 5, total: 6495, status: 'Delivered' },
    { id: 'ORD-2024-002', date: '2024-01-18', items: 3, total: 3897, status: 'Shipped' },
    { id: 'ORD-2024-003', date: '2024-01-20', items: 2, total: 2598, status: 'Processing' },
  ]

  const products = [
    { id: 1, name: 'Emergency Tripod LED Light Pro', dealerPrice: 999, retailPrice: 1299, stock: 45 },
    { id: 2, name: 'Emergency Tripod LED Light Elite', dealerPrice: 1399, retailPrice: 1799, stock: 32 },
    { id: 3, name: 'Emergency Tripod LED Light Compact', dealerPrice: 699, retailPrice: 899, stock: 67 },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm min-h-screen hidden lg:block">
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-900">Dealer Portal</h1>
            <p className="text-sm text-gray-600">Emergency Supplies Inc</p>
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
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Dealer Portal</h1>
            <p className="text-gray-600 mb-4">Emergency Supplies Inc</p>
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
                        <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'}`}>
                          {stat.change}
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  )
                })}
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  {orders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100">
                      <div>
                        <p className="font-medium text-gray-900">{order.id}</p>
                        <p className="text-sm text-gray-600">{order.date} • {order.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${order.total.toLocaleString()}</p>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                          order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Management</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Order ID</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Items</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id} className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                        <td className="px-6 py-4 text-gray-600">{order.date}</td>
                        <td className="px-6 py-4 text-gray-900">{order.items}</td>
                        <td className="px-6 py-4 font-bold text-gray-900">${order.total.toLocaleString()}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {order.status}
                          </span>
                        </td>
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

          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Catalog</h2>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dealer Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Retail Price</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stock</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Margin</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="border-t border-gray-100">
                        <td className="px-6 py-4 font-medium text-gray-900">{product.name}</td>
                        <td className="px-6 py-4 text-gray-900">${product.dealerPrice}</td>
                        <td className="px-6 py-4 text-gray-900">${product.retailPrice}</td>
                        <td className="px-6 py-4 text-gray-900">{product.stock}</td>
                        <td className="px-6 py-4 text-green-600 font-medium">
                          ${((product.retailPrice - product.dealerPrice) / product.retailPrice * 100).toFixed(0)}%
                        </td>
                        <td className="px-6 py-4">
                          <button className="px-3 py-1 bg-primary-600 text-white text-sm rounded-lg hover:bg-primary-700">
                            Order
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reports' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reports & Analytics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Sales Report', period: 'Monthly', icon: TrendingUp },
                  { title: 'Inventory Report', period: 'Weekly', icon: Package },
                  { title: 'Order History', period: 'Yearly', icon: ShoppingCart },
                  { title: 'Commission Report', period: 'Monthly', icon: FileText },
                  { title: 'Performance Report', period: 'Quarterly', icon: TrendingUp },
                  { title: 'Customer Report', period: 'Monthly', icon: FileText },
                ].map((report, index) => {
                  const Icon = report.icon
                  return (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{report.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{report.period}</p>
                      <button className="flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700">
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dealer Settings</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Company Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input type="text" defaultValue="Emergency Supplies Inc" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
                      <input type="email" defaultValue="contact@emergencysupplies.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input type="tel" defaultValue="+1 555 123 4567" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                      <input type="text" defaultValue="123 Business Ave, New York, NY" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Notification Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Order confirmation emails</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Low stock alerts</span>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-primary-600 rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Promotional emails</span>
                      <input type="checkbox" className="w-5 h-5 text-primary-600 rounded" />
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Save Changes
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default DealerPortal
