import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Page <section> wrapper with consistent vertical rhythm and an offset so
 * anchor-linked sections aren't hidden behind the fixed Navbar.
 */
export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /** Apply the shared gradient-mesh background utility. */
  mesh?: boolean;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, as: Comp = "section", mesh = false, ...props }, ref) => (
    <Comp
      ref={ref}
      className={cn(
        "section-spacing relative scroll-mt-24 w-full",
        mesh && "gradient-mesh",
        className
      )}
      {...props}
    />
  )
);
Section.displayName = "Section";
