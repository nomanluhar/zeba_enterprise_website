import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Export Services',
    'Import Agent',
    'Sourcing Agent',
    'Trade Consultation',
    'Quality Assurance',
    'Logistics Support',
  ];

  const products = [
    'Textiles & Garments',
    'Handicrafts',
    'Spices & Food Products',
    'Furniture',
    'Electronics',
    'Machinery',
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/zeba_enterprise_logo.png" alt="Zeba Enterprise Logo" className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">Zeba Enterprise</span>
                <span className="text-xs text-gray-400">Import • Export • Global Trade</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading import-export company specializing in connecting global markets with premium Indian products. 
              Your trusted partner for international trade solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-secondary" />
                <span className="text-sm">+91-XXXXXXXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-secondary" />
                <span className="text-sm">info@zeba-enterprise.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-0.5" />
                <span className="text-sm">
                  [Placeholder Address]<br />
                  Ahmedabad, Gujarat, India
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-secondary" />
                <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Categories</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Zeba Enterprise. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-secondary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-secondary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
