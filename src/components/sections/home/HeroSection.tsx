import HeroSlider from '@/components/ui/HeroSlider';
import React from 'react';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    subtitle: 'Premium Quality Products',
    title: 'Your Gateway to Global Trade',
    description: 'Connecting international markets with premium Indian products. Experience excellence in import-export services with Zeba Enterprise.',
    ctaText: 'Explore Products',
    ctaLink: '/products',
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    subtitle: 'Export Excellence',
    title: 'Quality Products Worldwide',
    description: 'We export premium quality Indian products to global markets with guaranteed quality and timely delivery.',
    ctaText: 'Our Services',
    ctaLink: '/services',
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    subtitle: 'Import Solutions',
    title: 'Your Trusted Import Partner',
    description: 'Helping international companies introduce their products to Indian markets with comprehensive support.',
    ctaText: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 4,
    image: '/images/hero-4.jpg',
    subtitle: 'Global Sourcing',
    title: 'Sourcing Made Simple',
    description: 'Your local sourcing partner for international clients seeking quality Indian products and reliable suppliers.',
    ctaText: 'Learn More',
    ctaLink: '/about',
  },
];

const HeroSection = () => (
  <HeroSlider slides={heroSlides} />
);

export default HeroSection;
