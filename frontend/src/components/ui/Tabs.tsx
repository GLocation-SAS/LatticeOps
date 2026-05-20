"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Layout,
  Settings,
  User,
  Bell,
  Shield,
  Database,
  BarChart,
  Home,
  Info,
  Layers,
  Search,
} from "lucide-react";

const getIcon = (label: string) => {
  const l = label.toLowerCase();
  if (l.includes("dashboard") || l.includes("overview")) return <Layout size={16} />;
  if (l.includes("settings") || l.includes("config")) return <Settings size={16} />;
  if (l.includes("user") || l.includes("profile") || l.includes("cuenta")) return <User size={16} />;
  if (l.includes("notific")) return <Bell size={16} />;
  if (l.includes("security") || l.includes("seguridad") || l.includes("safe")) return <Shield size={16} />;
  if (l.includes("database") || l.includes("datos") || l.includes("data")) return <Database size={16} />;
  if (l.includes("analytics") || l.includes("metricas") || l.includes("stats")) return <BarChart size={16} />;
  if (l.includes("home") || l.includes("inicio")) return <Home size={16} />;
  if (l.includes("info") || l.includes("ayuda")) return <Info size={16} />;
  if (l.includes("search") || l.includes("buscar")) return <Search size={16} />;
  return <Layers size={16} />;
};

interface TabItemProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
}

/**
 * TabItem component for individual tabs.
 * Features a fluid "filling" hover effect and primary-700 active state.
 */
export function TabItem({ label, isActive, onClick, className, icon }: TabItemProps) {
  const effectiveIcon = icon || getIcon(label);

  return (
    <button
      onClick={onClick}
      style={
        !isActive
          ? ({
              "--btn-hover-bg": "var(--color-primary-50)",
            } as React.CSSProperties)
          : undefined
      }
      className={cn(
        "group relative flex items-center gap-2.5 px-6 py-2.5 text-sm font-bold transition-all duration-500 rounded-full whitespace-nowrap overflow-hidden",
        isActive
          ? "bg-primary-700 text-white shadow-lg shadow-primary-700/30"
          : "text-neutral-500 hover:text-primary-700 btn-hover-effect",
        className
      )}
    >
      <span
        className={cn(
          "transition-transform duration-500 group-hover:scale-110 shrink-0",
          isActive ? "text-white" : "text-neutral-400 group-hover:text-primary-700"
        )}
      >
        {effectiveIcon}
      </span>
      <span className="relative z-10">{label}</span>
    </button>
  );
}

interface TabsProps {
  tabs: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  activeTab: string;
  onTabChange: (id: string) => void;
  className?: string;
}

/**
 * Tabs component based on the DesignEngine system.
 * Uses a pill-shaped layout for both the container and active state.
 */
export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center p-1.5 bg-neutral-50 dark:bg-neutral-50/50 rounded-full border border-neutral-200 dark:border-neutral-300",
        className
      )}
    >
      {tabs.map((tab) => (
        <TabItem
          key={tab.id}
          label={tab.label}
          icon={tab.icon}
          isActive={activeTab === tab.id}
          onClick={() => onTabChange(tab.id)}
        />
      ))}
    </div>
  );
}




