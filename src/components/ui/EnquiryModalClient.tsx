"use client";
import React, { useEffect, useState } from "react";
import EnquiryModal from "@/components/ui/EnquiryModal";

const EnquiryModalClient = () => {
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hasShown = localStorage.getItem("enquiryModalShown");
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowEnquiryModal(true);
        localStorage.setItem("enquiryModalShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <EnquiryModal open={showEnquiryModal} onClose={() => setShowEnquiryModal(false)} productCategory="" />
  );
};

export default EnquiryModalClient;
