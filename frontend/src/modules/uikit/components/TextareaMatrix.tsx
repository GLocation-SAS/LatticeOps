"use client";

import { SpecFooter } from "./SpecFooter";

import React from "react";

import { Textarea } from "@/components/ui/Textarea";

import { Badge } from "@/components/ui/Badge";

import { Sparkles } from "lucide-react";

export function TextareaMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Input Fields
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Text <span className="text-primary-500">Area</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Componente de entrada multilínea optimizado para contenido extenso,
            con soporte para autocompletado IA y retroalimentación de
            estado.
          </p>
        </div>
      </div>
      <div className="space-y-32">
        
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            
            <div className="flex flex-col">
              
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                
                Estados de
                <span className="text-primary-500">Interacción</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                
                Variaciones semánticas y funcionales para diferentes contextos
                de entrada de texto.
              </p>
            </div>
          </div>
          {/* Matrix Grid */}
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Default & AI Mode */}
              <div className="bg-white dark:bg-neutral-100 p-10 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-8">
                
                <div className="flex flex-col gap-2 border-b border-neutral-50 dark:border-neutral-300 pb-4">
                  
                  <h5 className="text-sm font-heading font-bold text-neutral-900 ">
                    Default & AI Assisted
                  </h5>
                  <p className="text-xs text-neutral-400 font-sans font-medium">
                    Estado base y variante con indicador de autocompletado
                    inteligente.
                  </p>
                </div>
                <div className="space-y-8">
                  
                  <Textarea
                    label="Descripción del Proyecto"
                    placeholder="Escribe aquí los detalles del proyecto..."
                  />
                  <Textarea
                    label="Análisis IA"
                    placeholder="Generando sugerencias..."
                    showAutoCompleteIcon
                  />
                </div>
              </div>
              {/* Semantic States */}
              <div className="bg-white dark:bg-neutral-100 p-10 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-8">
                
                <div className="flex flex-col gap-2 border-b border-neutral-50 dark:border-neutral-300 pb-4">
                  
                  <h5 className="text-sm font-heading font-bold text-neutral-900 ">
                    Retroalimentación de Estado
                  </h5>
                  <p className="text-xs text-neutral-400 font-sans font-medium">
                    Validaciones visuales para éxito, error y estados
                    deshabilitados.
                  </p>
                </div>
                <div className="space-y-8">
                  
                  <Textarea
                    label="Validación Exitosa"
                    defaultValue="El contenido cumple con los requisitos del sistema."
                    success
                  />
                  <Textarea
                    label="Error de Validación"
                    defaultValue="Contenido no permitido o demasiado corto."
                    error="Debes ingresar al menos 50 caracteres."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Geometría",
            text: "Bordes de 1.5px con radio de 24px (xl) para mantener la consistencia con el Pill System. Altura mínima de 120px.",
          },

          {
            label: "Comportamiento",
            text: "Soporta redimensionamiento vertical (resize-y) controlado y estados dinámicos que cambian el color del borde y el glow.",
          },
        ]}
        compositionText="El icono Sparkles indica la disponibilidad de herramientas generativas. Este estado utiliza una animación pulsante sutil para sugerir interactividad sin distraer al usuario durante la redacción."
      />
    </div>
  );
}





