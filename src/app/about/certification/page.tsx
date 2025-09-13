import React from "react";
import Image from "next/image";

const certifications = [
  {
    title: "DGFT",
    image: "/images/certificate/dgft.png",
    description: "Directorate General of Foreign Trade (DGFT) License. This certificate authorizes us to conduct import and export activities in compliance with Indian government regulations, ensuring legal and secure trade operations.",
  },
  {
    title: "APEDA",
    image: "/images/certificate/apeda.png",
    description: "Agricultural & Processed Food Products Export Development Authority (APEDA) Registration. This enables us to export a wide range of agricultural and processed food products globally, meeting international standards.",
  },
  {
    title: "MSME",
    image: "/images/certificate/msme.png",
    description: "Registered as a Micro, Small & Medium Enterprise (MSME), we are recognized for our contribution to the Indian economy and are eligible for various government benefits and support schemes.",
  },
  {
    title: "FIEO",
    image: "/images/certificate/fieo.png",
    description: "Federation of Indian Export Organisations (FIEO) Membership. This membership connects us with a network of exporters and provides access to valuable resources and export promotion initiatives.",
  },
  {
    title: "FICCI",
    image: "/images/certificate/ficci.png",
    description: "Federation of Indian Chambers of Commerce & Industry (FICCI) Affiliation. Being affiliated with FICCI strengthens our credibility and business network in the industry.",
  },
  {
    title: "GCCI",
    image: "/images/certificate/gcci.png",
    description: "Gujarat Chamber of Commerce & Industry (GCCI) Membership. This membership supports our business growth and connects us with key stakeholders in Gujarat's trade ecosystem.",
  },
  {
    title: "UDYOG AADHAR",
    image: "/images/certificate/udhyog-aadhar.png",
    description: "Udyog Aadhaar Registration for MSME. This registration provides us with a unique identification number and access to government schemes for MSMEs.",
  },
  {
    title: "GST",
    image: "/images/certificate/gst.png",
    description: "Goods and Services Tax (GST) Registration. Our GST registration ensures compliance with Indian tax laws and enables seamless business transactions across India.",
  },
  {
    title: "FDA",
    image: "/images/certificate/fda.png",
    description: "Food and Drug Administration (FDA) Approval. This certification allows us to export food and pharmaceutical products that meet stringent safety and quality standards.",
  },
  {
    title: "SPICE BOARD",
    image: "/images/certificate/spice.png",
    description: "Spice Board of India Registration. This registration authorizes us to export a variety of Indian spices, ensuring quality and authenticity in every shipment.",
  },
  {
    title: "HALAL",
    image: "/images/certificate/halal.png",
    description: "Halal Certification. Our products are certified Halal, meeting the dietary requirements of customers in various international markets.",
  },
  {
    title: "GMP",
    image: "/images/certificate/gmp.png",
    description: "Good Manufacturing Practice (GMP) Certification. This ensures our manufacturing processes meet international quality and safety standards.",
  },
  {
    title: "EAEI Training",
    image: "/images/certificate/moin-bhai-certificate.png",
    description: "Export-Import Training Certification. Our team is trained and certified in export-import procedures, ensuring smooth and compliant global trade operations.",
  },
];

const CertificationPage = () => (
  <div className="min-h-screen py-16 bg-white">
    <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">Our Certifications</h1>
      <p className="text-base text-gray-700 max-w-2xl mx-auto mb-12 text-center">
        We are pleased to inform you that Zeba Enterprise Ltd is certified by government of India according to the following standards and permitted to export our quality products globally across the world as per our customer needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center p-6">
            <div className="w-24 h-24 mb-4 relative">
              <Image src={cert.image} alt={cert.title} fill className="object-contain rounded" />
            </div>
            <h2 className="font-semibold text-lg text-gray-900 mb-2 text-center">{cert.title}</h2>
            <p className="text-gray-600 text-sm text-center">{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CertificationPage;
