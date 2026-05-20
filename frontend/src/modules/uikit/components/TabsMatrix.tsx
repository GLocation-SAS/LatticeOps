"use client";

import { SpecFooter } from "./SpecFooter";
import React, { useState } from "react";
import { Tabs, TabItem } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import { Layout, Sparkles, Navigation, List } from "lucide-react";

const TABS_EXAMPLE = [
  { id: "overview", label: "Resumen" },
  { id: "analytics", label: "Métricas" },
  { id: "security", label: "Seguridad" },
  { id: "settings", label: "Ajustes" },
];

export function TabsMatrix() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Navigation Layouts
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Tab <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Mecanismo de navegación horizontal con iconos inteligentes y efecto de relleno fluido al interactuar.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Interactive Showcase */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Experiencia <span className="text-primary-500">Interactiva</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Demostración de iconos automáticos y el efecto de hover fluido que "rellena" el color de la pestaña.
              </p>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            <div className="flex flex-col items-start gap-12">
              <div className="bg-white dark:bg-neutral-100 p-8 rounded-[40px] border border-neutral-100 dark:border-neutral-300 shadow-sm">
                <Tabs
                  tabs={TABS_EXAMPLE}
                  activeTab={activeTab}
                  onTabChange={setActiveTab}
                />
              </div>
              <div className="bg-primary-500/5 border border-primary-500/10 rounded-2xl p-6 flex items-start gap-4">
                <Sparkles size={20} className="text-primary-700" />
                <p className="text-sm font-heading font-bold text-neutral-900 tracking-tight">
                  Vista activa: <span className="text-primary-700">{activeTab}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Atomic Breakdown */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Auditoría de <span className="text-primary-500">Estados</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Desglose visual de los componentes atómicos (TabItems) con sus iconos respectivos.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                label: "Estado Activo (700)",
                component: <TabItem label="Dashboard" isActive />,
                desc: "Color Primary-700 con sombra de profundidad.",
              },
              {
                label: "Estado Inactivo",
                component: <TabItem label="Base de datos" />,
                desc: "Icono en gris neutro, texto suave.",
              },
              {
                label: "Hover Fluido",
                component: <TabItem label="Ajustes" className="is-hover" />,
                desc: "Efecto de relleno lateral al pasar el mouse.",
              },
            ].map((atom) => (
              <div
                key={atom.label}
                className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col items-start gap-6 group hover:bg-neutral-100/50 transition-all"
              >
                <div className="flex items-start gap-2">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    {atom.label}
                  </span>
                </div>
                <div className="bg-white dark:bg-neutral-100 p-4 rounded-full border border-neutral-100 dark:border-neutral-300 shadow-sm">
                  {atom.component}
                </div>
                <p className="text-xs text-neutral-500 italic">{atom.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Detección de Iconos",
            text: "Algoritmo semántico que asigna iconos de Lucide-React basados en palabras clave de la etiqueta.",
          },
          {
            label: "Interacción Fluida",
            text: "Uso de degradados animados para el efecto de relleno (side-sweep) en 500ms.",
          },
        ]}
        compositionText="El sistema de pestañas ha sido actualizado para usar Primary-700 en el estado activo, mejorando el contraste y la jerarquía visual dentro de la barra de navegación."
      />
    </div>
  );
}





