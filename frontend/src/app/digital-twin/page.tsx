import DigitalTwinPage from "@/modules/digital-twin/pages/DigitalTwinPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gemelo Digital | LatticeOps",
  description: "Interacción con la red usando lenguaje natural y visualización de topología.",
};

export default function Page() {
  return <DigitalTwinPage />;
}
