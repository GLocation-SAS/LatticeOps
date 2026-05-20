"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronUp,
  AlertCircle,
  X,
  CheckCircle2,
} from "lucide-react";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onChange"
> {
  label?: string;
  notes?: string;
  hint?: string;
  iconLeft?: React.ReactNode;
  options?: DropdownOption[];
  value?: string;
  placeholder?: string;
  sizeVariant?: "lg" | "md" | "sm" | "xs";
  currentState?:
    | "Default"
    | "Hover"
    | "Active"
    | "Active Hover"
    | "Active Selected"
    | "Collapsed"
    | "Disabled"
    | "Error Filled"
    | "Error Filled Hover"
    | "Success";
  hoveredOptionValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
}

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      label,
      notes,
      hint,
      iconLeft,
      options = [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
        { label: "Option 4", value: "4" },
        { label: "Option 5", value: "5" },
      ],
      value,
      placeholder = "Seleccionar...",
      sizeVariant = "md",
      currentState = "Default",
      hoveredOptionValue,
      onChange,
      disabled,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(currentState.includes("Active"));
    const [selectedValue, setSelectedValue] = React.useState(value);
    const [isHovered, setIsHovered] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState("");
    const containerRef = React.useRef<HTMLDivElement>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
      setIsOpen(currentState.includes("Active"));
    }, [currentState]);

    React.useEffect(() => {
      if (value !== undefined) setSelectedValue(value);
    }, [value]);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          if (!currentState.includes("Active")) {
            setIsOpen(false);
            setSearchTerm("");
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [currentState]);

    const isActive = isOpen || currentState.includes("Active");
    const isError = currentState.includes("Error");
    const isSuccess = currentState === "Success";

    const effectiveState = React.useMemo(() => {
      if (disabled || currentState === "Disabled") return "Disabled";
      if (isActive) {
        if (selectedValue || currentState === "Active Selected")
          return "Active Selected";
        return isHovered ? "Active Hover" : "Active";
      }
      if (isError) return isHovered ? "Error Filled Hover" : "Error Filled";
      if (isSuccess) return "Success";
      if (selectedValue || currentState?.includes("Collapsed"))
        return isHovered ? "Collapsed Hover" : "Collapsed";
      return isHovered ? "Hover" : "Default";
    }, [
      disabled,
      currentState,
      isError,
      isSuccess,
      isActive,
      isHovered,
      selectedValue,
    ]);

    const filteredOptions = React.useMemo(() => {
      return options.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }, [options, searchTerm]);

    const displayValue = React.useMemo(() => {
      const currentVal = selectedValue || value;
      if (currentVal) {
        return (
          options.find((opt) => opt.value === currentVal)?.label || currentVal
        );
      }
      return placeholder;
    }, [selectedValue, value, options, placeholder]);

    const sizeConfigs = {
      md: "h-[44px] text-sm",
      xs: "h-[36px] text-xs",
      sm: "h-[40px] text-sm",
      lg: "h-[56px] text-base",
    };

    const stateStyles = {
      Default:
        "bg-white dark:bg-neutral-100 border-neutral-200 dark:border-neutral-300 border-[2px] text-neutral-600 dark:text-neutral-700",
      Hover:
        "bg-white dark:bg-neutral-100 border-primary-500 border-[2px] text-neutral-900 dark:text-white",
      Active:
        "bg-white dark:bg-neutral-100 border-primary-500 border-[2px] text-neutral-900 dark:text-white",
      "Active Hover":
        "bg-white dark:bg-neutral-100 border-primary-500 border-[2px] text-neutral-900 dark:text-white",
      "Active Selected":
        "bg-white dark:bg-neutral-100 border-primary-500 border-[2px] text-neutral-900 dark:text-white",
      Collapsed:
        "bg-white dark:bg-neutral-100 border-neutral-200 dark:border-neutral-300 border-[2px] text-neutral-900 dark:text-white",
      Disabled:
        "bg-neutral-50 dark:bg-neutral-200 border-transparent border-[2px] text-neutral-400 dark:text-neutral-600 cursor-not-allowed opacity-100",
      "Error Filled":
        "bg-error-50 dark:bg-error-900/10 border-error-500 border-[2px] text-neutral-900 dark:text-white",
      "Error Filled Hover":
        "bg-error-50 dark:bg-error-900/10 border-error-500 border-[2px] text-neutral-900 dark:text-white",
      Success:
        "bg-success-50 dark:bg-success-900/10 border-success-500 border-[2px] text-neutral-900 dark:text-white",
    };

    const iconColorStyles = {
      Default: "text-neutral-400",
      Hover: "text-primary-500",
      Active: "text-primary-500",
      "Active Hover": "text-primary-500",
      "Active Selected": "text-primary-500",
      Collapsed: "text-primary-600",
      Disabled: "text-neutral-300",
      "Error Filled": "text-error-500",
      "Error Filled Hover": "text-error-500",
      Success: "text-success-500",
    };

    const handleToggle = () => {
      if (effectiveState === "Disabled") return;
      if (!isOpen) {
        setIsOpen(true);
        setTimeout(() => inputRef.current?.focus(), 0);
      } else {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    const handleSelect = (val: string) => {
      setSelectedValue(val);
      setIsOpen(false);
      setSearchTerm("");
      onChange?.(val);
    };

    const handleClear = (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedValue(undefined);
      setSearchTerm("");
      onChange?.("");
    };

    return (
      <div
        className={cn("flex flex-col gap-2 relative w-full", className)}
        ref={(node) => {
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
          containerRef.current = node;
        }}
        {...props}
      >
        {label && (
          <label className="text-xs font-heading font-bold text-neutral-400 text-left px-1">
            {label}
          </label>
        )}
        <div
          onClick={handleToggle}
          onMouseEnter={() => !disabled && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={cn(
            "flex items-center transition-all duration-200 rounded-xl cursor-pointer px-6 gap-4",
            !disabled && effectiveState !== "Disabled" && "input-hover-effect",
            isError
              ? "[--input-glow:rgba(239,68,68,0.25)] [--hover-border-color:var(--color-error-500)] [--input-bottom-color:var(--color-error-200)]"
              : isSuccess
                ? "[--input-glow:rgba(53,150,105,0.25)] [--hover-border-color:var(--color-success-500)] [--input-bottom-color:var(--color-success-200)]"
                : "[--input-glow:rgba(30,153,196,0.15)] [--hover-border-color:var(--color-primary-500)] [--input-bottom-color:var(--color-primary-200)] dark:[--input-glow:rgba(87,201,230,0.2)]",
            sizeConfigs[sizeVariant as keyof typeof sizeConfigs],
            stateStyles[effectiveState as keyof typeof stateStyles] ||
              stateStyles["Default"],
          )}
        >
          {iconLeft && (
            <div
              className={cn(
                "flex items-center justify-center shrink-0",
                iconColorStyles[effectiveState as keyof typeof iconColorStyles],
              )}
            >
              {iconLeft}
            </div>
          )}
          <div className="flex-1 relative flex items-center h-full min-w-0">
            {isActive ? (
              <input
                ref={inputRef}
                type="text"
                className={cn(
                  "w-full bg-transparent border-none outline-none font-medium text-neutral-600 dark:text-neutral-700 placeholder-neutral-400 dark:placeholder-neutral-600 p-0",
                  "focus:ring-0",
                )}
                placeholder={
                  displayValue === placeholder ? placeholder : displayValue
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span
                className={cn(
                  "w-full text-left font-medium outline-none truncate select-none",
                  effectiveState === "Disabled"
                    ? "text-neutral-400 dark:text-neutral-600"
                    : "text-neutral-600 dark:text-neutral-700",
                )}
              >
                {displayValue}
              </span>
            )}
          </div>
          <div
            className={cn(
              "flex items-center gap-[5px] shrink-0 transition-colors",
              iconColorStyles[effectiveState as keyof typeof iconColorStyles] ||
                iconColorStyles["Default"],
            )}
          >
            {(selectedValue ||
              currentState === "Active Selected" ||
              currentState?.includes("Collapsed")) &&
              !isError &&
              !isSuccess && (
                <>
                  <X
                    className="w-[18px] h-[18px] cursor-pointer hover:opacity-70 transition-opacity"
                    onClick={handleClear}
                  />
                  <div className="w-[1.5px] h-[14px] bg-current rounded-full opacity-30" />
                </>
              )}
            {isError && (
              <>
                <AlertCircle className="w-5 h-5" />
                <div className="w-[2px] h-[14px] bg-current rounded-full mx-1" />
              </>
            )}
            {isSuccess && (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <div className="w-[2px] h-[14px] bg-current rounded-full mx-1" />
              </>
            )}
            <div className="flex items-center justify-center transition-transform duration-200">
              {isActive ? (
                <ChevronUp className="w-6 h-6" />
              ) : (
                <ChevronDown className="w-6 h-6" />
              )}
            </div>
          </div>
        </div>
        {notes && (
          <p className="text-xs px-1 text-left text-neutral-500">{notes}</p>
        )}
        {isActive && (
          <div className="absolute top-[calc(100%+8px)] left-0 w-full border-[2.5px] border-primary-500 rounded-[8px] z-[60] overflow-hidden p-0 shadow-2xl bg-white dark:bg-neutral-100">
            <div className="flex flex-col max-h-[240px] overflow-y-auto">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((opt) => {
                  const isForceHovered =
                    effectiveState === "Active Hover" &&
                    opt.value === hoveredOptionValue;
                  const isSelected = selectedValue === opt.value;
                  return (
                    <div
                      key={opt.value}
                      className={cn(
                        "w-full px-[16px] py-[12px] flex items-center justify-start cursor-pointer transition-colors duration-150",
                        isSelected
                          ? "bg-primary-500 text-white"
                          : isForceHovered
                            ? "bg-neutral-100 text-primary-500 dark:bg-neutral-200 dark:text-primary-400"
                            : "bg-white text-neutral-600 hover:bg-primary-50 hover:text-primary-500 dark:bg-neutral-100 dark:text-neutral-700 dark:hover:bg-neutral-200 dark:hover:text-primary-400",
                      )}
                      onClick={() => handleSelect(opt.value)}
                    >
                      <span className="font-medium text-[14px] leading-5">
                        {opt.label}
                      </span>
                    </div>
                  );
                })
              ) : (
                <div className="px-4 py-3 text-sm text-neutral-500 italic">
                  No hay coincidencias
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";




