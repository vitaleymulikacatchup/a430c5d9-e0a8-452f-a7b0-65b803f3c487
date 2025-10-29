import React from 'react';

const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Web Development */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Web Development
            </h3>
            <p className="text-gray-600 mb-8">
              Custom web applications built with modern technologies
            </p>
            <div className="relative">
              <img 
                src="/images/web-dev-illustration.png" 
                alt="Web Development" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Mobile Development */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              MOBILE DEVELOPMENT
            </h3>
            <p className="text-gray-600 mb-8">
              Native and cross-platform mobile applications
            </p>
            <div className="relative">
              <img 
                src="/images/mobile-dev-illustration.png" 
                alt="Mobile Development" 
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 lg:p-12 text-center shadow-sm">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Get the same high-quality service for a smaller task
          </h3>
          <button className="btn-primary mt-6">
            Start Small Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;