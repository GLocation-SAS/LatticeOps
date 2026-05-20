"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Cpu, 
  Send, 
  Bot, 
  User as UserIcon,
  Zap,
  Activity,
  Maximize2,
  Settings,
  MessageSquare,
  Search,
  ChevronRight,
  Database,
  History,
  AlertCircle,
  Network,
  Layers,
  Plus,
  Minus,
  Maximize,
  RefreshCcw,
  Info,
  ShieldCheck,
  MousePointer2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Header } from "@/components/layout/Header";

interface Message {
  id: string;
  role: "assistant" | "user";
  content: string;
  timestamp: string;
}

const quickSuggestions = [
  { label: "Ver alarmas críticas", icon: <AlertCircle className="w-3.5 h-3.5" />, color: "text-error-500" },
  { label: "Mostrar recursos afectados", icon: <Zap className="w-3.5 h-3.5" />, color: "text-warning-500" },
  { label: "Consultar estado de red", icon: <Activity className="w-3.5 h-3.5" />, color: "text-primary-500" },
  { label: "Ir a máquina del tiempo", icon: <History className="w-3.5 h-3.5" />, color: "text-neutral-400" },
];

export default function DigitalTwinPage() {
  const [isTopologyActive, setIsTopologyActive] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "¡Hola! Soy el asistente de tu Gemelo Digital. Estoy listo para analizar tu topología en tiempo real. ¿En qué segmento deseas profundizar hoy?",
      timestamp: "04:30 p. m."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const content = text || inputValue;
    if (!content.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Procesando consulta... He mapeado 12 nodos activos y detectado una latencia inusual en el segmento 'Troncal-A1'. He activado la visualización de topología para ese sector.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTopologyActive(true); // Automatically render topology on AI response
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#02060f] text-neutral-900 dark:text-neutral-100 font-sans overflow-hidden">
      <Header />
      
      <main className="flex-1 w-full max-w-[1700px] mx-auto p-6 lg:px-12 flex flex-col gap-6 overflow-hidden">
        
        {/* MAIN INTERFACE GRID */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-6 min-h-0 pb-6">
          
          {/* CHAT ASISTENTE PANEL */}
          <div 
            className="flex flex-col h-full min-h-0 bg-white/60 dark:bg-neutral-100/5 backdrop-blur-2xl border border-neutral-200 dark:border-white/5 rounded-[32px] overflow-hidden shadow-2xl relative"
          >
            {/* Header Asistente */}
            <div className="p-5 border-b border-neutral-100 dark:border-white/5 flex items-center justify-between bg-neutral-50/50 dark:bg-white/[0.01] shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="p-2.5 bg-primary-500/10 rounded-2xl border border-primary-500/20">
                    <Bot className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-success-500 border-2 border-white dark:border-[#0c1425] rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                    Digital Twin AI
                    <Badge category="default" size="sm" className="h-4 px-1 text-[8px]">PRO</Badge>
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1 h-1 rounded-full bg-success-500" />
                    <p className="text-[11px] font-bold text-neutral-500 dark:text-neutral-400">Activo</p>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="xs" className="w-9 h-9 p-0 text-neutral-400 hover:bg-white/5 hover:text-white rounded-xl">
                <Settings className="w-4 h-4" />
              </Button>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar bg-neutral-50/30 dark:bg-transparent"
            >
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={cn(
                    "flex flex-col gap-2 max-w-[90%]",
                    msg.role === "user" ? "ml-auto items-end" : "mr-auto items-start"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-[20px] text-[13px] font-medium leading-relaxed shadow-sm transition-all",
                    msg.role === "assistant" 
                      ? "bg-white dark:bg-white/5 text-neutral-700 dark:text-neutral-700 rounded-tl-none border border-neutral-200/50 dark:border-white/10" 
                      : "bg-primary-500 text-white rounded-tr-none shadow-lg shadow-primary-500/20"
                  )}>
                    {msg.content}
                  </div>
                  <div className="flex items-center gap-2 px-1">
                    {msg.role === "assistant" && <Bot className="w-3 h-3 text-primary-500" />}
                    <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Suggestions (Separate, Above) */}
            <div className="px-5 py-3.5 border-t border-neutral-100 dark:border-white/5 bg-neutral-50/10 dark:bg-white/[0.01] flex flex-wrap gap-2 shrink-0">
              {quickSuggestions.map((s, i) => (
                <Tag 
                  key={i}
                  variant="default"
                  size="S"
                  iconLeft={<span className={s.color}>{s.icon}</span>}
                  label={s.label}
                  onClick={() => handleSendMessage(s.label)}
                  className="hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer"
                />
              ))}
            </div>

            {/* Fixed Clean Chat Input Footer */}
            <div className="p-5 border-t border-neutral-100 dark:border-white/5 bg-white dark:bg-[#02060f]/20 shrink-0">
              <div className="relative flex items-end bg-neutral-50 dark:bg-black/40 border border-neutral-200 dark:border-white/10 focus-within:border-primary-500/50 rounded-3xl p-2.5 transition-all">
                <textarea 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  placeholder="Ej: Muestra el tramo afectado por la alarma..."
                  className="flex-1 bg-transparent border-none focus:border-none focus:outline-none focus:ring-0 ring-0 text-sm font-medium py-3 px-3 min-h-[80px] max-h-[160px] text-neutral-800 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 custom-scrollbar resize-none"
                />
                <Button 
                  onClick={() => handleSendMessage()}
                  variant="primary"
                  className="h-10 w-10 p-0 rounded-full shadow-lg shadow-primary-500/20 active:scale-95 transition-all shrink-0 ml-2 mb-1.5 mr-1"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* TOPOLOGY VISUALIZATION PANEL */}
          <div 
            className="relative flex items-center justify-center h-full min-h-0 bg-neutral-50 dark:bg-[#050b18] border border-neutral-200 dark:border-white/5 rounded-[32px] overflow-hidden group shadow-2xl"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Ambient Animated Glows */}
            <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-error-500/5 blur-[120px] rounded-full pointer-events-none" />

            {!isTopologyActive ? (
              /* Minimal Empty State Matching the Photo 100% */
              <div className="flex flex-col items-center justify-center text-center p-8 z-10 animate-in fade-in duration-500">
                <div className="w-14 h-14 rounded-full bg-neutral-100/5 dark:bg-white/5 border border-neutral-200/5 dark:border-white/5 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-neutral-400 dark:text-neutral-400" />
                </div>
                <h3 className="text-sm font-bold text-neutral-800 dark:text-white mt-4 tracking-wide">No hay topología activa</h3>
                <p className="text-[12px] text-neutral-400 dark:text-neutral-700 mt-2 max-w-[280px] leading-relaxed">
                  Realiza una consulta en el chat o usa la máquina del tiempo para visualizar la red.
                </p>
              </div>
            ) : (
              /* Interactive Active Topology Graphic */
              <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in-95 duration-700">
                {/* SVG Active Network Diagram */}
                <svg className="w-full h-full p-16 text-neutral-900 dark:text-white" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Connecting lines with flowing dashes */}
                  <line x1="150" y1="300" x2="400" y2="150" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="150" y1="300" x2="400" y2="450" stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="400" y1="150" x2="650" y2="300" stroke="#10b981" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="400" y1="450" x2="650" y2="300" stroke="#f59e0b" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[dash_20s_linear_infinite]" />
                  <line x1="400" y1="150" x2="400" y2="450" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="6 4" className="animate-[dash_20s_linear_infinite]" />

                  {/* Node 1: Core Switch */}
                  <g className="cursor-pointer group/node" transform="translate(150, 300)">
                    <circle r="36" fill="rgba(59, 130, 246, 0.08)" stroke="#3b82f6" strokeWidth="2" className="animate-pulse" />
                    <circle r="26" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" strokeWidth="1.5" />
                    <circle r="6" fill="#3b82f6" />
                    <text y="52" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold tracking-widest uppercase opacity-70">Core-Switch</text>
                  </g>

                  {/* Node 2: Troncal-A1 (Warning) */}
                  <g className="cursor-pointer group/node" transform="translate(400, 150)">
                    <circle r="36" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" strokeWidth="2" className="animate-pulse" />
                    <circle r="26" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="1.5" />
                    <circle r="6" fill="#f59e0b" />
                    <text y="-45" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold tracking-widest uppercase opacity-70">Troncal-A1</text>
                  </g>

                  {/* Node 3: Database Core */}
                  <g className="cursor-pointer group/node" transform="translate(400, 450)">
                    <circle r="36" fill="rgba(16, 185, 129, 0.08)" stroke="#10b981" strokeWidth="2" className="animate-pulse" />
                    <circle r="26" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1.5" />
                    <circle r="6" fill="#10b981" />
                    <text y="52" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold tracking-widest uppercase opacity-70">DB-Core</text>
                  </g>

                  {/* Node 4: Edge Server (Critical) */}
                  <g className="cursor-pointer group/node" transform="translate(650, 300)">
                    <circle r="40" fill="rgba(239, 68, 68, 0.1)" stroke="#ef4444" strokeWidth="2.5" className="animate-ping [animation-duration:3s]" />
                    <circle r="30" fill="rgba(239, 68, 68, 0.15)" stroke="#ef4444" strokeWidth="1.5" />
                    <circle r="6" fill="#ef4444" />
                    <text y="52" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold tracking-widest uppercase opacity-70">Edge-Server</text>
                  </g>
                </svg>

                {/* VISUALIZATION CONTROLS (Only visible when topology is active) */}
                
                {/* Top Toolbar */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-3 p-1.5 rounded-3xl bg-white/85 dark:bg-black/85 border border-neutral-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl z-20 transition-all hover:scale-[1.02] animate-in slide-in-from-top-4 duration-500">
                  <Button 
                    onClick={() => setIsTopologyActive(false)}
                    variant="ghost" 
                    className="h-11 px-5 rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/30 text-[10px] font-bold uppercase tracking-widest hover:bg-primary-600 border-none animate-pulse"
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Tiempo Real
                  </Button>
                  <div className="h-6 w-px bg-neutral-200 dark:bg-white/10" />
                  <div className="flex gap-1">
                    <Button variant="ghost" className="h-11 w-11 p-0 rounded-2xl hover:bg-white/10 text-neutral-400 hover:text-white">
                      <Maximize2 className="w-4.5 h-4.5" />
                    </Button>
                    <Button variant="ghost" className="h-11 w-11 p-0 rounded-2xl hover:bg-white/10 text-neutral-400 hover:text-white">
                      <RefreshCcw className="w-4.5 h-4.5" />
                    </Button>
                  </div>
                </div>

                {/* Navigation & Zoom Tools */}
                <div className="absolute left-8 bottom-8 flex flex-col gap-2 z-20 animate-in slide-in-from-left-4 duration-500">
                   {[
                     { icon: <Plus className="w-4.5 h-4.5" />, label: "Acercar" },
                     { icon: <Minus className="w-4.5 h-4.5" />, label: "Alejar" },
                     { icon: <Maximize className="w-4.5 h-4.5" />, label: "Ajustar" },
                     { icon: <MousePointer2 className="w-4.5 h-4.5" />, label: "Selección" },
                   ].map((c, i) => (
                     <button key={i} className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-black/60 border border-neutral-200 dark:border-white/10 backdrop-blur-xl text-neutral-400 hover:text-primary-500 hover:border-primary-500/50 shadow-lg transition-all active:scale-90 group relative">
                        {c.icon}
                        <div className="absolute left-full ml-3 px-3 py-1.5 rounded-lg bg-black text-[9px] font-bold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none">
                          {c.label}
                        </div>
                     </button>
                   ))}
                </div>

                {/* Bottom Floating Legend & Performance Bar */}
                <div className="absolute bottom-8 right-8 flex flex-col items-end gap-3 z-20 animate-in slide-in-from-right-4 duration-500">
                  {/* Legend Summary */}
                  <Card className="p-4 bg-white/85 dark:bg-black/85 border border-neutral-200 dark:border-white/10 backdrop-blur-2xl shadow-xl w-64 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">Leyenda de Red</span>
                      <Info className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                    <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                      <LegendItem color="bg-primary-500" label="Operativo" />
                      <LegendItem color="bg-success-500" label="Saludable" />
                      <LegendItem color="bg-error-500" label="Crítico" />
                      <LegendItem color="bg-warning-500" label="Alerta" />
                    </div>
                    <div className="h-px bg-neutral-200 dark:bg-white/10" />
                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">Motor: GPU V3</span>
                      <div className="flex gap-1">
                        {[1,2,3].map(i => <div key={i} className="w-1 h-3 rounded-full bg-success-500" />)}
                      </div>
                    </div>
                  </Card>

                  {/* Zoom Indicator */}
                  <div className="px-6 py-3 rounded-full bg-white/85 dark:bg-black/85 border border-neutral-200 dark:border-white/10 backdrop-blur-xl shadow-xl text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] flex items-center gap-3">
                    <span className="text-neutral-400">Zoom:</span>
                    100%
                  </div>
                </div>
              </div>
            )}
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
      `}</style>
    </div>
  );
}

function MetricCard({ label, value, trend, icon, color }: { label: string, value: string, trend: string, icon: any, color: "primary" | "error" | "warning" | "success" }) {
  const colors = {
    primary: "text-primary-500 bg-primary-500/10 border-primary-500/20 shadow-primary-500/10",
    error: "text-error-500 bg-error-500/10 border-error-500/20 shadow-error-500/10",
    warning: "text-warning-500 bg-warning-500/10 border-warning-500/20 shadow-warning-500/10",
    success: "text-success-500 bg-success-500/10 border-success-500/20 shadow-success-500/10",
  };

  return (
    <Card className={cn("p-5 flex items-center justify-between group transition-all hover:scale-[1.02]", colors[color])}>
      <div className="space-y-1">
        <span className="text-[10px] font-bold opacity-60 uppercase tracking-widest">{label}</span>
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold italic tracking-tighter text-neutral-900 dark:text-white">{value}</span>
          <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/20", colors[color])}>{trend}</span>
        </div>
      </div>
      <div className={cn("p-3 rounded-2xl bg-white/20 group-hover:rotate-6 transition-transform", colors[color])}>
        {icon}
      </div>
    </Card>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className={cn("w-2 h-2 rounded-full", color)} />
      <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-tighter">{label}</span>
    </div>
  );
}
