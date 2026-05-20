import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-heading font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:!bg-semantic-background-disabled-surface disabled:!bg-none disabled:!text-semantic-text-disabled-default disabled:!border-transparent active:scale-[0.98] w-full transition-all duration-1000",
  {
    variants: {
      variant: {
        primary:
          "btn-hover-effect [--btn-hover-bg:var(--semantic-background-primary-hover)] [--btn-active-bg:var(--semantic-background-primary-pressed)] bg-semantic-background-primary-default text-white",
        secondary:
          "btn-hover-effect [--btn-hover-bg:var(--semantic-background-secondary-hover)] [--btn-active-bg:var(--semantic-background-secondary-pressed)] bg-white text-secondary-500 border-[1.5px] border-secondary-500 hover:text-white hover:border-[var(--btn-hover-bg)] dark:bg-transparent dark:text-secondary-400 dark:border-secondary-400",
        success:
          "btn-hover-effect [--btn-hover-bg:var(--semantic-background-success-hover)] [--btn-active-bg:var(--semantic-background-success-pressed)] bg-semantic-background-success-default text-white",
        error:
          "btn-hover-effect [--btn-hover-bg:var(--semantic-background-error-hover)] [--btn-active-bg:var(--semantic-background-error-pressed)] bg-semantic-background-error-default text-white",
        info: "btn-hover-effect [--btn-hover-bg:var(--semantic-background-info-hover)] [--btn-active-bg:var(--semantic-background-info-pressed)] bg-semantic-background-info-default text-white",
        warning:
          "btn-hover-effect [--btn-hover-bg:var(--semantic-background-warning-hover)] [--btn-active-bg:var(--semantic-background-warning-pressed)] bg-semantic-background-warning-default text-white",
        neutral:
          "btn-hover-effect [--btn-hover-bg:var(--semantic-background-neutral-hover)] [--btn-active-bg:var(--semantic-background-neutral-pressed)] bg-semantic-background-neutral-surface text-semantic-text-disabled-default border-[1.5px] border-semantic-background-neutral-muted hover:text-semantic-text-on-color hover:border-semantic-background-neutral-hover",
        outline:
          "border-[1.5px] border-primary-500 bg-transparent text-primary-500 hover:bg-semantic-background-primary-surface active:bg-primary-100",
        ghost: "bg-transparent hover:scale-110",
        glass:
          "glass bg-white/10 backdrop-blur-md border border-white/20 text-neutral-900 hover:bg-white/20 shadow-glow",
      },
      size: {
        md: "h-[44px] px-5 py-2.5 gap-2 text-base",
        xs: "h-[36px] px-4 py-2 gap-2 text-sm",
        sm: "h-[40px] px-5 py-2.5 gap-2 text-sm",
        lg: "h-[56px] px-6 py-3 gap-2 text-lg",
        icon: "h-10 w-10",
      },
      state: {
        default: "",
        hover: "",
        active: "",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      // Generic forced states (for documentation)
      {
        state: "hover",
        className: "is-hover",
      },
      {
        state: "active",
        className: "is-active",
      }, // Secondary forced hover/active text and border colors
      {
        variant: "secondary",
        state: "hover",
        className: "!text-white !border-[var(--btn-hover-bg)]",
      },
      {
        variant: "secondary",
        state: "active",
        className: "!text-white !border-[var(--btn-active-bg)]",
      }, // Neutral forced hover/active text and border colors
      {
        variant: "neutral",
        state: "hover",
        className:
          "!text-semantic-text-on-color !border-semantic-background-neutral-hover",
      },
      {
        variant: "neutral",
        state: "active",
        className:
          "!text-semantic-text-on-color !border-[var(--semantic-background-neutral-pressed)]",
      },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
      state: "default",
    },
  },
);
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, state, fullWidth, ...props }, ref) => {
    return (
      <button
        className={cn(
          buttonVariants({
            variant,
            size,
            state,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export { Button, buttonVariants };




