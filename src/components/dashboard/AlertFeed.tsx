type Alert = {
  severity: string;
  message: string;
  time: string;
};

type AlertFeedProps = {
  alerts: Alert[];
};

export default function AlertFeed({
  alerts,
}: AlertFeedProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        padding: "20px",
        borderRadius: "12px",
        marginTop: "25px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "white",
        }}
      >
        🚨 Live Alert Feed
      </h2>

      {alerts.map((alert, index) => (
        <div
          key={index}
          style={{
            padding: "12px 0",
            borderBottom:
              index !== alerts.length - 1
                ? "1px solid #334155"
                : "none",
          }}
        >
          <strong
            style={{
              color:
                alert.severity === "CRITICAL"
                  ? "#DC2626"
                  : alert.severity === "HIGH"
                  ? "#F59E0B"
                  : "#10B981",
            }}
          >
            {alert.severity}
          </strong>

          <div
            style={{
              color: "white",
              marginTop: "4px",
            }}
          >
            {alert.message}
          </div>

          <small
            style={{
              color: "#94A3B8",
            }}
          >
            {alert.time}
          </small>
        </div>
      ))}
    </div>
  );
}