"use client";

import React, { useState } from "react";
import { DialogModal } from "@/components/ui/DialogModal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";
import { AlertTriangle, Trash2, CheckCircle2, Info } from "lucide-react";

export function DialogModalMatrix() {
  const [openDialog, setOpenDialog] = useState<string | null>(null);

  const variants = [
    { id: "info", label: "Informativo", variant: "info", icon: <Info size={20} className="text-primary-700" />, desc: "Información neutral o guía para el usuario." },
    { id: "success", label: "Éxito", variant: "success", icon: <CheckCircle2 size={20} className="text-success-500" />, desc: "Confirmación de tareas completadas exitosamente." },
    { id: "warning", label: "Advertencia", variant: "warning", icon: <AlertTriangle size={20} className="text-warning-500" />, desc: "Avisos sobre acciones que requieren atención." },
    { id: "danger", label: "Crítico", variant: "danger", icon: <Trash2 size={20} className="text-error-500" />, desc: "Acciones destructivas o errores fatales." },
  ] as const;

  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Action Overlays
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Dialog <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Modales de decisión con jerarquía semántica reforzada mediante barras de acento dinámicas y tipografía de alto contraste.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Semantic Showcase */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Variantes <span className="text-primary-500">Semánticas</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Diferenciación visual instantánea basada en el tipo de acción requerida.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {variants.map((v) => (
                <div key={v.id} className="bg-white dark:bg-neutral-100 p-8 rounded-[40px] border border-neutral-100 dark:border-neutral-300 shadow-sm flex flex-col gap-6 group hover:border-primary-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-neutral-50 dark:bg-neutral-200 rounded-2xl">
                      {v.icon}
                    </div>
                    <h5 className="text-lg font-heading font-bold text-neutral-900">{v.label}</h5>
                  </div>
                  <p className="text-sm font-sans font-medium text-neutral-500 leading-relaxed">
                    {v.desc}
                  </p>
                  <Button 
                    variant={v.id === "danger" ? "error" : v.id === "info" ? "primary" : v.id as any} 
                    className="mt-auto"
                    onClick={() => setOpenDialog(v.id)}
                  >
                    Probar {v.label}
                  </Button>

                  <DialogModal
                    isOpen={openDialog === v.id}
                    onClose={() => setOpenDialog(null)}
                    variant={v.variant}
                    title={`Confirmar Acción: ${v.label}`}
                    description={`¿Estás seguro de que deseas proceder con esta acción de tipo ${v.label.toLowerCase()}? Esta operación es parte del sistema de diálogos estandarizado.`}
                    onConfirm={() => console.log(`Confirmed ${v.id}`)}
                  />
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
                Desglose de los elementos de decisión y su comportamiento reactivo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Iconografía de Alerta</span>
              <div className="w-12 h-12 bg-white dark:bg-neutral-100 rounded-2xl flex items-center justify-center shadow-sm text-error-500">
                <AlertTriangle size={24} />
              </div>
              <p className="text-xs text-neutral-500 italic">Contenedor de 48px para resaltar visualmente el tipo de advertencia.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Acciones Duales</span>
              <div className="flex gap-2">
                <div className="h-10 w-24 bg-neutral-200 dark:bg-neutral-200 rounded-xl" />
                <div className="h-10 w-24 bg-primary-700 rounded-xl" />
              </div>
              <p className="text-xs text-neutral-500 italic">Disposición horizontal obligatoria para fomentar la comparación de opciones.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Barra de Acento Dinámica</span>
              <div className="h-4 w-full bg-error-500 rounded-full" />
              <p className="text-xs text-neutral-500 italic">Color reactivo al estado: Success, Error, Warning o Primary.</p>
            </div>
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          { label: "Jerarquía Táctica", text: "Uso de botones 'Neutral' para cancelar y 'Semantic' para confirmar, evitando fatiga de decisión." },
          { label: "Anatomía de Diálogo", text: "Restricción de ancho máximo a 448px (max-w-md) para mantener el foco en la decisión central." },
        ]}
        compositionText="El Dialog System es el guardián de las acciones críticas. Al integrar la barra superior de acento, logramos una coherencia absoluta con las notificaciones de sistema que el usuario ya conoce."
      />
    </div>
  );
}





