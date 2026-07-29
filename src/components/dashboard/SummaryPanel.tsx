type SummaryPanelProps = {
  threatLevel: string;
};

export default function SummaryPanel({
  threatLevel,
}: SummaryPanelProps) {
  return (
    <div
      style={{
        background: "#1E293B",
        marginTop: "30px",
        padding: "25px",
        borderRadius: "12px",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          color: "#10B981",
        }}
      >
        Executive Intelligence Summary
      </h2>

      <p
        style={{
          color: "#CBD5E1",
          lineHeight: "1.8",
        }}
      >
        Current Threat Level:{" "}
        <strong style={{ color: "#EF4444" }}>
          {threatLevel}
        </strong>
      </p>
    </div>
  );
}