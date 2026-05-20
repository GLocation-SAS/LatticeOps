"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  sizeVariant?: "L" | "M" | "S";
  variant?: "primary" | "default";
  aligned?: "left" | "right";
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      hint,
      sizeVariant = "M",
      variant = "primary",
      aligned = "left",
      error,
      disabled,
      checked: controlledChecked,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(false);
    const isChecked =
      controlledChecked !== undefined ? controlledChecked : internalChecked;

    const sizeConfigs = {
      L: { box: "w-8 h-8", check: 20, text: "text-base", labelGap: "gap-4" },
      M: { box: "w-6 h-6", check: 16, text: "text-sm", labelGap: "gap-3" },
      S: { box: "w-4 h-4", check: 12, text: "text-xs", labelGap: "gap-2" },
    };

    const currentSize = sizeConfigs[sizeVariant];

    const getBoxStyles = () => {
      if (disabled) {
        return "bg-neutral-100 dark:bg-neutral-200 border-neutral-200 dark:border-neutral-300 cursor-not-allowed opacity-50";
      }
      if (error) {
        return isChecked
          ? "bg-error-500 border-error-500 shadow-lg shadow-error-500/20"
          : "bg-white dark:bg-neutral-100 border-error-500 hover:bg-error-50 dark:hover:bg-error-900/20";
      }
      if (isChecked) {
        return "bg-primary-700 border-primary-700 shadow-lg shadow-primary-700/20";
      }
      return "bg-white dark:bg-neutral-100 border-neutral-200 dark:border-neutral-300 hover:border-primary-700 hover:shadow-md";
    };

    const handleToggle = () => {
      if (disabled) return;
      const nextChecked = !isChecked;
      if (controlledChecked === undefined) {
        setInternalChecked(nextChecked);
      }
      onChange?.({
        target: {
          ...props,
          checked: nextChecked,
          type: "checkbox",
        },
      } as any);
    };

    return (
      <div
        className={cn(
          "flex items-center transition-all group",
          currentSize.labelGap,
          aligned === "right"
            ? "flex-row-reverse justify-end text-right"
            : "flex-row justify-start text-left",
          disabled && "pointer-events-none",
          className,
        )}
      >
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <div
          onClick={handleToggle}
          className={cn(
            "shrink-0 rounded-[8px] border-[1.5px] border-solid flex items-center justify-center transition-all duration-300",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-primary-700 peer-focus-visible:ring-offset-2",
            "hover:scale-110 active:scale-95",
            !disabled && "cursor-pointer",
            currentSize.box,
            getBoxStyles(),
          )}
        >
          {isChecked && (
            <Check
              size={currentSize.check}
              className="text-white animate-in zoom-in-50 duration-300"
              strokeWidth={3.5}
            />
          )}
        </div>
        {(label || hint) && (
          <div
            className="flex flex-col gap-0.5 select-none cursor-pointer"
            onClick={handleToggle}
          >
            <div className="flex items-center gap-2">
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
            </div>
            {hint && label && (
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
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";




