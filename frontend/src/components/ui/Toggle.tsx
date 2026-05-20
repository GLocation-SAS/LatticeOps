"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  sizeVariant?: "L" | "M" | "S";
  label?: string;
  defaultPressed?: boolean;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className,
      pressed: controlledPressed,
      onPressedChange,
      sizeVariant = "M",
      label,
      disabled,
      defaultPressed = false,
      ...props
    },
    ref,
  ) => {
    const [internalPressed, setInternalPressed] = React.useState(defaultPressed);
    const isPressed = controlledPressed !== undefined ? controlledPressed : internalPressed;

    const handleToggle = () => {
      if (disabled) return;
      const nextPressed = !isPressed;
      if (controlledPressed === undefined) {
        setInternalPressed(nextPressed);
      }
      onPressedChange?.(nextPressed);
    };

    const sizeConfigs = {
      L: {
        track: "w-16 h-9",
        thumb: "w-7 h-7",
        translate: "translate-x-7",
        text: "text-base",
      },
      M: {
        track: "w-12 h-7",
        thumb: "w-5 h-5",
        translate: "translate-x-5",
        text: "text-sm",
      },
      S: {
        track: "w-9 h-5",
        thumb: "w-3.5 h-3.5",
        translate: "translate-x-4",
        text: "text-xs",
      },
    };
    const currentSize = sizeConfigs[sizeVariant];

    return (
      <div className="flex items-center gap-3">
        <button
          type="button"
          role="switch"
          aria-checked={isPressed}
          disabled={disabled}
          onClick={handleToggle}
          className={cn(
            "relative inline-flex shrink-0 cursor-pointer items-center rounded-full transition-all duration-500",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",
            disabled
              ? "cursor-not-allowed opacity-50 bg-neutral-200"
              : isPressed
                ? "bg-primary-700 shadow-lg shadow-primary-700/20"
                : "bg-neutral-200 hover:bg-neutral-300",
            currentSize.track,
            className,
          )}
          {...props}
          ref={ref}
        >
          <span
            className={cn(
              "pointer-events-none block rounded-full bg-white shadow-xl ring-0 transition-all duration-500",
              isPressed ? currentSize.translate : "translate-x-1",
              currentSize.thumb,
            )}
          />
        </button>

        {label && (
          <span
            className={cn(
              "font-heading font-bold tracking-tight text-neutral-900 leading-none cursor-pointer select-none",
              currentSize.text,
              disabled && "text-neutral-400",
            )}
            onClick={handleToggle}
          >
            {label}
          </span>
        )}
      </div>
    );
  },
);

Toggle.displayName = "Toggle";




