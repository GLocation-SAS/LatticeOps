"use client";

import * as React from "react";
import Image from "next/image";
import { cn, publicUrl } from "@/lib/utils";
import { Check, User } from "lucide-react";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "circular" | "squared";
  status?: "online" | "offline" | "busy" | "none";
  isVerified?: boolean;
  notification?: number | string;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const getInitials = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return parts[0][0]?.toUpperCase() || "";
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      name,
      src,
      size = "md",
      variant = "circular",
      status = "none",
      isVerified = false,
      notification,
      isLoading = false,
      icon,
      className,
      ...props
    },
    ref
  ) => {
    const sizeMap = {
      sm: "w-8 h-8 text-[11px]",
      md: "w-10 h-10 text-xs",
      lg: "w-14 h-14 text-base",
      xl: "w-20 h-20 text-xl",
    };

    const statusColors = {
      online: "bg-success-500",
      offline: "bg-neutral-300",
      busy: "bg-error-500",
      none: "transparent",
    };

    const initials = name ? getInitials(name) : "";

    return (
      <div 
        className={cn(
          "relative inline-flex shrink-0 transition-all duration-300", 
          variant === "circular" ? "rounded-full" : "rounded-2xl",
          className
        )} 
        ref={ref} 
        {...props}
      >
        {/* Loading Ring */}
        {isLoading && (
          <div className="absolute -inset-1 rounded-full border-2 border-primary-500 border-t-transparent animate-spin z-0" />
        )}

        <div
          className={cn(
            "relative flex items-center justify-center overflow-hidden select-none transition-all duration-300",
            variant === "circular" ? "rounded-full" : "rounded-2xl",
            sizeMap[size],
            !src && !icon && "bg-primary-700 text-white font-heading font-bold shadow-lg shadow-primary-700/20",
            !src && icon && "bg-primary-700 text-white",
            src && "bg-neutral-100",
            "group-hover:scale-105 active:scale-95"
          )}
        >
          {src ? (
            <Image
              src={publicUrl(src)}
              alt={name || "Avatar"}
              fill
              className="aspect-square h-full w-full object-cover"
            />
          ) : icon ? (
            icon
          ) : name ? (
            <span>{initials}</span>
          ) : (
            <User size={size === "sm" ? 14 : size === "md" ? 18 : 24} />
          )}
        </div>

        {/* Indicators */}
        <div className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center pointer-events-none z-10">
          {status !== "none" && !isVerified && !notification && (
            <span
              className={cn(
                "block rounded-full ring-2 ring-white dark:ring-neutral-100 shadow-sm",
                size === "sm" ? "w-2 h-2" : "w-3 h-3",
                statusColors[status]
              )}
            />
          )}

          {isVerified && (
            <div className={cn(
              "flex items-center justify-center bg-primary-500 text-white rounded-full ring-2 ring-white dark:ring-neutral-100 shadow-sm",
              size === "sm" ? "w-3 h-3" : "w-4 h-4"
            )}>
              <Check size={size === "sm" ? 8 : 10} strokeWidth={4} />
            </div>
          )}

          {notification && (
            <div className={cn(
              "flex items-center justify-center bg-error-500 text-white rounded-full ring-2 ring-white dark:ring-neutral-100 font-bold shadow-sm",
              size === "sm" ? "h-3 px-1 text-[7px]" : "h-4 px-1.5 text-[8px]"
            )}>
              {notification}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Avatar.displayName = "Avatar";

/**
 * AvatarGroup Component
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  total?: number;
  size?: "sm" | "md" | "lg";
}

export const AvatarGroup = ({ children, max = 4, total, size = "md", className, ...props }: AvatarGroupProps) => {
  const childrenArray = React.Children.toArray(children);
  const visibleChildren = childrenArray.slice(0, max);
  const remaining = total ? total - max : childrenArray.length - max;

  return (
    <div className={cn("flex items-center -space-x-3", className)} {...props}>
      {visibleChildren.map((child, i) => (
        <div key={i} className="ring-2 ring-white dark:ring-neutral-100 rounded-full">
          {React.cloneElement(child as React.ReactElement<any>, { size })}
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={cn(
            "relative flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-200 text-neutral-600 dark:text-neutral-400 font-bold ring-2 ring-white dark:ring-neutral-100",
            size === "sm" ? "w-8 h-8 text-[10px]" : size === "md" ? "w-10 h-10 text-[11px]" : "w-14 h-14 text-sm"
          )}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};




