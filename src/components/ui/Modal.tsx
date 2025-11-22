import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2 sm:px-4">
      <div
        className="bg-white rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl relative animate-fade-in overflow-y-auto max-h-[90vh]"
        style={{ boxSizing: 'border-box' }}
      >
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-primary text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        <div className="p-4 sm:p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
