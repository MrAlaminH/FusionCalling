"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function CopyNumberButton() {
  const [copySuccess, setCopySuccess] = useState(false);
  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+19146394069");
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };
  return (
    <button
      onClick={handleCopyNumber}
      className={cn(
        "transition-all active:scale-95",
        copySuccess ? "text-green-500" : "text-brand hover:text-brand",
      )}
      aria-label={copySuccess ? "Copied phone number" : "Copy phone number"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {copySuccess ? (
          <polyline points="20 6 9 17 4 12"></polyline>
        ) : (
          <>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </>
        )}
      </svg>
    </button>
  );
}
