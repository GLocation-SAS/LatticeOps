"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";
import { Slash } from "lucide-react";

export function BreadcrumbMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Navigation Atoms
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Breadcrumb <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Sistema de navegación jerárquica diseñado para proporcionar contexto de ubicación y facilitar el retroceso estructural en interfaces complejas.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Atomic Breakdown */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Auditoría de <span className="text-primary-500">Estados</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Desglose de la anatomía de navegación y jerarquía de enlaces.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Enlace Activo</span>
              <div className="text-sm font-heading font-black text-neutral-900 dark:text-white">Current Page</div>
              <p className="text-xs text-neutral-500 italic">Uso de peso tipográfico 'Black' para indicar la ubicación actual sin necesidad de color.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Separador Dinámico</span>
              <div className="text-neutral-300 font-light text-xl">/</div>
              <p className="text-xs text-neutral-500 italic">Elemento neutro con opacidad reducida para no competir visualmente con los enlaces.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Estado Hover</span>
              <div className="text-sm font-heading font-bold text-primary-700 underline decoration-2 underline-offset-4">Hover Link</div>
              <p className="text-xs text-neutral-500 italic">Retroalimentación mediante subrayado y cambio al color de marca (Primary-700).</p>
            </div>
          </div>
        </div>

        {/* Progression Section */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Jerarquía de <span className="text-primary-500">Niveles</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Escalabilidad desde una única ubicación hasta estructuras de profundidad extendida.
              </p>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            <div className="space-y-12 max-w-4xl mx-auto">
              {[
                { label: "1 Nivel (Root)", depth: 1 },
                { label: "2 Niveles (Sección)", depth: 2 },
                { label: "3 Niveles (Sub-sección)", depth: 3 },
                { label: "Alta Profundidad (5+ Niveles)", depth: 5 },
              ].map((d) => (
                <div key={d.label} className="bg-white dark:bg-neutral-100 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-4">
                  <span className="text-[10px] font-bold text-neutral-400 block border-b border-neutral-50 dark:border-neutral-300 pb-2">{d.label}</span>
                  <div className="py-2">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="#" showHome>Inicio</BreadcrumbLink>
                        </BreadcrumbItem>
                        {Array.from({ length: d.depth - 1 }).map((_, i) => (
                          <React.Fragment key={i}>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                              <BreadcrumbLink href="#">Nivel {i + 1}</BreadcrumbLink>
                            </BreadcrumbItem>
                          </React.Fragment>
                        ))}
                        {d.depth > 1 && <BreadcrumbSeparator />}
                        <BreadcrumbItem>
                          <BreadcrumbPage>Página Actual</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator Styles Grid */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Estilos de <span className="text-primary-500">Divisor</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Personalización estética del separador para adaptarse al lenguaje visual de cada módulo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-8">
              <div className="bg-white dark:bg-neutral-100 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-4">
                <span className="text-[10px] font-bold text-primary-500 block border-b border-primary-50 dark:border-neutral-300 pb-2">Standard Chevron</span>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="#" showHome>Admin</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbLink href="#">Settings</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem><BreadcrumbPage>Profile</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-8">
              <div className="bg-white dark:bg-neutral-100 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-4">
                <span className="text-[10px] font-bold text-primary-500 block border-b border-primary-50 dark:border-neutral-300 pb-2">Slash Modern Style</span>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem><BreadcrumbLink href="#" showHome>Core</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash className="w-3 h-3 rotate-12 opacity-40" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem><BreadcrumbLink href="#">Infrastructure</BreadcrumbLink></BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <Slash className="w-3 h-3 rotate-12 opacity-40" />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem><BreadcrumbPage>Instances</BreadcrumbPage></BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Semántica de Ruta",
            text: "Implementa la especificación microdata de Google (BreadcrumbList) para optimizar el SEO y la legibilidad por motores de búsqueda.",
          },
          {
            label: "Navegación Táctil",
            text: "Cada nodo de la ruta mantiene un área de clic mínima de 44px para cumplir con los estándares de accesibilidad en dispositivos móviles.",
          },
        ]}
        compositionText="El Breadcrumb System permite la navegación jerárquica fluida, soportando estados activos, separadores personalizados e iconos dinámicos para cada nivel de la aplicación."
      />
    </div>
  );
}





