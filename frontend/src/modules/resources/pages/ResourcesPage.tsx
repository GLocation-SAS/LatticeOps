"use client";

import React from "react";
import { 
  Network, 
  Server, 
  Wifi, 
  Database, 
  HardDrive, 
  Router, 
  Plus, 
  AlertCircle, 
  CheckCircle2, 
  AlertTriangle,
  Info,
  Zap,
  Pencil, 
  Trash2, 
  Settings, 
  Activity as ActivityIcon,
  ShieldAlert,
  ArrowRight,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tag } from "@/components/ui/Tag";
import { Header } from "@/components/layout/Header";
import { Modal } from "@/components/ui/Modal";
import { DialogModal } from "@/components/ui/DialogModal";

interface ResourceItem {
  id: string;
  name: string;
  type: "LINK" | "ROUTER" | "SERVER" | "SWITCH";
  status: "AVAILABLE" | "STABLE" | "ALARM";
  category: "success" | "error" | "warning";
  alarmText?: string;
  description?: string;
  icon: React.ReactNode;
  resourceId?: string;
  categoryLabel?: string;
  logicalType?: string;
}

const resourcesData: ResourceItem[] = [
  {
    id: "1",
    name: "Troncal-Fibra-Inter-DC",
    resourceId: "link-fiber-001",
    categoryLabel: "Link",
    logicalType: "LogicalResource",
    type: "LINK",
    status: "AVAILABLE",
    category: "error",
    alarmText: "1 ALARMA(S) ACTIVA(S)",
    description: "\"Pérdida de señal total detectada en el tramo Troncal Inter-Datacenter a 15.4km.\"",
    icon: <Wifi className="w-4 h-4" />
  },
  {
    id: "2",
    name: "Core-Router-Principal",
    type: "ROUTER",
    status: "AVAILABLE",
    category: "error",
    alarmText: "1 ALARMA(S) ACTIVA(S)",
    description: "\"Error crítico en el motor de reenvío (PFE) del router principal.\"",
    icon: <Router className="w-4 h-4" />
  },
  {
    id: "3",
    name: "Core-Router-Respaldo",
    type: "ROUTER",
    status: "AVAILABLE",
    category: "success",
    description: "SISTEMA OPERATIVO ESTABLE",
    icon: <Router className="w-4 h-4" />
  },
  {
    id: "4",
    name: "Cluster-BaseDatos-SQL",
    type: "SERVER",
    status: "AVAILABLE",
    category: "warning",
    alarmText: "1 ALARMA(S) ACTIVA(S)",
    description: "\"Tiempos de respuesta de SQL exceden el umbral de 500ms.\"",
    icon: <Database className="w-4 h-4" />
  },
  {
    id: "5",
    name: "Almacenamiento-NAS",
    type: "SERVER",
    status: "AVAILABLE",
    category: "success",
    description: "SISTEMA OPERATIVO ESTABLE",
    icon: <HardDrive className="w-4 h-4" />
  },
  {
    id: "6",
    name: "Servidor-Web-Produccion",
    type: "SERVER",
    status: "AVAILABLE",
    category: "warning",
    alarmText: "1 ALARMA(S) ACTIVA(S)",
    description: "\"Detección de fuerza bruta SSH en el servidor web.\"",
    icon: <Server className="w-4 h-4" />
  },
  {
    id: "7",
    name: "Switch-Distribucion-A1",
    type: "SWITCH",
    status: "AVAILABLE",
    category: "warning",
    alarmText: "1 ALARMA(S) ACTIVA(S)",
    description: "\"Falla detectada en el sistema de ventilación del rack Piso 1.\"",
    icon: <Network className="w-4 h-4" />
  },
  {
    id: "8",
    name: "Switch-Distribucion-B2",
    type: "SWITCH",
    status: "AVAILABLE",
    category: "success",
    description: "SISTEMA OPERATIVO ESTABLE",
    icon: <Network className="w-4 h-4" />
  }
];

