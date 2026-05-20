"use client";

import React from "react";
import { Avatar, AvatarGroup } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { SpecFooter } from "./SpecFooter";
import { User, ChevronDown, Star } from "lucide-react";

export function AvatarMatrix() {
  const demoImages = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  ];

  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      {/* Header Section */}
      <div className="space-y-6">
        <div className="flex items-start gap-3">
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            Data Display
          </Badge>
        </div>
        <div className="space-y-2">
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            Avatar <span className="text-primary-500">System</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            Representación visual de usuarios y entidades con soporte para estados de presencia, insignias de verificación y agrupamiento dinámico.
          </p>
        </div>
      </div>

      {/* Grid of Variants */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Core Types */}
        <section className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 space-y-8">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Base Types</span>
          <div className="flex flex-wrap gap-8 items-center">
            <div className="flex flex-col items-center gap-3">
              <Avatar name="Diego Botton" />
              <span className="text-[9px] font-bold text-neutral-400">Name</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar icon={<User size={18} />} />
              <span className="text-[9px] font-bold text-neutral-400">Icon</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Avatar src={demoImages[0]} />
              <span className="text-[9px] font-bold text-neutral-400">Image</span>
            </div>
          </div>
        </section>

        {/* Shapes & States */}
        <section className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 space-y-8">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Shapes & Presence</span>
          <div className="flex flex-wrap gap-8 items-center">
            <Avatar variant="squared" src={demoImages[1]} />
            <Avatar status="online" src={demoImages[1]} />
            <Avatar status="offline" src={demoImages[1]} />
          </div>
        </section>

        {/* Indicators */}
        <section className="bg-neutral-50 dark:bg-neutral-100/50 p-10 rounded-[48px] border border-neutral-100 dark:border-neutral-300 space-y-8">
          <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Feedback & Badges</span>
          <div className="flex flex-wrap gap-8 items-center">
            <Avatar isLoading src={demoImages[2]} />
            <Avatar isVerified src={demoImages[2]} />
            <Avatar notification={9} src={demoImages[2]} />
          </div>
        </section>
      </div>

      {/* Complex Compositions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Labels & Menus */}
        <section className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[48px] border border-neutral-100 dark:border-neutral-300 space-y-12">
          <div className="flex items-center gap-4">
            <Avatar src={demoImages[0]} />
            <span className="text-sm font-bold text-neutral-900">hello@latticeops.com</span>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-neutral-100 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-300 w-fit shadow-sm">
            <ChevronDown size={16} className="text-neutral-400" />
            <div className="text-right">
              <p className="text-sm font-bold text-neutral-900 leading-none">Maya Skelter</p>
              <p className="text-[10px] text-primary-500 font-medium">@skelt_er</p>
            </div>
            <Avatar src={demoImages[3]} size="md" />
          </div>
        </section>

        {/* Groups */}
        <section className="bg-neutral-50 dark:bg-neutral-100/50 p-12 rounded-[48px] border border-neutral-100 dark:border-neutral-300 space-y-12">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Avatar Group</span>
            <AvatarGroup max={4}>
              <Avatar src={demoImages[0]} />
              <Avatar src={demoImages[1]} />
              <Avatar src={demoImages[2]} />
              <Avatar src={demoImages[3]} />
              <Avatar name="Extra" />
              <Avatar name="Extra" />
            </AvatarGroup>
          </div>

          <div className="flex items-center gap-4 bg-white dark:bg-neutral-100 p-4 rounded-full border border-neutral-100 dark:border-neutral-300 w-fit shadow-sm px-6">
            <AvatarGroup max={3}>
              <Avatar src={demoImages[0]} />
              <Avatar src={demoImages[1]} />
              <Avatar src={demoImages[2]} />
            </AvatarGroup>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="text-xs font-bold text-neutral-900">Rated 5</span>
              <Star size={12} className="fill-orange-400 text-orange-400" />
              <span className="text-xs text-neutral-500 font-medium">by 10K customers</span>
            </div>
          </div>
        </section>
      </div>

      <SpecFooter
        specs={[
          { label: "Anillos de Carga", text: "Efecto de rotación mediante border-top-transparent y keyframe animation en 2s." },
          { label: "Jerarquía de Grupo", text: "Uso de -space-x-3 para el apilamiento y ring-2 para la separación visual nítida." },
        ]}
        compositionText="El Avatar System utiliza Primary-700 para los fallbacks de iniciales e iconos, asegurando que los usuarios sin foto mantengan una identidad visual fuerte y alineada con la marca."
      />
    </div>
  );
}





