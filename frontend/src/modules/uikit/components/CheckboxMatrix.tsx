"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/Checkbox";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";

export function CheckboxMatrix() {
  const [checkedStates, setCheckedStates] = useState<Record<string, boolean>>({
    "l-checked": true,
    "m-checked": true,
    "s-checked": true,
    "l-primary": true,
    "m-primary": true,
    "s-primary": true,
  });

  const toggleChecked = (id: string) => {
    setCheckedStates((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Input Elements
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Checkbox <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Componente de selección múltiple con soporte para estados binarios,
            validación de errores y escalabilidad dimensional.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {/* Solo Label Section */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">
              Solo Label
            </h3>
            <p className="text-neutral-500 font-sans">
              Configuración compacta con etiqueta principal.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[40px] border border-neutral-100 dark:border-neutral-300">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Unchecked
                </span>
                <Checkbox label="Suscribirse al newsletter" />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                  Checked (Primary)
                </span>
                <Checkbox
                  label="Suscribirse al newsletter"
                  checked={checkedStates["m-checked"]}
                  onChange={() => toggleChecked("m-checked")}
                />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-error-500 uppercase tracking-widest">
                  Error State
                </span>
                <Checkbox label="Acepto los términos" error checked={true} />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm opacity-60">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Disabled
                </span>
                <Checkbox label="Opción bloqueada" disabled checked={true} />
              </div>
            </div>
          </div>
        </section>

        {/* Sizes Matrix */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">
              Dimensional Scale
            </h3>
            <p className="text-neutral-500 font-sans">
              Tres escalas optimizadas para diferentes densidades de
              información.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-1 rounded-[40px] border border-neutral-100 dark:border-neutral-300 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-white dark:bg-neutral-50 rounded-[38px] overflow-hidden">
                <div className="grid grid-cols-[200px_1fr_1fr_1fr] border-b border-neutral-100 dark:border-neutral-300 bg-neutral-50/50 dark:bg-neutral-100/80">
                  <div className="px-8 py-6 text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                    Scale / Variant
                  </div>
                  <div className="px-8 py-6 text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                    Large (L)
                  </div>
                  <div className="px-8 py-6 text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                    Medium (M)
                  </div>
                  <div className="px-8 py-6 text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                    Small (S)
                  </div>
                </div>

                <div className="grid grid-cols-[200px_1fr_1fr_1fr] items-center border-b border-neutral-100 dark:border-neutral-300">
                  <div className="px-8 py-10 border-r border-neutral-50 dark:border-neutral-300">
                    <span className="text-[11px] font-bold text-neutral-900">
                      Unchecked
                    </span>
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="L" />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="M" />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="S" />
                  </div>
                </div>

                <div className="grid grid-cols-[200px_1fr_1fr_1fr] items-center border-b border-neutral-100 dark:border-neutral-300">
                  <div className="px-8 py-10 border-r border-neutral-50 dark:border-neutral-300">
                    <span className="text-[11px] font-bold text-primary-500">
                      Checked
                    </span>
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="L" checked={true} readOnly />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="M" checked={true} readOnly />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="S" checked={true} readOnly />
                  </div>
                </div>

                <div className="grid grid-cols-[200px_1fr_1fr_1fr] items-center">
                  <div className="px-8 py-10 border-r border-neutral-50 dark:border-neutral-300">
                    <span className="text-[11px] font-bold text-neutral-300">
                      Disabled
                    </span>
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="L" disabled checked={true} />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="M" disabled checked={true} />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Checkbox sizeVariant="S" disabled checked={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Interactividad",
            text: "Transición de 300ms en el color de fondo y escala del icono Check al activarse.",
          },
          {
            label: "Anatomía",
            text: "Bordes de 1.5px con radio de 8px (Pill-ish) para mantener consistencia con el sistema de botones.",
          },
        ]}
        compositionText="El checkbox utiliza tokens semánticos de Primary-500 para el estado activo. Se eliminó la variante 'Success' para unificar la experiencia de marca bajo un único color de acción principal."
      />
    </div>
  );
}





