import React from 'react';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  const techStack = [
    { name: 'React', color: 'react' },
    { name: 'Node.js', color: 'node' },
    { name: 'MySQL', color: 'mysql' },
    { name: 'MongoDB', color: 'mongodb' },
    { name: 'Nginx', color: 'nginx' },
    { name: 'Redis', color: 'redis' },
    { name: 'TypeScript', color: 'typescript' },
    { name: 'JavaScript', color: 'javascript' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-32 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
          <img 
            src="/images/3d-shape.png" 
            alt="3D Shape" 
            className="w-full h-full object-contain floating-shape"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-primary-600">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-primary-600">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                  <div className="w-6 h-6 bg-red-400 rounded-full -ml-2"></div>
                  <span className="font-semibold text-gray-900 ml-2">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Start Discovery
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <ExternalLink className="w-4 h-4" />
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-gray-500">Follow us:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-700 transition-colors">
                  f
                </a>
                <a href="#" className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-500 transition-colors">
                  t
                </a>
                <a href="#" className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm hover:bg-pink-600 transition-colors">
                  i
                </a>
                <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm hover:bg-green-600 transition-colors">
                  w
                </a>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <p className="text-sm text-gray-600">We use only modern technologies:</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className={`tech-badge ${tech.color}`}>
                    #{tech.name.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
              <img 
                src="/images/3d-knot.png" 
                alt="3D Knot" 
                className="w-full h-full object-contain floating-shape"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;