"use client";

import { LoginForm } from "../components/LoginForm";
import { AuthSidebar } from "../components/AuthSidebar";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4 md:p-8 overflow-hidden relative font-sans text-neutral-900 dark:text-white transition-colors duration-300">
      {/* Cinematic Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated Orbs */}
        <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] bg-primary-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-secondary-500/10 blur-[100px] rounded-full transition-all duration-1000" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
          style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      {/* Main Auth Container - Custom Glass Implementation for Layout Control */}
      <div className="relative z-10 w-full max-w-[1150px] min-h-[680px] bg-white/60 dark:bg-white/[0.03] border border-neutral-200/50 dark:border-white/5 backdrop-blur-3xl rounded-[40px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-1000 transition-colors duration-300">
        
        {/* LEFT SECTION: Visual Brand Sidebar */}
        <section className="w-full md:w-[45%] lg:w-[42%] shrink-0">
          <AuthSidebar />
        </section>

        {/* RIGHT SECTION: Interactive Login Portal */}
        <section className="flex-1 flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 relative overflow-y-auto custom-scrollbar">
          {/* Internal Form Wrapper for spacing control */}
          <div className="w-full max-w-[420px] space-y-12 animate-in fade-in slide-in-from-right-12 duration-700 delay-300">
            <LoginForm />
          </div>


        </section>
      </div>

      {/* Global Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.15);
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </div>
  );
}
