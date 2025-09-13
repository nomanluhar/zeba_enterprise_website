import HeroSection from "@/components/sections/home/HeroSection";
import AboutSection from "@/components/sections/home/AboutSection";
import ServicesSection from "@/components/sections/home/ServicesSection";
import ProductCategoriesSection from "@/components/sections/home/ProductCategoriesSection";
import WhyChooseUsSection from "@/components/sections/home/WhyChooseUsSection";
import CertificationsSlider from "@/components/sections/home/CertificationsSlider";
import CTASection from "@/components/sections/home/CTASection";

const HomePage = () => (
  <div className="min-h-screen">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ProductCategoriesSection />
    <WhyChooseUsSection />
    <CertificationsSlider />
    <CTASection />
  </div>
);

export default HomePage;
