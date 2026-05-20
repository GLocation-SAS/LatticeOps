"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  Box, 
  Menu, 
  X,
  User,
  LogOut,
  ChevronDown,
  Database,
  Activity,
  BarChart3,
  Cpu,
  History
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";
import { Avatar } from "@/components/ui/Avatar";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { DialogModal } from "@/components/ui/DialogModal";

export function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const navItems = [
    { label: "Tablero", href: "/dashboard", icon: LayoutDashboard },
    { label: "Recursos", href: "/resources", icon: Database },
    { label: "Gemelo Digital", href: "/digital-twin", icon: Cpu },
    { label: "Máquina del Tiempo", href: "/time-machine", icon: History },
    { label: "Usuarios", href: "/users", icon: Users },
    { label: "UI Kit", href: "/uikit", icon: Box },
  ];

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  const handleLogoutClick = () => {
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    setIsLogoutModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-[#02060f]/90">
      <div className="mx-auto flex h-16 max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-12">
        
        {/* Logo Section */}
        <div className="flex items-center gap-12">
          <Link href="/dashboard" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            {mounted && theme === "dark" ? (
              <img 
                src="/logos/Logotipo Horizontal alternativo.png" 
                alt="LatticeOps Logo" 
                className="h-7 w-auto object-contain"
              />
            ) : (
              <img 
                src="/logos/Logo Horizontal.png" 
                alt="LatticeOps Logo" 
                className="h-7 w-auto object-contain"
              />
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1.5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-2xl px-4 py-2 text-sm font-bold transition-all duration-300",
                  isActive(item.href)
                    ? "bg-primary-500/10 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400"
                    : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-300"
                )}
              >
                <item.icon className={cn("h-4 w-4", isActive(item.href) ? "text-primary-500" : "text-neutral-400")} />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 sm:gap-6">
          
          {/* Official Theme Toggle Component */}
          {mounted && <ThemeToggle sizeVariant="M" />}

          <div className="h-6 w-px bg-neutral-200 dark:bg-white/10 hidden sm:block" />

          {/* User Profile */}
          <div className="relative hidden sm:block">
             <button 
               onClick={() => setProfileMenuOpen(!profileMenuOpen)}
               className="flex items-center gap-3 rounded-xl p-1 pr-1.5 transition-all hover:bg-neutral-50 dark:hover:bg-white/5 group"
             >
               <Avatar name={user?.name || "User"} size="sm" className="border-2 border-transparent group-hover:border-primary-500/20 transition-all ring-1 ring-black/5 dark:ring-white/5" />
               <div className="flex flex-col items-start text-left">
                 <span className="text-xs font-bold text-neutral-900 leading-none dark:text-white">{user?.name || "Admin"}</span>
                 <span className="text-[9px] font-bold text-neutral-400 leading-none mt-1 uppercase tracking-widest dark:text-neutral-500">{user?.role || "ADMINISTRADOR"}</span>
               </div>
               <ChevronDown className={cn("h-3 w-3 text-neutral-400 transition-transform duration-300 ml-1", profileMenuOpen && "rotate-180")} />
             </button>

             {profileMenuOpen && (
               <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-neutral-200 bg-white p-2 shadow-2xl animate-in fade-in zoom-in-95 dark:border-white/10 dark:bg-[#0a0f1a] overflow-hidden">
                 <div className="px-3 py-2 mb-1">
                   <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Cuenta</p>
                 </div>
                 <button 
                   onClick={() => {
                     setProfileMenuOpen(false);
                   }}
                   className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-white/5 transition-colors"
                 >
                   <User className="h-4 w-4 text-neutral-400" />
                   Mi Perfil
                 </button>
                 <div className="my-1.5 h-px bg-neutral-100 dark:bg-white/5" />
                 <button 
                   onClick={handleLogoutClick}
                   className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-bold text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 transition-colors"
                 >
                   <LogOut className="h-4 w-4" />
                   Cerrar Sesión
                 </button>
               </div>
             )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 md:hidden hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-neutral-200 bg-white p-4 animate-in slide-in-from-top-4 duration-200 md:hidden dark:border-white/10 dark:bg-[#02060f] shadow-xl">
          <nav className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold transition-colors",
                  isActive(item.href)
                    ? "bg-primary-500/10 text-primary-600 dark:bg-primary-500/15 dark:text-primary-500"
                    : "text-neutral-600 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-white/5"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
            <div className="my-2.5 h-px bg-neutral-100 dark:bg-white/5" />
            <button
              onClick={handleLogoutClick}
              className="flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-bold text-error-500 hover:bg-error-50 dark:hover:bg-error-500/10 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              Cerrar Sesión
            </button>
          </nav>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      <DialogModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={logout}
        title="¿Cerrar sesión?"
        description="Estás a punto de salir de tu área de trabajo segura. ¿Deseas finalizar la sesión actual?"
        confirmText="Cerrar Sesión"
        cancelText="Permanecer"
        variant="danger"
      />
    </header>
  );
}
