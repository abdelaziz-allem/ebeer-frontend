import { Metadata } from "next";
import AnalyticDashboard from "./analytic-dashboard";

export const metadata: Metadata = {
  title: "Farm & Shop Analytics Dashboard",
  description: "Comprehensive analytics for farmers and shop administrators",
};

export default function DashboardPage() {
  return <AnalyticDashboard />;
}
