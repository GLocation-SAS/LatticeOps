"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { AlertCircle, CheckCircle2 } from "lucide-react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  notes?: string;

  iconLeft?: React.ReactNode;

  iconRight?: React.ReactNode;

  error?: boolean | string;

  success?: boolean;

  sizeVariant?: "lg" | "md" | "sm" | "xs";

  state?:
    | "Default"
    | "Hover"
    | "Focused"
    | "Filled"
    | "Disabled"
    | "Error"
    | "Success";
}
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      notes,
      iconLeft,
      iconRight,
      error,
      success,
      sizeVariant = "md",
      state: controlledState,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);

    const [isHovered, setIsHovered] = React.useState(false);

    const currentState =
      controlledState ||
      (disabled
        ? "Disabled"
        : isFocused
          ? "Focused"
          : error
            ? "Error"
            : success
              ? "Success"
              : isHovered
                ? "Hover"
                : "Default");

    const sizeConfigs = {
      md: "h-[44px] text-sm",
      xs: "h-[36px] text-xs",
      sm: "h-[40px] text-sm",
      lg: "h-[56px] text-base",
    };
    const stateStyles = {
      Default:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-neutral-default)] border-[1.5px] shadow-sm",
      Hover:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-primary-default)] border-[1.5px] shadow-sm is-hover",
      Focused:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-primary-default)] border-[1.5px] shadow-sm is-focused",
      Filled:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-neutral-strong)] border-[1.5px] shadow-sm",
      Disabled:
        "bg-[var(--semantic-background-disabled-surface)] border-transparent border-[1.5px] text-[var(--semantic-text-disabled-default)] cursor-not-allowed opacity-100 shadow-none",
      Error:
        "bg-[var(--semantic-background-error-surface)] border-[var(--semantic-border-error-default)] border-[1.5px] shadow-sm is-error",
      Success:
        "bg-[var(--semantic-background-success-surface)] border-[var(--semantic-border-success-default)] border-[1.5px] shadow-sm is-success",
    };
    const iconColorStyles = {
      Default: "text-[var(--semantic-icon-neutral-secondary)]",
      Hover: "text-[var(--semantic-icon-primary-default)]",
      Focused: "text-[var(--semantic-icon-primary-default)]",
      Filled: "text-[var(--semantic-icon-primary-default)]",
      Disabled: "text-[var(--semantic-icon-disabled-default)]",
      Error: "text-[var(--semantic-icon-error-default)]",
      Success: "text-[var(--semantic-icon-success-default)]",
    };
    const hasRightFeedback =
      currentState === "Error" ||
      (error && typeof error === "string") ||
      currentState === "Success";

    return (
      <div className={cn("flex flex-col gap-2 w-full", className)}>
        
        {label && (
          <label className="text-xs font-heading font-bold text-neutral-400 dark:text-neutral-500 text-left px-1">
            {label}
          </label>
        )}
        <div
          className={cn(
            "relative flex items-center transition-all duration-300 rounded-xl px-4 gap-3",
            !disabled &&
              currentState !== "Disabled" &&
              "group input-hover-effect",
            currentState === "Error" || error
              ? "[--input-glow:rgba(239,68,68,0.25)] [--hover-border-color:var(--semantic-border-error-default)] [--input-bottom-color:var(--color-error-200)]"
              : currentState === "Success"
                ? "[--input-glow:rgba(53,150,105,0.25)] [--hover-border-color:var(--semantic-border-success-default)] [--input-bottom-color:var(--color-success-200)]"
                : "[--input-glow:rgba(30,153,196,0.15)] [--hover-border-color:var(--semantic-border-primary-default)] [--input-bottom-color:var(--color-primary-200)] dark:[--input-glow:rgba(87,201,230,0.2)]",
            sizeConfigs[sizeVariant],
            stateStyles[currentState as keyof typeof stateStyles],
          )}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          {iconLeft && (
            <div
              className={cn(
                "flex items-center justify-center shrink-0 z-10 relative",
                iconColorStyles[currentState as keyof typeof iconColorStyles],
              )}
            >
              
              {iconLeft}
            </div>
          )}
          <input
            type={type}
            className={cn(
              "flex-1 bg-transparent outline-none h-full w-full py-2 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-neutral-600 dark:text-neutral-800 group-hover:text-neutral-800 dark:group-hover:text-white transition-colors duration-300 font-medium z-10 relative [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_white] dark:[&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#020617] [&:-webkit-autofill]:[-webkit-text-fill-color:theme(colors.neutral.600)] dark:[&:-webkit-autofill]:[-webkit-text-fill-color:theme(colors.neutral.300)]",
              currentState === "Disabled" &&
                "placeholder:text-semantic-text-disabled-default text-semantic-text-disabled-default",
            )}
            ref={ref}
            disabled={disabled}
            onFocus={(e) => {
              setIsFocused(true);

              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);

              props.onBlur?.(e);
            }}
            {...props}
          />
          {iconRight ? (
            <div
              className={cn(
                "flex items-center justify-center shrink-0 z-10 relative",
                iconColorStyles[currentState as keyof typeof iconColorStyles],
              )}
            >
              
              {iconRight}
            </div>
          ) : hasRightFeedback ? (
            <div
              className={cn(
                "flex items-center justify-center shrink-0 z-10 relative",
                iconColorStyles[currentState as keyof typeof iconColorStyles],
              )}
            >
              
              {currentState === "Success" ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
            </div>
          ) : null}
        </div>
        {(notes || typeof error === "string") && (
          <p
            className={cn(
              "text-xs px-1 text-left",
              error ? "text-semantic-text-error-default" : "text-neutral-600 dark:text-neutral-400",
            )}
          >
            {typeof error === "string" ? error : notes}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };




