import ServiceCard from '@/components/ui/ServiceCard';
import { Truck, Users, Search, MessageCircle } from 'lucide-react';
import React from 'react';

const services = [
  {
    icon: <Truck />,
    title: 'Export Services',
    description: 'We export premium quality products worldwide with timely delivery and complete documentation support.',
    href: '/services#export',
  },
  {
    icon: <Users />,
    title: 'Import Agent',
    description: 'We help international companies introduce products to Indian markets with comprehensive market support.',
    href: '/services#import',
  },
  {
    icon: <Search />,
    title: 'Sourcing Agent',
    description: 'Local sourcing partner for international clients seeking quality Indian products and reliable suppliers.',
    href: '/services#sourcing',
  },
  {
    icon: <MessageCircle />,
    title: 'Consultation',
    description: 'Expert guidance for international trade and business expansion with personalized solutions.',
    href: '/services#consultation',
  },
];

const ServicesSection = () => (
  <section className="py-16 lg:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          What We Do
        </h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We provide comprehensive international trade services to help businesses expand globally 
          and connect with new markets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            href={service.href}
            variant="compact"
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
