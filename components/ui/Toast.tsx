import React from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: "error" | "success" | "info";
}

const Toast: React.FC<ToastProps> = ({ message, onClose, type = "error" }) => {
  // Define styles based on toast type
  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-600 border-green-700";
      case "info":
        return "bg-blue-600 border-blue-700";
      case "error":
      default:
        return "bg-red-600 border-red-700";
    }
  };

  return (
    <div
      className={`fixed top-20 left-1/2 transform -translate-x-1/2 ${getToastStyles()} text-white px-4 py-3 rounded-lg shadow-xl transition-opacity duration-300 z-50 border-2 flex items-center justify-between min-w-[300px] max-w-md`}
    >
      <span className="font-semibold text-sm">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none bg-transparent border border-white/30 rounded-full w-6 h-6 flex items-center justify-center"
        aria-label="Close"
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
