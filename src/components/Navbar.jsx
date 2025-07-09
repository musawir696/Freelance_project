import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/src/assets/logo.png"
                alt="Logo"
                className="w-10 h-10 rounded-full object-cover"
                />
              <span className="ml-2 text-xl font-bold text-gray-900">Freelance</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-blue-600 font-medium border-b-2 border-blue-600 pb-1">
                Home
              </a>
              <a href="/shop" className="text-gray-700 hover:text-gray-900 font-medium">
                Shop
              </a>
              <a href="/hire-freelancers" className="text-gray-700 hover:text-gray-900 font-medium">
                Hire Freelancers
              </a>
              <a href="/locations" className="text-gray-700 hover:text-gray-900 font-medium">
                Locations
              </a>
              <a href="/tech-services" className="text-gray-700 hover:text-gray-900 font-medium">
                Tech Services
              </a>
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-gray-900 font-medium focus:outline-none">
                  More <span className="ml-1">▼</span>
                </button>
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About Us</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Support</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 border border-blue-600 rounded px-4 py-1 hover:bg-blue-50 bg-transparent">
              Login
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-1">Sign Up</button>
            <div className="flex items-center space-x-2">
              <span className="h-4 w-4 text-gray-600">🌐</span>
              <span className="text-gray-700 font-medium">EN</span>
            </div>
            <span className="h-5 w-5 text-gray-600 cursor-pointer hover:text-gray-900">🔍</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
