type Alert = {
  level: "HIGH" | "MEDIUM" | "LOW";
  title: string;
  time: string;
};

const alerts: Alert[] = [
  {
    level: "HIGH",
    title: "Lead detected in imported cosmetics",
    time: "2 mins ago",
  },
  {
    level: "MEDIUM",
    title: "Increase in misinformation on Facebook",
    time: "15 mins ago",
  },
  {
    level: "LOW",
    title: "NAFDAC advisory published",
    time: "1 hour ago",
  },
];

export default function AlertFeed() {
  return (
    <div
      style={{
        background: "var(--card)",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          color: "var(--danger)",
          marginTop: 0,
          marginBottom: "20px",
        }}
      >
        🚨 Live Alert Feed
      </h2>

      {alerts.map((alert, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #334155",
            padding: "15px 0",
          }}
        >
          <strong
            style={{
              color:
                alert.level === "HIGH"
                  ? "var(--danger)"
                  : alert.level === "MEDIUM"
                  ? "var(--warning)"
                  : "var(--info)",
            }}
          >
            {alert.level}
          </strong>

          <p
            style={{
              margin: "8px 0",
              color: "var(--text)",
            }}
          >
            {alert.title}
          </p>

          <small
            style={{
              color: "var(--text-secondary)",
            }}
          >
            {alert.time}
          </small>
        </div>
      ))}
    </div>
  );
}