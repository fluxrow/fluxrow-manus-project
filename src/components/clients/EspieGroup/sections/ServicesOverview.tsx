import React from 'react';

const ServicesOverview: React.FC = () => {
  return (
    <section id="services-overview" className="py-20 bg-slate-900 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Transport Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From single shipments to dedicated fleet services, we deliver results that exceed expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;