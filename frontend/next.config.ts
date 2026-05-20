import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

/** Carpeta del frontend (`.../frontend`), no el cwd del proceso — evita resolver paquetes desde la raíz del monorepo. */
const turboRoot = path.dirname(fileURLToPath(import.meta.url));

/**
 * Sitio en proyecto GitHub Pages (https://user.github.io/REPO/) necesita base path.
 * Ejemplo: NEXT_PUBLIC_BASE_PATH=/DesignEngine
 * En la raíz (dominio u org page) déjalo vacío.
 */
const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath = raw.replace(/\/$/, "") || "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    root: turboRoot,
  },
};

export default nextConfig;
