"use client";

import React from "react";

import { Button } from "@/components/ui/Button";

import { Badge } from "@/components/ui/Badge";

import { ChevronLeft, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";

import { PrimaryButtonMatrix } from "./PrimaryButtonMatrix";

import { SecondaryButtonMatrix } from "./SecondaryButtonMatrix";

import { ErrorButtonMatrix } from "./ErrorButtonMatrix";

import { SuccessButtonMatrix } from "./SuccessButtonMatrix";

import { WarningButtonMatrix } from "./WarningButtonMatrix";

import { InfoButtonMatrix } from "./InfoButtonMatrix";

import { NeutralButtonMatrix } from "./NeutralButtonMatrix";

import { AccordionMatrix } from "./AccordionMatrix";

import { TextInputMatrix } from "./TextInputMatrix";

import { TextareaMatrix } from "./TextareaMatrix";

import { SearchInputMatrix } from "./SearchInputMatrix";

import { DropdownMatrix } from "./DropdownMatrix";

import { ModalMatrix } from "./ModalMatrix";

import { DialogModalMatrix } from "./DialogModalMatrix";

import { NotificationMatrix } from "./NotificationMatrix";

import { TagMatrix } from "./TagMatrix";

import { CheckboxMatrix } from "./CheckboxMatrix";

import { RadioButtonMatrix } from "./RadioButtonMatrix";

import { ToggleMatrix } from "./ToggleMatrix";

import { BreadcrumbMatrix } from "./BreadcrumbMatrix";

import { PaginationMatrix } from "./PaginationMatrix";

import { TabsMatrix } from "./TabsMatrix";

import { AvatarMatrix } from "./AvatarMatrix";

import { TableMatrix } from "./TableMatrix";

import { BadgeMatrix } from "./BadgeMatrix";

import { TooltipMatrix } from "./TooltipMatrix";

import { ToastMatrix } from "./ToastMatrix";

import { CardMatrix } from "./CardMatrix";

export function ComponentsSection() {
  return (
    <section id="components" className="space-y-24">
      
      {/* Intro */}
      <div className="px-8 max-w-7xl">
        
        <h2 className="text-4xl font-bold tracking-tighter text-primary-500 dark:text-primary-700 underline">
          Arquitectura de componentes
        </h2>
        <p className="text-neutral-900 mt-2">
          
          Componentes de UI construidos con tokens de diseño de alta fidelidad y
          lógica modular.
        </p>
      </div>
      {/* Buttons System */}
      <div id="buttons" className="scroll-mt-24 space-y-16">
        
        <PrimaryButtonMatrix /> <SecondaryButtonMatrix /> <ErrorButtonMatrix />
        <SuccessButtonMatrix /> <WarningButtonMatrix /> <InfoButtonMatrix />
        <NeutralButtonMatrix />
      </div>
      {/* Accordion System */}
      <div id="accordion" className="scroll-mt-24">
        
        <AccordionMatrix />
      </div>
      {/* Inputs System */}
      <div id="inputs" className="scroll-mt-24">
        
        <TextInputMatrix />
      </div>
      {/* Textareas System */}
      <div id="textareas" className="scroll-mt-24">
        
        <TextareaMatrix />
      </div>
      {/* Search Input */}
      <div id="search" className="scroll-mt-24">
        
        <SearchInputMatrix />
      </div>
      {/* Dropdowns */}
      <div id="dropdowns" className="scroll-mt-24">
        
        <DropdownMatrix />
      </div>
      {/* Badges */}
      <div id="badges" className="scroll-mt-24">
        
        <BadgeMatrix />
      </div>
      {/* Modals */}
      <div id="modals" className="scroll-mt-24">
        
        <ModalMatrix /> <DialogModalMatrix />
      </div>
      {/* Notifications */}
      <div id="notifications" className="scroll-mt-24">
        
        <NotificationMatrix />
      </div>
      {/* Tags */}
      <div id="tags" className="scroll-mt-24">
        
        <TagMatrix />
      </div>
      {/* Checkboxes */}
      <div id="checkboxes" className="scroll-mt-24">
        
        <CheckboxMatrix />
      </div>
      {/* Radio Buttons */}
      <div id="radio" className="scroll-mt-24">
        
        <RadioButtonMatrix />
      </div>
      {/* Toggles */}
      <div id="toggles" className="scroll-mt-24">
        
        <ToggleMatrix />
      </div>
      {/* Breadcrumbs */}
      <div id="breadcrumbs" className="scroll-mt-24">
        
        <BreadcrumbMatrix />
      </div>
      {/* Pagination */}
      <div id="pagination" className="scroll-mt-24">
        
        <PaginationMatrix />
      </div>
      {/* Tabs */}
      <div id="tabs" className="scroll-mt-24">
        
        <TabsMatrix />
      </div>
      {/* Avatars */}
      <div id="avatars" className="scroll-mt-24">
        
        <AvatarMatrix />
      </div>
      {/* Tables */}
      <div id="tables" className="scroll-mt-24">
        
        <TableMatrix />
      </div>
      {/* Tooltips */}
      <div id="tooltips" className="scroll-mt-24">
        
        <TooltipMatrix />
      </div>
      {/* Toasts */}
      <div id="toasts" className="scroll-mt-24">
        
        <ToastMatrix />
      </div>
      {/* Cards */}
      <div id="cards" className="scroll-mt-24">
        
        <CardMatrix />
      </div>
    </section>
  );
}





