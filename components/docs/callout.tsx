"use client";

import { ReactNode } from "react";
import {
  Info,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
  XCircle,
} from "lucide-react";

type CalloutType = "info" | "warning" | "success" | "tip" | "error";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
  className?: string;
}

const calloutConfig = {
  info: {
    icon: Info,
    containerClass: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    titleClass: "text-blue-400",
    iconClass: "text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    containerClass: "bg-yellow-500/10 border-yellow-500/30 text-yellow-400",
    titleClass: "text-yellow-400",
    iconClass: "text-yellow-400",
  },
  success: {
    icon: CheckCircle,
    containerClass: "bg-green-500/10 border-green-500/30 text-green-400",
    titleClass: "text-green-400",
    iconClass: "text-green-400",
  },
  tip: {
    icon: Lightbulb,
    containerClass: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    titleClass: "text-orange-400",
    iconClass: "text-orange-400",
  },
  error: {
    icon: XCircle,
    containerClass: "bg-red-500/10 border-red-500/30 text-red-400",
    titleClass: "text-red-400",
    iconClass: "text-red-400",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
  className = "",
}: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  const defaultTitles: Record<CalloutType, string> = {
    info: "Information",
    warning: "Warning",
    success: "Success",
    tip: "Pro Tip",
    error: "Error",
  };

  return (
    <div
      className={`rounded-lg border p-4 my-6 ${config.containerClass} ${className}`}
    >
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.iconClass}`} />
        <div className="flex-1">
          <h4 className={`font-semibold mb-2 ${config.titleClass}`}>
            {title || defaultTitles[type]}
          </h4>
          <div className="text-gray-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
