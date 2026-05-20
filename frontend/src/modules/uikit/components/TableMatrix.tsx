"use client";

import { SpecFooter } from "./SpecFooter";

import React from "react";

import { Pencil, Trash2 } from "lucide-react";

import { Table } from "@/components/ui/Table";

import { Button } from "@/components/ui/Button";

import { Tooltip } from "@/components/ui/Tooltip";

import { Badge } from "@/components/ui/Badge";

const COLUMNS = [
  {
    key: "id",
    label: "ID",
  },

  {
    key: "user",
    label: "Usuario",
  },

  {
    key: "email",
    label: "Email",
  },

  {
    key: "role",
    label: "Rol",
  },

  {
    key: "status",
    label: "Estado",
  },

  {
    key: "actions",
    label: "Acciones",
  },
];

const DATA = [
  {
    id: "#1234",
    user: "Alex Rivera",
    email: "alex@designengine.io",
    role: "Admin",
    status: "Activo",
    actions: (
      <div className="flex items-start gap-2">
        
        <Tooltip content="Editar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Pencil className="w-4 h-4 text-primary-500" />
          </Button>
        </Tooltip>
        <Tooltip content="Eliminar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Trash2 className="w-4 h-4 text-error-500" />
          </Button>
        </Tooltip>
      </div>
    ),
  },

  {
    id: "#1235",
    user: "Maria Chen",
    email: "maria@designengine.io",
    role: "Editor",
    status: "Inactivo",
    actions: (
      <div className="flex items-start gap-2">
        
        <Tooltip content="Editar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Pencil className="w-4 h-4 text-primary-500" />
          </Button>
        </Tooltip>
        <Tooltip content="Eliminar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Trash2 className="w-4 h-4 text-error-500" />
          </Button>
        </Tooltip>
      </div>
    ),
  },

  {
    id: "#1236",
    user: "John Smith",
    email: "john@designengine.io",
    role: "Viewer",
    status: "Activo",
    actions: (
      <div className="flex items-start gap-2">
        
        <Tooltip content="Editar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Pencil className="w-4 h-4 text-primary-500" />
          </Button>
        </Tooltip>
        <Tooltip content="Eliminar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Trash2 className="w-4 h-4 text-error-500" />
          </Button>
        </Tooltip>
      </div>
    ),
  },

  {
    id: "#1237",
    user: "Sarah Connor",
    email: "sarah@designengine.io",
    role: "Admin",
    status: "Pendiente",
    actions: (
      <div className="flex items-start gap-2">
        
        <Tooltip content="Editar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Pencil className="w-4 h-4 text-primary-500" />
          </Button>
        </Tooltip>
        <Tooltip content="Eliminar">
          
          <Button variant="ghost" size="icon" className="w-8 h-8">
            
            <Trash2 className="w-4 h-4 text-error-500" />
          </Button>
        </Tooltip>
      </div>
    ),
  },
];

export function TableMatrix() {
  return (
    <div className="space-y-32 mt-16 pb-32 max-w-7xl px-8">
      
      {/* Header Section */}
      <div className="space-y-6">
        
        <div className="flex items-start gap-3">
          
          <Badge className="bg-primary-500/10 text-primary-600 border-none font-heading font-bold px-4 py-1.5 rounded-xl text-[11px]">
            
            Data Structures
          </Badge>
        </div>
        <div className="space-y-2">
          
          <h2 className="text-5xl font-heading font-bold tracking-tight text-neutral-900 italic">
            
            Table <span className="text-primary-500">Architecture</span>
          </h2>
          <p className="text-neutral-500 max-w-3xl text-xl leading-relaxed font-sans">
            
            Componente de tabla reactivo y accesible con soporte para estados de
            hover y modo oscuro. Diseñado para manejar grandes volúmenes de
            datos con una legibilidad impecable.
          </p>
        </div>
      </div>
      <div className="space-y-32">
        
          <div className="space-y-12">
            {/* Section Header */}
            <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
              <h4 className="text-2xl font-heading font-bold tracking-tight text-neutral-900">
                Default State
              </h4>
            </div>
            <Table columns={COLUMNS} data={DATA} />
          </div>
          <div className="space-y-12">
            {/* Section Header */}
            <div className="flex items-start gap-4 border-l-4 border-primary-500 pl-6">
              <h4 className="text-2xl font-heading font-bold tracking-tight text-neutral-900">
                Empty State
              </h4>
            </div>
            <Table columns={COLUMNS} data={[]} />
          </div>
      </div>
      {/* Technical Documentation Footer */}
      <SpecFooter
        specs={[
          {
            label: "Construcción",
            text: "Uso de border-collapse para una cuadrícula uniforme. El padding vertical está optimizado para mantener un balance entre densidad de información y espacio negativo.",
          },

          {
            label: "Interacción",
            text: "Estados de hover por fila integrados con transiciones suaves de 200ms. Los encabezados incluyen soporte para ordenamiento (sorting) visual.",
          },
        ]}
        compositionText="La tabla está preparada para integrarse con sistemas de filtrado complejo y paginación reactiva, asegurando que la experiencia de usuario se mantenga fluida incluso en datasets de miles de entradas."
      />
    </div>
  );
}





