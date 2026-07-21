import { useState } from 'react'
import { Box, X, Smartphone, RotateCcw, Maximize2, Info } from 'lucide-react'

function ARPreview({ productId }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
    setIsLoading(true)
    // Simulate AR loading
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
      >
        <Smartphone className="w-5 h-5" />
        AR Preview
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-4xl">
            <div className="bg-gray-900 rounded-2xl overflow-hidden">
              {/* AR Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
                <div className="flex items-center gap-3">
                  <Box className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-lg">AR Product Preview</h3>
                    <p className="text-sm text-purple-100">View product in your space</p>
                  </div>
                </div>
              </div>

              {/* AR Content */}
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative">
                {isLoading ? (
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                    <p className="text-white">Loading AR Experience...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                      <Box className="w-16 h-16 text-white" />
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">AR Preview Mode</h4>
                    <p className="text-gray-400 mb-6 max-w-md mx-auto">
                      Point your camera at a flat surface to see the Emergency Tripod LED Light in your environment.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        <Smartphone className="w-5 h-5" />
                        Start Camera
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                        <RotateCcw className="w-5 h-5" />
                        Reset View
                      </button>
                    </div>
                  </div>
                )}

                {/* AR Controls Overlay */}
                {!isLoading && (
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                      <Info className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors">
                      <Maximize2 className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>

              {/* AR Info */}
              <div className="bg-gray-800 p-6">
                <h4 className="text-white font-semibold mb-3">How to use AR Preview</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Ensure you have good lighting in your environment
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Point your camera at a flat surface (floor, table, ground)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Move your device slowly to help the AR system detect the surface
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Use pinch gestures to scale the product view
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ARPreview
