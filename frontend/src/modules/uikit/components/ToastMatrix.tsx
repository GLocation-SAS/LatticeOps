"use client";

import { SpecFooter } from "./SpecFooter";
import React from "react";
import { useToast } from "@/context/ToastContext";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles } from "lucide-react";

export function ToastMatrix() {
  const { show } = useToast();

  const handleShowToast = (
    variant: "success" | "error" | "warning" | "info",
  ) => {
    const titles = {
      success: "¡Éxito!",
      error: "Error del sistema",
      warning: "Advertencia",
      info: "Información",
    };
    const descriptions = {
      success: "La operación se ha completado correctamente.",
      error: "No se ha podido procesar la solicitud en este momento.",
      warning: "Tu sesión expirará en breve por inactividad.",
      info: "Hay una nueva actualización disponible.",
    };
    show({
      title: titles[variant],
      description: descriptions[variant],
      variant,
      duration: 5000,
    });
  };
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Feedback Atoms
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Toast <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Sistema de notificaciones temporales flotantes gestionado mediante
            un hook global. Soporta múltiples estados semánticos, colas de
            mensajes y tiempos de vida dinámicos.
          </p>
          {/* Atomic Breakdown */}
          <div className="space-y-12">
            <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
              <div className="flex flex-col">
                <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                  Auditoría de <span className="text-primary-500">Estados</span>
                </h4>
                <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                  Desglose anatómico de los mensajes efímeros y su comportamiento temporal.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Feedback Cromático</span>
                <div className="w-10 h-10 rounded-full bg-primary-700 flex items-center justify-center text-white shadow-lg">
                  <Sparkles size={16} />
                </div>
                <p className="text-xs text-neutral-500 italic">Identificación instantánea mediante el color dominante de la marca o estado.</p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Sombras de Profundidad</span>
                <div className="h-10 w-full bg-white dark:bg-neutral-100 rounded-2xl border border-neutral-100 dark:border-neutral-300 shadow-[0_20px_50px_rgba(0,0,0,0.15)]" />
                <p className="text-xs text-neutral-500 italic">Uso de Elevation-5 para garantizar que el toast flote sobre cualquier elemento de la UI.</p>
              </div>
              <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 flex flex-col gap-6 group hover:bg-neutral-100/50 transition-all">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Tipografía</span>
                <div className="space-y-1">
                  <div className="h-2 w-24 bg-neutral-900 dark:bg-white rounded-full" />
                  <div className="h-2 w-32 bg-neutral-400 rounded-full" />
                </div>
                <p className="text-xs text-neutral-500 italic">Jerarquía clara entre el título (Bold) y el cuerpo (Medium) para lectura rápida.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-32">
        
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            
            <h4 className="text-2xl font-heading font-bold tracking-tight text-neutral-900">
              Interactividad
            </h4>
          </div>
          {/* Buttons Grid Container */}
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
              
              <Button
                onClick={() => handleShowToast("success")}
                variant="success"
                className="rounded-2xl h-14 font-bold text-xs"
              >
                
                Toast Success
              </Button>
              <Button
                onClick={() => handleShowToast("error")}
                variant="error"
                className="rounded-2xl h-14 font-bold text-xs"
              >
                
                Toast Error
              </Button>
              <Button
                onClick={() => handleShowToast("warning")}
                variant="warning"
                className="rounded-2xl h-14 font-bold text-xs"
              >
                
                Toast Warning
              </Button>
              <Button
                onClick={() => handleShowToast("info")}
                variant="info"
                className="rounded-2xl h-14 font-bold text-xs"
              >
                
                Toast Info
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            
            <h4 className="text-2xl font-heading font-bold tracking-tight text-neutral-900">
              Configuraciones Especiales
            </h4>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-4">
                
                <span className="text-[10px] font-bold text-neutral-400 block">
                  Sólo Título
                </span>
                <Button
                  onClick={() =>
                    show({
                      title: "Acción realizada con éxito",
                      duration: 3000,
                    })
                  }
                  variant="neutral"
                  className="w-full rounded-2xl h-14 font-bold text-xs"
                >
                  
                  Trigger Title-Only
                </Button>
              </div>
              <div className="space-y-4">
                
                <span className="text-[10px] font-bold text-neutral-400 block">
                  Larga Duración (10s)
                </span>
                <Button
                  onClick={() =>
                    show({
                      title: "Estado Persistente",
                      description:
                        "Este mensaje se mantendrá visible durante 10 segundos para mayor lectura.",
                      duration: 10000,
                    })
                  }
                  variant="neutral"
                  className="w-full rounded-2xl h-14 font-bold text-xs"
                >
                  
                  Trigger Persistent
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Motor de Estado",
            text: "Implementado mediante un Context Provider de React. Utiliza un array inyectable que gestiona la pila de notificaciones (stacking logic) automáticamente.",
          },

          {
            label: "Cinemática",
            text: "Animaciones de entrada lateral (slide-in) y salida suavizada de 400ms. Cada toast incluye un temporizador visual interno para el auto-close.",
          },
        ]}
        compositionText="Los toasts se renderizan en un portal dedicado al final del body para evitar problemas de overflow y z-index en layouts complejos. El diseño sigue el Pill System con bordes de 1.5px y sombras de profundidad media."
      />
    </div>
  );
}





