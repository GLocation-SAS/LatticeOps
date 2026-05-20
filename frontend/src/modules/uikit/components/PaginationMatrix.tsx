"use client";

import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationInfo,
} from "@/components/ui/Pagination";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";

export function PaginationMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Navigation Elements
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Pagination <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Sistema de navegación secuencial con diseño tipo "Pill Bar". Optimizado para legibilidad y fluidez visual mediante transiciones circulares.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {/* Full Variant */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">Standard Navigation</h3>
            <p className="text-neutral-500 font-sans">Variante completa con controles de texto y resumen de resultados.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-16 rounded-[48px] border border-neutral-100 dark:border-neutral-300">
            <Pagination>
              <PaginationContent>
                <PaginationPrevious />
                <div className="flex items-center gap-1 mx-4">
                  <PaginationLink>1</PaginationLink>
                  <PaginationLink>2</PaginationLink>
                  <PaginationLink>3</PaginationLink>
                  <PaginationLink>4</PaginationLink>
                  <PaginationLink isActive>5</PaginationLink>
                  <PaginationEllipsis />
                  <PaginationLink>99</PaginationLink>
                </div>
                <PaginationNext />
              </PaginationContent>
              <PaginationInfo>Mostrando 100 de 1.000 resultados</PaginationInfo>
            </Pagination>
          </div>
        </section>

        {/* Compact Variant */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">Compact Controls</h3>
            <p className="text-neutral-500 font-sans">Diseño minimalista utilizando solo iconos para los controles direccionales.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-16 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex justify-center">
            <Pagination className="w-auto">
              <PaginationContent>
                <PaginationPrevious showText={false} />
                <div className="flex items-center gap-1">
                  <PaginationLink>1</PaginationLink>
                  <PaginationLink>2</PaginationLink>
                  <PaginationLink>3</PaginationLink>
                  <PaginationLink>4</PaginationLink>
                  <PaginationLink isActive>5</PaginationLink>
                  <PaginationEllipsis />
                  <PaginationLink>99</PaginationLink>
                </div>
                <PaginationNext showText={false} />
              </PaginationContent>
            </Pagination>
          </div>
        </section>

        {/* Simple Variant */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">Sequential Minimal</h3>
            <p className="text-neutral-500 font-sans">Ideal para feeds infinitos o navegación rápida con conteo de datos.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-16 rounded-[48px] border border-neutral-100 dark:border-neutral-300">
            <Pagination>
              <PaginationContent>
                <PaginationPrevious showText={false} />
                <PaginationLink isActive className="scale-100 h-10 w-10">
                  <PaginationNext showText={false} className="text-white hover:text-white p-0" />
                </PaginationLink>
              </PaginationContent>
              <PaginationInfo>Mostrando 100 de 1.000 resultados</PaginationInfo>
            </Pagination>
          </div>
        </section>
      </div>

      <SpecFooter
        specs={[
          { label: "Geometría", text: "Contenedor principal con border-radius de 100px (Pill) y botones de página circulares." },
          { label: "Estados", text: "La página activa resalta con Primary-500 y una sombra suave para indicar profundidad." },
        ]}
        compositionText="La paginación ha sido rediseñada para reflejar una estética moderna y limpia, eliminando el exceso de bordes internos y priorizando la jerarquía visual del estado activo."
      />
    </div>
  );
}





