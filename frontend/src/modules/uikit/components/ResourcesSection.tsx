"use client";

import React from "react";

import { Download } from "lucide-react";

import { Button } from "@/components/ui/Button";

import { publicUrl } from "@/lib/utils";

export function ResourcesSection() {


  const logos = [
    {
      id: "logo-h",
      title: "Logo Horizontal",
      format: "PNG",
      src: "/logos/Logo Horizontal.png",
    },
    {
      id: "logo-h-alt",
      title: "Logo Horizontal Alternativo",
      format: "PNG",
      src: "/logos/Logotipo Horizontal alternativo.png",
    },
    {
      id: "logo-h-dark",
      title: "Logo Horizontal Oscuro",
      format: "PNG",
      src: "/logos/Logotipo Horizontal oscuro.png",
    },
    {
      id: "logo-v",
      title: "Logotipo Vertical",
      format: "PNG",
      src: "/logos/Logotipo Vertical.png",
    },
    {
      id: "logo-v-dark",
      title: "Logotipo Vertical Oscuro",
      format: "PNG",
      src: "/logos/Logotipo vertical oscuro.png",
    },
    {
      id: "icon-std",
      title: "Icono Estándar",
      format: "PNG",
      src: "/logos/Icon.png",
    },
    {
      id: "icon-alt",
      title: "Icono Alternativo",
      format: "PNG",
      src: "/logos/Icon alternativo.png",
    },
    {
      id: "icon-dark",
      title: "Icono Oscuro",
      format: "PNG",
      src: "/logos/Icon oscuro.png",
    },
  ];

  return (
    <section id="resources" className="space-y-24 mt-20">
      <div className="space-y-6">
        <h2 className="text-5xl font-heading font-bold tracking-tighter text-neutral-900 dark:text-white italic">
          Media <span className="text-primary-500">Resources</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 max-w-2xl text-xl leading-relaxed font-sans">
          Colección oficial de activos visuales y recursos multimedia para la plataforma LatticeOps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


        {/* Logos Grid */}
        {logos.map((logo) => (
          <div
            key={logo.id}
            className="group relative bg-white dark:bg-neutral-100/10 border border-white/10 dark:border-white/5 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-video bg-neutral-50 dark:bg-neutral-100 relative flex items-center justify-center p-12">
              <img
                src={publicUrl(logo.src)}
                alt={logo.title}
                className="max-h-[80%] object-contain group-hover:scale-110 transition-transform duration-700 filter dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </div>
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-heading font-bold text-neutral-900 dark:text-white leading-tight">
                  {logo.title}
                </h4>
                <p className="text-xs font-sans font-medium text-neutral-500 dark:text-neutral-400 italic">
                  Recurso oficial optimizado para {logo.title.toLowerCase().includes("oscuro") ? "fondos claros" : "interfaces generales"}.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-neutral-100 dark:border-neutral-300">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  {logo.format}
                </span>
                <a
                  href={publicUrl(logo.src)}
                  download={logo.src.split("/").pop()}
                >
                  <Button variant="outline" size="sm" className="gap-2 rounded-xl">
                    <Download className="w-4 h-4" /> Download
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





