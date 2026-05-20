"use client";

import { SpecFooter } from "./SpecFooter";

import React from "react";

import { Input } from "@/components/ui/Input";

import { Badge } from "@/components/ui/Badge";

import { Mail, Lock, User, Search, Eye, Sparkles } from "lucide-react";

const SIZES = [
  {
    key: "lg",
    label: "Large",
    height: "56px",
    description:
      "Input prominente para páginas de aterrizaje o formularios de alta importancia.",
  },

  {
    key: "md",
    label: "Medium",
    height: "44px",
    description:
      "El estándar equilibrado para la mayoría de las interfaces administrativas.",
  },

  {
    key: "sm",
    label: "Small",
    height: "40px",
    description:
      "Compacto para barras laterales, filtros o espacios reducidos.",
  },
] as const;

const TYPES = [
  {
    id: "text",
    label: "Text Input",
    description: "Configuración estándar para entrada de datos alfanuméricos.",
    props: {
      label: "Nombre de Usuario",
      placeholder: "ej. paular15",
      iconLeft: <User size={18} />,
    },
  },

  {
    id: "password",
    label: "Password Input",
    description: "Incluye soporte para ocultar/mostrar caracteres sensibles.",
    props: {
      label: "Contraseña",
      type: "password",
      placeholder: "••••••••",
      iconLeft: <Lock size={18} />,
      iconRight: <Eye size={18} className="cursor-pointer" />,
    },
  },

  {
    id: "search",
    label: "Search Input",
    description: "Optimizado para búsquedas rápidas con iconos contextuales.",
    props: {
      placeholder: "Buscar en la plataforma...",
      iconLeft: <Search size={18} />,
    },
  },
] as const;

export function TextInputMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Form Controls
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Text <span className="text-primary-500">Inputs</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Sistema de entrada de datos con validación en tiempo real, soporte
            para iconos y retroalimentación de estado dinámica.
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
                  
                  Size:
                  <span className="text-primary-500">
                    {size.label}({size.height})
                  </span>
                </h4>
                <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                  
                  {size.description}
                </p>
              </div>
            </div>
            {/* Types Matrix */}
            <div className="grid grid-cols-1 gap-12">
              
              {TYPES.map((type) => (
                <div
                  key={`${size.key}-${type.id}`}
                  className="space-y-6"
                >
                  
                  <div className="flex flex-col gap-1">
                    
                    <h5 className="text-sm font-heading font-bold text-neutral-900 ">
                      
                      {type.label}
                    </h5>
                    <p className="text-xs text-neutral-400 font-sans font-medium">
                      
                      {type.description}
                    </p>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      
                      {/* Default/Hover State */}
                      <div className="bg-white dark:bg-neutral-100 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-6">
                        
                        <span className="text-[10px] font-bold text-neutral-400 block border-b border-neutral-50 dark:border-neutral-300 pb-2">
                          
                          Default & Hover
                        </span>
                        <Input sizeVariant={size.key} {...type.props} />
                      </div>
                      {/* Success State */}
                      <div className="bg-white dark:bg-neutral-100 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-6">
                        
                        <span className="text-[10px] font-bold text-neutral-400 block border-b border-neutral-50 dark:border-neutral-300 pb-2">
                          
                          Success State
                        </span>
                        <Input
                          sizeVariant={size.key}
                          {...type.props}
                          success
                          defaultValue="Datos válidos"
                        />
                      </div>
                      {/* Error State */}
                      <div className="bg-white dark:bg-neutral-100 p-8 rounded-[32px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-6">
                        
                        <span className="text-[10px] font-bold text-neutral-400 block border-b border-neutral-50 dark:border-neutral-300 pb-2">
                          
                          Error State
                        </span>
                        <Input
                          sizeVariant={size.key}
                          {...type.props}
                          error="Este campo es obligatorio"
                          defaultValue="Contenido erróneo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                Desglose de los puntos de interacción y validación en tiempo real.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Foco de Acento</span>
              <div className="h-10 w-full rounded-2xl border-2 border-primary-700 bg-primary-700/5" />
              <p className="text-xs text-neutral-500 italic">Borde de 2px y fondo sutil para indicar un estado de edición activo.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Validación de Error</span>
              <div className="h-10 w-full rounded-2xl border-2 border-error-500 bg-error-500/5" />
              <p className="text-xs text-neutral-500 italic">Feedback instantáneo mediante el canal cromático rojo de alta visibilidad.</p>
            </div>
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Iconografía Reactiva</span>
              <div className="p-3 bg-white dark:bg-neutral-100 rounded-xl shadow-sm text-neutral-400 w-fit group-focus-within:text-primary-700 transition-colors">
                <Search size={16} />
              </div>
              <p className="text-xs text-neutral-500 italic">Los iconos cambian de color para reflejar el estado de interacción del campo.</p>
            </div>
          </div>
        </div>
      </div>
      <SpecFooter
        specs={[
          {
            label: "Interacción de Borde",
            text: "Implementa una animación de borde progresiva y un efecto de resplandor (glow) sutil sincronizado con el foco del usuario.",
          },

          {
            label: "Validación",
            text: "Soporte integrado para mensajes de error y estados de éxito con iconos semánticos automáticos para una UX consistente.",
          },
        ]}
        compositionText="Utiliza una estructura de tokens CSS para colores de fondo y bordes, permitiendo una transición perfecta entre modos claro y oscuro. El espaciado interno (padding) se escala proporcionalmente según el tamaño seleccionado."
      />
    </div>
  );
}





