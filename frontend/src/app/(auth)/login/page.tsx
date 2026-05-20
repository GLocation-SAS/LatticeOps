import LoginPage from "@/modules/auth/pages/LoginPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Iniciar sesión | QA Automatization",
  description: "Accede a tu cuenta de QA Automatization para gestionar tus pruebas.",
};

export default function Page() {
  return <LoginPage />;
}


