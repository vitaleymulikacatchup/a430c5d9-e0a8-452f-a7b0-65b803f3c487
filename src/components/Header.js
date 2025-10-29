import React from 'react';
import { Menu, ChevronDown, Star } from 'lucide-react';

const Header = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#portfolio" className="text-gray-700 hover:text-gray-900 font-medium">
              Portfolio
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">
              About
            </a>
            <a href="#contacts" className="text-gray-700 hover:text-gray-900 font-medium">
              Contacts
            </a>
          </nav>

          {/* Clutch Rating & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-gray-50 px-3 py-2 rounded-lg">
              <div className="w-6 h-6 bg-clutch rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-sm font-semibold text-gray-900">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-red-500 text-red-500" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-gray-600">Based on 6 Clutch reviews</span>
            </div>
            <button className="btn-primary">
              Book a Call
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;