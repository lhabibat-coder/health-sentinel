
import DashboardCard from "./DashboardCard";
type DashboardGridProps = {
  threatLevel: string;
  claimsToday: number;
  activeAlerts: number;
  narratives: number;
};
export default function DashboardGrid({
  threatLevel,
  claimsToday,
  activeAlerts,
  narratives,
}: DashboardGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        marginTop: "30px",
      }}
    >
      <DashboardCard
  title="⚠ Overall Risk"
  value={threatLevel}
  subtitle={
    threatLevel === "HIGH"
      ? "Elevated misinformation activity"
      : "Situation under control"
  }
  color={threatLevel === "HIGH" ? "#EF4444" : "#22C55E"}
/>

     <DashboardCard
  title="📈 Claims Today"
  value={claimsToday.toString()}
  subtitle="+14 compared with yesterday"
  color="#10B981"
/>

     <DashboardCard
  title="🚨 Active Alerts"
  value={activeAlerts.toString()}
  subtitle="Requires monitoring"
  color="#F59E0B"
/>


     <DashboardCard
  title="🧠 Narratives"
  value={narratives.toString()}
  subtitle="New misinformation themes"
  color="#3B82F6"
/>
    </div>
  );
}