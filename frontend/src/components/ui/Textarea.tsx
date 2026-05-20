import * as React from "react";

import { cn } from "@/lib/utils";

import { AlertCircle, CheckCircle2, Sparkles } from "lucide-react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;

  notes?: string;

  error?: boolean | string;

  success?: boolean;

  showAutoCompleteIcon?: boolean;

  state?:
    | "Default"
    | "Hover"
    | "Focused"
    | "Filled"
    | "Disabled"
    | "Error"
    | "Success";
}
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      notes,
      error,
      success,
      showAutoCompleteIcon,
      state: controlledState,
      disabled,
      rows = 4,
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

    const stateStyles = {
      Default:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-neutral-default)] border-[1.5px]",
      Hover:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-primary-default)] border-[1.5px]",
      Focused:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-primary-default)] border-[1.5px] is-focused",
      Filled:
        "bg-[var(--semantic-background-neutral-surface)] border-[var(--semantic-border-neutral-strong)] border-[1.5px]",
      Disabled:
        "bg-[var(--semantic-background-disabled-surface)] border-transparent border-[1.5px] text-[var(--semantic-text-disabled-default)] cursor-not-allowed opacity-100",
      Error:
        "bg-[var(--semantic-background-error-surface)] border-[var(--semantic-border-error-default)] border-[1.5px] is-error",
      Success:
        "bg-[var(--semantic-background-success-surface)] border-[var(--semantic-border-success-default)] border-[1.5px] is-success",
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
    const hasFeedback =
      currentState === "Error" ||
      (error && typeof error === "string") ||
      currentState === "Success";

    return (
      <div className={cn("flex flex-col gap-2 w-full", className)}>
        
        {label && (
          <label className="text-xs font-heading font-bold text-neutral-400 text-left px-1">
            
            {label}
          </label>
        )}
        <div
          className={cn(
            "relative transition-all duration-300 rounded-xl overflow-hidden px-6 py-4 min-h-[120px]",
            !disabled && currentState !== "Disabled" && "input-hover-effect",
            currentState === "Error" || error
              ? "[--input-glow:rgba(239,68,68,0.25)] [--hover-border-color:var(--semantic-border-error-default)] [--input-bottom-color:var(--color-error-200)]"
              : currentState === "Success"
                ? "[--input-glow:rgba(53,150,105,0.25)] [--hover-border-color:var(--semantic-border-success-default)] [--input-bottom-color:var(--color-success-200)]"
                : "[--input-glow:rgba(30,153,196,0.15)] [--hover-border-color:var(--semantic-border-primary-default)] [--input-bottom-color:var(--color-primary-200)] dark:[--input-glow:rgba(87,201,230,0.2)]",
            stateStyles[currentState as keyof typeof stateStyles],
          )}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          
          <textarea
            className={cn(
              "w-full bg-transparent outline-none resize-none placeholder:text-neutral-600 text-neutral-600 font-medium text-sm",
              currentState === "Disabled" &&
                "placeholder:text-neutral-600 text-neutral-600",
            )}
            ref={ref}
            disabled={disabled}
            rows={rows}
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
          {hasFeedback && (
            <div
              className={cn(
                "absolute top-4 right-6 flex items-center justify-center shrink-0",
                iconColorStyles[currentState as keyof typeof iconColorStyles],
              )}
            >
              
              {currentState === "Success" ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                <AlertCircle className="w-5 h-5" />
              )}
            </div>
          )}
          {showAutoCompleteIcon && !hasFeedback && (
            <div className="absolute top-4 right-6 text-primary-400">
              
              <Sparkles className="w-4 h-4 animate-pulse" />
            </div>
          )}
        </div>
        {(notes || typeof error === "string") && (
          <p
            className={cn(
              "text-xs px-1 text-left",
              error ? "text-semantic-text-error-default" : "text-neutral-600",
            )}
          >
            
            {typeof error === "string" ? error : notes}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };




