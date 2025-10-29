import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
            
            <div className="space-y-2 mb-6">
              <p className="text-gray-600">Feel free to drop us a note:</p>
              <a href="mailto:contact@sargas.io" className="text-primary-600 hover:text-primary-700 font-medium">
                contact@sargas.io
              </a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900">Contacts</a></li>
              <li><a href="#" className="hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Web Development</a></li>
              <li><a href="#" className="hover:text-gray-900">Mobile Development</a></li>
              <li><a href="#" className="hover:text-gray-900">Support and Maintenance</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Sargas. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;