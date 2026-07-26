import DashboardCard from "./DashboardCard";

export default function DashboardGrid() {
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
        title="Overall Risk"
        value="HIGH"
        color="#EF4444"
      />

      <DashboardCard
        title="Claims Today"
        value="187"
        color="#10B981"
      />

      <DashboardCard
        title="Active Alerts"
        value="12"
        color="#F59E0B"
      />

      <DashboardCard
        title="Emerging Narratives"
        value="8"
        color="#3B82F6"
      />
    </div>
  );
}