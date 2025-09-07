import ProductGrid from '@/components/ui/ProductGrid';
import { productCategories } from '@/data/products';
import React from 'react';

const productCategoriesForGrid = productCategories.map(category => ({
  id: parseInt(category.id.replace(/[^0-9]/g, '')) || Math.random() * 1000,
  name: category.name,
  category: category.name,
  image: category.image,
  description: category.description,
  features: category.features,
  href: `/products/${category.slug}`
}));

const ProductCategoriesSection = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
          What We Export
        </h2>
        <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Discover our wide range of premium quality products sourced from trusted manufacturers 
          and artisans across India.
        </p>
      </div>
      <ProductGrid 
        products={productCategoriesForGrid} 
        showViewAll={true} 
        viewAllHref="/products"
      />
    </div>
  </section>
);

export default ProductCategoriesSection;
