import UIKitPage from "@/modules/uikit/pages/UIKitPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI Kit | LatticeOps",
  description: "Reference guide for the DesignEngine design system.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Page() {
  return <UIKitPage />;
}


