import * as React from "react";
import { cn } from "@/lib/utils";
import {
  X,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Info as InfoIcon,
} from "lucide-react";

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "Info" | "Success" | "Error" | "Warning";
  title: string;
  message: string;
  time?: string;
  onClose?: () => void;
}

export const Notification = ({
  className,
  state = "Info",
  title,
  message,
  time,
  onClose,
  ...props
}: NotificationProps) => {
  const configs = {
    Info: {
      bg: "bg-white dark:bg-neutral-100",
      iconBg: "bg-info-500",
      glow: "bg-info-500/10",
      borderColor: "border-neutral-100 dark:border-neutral-300",
      icon: <InfoIcon size={16} className="text-white shrink-0" />,
      accent: "bg-info-500",
    },
    Success: {
      bg: "bg-white dark:bg-neutral-100",
      iconBg: "bg-success-500",
      glow: "bg-success-500/10",
      borderColor: "border-neutral-100 dark:border-neutral-300",
      icon: <CheckCircle2 size={16} className="text-white shrink-0" />,
      accent: "bg-success-500",
    },
    Error: {
      bg: "bg-white dark:bg-neutral-100",
      iconBg: "bg-error-500",
      glow: "bg-error-500/10",
      borderColor: "border-neutral-100 dark:border-neutral-300",
      icon: <AlertCircle size={16} className="text-white shrink-0" />,
      accent: "bg-error-500",
    },
    Warning: {
      bg: "bg-white dark:bg-neutral-100",
      iconBg: "bg-warning-500",
      glow: "bg-warning-500/10",
      borderColor: "border-neutral-100 dark:border-neutral-300",
      icon: <AlertTriangle size={16} className="text-white shrink-0" />,
      accent: "bg-warning-500",
    },
  };

  const config = configs[state];

  return (
    <div
      className={cn(
        "w-full max-w-[400px] flex flex-col relative rounded-[24px] overflow-hidden shadow-2xl border transition-all duration-500",
        config.bg,
        config.borderColor,
        className,
      )}
      {...props}
    >
      {/* Accent Top Bar */}
      <div className={cn("h-1.5 w-full", config.accent)} />

      <div className="p-6 flex flex-col gap-4 relative">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            {/* Icon Container with Halo */}
            <div className="relative flex items-center justify-center shrink-0">
              <div
                className={cn(
                  "absolute w-12 h-12 rounded-full blur-xl animate-pulse",
                  config.glow,
                )}
              />
              <div
                className={cn(
                  "relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border border-white/20",
                  config.iconBg,
                )}
              >
                {config.icon}
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-base font-heading font-bold text-neutral-900 dark:text-white tracking-tight leading-tight">
                {title}
              </h4>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {time && (
              <span className="text-[11px] font-heading font-bold text-neutral-400">
                {time}
              </span>
            )}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-200 transition-all border border-neutral-100 dark:border-neutral-300"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Message Body */}
        <div className="px-1">
          <p className="text-sm font-sans font-medium text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};




