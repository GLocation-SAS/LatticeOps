"use client";

import React, { useState } from "react";
import { Toggle } from "@/components/ui/Toggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";

export function ToggleMatrix() {
  const [pressedStates, setPressedStates] = useState<Record<string, boolean>>({
    "demo-toggle": true,
    "l-toggle": true,
    "m-toggle": true,
    "s-toggle": true,
  });

  const togglePressed = (id: string) => {
    setPressedStates((prev) => ({ ...prev, [id]: !prev[id] }));
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
            Toggle <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Interruptores de estado binario con animaciones fluidas y tokens de
            color de marca para la activación.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {/* Gallery */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">Gallery & Interaction</h3>
            <p className="text-neutral-500 font-sans">Prueba los interruptores para ver las transiciones de color y posición.</p>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[40px] border border-neutral-100 dark:border-neutral-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Uncontrolled Toggle
                </span>
                <Toggle label="Modo avión" />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm">
                <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                  Controlled Toggle
                </span>
                <Toggle
                  label="Notificaciones"
                  pressed={pressedStates["demo-toggle"]}
                  onPressedChange={() => togglePressed("demo-toggle")}
                />
              </div>

              <div className="p-8 bg-white dark:bg-neutral-50 rounded-3xl border border-neutral-100 dark:border-neutral-300 space-y-8 flex flex-col items-start shadow-sm opacity-60">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Disabled
                </span>
                <Toggle
                  label="Configuración bloqueada"
                  disabled
                  pressed={true}
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
              Variantes de tamaño con escalado proporcional del track y el thumb.
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
                      Active
                    </span>
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Toggle 
                      sizeVariant="L" 
                      pressed={pressedStates["l-toggle"]} 
                      onPressedChange={() => togglePressed("l-toggle")} 
                    />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Toggle 
                      sizeVariant="M" 
                      pressed={pressedStates["m-toggle"]} 
                      onPressedChange={() => togglePressed("m-toggle")} 
                    />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Toggle 
                      sizeVariant="S" 
                      pressed={pressedStates["s-toggle"]} 
                      onPressedChange={() => togglePressed("s-toggle")} 
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
                    <Toggle sizeVariant="L" disabled pressed={true} />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Toggle sizeVariant="M" disabled pressed={true} />
                  </div>
                  <div className="px-8 py-10 flex justify-start">
                    <Toggle sizeVariant="S" disabled pressed={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized Toggles */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-bold text-neutral-900">
              Specialized <span className="text-primary-500">Variants</span>
            </h3>
            <p className="text-neutral-500 font-sans">
              Interruptores diseñados para casos de uso específicos con iconografía integrada.
            </p>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[40px] border border-neutral-100 dark:border-neutral-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-10 bg-white dark:bg-neutral-50 rounded-[32px] border border-neutral-100 dark:border-neutral-300 space-y-6 flex flex-col items-center shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary-500/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-primary-500/10 transition-all duration-500" />
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Theme Controller (L)
                </span>
                <ThemeToggle sizeVariant="L" />
                <p className="text-[10px] text-neutral-400 font-medium italic text-center">Control maestro del tema global</p>
              </div>

              <div className="p-10 bg-white dark:bg-neutral-50 rounded-[32px] border border-neutral-100 dark:border-neutral-300 space-y-6 flex flex-col items-center shadow-sm relative overflow-hidden group">
                <span className="text-[10px] font-bold text-primary-500 uppercase tracking-widest">
                  Theme Controller (M)
                </span>
                <ThemeToggle sizeVariant="M" />
                <p className="text-[10px] text-neutral-400 font-medium italic text-center">Tamaño estándar para UI principal</p>
              </div>

              <div className="p-10 bg-white dark:bg-neutral-50 rounded-[32px] border border-neutral-100 dark:border-neutral-300 space-y-6 flex flex-col items-center shadow-sm relative overflow-hidden group">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Theme Controller (S)
                </span>
                <ThemeToggle sizeVariant="S" />
                <p className="text-[10px] text-neutral-400 font-medium italic text-center">Compacto para barras de herramientas</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Mecánica",
            text: "Desplazamiento horizontal del knob con efecto de easing 'cubic-bezier' para una sensación física premium.",
          },
          {
            label: "Color",
            text: "El track cambia a Primary-500 al activarse, con una sombra suave para resaltar sobre el fondo.",
          },
        ]}
        compositionText="El Toggle System complementa al Checkbox System ofreciendo una alternativa visual para acciones de 'activar/desactivar' que requieren mayor énfasis inmediato."
      />
    </div>
  );
}





