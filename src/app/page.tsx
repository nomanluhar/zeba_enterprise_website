import HeroSection from '@/components/sections/home/HeroSection';
import AboutSection from '@/components/sections/home/AboutSection';
import ServicesSection from '@/components/sections/home/ServicesSection';
import ProductCategoriesSection from '@/components/sections/home/ProductCategoriesSection';
import WhyChooseUsSection from '@/components/sections/home/WhyChooseUsSection';
import CertificationsSection from '@/components/sections/home/CertificationsSection';
import CTASection from '@/components/sections/home/CTASection';

const HomePage = () => (
  <div className="min-h-screen">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProductCategoriesSection />
    <WhyChooseUsSection />
    {/* <CertificationsSection /> */}
    <CTASection />
  </div>
);

export default HomePage;