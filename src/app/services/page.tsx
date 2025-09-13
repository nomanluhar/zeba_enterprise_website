import { generateSEOMetadata, generateServiceSchema, StructuredData } from '@/components/ui/SEOHead';
import ServiceCard from '@/components/ui/ServiceCard';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Truck, 
  Users, 
  Search, 
  MessageCircle, 
  Shield, 
  FileText, 
  Globe, 
  CheckCircle,
  ArrowRight,
  Package,
  MapPin,
  Clock
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Our Services - Import Export Solutions | Zeba Enterprise',
  description: 'Comprehensive import-export services including export services, import agent, sourcing agent, and trade consultation. Professional international trade solutions with quality assurance.',
  keywords: 'export services, import agent, sourcing agent, trade consultation, international trade services, logistics, quality assurance, documentation, customs clearance',
  canonical: 'https://zeba-enterprise.com/services',
});

const ServicesPage = () => {
  const services = [
    {
      name: 'Export Services',
      description: 'Comprehensive export solutions for Indian products to global markets',
      url: 'https://zeba-enterprise.com/services#export',
    },
    {
      name: 'Import Agent Services',
      description: 'Import representation and market entry solutions for international companies',
      url: 'https://zeba-enterprise.com/services#import',
    },
    {
      name: 'Sourcing Agent Services',
      description: 'Professional sourcing and supplier identification services',
      url: 'https://zeba-enterprise.com/services#sourcing',
    },
    {
      name: 'Trade Consultation',
      description: 'Expert guidance and consultation for international trade expansion',
      url: 'https://zeba-enterprise.com/services#consultation',
    },
  ];

  const servicesSchema = services.map(service => generateServiceSchema(service));

  const mainServices = [
    {
      id: 'export',
      icon: <Truck />,
      title: 'Export Services',
      subtitle: 'Take Your Products Global',
      description: 'We provide comprehensive export services to help Indian manufacturers and suppliers reach international markets with confidence and success.',
      image: '/images/hero-page-sliders/hero-1.jpg',
      features: [
        'Market Research & Analysis',
        'Product Certification & Quality Assurance',
        'Export Documentation',
        'Logistics & Shipping Coordination',
        'Customs Clearance',
        'Payment Processing & Trade Finance',
        'Risk Management',
        'After-Sales Support'
      ],
      process: [
        'Initial Consultation & Requirements Analysis',
        'Product Evaluation & Market Feasibility',
        'Documentation & Certification',
        'Packaging & Quality Control',
        'Shipping & Logistics Coordination',
        'Customs Clearance & Delivery',
        'Payment Processing',
        'Post-Delivery Support'
      ]
    },
    {
      id: 'import',
      icon: <Users />,
      title: 'Import Agent Services',
      subtitle: 'Your Gateway to Indian Markets',
      description: 'We help international companies establish their presence in Indian markets through our comprehensive import representation services.',
      image: '/images/hero-page-sliders/hero-2.jpg',
      features: [
        'Market Entry Strategy',
        'Local Regulatory Compliance',
        'Distributor & Retailer Network',
        'Import Documentation',
        'Customs & Legal Compliance',
        'Warehousing & Distribution',
        'Marketing Support',
        'Business Development'
      ],
      process: [
        'Market Assessment & Entry Strategy',
        'Regulatory Compliance Review',
        'Partner Identification & Due Diligence',
        'Import Documentation & Permits',
        'Product Launch & Marketing',
        'Distribution Network Setup',
        'Sales & Business Development',
        'Ongoing Market Support'
      ]
    },
    {
      id: 'sourcing',
      icon: <Search />,
      title: 'Sourcing Agent Services',
      subtitle: 'Find the Right Suppliers',
      description: 'Our sourcing services help international buyers find reliable Indian suppliers and manufacturers for their specific requirements.',
      image: '/images/hero-page-sliders/hero-3.jpg',
      features: [
        'Supplier Identification & Verification',
        'Factory Audits & Quality Assessment',
        'Price Negotiation',
        'Sample Procurement & Testing',
        'Production Monitoring',
        'Quality Control & Inspection',
        'Logistics Coordination',
        'Supplier Relationship Management'
      ],
      process: [
        'Requirement Analysis & Specification',
        'Supplier Search & Shortlisting',
        'Factory Visits & Audits',
        'Sample Development & Approval',
        'Price Negotiation & Contracts',
        'Production Planning & Monitoring',
        'Quality Inspection & Testing',
        'Shipment & Delivery Coordination'
      ]
    },
    {
      id: 'consultation',
      icon: <MessageCircle />,
      title: 'Trade Consultation',
      subtitle: 'Expert Guidance for Success',
      description: 'Get expert advice and consultation on international trade strategies, market entry, and business expansion opportunities.',
      image: '/images/hero-page-sliders/hero-4.jpg',
      features: [
        'Trade Strategy Development',
        'Market Entry Planning',
        'Regulatory Compliance Guidance',
        'Risk Assessment & Mitigation',
        'Business Model Optimization',
        'Trade Finance Solutions',
        'Cultural & Business Etiquette',
        'Long-term Partnership Development'
      ],
      process: [
        'Business Assessment & Goal Setting',
        'Market Analysis & Opportunity Identification',
        'Strategy Development & Planning',
        'Implementation Roadmap',
        'Risk Assessment & Mitigation',
        'Execution Support & Monitoring',
        'Performance Review & Optimization',
        'Ongoing Strategic Support'
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Shield />,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control and inspection services to ensure products meet international standards.',
    },
    {
      icon: <FileText />,
      title: 'Documentation Support',
      description: 'Complete assistance with all import-export documentation, certificates, and regulatory compliance.',
    },
    {
      icon: <Globe />,
      title: 'Logistics Coordination',
      description: 'End-to-end logistics management including shipping, customs clearance, and delivery coordination.',
    },
    {
      icon: <Package />,
      title: 'Packaging Solutions',
      description: 'Professional packaging services designed for international shipping and market requirements.',
    },
    {
      icon: <MapPin />,
      title: 'Market Intelligence',
      description: 'Detailed market research and intelligence to help you make informed business decisions.',
    },
    {
      icon: <Clock />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support to address your queries and concerns promptly.',
    },
  ];

  return (
    <>
      {servicesSchema.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
                Comprehensive international trade solutions designed to help your business succeed in global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What We Offer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We provide end-to-end international trade services to help businesses expand globally 
                and connect with new markets efficiently.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {mainServices.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={`#${service.id}`}
                  variant="feature"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        {mainServices.map((service, index) => (
          <section key={service.id} id={service.id} className={`py-24 lg:py-32 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">
                      {service.icon}
                    </div>
                    <span className="text-secondary font-semibold">{service.subtitle}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                    <ArrowRight size={20} />
                  </Link>
                </div>
                
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              {/* Process */}
              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {service.process.map((step, pIndex) => (
                    <div key={pIndex} className="text-center">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {pIndex + 1}
                      </div>
                      <p className="text-sm text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Additional Services */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Additional Services
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive support services to ensure your international trade operations run smoothly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Services
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Experience</h3>
                <p className="text-gray-600">
                  Over 15 years of experience in international trade with a proven track record of success.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="text-secondary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Global Network</h3>
                <p className="text-gray-600">
                  Extensive network of partners and clients across 50+ countries worldwide.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-600">
                  Round-the-clock customer support to address your queries and concerns promptly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss your international trade requirements and learn how we can help your business succeed globally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                Get Quote
              </Link>
              <Link
                href="/products"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;
