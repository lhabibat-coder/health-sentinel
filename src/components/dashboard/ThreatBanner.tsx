export default function ThreatBanner() {
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
            Threat Level: <strong style={{ color: "#EF4444" }}>HIGH</strong>
          </div>
        </div>
      </div>
    </div>
  );
}