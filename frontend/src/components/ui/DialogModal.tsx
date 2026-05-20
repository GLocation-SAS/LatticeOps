"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { X, AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface DialogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  variant?: "danger" | "warning" | "info" | "success";
  className?: string;
}

export function DialogModal({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  variant = "info",
  className,
}: DialogModalProps) {
  if (!isOpen) return null;

  const variantStyles = {
    danger: {
      accent: "bg-error-500",
      icon: <AlertCircle className="text-error-500" />,
      btn: "error" as const,
    },
    warning: {
      accent: "bg-warning-500",
      icon: <AlertCircle className="text-warning-500" />,
      btn: "warning" as const,
    },
    info: {
      accent: "bg-primary-700",
      icon: <AlertCircle className="text-primary-700" />,
      btn: "primary" as const,
    },
    success: {
      accent: "bg-success-500",
      icon: <AlertCircle className="text-success-500" />,
      btn: "success" as const,
    },
  };

  const style = variantStyles[variant];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-neutral-950/40 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div
        className={cn(
          "relative w-full max-w-md bg-white dark:bg-neutral-100 rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 border border-neutral-100 dark:border-neutral-300",
          className
        )}
      >
        {/* Accent Top Bar */}
        <div className={cn("h-1.5 w-full", style.accent)} />

        <div className="p-8">
          <div className="flex flex-col items-center text-center mb-8">
            <div className="p-4 bg-neutral-50 dark:bg-neutral-200 rounded-[24px] mb-6">
              {React.cloneElement(style.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-heading font-bold italic tracking-tight text-neutral-900 dark:text-white leading-tight">
                {title}
              </h3>
              <p className="text-base font-sans font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-[320px] mx-auto">
                {description}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
            <Button
              variant="neutral"
              className="w-full sm:w-auto min-w-[140px]"
              onClick={onClose}
            >
              {cancelText}
            </Button>
            <Button
              variant={style.btn as any}
              className="w-full sm:w-auto min-w-[140px]"
              onClick={() => {
                onConfirm();
                onClose();
              }}
            >
              {confirmText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}




