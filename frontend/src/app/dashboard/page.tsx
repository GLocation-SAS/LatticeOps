"use client";

import { AuthGuard } from "@/guards/AuthGuard";
import { DashboardPage as DashboardModulePage } from "@/modules/dashboard/pages/DashboardPage";

export default function DashboardPage() {
  return <DashboardModulePage />;
}


