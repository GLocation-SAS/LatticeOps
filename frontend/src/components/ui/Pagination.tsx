"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Pagination Root Component
 * Represents the pill-shaped bar from the design.
 */
export interface PaginationProps extends React.ComponentProps<"nav"> {
  variant?: "full" | "compact" | "simple";
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  ({ className, variant = "full", ...props }, ref) => (
    <nav
      ref={ref}
      role="navigation"
      aria-label="pagination"
      className={cn(
        "flex items-center justify-between px-6 py-3 bg-white dark:bg-neutral-100 rounded-full border-[1.5px] border-neutral-100 dark:border-neutral-300 shadow-xl min-h-[72px]",
        className
      )}
      {...props}
    />
  )
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center gap-1.5", className)}
      {...props}
    />
  )
);
PaginationContent.displayName = "PaginationContent";

/**
 * Individual Page Link / Button
 */
interface PaginationLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isIconOnly?: boolean;
}

const PaginationLink = ({
  className,
  isActive,
  isIconOnly,
  children,
  ...props
}: PaginationLinkProps) => (
  <button
    aria-current={isActive ? "page" : undefined}
    className={cn(
      "flex items-center justify-center transition-all duration-300 rounded-full",
      "font-sans font-semibold text-sm",
      isActive
        ? "bg-primary-700 text-white w-10 h-10 shadow-lg shadow-primary-700/30 scale-110"
        : "text-neutral-500 hover:text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/30 w-10 h-10",
      isIconOnly ? "p-0" : "px-4",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  showText = true,
  ...props
}: PaginationLinkProps & { showText?: boolean }) => (
  <button
    className={cn(
      "flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-500 hover:text-primary-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    <ChevronLeft className="w-5 h-5" />
    {showText && <span>Anterior</span>}
  </button>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  showText = true,
  ...props
}: PaginationLinkProps & { showText?: boolean }) => (
  <button
    className={cn(
      "flex items-center gap-2 px-4 py-2 text-sm font-semibold text-neutral-500 hover:text-primary-500 transition-colors disabled:opacity-30 disabled:cursor-not-allowed",
      className
    )}
    {...props}
  >
    {showText && <span>Siguiente</span>}
    <ChevronRight className="w-5 h-5" />
  </button>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-10 w-10 items-center justify-center text-neutral-400 font-bold", className)}
    {...props}
  >
    <MoreHorizontal className="w-5 h-5" />
    <span className="sr-only">More pages</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

const PaginationInfo = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={cn("text-sm font-sans font-semibold text-neutral-500 ml-4 whitespace-nowrap", className)}>
    {children}
  </span>
);

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem, // keeping for compat if needed, but not used in new design
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
  PaginationInfo,
};

/** Compatibility helper */
function PaginationItem({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}




