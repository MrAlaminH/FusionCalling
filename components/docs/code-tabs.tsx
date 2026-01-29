"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";

interface CodeExample {
  language: string;
  label: string;
  code: string;
}

interface CodeTabsProps {
  examples: CodeExample[];
  filename?: string;
}

const languageColors: Record<string, string> = {
  javascript: "bg-yellow-500/20 text-yellow-400",
  typescript: "bg-blue-500/20 text-blue-400",
  python: "bg-green-500/20 text-green-400",
  bash: "bg-gray-500/20 text-gray-400",
  json: "bg-orange-500/20 text-orange-400",
  html: "bg-red-500/20 text-red-400",
  css: "bg-blue-400/20 text-blue-300",
};

export default function CodeTabs({ examples, filename }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeExample = examples[activeTab];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(activeExample.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="relative group my-6 rounded-lg overflow-hidden border border-gray-800">
      {/* Header with tabs */}
      <div className="bg-gray-900 border-b border-gray-800 flex items-center justify-between">
        <div className="flex">
          {examples.map((example, index) => (
            <button
              key={example.language}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-3 text-sm font-medium transition-colors relative ${
                activeTab === index
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {example.label}
              {activeTab === index && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 pr-4">
          {filename && (
            <span className="text-xs text-gray-500 mr-2">{filename}</span>
          )}
          <button
            onClick={copyToClipboard}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Copy code"
          >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {/* Code content */}
      <div className="relative">
        <SyntaxHighlighter
          language={activeExample.language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            borderRadius: 0,
            padding: "1.5rem",
            fontSize: "0.875rem",
            lineHeight: "1.6",
          }}
          showLineNumbers={activeExample.code.split("\n").length > 5}
        >
          {activeExample.code}
        </SyntaxHighlighter>

        {/* Language badge */}
        <div
          className={`absolute top-4 right-4 px-2 py-1 rounded text-xs font-medium ${
            languageColors[activeExample.language] ||
            "bg-gray-500/20 text-gray-400"
          }`}
        >
          {activeExample.language}
        </div>
      </div>
    </div>
  );
}
