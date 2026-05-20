import React from "react";

import { cn } from "@/lib/utils";

interface CardProps {
  title?: string;
  description?: string;
  variant?: "vertical" | "horizontal";
  category?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "neutral" | "critical";
  children?: React.ReactNode;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  showEffect?: boolean;
  moveOnHover?: boolean;
  padding?: string;
  radius?: string;
  className?: string;
}

/** 
 * Reusable Card component with glassmorphism and mesh gradient effects. 
 */
export const Card: React.FC<CardProps> = ({
  title,
  description,
  variant = "vertical",
  category = "primary",
  children,
  action,
  icon,
  showEffect = true,
  moveOnHover = false,
  padding = "p-10 md:p-12",
  radius = "rounded-[40px]",
  className,
}) => {
  const isHorizontal = variant === "horizontal";
  const hasHeader = title || icon || action;

  const shadowColors = {
    primary: "hover:shadow-primary-500/10",
    secondary: "hover:shadow-secondary-500/10",
    success: "hover:shadow-success-500/10",
    error: "hover:shadow-error-500/10",
    warning: "hover:shadow-warning-500/10",
    info: "hover:shadow-info-500/10",
    neutral: "hover:shadow-neutral-400/10",
    critical: "hover:shadow-error-500/10",
  };

  const meshColors = {
    primary: ["var(--color-primary-500)", "var(--color-secondary-500)"],
    secondary: ["var(--color-secondary-500)", "var(--color-primary-500)"],
    success: ["var(--color-success-500)", "var(--color-neutral-300)"],
    error: ["var(--color-error-500)", "var(--color-neutral-300)"],
    warning: ["var(--color-warning-500)", "var(--color-neutral-300)"],
    info: ["var(--color-info-500)", "var(--color-neutral-300)"],
    neutral: ["var(--color-neutral-400)", "var(--color-neutral-200)"],
    critical: ["var(--color-error-500)", "transparent"],
  };

  const [color1, color2] = meshColors[category] || meshColors.primary;

  return (
    <div
      className={cn(
        "relative bg-white/60 dark:bg-neutral-100/10 backdrop-blur-2xl border border-white/10 dark:border-white/5 overflow-hidden shadow-sm transition-all duration-700 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] group perspective-1000",
        shadowColors[category],
        moveOnHover && "hover:-translate-y-2",
        radius,
        isHorizontal ? "flex flex-row" : "flex flex-col",
        className,
      )}
    >
      {/* Background Effect Layer (Dynamic Mesh Gradient) */}
      {showEffect && (
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div
            className="absolute -top-[10%] -right-[5%] w-[70%] h-[70%] opacity-40 dark:opacity-30 blur-[80px] rounded-full transition-all duration-1000 group-hover:scale-150 group-hover:-translate-x-10 group-hover:translate-y-10"
            style={{
              background: `radial-gradient(circle, ${color1} 0%, transparent 70%)`,
            }}
          />
          <div
            className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] opacity-30 dark:opacity-20 blur-[70px] rounded-full transition-all duration-1000 group-hover:scale-125 group-hover:translate-x-10 group-hover:-translate-y-10"
            style={{
              background: `radial-gradient(circle, ${color2} 0%, transparent 70%)`,
            }}
          />
        </div>
      )}

      <div
        className={cn(
          "flex flex-col flex-1 relative z-10 transition-transform duration-500 group-hover:translate-z-10",
          padding,
          isHorizontal ? "justify-center" : (hasHeader || description ? "gap-6" : "gap-0"),
        )}
      >
        {hasHeader && (
          <div className="flex justify-between items-start gap-6">
            <div className="flex flex-col gap-6 flex-1">
              {icon && (
                <div className="flex-shrink-0 p-4 bg-neutral-50/50 dark:bg-neutral-200/40 rounded-[24px] w-fit border border-white/10 dark:border-white/5 transition-all duration-500 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                  {icon}
                </div>
              )}
              {title && (
                <h3 className="text-3xl font-heading font-bold italic tracking-tight text-neutral-900 dark:text-white leading-tight transition-colors duration-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {title}
                </h3>
              )}
            </div>
            {action && <div className="flex-shrink-0 transition-transform duration-500 group-hover:scale-110">{action}</div>}
          </div>
        )}

        {description && (
          <p className="text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans font-medium transition-all duration-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-200">
            {description}
          </p>
        )}

        {children && (
          <div className={cn(
            "text-neutral-900 dark:text-white transition-all duration-500",
            (hasHeader || description) && "mt-4"
          )}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};




