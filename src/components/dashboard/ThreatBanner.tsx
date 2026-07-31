import { useIntelligence } from "../../context/IntelligenceContext";
export default function ThreatBanner() {
  const {
    threatLevel,
    setThreatLevel,
  } = useIntelligence();
    
  return (
    <div
      style={{
        background: "#172554",
        border: "1px solid #1E40AF",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              color: "#93C5FD",
            }}
          >
            🛡 Health Sentinel Status
          </h2>

          <p
            style={{
              marginTop: "8px",
              color: "#CBD5E1",
            }}
          >
            Monitoring public health misinformation across Nigeria
          </p>
        </div>

        <div
          style={{
            textAlign: "right",
          }}
        >
          <div
            style={{
              color: "#22C55E",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            ● SYSTEM ONLINE
          </div>

          <div
            style={{
              color: "#CBD5E1",
              marginTop: "8px",
            }}
          >
            <div>
  Threat Level:{" "}
  <strong style={{ color: "#EF4444" }}>
    {threatLevel}
  </strong>
</div>

<div style={{ marginTop: "15px" }}>
  <button
    onClick={() =>
  setThreatLevel(
    threatLevel === "HIGH" ? "LOW" : "HIGH"
  )
}
    style={{
      padding: "10px 16px",
      border: "none",
      borderRadius: "8px",
      background: "var(--primary)",
      color: "white",
      cursor: "pointer",
    }}
  >
    Simulate Lower Risk
  </button>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}