"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  LayoutGrid,
  Palette,
  User,
  PanelLeftClose,
  PanelLeftOpen,
  Type,
  Box,
  Zap,
  ShoppingBag,
  Users,
  LayoutDashboard,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface SidebarItem {
  id?: string;
  label: string;
  href: string;
  icon?: React.ElementType;
}

interface SidebarGroup {
  label: string;
  icon?: React.ElementType;
  items: SidebarItem[];
  initiallyOpen?: boolean;
}

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  activeId?: string;
  footer?: React.ReactNode;
  user?: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const menusBySection: Record<string, SidebarGroup[]> = {
  uikit: [
    {
      label: "Core Tokens",
      icon: Palette,
      items: [
        { id: "colors", label: "Colors", href: "/uikit#colors", icon: Palette },
        {
          id: "typography",
          label: "Typography",
          href: "/uikit#typography",
          icon: Type,
        },
        {
          id: "spacing",
          label: "Spacing",
          href: "/uikit#spacing",
          icon: LayoutGrid,
        },
        { id: "effects", label: "Effects", href: "/uikit#effects", icon: Zap },
      ],
    },
    {
      label: "Components",
      icon: Box,
      items: [
        {
          id: "buttons",
          label: "Buttons System",
          href: "/uikit#buttons",
          icon: Box,
        },
        {
          id: "inputs",
          label: "Text Inputs",
          href: "/uikit#inputs",
          icon: Box,
        },
        {
          id: "textareas",
          label: "Textareas",
          href: "/uikit#textareas",
          icon: Box,
        },
        {
          id: "search",
          label: "Search Input",
          href: "/uikit#search",
          icon: Box,
        },
        {
          id: "dropdowns",
          label: "Dropdowns",
          href: "/uikit#dropdowns",
          icon: Box,
        },
        { id: "badges", label: "Badges", href: "/uikit#badges", icon: Box },
        { id: "modals", label: "Modals", href: "/uikit#modals", icon: Box },
        {
          id: "dialog-modals",
          label: "Dialog Modals",
          href: "/uikit#dialog-modals",
          icon: Box,
        },
        {
          id: "notifications",
          label: "Notifications",
          href: "/uikit#notifications",
          icon: Box,
        },
        { id: "tags", label: "Tags System", href: "/uikit#tags", icon: Box },
        {
          id: "checkboxes",
          label: "Checkboxes",
          href: "/uikit#checkboxes",
          icon: Box,
        },
        {
          id: "radio",
          label: "Radio Buttons",
          href: "/uikit#radio",
          icon: Box,
        },
        { id: "toggles", label: "Toggles", href: "/uikit#toggles", icon: Box },
        {
          id: "breadcrumbs",
          label: "Breadcrumbs",
          href: "/uikit#breadcrumbs",
          icon: Box,
        },
        {
          id: "pagination",
          label: "Pagination",
          href: "/uikit#pagination",
          icon: Box,
        },
        { id: "tabs", label: "Tabs", href: "/uikit#tabs", icon: Box },
        { id: "avatars", label: "Avatars", href: "/uikit#avatars", icon: Box },
        { id: "tables", label: "Tables", href: "/uikit#tables", icon: Box },
        {
          id: "tooltips",
          label: "Tooltips",
          href: "/uikit#tooltips",
          icon: Box,
        },
        { id: "toasts", label: "Toasts", href: "/uikit#toasts", icon: Box },
        { id: "cards", label: "Cards", href: "/uikit#cards", icon: Box },
      ],
    },
    {
      label: "Assets",
      icon: ShoppingBag,
      items: [
        {
          id: "resources",
          label: "Resources",
          href: "/uikit#resources",
          icon: ShoppingBag,
        },
      ],
    },
  ],
  users: [
    {
      label: "Usuarios",
      icon: Users,
      items: [{ label: "Gestión", href: "/users", icon: Users }],
    },
  ],
  dashboard: [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      items: [{ label: "Overview", href: "/dashboard", icon: LayoutDashboard }],
    },
  ],
};

