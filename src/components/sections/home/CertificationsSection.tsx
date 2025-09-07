import { CheckCircle } from 'lucide-react';
import React from 'react';

const certifications = [
  'DGFT', 'FIEO', 'Chamber of Commerce', 'MSME', 'ISO 9001', 'Export Excellence'
];

const CertificationsSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-20">
        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
          Our Certifications
        </h2>
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          We maintain the highest standards of quality and compliance with international certifications.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={index}
            className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold text-gray-900 text-sm">{cert}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
