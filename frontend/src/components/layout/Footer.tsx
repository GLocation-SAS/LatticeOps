import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-200 bg-white dark:border-surface-800 dark:bg-surface-950">
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          
          {/* Brand */}
          <div className="flex items-center gap-2">
            
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br from-primary-500 to-accent-500">
              
              <svg
                className="h-3.5 w-3.5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <span className="text-sm font-semibold text-surface-700 dark:text-surface-300">
              
              DesignEngine
            </span>
          </div>
          {/* Links */}
          <div className="flex gap-6 text-sm text-surface-500">
            
            <Link
              href="#"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              
              Documentación
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              
              Soporte
            </Link>
            <Link
              href="#"
              className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              
              Privacidad
            </Link>
          </div>
          {/* Copyright */}
          <p className="text-xs text-surface-400">
            
            ©{year}
            DesignEngine. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}


