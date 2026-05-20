"use client";

import React, { useState, useEffect } from "react";
import { ColorsSection } from "../components/ColorsSection";
import { TypographySection } from "../components/TypographySection";
import { ComponentsSection } from "../components/ComponentsSection";
import { EffectsSection } from "../components/EffectsSection";
import { ResourcesSection } from "../components/ResourcesSection";
import { UIKitSidebar } from "../components/UIKitSidebar";
import { useTheme } from "@/context/ThemeContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export default function UIKitPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-50 transition-colors duration-300 flex">
      
      {/* Sidebar Section */}
      <UIKitSidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />

      <div className={cn(
        "flex-1 flex flex-col transition-all duration-500 ease-in-out",
        isCollapsed ? "pl-20" : "pl-72"
      )}>
        {/* ─── Top Header ──────────────────────────────────────────── */}
        <header className="sticky top-0 z-50 w-full border-b border-neutral-100 dark:border-neutral-300 bg-white/80 dark:bg-neutral-50/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between gap-6">

            {/* Logo slot */}
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-neutral-400 border border-neutral-200 dark:border-neutral-200 px-2 py-0.5 rounded-full">
                Design system
              </span>
            </div>

            {/* Theme Controller */}
            <ThemeToggle sizeVariant="M" />
          </div>
        </header>

        {/* ─── Main Content ─────────────────────────────────────────── */}
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 space-y-32">
          <section id="colors"><ColorsSection /></section>
          <section id="typography"><TypographySection /></section>
          <section id="components"><ComponentsSection /></section>
          <section id="effects"><EffectsSection /></section>
          <section id="resources"><ResourcesSection /></section>

          <footer className="pt-16 pb-8 border-t border-neutral-200 dark:border-neutral-300 text-center">
            <p className="text-sm text-neutral-400">
              &copy; {new Date().getFullYear()} LatticeOps Design System. Built with Antigravity.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}


