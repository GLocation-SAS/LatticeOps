"use client";

import React, { useState } from "react";

import { cn } from "@/lib/utils";

interface TooltipProps {
  content: string;

  children: React.ReactNode;

  position?: "top" | "bottom" | "left" | "right";

  className?: string;

  disabled?: boolean;
}
export function Tooltip({
  content,
  children,
  position = "top",
  className,
  disabled = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };
  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-primary-500/80 border-l-transparent border-r-transparent border-b-transparent",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-b-primary-500/80 border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full top-1/2 -translate-y-1/2 border-l-primary-500/80 border-t-transparent border-b-transparent border-r-transparent",
    right:
      "right-full top-1/2 -translate-y-1/2 border-r-primary-500/80 border-t-transparent border-b-transparent border-l-transparent",
  };
  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      
      {children}
      {isVisible && (
        <div
          className={cn(
            "absolute z-[100] px-5 py-2.5 text-[13px] font-heading font-bold text-white bg-gradient-to-br from-primary-400/90 to-primary-600/90 backdrop-blur-xl border border-white/20 rounded-[18px] shadow-[0_12px_40px_-12px_rgba(51,177,225,0.4)] whitespace-nowrap animate-in fade-in zoom-in-90 slide-in-from-bottom-2 duration-300 ease-out pointer-events-none",
            positionClasses[position],
            className,
          )}
          role="tooltip"
        >
          {content}
          {/* Arrow with glass effect */}
          <div
            className={cn(
              "absolute border-4 border-transparent",
              position === "top" && "top-full left-1/2 -translate-x-1/2 border-t-primary-500/90",
              position === "bottom" && "bottom-full left-1/2 -translate-x-1/2 border-b-primary-400/90",
              position === "left" && "left-full top-1/2 -translate-y-1/2 border-l-primary-500/90",
              position === "right" && "right-full top-1/2 -translate-y-1/2 border-r-primary-500/90",
            )}
          />
        </div>
      )}
    </div>
  );
}




