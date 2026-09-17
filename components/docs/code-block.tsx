"use client";

import { useState } from "react";
import { SyntaxHighlighter, vscDarkPlus } from "./highlighter";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export default function CodeBlock({
  code,
  language,
  filename,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative group my-6">
      {filename && (
        <div className="bg-zinc-950 px-4 py-2 text-sm text-gray-400 border-b border-white/10 rounded-t-xl">
          {filename}
        </div>
      )}
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 z-10 p-2 bg-zinc-800/90 hover:bg-zinc-700 rounded-lg transition opacity-100 sm:opacity-0 sm:group-hover:opacity-100 focus:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400 animate-scale-in" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: filename ? "0 0 0.75rem 0.75rem" : "0.75rem",
            padding: "1.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
          }}
          showLineNumbers={code.split("\n").length > 5}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
