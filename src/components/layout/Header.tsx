"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  TwitterIcon,
  Linkedin,
} from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    {
      label: "About Us",
      submenu: [
        { href: "/about/company", label: "Company" },
        { href: "/about/certification", label: "Certification" },
        { href: "/about/key-person", label: "Key Person" },
      ],
    },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+91-XXXXXXXXXX</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>info@zebaenterprise.com</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>Ahmedabad, Gujarat, India</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span>Follow Us:</span>
            <div className="flex gap-2">
              <Facebook size={14} />
              <Instagram size={14} />
              <TwitterIcon size={14} />
              <Linkedin size={14} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-13 lg:h-15">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-13 h-13 rounded-lg flex items-center justify-center overflow-hidden">
                <img src="/zeba_enterprise_logo.png" alt="Zeba Enterprise Logo" className="object-contain w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold ">
                  <span className="text-primary">Zeba</span>
                  <span className="text-secondary">&nbsp;Enterprise</span>
                </span>
                <span className="text-xs text-muted-foreground">
                  Import • Export • Global Trade
                </span>
              </div>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden flex lg:flex items-center gap-8">
              {navItems.map((item, idx) =>
                item.submenu ? (
                  <div key={item.label} className="relative group">
                    <button
                      className={`relative text-base font-semibold transition-colors hover:text-primary tracking-wide px-2 flex items-center gap-1 ${
                        item.submenu.some((sub) => pathname.startsWith(sub.href)) ? "text-primary" : "text-gray-700"
                      }`}
                    >
                      {item.label}
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-5 py-3 text-base font-medium hover:bg-primary/10 transition-colors ${
                            pathname === sub.href ? "text-primary" : "text-gray-700"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative text-base font-semibold transition-colors hover:text-primary tracking-wide px-2 ${
                      pathname === item.href ? "text-primary" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
                    )}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-lg">
            <nav className="max-w-7xl mx-auto px-6 py-6 space-y-6">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.label} className="">
                    <div className="font-semibold text-lg py-3 px-2 text-gray-700">{item.label}</div>
                    <div className="pl-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block py-2 text-base font-medium transition-colors ${
                            pathname === sub.href ? "text-primary" : "text-gray-700 hover:text-primary"
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-3 text-lg font-semibold transition-colors ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="block w-full bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-bold text-center mt-6 hover:bg-secondary/90 transition-colors text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
