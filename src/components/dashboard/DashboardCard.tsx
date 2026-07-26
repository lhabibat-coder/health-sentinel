type DashboardCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function DashboardCard({
  title,
  value,
  color,
}: DashboardCardProps) {
  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: "var(--radius)",
        padding: "20px",
        borderLeft: `6px solid ${color}`,
        boxShadow: "var(--shadow)",
        transition: "0.3s",
        minHeight: "140px",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: "var(--text-secondary)",
          fontSize: "15px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          marginTop: "15px",
          color: "var(--text)",
          fontSize: "42px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}