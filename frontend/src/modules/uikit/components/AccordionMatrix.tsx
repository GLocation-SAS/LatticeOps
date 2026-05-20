"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";
import { HelpCircle, Shield, Zap } from "lucide-react";

export function AccordionMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Disclosure Components
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Accordion <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Conjunto de encabezados interactivos apilados verticalmente para la gestión de contenido jerárquico y ahorro de espacio visual.
          </p>
        </div>
      </div>

      <div className="space-y-32">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
            <div className="flex flex-col">
              <h4 className="text-3xl font-heading font-bold tracking-tight text-neutral-900">
                Uso <span className="text-primary-500">Estándar</span>
              </h4>
              <p className="text-lg font-sans font-medium text-neutral-500 mt-1 max-w-2xl">
                Implementación clásica para Preguntas Frecuentes (FAQ) o detalles técnicos secundarios.
              </p>
            </div>
          </div>
          {/* Showcase Container */}
          <div className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[56px] border border-neutral-100 dark:border-neutral-300 transition-all hover:bg-neutral-100/50">
            <div className="max-w-4xl mx-auto bg-white dark:bg-neutral-100 p-8 rounded-[40px] border border-neutral-100 dark:border-neutral-300 shadow-sm">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-neutral-50 dark:border-neutral-300 py-2">
                  <AccordionTrigger className="text-lg font-heading font-bold text-neutral-900 tracking-tight hover:text-primary-500 transition-colors">
                    <div className="flex items-start gap-3">
                      <HelpCircle size={20} className="text-primary-500" /> ¿Es accesible el sistema?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 font-sans font-medium leading-relaxed pb-6 pl-8">
                    Sí. Cumple con el patrón de diseño WAI-ARIA, garantizando que sea usable por todos mediante navegación por teclado y lectores de pantalla.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-b border-neutral-50 dark:border-neutral-300 py-2">
                  <AccordionTrigger className="text-lg font-heading font-bold text-neutral-900 tracking-tight hover:text-primary-500 transition-colors">
                    <div className="flex items-start gap-3">
                      <Shield size={20} className="text-success-500" /> ¿Incluye validación de seguridad?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 font-sans font-medium leading-relaxed pb-6 pl-8">
                    Absolutamente. Cada componente disclosure ha sido auditado para prevenir inyecciones de contenido y asegurar que el estado visual refleje fielmente el estado lógico.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-none py-2">
                  <AccordionTrigger className="text-lg font-heading font-bold text-neutral-900 tracking-tight hover:text-primary-500 transition-colors">
                    <div className="flex items-start gap-3">
                      <Zap size={20} className="text-warning-500" /> ¿Está optimizado para performance?
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-neutral-500 font-sans font-medium leading-relaxed pb-6 pl-8">
                    Sí. Utiliza micro-animaciones fluidas mediante CSS transitions altamente optimizadas, evitando el repintado innecesario del DOM durante la expansión.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <SpecFooter
        specs={[
          {
            label: "Mecánica de Apertura",
            text: "Utiliza animaciones de interpolación de altura (CSS grid-template-rows) para asegurar un despliegue fluido a 60fps sin saltos visuales.",
          },
          {
            label: "Jerarquía de Contenido",
            text: "Separación clara entre cabecera (Trigger) y cuerpo (Content) mediante el uso de pesos tipográficos y espaciado neumático.",
          },
        ]}
        compositionText="El sistema de acordeones es modular, permitiendo la inclusión de cualquier componente dentro del panel de contenido. El chevron de estado rota 180° con una transición de 300ms para indicar visualmente el estado del panel."
      />
    </div>
  );
}





