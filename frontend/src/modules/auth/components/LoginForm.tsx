"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, LogIn, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Checkbox } from "@/components/ui/Checkbox";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="space-y-8 text-neutral-900 dark:text-white">
      {/* Form Header */}
      <div className="space-y-2">
        <h1 className="text-[34px] font-bold italic tracking-tighter text-neutral-900 dark:text-white leading-tight">
          Acceder al panel
        </h1>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-600 max-w-[320px]">
          Ingresa tus credenciales corporativas para gestionar la infraestructura de red.
        </p>
      </div>

      {/* Form Fields */}
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <Input
            label="Dirección de correo"
            type="email"
            placeholder="admin@latticeops.com"
            iconLeft={<Mail className="h-4 w-4" />}
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sizeVariant="lg"
          />

          <div className="space-y-1.5">
            <Input
              label="Contraseña"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••••"
              iconLeft={<Lock className="h-4 w-4" />}
              iconRight={
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors p-1"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              }
              className="w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sizeVariant="lg"
            />
            <div className="flex justify-between items-center pt-1.5">
              <Checkbox 
                label="Recordar mi sesión" 
                sizeVariant="S" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <button type="button" className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:text-neutral-900 dark:hover:text-white transition-colors">
                ¿Olvidaste tu clave?
              </button>
            </div>
          </div>
        </div>

        <div className="pt-1">
          <Button 
            variant="primary" 
            size="lg" 
            type="submit" 
            disabled={isLoading}
            className="w-full rounded-full font-heading font-semibold shadow-lg dark:shadow-xl shadow-primary-500/10 dark:shadow-primary-500/20 group relative overflow-hidden"
          >
            <span className={isLoading ? "opacity-0" : "flex items-center justify-center"}>
              Entrar al sistema
            </span>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-primary-600">
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              </div>
            )}
          </Button>
        </div>

        {/* Divider */}
        <div className="relative flex items-center gap-6 py-1">
          <div className="h-px flex-1 bg-neutral-200 dark:bg-white/5"></div>
          <span className="text-xs font-semibold text-neutral-400 dark:text-neutral-500">o continúa con</span>
          <div className="h-px flex-1 bg-neutral-200 dark:bg-white/5"></div>
        </div>

        {/* Social Access */}
        <div className="pt-1">
          <Button 
            variant="neutral" 
            size="lg"
            type="button"
            className="w-full rounded-full font-heading font-semibold gap-3 flex items-center justify-center border border-neutral-200 dark:border-neutral-700/80 text-neutral-700 dark:text-neutral-700 hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors duration-300"
          >
            <Globe className="h-5 w-5 text-primary-500 shrink-0" />
            <span>Entrar con Google</span>
          </Button>
        </div>
      </form>

      {/* Footer Branding */}
      <p className="text-center text-xs font-medium text-neutral-500 dark:text-neutral-700">
        ¿No tienes cuenta?{" "}
        <button className="text-primary-600 dark:text-primary-400 hover:text-neutral-900 dark:hover:text-white transition-all font-bold ml-1">
          Regístrate aquí
        </button>
      </p>
    </div>
  );
}
