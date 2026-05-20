import TimeMachinePage from "@/modules/time-machine/pages/TimeMachinePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Máquina del Tiempo | LatticeOps",
  description: "Auditoría histórica de red y análisis temporal de alarmas.",
};

export default function Page() {
  return <TimeMachinePage />;
}
