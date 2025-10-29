import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Client Name</h4>
                  <p className="text-gray-600 text-sm">Company Position</p>
                </div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            
            <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed">
              "Working with Sargas was an exceptional experience. Their AI-powered approach delivered results beyond our expectations, and the 12-week timeline was perfectly executed."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;