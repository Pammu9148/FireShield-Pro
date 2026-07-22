import { useState } from 'react'
import { ShoppingCart, Heart, Star, Filter, SlidersHorizontal, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatINR } from "../../utils/currency";

function Products() {
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const products = [
    {
      id: 1,
      name: 'Emergency Tripod LED Light Pro',
      price: 24999,
      originalPrice: 27999,
      rating: 4.9,
      reviews: 156,
      category: 'Standard',
      image: null,
      features: ['10,000 Lumens', '12hr Battery', 'IP67 Rated'],
      badge: 'Best Seller',
      batteryBackup: '12 hours',
      brightness: '10,000 Lumens',
      warranty: '2 years',
      availability: 'In Stock',
      description: 'Professional-grade emergency lighting solution for fire departments and industrial applications.',
      specifications: {
        'LED Type': 'High-power COB LED',
        'Color Temperature': '6500K Cool White',
        'Beam Angle': '360°',
        'IP Rating': 'IP67 Waterproof',
        'Operating Temperature': '-20°C to +50°C',
        'Charging Time': '4 hours',
        'Material': 'Aluminum Alloy',
        'Weight': '8.5 kg',
      },
    },
    {
      id: 2,
      name: 'Emergency Tripod LED Light Elite',
      price: 1799,
      originalPrice: 1999,
      rating: 4.8,
      reviews: 98,
      category: 'Premium',
      image: null,
      features: ['15,000 Lumens', '18hr Battery', 'Smart Control'],
      badge: 'New',
    },
    {
      id: 3,
      name: 'Emergency Tripod LED Light Compact',
      price: 899,
      originalPrice: 999,
      rating: 4.7,
      reviews: 73,
      category: 'Compact',
      image: null,
      features: ['6,000 Lumens', '8hr Battery', 'Lightweight'],
      badge: null,
    },
    {
      id: 4,
      name: 'Intrinsically Safe Model',
      price: 2199,
      originalPrice: 2499,
      rating: 4.9,
      reviews: 45,
      category: 'Hazardous',
      image: null,
      features: ['10,000 Lumens', '12hr Battery', 'ATEX Certified'],
      badge: 'Special',
    },
    {
      id: 5,
      name: 'Solar Powered Model',
      price: 1599,
      originalPrice: 1799,
      rating: 4.6,
      reviews: 62,
      category: 'Eco',
      image: null,
      features: ['8,000 Lumens', 'Unlimited Runtime', 'Solar Panel'],
      badge: 'Eco',
    },
    {
      id: 6,
      name: 'Military Grade Model',
      price: 2499,
      originalPrice: 2799,
      rating: 5.0,
      reviews: 38,
      category: 'Military',
      image: null,
      features: ['12,000 Lumens', '24hr Battery', 'Rugged Design'],
      badge: 'Premium',
    },
  ]

  const categories = ['All', 'Standard', 'Premium', 'Compact', 'Hazardous', 'Eco', 'Military']

  const addToCart = (product) => {
    setCart([...cart, product])
    alert(`${product.name} added to cart!`)
  }

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter(id => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Our Products</h1>
          <p className="text-primary-100">Professional emergency lighting solutions</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters - Mobile */}
          <div className="md:hidden mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Filters - Desktop */}
          <div className="hidden md:flex items-center justify-between mb-8">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid - Desktop */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}
                <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-gray-400" />
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                      }`}
                    />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-primary-600">{formatINR(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-400 line-through ml-2">{formatINR(product.originalPrice)}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => addToCart(product)}
                      className="flex-1 px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="px-4 py-3 border border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Products List - Mobile */}
          <div className="md:hidden space-y-4">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="flex">
                  <div className="w-1/3 aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                    <Zap className="w-12 h-12 text-gray-400" />
                    {product.badge && (
                      <span className="absolute top-2 left-2 px-2 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="w-2/3 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">{product.name}</h3>
                      <button
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(product.id) ? 'text-red-500 fill-current' : 'text-gray-400'
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs font-medium">{product.rating}</span>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-primary-600">{formatINR(product.price)}</span>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="p-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
