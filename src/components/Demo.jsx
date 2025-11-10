import { useState } from 'react';
import CustomCursor from './CustomCursor';

const Demo = () => {
  const [cursorConfig, setCursorConfig] = useState({
    size: 20,
    color: '#000000',
    trailing: false,
    scaleOnHover: true,
    magnetTargetSelector: '.magnet-target',
    showOnDesktopOnly: true,
  });

  const productCards = [
    {
      id: 1,
      title: 'Premium Headphones',
      price: '$299',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      description: 'High-quality wireless headphones with noise cancellation',
    },
    {
      id: 2,
      title: 'Smart Watch',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      description: 'Feature-rich smartwatch with health tracking',
    },
    {
      id: 3,
      title: 'Wireless Speaker',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop',
      description: 'Portable speaker with exceptional sound quality',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <CustomCursor {...cursorConfig} />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Custom Cursor Demo
          </h1>
          <p className="text-xl text-gray-600">
            Move your mouse around to see the custom cursor in action
          </p>
        </header>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cursor Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Size: {cursorConfig.size}px
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={cursorConfig.size}
                onChange={(e) =>
                  setCursorConfig({ ...cursorConfig, size: parseInt(e.target.value) })
                }
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color
              </label>
              <input
                type="color"
                value={cursorConfig.color}
                onChange={(e) =>
                  setCursorConfig({ ...cursorConfig, color: e.target.value })
                }
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={cursorConfig.trailing}
                  onChange={(e) =>
                    setCursorConfig({ ...cursorConfig, trailing: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium text-gray-700">Trailing</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={cursorConfig.scaleOnHover}
                  onChange={(e) =>
                    setCursorConfig({ ...cursorConfig, scaleOnHover: e.target.checked })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm font-medium text-gray-700">Scale on Hover</span>
              </label>
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Interactive Buttons</h2>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium hover-target">
              Primary Button
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium hover-target">
              Success Button
            </button>
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium hover-target">
              Danger Button
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium hover-target">
              Outline Button
            </button>
          </div>
        </section>

        {/* Links Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Links</h2>
          <div className="flex flex-wrap gap-6 text-lg">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline hover-target"
              onClick={(e) => e.preventDefault()}
            >
              External Link
            </a>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 underline hover-target"
              onClick={(e) => e.preventDefault()}
            >
              Internal Link
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800 underline hover-target"
              onClick={(e) => e.preventDefault()}
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-orange-600 hover:text-orange-800 underline hover-target"
              onClick={(e) => e.preventDefault()}
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Product Cards Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Product Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCards.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow hover-target magnet-target"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors hover-target">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Magnetic Targets Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Magnetic Targets</h2>
          <p className="text-gray-600 mb-4">
            Move your cursor near these circles to see the magnetic effect
          </p>
          <div className="flex flex-wrap gap-8 justify-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg magnet-target"
              >
                {num}
              </div>
            ))}
          </div>
        </section>

        {/* Info Section */}
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Features</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>High-performance mouse tracking using requestAnimationFrame</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Smooth trailing and hover scaling animations</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Magnetic effect on target elements</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Graceful touch device fallback</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Accessible - respects keyboard navigation</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span>Fully customizable size, color, and behavior</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Demo;

