import React from 'react';

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <div key={member} className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-gray-900 mb-1">Team Member {member}</h4>
              <p className="text-gray-600 text-sm">Position</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;