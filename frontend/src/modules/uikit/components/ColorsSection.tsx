"use client";

import React, { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useTheme } from "@/context/ThemeContext";
// Each palette shows 5 representative shades from light to dark
const ALL_SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;

const PALETTE_CATEGORIES = [
  {
    key: "primary",
    name: "Primary",
    description:
      "Colores que definen la apariencia principal del diseño. Se aplican en elementos clave como botones de acción, encabezados y enlaces.",
  },

  {
    key: "secondary",
    name: "Secondary",
    description:
      "Complementan a los primarios y se usan en sub-elementos como iconos, indicadores activos y detalles de apoyo.",
  },

  {
    key: "neutral",
    name: "Neutros (Negros y Grises)",
    description:
      "Tonos de gris y negro para fondos, textos y divisores. La base estructural del sistema de interfaz.",
  },

  {
    key: "success",
    name: "Éxito",
    description:
      "Comunica estados positivos, confirmaciones, validaciones y acciones completadas correctamente.",
  },

  {
    key: "error",
    name: "Error",
    description:
      "Señala advertencias críticas, validaciones fallidas y estados de atención inmediata.",
  },

  {
    key: "warning",
    name: "Warning",
    description:
      "Indica estados de precaución o alertas que requieren atención del usuario sin ser críticos.",
  },

  {
    key: "info",
    name: "Info",
    description:
      "Se usa para mensajes informativos, notificaciones neutras y estados de referencia.",
  },
] as const;

function resolveColor(token: string): string {
  if (typeof window === "undefined") return "";

  const style = getComputedStyle(document.documentElement);
  const value = style.getPropertyValue(`--color-${token}`).trim();

  if (value.startsWith("rgb")) {
    const match = value.match(/\d+/g);

    if (match && match.length >= 3) {
      const r = parseInt(match[0]);
      const g = parseInt(match[1]);
      const b = parseInt(match[2]);
      return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
    }
  }
  return value.toUpperCase();
}

function Swatch({
  token,
  shade,
  large = false,
}: {
  token: string;
  shade: number | string;
  large?: boolean;
}) {
  const { theme } = useTheme();
  const [hex, setHex] = useState("");
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const update = () => setHex(resolveColor(token));
    update();
    const obs = new MutationObserver(() => setTimeout(update, 0));
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, [token, theme]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(hex || `var(--color-${token})`)
      .then(() => {
        setCopied(true);
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setCopied(false), 1600);
      });
  };

  return (
    <div
      className="group flex flex-col gap-2 cursor-pointer"
      onClick={handleCopy}
    >
      <div
        className={cn(
          "relative w-full rounded-2xl border border-white/10 dark:border-white/5 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg overflow-hidden",
          large ? "h-24" : "h-16",
        )}
        style={{
          backgroundColor: `var(--color-${token})`,
        }}
      >
        {copied && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <span className="text-white text-[9px] font-bold ">✓ Copiado</span>
          </div>
        )}
      </div>
      <div className="space-y-0.5 px-0.5">
        <span className="block text-[10px] font-bold text-neutral-500 ">
          {shade}
        </span>
        <span className="block text-[10px] font-mono text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors truncate">
          {hex || `--color-${token}`}
        </span>
      </div>
    </div>
  );
}

export function ColorsSection() {
  return (
    <section id="colors" className="space-y-20 pb-8">
      {/* Section Header */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <div className="h-8 w-1 bg-primary-500 rounded-full" />
          <h2 className="text-4xl font-bold tracking-tighter text-neutral-900 dark:text-white ">
            Color System
          </h2>
        </div>
        <p className="text-lg text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed max-w-2xl">
          Dividimos la paleta del sistema en <b>6 categorías semánticas</b>.
          Cada escala va de 50 a 900. Haz click en cualquier muestra para copiar
          su valor hexadecimal.
        </p>
      </div>

      {/* Main Color Rows */}
      <div className="space-y-16">
        {PALETTE_CATEGORIES.map((palette, idx) => (
          <div
            key={`${palette.key}-${idx}`}
            id={`color-${palette.key}`}
            className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 items-start scroll-mt-32"
          >
            {/* Left: Category info */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-2">
                <div
                  className="h-4 w-4 rounded-full border border-white/10 dark:border-white/5 shadow-sm flex-shrink-0"
                  style={{
                    backgroundColor: `var(--color-${palette.key}-500)`,
                  }}
                />
                <h3 className="text-base font-bold text-neutral-900 dark:text-white tracking-tight">
                  {palette.name}
                </h3>
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                {palette.description}
              </p>
              {/* Mini gradient bar: all 10 shades */}
              <div className="flex items-start gap-1">
                {ALL_SHADES.map((shade) => (
                  <div
                    key={shade}
                    className="h-2 flex-1 rounded-full"
                    style={{
                      backgroundColor: `var(--color-${palette.key}-${shade})`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right: Full 10-swatch row (50 → 900) */}
            <div className="bg-neutral-50 dark:bg-neutral-100/50 p-8 rounded-[32px] border border-neutral-200 dark:border-neutral-300">
              <div className="grid grid-cols-5 lg:grid-cols-10 gap-3">
                {ALL_SHADES.map((shade) => (
                  <Swatch
                    key={shade}
                    token={`${palette.key}-${shade}`}
                    shade={shade}
                    large={false}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





