"use client";

import React, { useState } from "react";
import { 
  History, 
  AlertCircle, 
  AlertTriangle, 
  CheckCircle2, 
  Database, 
  Search, 
  Filter, 
  Maximize2, 
  Minimize2, 
  RefreshCcw, 
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  Layers,
  Network,
  Share2,
  Download,
  MoreVertical,
  Activity,
  Zap,
  Info,
  HardDrive,
  Router,
  Wifi,
  Plus,
  Minus,
  Lock,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Input } from "@/components/ui/Input";
import { Dropdown } from "@/components/ui/Dropdown";
import { Tabs } from "@/components/ui/Tabs";
import { Header } from "@/components/layout/Header";

interface TimelineEvent {
  id: string;
  time: string;
  date: string;
  title: string;
  description: string;
  severity: "critical" | "major" | "minor" | "success";
  type: string;
  selected?: boolean;
}

const timelineData: TimelineEvent[] = [
  {
    id: "1",
    time: "02:14 p. m.",
    date: "5 mayo 2026",
    title: "Acceso No Autorizado",
    description: "Intento de acceso no autorizado detectado en el segmento SQL-Cluster.",
    severity: "minor",
    type: "Security"
  },
  {
    id: "2",
    time: "02:12 p. m.",
    date: "5 mayo 2026",
    title: "Temperatura Elevada",
    description: "Alerta de umbral térmico superado en rack-servidores-core.",
    severity: "major",
    type: "System"
  },
  {
    id: "3",
    time: "02:10 p. m.",
    date: "5 mayo 2026",
    title: "Falla de Módulo de Control",
    description: "Falla crítica en módulo de control de redundancia física.",
    severity: "critical",
    type: "System",
    selected: true
  },
  {
    id: "4",
    time: "02:08 p. m.",
    date: "5 mayo 2026",
    title: "Corte de Fibra Óptica",
    description: "Corte total detectado en tramo fibra troncal-A1.",
    severity: "critical",
    type: "Network"
  },
  {
    id: "5",
    time: "02:06 p. m.",
    date: "5 mayo 2026",
    title: "Latencia Excesiva",
    description: "Latencia superior al umbral de degradación operativa.",
    severity: "major",
    type: "Performance"
  }
];

