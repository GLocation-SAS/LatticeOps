"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface Spec {
  label: string;
  text: string;
}

interface SpecFooterProps {
  title1?: string;
  title1Accent?: string;
  title2?: string;
  title2Accent?: string;
  specs?: Spec[];
  compositionText?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable documentation footer for UI Kit components.
 * Features a premium glass-morphism overlapping design.
 */
export function SpecFooter({
  title1 = "Especificaciones",
  title1Accent = "Técnicas",
  title2 = "Arquitectura",
  title2Accent = "Flexible",
  specs = [],
  compositionText = "",
  children,
  className,
}: SpecFooterProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-neutral-50 rounded-[48px] p-10 md:p-14 lg:p-20 text-neutral-900 dark:text-white shadow-xl dark:shadow-2xl relative overflow-hidden group border border-white/10 dark:border-white/5 transition-all duration-500",
        className
      )}
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/[0.03] dark:bg-primary-500/10 rounded-full blur-[120px] -mr-64 -mt-64 transition-all duration-700 group-hover:bg-primary-500/[0.08]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-500/[0.02] dark:bg-primary-500/5 rounded-full blur-[100px] -ml-48 -mb-48" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
        {/* Left Column: Technical Specs */}
        <div className="space-y-12">
          <h4 className="text-4xl md:text-5xl font-heading font-bold italic tracking-tight leading-none">
            {title1} <span className="text-primary-500">{title1Accent}</span>
          </h4>
          
          <div className="space-y-6">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="bg-neutral-50/80 dark:bg-neutral-100/10 rounded-3xl p-8 border border-white/10 dark:border-white/5 transition-all hover:bg-white dark:hover:bg-neutral-100/20 hover:border-primary-500/40 hover:shadow-xl hover:shadow-primary-500/5"
              >
                <p className="text-[10px] font-bold text-primary-600 dark:text-primary-400 mb-4 uppercase tracking-[0.2em]">
                  {spec.label}
                </p>
                <p className="text-sm font-medium leading-relaxed text-neutral-600 dark:text-neutral-700">
                  {spec.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Flexible Architecture (Glass Look) */}
        <div className="space-y-12 relative">
          <h4 className="text-4xl md:text-5xl font-heading font-bold italic tracking-tight leading-none text-neutral-900 dark:text-white">
            {title2} <span className="text-primary-500">{title2Accent}</span>
          </h4>

          {/* Overlapping Glass Card Effect */}
          <div className="relative group/glass h-full">
            <div className="bg-neutral-50/80 dark:bg-neutral-100/10 rounded-[40px] p-10 md:p-14 border border-neutral-100 dark:border-neutral-300 min-h-[300px] transition-all duration-500 group-hover/glass:border-primary-500/30">
              <p className="text-base md:text-lg font-medium leading-relaxed text-neutral-600 dark:text-neutral-700">
                {compositionText}
              </p>
              
              {children && (
                <div className="mt-12 flex gap-4 flex-wrap">
                  {children}
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}





