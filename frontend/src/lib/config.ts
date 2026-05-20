/**
 * Application Configuration
 * Centralized configuration constants for the application.
 */

export const APP_CONFIG = {
  name: "DesignEngine",
  description: "Plataforma de diseño colaborativo impulsada por IA",
  version: "0.1.0",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
} as const;

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  dashboard: "/dashboard",
} as const;

export const STORAGE_KEYS = {
  theme: "de-theme",
  authToken: "de-auth-token",
  user: "de-user",
} as const;
