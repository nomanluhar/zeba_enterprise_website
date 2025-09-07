import { generateSEOMetadata, generateProductSchema, StructuredData } from '@/components/ui/SEOHead';
import ProductGrid from '@/components/ui/ProductGrid';
import { productCategories } from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { Star, CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Products - Premium Indian Products for Export | Zeba Enterprise',
  description: 'Explore our wide range of premium Indian products including textiles, handicrafts, spices, furniture, electronics, and machinery for international export markets.',
  keywords: 'Indian products export, textiles export, handicrafts export, spices export, furniture export, electronics export, machinery export, quality products, international trade',
  canonical: 'https://zebaenterprise.com/products',
});

const ProductsPage = () => {
  // Convert product categories for ProductGrid component
  const productCategoriesForGrid = productCategories.map(category => ({
    id: parseInt(category.id.replace(/[^0-9]/g, '')) || Math.random() * 1000,
    name: category.name,
    category: category.name,
    image: category.image,
    description: category.description,
    features: category.features,
    href: `/products/${category.slug}`
  }));

  // Original product categories data for schema generation
  const originalCategories = [
    {
      id: 1,
      name: 'Textiles & Garments',
      category: 'Textiles',
      image: '/images/hero-page-sliders/hero-1.jpg',
      description: 'High-quality fabrics, garments, and textile products manufactured with precision and care using premium materials and modern techniques.',
      features: ['Premium Cotton & Silk', 'Export Quality Packaging', 'Custom Designs Available', 'Bulk Order Capability', 'International Standards', 'Eco-Friendly Options'],
      specifications: [
        'Material: 100% Cotton, Silk, Polyester blends',
        'Sizes: XS to XXXL (Custom sizing available)',
        'Colors: Wide range of colors and patterns',
        'Packaging: Export quality packaging',
        'MOQ: 500 pieces per design',
        'Lead Time: 15-30 days'
      ]
    },
    {
      id: 2,
      name: 'Handicrafts',
      category: 'Handicrafts',
      image: '/images/hero-page-sliders/hero-2.jpg',
      description: 'Traditional Indian handicrafts showcasing rich cultural heritage and exceptional artisan craftsmanship passed down through generations.',
      features: ['Handmade by Skilled Artisans', 'Traditional Techniques', 'Eco-Friendly Materials', 'Cultural Authenticity', 'Custom Designs', 'Gift Packaging'],
      specifications: [
        'Materials: Wood, Metal, Clay, Fabric, Stone',
        'Finish: Natural, Painted, Carved, Embossed',
        'Sizes: Small to Large decorative pieces',
        'Origin: Various states across India',
        'MOQ: 100 pieces per item',
        'Lead Time: 20-45 days'
      ]
    },
    {
      id: 3,
      name: 'Spices & Food Products',
      category: 'Food',
      image: '/images/hero-page-sliders/hero-3.jpg',
      description: 'Fresh, aromatic spices and food products sourced directly from Indian farms and producers, maintaining authenticity and quality.',
      features: ['Farm Fresh Quality', 'Organic Options Available', 'Quality Tested', 'Long Shelf Life', 'Proper Packaging', 'FSSAI Certified'],
      specifications: [
        'Types: Whole spices, Ground spices, Spice blends',
        'Packaging: 100g to 25kg options',
        'Shelf Life: 2-3 years from manufacturing',
        'Certifications: FSSAI, Organic, Export quality',
        'MOQ: 500kg per variety',
        'Lead Time: 10-20 days'
      ]
    },
    {
      id: 4,
      name: 'Furniture',
      category: 'Furniture',
      image: '/images/hero-page-sliders/hero-4.jpg',
      description: 'Elegant wooden and metal furniture combining traditional Indian craftsmanship with modern design aesthetics.',
      features: ['Solid Wood Construction', 'Custom Designs', 'Durable Finish', 'Export Packaging', 'Assembly Instructions', 'Quality Hardware'],
      specifications: [
        'Materials: Teak, Sheesham, Mango wood, Metal',
        'Finish: Natural, Stained, Painted options',
        'Styles: Traditional, Modern, Contemporary',
        'Sizes: Standard and custom dimensions',
        'MOQ: 50 pieces per design',
        'Lead Time: 30-60 days'
      ]
    },
    {
      id: 5,
      name: 'Electronics',
      category: 'Electronics',
      image: '/images/hero-page-sliders/hero-1.jpg',
      description: 'Quality electronic components and devices meeting international standards with proper certifications and technical support.',
      features: ['Quality Tested', 'International Standards', 'Warranty Support', 'Technical Documentation', 'CE Certified', 'After-Sales Service'],
      specifications: [
        'Categories: Consumer electronics, Components',
        'Standards: CE, FCC, RoHS compliant',
        'Warranty: 1-2 years manufacturer warranty',
        'Documentation: User manuals, Certificates',
        'MOQ: 100-1000 pieces depending on item',
        'Lead Time: 15-30 days'
      ]
    },
    {
      id: 6,
      name: 'Machinery',
      category: 'Industrial',
      image: '/images/hero-page-sliders/hero-2.jpg',
      description: 'Industrial machinery and equipment for various sectors with comprehensive technical support and training services.',
      features: ['Heavy Duty Construction', 'Technical Support', 'Installation Service', 'Maintenance Support', 'Training Provided', 'Spare Parts Available'],
      specifications: [
        'Types: Textile, Food processing, Packaging machines',
        'Power: 220V to 440V, Single/Three phase',
        'Capacity: Various production capacities',
        'Installation: On-site installation available',
        'MOQ: 1-5 units depending on machine',
        'Lead Time: 45-90 days'
      ]
    },
    {
      id: 7,
      name: 'Agricultural Products',
      category: 'Agriculture',
      image: '/images/hero-page-sliders/hero-3.jpg',
      description: 'Fresh agricultural products including grains, pulses, and other farm produce sourced directly from Indian farmers.',
      features: ['Farm Fresh', 'Quality Grading', 'Proper Storage', 'Pest Free', 'Export Packaging', 'Traceability'],
      specifications: [
        'Products: Rice, Wheat, Pulses, Oilseeds',
        'Quality: Export grade, Various qualities available',
        'Packaging: 25kg, 50kg bags or bulk',
        'Moisture: As per international standards',
        'MOQ: 20 MT per variety',
        'Lead Time: 15-25 days'
      ]
    },
    {
      id: 8,
      name: 'Chemical Products',
      category: 'Chemicals',
      image: '/images/hero-page-sliders/hero-4.jpg',
      description: 'Industrial and specialty chemicals for various applications with proper safety documentation and handling guidelines.',
      features: ['Industrial Grade', 'Safety Certified', 'Proper Documentation', 'MSDS Provided', 'Quality Tested', 'Regulatory Compliant'],
      specifications: [
        'Types: Industrial chemicals, Specialty chemicals',
        'Purity: 95-99% depending on product',
        'Packaging: Drums, Bags, Containers',
        'Documentation: COA, MSDS, Safety data',
        'MOQ: 1-5 MT depending on chemical',
        'Lead Time: 20-35 days'
      ]
    }
  ];

  // Generate product schemas for SEO
  const productSchemas = originalCategories.map(product => 
    generateProductSchema({
      name: product.name,
      description: product.description,
      image: product.image,
      category: product.category
    })
  );

  const qualityStandards = [
    {
      title: 'ISO 9001 Certified',
      description: 'Quality management systems ensuring consistent product quality and customer satisfaction.',
    },
    {
      title: 'Export Quality',
      description: 'All products meet international export standards and packaging requirements.',
    },
    {
      title: 'Third-Party Testing',
      description: 'Independent quality testing and certification for all product categories.',
    },
    {
      title: 'Compliance Assured',
      description: 'Full compliance with destination country regulations and standards.',
    },
  ];

  return (
    <>
      {productSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Our Products
              </h1>
              <p className="text-xl lg:text-2xl max-w-3xl mx-auto opacity-90">
                Discover our extensive range of premium Indian products, crafted with excellence and ready for global markets.
              </p>
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Product Categories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a diverse range of high-quality Indian products across multiple categories, 
                each carefully selected and quality-assured for international markets.
              </p>
            </div>
            
            <ProductGrid products={productCategoriesForGrid} />
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Quality Standards
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We maintain the highest quality standards across all our product categories to ensure 
                customer satisfaction and regulatory compliance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityStandards.map((standard, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                  <p className="text-gray-600">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Highlights */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Our Products Stand Out
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Premium Quality</h3>
                      <p className="text-gray-600">
                        All our products undergo strict quality control processes and meet international standards.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-secondary" size={16} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Authentic Indian Heritage</h3>
                      <p className="text-gray-600">
                        Our products showcase the rich cultural heritage and traditional craftsmanship of India.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Star className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                      <p className="text-gray-600">
                        We offer competitive pricing without compromising on quality or service excellence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="text-secondary" size={16} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Reliable Supply Chain</h3>
                      <p className="text-gray-600">
                        Established relationships with trusted manufacturers ensure consistent supply and quality.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/hero-page-sliders/hero-1.jpg"
                    alt="Quality Products"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-gray-600">Quality Assured</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Export Process */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Export Process
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We follow a systematic approach to ensure smooth export operations and timely delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Inquiry & Quotation',
                  description: 'Submit your requirements and receive detailed quotations with specifications.'
                },
                {
                  step: '02',
                  title: 'Sample Approval',
                  description: 'Review and approve product samples before placing bulk orders.'
                },
                {
                  step: '03',
                  title: 'Production & QC',
                  description: 'Manufacturing with strict quality control and regular progress updates.'
                },
                {
                  step: '04',
                  title: 'Shipping & Delivery',
                  description: 'Professional packaging, documentation, and timely shipping to destination.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Interested in Our Products?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us for detailed product catalogs, pricing information, and sample requests. 
              Our team is ready to help you find the perfect products for your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                Request Quote
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;
