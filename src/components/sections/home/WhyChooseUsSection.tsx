import ServiceCard from '@/components/ui/ServiceCard';
import { Users, Award, Shield, Clock, TrendingUp, Target } from 'lucide-react';
import React from 'react';

const whyChooseUs = [
  {
    icon: <Users />,
    title: 'We Build Relations',
    description: 'Trust and long-term partnerships are the foundation of our business approach.',
  },
  {
    icon: <Award />,
    title: 'Experience & Professional',
    description: 'Years of expertise in international trade with a professional team.',
  },
  {
    icon: <Shield />,
    title: 'High Quality Products',
    description: 'Premium quality assurance with strict quality control measures.',
  },
  {
    icon: <Clock />,
    title: 'We Deliver On Time',
    description: 'Punctual delivery commitments with reliable logistics partners.',
  },
  {
    icon: <TrendingUp />,
    title: 'Price Benefits',
    description: 'Competitive pricing without compromising on quality or service.',
  },
  {
    icon: <Target />,
    title: 'Complete Client Satisfaction',
    description: 'Customer-focused approach ensuring 100% client satisfaction.',
  },
];

const WhyChooseUsSection = () => (
  <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          Why Choose Zeba Enterprise
        </h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We are committed to excellence in every aspect of our service, ensuring your complete satisfaction 
          and business success.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whyChooseUs.map((feature, index) => (
          <ServiceCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            variant="compact"
          />
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
