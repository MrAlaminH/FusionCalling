"use client";

import { useState } from "react";
import CodeBlock from "./code-block";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ResponseExampleProps {
  code: string;
  language?: string;
  title?: string;
  collapsible?: boolean;
}

export default function ResponseExample({
  code,
  language = "json",
  title = "Response Example",
  collapsible = false,
}: ResponseExampleProps) {
  const [isExpanded, setIsExpanded] = useState(!collapsible);

  if (!collapsible) {
    return (
      <div className="my-6">
        <h4 className="text-white font-semibold mb-3">{title}</h4>
        <CodeBlock code={code} language={language} />
      </div>
    );
  }

  return (
    <div className="my-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full text-white font-semibold mb-3 hover:text-orange-400 transition-colors"
      >
        <span>{title}</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>
      {isExpanded && <CodeBlock code={code} language={language} />}
    </div>
  );
}
