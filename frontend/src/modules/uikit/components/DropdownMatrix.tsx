import { SpecFooter } from "./SpecFooter";

import React from "react";

import { Dropdown } from "@/components/ui/Dropdown";

import { Badge } from "@/components/ui/Badge";

import {
  Globe,
  User,
  Info,
  CheckCircle2,
  AlertCircle,
  Maximize2,
  Minimize2,
} from "lucide-react";

const SIZES = [
  {
    key: "lg",
    label: "Large",
    height: "56px",
    description:
      "Diseñado para capturar la atención en formularios de alto impacto y secciones hero.",
    icon: <Maximize2 className="w-5 h-5" />,
  },

  {
    key: "md",
    label: "Medium",
    height: "44px",
    description:
      "El estándar de oro para la mayoría de las interfaces administrativas y de usuario.",
    icon: <Globe className="w-5 h-5" />,
  },

  {
    key: "sm",
    label: "Small",
    height: "40px",
    description:
      "Optimizado para barras de filtros y menús contextuales en tablas de datos.",
    icon: <User className="w-5 h-5" />,
  },

  {
    key: "xs",
    label: "Extra Small",
    height: "36px",
    description:
      "Para micro-interacciones y espacios extremadamente reducidos.",
    icon: <Minimize2 className="w-5 h-5" />,
  },
] as const;

const STATE_DOCS = [
  {
    key: "Default",
    label: "Default",
    description: "Estado base. Borde neutral y texto secundario.",
    props: {
      currentState: "Default",
    },
  },

  {
    key: "Hover",
    label: "Hover",
    description: "Al pasar el cursor, se activa el resplandor primario sutil.",
    props: {
      currentState: "Hover",
    },
  },

  {
    key: "Active",
    label: "Focused / Active",
    description: "Estado abierto con la lista de opciones desplegada.",
    props: {
      currentState: "Active",
    },
  },

  {
    key: "Error",
    label: "Error",
    description: "Borde rojo y fondo suave. Incluye icono de alerta.",
    props: {
      currentState: "Error Filled",
      value: "1",
    },
  },

  {
    key: "Success",
    label: "Success",
    description: "Confirmación visual verde con icono de validación.",
    props: {
      currentState: "Success",
      value: "1",
    },
  },

  {
    key: "Disabled",
    label: "Disabled",
    description: "No interactuable. Fondo gris y cursor bloqueado.",
    props: {
      currentState: "Disabled",
    },
  },
] as const;

export function DropdownMatrix() {
  return (
    <div className="space-y-40 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Selection Systems
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-6xl font-bold tracking-tight text-neutral-900 italic">
            
            Dropdown
            <span className="text-primary-500 font-bold">
              Architecture
            </span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed">
            
            Explora la versatilidad de nuestro sistema de selección, diseñado
            para escalar con precisión desde micro-interacciones hasta
            formularios críticos.
          </p>
        </div>
      </div>
      {/* Quick Comparison Section */}
      <div className="space-y-10">
        
        <div className="flex items-start gap-3 border-l-4 border-primary-500 pl-6 py-2">
          
          <h3 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Comparativa de Tamaños
          </h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-end bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[48px] border border-neutral-200/50">
          
          {SIZES.map((size) => (
            <div
              key={`comp-${size.key}`}
              className="space-y-4"
            >
              
              <div className="flex justify-between items-start px-1">
                
                <span className="text-[10px] font-bold text-neutral-400 ">
                  {size.label}
                </span>
                <span className="text-[10px] font-bold text-primary-500 italic">
                  {size.height}
                </span>
              </div>
              <Dropdown
                sizeVariant={size.key}
                placeholder={`Selector ${size.label}...`}
                iconLeft={size.icon}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Detailed Sections Per Size */}
      <div className="space-y-48">
        
        {SIZES.map((size) => (
          <div
            key={`section-${size.key}`}
            className="space-y-16"
          >
            
            {/* Massive Header */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-b border-neutral-100 dark:border-neutral-300 pb-12">
              
              <div className="space-y-4">
                
                <div className="flex items-start gap-4">
                  
                  <div className="p-3 bg-primary-500 text-white rounded-2xl shadow-lg shadow-primary-500/20">
                    
                    {size.icon}
                  </div>
                  <h3 className="text-5xl font-bold text-neutral-900 dark:text-white tracking-tighter italic">
                    
                    {size.label}
                    <span className="text-neutral-300 dark:text-neutral-700">
                      /{size.height}
                    </span>
                  </h3>
                </div>
                <p className="text-neutral-500 text-lg max-w-2xl font-medium leading-relaxed">
                  
                  {size.description}
                </p>
              </div>
              <Badge className="bg-neutral-900 text-white border-none font-bold px-6 py-2 rounded-xl text-xs h-fit">
                
                variant-
                {size.key}
              </Badge>
            </div>
            {/* Matrix for this specific size */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              
              {STATE_DOCS.map((state) => (
                <div
                  key={`${size.key}-${state.key}`}
                  className="group bg-white dark:bg-neutral-100 border border-neutral-200 dark:border-neutral-300 p-8 rounded-[40px] transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col gap-10"
                >
                  
                  <div className="flex flex-col gap-3">
                    
                    <div className="flex items-start justify-between">
                      
                      <span className="text-[10px] font-bold text-primary-500 ">
                        {state.label}
                      </span>
                      <div className="flex gap-1.5">
                        
                        {state.key === "Error" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-error-500" />
                        )}
                        {state.key === "Success" && (
                          <div className="w-1.5 h-1.5 rounded-full bg-success-500" />
                        )}
                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-200 group-hover:bg-primary-300 transition-colors" />
                      </div>
                    </div>
                    <p className="text-[11px] text-neutral-400 font-medium leading-relaxed">
                      {state.description}
                    </p>
                  </div>
                  <div
                    className={
                      state.key === "Active" ? "min-h-[280px]" : "relative"
                    }
                  >
                    
                    <Dropdown
                      sizeVariant={size.key}
                      label={state.key === "Default" ? "Categoría" : undefined}
                      iconLeft={size.icon}
                      placeholder="Seleccionar..."
                      {...(state.props as any)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Cinemática",
            text: "Animación de entrada 'fade-scale' de 200ms. El menú utiliza un sistema de posicionamiento dinámico con prevención de colisiones con los bordes del viewport.",
          },

          {
            label: "Composición",
            text: "Bordes de 1.5px y radio de 16px (2xl). Los items incluyen soporte para iconos laterales, atajos de teclado y estados deshabilitados.",
          },
        ]}
        compositionText="Basado en Radix UI para asegurar accesibilidad completa (WAI-ARIA). Soporta agrupaciones con etiquetas de sección y separadores visuales para organizar flujos de acciones complejos."
      />
    </div>
  );
}





