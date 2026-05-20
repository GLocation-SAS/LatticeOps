"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  hint?: string;

  sizeVariant?: "L" | "M" | "S";

  variant?: "primary" | "default";

  error?: boolean;
}
export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      className,
      label,
      hint,
      sizeVariant = "M",
      variant = "primary",
      error,
      disabled,
      ...props
    },
    ref,
  ) => {
    const sizeConfigs = {
      L: {
        outer: "w-8 h-8",
        inner: "w-4 h-4",
        text: "text-base",
        labelGap: "gap-4",
      },
      M: {
        outer: "w-6 h-6",
        inner: "w-3 h-3",
        text: "text-sm",
        labelGap: "gap-3",
      },
      S: {
        outer: "w-4 h-4",
        inner: "w-2 h-2",
        text: "text-xs",
        labelGap: "gap-2",
      },
    };
    const currentSize = sizeConfigs[sizeVariant];

    return (
      <label
        className={cn(
          "flex items-center transition-all group cursor-pointer",
          currentSize.labelGap,
          disabled && "cursor-not-allowed opacity-50",
          className,
        )}
      >
        <div className="relative flex items-center justify-center">
          <input
            type="radio"
            ref={ref}
            disabled={disabled}
            className="peer sr-only"
            {...props}
          />
          <div
            className={cn(
              "shrink-0 rounded-full border-[1.5px] border-solid transition-all duration-300",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-500 peer-focus-visible:ring-offset-2",
              "group-hover:scale-110 active:scale-95",
              currentSize.outer,
              disabled
                ? "bg-neutral-100 dark:bg-neutral-200 border-neutral-200 dark:border-neutral-300"
                : error
                  ? "border-error-500 bg-white dark:bg-neutral-100"
                  : "border-neutral-200 dark:border-neutral-300 bg-white dark:bg-neutral-100 peer-checked:border-primary-700 peer-checked:shadow-lg peer-checked:shadow-primary-700/20",
            )}
          />
          <div
            className={cn(
              "absolute rounded-full transition-all duration-300 scale-0 peer-checked:scale-100",
              currentSize.inner,
              disabled ? "bg-neutral-300 dark:bg-neutral-600" : "bg-primary-700",
            )}
          />
        </div>

        {(label || hint) && (
          <div className="flex flex-col gap-0.5 select-none">
            {label && (
              <span
                className={cn(
                  "font-heading font-bold tracking-tight text-neutral-900 dark:text-white leading-none",
                  currentSize.text,
                  disabled && "text-neutral-400 dark:text-neutral-600",
                )}
              >
                {label}
              </span>
            )}

            {hint && (
              <span
                className={cn(
                  "font-sans font-medium text-neutral-500 dark:text-neutral-400 leading-none opacity-80",
                  sizeVariant === "L" ? "text-sm" : "text-xs",
                  disabled && "text-neutral-300 dark:text-neutral-700",
                )}
              >
                {hint}
              </span>
            )}
          </div>
        )}
      </label>
    );
  },
);

RadioButton.displayName = "RadioButton";




