import React, { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
  type?: "error" | "success" | "info";
  /** While true the toast plays its exit transition; the parent unmounts it after. */
  closing?: boolean;
}

const Toast: React.FC<ToastProps> = ({ message, onClose, type = "error", closing = false }) => {
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

  // Enter transition: mount hidden, flip one frame later so the
  // opacity/transform transition actually plays.
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setEntered(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      role="alert"
      className={`fixed top-20 left-1/2 -translate-x-1/2 ${getToastStyles()} text-white px-4 py-3 rounded-lg shadow-xl transition-[opacity,transform] duration-200 ease-out z-50 border-2 flex items-center justify-between min-w-[300px] max-w-md ${
        entered && !closing
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-2"
      }`}
    >
      <span className="font-semibold text-sm">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 bg-transparent border border-white/30 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-150 active:scale-90"
        aria-label="Close"
      >
        ✖
      </button>
    </div>
  );
};

export default Toast;
