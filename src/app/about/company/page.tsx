
import { generateSEOMetadata } from '@/components/ui/SEOHead';
import type { Metadata } from 'next';
import AboutPage from '../page';

export const metadata: Metadata = generateSEOMetadata({
	title: 'Company Profile - Zeba Enterprise | Leading Import Export Company',
	description: 'Discover the company profile of Zeba Enterprise, a trusted import-export partner in India. Learn about our history, mission, vision, and values in global trade.',
	keywords: 'company profile, about zeba enterprise, import export company India, business history, mission vision values',
	canonical: 'https://zeba-enterprise.com/about/company',
	ogImage: '/images/hero-page-sliders/hero-1.jpg',
	ogType: 'profile',
});

export default AboutPage;
