"use client";

import React from "react";
import { SpecFooter } from "./SpecFooter";
import { Notification } from "@/components/ui/Notification";
import { Badge } from "@/components/ui/Badge";
import { Info } from "lucide-react";

const STATES = [
  {
    key: "Info",
    title: "Info Notification",
    message: "Esta es una notificación de información para el usuario.",
  },
  {
    key: "Success",
    title: "Success Notification",
    message: "¡Operación completada con éxito! Los cambios se han guardado.",
  },
  {
    key: "Error",
    title: "Error Notification",
    message: "Ha ocurrido un error al procesar tu solicitud. Inténtalo de nuevo.",
  },
  {
    key: "Warning",
    title: "Warning Notification",
    message: "Atención: Tu sesión expirará pronto por inactividad.",
  },
] as const;

export function NotificationMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Feedback System
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Visual <span className="text-primary-500">Notifications</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Sistema de retroalimentación inmediata diseñado para máxima visibilidad y claridad operativa. Cada estado utiliza señales visuales semánticas y jerarquía tipográfica robusta.
          </p>
        </div>
      </div>

      <div className="space-y-24">
        {STATES.map((state) => (
          <div key={state.key} className="space-y-12">
            {/* Section Header */}
            <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col">
                <h4 className="text-2xl font-heading font-bold tracking-tight text-neutral-900">
                  {state.key} <span className="text-neutral-400">Notification</span>
                </h4>
                <p className="text-sm font-sans font-medium text-neutral-500 mt-1">
                  Estado semántico para {state.key.toLowerCase()} feedback
                </p>
              </div>
            </div>
            {/* Showcase Container */}
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] transition-all duration-500 hover:bg-neutral-100/50">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <Notification
                    state={state.key}
                    title={state.title}
                    message={state.message}
                  />
                </div>
                <div className="bg-white dark:bg-neutral-100 rounded-[32px] p-8 space-y-4 border border-neutral-100 dark:border-neutral-300 shadow-sm">
                  <h5 className="text-[10px] font-heading font-bold text-neutral-400">
                    Especificaciones Técnicas
                  </h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-200/50">
                      <p className="text-[9px] font-bold text-neutral-400 mb-1">Base Font</p>
                      <p className="text-xs font-heading font-bold">Montserrat</p>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-200/50">
                      <p className="text-[9px] font-bold text-neutral-400 mb-1">Body Font</p>
                      <p className="text-xs font-sans font-bold">Nunito</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Atomic Breakdown */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Auditoría de <span className="text-primary-500">Estados</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Desglose de los elementos críticos que garantizan la visibilidad del feedback.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Barra de Acento</span>
              <div className="h-1.5 w-full bg-info-500 rounded-full" />
              <p className="text-xs text-neutral-500 italic">Indicador cromático superior de 6px que vincula la notificación con su categoría semántica.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Icono & Halo</span>
              <div className="relative w-10 h-10 rounded-full bg-info-500 flex items-center justify-center text-white">
                <div className="absolute inset-0 rounded-full bg-info-500/20 blur-xl animate-pulse" />
                <Info size={16} />
              </div>
              <p className="text-xs text-neutral-500 italic">Contenedor con efecto de brillo pulsante para captar la atención periférica del usuario.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Contenedor Glass</span>
              <div className="h-10 w-full bg-white dark:bg-neutral-100 rounded-2xl border border-neutral-100 dark:border-neutral-300 shadow-xl" />
              <p className="text-xs text-neutral-500 italic">Estructura flotante con sombras profundas (Elevation-5) para destacar sobre el contenido.</p>
            </div>
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Cinemática",
            text: "Animaciones de entrada 'slide-in' desde la derecha de 400ms (spring). Incluye un temporizador visual opcional para auto-cierre.",
          },
          {
            label: "Semántica",
            text: "Colores de borde de 1.5px vinculados directamente al estado (Success-Green, Error-Red, Warning-Orange, Info-Blue) para reconocimiento periférico.",
          },
        ]}
        compositionText="Diseñado para apilamiento dinámico (stacking) mediante un portal de React. La estructura interna permite la inclusión de botones de acción rápida ('Undo', 'Reintentar') sin romper el layout base."
      />
    </div>
  );
}





