"use client";

import { SpecFooter } from "./SpecFooter";

import React from "react";

import { Tooltip } from "@/components/ui/Tooltip";

import { Button } from "@/components/ui/Button";

import { Badge } from "@/components/ui/Badge";

import {
  Info,
  Save,
  Trash2,
  Edit,
  HelpCircle,
  Navigation,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export function TooltipMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Contextual Atoms
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Tooltip <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Componente de micro-información contextual que emerge ante la
            interacción del usuario, proporcionando claridad sin sobrecargar la
            interfaz.
          </p>
        </div>
      </div>
      <div className="space-y-32">
        
        {/* Placements Section */}
        <div className="space-y-12">
          
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            
            <div className="flex flex-col">
              
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                
                Puntos de <span className="text-primary-500">Anclaje</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                
                Soporte para múltiples orientaciones espaciales, adaptándose
                dinámicamente al viewport.
              </p>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            
            <div className="flex flex-wrap gap-12 items-start justify-start py-20">
              
              <Tooltip
                content="Información en la parte superior"
                position="top"
              >
                
                <Button variant="primary">
                  <Navigation size={18} className="-rotate-90" />
                  Arriba
                </Button>
              </Tooltip>
              <Tooltip content="Detalle emergente inferior" position="bottom">
                
                <Button variant="primary">
                  <Navigation size={18} className="rotate-90" />
                  Abajo
                </Button>
              </Tooltip>
              <Tooltip content="Contexto lateral izquierdo" position="left">
                
                <Button variant="primary">
                  <Navigation size={18} className="rotate-180" />
                  Izquierda
                </Button>
              </Tooltip>
              <Tooltip content="Ayuda lateral derecha" position="right">
                
                <Button variant="primary">
                  <Navigation size={18} />
                  Derecha
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
        {/* Use Cases Grid */}
        <div className="space-y-12">
          
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            
            <div className="flex flex-col">
              
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                
                Casos de
                <span className="text-primary-500">Uso Reales</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                
                Integración en barras de herramientas, botones de acción rápida
                y ayudas contextuales.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Toolbar Actions */}
            <div className="bg-white dark:bg-neutral-100 p-10 rounded-[40px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-8">
              
              <div className="flex flex-col gap-2 border-b border-neutral-50 dark:border-neutral-300 pb-4">
                
                <div className="flex items-start gap-2">
                  
                  <Sparkles size={18} className="text-primary-500" />
                  <h5 className="text-sm font-heading font-bold text-neutral-900 ">
                    Toolbars
                  </h5>
                </div>
                <p className="text-xs text-neutral-400 font-sans font-medium">
                  Iconos con etiquetas descriptivas para ahorro de espacio.
                </p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                
                <Tooltip content="Guardar cambios actuales" position="top">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-neutral-50 dark:bg-neutral-100/50 hover:bg-success-50 dark:hover:bg-success-900/20"
                  >
                    <Save className="w-5 h-5 text-success-500" />
                  </Button>
                </Tooltip>
                <Tooltip content="Editar perfil de usuario" position="top">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-neutral-50 dark:bg-neutral-100/50 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                  >
                    <Edit className="w-5 h-5 text-primary-500" />
                  </Button>
                </Tooltip>
                <Tooltip content="Eliminar registro" position="top">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-neutral-50 dark:bg-neutral-100/50 hover:bg-error-50 dark:hover:bg-error-900/20"
                  >
                    <Trash2 className="w-5 h-5 text-error-500" />
                  </Button>
                </Tooltip>
              </div>
            </div>
            {/* Contextual Help */}
            <div className="bg-white dark:bg-neutral-100 p-10 rounded-[40px] border border-neutral-100 dark:border-neutral-300 shadow-sm space-y-8">
              
              <div className="flex flex-col gap-2 border-b border-neutral-50 dark:border-neutral-300 pb-4">
                
                <div className="flex items-start gap-2">
                  
                  <HelpCircle size={18} className="text-success-500" />
                  <h5 className="text-sm font-heading font-bold text-neutral-900 ">
                    Help Indicators
                  </h5>
                </div>
                <p className="text-xs text-neutral-400 font-sans font-medium">
                  Explicaciones técnicas para términos complejos.
                </p>
              </div>
              <div className="flex flex-col gap-6 items-start">
                
                <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-100/50 p-4 rounded-2xl w-full border border-neutral-100 dark:border-neutral-300/30">
                  <span className="text-sm font-sans font-bold text-neutral-700 dark:text-white">
                    Tasa de Conversión
                  </span>
                  <Tooltip
                    content="Calculado como (Sesiones / Acciones) * 100 en las últimas 24h."
                    position="right"
                  >
                    <HelpCircle
                      size={16}
                      className="text-neutral-400 cursor-help hover:text-primary-500 transition-colors"
                    />
                  </Tooltip>
                </div>
                <div className="flex items-start gap-3 bg-neutral-50 dark:bg-neutral-100/50 p-4 rounded-2xl w-full border border-neutral-100 dark:border-neutral-300/30">
                  <span className="text-sm font-sans font-bold text-neutral-700 dark:text-white">
                    Notificaciones de Chat
                  </span>
                  <Tooltip
                    content="Tienes 3 mensajes nuevos sin leer."
                    position="right"
                  >
                    <div className="relative">
                      <MessageCircle
                        size={16}
                        className="text-neutral-400 cursor-pointer"
                      />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-error-500 rounded-full animate-pulse" />
                    </div>
                  </Tooltip>
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
            label: "Cinemática",
            text: "Animaciones de entrada 'fade-scale' de 200ms (ease-out). El tooltip incluye una sombra de profundidad elevada para asegurar el contraste sobre otros elementos.",
          },

          {
            label: "Posicionamiento",
            text: "Utiliza un sistema de anclaje relativo (absolute) con compensación de offset de 8px para evitar la superposición visual con el trigger.",
          },
        ]}
        compositionText="El sistema utiliza un degradado de marca (Primary 400-600) con efecto de desenfoque de fondo (backdrop-blur-xl) y un radio de curvatura de 18px para suavizar la estética. La sombra incluye un tono cian primario para simular un resplandor luminoso sobre la interfaz."
      />
    </div>
  );
}





