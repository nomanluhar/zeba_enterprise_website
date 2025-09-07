'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye } from 'lucide-react';
import React, { useState } from 'react';
import EnquiryModal from './EnquiryModal';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  href?: string;
}

interface ProductGridProps {
  products: Product[];
  variant?: 'grid' | 'list' | 'carousel';
  showViewAll?: boolean;
  viewAllHref?: string;
  className?: string;
}

const ProductGrid = ({ 
  products, 
  variant = 'grid', 
  showViewAll = false,
  viewAllHref = '/products',
  className = '' 
}: ProductGridProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  if (!products.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No products available at the moment.</p>
      </div>
    );
  }

  const handleEnquire = (category: string) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  return (
    <div className={className}>
      {/* Products Grid */}
      <div className={`
        ${variant === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : ''}
        ${variant === 'list' ? 'space-y-6' : ''}
        ${variant === 'carousel' ? 'flex overflow-x-auto gap-6 pb-4' : ''}
      `}>
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            variant={variant === 'list' ? 'horizontal' : 'vertical'} 
            onEnquire={handleEnquire}
          />
        ))}
      </div>

      {/* View All Button */}
      {/* {showViewAll && (
        <div className="text-center mt-12">
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Products
            <ArrowRight size={20} />
          </Link>
        </div>
      )} */}

      {/* Enquiry Modal */}
      <EnquiryModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        productCategory={selectedCategory || ''}
      />
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  variant?: 'vertical' | 'horizontal';
  onEnquire?: (category: string) => void;
}

const ProductCard = ({ product, variant = 'vertical', onEnquire }: ProductCardProps) => {
  const cardContent = (
    <div className={`
      group bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/20
      ${variant === 'horizontal' ? 'flex flex-col md:flex-row' : ''}
      ${variant === 'vertical' ? 'hover:-translate-y-1' : ''}
      cursor-pointer
    `}>
      {/* Image Container */}
      <div className={`
        relative overflow-hidden bg-gray-50
        ${variant === 'horizontal' ? 'md:w-80 h-64 md:h-auto flex-shrink-0' : 'aspect-[4/3]'}
      `}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes={variant === 'horizontal' ? '320px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>
        </div>

        {/* View Details Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/90 backdrop-blur-sm text-primary p-3 rounded-full">
            <Eye size={24} />
          </div>
        </div>
  </div>

      {/* Content */}
      <div className={`
        p-6 flex flex-col
        ${variant === 'horizontal' ? 'flex-1' : ''}
      `}>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p 
          className="text-gray-600 mb-4 leading-relaxed flex-1 line-clamp-2 cursor-pointer"
          title={product.description}
        >
          {product.description}
        </p>

        {/* Features */}
        {product.features.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {product.features.length > 3 && (
                <li className="text-sm text-gray-500 italic">
                  +{product.features.length - 3} more features
                </li>
              )}
            </ul>
          </div>
        )}

        {/* Learn More Link */}
        <div className="flex items-center text-primary font-medium group-hover:text-secondary transition-colors mt-auto">
          <span className="text-sm">Learn More</span>
          <ArrowRight 
            size={16} 
            className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
          />
        </div>
      </div>
      {/* Enquire Button */}
      <button
        className="mt-4 w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors cursor-pointer"
        onClick={e => {
          e.stopPropagation();
          onEnquire && onEnquire(product.category);
        }}
      >
        Enquire
      </button>
    </div>
  );

  // If product has href, wrap in Link, but prevent navigation when Enquire is clicked
  if (product.href) {
    return (
      <div className="relative">
        <Link href={product.href} className="block" tabIndex={-1}>
          {cardContent}
        </Link>
        {/* Overlay the Enquire button to prevent Link navigation
        <button
          className="absolute left-0 right-0 bottom-0 mx-auto w-[90%] bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors z-10 cursor-default"
          style={{ pointerEvents: 'auto' }}
          onClick={e => {
            e.stopPropagation();
            e.preventDefault();
            onEnquire && onEnquire(product.category);
          }}
        >
          Enquire
        </button> */}
      </div>
    );
  }

  return cardContent;
};

export default ProductGrid;
