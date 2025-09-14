import {
  generateSEOMetadata,
  generateProductSchema,
  StructuredData,
} from "@/components/ui/SEOHead";
import {
  productCategories,
  getProductsByCategory,
  getCategoryBySlug,
} from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Package,
  Star,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    return {
      title: "Category Not Found | Zeba Enterprise",
      description: "The requested product category could not be found.",
    };
  }

  return generateSEOMetadata({
    title: `${category.name} - Premium Products | Zeba Enterprise`,
    description: `Explore our extensive range of ${category.name.toLowerCase()} including premium quality products for international export. ${
      category.description
    }`,
    keywords: `${category.name}, ${category.name} export, ${category.name} India, quality ${category.name}, international trade`,
    canonical: `https://zeba-enterprise.com/products/${params.category}`,
  });
}

export async function generateStaticParams() {
  return productCategories.map((category) => ({
    category: category.slug,
  }));
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const category = getCategoryBySlug(params.category);
  const products = category ? getProductsByCategory(category.id) : [];

  if (!category) {
    notFound();
  }

  // Generate product schemas for SEO
  const productSchemas = products.map((product) =>
    generateProductSchema({
      name: product.name,
      description: product.description,
      image: product.image,
      category: product.category,
    })
  );

  return (
    <>
      {productSchemas.map((schema, index) => (
        <StructuredData key={index} data={schema} />
      ))}

      <div className="min-h-screen">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-6">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary">
                Home
              </Link>
              <ArrowRight size={16} className="text-gray-400" />
              <Link
                href="/products"
                className="text-gray-500 hover:text-primary"
              >
                Products
              </Link>
              <ArrowRight size={16} className="text-gray-400" />
              <span className="text-gray-900 font-medium">{category.name}</span>
            </nav>
          </div>
        </section>

        {/* Category Hero */}
        <section className="relative bg-gradient-to-br from-primary to-secondary text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to All Products
                </Link>

                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  {category.name}
                </h1>
                <p className="text-xl lg:text-2xl mb-8 opacity-90">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {category.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{products.length}</div>
                    <div className="text-sm opacity-80">Products Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-sm opacity-80">Export Quality</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Package size={24} />
                    <div>
                      <div className="font-bold">Premium Quality</div>
                      <div className="text-sm opacity-90">
                        Certified Products
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Our {category.name} Collection
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover our premium {category.name.toLowerCase()} products,
                each carefully selected for quality, authenticity, and
                international standards.
              </p>
            </div>

            {products.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${params.category}/${product.id}`}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/20 hover:-translate-y-1"
                  >
                    {/* Product Image */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                      <Image
                        src={
                          product.images && product.images.length > 0
                            ? product.images[
                                Math.floor(
                                  Math.random() * product.images.length
                                )
                              ]
                            : product.image
                        }
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                      {/* Price Badge
                      {product.price && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                            ${product.price.min}-{product.price.max} {product.price.unit}
                          </span>
                        </div>
                      )} */}

                      {/* View Details Button */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm text-primary px-6 py-3 rounded-lg font-semibold">
                          View Details
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-2 mb-4">
                        {product.features.slice(0, 3).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle
                              size={16}
                              className="text-green-500 flex-shrink-0"
                            />
                            <span className="text-sm text-gray-600">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Product Details */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          {/* MOQ: {product.moq} */}
                        </div>
                        <div className="flex items-center gap-1 text-secondary font-medium">
                          <span className="text-sm">Learn More</span>
                          <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Package size={64} className="text-gray-300 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Products Coming Soon
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We're working on adding more products to this category. Please
                  check back soon or contact us for specific requirements.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Category Features */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Why Choose Our {category.name}?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Star className="text-primary" size={32} />,
                  title: "Premium Quality",
                  description:
                    "All products undergo strict quality control and meet international standards.",
                },
                {
                  icon: <CheckCircle className="text-primary" size={32} />,
                  title: "Certified Products",
                  description:
                    "Certified by relevant authorities with proper documentation and compliance.",
                },
                {
                  icon: <Package className="text-primary" size={32} />,
                  title: "Export Ready",
                  description:
                    "Professional packaging and documentation for international shipping.",
                },
                {
                  icon: <ArrowRight className="text-primary" size={32} />,
                  title: "Fast Delivery",
                  description:
                    "Efficient processing and shipping to meet your delivery requirements.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Interested in Our {category.name}?
            </h2>
            <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
              Contact us for detailed product information, samples, and custom
              quotes. Our team is ready to help you find the perfect products
              for your requirements.
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

export default CategoryPage;
