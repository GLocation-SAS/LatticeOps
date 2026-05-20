"use client";

import * as React from "react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";
import { Sun, Moon } from "lucide-react";

export interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sizeVariant?: "L" | "M" | "S";
}

export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, sizeVariant = "M", ...props }, ref) => {
    const { theme, setTheme } = useTheme();
    const isDark = theme === "dark";

    const handleToggle = () => {
      setTheme(isDark ? "light" : "dark");
    };

    const sizeConfigs = {
      L: {
        track: "w-16 h-9",
        thumb: "w-7 h-7",
        translate: "translate-x-7",
        icon: 14,
      },
      M: {
        track: "w-12 h-7",
        thumb: "w-5 h-5",
        translate: "translate-x-5",
        icon: 12,
      },
      S: {
        track: "w-9 h-5",
        thumb: "w-3.5 h-3.5",
        translate: "translate-x-4",
        icon: 10,
      },
    };
    const currentSize = sizeConfigs[sizeVariant];

    return (
      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        onClick={handleToggle}
        className={cn(
          "relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-all duration-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          isDark
            ? "bg-neutral-950 border border-white/5 shadow-inner"
            : "bg-neutral-100 border border-neutral-200 hover:bg-neutral-200",
          currentSize.track,
          className
        )}
        {...props}
        ref={ref}
      >
        <span
          className={cn(
            "pointer-events-none flex items-center justify-center rounded-full shadow-lg ring-0 transition-all duration-500",
            isDark 
              ? cn(currentSize.translate, "bg-primary-500 text-white shadow-primary-500/20") 
              : "translate-x-1 bg-white text-neutral-400 shadow-neutral-200",
            currentSize.thumb
          )}
        >
          {isDark ? (
            <Moon size={currentSize.icon} className="animate-in zoom-in duration-500" />
          ) : (
            <Sun size={currentSize.icon} className="animate-in zoom-in duration-500 text-primary-500" />
          )}
        </span>
        
        {/* Track Icons */}
        {!isDark && (
          <Moon size={currentSize.icon} className="absolute right-2 text-neutral-300 -z-10" />
        )}
        {isDark && (
          <Sun size={currentSize.icon} className="absolute left-2 text-neutral-800 -z-10" />
        )}
      </button>
    );
  }
);

ThemeToggle.displayName = "ThemeToggle";
