import { useState } from "react";
type DashboardCardProps = {
  title: string;
  value: string;
  color: string;
  subtitle: string;
};

export default function DashboardCard({
  title,
  value,
  color,
  subtitle,
}: DashboardCardProps) {const [isHovered, setIsHovered] = useState(false);
  return (
    <div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{
    background: "var(--card)",
    borderRadius: "var(--radius)",
    padding: "20px",
    borderLeft: `6px solid ${color}`,
    boxShadow: isHovered
      ? "0 12px 30px rgba(0,0,0,0.45)"
      : "var(--shadow)",
    transform: isHovered
      ? "translateY(-6px)"
      : "translateY(0)",
    transition: "all 0.25s ease",
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
      <p
  style={{
    marginTop: "8px",
    color: "#94A3B8",
    fontSize: "14px",
  }}
>
  {subtitle}
</p>
    </div>
  );
}