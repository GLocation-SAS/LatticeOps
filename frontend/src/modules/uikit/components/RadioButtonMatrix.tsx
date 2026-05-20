"use client";

import React, { useState } from "react";
import { RadioButton } from "@/components/ui/RadioButton";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";

export function RadioButtonMatrix() {
  const [selectedSize, setSelectedSize] = useState("m");
  const [demoValue, setDemoValue] = useState("b");

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
            Radio <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Componente de selección única. Utiliza tokens de Primary-500 para el
            estado seleccionado, manteniendo consistencia visual con el resto
            del sistema.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {/* Simple Example */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">Interactivity Demo</h3>
            <p className="text-neutral-500 font-sans">Haz clic para probar la selección única y las animaciones.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[40px] border border-neutral-100 dark:border-neutral-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Option A
                </span>
                <RadioButton 
                  name="demo-group" 
                  label="Opción A" 
                  checked={demoValue === "a"} 
                  onChange={() => setDemoValue("a")}
                />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                  Option B (Default)
                </span>
                <RadioButton
                  name="demo-group"
                  label="Opción B"
                  checked={demoValue === "b"}
                  onChange={() => setDemoValue("b")}
                />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm opacity-60">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Disabled Option
                </span>
                <RadioButton
                  name="demo-group"
                  label="Opción bloqueada"
                  disabled
                  checked={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sizes */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">
              Dimensional Scale
            </h3>
            <p className="text-neutral-500 font-sans">
              Escalas L, M y S para integración en diferentes contextos de UI.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-1 rounded-[40px] border border-neutral-100 dark:border-neutral-300 overflow-hidden">
            <div className="overflow-x-auto">
              <div className="min-w-[800px] bg-white dark:bg-neutral-50 rounded-[38px] overflow-hidden">
                <div className="grid grid-cols-[200px_1fr_1fr_1fr] border-b border-neutral-100 dark:border-neutral-300 bg-neutral-50/50 dark:bg-neutral-100/80">
                  <div className="px-8 py-6 text-[10px] font-bold text-neutral-400">
                    Scale / State
                  </div>
                  <div className="px-8 py-6 text-[10px] font-bold text-primary-500">
                    Large (L)
                  </div>
                  <div className="px-8 py-6 text-[10px] font-bold text-primary-500">
                    Medium (M)
                  </div>
                  <div className="px-8 py-6 text-[10px] font-bold text-primary-500">
                    Small (S)
                  </div>
                </div>

                <div className="grid grid-cols-[200px_1fr_1fr_1fr] items-center border-b border-neutral-100 dark:border-neutral-300">
                  <div className="px-8 py-10 border-r border-neutral-50">
                    <span className="text-[11px] font-bold text-neutral-900">
                      Interactive
                    </span>
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <RadioButton 
                      name="size-group" 
                      sizeVariant="L" 
                      checked={selectedSize === "l"} 
                      onChange={() => setSelectedSize("l")} 
                    />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <RadioButton 
                      name="size-group" 
                      sizeVariant="M" 
                      checked={selectedSize === "m"} 
                      onChange={() => setSelectedSize("m")} 
                    />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <RadioButton 
                      name="size-group" 
                      sizeVariant="S" 
                      checked={selectedSize === "s"} 
                      onChange={() => setSelectedSize("s")} 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-[200px_1fr_1fr_1fr] items-center">
                  <div className="px-8 py-10 border-r border-neutral-50">
                    <span className="text-[11px] font-bold text-neutral-300">
                      Disabled
                    </span>
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <RadioButton
                      sizeVariant="L"
                      disabled
                      checked={true}
                      readOnly
                    />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <RadioButton
                      sizeVariant="M"
                      disabled
                      checked={true}
                      readOnly
                    />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <RadioButton
                      sizeVariant="S"
                      disabled
                      checked={true}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Selección",
            text: "Uso de Primary-500 para el anillo exterior y el punto central en estado seleccionado.",
          },
          {
            label: "Animación",
            text: "Escalado suave del punto central mediante transform-scale de 0 a 1 en 300ms.",
          },
        ]}
        compositionText="El Radio System sigue la misma lógica de color que el Checkbox System, priorizando la identidad de marca sobre los colores de estado semánticos convencionales."
      />
    </div>
  );
}





