"use client";

import React from "react";
import { Input } from "@/components/ui/Input";
import { Search, X, Tag as BadgeIcon } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";

const SIZES = [
  {
    key: "lg",
    label: "Large (65px)",
    sizeVariant: "lg" as const,
  },
  {
    key: "md",
    label: "Medium (54px)",
    sizeVariant: "md" as const,
  },
  {
    key: "sm",
    label: "Small (44px)",
    sizeVariant: "sm" as const,
  },
  {
    key: "xs",
    label: "Extra Small (40px)",
    sizeVariant: "xs" as const,
  },
] as const;

export function SearchInputMatrix() {
  const getRightIcon = (stateKey: string) => {
    const showClearBtn = ["Focused", "Filled", "Error", "Success"].includes(stateKey);

    return (
      <div className="flex items-start gap-2 pr-1">
        {showClearBtn && (
          <>
            <X className="w-4 h-4 cursor-pointer text-neutral-400 hover:text-primary-500 transition-colors" />
            <div className="w-[1px] h-4 bg-neutral-200 dark:bg-neutral-200" />
          </>
        )}
        <Search className="w-4 h-4 text-neutral-500" />
      </div>
    );
  };

  return (
    <div className="space-y-24 mt-16 pb-16 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Navigation Components
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Search <span className="text-primary-500">Systems</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Componentes de búsqueda especializados con acciones compuestas y estados dinámicos, optimizados para el descubrimiento de información.
          </p>
        </div>
      </div>

      {/* Main Matrix Grid */}
      <div className="space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Default and Hover */}
          <div className="space-y-8">
            <div className="flex items-start gap-3 border-l-4 border-primary-500 pl-4">
              <h4 className="text-xl font-heading font-bold tracking-tight">Estados de Interacción</h4>
            </div>
            <div className="bg-white dark:bg-neutral-100 border border-neutral-200 dark:border-neutral-300 p-8 rounded-[32px] space-y-12 shadow-sm">
              <div className="space-y-6">
                <span className="text-[10px] font-heading font-bold text-neutral-400">Default / Empty</span>
                <Input placeholder="Buscar usuarios..." iconRight={getRightIcon("Default")} />
              </div>
              <div className="space-y-6">
                <span className="text-[10px] font-heading font-bold text-neutral-400">Active / Filled</span>
                <Input defaultValue="Analista de Datos" iconRight={getRightIcon("Filled")} />
              </div>
            </div>
          </div>

          {/* Sizes Showcase */}
          <div className="space-y-8">
            <div className="flex items-start gap-3 border-l-4 border-primary-500 pl-4">
              <h4 className="text-xl font-heading font-bold tracking-tight">Escalabilidad (Sizing)</h4>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] space-y-6 border border-neutral-100 dark:border-neutral-300">
              {SIZES.map((size) => (
                <div key={size.key} className="flex flex-col gap-2">
                  <div className="flex justify-between items-start px-1">
                    <span className="text-[9px] font-heading font-bold text-neutral-500 uppercase tracking-widest">{size.label}</span>
                  </div>
                  <Input sizeVariant={size.sizeVariant} placeholder="Filtrar..." iconRight={getRightIcon("Default")} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Semantic Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-neutral-100 border border-neutral-200 dark:border-neutral-300 p-8 rounded-[32px] space-y-6 shadow-sm">
            <div className="flex items-start gap-2 text-error-500">
              <BadgeIcon className="w-4 h-4" />
              <span className="text-xs font-heading font-bold">Error State</span>
            </div>
            <Input error="No se encontraron resultados" defaultValue="Búsqueda inválida" iconRight={getRightIcon("Error")} />
          </div>
          <div className="bg-white dark:bg-neutral-100 border border-neutral-200 dark:border-neutral-300 p-8 rounded-[32px] space-y-6 shadow-sm">
            <div className="flex items-start gap-2 text-success-500">
              <BadgeIcon className="w-4 h-4" />
              <span className="text-xs font-heading font-bold">Success State</span>
            </div>
            <Input success defaultValue="Coincidencia exacta" iconRight={getRightIcon("Success")} />
          </div>
          <div className="bg-white dark:bg-neutral-100 border border-neutral-200 dark:border-neutral-300 p-8 rounded-[32px] space-y-6 shadow-sm opacity-60">
            <div className="flex items-start gap-2 text-neutral-400">
              <BadgeIcon className="w-4 h-4" />
              <span className="text-xs font-heading font-bold">Disabled State</span>
            </div>
            <Input disabled defaultValue="Búsqueda bloqueada" iconRight={getRightIcon("Disabled")} />
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Entrada de Datos",
            text: "Implementa eventos onInput y onChange con debounce para optimizar las consultas a APIs externas.",
          },
          {
            label: "Accesibilidad",
            text: "Uso de roles ARIA 'searchbox' y soporte completo para navegación mediante teclado (Enter para buscar).",
          },
        ]}
        compositionText="El Search Input combina el sistema de inputs estándar con el sistema de iconos de marca, proporcionando una interfaz de búsqueda rápida y coherente."
      />
    </div>
  );
}