export function Sidebar({
  collapsed = false,
  onToggle,
  activeId,
  footer,
  user = {
    name: "Design Team",
    email: "team@designengine.ai",
  },
}: SidebarProps) {
  const pathname = usePathname();
  const section = pathname.split("/")[1] || "dashboard";
  const groups = menusBySection[section] || [];
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    groups.forEach((g) => {
      if (g.initiallyOpen !== false) initial[g.label] = true;
    });
    return initial;
  });

  useEffect(() => {
    groups.forEach((group) => {
      const hasActiveChild = group.items.some((item) =>
        activeId ? activeId === item.id : pathname === item.href,
      );
      if (hasActiveChild && !openGroups[group.label]) {
        setOpenGroups((prev) => ({ ...prev, [group.label]: true }));
      }
    });
  }, [activeId, pathname, groups, openGroups]);

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-40 flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-4 lg:hidden dark:border-neutral-800 dark:bg-neutral-100/80 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-500/20">
            <Palette className="h-5 w-5" />
          </div>
          <span className="text-sm font-bold tracking-tight text-neutral-900">
            DesignEngine
          </span>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="-mr-2 rounded-lg p-2 text-neutral-600 transition-colors hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex h-full flex-col border-r border-neutral-200 bg-white transition-all duration-300 dark:border-neutral-800 dark:bg-neutral-50 lg:static lg:translate-x-0",
          open ? "w-[75%] translate-x-0" : "w-[75%] -translate-x-full",
          collapsed ? "lg:w-[68px]" : "lg:w-64",
        )}
      >
        <div className="flex h-14 items-center justify-between border-b border-neutral-200 px-4 lg:hidden dark:border-neutral-800">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-500/20">
              <Palette className="h-5 w-5" />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="truncate text-sm font-bold tracking-tight text-neutral-900">
                DesignEngine
              </span>
              <span className="truncate text-[10px] text-neutral-500">
                Core System
              </span>
            </div>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 text-neutral-500 transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="hidden h-14 items-center gap-3 px-4 lg:flex">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white shadow-lg shadow-primary-500/20">
            <Palette className="h-5 w-5" />
          </div>
          {!collapsed && (
            <div className="flex flex-1 items-center justify-between overflow-hidden">
              <div className="flex flex-col overflow-hidden">
                <span className="truncate text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-900">
                  DesignEngine
                </span>
                <span className="truncate text-[10px] text-neutral-500">
                  Core System
                </span>
              </div>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
          <div className="space-y-4">
            {groups.map((group) => {
              const isOpen = openGroups[group.label];
              const GroupIcon = group.icon || LayoutGrid;
              const isGroupActive = group.items.some((item) =>
                activeId ? activeId === item.id : pathname === item.href,
              );

              return (
                <div key={group.label} className="space-y-1">
                  <button
                    onClick={() => !collapsed && toggleGroup(group.label)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                      isGroupActive && !isOpen && !collapsed
                        ? "bg-primary-50 text-primary-700 dark:bg-primary-500/10 dark:text-primary-500"
                        : "text-neutral-900 hover:text-neutral-700 hover:bg-primary-500/10 dark:text-neutral-600 dark:hover:text-neutral-800 dark:hover:bg-primary-500/5",
                      collapsed && "justify-center px-2",
                    )}
                  >
                    <GroupIcon
                      className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        isGroupActive
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-neutral-700 group-hover:text-neutral-900 dark:group-hover:text-neutral-700",
                      )}
                    />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left truncate text-[11px] font-bold tracking-wider">
                          {group.label}
                        </span>
                        <ChevronDown
                          className={cn(
                            "h-3.5 w-3.5 text-neutral-400 transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </>
                    )}
                  </button>

                  {!collapsed && isOpen && (
                    <div className="relative ml-5 space-y-0.5 border-l border-neutral-200 pl-4 py-1 dark:border-neutral-800 transition-all duration-300">
                      {group.items.map((item) => {
                        const isActive = activeId
                          ? activeId === item.id
                          : pathname === item.href;
                        const ItemIcon = item.icon;

                        return (
                          <Link
                            key={item.id || item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-all duration-200",
                              isActive
                                ? "bg-neutral-200 text-neutral-900 font-medium"
                                : "text-neutral-800 hover:text-neutral-800 hover:bg-neutral-200",
                            )}
                          >
                            {ItemIcon && <ItemIcon className="h-3.5 w-3.5" />}
                            <span className="truncate">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="mt-auto border-t border-neutral-200 p-2 dark:border-neutral-800">
          <div className="flex flex-col gap-1">
            {footer ? (
              <div className="mt-2">{footer}</div>
            ) : (
              <>
                {collapsed ? (
                  <button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    className="mt-2 flex h-10 w-full items-center justify-center rounded-lg text-neutral-500 transition-all hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
                    aria-label="Toggle theme"
                  >
                    {theme === "dark" ? (
                      <Moon className="h-5 w-5 text-neutral-400" />
                    ) : (
                      <Sun className="h-5 w-5 text-neutral-500" />
                    )}
                  </button>
                ) : (
                  <div className="mt-2 flex h-12 w-full items-center justify-center gap-3 rounded-lg px-2">
                    <span
                      className={cn(
                        "text-[15px] font-bold transition-colors",
                        theme === "light"
                          ? "text-neutral-800"
                          : "text-neutral-600",
                      )}
                    >
                      Claro
                    </span>

                    <button
                      onClick={() =>
                        setTheme(theme === "dark" ? "light" : "dark")
                      }
                      className={cn(
                        "relative flex h-[32px] w-[64px] shrink-0 items-center rounded-full transition-colors duration-500 focus:outline-none",
                        theme === "dark" ? "bg-neutral-100" : "bg-primary-400",
                      )}
                      aria-label="Toggle theme"
                    >
                      <div
                        className={cn(
                          "absolute inset-0 flex items-center justify-start pl-2 transition-opacity duration-500",
                          theme === "dark" ? "opacity-100" : "opacity-0",
                        )}
                      >
                        {theme === "dark" && (
                          <div className="relative h-full w-1/2">
                            <svg
                              className="absolute left-[3px] top-[7px] h-[7px] w-[7px] text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div
                        className={cn(
                          "absolute inset-0 flex items-center justify-end pr-2 transition-opacity duration-500",
                          theme === "light" ? "opacity-100" : "opacity-0",
                        )}
                      >
                        {theme === "light" && (
                          <div className="relative h-full w-1/2">
                            <div className="absolute right-[4px] top-[8px] h-[5px] w-[5px] rounded-full bg-white" />
                          </div>
                        )}
                      </div>
                      <div
                        className={cn(
                          "absolute left-1 top-1 flex h-[24px] w-[24px] items-center justify-center rounded-full transition-transform duration-500",
                          theme === "dark"
                            ? "translate-x-[32px] bg-transparent"
                            : "translate-x-0 bg-white",
                        )}
                      >
                        {theme === "dark" && (
                          <svg
                            className="h-[20px] w-[20px] text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                          </svg>
                        )}
                      </div>
                    </button>
                    <span
                      className={cn(
                        "text-[15px] font-bold transition-colors",
                        theme === "dark" ? "text-white" : "text-neutral-300",
                      )}
                    >
                      Oscuro
                    </span>
                  </div>
                )}
              </>
            )}

            <button
              onClick={onToggle}
              className="flex h-10 w-full items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900 transition-all"
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {collapsed ? (
                <PanelLeftOpen className="h-4 w-4" />
              ) : (
                <div className="flex items-center gap-2 px-2 text-xs font-medium">
                  <PanelLeftClose className="h-4 w-4" />
                  <span>Colapsar menú</span>
                </div>
              )}
            </button>

            <button
              className={cn(
                "flex items-center gap-3 rounded-lg p-2 text-left transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-100/50",
                collapsed && "justify-center",
              )}
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-300">
                {user.avatar ? (
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-full w-full rounded-full object-cover"
                  />
                ) : (
                  <User className="h-4 w-4 text-neutral-500" />
                )}
              </div>
              {!collapsed && (
                <div className="flex flex-1 items-center justify-between overflow-hidden">
                  <div className="flex flex-col overflow-hidden">
                    <span className="truncate text-sm font-medium text-neutral-900 leading-tight">
                      {user.name}
                    </span>
                    <span className="truncate text-[10px] text-neutral-500 leading-tight">
                      {user.email}
                    </span>
                  </div>
                </div>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}


