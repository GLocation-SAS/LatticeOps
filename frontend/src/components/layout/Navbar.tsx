"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { useState } from "react";

import { useAuth } from "@/context/AuthContext";

import { Button } from "@/components/ui";

import { ROUTES } from "@/lib/config";

import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  // Do not show navbar on login or register pages
  if (pathname === ROUTES.login || pathname === ROUTES.register) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-50/80">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href={ROUTES.home}
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-500">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-neutral-900">
            Design<span className="gradient-text">Engine</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 md:flex">
          {user ? (
            <>
              <Link
                href={ROUTES.dashboard}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(ROUTES.dashboard)
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
                    : "text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-100",
                )}
              >
                Dashboard
              </Link>
              <Link
                href="/uikit"
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive("/uikit")
                    ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400"
                    : "text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-100",
                )}
              >
                UI Kit
              </Link>
              <div className="ml-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary-400 to-accent-400 text-xs font-bold text-white">
                  {user.name?.charAt(0).toUpperCase()}
                </div>
                <Button variant="ghost" size="sm" onClick={logout}>
                  Salir
                </Button>
              </div>
            </>
          ) : (
            <>
              <Link href={ROUTES.login}>
                <Button variant="ghost" size="sm">
                  Iniciar sesión
                </Button>
              </Link>
              <Link href={ROUTES.register}>
                <Button variant="primary" size="sm">
                  Registrarse
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          id="mobile-menu-toggle"
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-900 hover:bg-neutral-100 md:hidden dark:hover:bg-neutral-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="animate-slide-down border-t border-surface-200 bg-white px-4 py-4 md:hidden dark:border-neutral-200 dark:bg-neutral-100">
          {user ? (
            <div className="flex flex-col gap-2">
              <Link
                href={ROUTES.dashboard}
                className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Button
                variant="ghost"
                size="sm"
                fullWidth={true}
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
              >
                Salir
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                href={ROUTES.login}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  fullWidth
                  className="text-neutral-900"
                >
                  Iniciar sesión
                </Button>
              </Link>
              <Link
                href={ROUTES.register}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button variant="primary" size="sm" fullWidth>
                  Registrarse
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}


