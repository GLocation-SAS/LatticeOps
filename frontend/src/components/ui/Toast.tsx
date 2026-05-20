"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  X,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info as InfoIcon,
} from "lucide-react";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "error" | "warning" | "info";
  title: string;
  description?: string;
  onClose?: () => void;
}

export const Toast = ({
  className,
  variant = "info",
  title,
  description,
  onClose,
  ...props
}: ToastProps) => {
  const configs = {
    info: {
      accent: "from-blue-500/20 to-transparent",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50 dark:bg-blue-900/20",
      iconBorder: "border-blue-100 dark:border-blue-800",
      icon: <InfoIcon size={20} />,
    },
    success: {
      accent: "from-green-500/20 to-transparent",
      iconColor: "text-green-500",
      iconBg: "bg-green-50 dark:bg-green-900/20",
      iconBorder: "border-green-100 dark:border-green-800",
      icon: <CheckCircle2 size={20} />,
    },
    error: {
      accent: "from-red-500/20 to-transparent",
      iconColor: "text-red-500",
      iconBg: "bg-red-50 dark:bg-red-900/20",
      iconBorder: "border-red-100 dark:border-red-800",
      icon: <AlertCircle size={20} />,
    },
    warning: {
      accent: "from-amber-500/20 to-transparent",
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 dark:bg-amber-900/20",
      iconBorder: "border-amber-100 dark:border-amber-800",
      icon: <AlertTriangle size={20} />,
    },
  };

  const config = configs[variant];

  return (
    <div
      className={cn(
        "relative w-[380px] flex items-center gap-4 p-4 rounded-[24px] bg-white/80 dark:bg-neutral-100/80 backdrop-blur-xl border border-neutral-100 dark:border-neutral-300 shadow-xl shadow-neutral-200/40 dark:shadow-black/20 overflow-hidden group transition-all animate-in slide-in-from-right-5 duration-500",
        className
      )}
      {...props}
    >
      {/* Left Gradient Accent */}
      <div 
        className={cn(
          "absolute top-0 left-0 w-24 h-full bg-gradient-to-r -z-10 pointer-events-none opacity-40",
          config.accent
        )} 
      />

      {/* Icon Box */}
      <div
        className={cn(
          "w-10 h-10 rounded-[14px] flex items-center justify-center shrink-0 border transition-transform duration-500 group-hover:scale-105",
          config.iconBg,
          config.iconBorder,
          config.iconColor
        )}
      >
        {React.cloneElement(config.icon as React.ReactElement<any>, { size: 18 })}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col gap-0.5 min-w-0 pr-4">
        <h3 className="text-[14px] font-heading font-bold text-neutral-900 dark:text-white leading-tight">
          {title}
        </h3>
        {description && (
          <p className="text-[13px] font-sans font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed truncate">
            {description}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="p-1 rounded-full text-neutral-300 dark:text-neutral-600 hover:text-neutral-500 dark:hover:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-200 transition-all duration-300"
      >
        <X size={16} />
      </button>
    </div>
  );
};




