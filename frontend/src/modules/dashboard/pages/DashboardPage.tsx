"use client";

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Dropdown } from "@/components/ui/Dropdown";
import { Modal } from "@/components/ui/Modal";
import { Textarea } from "@/components/ui/Textarea";
import { Toast } from "@/components/ui/Toast";
import { 
  Network, 
  Server, 
  Wifi, 
  Power, 
  Search, 
  Filter, 
  AlertTriangle, 
  Clock, 
  ShieldAlert, 
  ChevronRight,
  Database,
  MapPin,
  MessageSquare,
  Zap,
  Activity,
  PlusCircle,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DashboardPage() {
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [confirmType, setConfirmType] = useState<"save" | "cancel">("save");
  const [commentValue, setCommentValue] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState({ title: "", description: "", variant: "success" as any });

  const handleOpenConfirmSave = () => {
    if (!commentValue.trim()) return;
    setConfirmType("save");
    setIsConfirmModalOpen(true);
  };

  const handleOpenConfirmCancel = () => {
    if (commentValue.trim()) {
      setConfirmType("cancel");
      setIsConfirmModalOpen(true);
    } else {
      setIsCommentModalOpen(false);
    }
  };

  const executeConfirmedAction = () => {
    if (confirmType === "save") {
      setToastMessage({
        title: "Comentario guardado",
        description: "La nota ha sido agregada exitosamente a la alerta.",
        variant: "success"
      });
      setShowToast(true);
      setIsCommentModalOpen(false);
      setIsConfirmModalOpen(false);
      setCommentValue("");
    } else {
      setIsConfirmModalOpen(false);
      setIsCommentModalOpen(false);
      setCommentValue("");
    }
  };

  const resources = [
    {
      id: "#RES-001",
      name: "Core Router AR-9000",
      type: "Elemento de red",
      status: "Operativo",
      operation: "activa",
      category: "success",
      icon: <Network className="w-5 h-5" />
    },
    {
      id: "#RES-002",
      name: "Edge Switch SW-450",
      type: "Elemento de red",
      status: "En alerta",
      operation: "activa",
      category: "error",
      icon: <Server className="w-5 h-5" />
    },
    {
      id: "#RES-003",
      name: "Fiber Link NY-NJ",
      type: "Enlace lógico",
      status: "Suspendido",
      operation: "inactiva",
      category: "warning",
      icon: <Wifi className="w-5 h-5" />
    },
    {
      id: "#RES-004",
      name: "Backup Generator B",
      type: "Equipo de infraestructura",
      status: "Operativo",
      operation: "activa",
      category: "success",
      icon: <Power className="w-5 h-5" />
    }
  ];

  const metrics = [
    { label: "Recursos", value: "4", subtext: "activos", icon: <Database className="w-4 h-4" />, category: "primary" },
    { label: "Integridad", value: "99.8%", subtext: "disponibilidad", icon: <Activity className="w-4 h-4" />, category: "success" },
    { label: "Alertas activas", value: "1", subtext: "crítica", icon: <AlertTriangle className="w-4 h-4" />, category: "error" },
    { label: "MTTR", value: "14 min", subtext: "tiempo medio resolución", icon: <Clock className="w-4 h-4" />, category: "warning" }
  ];

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#02060f] text-neutral-900 dark:text-neutral-100 font-sans overflow-hidden">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto overflow-hidden flex flex-col p-6 lg:px-12 pt-4 gap-8">
        
        {/* ─── MAIN CONTENT GRID ─────────────────────────────────────────── */}
        <div className="flex-1 grid grid-cols-12 gap-8 min-h-0 pt-2">
          
          {/* PANEL IZQUIERDO: RECURSOS */}
          <section className="col-span-4 flex flex-col gap-4 min-h-0">
            <div className="space-y-1">
              <h2 className="text-label-sm font-bold tracking-widest text-neutral-500 dark:text-neutral-500 uppercase">
                RECURSOS DEL DATA CENTER
              </h2>
              <p className="text-label-md font-bold text-primary-500 dark:text-primary-400 uppercase">
                4 ACTIVOS
              </p>
            </div>

            <div className="flex flex-col gap-2.5">
              <Input 
                placeholder="Buscar recurso..." 
                iconLeft={<Search className="w-4 h-4" />}
                className="bg-white dark:bg-white/5 border-neutral-200 dark:border-white/5 h-10 text-body-xs rounded-xl w-full"
                sizeVariant="sm"
              />
              <Dropdown 
                placeholder="Filtrar por tipo..."
                sizeVariant="sm"
                options={[
                  { label: "Todos los tipos", value: "all" },
                  { label: "Elemento de red", value: "network" },
                  { label: "Enlace lógico", value: "link" },
                  { label: "Infraestructura", value: "infra" }
                ]}
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2.5 overflow-y-auto pr-1 custom-scrollbar">
              {resources.map((res) => (
                <Card 
                  key={res.id}
                  showEffect={true}
                  category={res.category as any}
                  padding="p-3.5"
                  radius="rounded-xl"
                  className={cn(
                    "bg-white dark:bg-white/[0.03] border-neutral-100 dark:border-white/5 transition-all cursor-pointer group hover:bg-neutral-50 dark:hover:bg-white/[0.07]",
                    res.category === "error" && "border-error-500/20 bg-error-500/5 dark:bg-error-500/10 dark:border-error-500/30"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "p-2.5 rounded-lg border shrink-0 transition-transform group-hover:scale-105",
                      res.category === "success" ? "bg-success-500/10 border-success-500/20 text-success-500" :
                      res.category === "error" ? "bg-error-500/10 border-error-500/20 text-error-500" :
                      "bg-warning-500/10 border-warning-500/20 text-warning-500"
                    )}>
                      {React.cloneElement(res.icon as React.ReactElement<{ className?: string }>, { className: "w-4.5 h-4.5" })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-body-sm font-bold text-neutral-900 dark:text-neutral-800 transition-colors group-hover:text-primary-600 truncate">{res.name}</h3>
                        <Tag 
                          variant={res.category === "warning" ? "pause" : res.category as any}
                          size="XS"
                          label={res.status.toUpperCase()}
                          className="shrink-0 pointer-events-none shadow-none text-[9px] h-4.5"
                        />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-tighter">{res.id}</span>
                        <span className="text-[10px] font-bold text-neutral-300 dark:text-neutral-500">•</span>
                        <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase truncate">{res.type}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* PANEL DERECHO: COMMAND CENTER */}
          <section className="col-span-8 flex flex-col gap-4 min-h-0">
            
            <Card 
              showEffect={true}
              category="critical"
              padding="px-8 pt-12 pb-8"
              radius="rounded-2xl"
              className="bg-white dark:bg-white/[0.03] border-neutral-200 dark:border-white/5 border shadow-sm flex flex-col gap-6"
            >
              <div className="flex flex-col h-full gap-6">
                <div className="flex items-start justify-between">
                  <div className="flex flex-col flex-1">
                    <div className="mb-6">
                      <Tag 
                        variant="error" 
                        size="XS" 
                        label="ALERTA CRÍTICA ACTIVA" 
                        className="font-bold tracking-[0.2em] text-[10px] px-3 py-1 bg-error-500/10 border-error-500/20" 
                      />
                    </div>
                    <h2 className="text-heading-4 font-bold text-neutral-900 dark:text-white leading-tight uppercase tracking-tight mb-4">
                      PÉRDIDA DE SEÑAL EN ENLACE PRINCIPAL
                    </h2>
                    
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                      <p className="text-body-xs text-neutral-500 dark:text-neutral-500 flex items-center gap-2">
                        Recurso: <span className="text-neutral-900 dark:text-neutral-200 font-bold">Fiber Link NY-NJ</span>
                      </p>
                      <div className="w-1 h-1 bg-neutral-300 dark:bg-white/10 rounded-full hidden sm:block" />
                      <p className="text-body-xs text-neutral-500 dark:text-neutral-500 flex items-center gap-2">
                        Causa: <span className="text-neutral-700 dark:text-neutral-400 font-medium italic">corte de fibra en ruta principal</span>
                      </p>
                    </div>
                  </div>
                  <div className="p-4 bg-error-500/10 rounded-2xl border border-error-500/20 text-error-500 shadow-inner shrink-0 ml-6">
                    <ShieldAlert className="w-9 h-9" />
                  </div>
                </div>

                {/* VISUAL TÉCNICO */}
                <div className="relative rounded-xl bg-neutral-50 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/5 overflow-hidden flex flex-col items-center justify-center p-6 min-h-[140px]">
                  <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.08]" style={{ 
                    backgroundImage: "linear-gradient(var(--color-primary-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-500) 1px, transparent 1px)", 
                    backgroundSize: "20px 20px" 
                  }} />
                  <div className="relative flex items-center justify-between w-full z-10 px-6">
                     <div className="flex flex-col items-center gap-2">
                       <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center text-primary-500 shadow-sm transition-transform hover:scale-105">
                         <MapPin className="w-5 h-5" />
                       </div>
                       <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">NYC</span>
                     </div>
                     
                     <div className="flex-1 h-[2px] relative mx-4">
                       <div className="absolute inset-0 bg-neutral-200 dark:bg-white/10" />
                       <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-error-500 w-[65%]" />
                       <div className="absolute left-[65%] -top-1 w-2 h-2 bg-error-500 rounded-full animate-ping opacity-50" />
                       <Zap className="absolute left-[60%] -top-6 w-6 h-6 text-error-500 drop-shadow-[0_0_6px_rgba(var(--color-error-500-rgb),0.5)]" />
                     </div>
                     
                     <div className="flex flex-col items-center gap-2 opacity-40">
                       <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-white/10 border border-neutral-300 dark:border-white/10 flex items-center justify-center text-neutral-400">
                         <MapPin className="w-5 h-5" />
                       </div>
                       <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">NJ</span>
                     </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-200 dark:bg-white/5 w-full" />

                {/* BOTONES DE ACCIÓN */}
                <div className="flex gap-3 mt-auto">
                  <Button 
                    variant="error" 
                    size="sm" 
                    className="flex-[1.2] font-bold h-10 text-[10px] uppercase rounded-lg shadow-md shadow-error-500/10"
                  >
                    Reconocer alerta
                  </Button>
                  <Button variant="neutral" size="sm" className="flex-1 font-bold h-10 text-[10px] uppercase bg-white dark:bg-white/5 border-neutral-200 dark:border-white/10 rounded-lg shadow-sm text-neutral-500 dark:text-neutral-400">
                    Limpiar / Resolver
                  </Button>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="flex-[1.2] font-bold h-10 text-[10px] uppercase rounded-lg shadow-md shadow-primary-500/10"
                    onClick={() => setIsCommentModalOpen(true)}
                  >
                    <MessageSquare className="w-3.5 h-3.5 mr-2" />
                    Agregar Comentario
                  </Button>
                </div>
              </div>
            </Card>

            {/* SECCIÓN EXTERNA: MÉTRICAS DE LA ALERTA */}
            <div className="flex flex-col gap-4 py-2 mt-0">
               <div className="grid grid-cols-3 gap-6 px-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Prioridad</span>
                    <Badge category="error" mode="soft" size="sm" className="w-fit font-bold uppercase rounded-md text-[9px] px-2 h-5">
                      CRITICA
                    </Badge>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Tiempo abierta</span>
                    <span className="text-body-sm font-bold text-neutral-900 dark:text-neutral-200">14 min</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">SLA</span>
                    <Badge category="warning" mode="soft" size="sm" className="w-fit font-bold uppercase rounded-md text-warning-600 bg-warning-500/10 border-warning-500/20 text-[9px] px-2 h-5">
                      EN RIESGO
                    </Badge>
                  </div>
                </div>
                <div className="h-px bg-neutral-200 dark:bg-white/5 w-full" />
            </div>

          </section>
        </div>

        {/* ─── FRANJA INFERIOR: MÉTRICAS */}
        <div className="grid grid-cols-4 gap-6 pb-10">
          {metrics.map((metric, i) => (
            <Card 
              key={i} 
              showEffect={true}
              category={metric.category as any}
              padding="p-4"
              radius="rounded-2xl"
              variant="horizontal"
              className={cn(
                "bg-white dark:bg-white/[0.03] border-neutral-200 dark:border-white/5 transition-all hover:bg-neutral-50 dark:hover:bg-white/[0.07] h-24 shadow-sm",
                metric.category === "primary" && "hover:border-primary-500/30",
                metric.category === "success" && "hover:border-success-500/30",
                metric.category === "error" && "hover:border-error-500/30",
                metric.category === "warning" && "hover:border-warning-500/30"
              )}
            >
              <div className="flex items-center gap-5 w-full h-full">
                <div className={cn(
                  "p-3 rounded-xl border shrink-0 transition-all duration-300 group-hover:scale-110",
                  metric.category === "primary" ? "bg-primary-500/10 border-primary-500/20 text-primary-500" : 
                  metric.category === "success" ? "bg-success-500/10 border-success-500/20 text-success-500" :
                  metric.category === "error" ? "bg-error-500/10 border-error-500/20 text-error-500" :
                  metric.category === "warning" ? "bg-warning-500/10 border-warning-500/20 text-warning-500" :
                  "bg-neutral-50 border-neutral-100 dark:border-white/5 text-neutral-400"
                )}>
                  {React.cloneElement(metric.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5" })}
                </div>
                <div className="flex flex-col justify-center overflow-hidden">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 leading-none mb-2">
                    {metric.label}
                  </span>
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-title-sm font-bold text-neutral-900 dark:text-neutral-200 leading-none">{metric.value}</span>
                    <span className="text-[11px] font-bold text-neutral-400 dark:text-neutral-600 leading-none">{metric.subtext}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* MODAL: AGREGAR COMENTARIO (Totalmente estandarizado) */}
      <Modal 
        isOpen={isCommentModalOpen}
        onClose={handleOpenConfirmCancel}
        title="Agregar Comentario"
        primaryActionLabel="GUARDAR NOTA"
        onPrimaryAction={handleOpenConfirmSave}
        secondaryActionLabel="CANCELAR"
        onSecondaryAction={handleOpenConfirmCancel}
        size="md"
        className="dark:bg-[#050b18] border-primary-500/10"
        showAccent={false}
      >
        <div className="space-y-6">
          <div className="h-px bg-neutral-200/10 w-full" />
          
          <Textarea 
            placeholder="Notas del analista, detalles de causa raíz..."
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            className="dark:bg-[#080f1e] border-neutral-800/50"
            rows={5}
          />
          
          <div className="h-px bg-neutral-200/10 w-full" />
        </div>
      </Modal>

      {/* MODAL DE CONFIRMACIÓN (PARA GUARDAR O CANCELAR) */}
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
        title={confirmType === "save" ? "Confirmar Nota" : "Descartar Cambios"}
        description={
          confirmType === "save" 
            ? "¿Estás seguro de que deseas guardar este comentario en la alerta?" 
            : "¿Estás seguro de que deseas descartar el comentario? Los cambios no se guardarán."
        }
        size="sm"
      >
        <div className="flex gap-3 mt-6">
          <Button 
            variant="neutral" 
            fullWidth 
            onClick={() => setIsConfirmModalOpen(false)}
          >
            Regresar
          </Button>
          <Button 
            variant={confirmType === "save" ? "primary" : "error"} 
            fullWidth 
            onClick={executeConfirmedAction}
          >
            {confirmType === "save" ? "Confirmar y Guardar" : "Sí, Descartar"}
          </Button>
        </div>
      </Modal>

      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-[200] animate-in slide-in-from-right-10 duration-500">
          <Toast 
            variant={toastMessage.variant}
            title={toastMessage.title}
            description={toastMessage.description}
            onClose={() => setShowToast(false)}
          />
        </div>
      )}

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
