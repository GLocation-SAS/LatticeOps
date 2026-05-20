"use client";

import { SpecFooter } from "./SpecFooter";
import React from "react";
import { cn } from "@/lib/utils";
import { Tag } from "@/components/ui/Tag";

import { Badge } from "@/components/ui/Badge";

import {
  Plus,
  Hash,
  Info,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Sparkles,
  MousePointer2,
  X,
} from "lucide-react";

const SIZES = [
  {
    key: "L",
    label: "Large",
    description:
      "Tags prominentes para etiquetas críticas o contenido extenso que requiere alta visibilidad.",
  },

  {
    key: "M",
    label: "Medium",
    description:
      "El estándar versátil para la mayoría de las situaciones de etiquetado y categorización.",
  },

  {
    key: "S",
    label: "Small",
    description:
      "Tags compactos para información secundaria, metadatos o espacios reducidos.",
  },
] as const;

const VARIANTS = [
  {
    key: "informative",
    label: "Informative",
    icon: <Info size={14} />,
    usage: "Información general o detalles explicativos.",
  },

  {
    key: "success",
    label: "Success",
    icon: <CheckCircle2 size={14} />,
    usage: "Confirmaciones positivas o estados completados.",
  },

  {
    key: "pause",
    label: "Warning",
    icon: <AlertTriangle size={14} />,
    usage: "Alertas preventivas o estados en espera.",
  },

  {
    key: "error",
    label: "Error",
    icon: <AlertCircle size={14} />,
    usage: "Errores críticos o acciones fallidas.",
  },

  {
    key: "default",
    label: "Default",
    icon: <Sparkles size={14} />,
    usage: "Categorización neutral o genérica.",
  },

  {
    key: "hover",
    label: "Hover State",
    icon: <MousePointer2 size={14} />,
    usage: "Estado visual de interacción sugerida.",
  },
] as const;

export function TagMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Pill System
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Tag <span className="text-primary-500">Architecture</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Sistema de etiquetas dinámicas con soporte para acciones integradas,
            estados semánticos y gestión de contenido.
          </p>
        </div>
      </div>
      <div className="space-y-32">
        
        {SIZES.map((size) => (
          <div key={size.key} className="space-y-12">
            
            {/* Size Section Header */}
            <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
              
              <div className="flex flex-col">
                
                <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                  
                  Tags
                  <span className="text-primary-500">{size.label}</span>
                </h4>
                <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                  
                  {size.description}
                </p>
              </div>
            </div>
            {/* Matrix Grid */}
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] transition-all duration-500 hover:bg-neutral-100/50">
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                {VARIANTS.map((v) => (
                  <div
                    key={`${size.key}-${v.key}`}
                    className="bg-white dark:bg-neutral-100 rounded-[32px] p-8 border border-neutral-100 dark:border-neutral-300 shadow-sm flex flex-col gap-6"
                  >
                    
                    <div className="flex flex-col gap-2 border-b border-neutral-50 dark:border-neutral-300 pb-4">
                      <div className="flex items-start gap-2">
                        <div className={cn(
                          v.key === "informative" && "text-info-500",
                          v.key === "success" && "text-success-500",
                          v.key === "pause" && "text-warning-500",
                          v.key === "error" && "text-error-500",
                          v.key === "default" && "text-primary-500",
                          v.key === "hover" && "text-primary-500",
                        )}>{v.icon}</div>
                        <h5 className="text-sm font-heading font-bold text-neutral-900 dark:text-white">
                          {v.label}
                        </h5>
                      </div>
                      <p className="text-xs text-neutral-400 font-sans font-medium">
                        
                        {v.usage}
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      
                      <div className="flex flex-wrap gap-3 items-start">
                        
                        <Tag
                          label="Basic Tag"
                          variant={v.key as any}
                          size={size.key}
                        />
                        <Tag
                          label="With Icon"
                          variant={v.key as any}
                          size={size.key}
                          iconLeft={<Plus size={size.key === "S" ? 12 : 14} />}
                        />
                      </div>
                      <div className="flex flex-wrap gap-3 items-start">
                        
                        <Tag
                          label="Removable"
                          variant={v.key as any}
                          size={size.key}
                          onRemove={() => {}}
                        />
                        <Tag
                          label="Full Action"
                          variant={v.key as any}
                          size={size.key}
                          iconLeft={<Hash size={size.key === "S" ? 12 : 14} />}
                          onRemove={() => {}}
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
                Desglose anatómico de las etiquetas y su comportamiento reactivo ante interacciones.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Botón de Cierre</span>
              <div className="w-8 h-8 rounded-full bg-error-500/10 text-error-600 flex items-center justify-center">
                <X size={14} />
              </div>
              <p className="text-xs text-neutral-500 italic">Área interactiva circular con retroalimentación cromática según la variante.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Radio de Curvatura</span>
              <div className="h-10 w-24 bg-primary-700 rounded-2xl flex items-center justify-center text-white text-[10px] font-bold">rounded-2xl</div>
              <p className="text-xs text-neutral-500 italic">Estructura Pill suavizada para mantener la coherencia con el sistema de botones.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Iconografía</span>
              <div className="p-3 bg-white dark:bg-neutral-100 rounded-xl shadow-sm text-primary-500 w-fit">
                <Plus size={16} />
              </div>
              <p className="text-xs text-neutral-500 italic">Soporte nativo para iconos de Lucide-React alineados visualmente al texto.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Tipografía",
            text: "Montserrat para encabezados (Métrica Bold) y Nunito para etiquetas de cuerpo, asegurando legibilidad en todos los tamaños.",
          },

          {
            label: "Bordes & Radio",
            text: "Bordes estándar de 1.5px con radios progresivos (3xl para L, 2xl para M, xl para S) para una estética orgánica.",
          },
        ]}
        compositionText="Cada tag soporta estados dinámicos. El botón de eliminación (X) incluye un efecto circular de hover con retroalimentación inmediata, adaptándose al color semántico del tag para mantener la coherencia visual absoluta."
      />
    </div>
  );
}





