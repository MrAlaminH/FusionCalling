import * as React from "react";
import { cn } from "@/lib/utils";

/** Standard responsive content container with consistent gutters/max width. */
export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Tailwind max-width override, e.g. "max-w-6xl". Defaults to max-w-7xl. */
  size?: string;
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "max-w-7xl", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "container mx-auto px-4 sm:px-6 lg:px-8",
        size,
        className
      )}
      {...props}
    />
  )
);
Container.displayName = "Container";
