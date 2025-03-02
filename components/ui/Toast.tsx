import React from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-3 rounded-lg shadow-xl transition-opacity duration-300 z-50 border-2 border-red-700 flex items-center justify-between min-w-[300px] max-w-md">
      <span className="font-semibold text-sm">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-red-200 focus:outline-none"
        aria-label="Close"
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