export function ResourcesPage() {
  const [selectedResource, setSelectedResource] = React.useState<ResourceItem | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const [isConfirmUpdateOpen, setIsConfirmUpdateOpen] = React.useState(false);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState({ title: "", description: "", variant: "success" as any });

  const handleEditResource = (resource: ResourceItem) => {
    setSelectedResource(resource);
    setIsDetailModalOpen(true);
  };

  const handleConfirmUpdate = () => {
    setIsDetailModalOpen(false);
    setIsConfirmUpdateOpen(true);
  };

  const handleConfirmDelete = () => {
    setIsDetailModalOpen(false);
    setIsConfirmDeleteOpen(true);
  };

  const executeUpdate = () => {
    setToastMessage({
      title: "Recurso actualizado",
      description: `Los cambios en ${selectedResource?.name} se han guardado correctamente.`,
      variant: "success"
    });
    setShowToast(true);
    setIsConfirmUpdateOpen(false);
  };

  const executeDelete = () => {
    setToastMessage({
      title: "Recurso eliminado",
      description: `El recurso ${selectedResource?.name} ha sido removido del inventario.`,
      variant: "error"
    });
    setShowToast(true);
    setIsConfirmDeleteOpen(false);
  };

  React.useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#02060f] text-neutral-900 dark:text-neutral-100 font-sans overflow-hidden">
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto overflow-y-auto custom-scrollbar p-6 lg:px-12 flex flex-col gap-8 pt-0">
        
        {/* HEADER DE SECCIÓN */}
        <header className="flex flex-wrap items-end justify-between gap-6 pt-10">
          <div className="flex items-baseline gap-4">
            <h1 className="text-heading-3 font-bold italic tracking-tight text-neutral-900 dark:text-white">
              Inventario de Recursos
            </h1>
            <span className="text-body-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              TMF 639
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <Tag 
              variant="informative" 
              size="M" 
              label="8 NODOS ACTIVOS" 
              className="font-bold tracking-widest border-primary-500/20 uppercase"
            />
            <Button variant="primary" size="sm" className="h-11 px-6 rounded-xl shadow-lg shadow-primary-500/20 uppercase tracking-widest text-[11px]">
              <Plus className="w-4 h-4 mr-2" />
              Aprovisionar
            </Button>
          </div>
        </header>

        {/* GRID DE RECURSOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {resourcesData.map((resource) => (
            <Card
              key={resource.id}
              showEffect={true}
              category={resource.category}
              padding="p-6"
              radius="rounded-2xl"
              className={cn(
                "bg-white dark:bg-white/[0.03] border-neutral-200 dark:border-white/5 transition-all duration-500 hover:scale-[1.02] group",
                resource.category === "error" && "border-error-500/30",
                resource.category === "warning" && "border-warning-500/30",
                resource.category === "success" && "border-success-500/30"
              )}
            >
              <div className="relative flex flex-col h-full">
                {/* Actions Corner */}
                <div className="absolute top-0 right-0 flex items-center gap-2">
                  <Button 
                    variant="ghost"
                    size="xs"
                    onClick={() => handleEditResource(resource)}
                    className="w-9 h-9 p-0 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-400 hover:text-primary-500 hover:bg-primary-500/10 transition-colors"
                  >
                    <Pencil className="w-3.5 h-3.5" />
                  </Button>
                  <Button 
                    variant="ghost"
                    size="xs"
                    className="w-9 h-9 p-0 rounded-xl bg-neutral-100 dark:bg-white/5 text-neutral-400 hover:text-error-500 hover:bg-error-500/10 transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </Button>
                  <div className="ml-2">
                    {resource.category === "error" && <AlertCircle className="w-5 h-5 text-error-500 animate-pulse" />}
                    {resource.category === "warning" && <AlertTriangle className="w-5 h-5 text-warning-500" />}
                    {resource.category === "success" && <CheckCircle2 className="w-5 h-5 text-success-500" />}
                  </div>
                </div>

                {/* Resource Info */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={cn(
                    "p-2.5 rounded-xl border flex-shrink-0 transition-colors",
                    resource.category === "success" ? "bg-success-500/10 border-success-500/20 text-success-500" : 
                    resource.category === "error" ? "bg-error-500/10 border-error-500/20 text-error-500" :
                    resource.category === "warning" ? "bg-warning-500/10 border-warning-500/20 text-warning-500" :
                    "bg-neutral-50 dark:bg-white/5 border-neutral-100 dark:border-white/10 text-neutral-400"
                  )}>
                    {resource.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">
                      {resource.type}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Zap className={cn(
                        "w-3 h-3",
                        resource.category === "success" ? "text-success-500" : 
                        resource.category === "error" ? "text-error-500" : "text-warning-500"
                      )} />
                      <span className={cn(
                        "text-[9px] font-bold uppercase tracking-widest",
                        resource.category === "success" ? "text-success-500" : 
                        resource.category === "error" ? "text-error-500" : "text-warning-500"
                      )}>
                        {resource.category === "success" ? "Operativo" : resource.category === "error" ? "En Alerta" : "En Observación"}
                      </span>
                    </div>
                  </div>
                </div>

                <h3 className="text-heading-6 font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">
                  {resource.name}
                </h3>

                {/* Alarms & Footer */}
                <div className="mt-auto pt-6 border-t border-neutral-100 dark:border-white/5">
                  {resource.alarmText && (
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className={cn(
                        "w-4 h-4",
                        resource.category === "error" ? "text-error-500" : "text-warning-500"
                      )} />
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        resource.category === "error" ? "text-error-500" : "text-warning-500"
                      )}>
                        {resource.alarmText}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between gap-4">
                    <p className={cn(
                      "text-[10px] font-medium leading-relaxed italic",
                      resource.category === "success" ? "text-success-500/80" : "text-neutral-500"
                    )}>
                      {resource.description}
                    </p>
                    <Info className="w-4 h-4 text-neutral-300 dark:text-white/10 shrink-0 mt-0.5" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      {/* MODAL: DETALLE DEL RECURSO */}
      <Modal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        title={`Detalle del Recurso: ${selectedResource?.name || ""}`}
        size="lg"
        className="dark:bg-[#050b18] border-primary-500/10"
      >
        <div className="flex flex-col gap-8 py-4">
          
          {/* Top Info Cards */}
          <div className="grid grid-cols-3 gap-4">
            <Card padding="p-6" radius="rounded-[32px]" className="bg-neutral-50 dark:bg-black/20 border-neutral-100 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:bg-black/30 transition-all duration-500">
              <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3 block">Estado Operativo</span>
              <div className="flex items-center gap-2">
                <div className={cn(
                  "w-2.5 h-2.5 rounded-full shadow-glow-sm",
                  selectedResource?.category === "success" ? "bg-success-500 shadow-success-500/50" :
                  selectedResource?.category === "error" ? "bg-error-500 shadow-error-500/50" : "bg-warning-500 shadow-warning-500/50"
                )} />
                <span className="text-body-sm font-bold">{selectedResource?.status === "AVAILABLE" ? "Activo" : "Estable"}</span>
              </div>
            </Card>
            <Card padding="p-6" radius="rounded-[32px]" className="bg-neutral-50 dark:bg-black/20 border-neutral-100 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:bg-black/30 transition-all duration-500">
              <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3 block">Uso de Red</span>
              <div className="flex items-center gap-2 text-primary-500">
                <ActivityIcon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-body-sm font-bold tracking-tight">Tráfico Activo</span>
              </div>
            </Card>
            <Card padding="p-6" radius="rounded-[32px]" className="bg-neutral-50 dark:bg-black/20 border-neutral-100 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:bg-black/30 transition-all duration-500">
              <span className="text-[9px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3 block">Versión</span>
              <div className="flex items-center gap-2">
                <Settings className="w-4 h-4 text-neutral-400 group-hover:rotate-45 transition-transform" />
                <span className="text-body-sm font-bold">V 1.4.2</span>
              </div>
            </Card>
          </div>

          {/* Alarm Section */}
          {selectedResource?.category !== "success" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Tag 
                  variant="error" 
                  size="XS" 
                  label={`ALARMAS DETECTADAS (1)`} 
                  className="bg-transparent border-transparent text-error-500 font-bold tracking-[0.2em] p-0"
                  iconLeft={<ShieldAlert className="w-4 h-4 mr-2" />}
                />
              </div>
              <div className="bg-error-500/5 dark:bg-error-500/10 border border-error-500/20 rounded-xl p-6 relative overflow-hidden">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <h4 className="text-body-sm font-bold text-error-500 uppercase tracking-wide">Corte de Fibra Óptica</h4>
                    <Button 
                      variant="error" 
                      size="xs" 
                      className="w-fit text-[8px] h-6 bg-error-500/10 hover:bg-error-500/20 px-2 py-0.5 rounded border border-error-500/20 transition-colors uppercase"
                    >
                      Clic para gestionar
                    </Button>
                  </div>
                  <span className="text-[9px] text-neutral-500 dark:text-neutral-600 tabular-nums">15/5/2026, 2:04:31 p. m.</span>
                </div>
                <p className="text-[11px] text-error-400/80 italic font-medium leading-relaxed max-w-[320px]">
                  {selectedResource?.description}
                </p>
              </div>
            </div>
          )}

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 gap-12 pt-4 border-t border-neutral-100 dark:border-white/5">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] mb-6">Identificación</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline group">
                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">ID de Recurso:</span>
                  <span className="text-[11px] font-bold tracking-wider">{selectedResource?.resourceId || "N/A"}</span>
                </div>
                <div className="flex justify-between items-baseline group">
                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">Categoría:</span>
                  <span className="text-[11px] font-bold">{selectedResource?.categoryLabel || "N/A"}</span>
                </div>
                <div className="flex justify-between items-baseline group">
                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">Tipo:</span>
                  <span className="text-[11px] font-bold font-mono text-neutral-500">{selectedResource?.logicalType || "N/A"}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.2em] mb-6">Especificación</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline group">
                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">Modelo:</span>
                  <span className="text-[11px] font-bold text-neutral-500">N/A</span>
                </div>
                <div className="flex justify-between items-baseline group">
                  <span className="text-[11px] text-neutral-400 group-hover:text-neutral-300 transition-colors">ID Spec:</span>
                  <span className="text-[11px] font-bold text-neutral-500">N/A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex gap-4 pt-6 border-t border-neutral-100 dark:border-white/5">
            <Button 
              variant="neutral" 
              className="flex-1 h-12 rounded-xl"
              onClick={handleConfirmUpdate}
            >
              <Pencil className="w-4 h-4 mr-2" />
              Actualizar Recurso
            </Button>
            <Button 
              variant="error" 
              className="flex-1 h-12 rounded-xl"
              onClick={handleConfirmDelete}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Eliminar Permanente
            </Button>
          </div>
        </div>
      </Modal>

      {/* MODALES SEMÁNTICOS DE DECISIÓN (Usando DialogModal oficial) */}
      <DialogModal
        isOpen={isConfirmUpdateOpen}
        onClose={() => setIsConfirmUpdateOpen(false)}
        variant="info"
        title="Confirmar Actualización"
        description={`¿Estás seguro de que deseas guardar los cambios realizados en el recurso ${selectedResource?.name}? Esta acción actualizará los parámetros operativos en tiempo real.`}
        confirmText="Sí, Actualizar"
        cancelText="Regresar"
        onConfirm={executeUpdate}
      />

      <DialogModal
        isOpen={isConfirmDeleteOpen}
        onClose={() => setIsConfirmDeleteOpen(false)}
        variant="danger"
        title="Eliminar Recurso"
        description={`¿Estás seguro de que deseas eliminar permanentemente el recurso ${selectedResource?.name}? Esta acción no se puede deshacer y podría afectar la topología de la red.`}
        confirmText="Sí, Eliminar"
        cancelText="Cancelar"
        onConfirm={executeDelete}
      />

      {/* TOAST NOTIFICATION (Simple feedback) */}
      {showToast && (
        <div className="fixed bottom-8 right-8 z-[200] animate-in slide-in-from-right-10 duration-500">
          <div className={cn(
            "px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border backdrop-blur-md",
            toastMessage.variant === "success" 
              ? "bg-success-500/10 border-success-500/20 text-success-500" 
              : "bg-error-500/10 border-error-500/20 text-error-500"
          )}>
            {toastMessage.variant === "success" ? <CheckCircle2 className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            <span className="text-sm font-bold tracking-tight">{toastMessage.title}</span>
            <button onClick={() => setShowToast(false)} className="ml-4 hover:opacity-70 transition-opacity">
              <X className="w-4 h-4" />
            </button>
          </div>
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
