import { generateSEOMetadata, generateBusinessSchema, StructuredData } from '@/components/ui/SEOHead';
import Image from 'next/image';
import { Award, Users, Globe, TrendingUp, Shield, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'About Us - Zeba Enterprise | Leading Import Export Company',
  description: 'Learn about Zeba Enterprise, a leading import-export company with 15+ years of experience in international trade. Discover our mission, vision, values, and commitment to excellence.',
  keywords: 'about zeba enterprise, import export company history, international trade experience, company profile, business background, trade expertise',
  canonical: 'https://zebaenterprise.com/about',
});

const AboutPage = () => {
  const businessSchema = generateBusinessSchema();

  const teamMembers = [
    {
      name: 'Rajesh Patel',
      position: 'Managing Director',
      image: '/images/hero-page-sliders/hero-1.jpg',
      description: 'With over 20 years of experience in international trade, Rajesh leads our strategic vision.',
    },
    {
      name: 'Priya Sharma',
      position: 'Export Manager',
      image: '/images/hero-page-sliders/hero-2.jpg',
      description: 'Priya oversees all export operations and ensures quality compliance across all shipments.',
    },
    {
      name: 'Mohammed Ali',
      position: 'Import Specialist',
      image: '/images/hero-page-sliders/hero-3.jpg',
      description: 'Mohammed manages import operations and helps international clients enter Indian markets.',
    },
    {
      name: 'Anita Singh',
      position: 'Quality Assurance Head',
      image: '/images/hero-page-sliders/hero-4.jpg',
      description: 'Anita ensures all products meet international quality standards and certification requirements.',
    },
  ];

  const values = [
    {
      icon: <Shield className="text-primary" size={40} />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our dealings.',
    },
    {
      icon: <Award className="text-primary" size={40} />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery and product quality.',
    },
    {
      icon: <Users className="text-primary" size={40} />,
      title: 'Relationships',
      description: 'We build lasting partnerships based on trust, mutual respect, and shared success.',
    },
    {
      icon: <Globe className="text-primary" size={40} />,
      title: 'Global Vision',
      description: 'We think globally while acting locally, bridging cultures and markets worldwide.',
    },
    {
      icon: <TrendingUp className="text-primary" size={40} />,
      title: 'Innovation',
      description: 'We embrace innovation and adapt to changing market needs and technological advances.',
    },
    {
      icon: <Clock className="text-primary" size={40} />,
      title: 'Reliability',
      description: 'We deliver on our promises with consistent quality and timely service.',
    },
  ];

  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Zeba Enterprise was established with a vision to connect global markets.',
    },
    {
      year: '2010',
      title: 'First International Export',
      description: 'Successfully exported our first shipment to Southeast Asian markets.',
    },
    {
      year: '2013',
      title: 'ISO Certification',
      description: 'Achieved ISO 9001 certification for quality management systems.',
    },
    {
      year: '2015',
      title: '25 Countries Milestone',
      description: 'Expanded our reach to serve clients in 25 countries worldwide.',
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Implemented digital systems for better tracking and customer service.',
    },
    {
      year: '2020',
      title: 'COVID-19 Resilience',
      description: 'Successfully navigated global challenges while maintaining service quality.',
    },
    {
      year: '2023',
      title: '50+ Countries Served',
      description: 'Achieved milestone of serving clients in over 50 countries globally.',
    },
  ];

  return (
    <>
      <StructuredData data={businessSchema} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About Zeba Enterprise
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
                Building bridges between global markets for over 15 years with trust, quality, and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg leading-relaxed">
                    Founded in 2008, Zeba Enterprise began as a small family business with a big vision: 
                    to connect global markets with the finest Indian products. What started as a local 
                    trading company has grown into a trusted international partner serving over 50 countries.
                  </p>
                  <p className="leading-relaxed">
                    Our journey has been marked by continuous growth, innovation, and an unwavering 
                    commitment to quality. We have built our reputation on the foundation of trust, 
                    reliability, and excellence in service delivery.
                  </p>
                  <p className="leading-relaxed">
                    Today, we are proud to be recognized as one of the leading import-export companies 
                    in Gujarat, India, with a global network of partners and clients who trust us 
                    with their international trade needs.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-page-sliders/hero-1.jpg"
                    alt="Zeba Enterprise Story"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Mission, Vision & Values
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To bridge global markets by providing exceptional import-export services, connecting 
                  international businesses with premium Indian products while maintaining the highest 
                  standards of quality, reliability, and customer satisfaction.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become the most trusted name in international trade, known for our commitment to 
                  excellence, innovation, and building lasting relationships with clients worldwide while 
                  contributing to global economic growth.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our experienced team of professionals is dedicated to providing exceptional service 
                and building lasting relationships with our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative h-64">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.position}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Key milestones in our journey of growth and excellence in international trade.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary/20" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />
                    
                    {/* Content */}
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
                <div className="text-lg opacity-90">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
                <div className="text-lg opacity-90">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">100%</div>
                <div className="text-lg opacity-90">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
