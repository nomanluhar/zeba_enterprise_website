import { generateSEOMetadata, StructuredData } from '@/components/ui/SEOHead';
import ContactForm from '@/components/ui/ContactForm';
import { Phone, Mail, MapPin, Clock, Globe, MessageCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Contact Us - Get in Touch | Zeba Enterprise',
  description: 'Contact Zeba Enterprise for international trade inquiries, export-import services, and business collaboration. Get quotes, samples, and expert consultation.',
  keywords: 'contact zeba enterprise, international trade inquiry, export import contact, business inquiry, get quote, trade consultation, ahmedabad import export',
  canonical: 'https://zebaenterprise.com/contact',
});

const ContactPage = () => {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Zeba Enterprise',
    description: 'Contact page for Zeba Enterprise - Leading import export company',
    mainEntity: {
      '@type': 'Organization',
      name: 'Zeba Enterprise',
      telephone: '+91-XXXXXXXXXX',
      email: 'info@zebaenterprise.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '[Placeholder Address]',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'India',
      },
    },
  };

  const contactMethods = [
    {
      icon: <Phone className="text-primary" size={24} />,
      title: 'Phone',
      primary: '+91-XXXXXXXXXX',
      secondary: '+91-YYYYYYYYY',
      description: 'Call us for immediate assistance'
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      title: 'Email',
      primary: 'info@zebaenterprise.com',
      secondary: 'sales@zebaenterprise.com',
      description: 'Send us your inquiries anytime'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: 'Address',
      primary: '[Placeholder Address]',
      secondary: 'Ahmedabad, Gujarat, India - 380001',
      description: 'Visit our office for consultations'
    },
    {
      icon: <Clock className="text-primary" size={24} />,
      title: 'Business Hours',
      primary: 'Mon - Sat: 9:00 AM - 6:00 PM',
      secondary: 'Sunday: Closed',
      description: 'We are available during business hours'
    }
  ];

  const departments = [
    {
      name: 'Sales & Exports',
      email: 'sales@zebaenterprise.com',
      phone: '+91-XXXXXXXXXX',
      description: 'For product inquiries and export orders'
    },
    {
      name: 'Import Services',
      email: 'imports@zebaenterprise.com',
      phone: '+91-YYYYYYYYY',
      description: 'For import representation and market entry'
    },
    {
      name: 'Sourcing & Procurement',
      email: 'sourcing@zebaenterprise.com',
      phone: '+91-ZZZZZZZZZ',
      description: 'For supplier sourcing and procurement'
    },
    {
      name: 'Customer Support',
      email: 'support@zebaenterprise.com',
      phone: '+91-AAAAAAAAA',
      description: 'For general support and assistance'
    }
  ];

  const faqs = [
    {
      question: 'What are your minimum order quantities?',
      answer: 'MOQs vary by product category. Generally, we accept orders from 100 pieces for handicrafts to 20 MT for agricultural products. Contact us for specific product MOQs.'
    },
    {
      question: 'How long does it take to process an order?',
      answer: 'Lead times typically range from 15-60 days depending on the product category, customization requirements, and order quantity. We provide estimated delivery schedules with every quotation.'
    },
    {
      question: 'Do you provide samples before placing bulk orders?',
      answer: 'Yes, we provide samples for evaluation. Sample costs and shipping charges are typically borne by the buyer and can be adjusted against bulk orders.'
    },
    {
      question: 'What payment terms do you offer?',
      answer: 'We offer flexible payment terms including LC (Letter of Credit), TT (Telegraphic Transfer), and other mutually agreed payment methods based on order value and customer relationship.'
    },
    {
      question: 'Do you handle shipping and logistics?',
      answer: 'Yes, we provide end-to-end logistics solutions including packaging, documentation, customs clearance, and shipping to your destination port.'
    },
    {
      question: 'Are your products certified for international markets?',
      answer: 'Yes, all our products meet international quality standards and come with necessary certifications including ISO, FSSAI, CE, and other relevant certifications as required.'
    }
  ];

  return (
    <>
      <StructuredData data={contactSchema} />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
                Ready to expand your business globally? Get in touch with our experts for personalized consultation and solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We&apos;re here to help you with all your international trade needs. Contact us through any of the following methods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex justify-center mb-4">
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                  <p className="text-gray-800 font-medium mb-1">{method.primary}</p>
                  <p className="text-gray-600 mb-3">{method.secondary}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours. For urgent inquiries, 
                  please call us directly.
                </p>
                <ContactForm />
              </div>
              
              {/* Map Placeholder */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Location
                </h2>
                <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
                  <div className="text-center text-gray-500">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">Google Maps will be integrated here</p>
                  </div>
                </div>
                
                {/* Office Details */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Office Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-primary mt-1" size={16} />
                      <div>
                        <p className="font-medium text-gray-900">[Placeholder Address]</p>
                        <p className="text-gray-600">Ahmedabad, Gujarat, India - 380001</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-primary" size={16} />
                      <span className="text-gray-600">+91-XXXXXXXXXX</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={16} />
                      <span className="text-gray-600">info@zebaenterprise.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Globe className="text-primary" size={16} />
                      <span className="text-gray-600">www.zebaenterprise.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Department Contacts
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Connect directly with the right department for faster and more specialized assistance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-gray-600 mb-4">{dept.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Mail className="text-primary" size={16} />
                          <a href={`mailto:${dept.email}`} className="text-primary hover:underline">
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="text-primary" size={16} />
                          <a href={`tel:${dept.phone}`} className="text-gray-600 hover:text-primary">
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our services, processes, and policies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Don&apos;t see your question answered?</p>
              <a 
                href="mailto:info@zebaenterprise.com" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Mail size={20} />
                Contact Our Support Team
              </a>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Need Urgent Assistance?</h3>
              <p className="text-lg opacity-90 mb-6">
                For urgent matters outside business hours, contact our emergency line
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="tel:+91-XXXXXXXXXX" 
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
                >
                  <Phone size={20} />
                  Emergency: +91-XXXXXXXXXX
                </a>
                <a 
                  href="https://wa.me/91XXXXXXXXXX" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;
