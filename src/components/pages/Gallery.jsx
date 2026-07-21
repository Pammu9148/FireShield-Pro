import { useState } from 'react'
import { X, ZoomIn } from 'lucide-react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { id: 1, title: 'Product Front View', category: 'Product' },
    { id: 2, title: 'Product Side View', category: 'Product' },
    { id: 3, title: 'Product Back View', category: 'Product' },
    { id: 4, title: 'Deployed at Fire Scene', category: 'In Action' },
    { id: 5, title: 'Night Operation', category: 'In Action' },
    { id: 6, title: 'Industrial Application', category: 'Applications' },
    { id: 7, title: 'Airport Emergency', category: 'Applications' },
    { id: 8, title: 'Training Exercise', category: 'Applications' },
    { id: 9, title: 'Close-up LED Array', category: 'Details' },
    { id: 10, title: 'Control Interface', category: 'Details' },
    { id: 11, title: 'Battery Compartment', category: 'Details' },
    { id: 12, title: 'Packaging', category: 'Details' },
  ]

  const categories = ['All', 'Product', 'In Action', 'Applications', 'Details']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Gallery</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Explore our Emergency Tripod LED Light in various settings and applications
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <ZoomIn className="w-12 h-12 text-gray-400 group-hover:text-primary-500 transition-colors" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-medium text-sm">{image.title}</p>
                  <p className="text-white/70 text-xs">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="max-w-4xl w-full">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-xl">{selectedImage.title}</p>
            </div>
            <p className="text-white text-center mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
