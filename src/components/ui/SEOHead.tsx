import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object;
}

export function generateSEOMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
}: SEOHeadProps): Metadata {
  const siteName = 'Zeba Enterprise';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://zeba-enterprise.com';

  return {
    title: fullTitle,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType as 'website',
      locale: 'en_US',
      url: canonical || baseUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: canonical || baseUrl,
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

// Schema.org structured data generators
export const generateBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zeba Enterprise',
  url: 'https://zeba-enterprise.com',
  logo: 'https://zeba-enterprise.com/images/logo.png',
  description: 'Leading import-export company specializing in connecting global markets with premium Indian products.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '[Placeholder Address]',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'India',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8238824463',
    contactType: 'Customer Service',
    email: 'info@zeba-enterprise.com',
    availableLanguage: ['English', 'Hindi', 'Gujarati'],
  },
  sameAs: [
    'https://www.linkedin.com/company/zeba-enterprise',
    'https://www.facebook.com/zeba-enterprise',
    'https://twitter.com/zeba-enterprise',
  ],
  areaServed: 'Worldwide',
  serviceType: ['Import Services', 'Export Services', 'International Trade Consultation'],
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'Zeba Enterprise',
    url: 'https://zeba-enterprise.com',
  },
  url: service.url,
  areaServed: 'Worldwide',
  serviceType: 'Import Export Services',
});

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image?: string;
  category: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description,
  image: product.image || '/images/placeholder-product.jpg',
  category: product.category,
  manufacturer: {
    '@type': 'Organization',
    name: 'Zeba Enterprise',
    url: 'https://zeba-enterprise.com',
  },
  offers: {
    '@type': 'Offer',
    availability: 'InStock',
    priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  },
});

// Component for injecting JSON-LD
export const StructuredData = ({ data }: { data: object }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