export default function TimeMachinePage() {
  const [view, setView] = useState<"graph" | "table">("graph");
  const [granularity, setGranularity] = useState<"month" | "day" | "hour" | "min">("hour");
  const [selectedEvent, setSelectedEvent] = useState(timelineData[2]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#02060f] text-neutral-900 dark:text-neutral-100 font-sans overflow-hidden">
      <Header />
      
      <main className="flex-1 w-full max-w-[1700px] mx-auto p-6 lg:px-12 flex flex-col gap-6 overflow-hidden">
        

        {/* REORGANIZED PROFESSIONAL TOOLBAR */}
        <div className="flex flex-wrap lg:flex-nowrap items-center gap-4 w-full bg-white/[0.03] border border-white/5 backdrop-blur-2xl p-2 rounded-2xl shadow-2xl">
          
          {/* 1. Official Search Input */}
          <div className="w-full lg:w-[320px] shrink-0">
            <Input 
              placeholder="Buscar recurso por nombre o tipo..."
              iconLeft={<Search className="w-4 h-4" />}
              sizeVariant="xs"
              className="dark:bg-black/40 border-white/5 focus-within:border-primary-500/50"
            />
          </div>

          <div className="hidden lg:block h-8 w-px bg-white/10" />

          {/* 2. Semantic Dropdowns Group */}
          <div className="flex items-center gap-2 flex-1 min-w-0 overflow-x-auto custom-scrollbar pb-1 lg:pb-0">
            <Dropdown 
              placeholder="Tipo de Recurso"
              sizeVariant="xs"
              className="w-40 shrink-0 dark:bg-black/40 border-white/5"
              options={[
                { label: "Router", value: "router" },
                { label: "Switch", value: "switch" },
                { label: "Servidor", value: "server" },
                { label: "Enlace", value: "link" },
              ]}
            />
            <Dropdown 
              placeholder="Estado"
              sizeVariant="xs"
              className="w-40 shrink-0 dark:bg-black/40 border-white/5"
              options={[
                { label: "Operativo", value: "up" },
                { label: "Caído", value: "down" },
                { label: "Alerta", value: "alert" },
              ]}
            />
            <Dropdown 
              placeholder="Zona / Grupo"
              sizeVariant="xs"
              className="w-40 shrink-0 dark:bg-black/40 border-white/5"
              options={[
                { label: "Zona Norte", value: "north" },
                { label: "Zona Sur", value: "south" },
                { label: "Core DC", value: "core" },
              ]}
            />
          </div>

          <div className="hidden xl:block h-8 w-px bg-white/10" />

          {/* 3. Time Granularity Tabs */}
          <div className="shrink-0 scale-75 xl:scale-90 origin-right">
            <Tabs 
              activeTab={granularity}
              onTabChange={(id) => setGranularity(id as any)}
              className="bg-black/40 border-white/5 p-1"
              tabs={[
                { id: "min", label: "Minuto" },
                { id: "hour", label: "Hora" },
                { id: "day", label: "Día" },
                { id: "month", label: "Mes" },
                { id: "year", label: "Año" },
              ]}
            />
          </div>

          <div className="hidden lg:block h-8 w-px bg-white/10" />

          {/* 4. Actions & Views */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex p-1 bg-black/40 rounded-xl border border-white/5 gap-1">
              <button onClick={() => setView("graph")} className={cn("w-8 h-8 flex items-center justify-center rounded-lg transition-all", view === "graph" ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20" : "text-neutral-500 hover:text-white")}>
                <Network className="w-4 h-4" />
              </button>
              <button onClick={() => setView("table")} className={cn("w-8 h-8 flex items-center justify-center rounded-lg transition-all", view === "table" ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20" : "text-neutral-500 hover:text-white")}>
                <Layers className="w-4 h-4" />
              </button>
            </div>

            <div className="relative group">
              <Button variant="primary" size="xs" className="h-9 px-4 rounded-xl font-bold uppercase tracking-widest shadow-lg shadow-primary-500/20 gap-2">
                <Filter className="w-3.5 h-3.5" />
                Auditoría
              </Button>
              <div className="absolute -top-1.5 -right-1.5 w-4.5 h-4.5 rounded-full bg-error-500 border-2 border-[#02060f] flex items-center justify-center text-[9px] font-black text-white shadow-xl animate-pulse">
                2
              </div>
            </div>
          </div>
        </div>

        {/* MAIN WORKSPACE GRID */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 min-h-0 pb-6">
          
          {/* CENTRAL GRAPH AREA */}
          <div className="relative flex flex-col h-full min-h-0 bg-neutral-50/50 dark:bg-black/40 border border-neutral-200 dark:border-white/5 rounded-[32px] overflow-hidden shadow-inner group">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Graph Header */}
            <div className="p-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold italic tracking-tight">Grafo de impacto de la red</h3>
                <Tag variant="informative" size="XS" label="Snapshot seleccionado" className="bg-primary-500/10 text-primary-500" />
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="xs" className="w-8 h-8 bg-white/5 border border-white/10"><RefreshCcw className="w-3.5 h-3.5" /></Button>
                <Button variant="ghost" size="xs" className="w-8 h-8 bg-white/5 border border-white/10"><Maximize2 className="w-3.5 h-3.5" /></Button>
              </div>
            </div>

            {/* MOCK GRAPH CANVAS */}
            <div className="flex-1 relative flex items-center justify-center">
              {/* SVG Mock Graph */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="20%" y1="50%" x2="40%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-primary-500/30" />
                <line x1="40%" y1="50%" x2="60%" y2="35%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-error-500/50" />
                <line x1="40%" y1="50%" x2="60%" y2="50%" stroke="currentColor" strokeWidth="1" className="text-success-500/30" />
                <line x1="60%" y1="50%" x2="80%" y2="65%" stroke="currentColor" strokeWidth="1" className="text-warning-500/30" />
              </svg>

              <div className="relative z-10 w-full h-full p-20 flex flex-wrap items-center justify-center gap-x-32 gap-y-24">
                 <NodeItem icon={<HardDrive className="w-4 h-4" />} label="Core-Router-Respaldo" status="stable" />
                 <NodeItem icon={<Router className="w-4 h-4" />} label="Core-Router-Principal" status="stable" active />
                 <NodeItem icon={<Wifi className="w-4 h-4" />} label="Tramo-Fibra-Inter-DC" status="critical" count={3} />
                 <NodeItem icon={<Network className="w-4 h-4" />} label="Switch-Distribucion-A1" status="major" count={2} />
                 <NodeItem icon={<Database className="w-4 h-4" />} label="Cluster-BaseDatos-SQL" status="minor" count={1} />
              </div>
            </div>

            {/* Graph Controls Overlay */}
            <div className="absolute left-6 bottom-6 flex flex-col gap-2 z-20">
               {["fit", "plus", "minus", "expand", "lock"].map((c) => (
                 <Button key={c} variant="ghost" size="xs" className="w-10 h-10 bg-white/5 border border-white/10 backdrop-blur-md rounded-xl hover:bg-primary-500/20 group">
                    {c === "fit" ? <Maximize2 className="w-4 h-4" /> : c === "plus" ? <Plus className="w-4 h-4" /> : c === "minus" ? <Minus className="w-4 h-4" /> : c === "expand" ? <RefreshCcw className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                 </Button>
               ))}
            </div>

            {/* Legend Area */}
            <Card className="absolute right-6 bottom-6 p-4 bg-black/60 border-white/10 backdrop-blur-xl z-20 w-56">
               <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest block mb-4">Leyenda</span>
               <div className="space-y-3">
                 <LegendItem color="bg-primary-500" label="Recurso operativo" />
                 <LegendItem color="bg-success-500" label="Recurso saludable" />
                 <LegendItem color="bg-warning-500" label="Recurso con degradación" />
                 <LegendItem color="bg-error-500" label="Recurso caído / crítico" />
                 <div className="h-px bg-white/5 my-2" />
                 <LegendItem type="line" color="bg-primary-500/30" label="Conexión normal" />
                 <LegendItem type="line" color="bg-warning-500/50" label="Conexión degradada" />
                 <LegendItem type="line" color="bg-error-500/50" dash label="Conexión caída" />
               </div>
            </Card>

            {/* Mini Map */}
            <div className="absolute right-6 bottom-60 w-32 h-20 bg-black/40 border border-white/5 rounded-xl backdrop-blur-sm z-10 flex items-center justify-center">
               <div className="w-16 h-8 bg-primary-500/10 rounded-sm border border-primary-500/20 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-1">
                    {[1,2,3,4,5,6].map(i => <div key={i} className="w-1 h-1 rounded-full bg-white/20" />)}
                  </div>
               </div>
            </div>
          </div>

          {/* TEMPORAL HISTORY PANEL */}
          <div className="flex flex-col bg-white/60 dark:bg-neutral-100/5 backdrop-blur-2xl border border-neutral-200 dark:border-white/5 rounded-[32px] overflow-hidden shadow-2xl relative h-full min-h-0">
            {/* History Header */}
            <div className="p-5 border-b border-neutral-200 dark:border-white/5 flex flex-col gap-4 bg-neutral-50/50 dark:bg-white/[0.01]">
               <h3 className="text-md font-bold text-neutral-800 dark:text-white">Historial temporal</h3>
               
               {/* Date Selectors row */}
               <div className="flex gap-2 w-full">
                 {/* Custom Dropdown Button */}
                 <div className="flex-1 flex items-center justify-between px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/20 text-xs text-neutral-700 dark:text-neutral-300 font-semibold shadow-sm cursor-pointer hover:border-neutral-300 dark:hover:border-white/20 transition-all">
                   <div className="flex items-center gap-2">
                     <Calendar className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
                     <span>5 de mayo de 2026</span>
                   </div>
                   <ChevronDown className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500" />
                 </div>
                 
                 {/* Square Calendar Action Button */}
                 <button className="h-9 w-9 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-black/20 text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-sm shrink-0">
                   <Calendar className="w-4 h-4" />
                 </button>
               </div>
            </div>

            {/* Timeline List */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4 custom-scrollbar relative min-h-0">
               {/* Vertical Timeline Line */}
               <div className="absolute left-[29px] top-6 bottom-6 w-[2px] bg-neutral-200 dark:bg-white/5" />

               {timelineData.map((item) => {
                 const isSelected = selectedEvent.id === item.id;
                 
                 // Semantic status colors maps
                 const severityColor = 
                   item.severity === "critical" ? "bg-error-500" :
                   item.severity === "major" ? "bg-warning-500" :
                   item.severity === "minor" ? "bg-primary-500" : "bg-success-500";
                 
                 const selectedBorderColor = 
                   item.severity === "critical" ? "border-l-error-500 dark:border-l-error-500" :
                   item.severity === "major" ? "border-l-warning-500 dark:border-l-warning-500" :
                   item.severity === "minor" ? "border-l-primary-500 dark:border-l-primary-500" : "border-l-success-500 dark:border-l-success-500";

                 return (
                   <div key={item.id} className="relative flex items-start pl-7 w-full group">
                     {/* Timeline Bullet on the Line */}
                     <div className="absolute left-3 -translate-x-1/2 flex items-center justify-center z-10 top-[22px]">
                       <div className={cn(
                         "w-2.5 h-2.5 rounded-full border-2 border-white dark:border-[#02060f] transition-all duration-300 shadow-glow-sm",
                         severityColor,
                         isSelected ? "scale-125 shadow-glow" : "opacity-80 group-hover:opacity-100"
                       )} />
                     </div>

                     {/* Event Detail Card */}
                     <div 
                       onClick={() => setSelectedEvent(item)}
                       className={cn(
                         "flex-1 flex items-center justify-between p-4 rounded-xl border transition-all duration-300 cursor-pointer w-full select-none",
                         isSelected 
                           ? cn("bg-neutral-50 dark:bg-white/[0.05] border-l-4 shadow-md", selectedBorderColor, "border-neutral-300 dark:border-white/20") 
                           : "bg-white dark:bg-white/[0.01] border-neutral-200 dark:border-white/5 hover:border-neutral-300 dark:hover:border-white/10 hover:bg-neutral-50/50 dark:hover:bg-white/[0.02]"
                       )}
                     >
                       {/* Time & Event Detail Flex */}
                       <div className="flex items-start gap-4">
                         {/* Time */}
                         <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 tracking-wider whitespace-nowrap min-w-[70px] mt-[1px]">
                           {item.time}
                         </span>
                         
                         {/* Title & Alarm Category */}
                         <div className="flex-1 min-w-0">
                           <h4 className="text-xs font-bold text-neutral-800 dark:text-white transition-colors leading-tight">
                             {item.title}
                           </h4>
                           
                           {/* Description Text (Brought Back & Cleanly Aligned) */}
                           <p className="text-[10px] text-neutral-400 dark:text-neutral-500 mt-1 leading-normal max-w-[280px]">
                             {item.description}
                           </p>

                           {/* Metadata row with semantic status bullet dot */}
                           <div className="flex items-center gap-1.5 mt-2">
                             <div className={cn("w-1.5 h-1.5 rounded-full", severityColor)} />
                             <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                               Alarma • {item.type}
                             </span>
                           </div>
                         </div>
                       </div>

                       {/* Chevron Right (Only when selected) */}
                       {isSelected && (
                         <ChevronRight className="w-4 h-4 text-neutral-500 dark:text-neutral-300 shrink-0 ml-4 animate-in slide-in-from-left-2 duration-300" />
                       )}
                     </div>
                   </div>
                 );
               })}

               <Button variant="ghost" className="w-full h-10 rounded-xl bg-white/[0.02] border border-white/5 text-[9px] font-bold uppercase tracking-widest mt-4">
                  Cargar más eventos <ChevronDown className="w-3.5 h-3.5 ml-1.5" />
               </Button>
            </div>
          </div>

        </div>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(var(--color-neutral-300-rgb), 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(var(--color-neutral-300-rgb), 0.5);
        }
        @keyframes glow {
          from { opacity: 0.3; }
          to { opacity: 0.7; }
        }
        .shadow-glow-sm {
          box-shadow: 0 0 15px currentColor;
        }
      `}</style>
    </div>
  );
}

function NodeItem({ icon, label, status, active, count }: { icon: any, label: string, status: string, active?: boolean, count?: number }) {
  const statusColors = {
    stable: "text-primary-500 bg-primary-500/10 border-primary-500/30 shadow-primary-500/20",
    critical: "text-error-500 bg-error-500/10 border-error-500/30 shadow-error-500/20 animate-pulse",
    major: "text-warning-500 bg-warning-500/10 border-warning-500/30 shadow-warning-500/20",
    minor: "text-primary-400 bg-primary-400/10 border-primary-400/30 shadow-primary-400/20",
  };
  
  return (
    <div className="flex flex-col items-center gap-3 group">
      <div className={cn(
        "relative w-16 h-16 rounded-2xl flex items-center justify-center border-2 backdrop-blur-md transition-all duration-500 cursor-pointer",
        statusColors[status as keyof typeof statusColors],
        active ? "scale-125 z-20 ring-4 ring-white/10" : "hover:scale-110",
        active && "shadow-[0_0_30px_rgba(var(--color-primary-500-rgb),0.3)]"
      )}>
        {icon}
        {count && (
           <div className={cn(
             "absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold",
             status === "critical" ? "bg-error-500 text-white" : "bg-warning-500 text-black"
           )}>
             {count}
           </div>
        )}
        {active && <div className="absolute inset-0 rounded-2xl bg-primary-500/10 animate-ping opacity-20" />}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-[10px] font-bold text-neutral-300 text-center tracking-tight group-hover:text-white transition-colors">{label}</span>
        {active && <div className="h-1 w-8 bg-primary-500 rounded-full mt-1.5" />}
      </div>
    </div>
  );
}

function LegendItem({ color, label, type = "dot", dash }: { color: string, label: string, type?: "dot" | "line", dash?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {type === "dot" ? (
        <div className={cn("w-2 h-2 rounded-full", color)} />
      ) : (
        <div className={cn("w-8 h-1 rounded-full", color, dash && "border-t border-dashed border-error-500")} />
      )}
      <span className="text-[9px] font-bold text-neutral-500 dark:text-neutral-400">{label}</span>
    </div>
  );
}

