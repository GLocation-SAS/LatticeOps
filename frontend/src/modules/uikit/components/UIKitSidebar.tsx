"use client";

import React from "react";
import { 
  Palette, 
  Type, 
  LayoutGrid, 
  Box, 
  Zap, 
  Image as ImageIcon,
  Search,
  Sparkles,
  ChevronDown,
  User,
  PanelLeftClose,
  PanelLeftOpen,
  ExternalLink
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/Tooltip";

const SECTIONS = [
  { 
    id: "colors", 
    label: "Colores", 
    icon: Palette,
    subItems: [
      { id: "color-primary", label: "Primary Palette" },
      { id: "color-secondary", label: "Secondary Palette" },
      { id: "color-neutral", label: "Neutral Shades" },
      { id: "color-success", label: "Success System" },
      { id: "color-error", label: "Error System" },
      { id: "color-warning", label: "Warning System" },
      { id: "color-info", label: "Info System" },
    ]
  },
  { 
    id: "typography", 
    label: "Tipografía", 
    icon: Type,
    subItems: [
      { id: "typo-display", label: "Display variants" },
      { id: "typo-heading", label: "Heading variants" },
      { id: "typo-title", label: "Title variants" },
      { id: "typo-body", label: "Body variants" },
      { id: "typo-label", label: "Label variants" },
    ]
  },
  { 
    id: "components", 
    label: "Componentes", 
    icon: Box,
    subItems: [
      { id: "buttons", label: "Buttons System" },
      { id: "accordion", label: "Accordions" },
      { id: "inputs", label: "Text Inputs" },
      { id: "textareas", label: "Textareas" },
      { id: "search", label: "Search Input" },
      { id: "dropdowns", label: "Dropdowns" },
      { id: "badges", label: "Badges System" },
      { id: "modals", label: "Modals & Dialogs" },
      { id: "notifications", label: "Notifications" },
      { id: "tags", label: "Tags System" },
      { id: "checkboxes", label: "Checkboxes" },
      { id: "radio", label: "Radio Buttons" },
      { id: "toggles", label: "Toggles" },
      { id: "breadcrumbs", label: "Breadcrumbs" },
      { id: "pagination", label: "Pagination" },
      { id: "tabs", label: "Tabs" },
      { id: "avatars", label: "Avatars" },
      { id: "tables", label: "Data Tables" },
      { id: "tooltips", label: "Tooltips" },
      { id: "toasts", label: "Toasts" },
      { id: "cards", label: "Cards System" },
    ]
  },
  { id: "effects", label: "Efectos", icon: Zap },
  { id: "resources", label: "Recursos", icon: ImageIcon },
];

export function UIKitSidebar({ 
  isCollapsed, 
  setIsCollapsed 
}: { 
  isCollapsed: boolean; 
  setIsCollapsed: (v: boolean) => void; 
}) {
  const [activeId, setActiveId] = React.useState("colors");
  const [activeSubId, setActiveSubId] = React.useState<string | null>(null);
  const [manuallyExpanded, setManuallyExpanded] = React.useState<string[]>([]);

  const toggleManualExpansion = (id: string) => {
    setManuallyExpanded(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if it's a sub-item
            const parentSection = SECTIONS.find(s => s.subItems?.some(sub => sub.id === entry.target.id));
            if (parentSection) {
              setActiveId(parentSection.id);
              setActiveSubId(entry.target.id);
              // Auto-expand on scroll
              if (!manuallyExpanded.includes(parentSection.id)) {
                setManuallyExpanded(prev => [...prev, parentSection.id]);
              }
            } else {
              setActiveId(entry.target.id);
              setActiveSubId(null);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "-10% 0px -70% 0px" }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
      section.subItems?.forEach(sub => {
        const subEl = document.getElementById(sub.id);
        if (subEl) observer.observe(subEl);
      });
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavItem = ({ section }: { section: typeof SECTIONS[0] }) => {
    const Icon = section.icon;
    const isActive = activeId === section.id;
    const hasSubItems = section.subItems && section.subItems.length > 0;
    const isExpanded = hasSubItems && !isCollapsed && manuallyExpanded.includes(section.id);

    const button = (
      <button
        onClick={() => {
          scrollToSection(section.id);
          if (hasSubItems) toggleManualExpansion(section.id);
        }}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all group relative",
          isActive 
            ? "text-white shadow-lg shadow-primary-500/20" 
            : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-400 hover:bg-neutral-200/50 dark:hover:bg-neutral-100/50",
          isCollapsed && "w-12 h-12 justify-center p-0 rounded-2xl"
        )}
      >
        {isActive && (
          <div className={cn(
            "absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 -z-10 animate-in zoom-in-95 duration-300",
            isCollapsed ? "rounded-2xl shadow-[0_8px_20px_-4px_rgba(var(--color-primary-500-rgb),0.4)]" : "rounded-xl"
          )} />
        )}
        <Icon size={isCollapsed ? 22 : 18} className={cn(
          "transition-all duration-300 shrink-0",
          isActive 
            ? "text-white scale-110" 
            : "text-neutral-400 group-hover:text-primary-500 group-hover:scale-110"
        )} />
        {!isCollapsed && (
          <>
            <span className="flex-1 text-left truncate">{section.label}</span>
            {hasSubItems && (
              <ChevronDown size={14} className={cn("transition-transform duration-300", isExpanded ? "rotate-180" : "")} />
            )}
            {isActive && !hasSubItems && (
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-sm" />
            )}
          </>
        )}
      </button>
    );

    if (isCollapsed) {
      return (
        <Tooltip content={section.label} position="right">
          {button}
        </Tooltip>
      );
    }

    return (
      <div className="space-y-1">
        {button}
        {hasSubItems && isExpanded && (
          <div className="ml-9 space-y-1 py-1 border-l border-neutral-200 dark:border-neutral-300">
            {section.subItems!.map((sub) => {
              const isSubActive = activeSubId === sub.id;
              return (
                <button
                  key={sub.id}
                  onClick={() => scrollToSection(sub.id)}
                  className={cn(
                    "w-full flex items-center gap-2 px-4 py-1.5 text-xs font-medium transition-all rounded-r-lg border-l-2 text-left",
                    isSubActive 
                      ? "text-primary-600 dark:text-primary-400 border-primary-500 bg-primary-500/5" 
                      : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 border-transparent hover:border-neutral-300"
                  )}
                >
                  {sub.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={cn(
      "fixed left-0 top-0 bottom-0 bg-neutral-100 dark:bg-neutral-50 border-r border-neutral-200 dark:border-neutral-300 flex flex-col z-[60] transition-all duration-500 ease-in-out",
      isCollapsed ? "w-20" : "w-72"
    )}>
      {/* Sidebar Header */}
      <div className={cn("p-6 flex items-center", isCollapsed ? "justify-center" : "justify-between")}>
        {!isCollapsed && (
          <div className="flex items-center gap-3 animate-in fade-in slide-in-from-left-4 duration-500">
            <img 
              src="/logos/Logo Horizontal.png" 
              alt="LatticeOps" 
              className="h-10 block dark:hidden object-contain"
            />
            <img 
              src="/logos/Logotipo Horizontal alternativo.png" 
              alt="LatticeOps" 
              className="h-10 hidden dark:block object-contain"
            />
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors p-1 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-100/50"
        >
          {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className={cn(
        "flex-1 px-3 space-y-4 pb-8 pt-4 custom-scrollbar",
        isCollapsed ? "overflow-y-visible" : "overflow-y-auto"
      )}>
        {SECTIONS.map((section) => (
          <NavItem key={section.id} section={section} />
        ))}

        {!isCollapsed && (
          <div className="pt-8 pb-4 animate-in fade-in duration-700">
            <span className="px-4 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Externos</span>
          </div>
        )}
        
        <div className={cn(isCollapsed && "flex justify-center")}>
          <Tooltip content="Documentación" position="right" disabled={!isCollapsed}>
            <a 
              href="#" 
              className={cn(
                "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-600 dark:hover:text-neutral-800 hover:bg-neutral-200/50 dark:hover:bg-neutral-100/50 transition-all",
                isCollapsed && "w-12 h-12 justify-center px-0"
              )}
            >
              <ExternalLink size={20} className="text-neutral-400 shrink-0" />
              {!isCollapsed && "Documentación"}
            </a>
          </Tooltip>
        </div>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-neutral-200 dark:border-neutral-300">
        <Tooltip content="Paula R." position="right" disabled={!isCollapsed}>
          <div className={cn(
            "flex items-center gap-3 p-2 rounded-2xl hover:bg-neutral-200/50 dark:hover:bg-neutral-100/50 transition-all cursor-pointer group",
            isCollapsed && "justify-center p-1"
          )}>
            <div className="w-9 h-9 rounded-full bg-neutral-300 dark:bg-neutral-200 border-2 border-white dark:border-neutral-50 shadow-sm flex items-center justify-center overflow-hidden shrink-0">
               <User size={18} className="text-neutral-500" />
            </div>
            {!isCollapsed && (
              <>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-bold text-neutral-900 dark:text-neutral-800 truncate">Paula R.</span>
                  <span className="text-[10px] text-neutral-400 truncate">paula.ops@lattice.ai</span>
                </div>
                <div className="ml-auto text-neutral-400 group-hover:text-neutral-600 dark:group-hover:text-neutral-200 transition-colors">
                  <ChevronDown size={14} />
                </div>
              </>
            )}
          </div>
        </Tooltip>
      </div>
    </aside>
  );
}
