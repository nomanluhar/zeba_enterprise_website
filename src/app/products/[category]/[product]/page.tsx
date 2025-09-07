import { generateSEOMetadata, generateProductSchema, StructuredData } from '@/components/ui/SEOHead';
import { 
  products, 
  productCategories, 
  getProductById, 
  getCategoryBySlug, 
  getRelatedProducts 
} from '@/data/products';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Package, 
  Truck, 
  Shield, 
  Star,
  Award,
  Globe,
  Clock,
  Mail,
  Phone
} from 'lucide-react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// interface ProductPageProps {
//   params: {
//     category: string;
//     product: string;
//   };
// }

export async function generateMetadata({ params }: {
  params: { category: string; product: string };
}): Promise<Metadata> {
  const product = getProductById(params.product);
  const category = getCategoryBySlug(params.category);
  
  if (!product || !category) {
    return {
      title: 'Product Not Found | Zeba Enterprise',
      description: 'The requested product could not be found.'
    };
  }

  return generateSEOMetadata({
    title: `${product.name} - ${category.name} | Zeba Enterprise`,
    description: `${product.description.substring(0, 160)}...`,
    keywords: `${product.name}, ${category.name}, ${product.name} export, ${product.name} India, quality ${product.name}`,
    canonical: `https://zebaenterprise.com/products/${params.category}/${params.product}`,
  });
}

export async function generateStaticParams() {
  const params: { category: string; product: string }[] = [];
  
  for (const category of productCategories) {
    const categoryProducts = products.filter(p => p.categoryId === category.id);
    for (const product of categoryProducts) {
      params.push({
        category: category.slug,
        product: product.id,
      });
    }
  }
  
  return params;
}

const ProductPage = ({ params }: {
  params: { category: string; product: string };
}) => {
  const product = getProductById(params.product);
  const category = getCategoryBySlug(params.category);
  const relatedProducts = product ? getRelatedProducts(product.id) : [];

  if (!product || !category || product.categoryId !== category.id) {
    notFound();
  }

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    // price: product.price
  });

  return (
    <>
      <StructuredData data={productSchema} />
      
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary">
                Home
              </Link>
              <ArrowRight size={16} className="text-gray-400" />
              <Link href="/products" className="text-gray-500 hover:text-primary">
                Products
              </Link>
              <ArrowRight size={16} className="text-gray-400" />
              <Link 
                href={`/products/${params.category}`} 
                className="text-gray-500 hover:text-primary"
              >
                {category.name}
              </Link>
              <ArrowRight size={16} className="text-gray-400" />
              <span className="text-gray-900 font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <Link
              href={`/products/${params.category}`}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to {category.name}
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Additional Images */}
                {product.images && product.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-4">
                    {product.images.slice(1, 4).map((image, index) => (
                      <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                        <Image
                          src={image}
                          alt={`${product.name} ${index + 2}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {product.category}
                  </span>
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price */}
                {product.price && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Pricing</h3>
                    <div className="text-2xl font-bold text-primary">
                      ${product.price.min} - ${product.price.max} {product.price.currency}
                    </div>
                    <div className="text-sm text-gray-600">{product.price.unit}</div>
                  </div>
                )}

                {/* Key Info */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">MOQ</h4>
                    <p className="text-gray-600">{product.moq}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Lead Time</h4>
                    <p className="text-gray-600">{product.leadTime}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Origin</h4>
                    <p className="text-gray-600">{product.origin}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Category</h4>
                    <p className="text-gray-600">{product.category}</p>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Mail size={20} />
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Phone size={20} />
                    Get Sample
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Features */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Star className="text-primary" size={24} />
                  Key Features
                </h3>
                <div className="space-y-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Package className="text-primary" size={24} />
                  Specifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="border-b border-gray-100 pb-2">
                      <div className="font-semibold text-gray-900 text-sm">{key}</div>
                      <div className="text-gray-600">{value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Award className="text-primary" size={24} />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {product.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Shield size={16} className="text-green-500" />
                      <span className="text-gray-700">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Packaging & Shipping */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Truck className="text-primary" size={24} />
                  Packaging & Shipping
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Packaging Options</h4>
                    <ul className="space-y-2">
                      {product.packaging.map((pkg, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{pkg}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Shipping Information</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Lead Time:</span>
                        <div className="font-medium">{product.leadTime}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">MOQ:</span>
                        <div className="font-medium">{product.moq}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applications */}
              {product.applications && (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <Globe className="text-primary" size={24} />
                    Applications
                  </h3>
                  <div className="space-y-3">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <ArrowRight size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{application}</span>
                      </div>
                    ))}
                  </div>
                  
                  {product.nutritionalInfo && (
                    <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-4">Nutritional Information</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        {Object.entries(product.nutritionalInfo).map(([key, value]) => (
                          <div key={key}>
                            <span className="text-gray-500">{key}:</span>
                            <div className="font-medium">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Related Products
                </h2>
                <p className="text-lg text-gray-600">
                  Explore other premium products in the {category.name} category
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${params.category}/${relatedProduct.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedProduct.shortDescription}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          MOQ: {relatedProduct.moq}
                        </span>
                        <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Interested in {product.name}?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Contact us for detailed specifications, samples, and custom quotes. 
              Our experts are ready to help you with your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Request Detailed Quote
              </Link>
              <Link
                href={`/products/${params.category}`}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                View More {category.name}
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductPage;
