import React, { useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

interface EnquiryModalProps {
  open: boolean;
  onClose: () => void;
  productCategory: string;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ open, onClose, productCategory }) => {
  // Hide productInterest dropdown and set value
  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-xl font-bold mb-4 text-primary">Product Enquiry</h2>
      <ContactForm
        className=""
        // @ts-ignore
        initialProductInterest={productCategory}
        hideProductInterest
      />
    </Modal>
  );
};

export default EnquiryModal;
