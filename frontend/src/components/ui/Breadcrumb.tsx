"use client";

import * as React from "react";

import { ChevronRight, Home } from "lucide-react";

import { cn } from "@/lib/utils";

export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
  separator?: React.ReactNode;
}
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />,
);

Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      "flex flex-wrap items-center gap-2 break-words text-sm text-neutral-500",
      className,
    )}
    {...props}
  />
));

BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={cn("inline-flex items-center gap-2", className)}
    {...props}
  />
));

BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & {
    showHome?: boolean;
  }
>(({ className, showHome, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 font-sans font-medium text-primary-500 underline decoration-solid transition-colors hover:text-primary-600 cursor-pointer",
        className,
      )}
      {...props}
    >
      
      {showHome && <Home className="w-4 h-4" />}
      {children}
    </a>
  );
});

BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.ComponentPropsWithoutRef<"span"> & {
    showHome?: boolean;
  }
>(({ className, showHome, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn(
      "inline-flex items-center gap-2 font-sans font-normal text-primary-500 leading-[18px]",
      className,
    )}
    {...props}
  >
    
    {showHome && <Home className="w-4 h-4" />}
    {props.children}
  </span>
));

BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={cn("text-neutral-400", className)}
    {...props}
  >
    
    {children ?? <ChevronRight className="w-3.5 h-3.5" />}
  </li>
);

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
};




