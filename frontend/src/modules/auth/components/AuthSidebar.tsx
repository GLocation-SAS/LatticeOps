"use client";

import { useTheme } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export function AuthSidebar() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use standard icon for light theme, and alternative icon for dark theme
  const iconSrc = mounted && theme === "dark" 
    ? "/logos/Icon alternativo.png" 
    : "/logos/Icon.png";

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col justify-between p-12 lg:p-16 group text-neutral-900 dark:text-white transition-colors duration-300">
      {/* Dynamic Mesh Gradient Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[80%] h-[80%] opacity-40 dark:opacity-40 blur-[100px] rounded-full bg-primary-200 dark:bg-primary-500 transition-all duration-1000 group-hover:scale-110" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70%] h-[70%] opacity-35 dark:opacity-30 blur-[80px] rounded-full bg-secondary-100 dark:bg-secondary-500 transition-all duration-1000 group-hover:translate-x-10" />
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] opacity-20 dark:opacity-20 blur-[60px] rounded-full bg-primary-100 dark:bg-primary-300 animate-pulse" />
      </div>

      {/* Brand Icon Container */}
      <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/80 dark:bg-white/10 border border-neutral-200/50 dark:border-white/20 flex items-center justify-center backdrop-blur-xl shadow-lg dark:shadow-2xl overflow-hidden p-2.5 transition-all duration-300">
        <img 
          src={iconSrc} 
          alt="LatticeOps Logo" 
          className="w-full h-full object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 space-y-6">
        <h2 className="text-[42px] font-bold italic tracking-tighter leading-[1.1] text-neutral-900 dark:text-white">
          Optimiza tu red <br />
          con{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 dark:from-primary-500 dark:to-secondary-500 pr-2">precisión</span>
        </h2>
        <p className="text-sm font-medium text-neutral-600 dark:text-neutral-700 leading-relaxed max-w-[300px]">
          Obtén visibilidad total, automatiza procesos y resuelve incidencias antes de que ocurran.
        </p>
      </div>

      {/* Subtle Overlay Grid using currentColor to adapt dots */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none text-neutral-900 dark:text-white" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
    </div>
  );
}
