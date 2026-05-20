"use client";

import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { SpecFooter } from "./SpecFooter";
import { Trash2, Bot, Layout, Layers, Sparkles, Zap, Edit2, Link2, Info, AlertCircle } from "lucide-react";

export function CardMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Content Containers
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Card <span className="text-primary-500">Architecture</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Contenedores versátiles diseñados para agrupar información relacionada, proporcionando profundidad visual y claridad estructural.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        {/* Layout Orientations */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Orientaciones de <span className="text-primary-500">Layout</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Soporte nativo para disposiciones verticales y horizontales, optimizando la densidad de información.
              </p>
            </div>
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              {/* Vertical Card */}
              <div className="space-y-6">
                <span className="text-[10px] font-bold text-neutral-400 block border-b border-neutral-100 dark:border-neutral-300 pb-2">Vertical (Default)</span>
                <Card
                  title="Análisis Predictivo"
                  description="Utiliza modelos de ML avanzados para anticipar tendencias de mercado con precisión del 98%."
                  icon={
                    <div className="p-3 bg-primary-500/10 rounded-2xl text-primary-500">
                      <Zap size={24} />
                    </div>
                  }
                >
                  <Button variant="primary" size="sm" className="w-full">Generar Reporte</Button>
                </Card>
              </div>
              {/* Horizontal Card */}
              <div className="space-y-6 lg:col-span-2">
                <span className="text-[10px] font-bold text-neutral-400 block border-b border-neutral-100 dark:border-neutral-300 pb-2">Horizontal Layout</span>
                <Card
                  variant="horizontal"
                  title="Gestión de Infraestructura"
                  description="Supervisa y escala tus recursos de nube en tiempo real desde un único panel centralizado."
                  icon={
                    <div className="p-3 bg-success-500/10 rounded-2xl text-success-500">
                      <Layout size={24} />
                    </div>
                  }
                >
                  <div className="flex gap-3">
                    <Button variant="neutral" size="sm">Logs</Button>
                    <Button variant="primary" size="sm">Configurar</Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Action Card */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2 border-b border-neutral-100 dark:border-neutral-300 pb-4">
              <div className="flex items-start gap-2">
                <Sparkles size={18} className="text-primary-500" />
                <h5 className="text-sm font-heading font-bold text-neutral-900">Interactive Actions</h5>
              </div>
              <p className="text-xs text-neutral-400 font-sans font-medium">Soporte para acciones contextuales en la cabecera.</p>
            </div>
            <Card
              title="Módulo de Seguridad"
              description="Niveles de acceso y auditoría de logs para cumplimiento normativo internacional."
              action={
                <Button variant="ghost" size="sm" className="text-error-500 hover:bg-error-50 rounded-full w-10 h-10 p-0">
                  <Trash2 size={18} />
                </Button>
              }
            >
              <div className="flex gap-2">
                <Badge category="success" mode="soft">Activo</Badge>
                <Badge category="informative" mode="outline">v2.4.0</Badge>
              </div>
            </Card>
          </div>
          {/* Icon Centric */}
          <div className="space-y-8">
            <div className="flex flex-col gap-2 border-b border-neutral-100 dark:border-neutral-300 pb-4">
              <div className="flex items-start gap-2">
                <Layers size={18} className="text-success-500" />
                <h5 className="text-sm font-heading font-bold text-neutral-900">Center Aligned</h5>
              </div>
              <p className="text-xs text-neutral-400 font-sans font-medium">Layout centrado para tarjetas de información o onboarding.</p>
            </div>
            <Card
              className="text-left"
              title="Diseño Modular"
              description="Componentes atómicos que se ensamblan para crear experiencias complejas y escalables."
              icon={
                <div className="mx-auto w-16 h-16 bg-neutral-900 rounded-[20px] flex items-center justify-center text-primary-500 shadow-xl">
                  <Bot size={32} />
                </div>
              }
            >
              <Button variant="ghost" size="sm">Aprender más</Button>
            </Card>
          </div>
        </div>

        {/* Real-world Operational Examples */}
        <div className="space-y-12">
          <div className="flex items-start gap-4 border-l-4 border-warning-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Casos de Uso <span className="text-warning-500">Operativos</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Ejemplos de implementación para monitoreo crítico y gestión de infraestructura.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Latency Alert Card (Image 1) */}
            {/* Latency Alert Card (Image 1) */}
            <Card className="border-primary-500/10">
              <div className="flex justify-between items-start mb-6">
                <Badge category="default" mode="solid" size="md">
                  MAYOR
                </Badge>
                <span className="text-neutral-400 dark:text-neutral-500 text-[10px] font-mono">7:17:08</span>
              </div>
              
              <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-2 italic">Latencia Excesiva</h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans mb-8 leading-relaxed">
                Recurso: <span className="text-neutral-700 dark:text-neutral-200 font-bold">Cluster-BaseDatos-SQL</span> | Tiempos de respuesta de SQL exceden el umbral de 500ms.
              </p>
              
              <div className="space-y-3">
                <Button variant="primary" size="sm">
                  RECONOCER
                </Button>
                <Button variant="neutral" size="sm">
                  LIMPIAR
                </Button>
                <Button variant="secondary" size="sm">
                  AGREGAR NOTA
                </Button>
              </div>
            </Card>

            {/* Network Fiber Link Card (Image 2) */}
            <Card className="border-primary-500/10">
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-2">
                  <Button variant="primary" size="xs" className="w-9 h-9 p-0 rounded-xl">
                    <Edit2 size={14} />
                  </Button>
                  <Button variant="error" size="xs" className="w-9 h-9 p-0 rounded-xl">
                    <Trash2 size={14} />
                  </Button>
                </div>
                <Badge category="error" mode="outline" className="w-10 h-10 p-0 flex items-center justify-center rounded-xl animate-pulse border-error-500/30">
                  <AlertCircle size={18} />
                </Badge>
              </div>

              <div className="flex items-center gap-2 mb-2 text-primary-500 dark:text-primary-400">
                <Link2 size={14} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Link</span>
              </div>

              <h3 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-3 tracking-tight">Troncal-Fibra-Inter-DC</h3>
              
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2 h-2 rounded-full bg-success-500 shadow-[0_0_10px_rgba(var(--color-success-500-rgb),0.5)] animate-pulse" />
                <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 tracking-wider">AVAILABLE</span>
              </div>

              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-4">
                <Tag 
                  variant="error" 
                  size="S"
                  label="1 ALARMA(S) ACTIVA(S)"
                  iconLeft={<AlertCircle size={14} />}
                  className="w-full justify-start h-auto py-3 px-4 rounded-2xl"
                />
                
                <Tag 
                  variant="informative" 
                  size="S"
                  label="&quot;Pérdida de señal total detectada en el tramo Troncal Inter-Datacenter a 15.4km.&quot;"
                  iconRight={<Info size={14} />}
                  className="w-full justify-between h-auto py-4 px-4 rounded-2xl whitespace-normal text-left items-start"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Mecánica de Superficie",
            text: "Utiliza un sistema de elevación basado en sombras suaves (Elevation 1-5) para indicar profundidad sin usar bordes pesados.",
          },
          {
            label: "Interactividad",
            text: "Las tarjetas interactivas implementan un sutil escalado del 2% y un aumento en la densidad de la sombra al hacer hover.",
          },
        ]}
        compositionText="El Card System es la unidad base de contención del sistema. Soporta configuraciones con cabeceras personalizadas, pie de página y estados de carga integrados."
      />
    </div>
  );
}





