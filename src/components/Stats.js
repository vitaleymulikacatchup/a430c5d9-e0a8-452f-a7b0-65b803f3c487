import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '92%',
      label: 'Client Satisfaction Rate'
    },
    {
      number: '50+',
      label: 'Projects Completed'
    },
    {
      number: '30k+',
      label: 'Lines of Code Written'
    },
    {
      number: '100%',
      label: 'On-Time Delivery'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;