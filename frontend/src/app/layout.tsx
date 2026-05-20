import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { ToastProvider } from "@/context/ToastContext";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "LatticeOps — Design System",
  description:
    "Plataforma de diseño colaborativo impulsada por IA. Crea, itera y despliega diseños de forma más rápida y eficiente.",
  keywords: ["design", "engine", "AI", "colaborativo", "diseño", "plataforma"],
  authors: [{ name: "LatticeOps Team" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full", "antialiased", montserrat.variable, nunito.variable)}
    >
      <body className={cn("min-h-full flex flex-col font-sans", montserrat.variable, nunito.variable)}>
        <AuthProvider>
          <ThemeProvider defaultTheme="light" storageKey="ui-theme">
            <ToastProvider>
              <div className="flex flex-1 flex-col">{children}</div>
            </ToastProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}


