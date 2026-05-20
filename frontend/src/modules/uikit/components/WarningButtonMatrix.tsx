"use client";

import { SpecFooter } from "./SpecFooter";

import React from "react";

import { Button } from "@/components/ui/Button";

import { Badge } from "@/components/ui/Badge";

import { cn } from "@/lib/utils";

const SIZES = [
  {
    key: "lg",
    label: "Large",
    px: "56px",
  },

  {
    key: "md",
    label: "Medium",
    px: "44px",
  },

  {
    key: "sm",
    label: "Small",
    px: "40px",
  },

  {
    key: "xs",
    label: "XSmall",
    px: "36px",
  },
] as const;

const STATES = [
  {
    key: "default",
    label: "Default",
    props: {},
    description:
      "Estado base del botón. Se muestra cuando no hay interacción del usuario.",
  },

  {
    key: "hover",
    label: "Hover",
    props: {
      state: "hover" as const,
    },
    description:
      "El cursor está sobre el botón. Indica que el elemento es interactuable.",
  },

  {
    key: "active",
    label: "Pressed",
    props: {
      state: "active" as const,
    },
    description:
      "El botón ha sido presionado. Confirma la acción con retroalimentación visual.",
  },

  {
    key: "disabled",
    label: "Disabled",
    props: {
      disabled: true,
    },
    description:
      "No disponible para interacción. La acción está bloqueada o pendiente.",
  },
] as const;

export function WarningButtonMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-warning-500/10 text-warning-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Action Cautionary
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Warning <span className="text-warning-500">Button</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Indica precaución o alertas que requieren atención antes de
            continuar. Diseñado para prevenir errores del usuario mediante una
            señalización visual clara pero no alarmista.
          </p>
        </div>
      </div>
      <div className="space-y-24">
        
        {/* State legend */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          {STATES.map((s) => (
            <div
              key={s.key}
              className="p-6 rounded-3xl bg-neutral-50 dark:bg-neutral-100/60 border border-neutral-100 dark:border-neutral-300 space-y-2 transition-all hover:shadow-md"
            >
              
              <span className="text-[10px] font-bold text-warning-500">
                {s.label}
              </span>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
        {/* Matrix Table */}
        <div className="bg-neutral-50 dark:bg-neutral-100/50 p-1 rounded-[40px] border border-neutral-100 dark:border-neutral-300 overflow-hidden shadow-sm">
          
          <div className="overflow-x-auto">
            
            <div className="min-w-[800px] bg-white dark:bg-neutral-50/40 rounded-[38px] overflow-hidden">
              
              {/* Column headers */}
              <div className="grid grid-cols-[200px_repeat(4,1fr)] border-b border-neutral-100 dark:border-neutral-300 bg-neutral-50/50 dark:bg-neutral-100/80">
                
                <div className="px-8 py-6 text-[10px] font-bold text-neutral-400">
                  Estado / Tamaño
                </div>
                {SIZES.map((s) => (
                  <div key={s.key} className="px-6 py-6 text-left">
                    
                    <div className="text-[11px] font-bold text-neutral-900 dark:text-white">
                      {s.label}
                    </div>
                    <div className="text-[10px] text-warning-500 font-bold mt-1 ">
                      {s.px}
                    </div>
                  </div>
                ))}
              </div>
              {/* Rows */}
              {STATES.map((state, i) => (
                <div
                  key={state.key}
                  className={cn(
                    "grid grid-cols-[200px_repeat(4,1fr)] items-start transition-colors hover:bg-neutral-50/30",
                    i < STATES.length - 1 &&
                      "border-b border-neutral-100 dark:border-neutral-300",
                  )}
                >
                  
                  {/* State label */}
                  <div className="px-8 py-8 border-r border-neutral-50 dark:border-neutral-300">
                    
                    <span
                      className={cn(
                        "text-[11px] font-bold ",
                        state.key === "disabled"
                          ? "text-neutral-300"
                          : "text-neutral-900 dark:text-white",
                      )}
                    >
                      
                      {state.label}
                    </span>
                  </div>
                  {/* Buttons */}
                  {SIZES.map((size) => (
                    <div
                      key={size.key}
                      className="px-6 py-8 flex justify-start"
                    >
                      
                      <Button
                        variant="warning"
                        size={size.key}
                        {...state.props}
                      >
                        
                        Label
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Comportamiento Semántico",
            text: "Utiliza el token Warning-500 (Amber/Orange). Este color se reserva para acciones que pueden tener efectos secundarios no deseados pero reversibles.",
          },

          {
            label: "Respuesta Visual",
            text: "El diseño Pill System con bordes de 1.5px asegura que el botón sea coherente con el resto de la interfaz mientras destaca por su tonalidad de aviso.",
          },
        ]}
        compositionText="El botón de aviso debe utilizarse en flujos de confirmación donde el usuario necesite validar datos sospechosos o cuando una acción pueda afectar a la configuración de otros módulos sin borrarlos."
      />
    </div>
  );
}





