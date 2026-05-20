"use client";

import React from "react";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";
import { Star, Bell, Shield, Check, X, AlertTriangle } from "lucide-react";

const SIZES = [
  {
    key: "lg",
    label: "Large",
    description: "Variantes y estados para la escala Large (L). Radios y rellenos optimizados para alta visibilidad.",
  },
  {
    key: "md",
    label: "Medium",
    description: "El tamaño estándar por defecto para la gran mayoría de flujos de trabajo e interfaces.",
  },
  {
    key: "sm",
    label: "Small",
    description: "Variante ultracompacta para metadatos, tablas densas y micro-información.",
  },
] as const;

export function BadgeMatrix() {
  const categories = ["informative", "default", "secondary", "success", "error", "warning", "neutral"] as const;

  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <Badge category="informative" mode="soft" size="md">
          Badge Architecture
        </Badge>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Badge <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Sistema de indicadores visuales escalables. Diseñados para categorizar información con precisión quirúrgica, soportando múltiples estados, modos y densidades.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {SIZES.map((size) => (
          <section key={size.key} className="space-y-12">
            <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
              <div className="space-y-1">
                <h3 className="text-3xl font-heading font-bold text-neutral-900">
                  Size: <span className="text-primary-500">{size.label}</span>
                </h3>
                <p className="text-neutral-500 font-sans">{size.description}</p>
              </div>
            </div>

            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-16 rounded-[56px] border border-neutral-100 dark:border-neutral-300">
              <div className="grid grid-cols-2 md:grid-cols-7 gap-y-12 gap-x-4">
                {categories.map((cat) => (
                  <div key={cat} className="flex flex-col items-center gap-6">
                    <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">{cat}</span>

                    {/* Label Only */}
                    <Badge category={cat} mode="solid" size={size.key}>Label</Badge>

                    {/* With Icon */}
                    <Badge category={cat} mode="solid" size={size.key} icon={getIcon(cat, size.key === "sm" ? 10 : size.key === "md" ? 12 : 14)}>
                      With Icon
                    </Badge>

                    {/* With Dot */}
                    <Badge category={cat} mode="solid" size={size.key} showDot>With Dot</Badge>

                    {/* Outline */}
                    <Badge category={cat} mode="outline" size={size.key}>Outline</Badge>

                    {/* Soft Mode */}
                    <Badge category={cat} mode="soft" size={size.key}>Soft Mode</Badge>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Comparison Grid */}
        <section className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="space-y-1">
              <h3 className="text-3xl font-heading font-bold text-neutral-900">
                Atomic <span className="text-primary-500">Comparison</span>
              </h3>
              <p className="text-neutral-500 font-sans">Escalabilidad de densidades en los tres tamaños principales.</p>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[48px] border border-neutral-100 dark:border-neutral-300">
            <div className="flex flex-wrap gap-8 items-center justify-center">
              <div className="space-y-4 flex flex-col items-center">
                <Badge size="sm" category="default" mode="solid" showDot>Small</Badge>
                <span className="text-[9px] font-bold text-neutral-400">Scale S</span>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <Badge size="md" category="default" mode="solid" showDot>Medium</Badge>
                <span className="text-[9px] font-bold text-neutral-400">Scale M</span>
              </div>
              <div className="space-y-4 flex flex-col items-center">
                <Badge size="lg" category="default" mode="solid" showDot>Large</Badge>
                <span className="text-[9px] font-bold text-neutral-400">Scale L</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SpecFooter
        specs={[
          { label: "Forma de Cápsula", text: "Uso de rounded-full en todas las escalas para una consistencia orgánica óptima." },
          { label: "Modo Soft", text: "Fondo suavizado al 10% de opacidad del color categórico para baja jerarquía visual." },
          { label: "Tipografía de Precisión", text: "Montserrat font-black en mayúsculas con espaciado expandido para máxima legibilidad." },
        ]}
        compositionText="El Badge System ha sido totalmente alineado con el sistema de diseño DESIGN.md, ofreciendo una arquitectura de cápsula modular que separa la categoría semántica del estilo visual, permitiendo combinaciones coherentes."
      />
    </div>
  );
}

function getIcon(category: string, size: number) {
  switch (category) {
    case "informative": return <Bell size={size} />;
    case "default": return <Star size={size} />;
    case "secondary": return <Shield size={size} />;
    case "success": return <Check size={size} />;
    case "error": return <X size={size} />;
    case "warning": return <AlertTriangle size={size} />;
    case "neutral": return <Check size={size} />;
    default: return null;
  }
}
