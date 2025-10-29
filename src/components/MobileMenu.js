import React from 'react';
import { X, Mail } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-semibold text-gray-900">Menu</h2>
            <button onClick={onClose} className="p-2">
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            {/* Menu */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
                <li><a href="#" className="hover:text-gray-900">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900">Contacts</a></li>
                <li><a href="#" className="hover:text-gray-900">About Us</a></li>
                <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
                <li><a href="#" className="hover:text-gray-900">Mobile Development</a></li>
                <li><a href="#" className="hover:text-gray-900">Support and Maintenance</a></li>
              </ul>
            </div>
          </div>
          
          {/* Contact */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <Mail className="w-5 h-5 text-primary-600" />
              <div>
                <p className="text-sm text-gray-600">Feel free to drop us a note:</p>
                <a href="mailto:contact@sargas.io" className="text-primary-600 font-medium">
                  contact@sargas.io
                </a>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900">Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;