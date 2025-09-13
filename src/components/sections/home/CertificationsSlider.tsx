'use client'
import React, { useState } from "react";
import Image from "next/image";

const certifications = [
  {
    name: "DGFT",
    image: "/images/certificate/dgft.png",
    description: "Directorate General of Foreign Trade License Holder",
  },
  {
    name: "APEDA",
    image: "/images/certificate/apeda.png",
    description: "Agricultural & Processed Food Products Export Development Authority",
  },
  {
    name: "MSME",
    image: "/images/certificate/msme.png",
    description: "Registered Micro, Small & Medium Enterprise",
  },
  {
    name: "FIEO",
    image: "/images/certificate/fieo.png",
    description: "Federation of Indian Export Organisations Member",
  },
  {
    name: "FICCI",
    image: "/images/certificate/ficci.png",
    description: "Federation of Indian Chambers of Commerce & Industry",
  },
  {
    name: "GCCI",
    image: "/images/certificate/gcci.png",
    description: "Gujarat Chamber of Commerce & Industry",
  },
  {
    name: "UDYOG AADHAR",
    image: "/images/certificate/udhyog-aadhar.png",
    description: "Udyog Aadhaar Registration for MSME",
  },
  {
    name: "GST",
    image: "/images/certificate/gst.png",
    description: "Goods and Services Tax Registered",
  },
  {
    name: "FDA",
    image: "/images/certificate/fda.png",
    description: "Food and Drug Administration Approval",
  },
  {
    name: "SPICE BOARD",
    image: "/images/certificate/spice.png",
    description: "Spice Board of India Registration",
  },
  {
    name: "HALAL",
    image: "/images/certificate/halal.png",
    description: "Halal Certified Products",
  },
  {
    name: "GMP",
    image: "/images/certificate/gmp.png",
    description: "Good Manufacturing Practice Certified",
  },
  {
    name: "EAEI Training",
    image: "/images/certificate/moin-bhai-certificate.png",
    description: "Export-Import Training Certification",
  },
];

const CertificationsSlider = () => {
  const [current, setCurrent] = useState(0);
  const visibleCards = 3;
  const maxIndex = certifications.length - visibleCards;

  const handlePrev = () => {
    setCurrent((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleNext = () => {
    setCurrent((prev) => (prev < maxIndex ? prev + 1 : maxIndex));
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="text-center mb-20">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
            Our Certifications
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            We maintain the highest standards of quality and compliance with international certifications.
          </p>
        </div>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow-md disabled:opacity-40"
            onClick={handlePrev}
            disabled={current === 0}
            aria-label="Previous"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${current * (100 / visibleCards)}%)` }}
            >
              {certifications.map((cert, idx) => (
                <div
                  key={cert.name}
                  className="min-w-0 w-full sm:w-80 max-w-xs flex-shrink-0 px-4"
                  style={{ flex: `0 0 ${100 / visibleCards}%` }}
                >
                  <div className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-6 h-full">
                    <div className="w-20 h-20 mb-4 relative">
                      <Image src={cert.image} alt={cert.name} fill className="object-contain rounded" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 text-center">{cert.name}</h3>
                    <p className="text-gray-600 text-sm text-center">{cert.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-white rounded-full p-2 shadow-md disabled:opacity-40"
            onClick={handleNext}
            disabled={current === maxIndex}
            aria-label="Next"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSlider;
