"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";
import { Sparkles, Maximize2, Layout, Info } from "lucide-react";

export function ModalMatrix() {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const sizes = [
    { id: "sm", label: "Small (MD)", desc: "Ideal para alertas rápidas o confirmaciones simples." },
    { id: "md", label: "Medium (LG)", desc: "El tamaño estándar para la mayoría de los formularios." },
    { id: "lg", label: "Large (2XL)", desc: "Para visualización de datos complejos o dashboards." },
  ] as const;

  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Overlay System
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Modal <span className="text-primary-500">Architecture</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Contenedores de alta prioridad con desenfoque de fondo y una barra de acento superior inspirada en el sistema de notificaciones para una jerarquía visual premium.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Sizes Showcase */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Escalabilidad de <span className="text-primary-500">Tamaño</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Tres escalas predefinidas para adaptarse a cualquier densidad de información.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {sizes.map((size) => (
                <div key={size.id} className="bg-white dark:bg-neutral-100 p-8 rounded-[40px] border border-neutral-100 dark:border-neutral-300 shadow-sm flex flex-col gap-6 group hover:border-primary-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-2xl text-primary-600">
                      <Maximize2 size={20} />
                    </div>
                    <h5 className="text-lg font-heading font-bold text-neutral-900">{size.label}</h5>
                  </div>
                  <p className="text-sm font-sans font-medium text-neutral-500 leading-relaxed">
                    {size.desc}
                  </p>
                  <Button 
                    variant="primary" 
                    className="mt-auto"
                    onClick={() => setOpenModal(size.id)}
                  >
                    Abrir Modal
                  </Button>

                  <Modal
                    isOpen={openModal === size.id}
                    onClose={() => setOpenModal(null)}
                    size={size.id}
                    title={`Vista Previa: ${size.label}`}
                  >
                    <div className="space-y-6">
                      <p className="text-neutral-500 font-sans leading-relaxed">
                        Este es un ejemplo del tamaño <strong>{size.id}</strong>. Observa el borde superior de acento y los radios de curvatura suavizados.
                      </p>
                      <div className="p-6 bg-neutral-50 dark:bg-neutral-200 rounded-2xl border border-neutral-100 dark:border-neutral-300">
                        <p className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-2">Contenido Interno</p>
                        <p className="text-neutral-900 dark:text-white font-medium">El sistema mantiene una separación de 40px (p-10) para asegurar la legibilidad.</p>
                      </div>
                      <div className="flex justify-end gap-3">
                        <Button variant="neutral" onClick={() => setOpenModal(null)}>Cerrar</Button>
                        <Button variant="primary">Guardar Cambios</Button>
                      </div>
                    </div>
                  </Modal>
                </div>
              ))}
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
                Anatomía interna y jerarquía de los elementos que componen la experiencia overlay.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Acento Superior</span>
              <div className="h-4 w-full bg-primary-700 rounded-full shadow-lg shadow-primary-700/20" />
              <p className="text-xs text-neutral-500 italic">Barra de 6px (h-1.5) para vinculación visual con el sistema de notificaciones.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Backdrop Glass</span>
              <div className="h-12 w-full bg-neutral-900/40 backdrop-blur-sm rounded-2xl border border-white/10" />
              <p className="text-xs text-neutral-500 italic">Capa de profundidad con desenfoque dinámico para aislar la tarea actual.</p>
            </div>
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          { label: "Mecánica Overlay", text: "Uso de portales de React para renderizar fuera del flujo del DOM, evitando problemas de z-index." },
          { label: "Foco de Atención", text: "Implementación de bloqueo de scroll en el body mientras la modal permanece abierta." },
        ]}
        compositionText="La Modal Architecture de LatticeOps prioriza la claridad. El uso del borde superior de acento no es solo decorativo, sino que permite identificar rápidamente la categoría de la tarea (Info, Success, Error)."
      />
    </div>
  );
}





