"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  value: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  iconOnly?: boolean;
}

export default function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  className = "",
  iconOnly = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  if (iconOnly) {
    return (
      <button
        type="button"
        onClick={onCopy}
        aria-label={copied ? copiedLabel : label}
        className={`inline-flex items-center justify-center h-9 w-9 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors ${className}`}
      >
        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={`inline-flex items-center justify-center gap-2 h-9 px-3 rounded-md text-sm font-medium transition-colors ${
        copied
          ? "bg-green-500/15 text-green-300 ring-1 ring-green-500/30"
          : "bg-white/5 text-gray-300 hover:bg-white/10 ring-1 ring-white/10"
      } ${className}`}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? copiedLabel : label}
    </button>
  );
}
