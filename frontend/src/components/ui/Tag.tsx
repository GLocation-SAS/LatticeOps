"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { X } from "lucide-react";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?:
    | "default"
    | "hover"
    | "success"
    | "pause"
    | "error"
    | "informative"
    | "button";

  size?: "L" | "M" | "S" | "XS";

  iconLeft?: React.ReactNode;

  iconRight?: React.ReactNode;

  onRemove?: () => void;

  label: string;
}
export function Tag({
  className,
  variant = "default",
  size = "M",
  iconLeft,
  iconRight,
  onRemove,
  label,
  ...props
}: TagProps) {
  const sizeConfigs = {
    L: "h-14 px-8 text-sm gap-4 rounded-3xl",
    M: "h-11 px-6 text-[13px] gap-3 rounded-2xl",
    S: "h-9 px-4 text-[12px] gap-2 rounded-xl",
    XS: "h-5.5 px-2 text-[9px] gap-1.5 rounded-md",
  };
  const variantConfigs = {
    default:
      "bg-white dark:bg-neutral-100 text-neutral-900 dark:text-white border-neutral-200 dark:border-neutral-300 shadow-sm hover:border-primary-500 hover:shadow-primary-500/10",
    hover:
      "bg-primary-500 text-white border-transparent shadow-lg shadow-primary-500/20",
    success:
      "bg-success-50/50 text-success-700 border-success-200 dark:bg-success-500/10 dark:border-success-500/30 dark:text-success-400",
    pause:
      "bg-warning-50/50 text-warning-700 border-warning-200 dark:bg-warning-500/10 dark:border-warning-500/30 dark:text-warning-400",
    error:
      "bg-error-50/50 text-error-700 border-error-200 dark:bg-error-500/10 dark:border-error-500/30 dark:text-error-400",
    informative:
      "bg-info-50/50 text-info-700 border-info-200 dark:bg-info-500/10 dark:border-info-500/30 dark:text-info-400",
    button:
      "bg-primary-500 text-white border-transparent hover:bg-primary-600 active:scale-95 shadow-lg shadow-primary-500/20",
  };
  const removeIconConfigs = {
    L: "w-10 h-10",
    M: "w-8 h-8",
    S: "w-6 h-6",
    XS: "w-4 h-4",
  };
  const removeButtonConfigs = {
    default:
      "bg-neutral-100 dark:bg-neutral-200 text-neutral-900 dark:text-white",
    hover: "bg-black/10 text-primary-950 dark:bg-white/20 dark:text-white",
    button: "bg-black/10 text-primary-950 dark:bg-white/20 dark:text-white",
    success:
      "bg-success-500/10 text-success-700 dark:bg-success-500/20 dark:text-success-300",
    pause:
      "bg-warning-500/10 text-warning-700 dark:bg-warning-500/20 dark:text-warning-300",
    error:
      "bg-error-500/10 text-error-700 dark:bg-error-500/20 dark:text-error-300",
    informative:
      "bg-info-500/10 text-info-700 dark:bg-info-500/20 dark:text-info-300",
  };
  return (
    <div
      className={cn(
        "inline-flex items-center font-heading font-bold transition-all duration-300 border-[1.5px] cursor-pointer whitespace-nowrap",
        sizeConfigs[size as keyof typeof sizeConfigs],
        variantConfigs[variant as keyof typeof variantConfigs],
        onRemove || iconRight ? "pr-2" : "",
        className,
      )}
      {...props}
    >
      
      {/* Left Icon */}
      {iconLeft && (
        <div className="shrink-0 flex items-center justify-center">
          
          {iconLeft}
        </div>
      )}
      {/* Label */}
      <span className="leading-none">{label}</span>
      {/* Right Icon / Remove Button */}
      {onRemove || iconRight ? (
        <div
          onClick={(e) => {
            if (onRemove) {
              e.stopPropagation();

              onRemove();
            }
          }}
          className={cn(
            "flex items-center justify-center rounded-full transition-all hover:brightness-90 shrink-0",
            removeIconConfigs[size as keyof typeof removeIconConfigs],
            removeButtonConfigs[variant as keyof typeof removeButtonConfigs],
          )}
        >
          
          {iconRight || (
            <X size={size === "S" ? 12 : 14} strokeWidth={3} />
          )}
        </div>
      ) : null}
    </div>
  );
}




