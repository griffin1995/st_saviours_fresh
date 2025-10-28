/**
 * INTERACTIVE HOVER BUTTON COMPONENT - ST SAVIOUR'S CATHOLIC CHURCH
 * Created: January 2025
 * Adapted from My Private Tutor Online navigation system
 *
 * IDENTICAL FUNCTIONALITY with church-specific styling adaptation:
 * - Same hover animations and transitions
 * - Same component structure and props
 * - Same interactive behaviors
 * - Adapted colors for church branding (navy #3f4a7e and gold #ca9e5b)
 *
 * CONTEXT7 SOURCE: /tailwindlabs/tailwindcss.com - Font family utilities for church typography
 * FONT_STANDARDIZATION_REASON: Updated to use church font system with proper font family integration
 * CONTEXT7 SOURCE: /tailwindlabs/tailwindcss.com - Font weight utilities for refined typography
 * FONT_WEIGHT_REVISION: Maintained font-normal for consistent, elegant appearance
 */

import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

type InteractiveHoverButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-lg border bg-white text-[#3F4A7E] p-2 px-6 text-center font-normal font-display transition-colors duration-300 hover:bg-[#3F4A7E] hover:text-white",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#3F4A7E] transition-all duration-300 group-hover:scale-[100.8] group-hover:bg-white"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";