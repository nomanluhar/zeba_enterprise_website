import Image from 'next/image';
import React from 'react';

const AboutSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          Welcome to Zeba Enterprise
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
          Zeba Enterprise is a leading import-export company specializing in connecting global markets with premium Indian products. 
          With years of experience in international trade, we provide comprehensive solutions for businesses looking to expand their global reach. 
          Our commitment to quality, reliability, and customer satisfaction has made us a trusted partner for companies worldwide.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        <div className="lg:col-span-1">
          <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/hero-1.jpg"
              alt="About Zeba Enterprise"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              To bridge global markets by providing exceptional import-export services, connecting international businesses 
              with premium Indian products while maintaining the highest standards of quality and reliability.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-base text-gray-600 leading-relaxed">
              To become the most trusted name in international trade, known for our commitment to excellence, 
              innovation, and building lasting relationships with clients worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-gray-600 font-medium">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
