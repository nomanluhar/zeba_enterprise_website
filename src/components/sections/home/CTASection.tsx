import Link from 'next/link';
import React from 'react';

const CTASection = () => (
  <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
    <div className="max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 text-center">
      <h2 className="text-2xl lg:text-3xl font-bold mb-3">
        Ready to Expand Your Global Reach?
      </h2>
      <p className="text-base mb-5 max-w-xl mx-auto opacity-90">
        Let us help you connect with international markets and grow your business. 
        Contact us today for a consultation.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/contact"
          className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
        >
          Get Quote
        </Link>
        <Link
          href="/about"
          className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
        >
          Learn More
        </Link>
      </div>
    </div>
  </section>
);

export default CTASection;
