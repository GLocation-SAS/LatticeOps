"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Toast } from "../components/ui/Toast";

type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastItem extends ToastOptions {
  id: string;
}

interface ToastContextType {
  show: (options: ToastOptions) => void;
  hide: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const hide = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback(
    ({ title, description, variant = "info", duration = 5000 }: ToastOptions) => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, title, description, variant, duration }]);

      if (duration !== Infinity) {
        setTimeout(() => {
          hide(id);
        }, duration);
      }
    },
    [hide]
  );

  return (
    <ToastContext.Provider value={{ show, hide }}>
      {children}
      {/* Toast Container */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 pointer-events-none items-end">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto animate-in slide-in-from-right-full fade-in duration-300"
          >
            <Toast
              variant={toast.variant}
              title={toast.title}
              description={toast.description}
              onClose={() => hide(toast.id)}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}


