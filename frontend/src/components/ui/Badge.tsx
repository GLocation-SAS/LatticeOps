"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center font-heading font-black tracking-widest uppercase transition-all duration-300 select-none",
  {
    variants: {
      category: {
        informative: "",
        default: "",
        secondary: "",
        success: "",
        error: "",
        warning: "",
        neutral: "",
      },
      mode: {
        solid: "border-transparent text-white shadow-lg",
        outline: "bg-transparent border-[1.5px]",
        soft: "border-transparent",
      },
      size: {
        sm: "px-2.5 py-1 text-[9px] gap-1 rounded-full",
        md: "px-3 py-1.5 text-[10px] gap-1.5 rounded-full",
        lg: "px-4.5 py-2 text-[11px] gap-2 rounded-full",
      },
    },
    compoundVariants: [
      // Solid Modes
      { category: "informative", mode: "solid", className: "bg-info-500 shadow-info-500/25" },
      { category: "default", mode: "solid", className: "bg-primary-500 shadow-primary-500/25" },
      { category: "secondary", mode: "solid", className: "bg-secondary-500 shadow-secondary-500/25" },
      { category: "success", mode: "solid", className: "bg-success-500 shadow-success-500/25" },
      { category: "error", mode: "solid", className: "bg-error-500 shadow-error-500/25" },
      { category: "warning", mode: "solid", className: "bg-warning-500 shadow-warning-500/25" },
      { category: "neutral", mode: "solid", className: "bg-neutral-500 shadow-neutral-500/25" },
      // Outline Modes
      { category: "informative", mode: "outline", className: "border-info-500 text-info-600 dark:border-info-500/40 dark:text-info-400 bg-transparent" },
      { category: "default", mode: "outline", className: "border-primary-500 text-primary-700 dark:border-primary-500/40 dark:text-primary-400 bg-transparent" },
      { category: "secondary", mode: "outline", className: "border-secondary-500 text-secondary-600 dark:border-secondary-500/40 dark:text-secondary-400 bg-transparent" },
      { category: "success", mode: "outline", className: "border-success-500 text-success-600 dark:border-success-500/40 dark:text-success-400 bg-transparent" },
      { category: "error", mode: "outline", className: "border-error-500 text-error-600 dark:border-error-500/40 dark:text-error-400 bg-transparent" },
      { category: "warning", mode: "outline", className: "border-warning-500 text-warning-600 dark:border-warning-500/40 dark:text-warning-400 bg-transparent" },
      { category: "neutral", mode: "outline", className: "border-neutral-500 text-neutral-600 dark:border-neutral-300/40 dark:text-neutral-300 bg-transparent" },
      // Soft Modes
      { category: "informative", mode: "soft", className: "bg-info-50 text-info-600 dark:bg-info-500/10 dark:text-info-400 border border-transparent dark:border-info-500/20" },
      { category: "default", mode: "soft", className: "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400 border border-transparent dark:border-primary-500/20" },
      { category: "secondary", mode: "soft", className: "bg-secondary-50 text-secondary-600 dark:bg-secondary-500/10 dark:text-secondary-400 border border-transparent dark:border-secondary-500/20" },
      { category: "success", mode: "soft", className: "bg-success-50 text-success-600 dark:bg-success-500/10 dark:text-success-400 border border-transparent dark:border-success-500/20" },
      { category: "error", mode: "soft", className: "bg-error-50 text-error-600 dark:bg-error-500/10 dark:text-error-400 border border-transparent dark:border-error-500/20" },
      { category: "warning", mode: "soft", className: "bg-warning-50 text-warning-600 dark:bg-warning-500/10 dark:text-warning-400 border border-transparent dark:border-warning-500/20" },
      { category: "neutral", mode: "soft", className: "bg-neutral-100 text-neutral-600 dark:bg-neutral-500/10 dark:text-neutral-300 border border-transparent dark:border-neutral-500/20" },
    ],
    defaultVariants: {
      category: "default",
      mode: "solid",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode;
  showDot?: boolean;
  variant?: string; // Legacy support
}

export function Badge({ 
  className, 
  category: categoryProp, 
  mode: modeProp, 
  variant,
  size, 
  icon, 
  showDot, 
  children, 
  ...props 
}: BadgeProps) {
  // Legacy prop mapping
  let category = categoryProp;
  let mode = modeProp;

  if (variant && !category && !mode) {
    if (variant.startsWith("soft-")) {
      mode = "soft";
      const cat = variant.replace("soft-", "");
      category = (cat === "info" ? "informative" : cat) as any;
    } else if (variant.startsWith("outline-")) {
      mode = "outline";
      const cat = variant.replace("outline-", "");
      category = (cat === "info" ? "informative" : cat) as any;
    } else {
      mode = "solid";
      category = (variant === "info" ? "informative" : variant) as any;
    }
  }

  return (
    <div
      className={cn(badgeVariants({ category: category as any, mode, size }), className)}
      {...props}
    >
      {showDot && (
        <span className={cn(
          "shrink-0 rounded-full",
          size === "sm" ? "w-1 h-1" : size === "md" ? "w-1.5 h-1.5" : "w-2 h-2",
          mode === "solid" ? "bg-white" : "bg-current"
        )} />
      )}
      {icon && <span className="shrink-0 flex items-center justify-center">{icon}</span>}
      {children}
    </div>
  );
}

export { badgeVariants };




