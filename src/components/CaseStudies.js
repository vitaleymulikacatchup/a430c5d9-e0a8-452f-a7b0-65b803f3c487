import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 text-white">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Dios
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                A comprehensive platform that revolutionizes how businesses manage their operations with AI-powered insights and automation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-100">Technologies:</span>
                  <div className="flex space-x-2">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">React</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">Node.js</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">AI/ML</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-100">Timeline:</span>
                  <span className="text-white font-semibold">12 weeks</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-blue-100">Budget:</span>
                  <span className="text-white font-semibold">$45,000 - $70k</span>
                </div>
              </div>

              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-2">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                  <div className="space-y-2">
                    <div className="h-8 bg-blue-100 rounded"></div>
                    <div className="h-6 bg-gray-50 rounded"></div>
                    <div className="h-6 bg-gray-50 rounded w-4/5"></div>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <div className="h-8 bg-blue-500 rounded flex-1"></div>
                    <div className="h-8 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;