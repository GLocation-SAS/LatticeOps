"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle, CheckCircle2, AlertTriangle, Info as InfoIcon } from "lucide-react";
import { Button } from "./Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  sizeVariant?: "S" | "M" | "L" | "XL";
  state?: "Info" | "Success" | "Warning" | "Error";
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  className?: string;
  showAccent?: boolean;
  accentColor?: string;
  footer?: React.ReactNode;
}

export function Modal({
  isOpen,
  onClose,
  title,
  description,
  children,
  size = "md",
  sizeVariant,
  state,
  primaryActionLabel,
  secondaryActionLabel,
  onPrimaryAction,
  onSecondaryAction,
  className,
  showAccent = true,
  accentColor,
  footer,
}: ModalProps) {
  if (!isOpen) return null;

  // Map sizeVariant to size if provided
  const finalSize = sizeVariant
    ? (sizeVariant.toLowerCase() as "sm" | "md" | "lg" | "xl")
    : size;

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
  };

  // Determine icon and color based on state
  const stateConfig = {
    Info: {
      icon: <InfoIcon size={32} className="text-primary-700" />,
      bg: "bg-primary-700/10",
      accent: "bg-primary-700",
    },
    Success: {
      icon: <CheckCircle2 size={32} className="text-success-500" />,
      bg: "bg-success-500/10",
      accent: "bg-success-500",
    },
    Warning: {
      icon: <AlertTriangle size={32} className="text-warning-500" />,
      bg: "bg-warning-500/10",
      accent: "bg-warning-500",
    },
    Error: {
      icon: <AlertCircle size={32} className="text-error-500" />,
      bg: "bg-error-500/10",
      accent: "bg-error-500",
    },
  };

  const finalAccentColor = accentColor || (state ? stateConfig[state].accent : "bg-primary-700");

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={cn(
          "relative w-full bg-white dark:bg-neutral-100 rounded-[40px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-neutral-100 dark:border-neutral-300",
          sizeClasses[finalSize === "sm" ? "sm" : finalSize === "md" ? "md" : finalSize === "lg" ? "lg" : "xl"],
          className
        )}
      >
        {/* Accent Top Bar */}
        {showAccent && <div className={cn("h-1.5 w-full", finalAccentColor)} />}

        <div className="p-10 md:p-12">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-all border border-neutral-100 dark:border-neutral-300 z-20"
          >
            <X size={20} />
          </button>

          {/* State Icon */}
          {state && (
            <div className="flex justify-center mb-8">
              <div className={cn("p-5 rounded-[28px]", stateConfig[state].bg)}>
                {stateConfig[state].icon}
              </div>
            </div>
          )}

          {/* Header & Description */}
          <div className={cn("space-y-4 mb-10", state && "text-center")}>
            {title && (
              <h3 className="text-3xl font-heading font-bold italic tracking-tight text-neutral-900 dark:text-white">
                {title}
              </h3>
            )}
            {description && (
              <p className={cn("text-lg font-sans font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed", state && "max-w-[340px] mx-auto")}>
                {description}
              </p>
            )}
          </div>

          {/* Content */}
          <div className="relative z-10">{children}</div>

          {/* Footer / Actions */}
          {(footer || primaryActionLabel || secondaryActionLabel) && (
            <div className={cn("mt-12 flex flex-col sm:flex-row items-center gap-3", state ? "justify-center" : "justify-end")}>
              {footer ? (
                footer
              ) : (
                <>
                  {secondaryActionLabel && (
                    <Button
                      variant="neutral"
                      className="w-full sm:w-auto min-w-[140px]"
                      onClick={onSecondaryAction || onClose}
                    >
                      {secondaryActionLabel}
                    </Button>
                  )}
                  {primaryActionLabel && (
                    <Button
                      variant={state === "Error" ? "error" : state === "Warning" ? "warning" : "primary"}
                      className="w-full sm:w-auto min-w-[140px]"
                      onClick={onPrimaryAction}
                    >
                      {primaryActionLabel}
                    </Button>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}




